Ext.define('PowerUmzug.view.FzgVerwaltung.FzgVerwaltungModel',{
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id'},
        { name: 'kennzeichen'},
        { name: 'beschreibung'},
        { name: 'fahrzeugart'}
    ],

    proxy: {
        type: 'rest',
        appendId: false,
        api: {
            create:"php/web/index.php?r=fahrzeug/create",
            read:"php/web/index.php?r=fahrzeug/read",
            update:"php/web/index.php?r=fahrzeug/update",
            destroy:"php/web/index.php?r=fahrzeug/delete"
        },
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }

})