<?php

use yii\db\Migration;

/**
 * Class m171018_123557_changeColumnType_status_in_tourplanung
 */
class m171018_123557_changeColumnType_status_in_tourplanung extends Migration
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
        echo "m171018_123557_changeColumnType_status_in_tourplanung cannot be reverted.\n";

        return false;
    }


    // Use up()/down() to run migration code without a transaction.
    public function up()
    {
        $this->alterColumn('tourplanung', 'status', 'integer(2)');
    }

    public function down()
    {
        echo "m171018_123557_changeColumnType_status_in_tourplanung cannot be reverted.\n";

        return false;
    }

}
