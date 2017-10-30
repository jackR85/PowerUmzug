Ext.define('PowerUmzug.modules.UserVerwaltungModule', {
    extend: 'Ext.ux.desktop.Module',
    requires: [
        'Ext.grid.Panel',
        'PowerUmzug.view.userVerwaltung.UserverwaltungView'
    ],

    id:'UserVerwaltung-shortcut',

    init : function(){
        this.launcher = {
            text: 'User Verwaltung',
            iconCls: 'fa fa-user'
        };
    },


    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('UserVerwaltung-shortcut');
        if(!win){
            win = desktop.createWindow({
                title:'User Verwaltung',
                width: 1000,
                height: 400,
                id:'aliUserverwaltung',
                iconCls: 'fa fa-user',
                animCollapse:false,
                constrainHeader:true,
                items: [{
                    xtype: 'aliUserverwaltung'
                }],
                layout:'fit',

            });

        }

        return win;
    }

});