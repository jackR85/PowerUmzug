Ext.define('PowerUmzug.view.userVerwaltung.UserverwaltungController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.UserverwaltungController',


    onRemoveClick: function (view) {
        let selected = this.getView().getSelectionModel().getSelection();
        if (selected[0]){
            let store = this.getView().getStore();
            Ext.Msg.confirm('Löschen','Soll der User wirklich gelöscht werden?',function (callback) {
                if(callback === 'yes'){
                    let selection = this.getView().getSelectionModel().getSelection()[0];
                    store.remove(selection);
                    store.sync();
                }
            },this)
        }else{
            Ext.Msg.alert('Achtung', 'Es wurde keine Zeile ausgewählt')
        }

    },

    onAddClick: function (btn) {
        var win =   Ext.widget({
            xtype:'newUserWindow',
            modal: true,
            grid: this.getView()
        });
        win.show();
    },

    onEditRow : function(editor, e) {
        let store = this.getView().getStore();
        store.sync();
    },

    onChangePwd: function (view,rowIndex,colIndex,item,e,record) {
        let data = record;
        var win =   Ext.widget({
            xtype:'changePwdWindow',
            modal: true,
            grid: this.getView(),
            recordObj: data
        });
        win.show();
    }

})

