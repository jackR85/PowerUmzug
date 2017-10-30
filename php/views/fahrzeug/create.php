<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model app\models\Fahrzeuge */

$this->title = 'Create Fahrzeuge';
$this->params['breadcrumbs'][] = ['label' => 'Fahrzeuges', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="fahrzeuge-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
