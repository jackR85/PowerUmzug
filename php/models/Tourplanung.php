<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "tourplanung".
 *
 * @property int $id
 * @property string $status
 * @property string $creationdate
 * @property int $tourart 1 = Umzug, 2= Möbel Transport
 * @property string $markt
 * @property string $tourNr
 */
class Tourplanung extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'tourplanung';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['status'], 'string'],
            [['creationdate'], 'safe'],
            [['tourart'], 'integer'],
            [['markt'], 'string', 'max' => 100],
            [['tourNr'], 'string', 'max' => 20],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'status' => 'Status',
            'creationdate' => 'Creationdate',
            'tourart' => 'Tourart',
            'markt' => 'Markt',
            'tourNr' => 'Tour Nr',
        ];
    }
}
