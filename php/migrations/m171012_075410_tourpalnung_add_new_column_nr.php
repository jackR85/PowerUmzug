<?php

use yii\db\Migration;

/**
 * Class m171012_075410_tourpalnung_add_new_column_nr
 */
class m171012_075410_tourpalnung_add_new_column_nr extends Migration
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
        echo "m171012_075410_tourpalnung_add_new_column_nr cannot be reverted.\n";

        return false;
    }


    // Use up()/down() to run migration code without a transaction.
    public function up()
    {
        $this->addColumn('Tourplanung', 'nr', $this->integer());
    }

    public function down()
    {
        echo "m171012_075410_tourpalnung_add_new_column_nr cannot be reverted.\n";

        return false;
    }

}
