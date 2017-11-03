<?php

use yii\db\Schema;
use yii\db\Migration;

class m171103_094636_tourDay extends Migration
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
            '{{%tourDay}}',
            [
                'id'=> $this->primaryKey(11),
                'vehicleId'=> $this->integer(11)->notNull(),
                'tourNumber'=> $this->integer(11)->notNull(),
                'date'=> $this->date()->notNull(),
            ],$tableOptions
        );

    }

    public function safeDown()
    {
        $this->dropTable('{{%tourDay}}');
    }
}
