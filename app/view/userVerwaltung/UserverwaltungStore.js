Ext.define('PowerUmzug.view.userVerwaltung.UserverwaltungStore',{
    extend: 'Ext.data.Store',
    alias: 'store.userverwaltungstore',
    xtype: 'userverwaltungstore',

    requires: [
        'PowerUmzug.view.userVerwaltung.userverwaltungModel'
    ],

    model: 'PowerUmzug.view.userVerwaltung.userverwaltungModel',
    autoLoad: true
})