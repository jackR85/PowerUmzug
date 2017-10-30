<?php

use yii\db\Migration;

/**
 * Class m171015_110255_addNewColmnToTable_tourplanung
 */
class m171015_110255_addNewColmnToTable_tourplanung extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {

    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "m171015_110255_addNewColmnToTable_tourplanung cannot be reverted.\n";

        return false;
    }


    // Use up()/down() to run migration code without a transaction.
    public function up()
    {
        $this->addColumn('tourplanung', 'markt', 'varchar(100)');
        $this->addColumn('tourplanung', 'tourNr', 'varchar(20)');
    }

    public function down()
    {
        echo "m171015_110255_addNewColmnToTable_tourplanung cannot be reverted.\n";

        return false;
    }

}
