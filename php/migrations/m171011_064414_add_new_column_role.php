<?php

use yii\db\Migration;

/**
 * Class m171011_064414_add_new_column_role
 */
class m171011_064414_add_new_column_role extends Migration
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
        echo "m171011_064414_add_new_column_role cannot be reverted.\n";

        return false;
    }


    // Use up()/down() to run migration code without a transaction.
    public function up()
    {
        $this->addColumn('user', 'role', "ENUM('admin', 'user')");
    }

    public function down()
    {
        echo "m171011_064414_add_new_column_role cannot be reverted.\n";

        return false;
    }

}
