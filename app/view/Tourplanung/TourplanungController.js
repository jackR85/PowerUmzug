Ext.define('PowerUmzug.view.Tourplanung.TourplanungController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.tourplanungcontroller',

    onShowWeek: function (btn) {
        let view = btn.up('panel').down('#weekViewWrapper')
        view.setHidden(false);
    },

    onAfterRenderGrid: function () {
        let date = this.getView();
    },

    adNewTour: function (btn) {
        let grid = btn.up('grid'),
            view = grid.getView(),
            store = view.getStore(),
            row = {'tour' : '','tourart':'','markt': '' },
            newRow = store.add(row)[0];
            newRow.newRecord = true;

        grid.findPlugin('rowediting').startEdit(newRow);
    },

    onCancelEdit : function (editor, context) {
        let view = this.getView(),
            record = context.record,
            id = record.getId(),
            store = view.getStore();
        if(record.newRecord){
            store.remove(record)
        }
    },

    onEditRow: function (editor, context) {
        let view = this.getView(),
            plugin = this.getView().findPlugin('rowediting'),
            record = context.record,
            store = view.getStore(),
            tourNr = context.newValues.tourNr,
            tourart = context.newValues.tourart,
            markt = context.newValues.markt;

        if (tourNr == '' || tourart == null || markt == null){
            console.og(context)
            return Ext.Msg.alert('Achtung', 'Es wurden nicht alle Felder ausgefüllt')
        }

        store.sync({
            success: function(batch, opts) {
                console.log('controller: success');
            },
            failure: function (batch, opts) {
                Ext.Msg.alert('achtung', batch.operations[0].getError());
                plugin.startEdit(record);
            },
            callback: function (batch, options) {

            }
        });


    },


    onDelete: function (btn) {
        let selected = this.getView().getSelectionModel().getSelection();
        if(selected[0]){
            Ext.Msg.confirm('Achtung', 'Soll der Eintrag wirklich gelöscht werden?', function (response) {
                if(response == 'yes'){
                    let view = btn.up('grid').getView(),
                        row = view.getSelectionModel().getSelection(),
                        store = view.getStore();

                    store.remove(row);
                    store.sync({
                        success: function(batch, opts) {
                            store.reload();
                        },
                        failure: function (batch, opts) {
                            Ext.Msg.alert('achtung', batch.operations[0].getError());
                            store.reload();
                        },
                    });
                    store.reload();
                }
            });
        }else{
            Ext.Msg.alert('Achtung', 'Es wurde nichts ausgewählt')
        }

    }
});