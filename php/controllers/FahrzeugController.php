<?php

namespace app\controllers;

use Yii;
use app\models\Fahrzeuge;
use yii\data\ActiveDataProvider;
use yii\helpers\Json;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * FahrzeugController implements the CRUD actions for Fahrzeuge model.
 */
class FahrzeugController extends Controller
{
    /**
     * @inheritdoc
     */
    public function beforeAction($action)
    {
        $this->enableCsrfValidation = false;
        return parent::beforeAction($action);
    }

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
     * Lists all Fahrzeuge models.
     * @return mixed
     */
    public function actionIndex()
    {
        $dataProvider = new ActiveDataProvider([
            'query' => Fahrzeuge::find(),
        ]);

        return $this->render('index', [
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Fahrzeuge model.
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

        $vehicles = Fahrzeuge::find()->all();
        return Json::encode([
            'data' => $vehicles,
            'success' => true
        ]);
    }

    /**
     * Creates a new Fahrzeuge model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
    public function actionCreate()
    {
        $post = Yii::$app->request->getRawBody();
        $data = json_decode($post, true);
        $concatKennz = $data['kennzeichen1'] . ' - ' . $data['kennzeichen2'];
        $model = new Fahrzeuge();
        $data['kennzeichen'] = $concatKennz;
        if ($model->load(['form' => $data], 'form') && $model->save()) {
            $model->refresh();
            return Json::encode($model);
        }else{
            print_r($model->errors);
        }
    }



    /**
     * Updates an existing Fahrzeuge model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param integer $id
     * @return mixed
     */
    public function actionUpdate()
    {
        $post = Yii::$app->request->getRawBody();
        $data = json_decode($post, true);
        $model = $this->findModel($data['id']);
        $model->load(['form' => $data], 'form');
        if ($model->save()) {
            return JSON::encode($model);
        }

        return false;
    }

    /**
     * Deletes an existing Fahrzeuge model.
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
     * Finds the Fahrzeuge model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Fahrzeuge the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Fahrzeuge::findOne($id)) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
