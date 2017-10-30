<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\Tourplanung */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="tourplanung-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'tourdate')->textInput() ?>

    <?= $form->field($model, 'status')->dropDownList([ 'Eingeplant' => 'Eingeplant', 'Abgeschlossen' => 'Abgeschlossen', 'Abgerechnet' => 'Abgerechnet', '' => '', ], ['prompt' => '']) ?>

    <?= $form->field($model, 'createndate')->textInput() ?>

    <?= $form->field($model, 'Team')->textInput() ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
