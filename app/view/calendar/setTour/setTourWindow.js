Ext.define('PowerUmzug.view.calendat.setTourWindow',{
    extend: 'Ext.window.Window',

    alias: 'widget.setTour',
    title: 'Tour einstellen',

    requires: [
        'PowerUmzug.view.Tourplanung.TourplanungStore',
        'PowerUmzug.view.userVerwaltung.UserverwaltungStore'
    ],



    controller: 'setTourWindowController',

    listeners: {
        boxReady: 'onViewReady'
    },
    itemId: 'setTourWindow',

    items: [
        {
            xtype: 'form',
            itemId: 'Formular',
            scrollable: true,
            bodyPadding: 10,
            defaults: {
                allowBlank: false
            },
            items: [
                {
                    xtype: 'combo',
                    fieldLabel: 'Tour',
                    store: {
                        type: 'tourplanungstore'
                    },
                    displayField: 'tourNr',
                    valueField: 'tourNr',
                    name: 'tourNr',
                    editable: false
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
            ]
        }
    ],
    bbar: [
        '->',
        {
            text: 'abbrechen',
            handler: 'onAbbortWin'
        },
        {
            text: 'speichern',
            handler: 'onSaveWin'
        }
    ]
})