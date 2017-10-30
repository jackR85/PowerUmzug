Ext.define('PowerUmzug.view.calendar.setTour.setTourWindowController',{
    extend: 'Ext.app.ViewController',

    alias: 'controller.setTourWindowController',

    onViewReady: function(){
        this.driverStore = Ext.widget({
            xtype: 'userverwaltungstore'
        });
    },

    onAddDriver: function(panel, tool, event){
        panel.setHtml(null);
        panel.add(this.getDriverComboConfig(panel.items.length == 0));
    },

    getDriverComboConfig: function(delDiabled){
        return {
            xtype: 'container',
            layout: 'hbox',
            style: {
                marginBottom: '2px'
            },
            items: [
                {
                    xtype: 'combo',
                    editable: false,
                    store: this.driverStore,
                    flex: 1,
                    tpl: [
                        '<tpl for="."><li class="x-boundlist-item x-fa fa-car {[this.getIconCls(values, out)]}"> {fullName}</li></tpl>',
                        {
                            getIconCls: function(values, out){
                                if(values.driverLicense){
                                    out.push('red');
                                    return;
                                }
                                out.push('gray');
                            }
                        }
                    ],
                    //typeAhead: true,
                    displayField: 'fullName',
                    valueField: 'id',
                    name: 'driverId',
                    itemId: 'driverOne'
                },
                {
                    xtype: 'button',
                    disabled: delDiabled,
                    style: {
                        marginLeft: '2px'
                    },
                    iconCls: 'x-fa fa-minus-circle',
                    handler: this.onRemoveDriver
                }
            ]
        };
    },

    onAbbortWin: function () {
        let  view = this.getView();
        view.destroy();
    },

    onSaveWin: function (btn) {
        let rec = btn.up('window').down('form').getForm().getValues();
        console.log(rec);
        let store = Ext.widget({
            xtype: 'tourplanungstore'
        });
        console.log(store);
        //store.add(rec);
        store.sync()

    }
})