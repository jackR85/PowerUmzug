<?php

use yii\db\Migration;

/**
 * Class m171016_214433_changeColumnType_kennzeichen_fahrzeugeTble
 */
class m171016_214433_changeColumnType_kennzeichen_fahrzeugeTble extends Migration
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
        echo "m171016_214433_changeColumnType_kennzeichen_fahrzeugeTble cannot be reverted.\n";

        return false;
    }


    // Use up()/down() to run migration code without a transaction.
    public function up()
    {
        $this->alterColumn('fahrzeuge', 'kennzeichen', 'varchar(12)');
    }

    public function down()
    {
        echo "m171016_214433_changeColumnType_kennzeichen_fahrzeugeTble cannot be reverted.\n";

        return false;
    }
}
