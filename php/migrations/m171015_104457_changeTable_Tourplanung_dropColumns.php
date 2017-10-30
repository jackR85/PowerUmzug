<?php

use yii\db\Migration;

/**
 * Class m171015_104457_changeTable_Tourplanung_dropColumns
 */
class m171015_104457_changeTable_Tourplanung_dropColumns extends Migration
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
        echo "m171015_104457_changeTable_Tourplanung_dropColumns cannot be reverted.\n";

        return false;
    }


    // Use up()/down() to run migration code without a transaction.
    public function up()
    {
        $this->dropColumn('tourplanung', 'tourdate');
    }

    public function down()
    {
        echo "m171015_104457_changeTable_Tourplanung_dropColumns cannot be reverted.\n";

        return false;
    }

}
