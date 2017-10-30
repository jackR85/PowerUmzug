<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "user".
 *
 * @property int $id
 * @property string $fullName
 * @property int $driverLicense
 * @property string $nickName
 * @property string $password
 * @property int $active
 * @property string $role
 */
class User extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'user';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['fullName', 'driverLicense', 'nickName', 'password', 'role'], 'required'],
            [['driverLicense', 'active'], 'integer'],
            [['role'], 'string'],
            [['fullName', 'password'], 'string', 'max' => 255],
            [['nickName'], 'string', 'max' => 100],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'fullName' => 'Full Name',
            'driverLicense' => 'Driver License',
            'nickName' => 'Nick Name',
            'password' => 'Password',
            'active' => 'Active',
            'role' => 'Role',
        ];
    }
}
