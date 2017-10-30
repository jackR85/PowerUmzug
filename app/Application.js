/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('PowerUmzug.Application', {
    extend: 'Ext.ux.desktop.App',

    name: 'PowerUmzug',

    requires: [
        'Ext.window.MessageBox',
        'Ext.ux.desktop.ShortcutModel',
        'PowerUmzug.modules.UserVerwaltungModule',
        'PowerUmzug.modules.FzgVerwaltungModule',
        'PowerUmzug.modules.TourplanungModule',
        'PowerUmzug.modules.CalendarModule'
        //TODO module class name
    ],

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    stores: [
        // TODO: add global / shared stores here
    ],

    launch: function () {


    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    },

    init: function(loadMain) {
        var me = this;
        if(1){
            this.callParent();
            return;
        }
    },

    getModules : function(){
        return [
            //TODO new Module.name.sdsdsdsd()
            new PowerUmzug.modules.UserVerwaltungModule(),
            new PowerUmzug.modules.FzgVerwaltungModule(),
            new PowerUmzug.modules.TourplanungModule(),
            new PowerUmzug.modules.CalendarModule()
        ];
    },

    getDesktopConfig: function () {
        var me = this, ret = me.callParent();
        return Ext.apply(ret, {
            contextMenuItems: [
                { text: 'Change Settings', handler: me.onSettings, scope: me }
            ],

            layout: 'border',
            shortcuts: Ext.create('Ext.data.Store', {
                model: 'Ext.ux.desktop.ShortcutModel',
                data: [
                    //TODO desktop icons { name: 'Grid Window', iconCls: 'grid-shortcut', module: 'grid-win' }
                   { name: 'Benutzer', iconCls: 'fa fa-user fa-3x fa-pu-red', module: 'UserVerwaltung-shortcut' },
                   { name: 'Fahrzeuge', iconCls: 'fa fa-truck fa-3x fa-pu-red', module: 'FzgVerwaltung-shortcut' },
                   { name: 'Touren', iconCls: 'fa fa-archive fa-3x fa-pu-red', module: 'tourplanung-shortcut' },
                   { name: 'Kalender', iconCls: 'fa fa-calendar fa-3x fa-pu-red', module: 'calendar-shortcut' }
                ]
            }),

            wallpaper: 'resources/images/wallpapers/bg-PowerUmzug.jpg',
            wallpaperStretch: false,
            bodyStyle:{
                backgroundColor: 'white'
            },
            listeners:{
            }

        });
    },

    // config for the start menu
    getStartConfig : function() {
        var me = this, ret = me.callParent();

        return Ext.apply(ret, {
            title: 'Menü',
            iconCls: 'user',
            height: 300,
            toolConfig: {
                width: 100,
                items: [
                    {
                        text:'Settings',
                        iconCls:'settings',
                        handler: me.onSettings,
                        scope: me
                    },
                    '-',
                    {
                        text:'Logout',
                        iconCls:'logout',
                        handler: me.onLogout,
                        scope: me
                    }
                ]
            }
        });
    },

    getTaskbarConfig: function (view) {
        var ret = this.callParent();
        //var view = this.getView();

        return Ext.apply(ret, {
            /*
             quickStart: [
             { name: 'Accordion Window', iconCls: 'accordion', module: 'acc-win' },
             { name: 'Grid Window', iconCls: 'icon-grid', module: 'grid-win' }
             ],*/
            itemBarConfig: [
                {
                    xtype: 'textfield',
                    itemId: 'userNameField',
                    loader: {
                        url: 'php/ajax.php',
                        autoLoad: true,
                        params: {
                            action: 'getUserName'
                        }
                    }
                }
            ],
            trayItems: [
                '->',
                {
                    xtype: 'trayclock',
                    flex: 1
                }
            ]
        });
    },

    onLogout: function (btn) {
        Ext.Msg.confirm('Logout', 'Wollen sie sich abmelden ?', function (id, value) {
            if (id === 'yes') {
                var loginCls = Homework.classes.Login;
                loginCls.logout(function(data){
                    window.location.reload();
                }, this);
            }
        }, this);
        return false;

    },

    onSettings: function () {
        var dlg = new Desktop.Settings({
            desktop: this.desktop
        });
        dlg.show();
    }
});
