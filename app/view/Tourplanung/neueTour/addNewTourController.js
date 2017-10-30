Ext.define('PowerUmzug.view.Tourplanung.neueTour.addNewTourController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.addnewtourcontroller',

    control: {
        '#': {
            boxready: 'onViewReady'
        }
    },

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

    onRemoveDriver: function(btn){
        btn.up('container').destroy();
    },

    onAddTextField: function (btn) {
       let form = btn.up('window').down('#newTourForm');
       let start = 0
       start++;

       form.add({
           xtype: 'combo',
           fieldLabel: 'Fahrer',
           name: 'driver',
           store: {
               type: 'userverwaltungstore'
           },
           typeAhead: true,
           displayField: 'fullName',
           valueField: 'fullName',
           name: start
       });
    },

    onSave: function(btn){
        let store = Ext.widget({
            xtype: 'newTourDriverStore'
        });
        let form = btn.up('form'),
            value = form.getValues();
        if( ! value.driverId){
            return Ext.Msg.alert('Achtung', 'Sie haben keinen Fahrer asugewählt!')
        }
        store.add(value)
        store.sync();
    }
})