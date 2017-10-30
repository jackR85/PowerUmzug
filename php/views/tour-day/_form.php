<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\TourDay */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="tour-day-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'vehicleId')->textInput() ?>

    <?= $form->field($model, 'tourNumber')->textInput() ?>

    <?= $form->field($model, 'date')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
