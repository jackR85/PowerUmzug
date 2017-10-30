<?php

use yii\db\Migration;

/**
 * Class m171013_152144_changeTable_Tourplanung_2
 */
class m171013_152144_changeTable_Tourplanung_2 extends Migration
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
        echo "m171013_152144_changeTable_Tourplanung_2 cannot be reverted.\n";

        return false;
    }


    // Use up()/down() to run migration code without a transaction.
    public function up()
    {
        $this->dropColumn('tourplanung', 'tourart');
        $this->addColumn('tourplanung', 'tourart',"ENUM('Umzug', 'Möbel Transport')");
    }

    public function down()
    {
        echo "m171013_152144_changeTable_Tourplanung_2 cannot be reverted.\n";

        return false;
    }

}
