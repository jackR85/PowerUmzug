<?php

use yii\db\Migration;

/**
 * Class m171016_213640_changeColumnType_fahrzeugeTbl
 */
class m171016_213640_changeColumnType_fahrzeugeTbl extends Migration
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
        echo "m171016_213640_changeColumnType_fahrzeugeTbl cannot be reverted.\n";

        return false;
    }


    // Use up()/down() to run migration code without a transaction.
    public function up()
    {
        $this->alterColumn('fahrzeuge', 'fahrzeugart', 'integer(2)');
    }

    public function down()
    {
        echo "m171016_213640_changeColumnType_fahrzeugeTbl cannot be reverted.\n";

        return false;
    }

}
