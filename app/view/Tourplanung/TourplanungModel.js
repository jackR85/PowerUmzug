Ext.define('PowerUmzug.view.Tourplanung.TourplanungModel',{
    extend: 'Ext.data.Model',

    fields: [
        {name : 'id', type: 'number'},
        {name: 'tourNr'},
        {name: 'tourart'},
        {name: 'markt'},
        {name: 'status'}
    ],

    proxy: {
        type: 'rest',
        appendId: false,
        api: {
            create:"php/web/index.php?r=tourplanung/create",
            read:"php/web/index.php?r=tourplanung/read",
            update:"php/web/index.php?r=tourplanung/update",
            destroy:"php/web/index.php?r=tourplanung/delete"
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            messageProperty: 'message',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        },
        listeners: {
            //exception: function (proxy, response, operation, eOpts) {
        }
    }
});