Ext.define('PowerUmzug.view.calendar.CalendarView', {
    extend: 'Ext.grid.Panel',

    controller: 'calendarController',
    requires: [
        'PowerUmzug.view.calendar.CalendarStore',
        'PowerUmzug.view.Tourplanung.neueTour.addNewTourView',
        'PowerUmzug.view.calendar.WeekField'
    ],

    alias: 'widget.calendarView',

    store: {
        type: 'calendarStore'
    },

    listeners: {
        afterRender: 'onRenderKw',
        celldblclick: 'onEditCell'

    },

    selModel: 'cellmodel',

    dockedItems: [
        {
            dock: 'top',
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'container',
                    width: 200,
                    layout: {
                        type: 'vbox',
                    },
                    items:[
                        {
                            xtype: 'weekfield',
                            value: new Date(),
                            itemId: 'datepicker',
                            listeners:{
                                select: 'onDateSelect'
                            }
                        },
                        {
                            xtype: 'displayfield',
                            itemId: 'kwWeek',
                            fieldCls: 'kwWeekStyle'
                        }
                    ],

                },

                {
                    xtype: 'container',
                    flex: 1,
                    layout: {
                        type: 'hbox',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'segmentedbutton',
                            animateShadow: true,
                            title: 'Ansicht',
                            items: [
                                {
                                    text: 'Woche',
                                    scale: 'large',
                                    handler: 'onShowWeek',

                                    buttonAlign: 'center',
                                },
                                {
                                    text: 'Monat',
                                    scale: 'large',
                                },
                            ]
                        }
                    ]
                },
                {
                    xtype: 'component',
                    width: 200
                }
            ]
        }
    ],

    columns:[
        {
            text: 'Fahrzeug',
            dataIndex: 'vehicle',
            flex: 1,


        },
        {
            text: 'Montag',
            dataIndex: 'monday',
            flex: 1,

        },
        {
            text: 'Diensatg',
            dataIndex: 'tuesday',
            flex: 1
        },
        {
            text: 'Mittwoch',
            dataIndex: 'wednesday',
            flex: 1
        },
        {
            text: 'Donnerstag',
            dataIndex: 'thursday',
            flex: 1
        },
        {
            text: 'Freitag',
            dataIndex: 'friday',
            flex: 1
        },
        {
            text: 'Samstag',
            dataIndex: 'saturday',
            flex: 1
        },
    ]

})