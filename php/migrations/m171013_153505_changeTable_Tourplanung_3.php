<?php

use yii\db\Migration;

/**
 * Class m171013_153505_changeTable_Tourplanung_3
 */
class m171013_153505_changeTable_Tourplanung_3 extends Migration
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
        echo "m171013_153505_changeTable_Tourplanung_3 cannot be reverted.\n";

        return false;
    }


    // Use up()/down() to run migration code without a transaction.
    public function up()
    {
        $this->dropColumn('tourplanung','tourart');
        $this->addColumn('tourplanung', 'tourart','integer(10)');
    }

    public function down()
    {
        echo "m171013_153505_changeTable_Tourplanung_3 cannot be reverted.\n";

        return false;
    }
}
