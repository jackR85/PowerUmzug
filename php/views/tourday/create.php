<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model app\models\TourDay */

$this->title = 'Create Tour Day';
$this->params['breadcrumbs'][] = ['label' => 'Tour Days', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="tour-day-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
