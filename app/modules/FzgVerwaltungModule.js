Ext.define('PowerUmzug.modules.FzgVerwaltungModule', {
    extend: 'Ext.ux.desktop.Module',
    requires: [
        'Ext.grid.Panel',
        'PowerUmzug.view.FzgVerwaltung.FzgVerwaltung'
    ],

    id:'FzgVerwaltung-shortcut',

    init : function(){
        this.launcher = {
            text: 'Fahrzeug Verwaltung',
            iconCls: 'fa fa-truck'
        };
    },


    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('FzgVerwaltung-shortcut');
        if(!win){
            win = desktop.createWindow({
                title:'Fahrzeug Verwaltung',
                width: 1000,
                height: 400,
                id:'fzgverwaltung',
                iconCls: 'fa fa-truck',
                animCollapse:false,
                constrainHeader:true,
                items: [{
                    xtype: 'fzgverwaltung'
                }],
                layout:'fit',

            });

        }

        return win;
    }

});