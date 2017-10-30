Ext.define('PowerUmzug.view.userVerwaltung.UserverwaltungChangePwdView',{
    extend: 'Ext.window.Window',
    requires:[
        'PowerUmzug.view.userVerwaltung.UserverwaltungStore'
    ],

    controller:'UserverwaltungChangePwdController',
    alias:'widget.changePwdWindow',
    itemId:'changepwdwindow',

    title: 'Passwort ändern',

    config: {
        grid: null,
        recordObj: null
    },

    items:[
        {
            xtype: 'form',
            bodyPadding: 10,
            itemId: 'formchangePwd',
            items:[
                {
                    xtype: 'textfield',
                    fieldLabel: 'passwort',
                    inputType:'password',
                    allowBlank: false,
                    name: 'password'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'passwort wiederholen',
                    inputType: 'password',
                    allowBlank: false,
                    name: 'passwordVerify',

                    validator: function(value) {
                        var password1 = this.previousSibling('[name=password]');
                        return (value === password1.getValue()) ? true : 'Passwörter stimmen nicht überein'
                    }
                }
            ],
            buttons: [
                '->',
                {
                    text: 'abbrechen',
                    handler: 'onAbort',
                    iconCls: 'x-fa fa-ban'
                },
                {
                    text:'senden',
                    handler: 'onSaveNewPwd',
                    iconCls: 'x-fa fa-share-square-o',
                    formBind: true
                }
            ]
        }
    ]

})