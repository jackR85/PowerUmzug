Ext.define('PowerUmzug.view.Tourplanung.neueTour.addNewTourModel',{
    extend: 'Ext.data.Model',

    fields: [
        {name: 'date'},
        {name: 'tourNumber'},
        {name: 'tourart'},
        {name: 'driverId'},
        {name: 'vehicleType'}

    ],

    proxy: {
        type: 'rest',
        appendId: false,
        api: {
            create:"php/web/index.php?r=tourdriver/create",
            read:"php/web/index.php?r=tourdriver/read",
            update:"php/web/index.php?r=tourdriver/update",
            destroy:"php/web/index.php?r=tourdriver/delete"
        },
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        },

        listeners: {
            exception: function(proxy, response, operation, eOpts) {
                var response = Ext.util.JSON.decode(response.responseText);
                if(response.success == false){
                    Ext.Msg.alert('Achtung' ,'Diese Tournummer ist bereits vergeben:' + '<br /><br />' +
                        'Tournummer: ' + response.data[0].Tournummer + '<br />' +
                            'Fahrer: ' + response.data[0].Fahrer
                        )
                }
            }
        }
    }
})