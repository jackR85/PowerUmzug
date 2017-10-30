Ext.define('PowerUmzug.view.Tourplanung.neueTour.addNewTourStore',{
    extend: 'Ext.data.Store',
    alias: 'store.newTourDriverStore',
    xtype: 'newTourDriverStore',

    requires: [
        'PowerUmzug.view.Tourplanung.neueTour.addNewTourModel'
    ],

    success: function (response) {
        console.log(response)
    },

    model: 'PowerUmzug.view.Tourplanung.neueTour.addNewTourModel',
    autoLoad: true
})