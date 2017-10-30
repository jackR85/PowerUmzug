Ext.define('PowerUmzug.view.Tourplanung.TourplanungStore',{
    extend: 'Ext.data.Store',
    alias: 'store.tourplanungstore',
    xtype: 'tourplanungstore',

    requires: [
        'PowerUmzug.view.Tourplanung.TourplanungModel'
    ],

    model: 'PowerUmzug.view.Tourplanung.TourplanungModel',
    autoLoad: true
})