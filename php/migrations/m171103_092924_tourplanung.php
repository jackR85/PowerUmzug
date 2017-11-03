<?php

use yii\db\Schema;
use yii\db\Migration;

class m171103_092924_tourplanung extends Migration
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
            '{{%tourplanung}}',
            [
                'id'=> $this->primaryKey(11),
                'status'=> $this->integer(2)->notNull(),
                'creationdate'=> $this->datetime()->notNull(),
                'tourart'=> $this->integer(10)->notNull(),
                'markt'=> $this->string(100)->notNull(),
                'tourNr'=> $this->string(20)->notNull(),
            ],$tableOptions
        );

    }

    public function safeDown()
    {
        $this->dropTable('{{%tourplanung}}');
    }
}
