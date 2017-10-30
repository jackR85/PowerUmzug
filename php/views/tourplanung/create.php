<?php

use yii\helpers\Html;


/* @var $this yii\web\View */
/* @var $model app\models\Tourplanung */

$this->title = 'Create Tourplanung';
$this->params['breadcrumbs'][] = ['label' => 'Tourplanungs', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="tourplanung-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
