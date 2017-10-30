Ext.define('PowerUmzug.view.Tourplanung.woche.wocheView',{
    extend: 'Ext.grid.Panel',
    requires:[
        //'PowerUmzug.view.Tourplanung.FzgVerwaltungController',
        'PowerUmzug.view.Tourplanung.TourplanungStore',
    ],

    alias: 'widget.weekView',

    store: {
        type: 'tourplanungstore'
    },

    controller: 'wochecontroller',

    columns: [
        {
            header: 'Team',
            dataIndex: 'Team',
            width: 200
        },
        {
            text: 'Montag',
            dataIndex: 'Montag',
            flex: 1
        } ,
        {
            header: 'Dienstag',
            dataIndex: 'Dienstag',
            flex: 1
        },
        {
            header: 'Mittwoch',
            dataIndex: 'Mittwoch',
            flex: 1
        },
        {
            header: 'Donnerstag',
            dataIndex: 'Donnerstag',
            flex: 1
        },
        {
            header: 'Freitag',
            dataIndex: 'Freitag',
            flex: 1
        },
        {
            header: 'Samstag',
            dataIndex: 'Samstag',
            flex: 1
        }
    ]
})