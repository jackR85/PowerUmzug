<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\TourDriver */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="tour-driver-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'tourNumber')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'driverId')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
