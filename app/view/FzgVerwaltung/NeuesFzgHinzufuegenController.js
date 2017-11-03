Ext.define('PowerUmzug.view.FzgVerwaltung.NeuesFzgHinzufuegenController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.Neuesfzghinzufuegencontroller',

    onAbort: function (view) {
        var win = view.up('#FzgHinzufuegenIid');
        win.destroy();
    },

    onSaveReg: function (btn) {
        this.getView().setLoading(true);
        let rec = btn.up('form').getValues();
        let check = Ext.Msg.confirm('speichern','Soll das Fahrzeug angelegt werden?',function (answer) {
            if(answer == 'yes'){
                let store = this.getView().getGrid().getStore();
                store.add(rec);
                store.sync({
                    callback: function () {
                        store.reload();
                        this.getView().setLoading(false);
                        this.getView().close();
                    },
                    scope: this
                });
            }
        },this);

    }

})

//view.up('window')._view.down('#UserverwMain').getStore().reload()