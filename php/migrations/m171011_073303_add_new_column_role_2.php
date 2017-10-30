<?php

use yii\db\Migration;

/**
 * Class m171011_073303_add_new_column_role_2
 */
class m171011_073303_add_new_column_role_2 extends Migration
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
        echo "m171011_073303_add_new_column_role_2 cannot be reverted.\n";

        return false;
    }


    // Use up()/down() to run migration code without a transaction.
    public function up()
    {
        $this->addColumn('user', 'role', "ENUM('admin', 'user')");
    }

    public function down()
    {
        echo "m171011_073303_add_new_column_role_2 cannot be reverted.\n";

        return false;
    }

}
