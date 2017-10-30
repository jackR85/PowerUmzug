<?php

namespace app\controllers;

use app\models\Tourplanung;
use app\models\User;
use Yii;
use app\models\TourDriver;
use yii\data\ActiveDataProvider;
use yii\helpers\Json;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * TourdriverController implements the CRUD actions for TourDriver model.
 */
class TourdriverController extends Controller
{
    public function beforeAction($action)
    {
        $this->enableCsrfValidation = false;
        return parent::beforeAction($action);
    }


    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    /**
     * Lists all TourDriver models.
     * @return mixed
     */
    public function actionIndex()
    {
        $dataProvider = new ActiveDataProvider([
            'query' => TourDriver::find(),
        ]);

        return $this->render('index', [
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single TourDriver model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new TourDriver model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate(){
        $post = Yii::$app->request->getRawBody();
        $data = json_decode($post, true);

        isset($data['driverId'])?$driverId = $data['driverId']:$driverId = false;
        isset($data['tourNumber'])?$tournumber = $data['tourNumber']:$tournumber = false;

        // check if tour with driver is exists
        if($driverId && $tournumber){
            $ret = $this->checkTourExists($driverId, $tournumber);
            if($ret)
            return JSON::encode(array(
                "success" => false,
                "data" => $ret,
                "message" => "Diese Tour exestiert bereits mit diesem/n Fahrer/n"
            ));
        }


        $modelTourDriver = new TourDriver();
        $modelTourPlanung = new Tourplanung();
        $dataTourDriver = array(
            "tourNumber" =>  $data['tourNumber'],
            "driverId" =>  $data['driverId'],

        );
        $dataTourPlanung = array(
            "tourdate" =>  $data['date'],
            "driverId" =>  $data['driverId'],
            "tourart" =>  $data['tourart']
        );

        if ($modelTourDriver->load(['form' => $dataTourDriver], 'form') && $modelTourDriver->save()) {
            if ($modelTourPlanung->load(['form' => $dataTourPlanung], 'form') && $modelTourPlanung->save()) {
                $modelTourPlanung->refresh();
                return JSON::encode(array(
                    "success" => true,
                    "data" => "Alles ok"
                ));
            }else {
                return JSON::encode(array(
                    "success" => false,
                    "data" => $modelTourPlanung->errors
                ));
            }
        }else{
            return JSON::encode(array(
                "success" => false,
                "data" => $modelTourDriver->errors
            ));
        }


    }

    public function actionRead(){

        $users = TourDriver::find()->all();
        return Json::encode([
            'data' => $users,
            'success' => true
        ]);
    }

    /**
     * Updates an existing TourDriver model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($model->load(Yii::$app->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing TourDriver model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the TourDriver model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return TourDriver the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = TourDriver::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    private function checkTourExists($driver, $tourNumber){
        $tour = TourDriver::find()->where(["driverId" => $driver, "tourNumber" => $tourNumber])->All();
        if($tour){
            foreach($tour as $item){
                $user = User::find()->where(['id' => $item['driverId']])->one();
                $retData[] = array(
                    "Tournummer" => $tourNumber,
                    "Fahrer" => $user->fullName
                );
            }
            return $retData;
        }
        return false;
    }


}
