<?php

use yii\db\Schema;
use yii\db\Migration;

class m171103_094148_fahrzeuge extends Migration
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
            '{{%fahrzeuge}}',
            [
                'id'=> $this->primaryKey(11),
                'kennzeichen'=> $this->string(12)->notNull(),
                'beschreibung'=> $this->string(255)->notNull(),
                'fahrzeugart'=> $this->integer(2)->notNull(),
            ],$tableOptions
        );

    }

    public function safeDown()
    {
        $this->dropTable('{{%fahrzeuge}}');
    }
}
