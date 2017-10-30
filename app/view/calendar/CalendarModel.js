Ext.define('PowerUmzug.view.calendar.CalendarModel',{
    extend: 'Ext.data.Model',

    fields: [
        {name : 'id', type: 'number'},
        {name: 'vehicle'},
        {name: 'monday'},
        {name: 'tuesday'},
        {name: 'wednesday'},
        {name: 'thursday'},
        {name: 'friday'},
        {name: 'saturday'}
    ],

    proxy: {
        type: 'rest',
        appendId: false,
        api: {
            create:"php/web/index.php?r=tourday/create",
            read:"php/web/index.php?r=tourday/read",
            update:"php/web/index.php?r=tourday/update",
            destroy:"php/web/index.php?r=tourday/delete"
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
        }
    }
});