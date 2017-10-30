Ext.define('PowerUmzug.view.FzgVerwaltung.NeuesFzgHinzufuegen',{
    extend: 'Ext.window.Window',
    requires:[
        'PowerUmzug.view.FzgVerwaltung.NeuesFzgHinzufuegenController',
        'PowerUmzug.view.FzgVerwaltung.FzgVerwaltungStore',
    ],

    controller:'Neuesfzghinzufuegencontroller',
    alias:'widget.neuesFzgHinzufuegen',
    itemId:'FzgHinzufuegenIid',

    title: 'Neues Fahrzeug',

    config: {
        grid: null
    },

    items:[
        {
            xtype: 'form',
            bodyPadding: 10,
            itemId: 'formReg',
            items:[
                {
                    xtype: 'combo',
                    fieldLabel: 'Fahrzeugart',
                    allowBlank: false,
                    name: 'fahrzeugart',
                    triggerAction: 'all',
                    store: [
                        {id: 1, name: 'Caddy' },
                        {id: 2, name: 'Sprinter' },
                        {id: 3, name: 'Kastenwagen' }
                    ],
                    displayField: 'name',
                    valueField: 'id',
                    editable: false
                },
                {
                    xtype: 'fieldcontainer',
                    fieldLabel: 'Kennzeichen',
                    width: 275,
                    layout: {
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'kennzeichen1',
                            width: 45,
                            maxLength: 3,
                            enforceMaxLength: true,
                            stripCharsRe: /\d/,
                            cls: 'uppercase-text'
                        },
                        {
                            style: {
                                textAlign: 'center'
                            },
                            html: '-',
                            width: 20
                        },
                        {
                            xtype: 'textfield',
                            name: 'kennzeichen2',
                            regex: /^[A-ZÖÜÄa-zöüä]{1,2} [1-9]{1}[0-9]{1,3}$/,
                            regexText: 'Das Kennzeichen muss folgendes Format haben: ABC - DE 1234',
                            allowBlank: false,
                            msgTarget: 'side',
                            flex: 1,
                            cls: 'uppercase-text',
                            maxLength: 7,
                            enforceMaxLength: true
                        }
                    ]
                },
                {
                    xtype: 'textarea',
                    fieldLabel: 'Beschreibung',
                    name: 'beschreibung',

                }

            ],
            buttons: [
                '->',
                {
                    text: 'abbrechen',
                    handler: 'onAbort',
                    iconCls: 'x-fa fa-ban'
                },
                {
                    text:'senden',
                    handler: 'onSaveReg',
                    iconCls: 'x-fa fa-share-square-o',
                    formBind: true
                }
            ]
        }
    ]

})