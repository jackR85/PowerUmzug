Ext.define('PowerUmzug.view.Tourplanung.TourplanungView',{
    extend: 'Ext.grid.Panel',

    controller: 'tourplanungcontroller',
    requires: [
        'PowerUmzug.view.Tourplanung.TourplanungController',
        'PowerUmzug.view.Tourplanung.woche.wocheView',
        'PowerUmzug.view.Tourplanung.neueTour.addNewTourView'
    ],

    alias: 'widget.tourplanung',
    store: {
        type: 'tourplanungstore'
    },


    tbar: [
        {
            text: 'neue Tour',
            handler: 'adNewTour'
        },
        {
            text: 'löschen',
            handler: 'onDelete'
        }
    ],
    selModel: 'rowmodel',
    plugins: {
        rowediting: {
            clicksToEdit: 2,
            listeners: {
                canceledit: 'onCancelEdit',
                edit: 'onEditRow'
            }
        }
    },


    columns: [
        {
            text: 'Tour',
            dataIndex: 'tourNr',
            flex: 1,
            editor: {
                xtype: 'textfield'
            }
        },
        {
            text: 'Tour Art',
            dataIndex: 'tourart',
            flex: 1,
            renderer: function (value) {
                if(value == 1){
                    return 'Umug'
                }else if(value == 2){
                    return 'Tour'
                }
            },
            editor: {
                xtype: 'combo',
                queryCaching: true,
                store: [
                    { id: 1, name: 'Umzug'},
                    { id: 2, name: 'Tour'}
                ],
                displayField: 'name',
                valueField: 'id',
                editable: false
            }
        },
        {
            text: 'Markt',
            dataIndex: 'markt',
            flex: 1,
            editor: {
                xtype: 'combo',
                store: [
                    ['Essen', 'Essen'],
                    [ 'Hilden', 'Hilden'],
                    [ 'Wuppertal', 'Wuppertal'],
                    [ 'Düsseldrof', 'Düsseldrof']
                ],

                editable: false
            }
        }
    ]

})