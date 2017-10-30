<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Fahrzeuge */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="fahrzeuge-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'kennzeichen')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'beschreibung')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'fahrzeugart')->dropDownList([ 'Caddy' => 'Caddy', 'Sprinter' => 'Sprinter', 'Kastenwagen' => 'Kastenwagen', '' => '', ], ['prompt' => '']) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
