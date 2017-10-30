Ext.define('PowerUmzug.view.userVerwaltung.UserverwaltungAddNewUserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.UserverwaltungAddNewUserController',

    onAbort: function (view) {
        var win = view.up('#addNewUserWin');
        win.destroy();
    },

    onSaveReg: function (btn) {
        this.getView().setLoading(true);
        let rec = btn.up('form').getValues();
        let check = Ext.Msg.confirm('speichern','Soll die Registrierung so abgeschickt werden?',function (callback) {
            if(callback == 'yes'){
                let store = this.getView().getGrid().getStore();
                store.suspendEvents();
                store.add(rec);
                store.resumeEvents();
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