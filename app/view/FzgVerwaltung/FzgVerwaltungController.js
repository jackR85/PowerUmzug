Ext.define('PowerUmzug.view.FzgVerwaltung.FzgVerwaltungController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.fzgverwaltungkontroller',


    onRemoveClick: function (view) {
        let selected = this.getView().getSelectionModel().getSelection();
        if (selected[0]){
            let store = this.getView().getStore();
            Ext.Msg.confirm('Löschen','Soll das Fahrzeug wirklich gelöscht werden?',function (callback) {
                if(callback == 'yes'){
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
            xtype:'neuesFzgHinzufuegen',
            modal: true,
            grid: this.getView()
        });
        win.show();
    },

    onEditRow : function(editor, e) {
        let store = this.getView().getStore();
        store.sync();
    }

})

