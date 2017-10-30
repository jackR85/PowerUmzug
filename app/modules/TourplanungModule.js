Ext.define('PowerUmzug.modules.TourplanungModule', {
    extend: 'Ext.ux.desktop.Module',
    requires: [
        'Ext.grid.Panel',
        'PowerUmzug.view.Tourplanung.TourplanungView'
    ],

    id:'tourplanung-shortcut',

    init : function(){
        this.launcher = {
            text: 'Fahrzeug Verwaltung',
            iconCls: 'fa fa-archive'
        };
    },


    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('tourplanung-shortcut');
        if(!win){
            win = desktop.createWindow({
                title:'Tourplanung',
                width: 1000,
                height: 400,
                id:'tourplanung',
                iconCls: 'x-fa fa-archive',
                animCollapse:false,
                constrainHeader:true,
                items: [{
                    xtype: 'tourplanung'
                }],
                layout:'fit',

            });

        }

        return win;
    }

});