<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "tourDay".
 *
 * @property int $id
 * @property int $vehicleId
 * @property int $tourNumber
 * @property string $date
 */
class TourDay extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'tourDay';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['vehicleId', 'tourNumber', 'date'], 'required'],
            [['vehicleId', 'tourNumber'], 'integer'],
            [['date'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'vehicleId' => 'Vehicle ID',
            'tourNumber' => 'Tour Number',
            'date' => 'Date',
        ];
    }
}
