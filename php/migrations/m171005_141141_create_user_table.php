<?php

use yii\db\Migration;

/**
 * Handles the creation of table `user`.
 */
class m171005_141141_create_user_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function up()
    {
        $this->createTable('user', [
            'id' => $this->primaryKey(),
            'fullName' => $this->string(255)->notNull(),
            'driverLicense' => $this->integer(1)->notNull(),
            'nickName' => $this->string(100)->notNull(),
            'password' => $this->string(255)->notNull(),
            'active' => $this->integer(1)->notNull()->defaultValue(1),
        ]);
    }

    /**
     * @inheritdoc
     */
    public function down()
    {
        $this->dropTable('user');
    }
}
