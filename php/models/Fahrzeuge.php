<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "fahrzeuge".
 *
 * @property int $id
 * @property string $kennzeichen
 * @property string $beschreibung
 * @property int $fahrzeugart
 */
class Fahrzeuge extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'fahrzeuge';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fahrzeugart'], 'integer'],
            [['kennzeichen'], 'string', 'max' => 12],
            [['beschreibung'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'kennzeichen' => 'Kennzeichen',
            'beschreibung' => 'Beschreibung',
            'fahrzeugart' => 'Fahrzeugart',
        ];
    }
}
