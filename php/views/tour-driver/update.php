<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model app\models\TourDriver */

$this->title = 'Update Tour Driver: {nameAttribute}';
$this->params['breadcrumbs'][] = ['label' => 'Tour Drivers', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="tour-driver-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
