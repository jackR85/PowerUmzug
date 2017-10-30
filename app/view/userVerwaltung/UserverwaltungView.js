Ext.define('PowerUmzug.view.userVerwaltung.UserverwaltungView',{
    extend: 'Ext.grid.Panel',
    requires:[
        'PowerUmzug.view.userVerwaltung.UserverwaltungController',
        'PowerUmzug.view.userVerwaltung.UserverwaltungStore',
        'PowerUmzug.view.userVerwaltung.UserverwaltungAddNewUserView'
    ],
    controller:'UserverwaltungController',
    alias:'widget.aliUserverwaltung',
    itemId:'UserverwMain',
    store: {
        type: 'userverwaltungstore'
    },
    scrollable: true,
    selModel: 'rowmodel',
    plugins: {
        ptype: 'rowediting',
        rowediting: {
            clicksToEdit: 1
        },
        listeners:{
            edit: 'onEditRow'
        }
    },
    tbar: [
        {
            text: 'neuen User hinzufügen',
            handler: 'onAddClick',
            iconCls: 'x-fa fa-plus',
            tooltip: 'Bearbeiten',
        },
        {
            text: 'löschen',
            iconCls: 'x-fa fa-trash',
            tooltip: 'Löschen',
            handler: 'onRemoveClick',

        }
    ],
    columns:[
        {
            text: 'Rolle',
            dataIndex: 'role',
            editor :{
                xtype: 'combo',
                store: [
                    ['admin', 'Admin'],
                    ['user', 'User']
                ]
            }
        },
        {
            text: 'Gültig',
            dataIndex: 'active',
            renderer: function(value, metaData) {
                if (value){
                    metaData.style = "background-color:#88d37a; color:white; text-align:center;"
                    return 'ja'
                }else if(! value){
                    metaData.style = "background-color:#dd545b; color:white; text-align:center;"
                    return 'nein'
                };
            },
            editor: {
                xtype: 'combo',
                triggerAction: 'all',
                store: [
                    [1,'ja'],
                    [0,'nein'],
                ],
                allowBlank: false,

            },
        },
        {
            text: 'Name',
            flex: 1,
            dataIndex: 'fullName',
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }

        },
        {
            text: 'Führerschein',
            dataIndex: 'driverLicense',
            width: 120,
            editor: {
                xtype: 'combo',
                triggerAction: 'all',
                store: [
                    [1,'ja'],
                    [0,'nein'],
                ],
                allowBlank: false,

            },
            renderer: function(value, metaData) {
                if (value){
                    metaData.style = "background-color:#88d37a; color:white; text-align:center;"
                    return 'ja'
                }else if(! value){
                    metaData.style = "background-color:#dd545b; color:white; text-align:center;"
                    return 'nein'
                };
            },
        },
        {
            text: 'Benutzername',
            dataIndex: 'nickName',
            flex: 1,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        {
            xtype: 'actioncolumn',
            text: 'Pwd ändern',
            iconCls: 'x-fa fa-pencil',
            textAlign: 'senter',
            align: 'center',
            listeners: {
                click: 'onChangePwd'
            }
        }
    ]
})