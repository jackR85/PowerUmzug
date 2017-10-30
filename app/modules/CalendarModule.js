Ext.define('PowerUmzug.modules.CalendarModule', {
    extend: 'Ext.ux.desktop.Module',
    requires: [
        'PowerUmzug.view.calendar.CalendarView'
    ],

    id:'calendar-shortcut',

    init : function(){
        this.launcher = {
            text: 'Fahrzeug Verwaltung',
            iconCls: 'fa fa-calendar'
        };
    },


    createWindow : function(){
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('calendar-shortcut');
        if(!win){
            win = desktop.createWindow({
                title:'Kalender',
                width: 1000,
                height: 400,
                id:'calendar',
                iconCls: 'fa fa-calendar',
                animCollapse:false,
                constrainHeader:true,
                items: [{
                    xtype: 'calendarView'
                }],
                layout:'fit',

            });

        }

        return win;
    }

});