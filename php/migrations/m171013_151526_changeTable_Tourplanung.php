s<?php

use yii\db\Migration;

/**
 * Class m171013_151526_changeTable_Tourplanung
 */
class m171013_151526_changeTable_Tourplanung extends Migration
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
        echo "m171013_151526_changeTable_Tourplanung cannot be reverted.\n";

        return false;
    }


    // Use up()/down() to run migration code without a transaction.
    public function up()
    {
        $this->dropColumn('Tourplanung', 'Team');
        $this->dropColumn('Tourplanung', 'nr');
        $this->addColumn('Tourplanung', 'tourart','VARCHAR(30) AFTER tourdate');
    }

    public function down()
    {
        echo "m171013_151526_changeTable_Tourplanung cannot be reverted.\n";

        return false;
    }

}
