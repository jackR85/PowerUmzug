<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "tourDriver".
 *
 * @property int $id
 * @property string $tourNumber
 * @property int $driverId
 */
class TourDriver extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'tourDriver';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['tourNumber', 'driverId'], 'required'],
            [['driverId'], 'integer'],
            [['tourNumber'], 'string', 'max' => 30],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'tourNumber' => 'Tour Number',
            'driverId' => 'Driver ID',
        ];
    }
}
