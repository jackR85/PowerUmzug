Ext.define('PowerUmzug.view.userVerwaltung.userverwaltungModel',{
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id'},
        { name: 'fullName'},
        { name: 'driverLicense'},
        { name: 'nickName'},
        { name: 'password'},
        { name: 'active'},
        { name: 'role'},
    ],

    proxy: {
        type: 'rest',
        appendId: false,
        api: {
            create:"php/web/index.php?r=user/create",
            read:"php/web/index.php?r=user/read",
            update:"php/web/index.php?r=user/update",
            destroy:"php/web/index.php?r=user/delete"
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