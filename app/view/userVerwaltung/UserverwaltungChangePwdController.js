Ext.define('PowerUmzug.view.userVerwaltung.UserverwaltungChangePwdController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.UserverwaltungChangePwdController',

    onAbort: function (view) {
        var win = view.up('#changepwdwindow');
        win.destroy();
    },

    onSaveNewPwd: function (btn) {
        this.getView().setLoading(true);
        let formData = btn.up('form').getValues();
        let check = Ext.Msg.confirm('speichern','Soll das Passwort gespeichert werden?',function (callback) {
            if(callback == 'yes'){
                let store = this.getView().getGrid().getStore();
                let rec = this.getView().getRecordObj();
                rec.set('password', formData.password);

                store.sync({
                    callback: function () {
                        console.log(store)
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

