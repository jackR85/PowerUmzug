Ext.define('PowerUmzug.view.FzgVerwaltung.FzgVerwaltungStore',{
    extend: 'Ext.data.Store',
    alias: 'store.fzgverwaltungstore',

    requires: [
        'PowerUmzug.view.FzgVerwaltung.FzgVerwaltungModel'
    ],

    model: 'PowerUmzug.view.FzgVerwaltung.FzgVerwaltungModel',
    autoLoad: true
})