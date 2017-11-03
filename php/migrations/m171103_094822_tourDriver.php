<?php

use yii\db\Schema;
use yii\db\Migration;

class m171103_094822_tourDriver extends Migration
{

    public function init()
    {
        $this->db = 'db';
        parent::init();
    }

    public function safeUp()
    {
        $tableOptions = 'ENGINE=InnoDB';

        $this->createTable(
            '{{%tourDriver}}',
            [
                'id'=> $this->primaryKey(11),
                'tourNumber'=> $this->string(30)->notNull(),
                'driverId'=> $this->integer(11)->notNull(),
            ],$tableOptions
        );

    }

    public function safeDown()
    {
        $this->dropTable('{{%tourDriver}}');
    }
}
