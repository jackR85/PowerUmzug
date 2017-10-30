Ext.define('PowerUmzug.view.FzgVerwaltung.FzgVerwaltung',{
    extend: 'Ext.grid.Panel',
    requires:[
        'PowerUmzug.view.FzgVerwaltung.FzgVerwaltungController',
        'PowerUmzug.view.FzgVerwaltung.FzgVerwaltungStore',
        'PowerUmzug.view.FzgVerwaltung.NeuesFzgHinzufuegen',
    ],
    controller:'fzgverwaltungkontroller',
    alias:'widget.fzgverwaltung',
    itemId:'fzgverwaltungIid',
    store: {
        type: 'fzgverwaltungstore'
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
            text: 'neus Fzg hinzufügen',
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
            text: 'Kennzeichen',
            dataIndex: 'kennzeichen',
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        {
            text: 'Beschreibung',
            flex: 1,
            dataIndex: 'beschreibung',
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }

        },
        {
            header: 'Fahrzeug Art',
            dataIndex: 'fahrzeugart',
            renderer: function (value) {
                if(value == 1){
                    return 'Caddy'
                }else if (value == 2){
                    return 'Sprinter'
                }else if (value == 3){
                    return 'Kastenwagen'
                }
            },
            width: 120,
            editor: {
                xtype: 'combo',
                store: [
                    {id: 1, name: 'Caddy' },
                    {id: 2, name: 'Sprinter' },
                    {id: 3, name: 'Kastenwagen' }
                    ],
                displayField: 'name',
                valueField: 'id',
                editable: false,
                allowBlank: false
            }
        }
    ]
})