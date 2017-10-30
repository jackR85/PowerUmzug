Ext.define('PowerUmzug.view.Tourplanung.neueTour.addNewTourView',{
    extend: 'Ext.window.Window',
    alias: 'widget.newTour',
    controller: 'addnewtourcontroller',

    requires: [
        'PowerUmzug.view.userVerwaltung.UserverwaltungStore',
        'PowerUmzug.view.Tourplanung.neueTour.addNewTourStore',
    ],

    title: 'Neue Tour',
    iconCls: 'x-fa fa-calendar',

    width: 400,
    height: 300,
    layout: 'fit',
    toFrontOnShow: true,

    items: [
        {
            xtype: 'form',
            scrollable: true,
            bodyPadding: 10,
            defaults: {
                allowBlank: false,
                anchor: '0'
            },
            layout: 'anchor',
            itemId: 'newTourForm',
            items: [
                {
                    xtype: 'datefield',
                    fieldLabel: 'Datum',
                    name: 'date',
                    value: new Date()
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Tour Nummer',
                    name: 'tourNumber'
                },
                {
                    xtype: 'combo',
                    fieldLabel: 'Tour Art',
                    editable: false,
                    name: 'tourart',
                    store: [
                        { id: 1, name: 'Umzug'},
                        { id: 2, name: 'Möbel transport'}
                    ],
                    displayField: 'name',
                    valueField: 'id'
                },
                {
                    xtype: 'fieldcontainer',
                    fieldLabel: 'Fahrer',
                    margins: '0 0 5px 0',
                    items: {
                        xtype: 'panel',
                        itemId: 'driverFieldset',
                        title: 'Fahrer',
                        bodyPadding: 5,
                        frame: true,
                        anchor: '0',
                        html: 'Bitte einen Fahrer hinzufügen!',
                        tools: [
                            {
                                type: 'plus',
                                callback: 'onAddDriver'
                            }
                        ]
                    }
                },
                {
                    xtype: 'combo',
                    editable: false,
                    fieldLabel: 'Fahrzeug',
                    valueField: 'id',
                    displayField: 'name',
                    store: [
                        {id: 1, name: 'Caddy', cls: 'ic-caddy'},
                        {id: 2, name: 'Sprinter', cls: 'ic-van'},
                        {id: 3, name: 'Kastenwagen', cls: 'ic-truck'}
                    ],
                    tpl: [
                        '<tpl for="."><li class="x-boundlist-item {cls}"> {name}</li></tpl>'
                    ],
                    name: 'vehicleType'

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
                    handler: 'onSave',
                    iconCls: 'x-fa fa-share-square-o',
                    formBind: true
                }
            ]
        }
    ],
})