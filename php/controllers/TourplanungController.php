<?php

namespace app\controllers;

use app\models\TourDay;
use Yii;
use app\models\Tourplanung;
use yii\data\ActiveDataProvider;
use yii\helpers\Json;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * TourplanungController implements the CRUD actions for Tourplanung model.
 */
class TourplanungController extends Controller{

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
                    'delete' => ['DELETE'],
                ],
            ],
        ];
    }

    /**
     * Lists all Tourplanung models.
     * @return mixed
     */
    public function actionIndex()
    {
        $dataProvider = new ActiveDataProvider([
            'query' => Tourplanung::find(),
        ]);

        return $this->render('index', [
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Tourplanung model.
     * @param integer $id
     * @return mixed
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'model' => $this->findModel($id),
        ]);
    }

    public function actionRead(){

        $query = Tourplanung::find()->all();

        return Json::encode([
            'data' => $query,
            'success' => true
        ]);
    }


    /**
     * Creates a new Tourplanung model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $post = Yii::$app->request->getRawBody();
        $data = json_decode($post, true);
        $isExists = Tourplanung::find()->where(['tourNr' => $data['tourNr']])->one();
        if(isset($isExists->id)){
            $ret = JSON::encode(array(
                "success" => false,
                "message" => "Diese Tour Nummer ist bereits vergeben"
            ));
            return $ret;
        }

        $model = new Tourplanung();

        if ($model->load(['form' => $data], 'form') && $model->save()) {
            $model->refresh();
            /*$ret = JSON::encode(array(
                "success" => true,
                "data" => "Alles ok"
            ));
            return $ret;*/
            return JSON::encode($model);
        }else{
            return JSON::encode(
                array(
                    "success" => false,
                    "message" => $model->errors
                )
            );
        }
    }

    /**
     * Updates an existing Tourplanung model.
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
     * Deletes an existing Tourplanung model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param integer $id
     * @return mixed
     */
    public function actionDelete()
    {

        $post = Yii::$app->request->getRawBody();
        $data = json_decode($post, true);
        $isExists = TourDay::find()->where(['tourNumber' => $data['tourNr']])->one();

        if(isset($isExists->id)){
            $ret = JSON::encode(array(
                "success" => false,
                "message" => "Diese Tour wurde bereits im Kalender eingeplant"
            ));
            return $ret;
        }


        $model = $this->findModel($data['id']);
        if($model->delete()){
            $model->refresh();
            return JSON::encode($model);
        };

        return JSON::encode(
            array(
                "success" => false,
                "message" => $model->errors
            )
        );
    }

    /**
     * Finds the Tourplanung model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Tourplanung the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Tourplanung::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }


    public function setResponseArray($arr){
        $newData = array();
        foreach($arr as $data){
            $newData[] = array(
                "Team" => $data['Team'],
                "Montag" => isset($data[''])
            );
        }
    }


}
