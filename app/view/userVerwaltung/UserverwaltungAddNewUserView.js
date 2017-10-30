Ext.define('PowerUmzug.view.userVerwaltung.UserverwaltungAddNewUserView',{
    extend: 'Ext.window.Window',
    requires:[
        'PowerUmzug.view.userVerwaltung.UserverwaltungController',
        'PowerUmzug.view.userVerwaltung.UserverwaltungStore'
    ],

    controller:'UserverwaltungAddNewUserController',
    alias:'widget.newUserWindow',
    itemId:'addNewUserWin',

    title: 'Neuer User',

    config: {
        grid: null
    },

    items:[
        {
            xtype: 'form',
            bodyPadding: 10,
            itemId: 'formReg',
            items:[
                {
                    xtype: 'combo',
                    fieldLabel: 'Rolle',
                    store: [
                        ['admin', 'Admin'],
                        ['user', 'User']
                    ],
                    allowBlank: false,
                    name: 'role'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Vorname, Name',
                    allowBlank: false,
                    name: 'fullName'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Benutzer Name',
                    allowBlank: false,
                    name: 'nickName'
                },
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
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: 'Führerschein vorhanden',
                    // Arrange radio buttons into two columns, distributed vertically
                    vertical: true,
                    items: [
                        {
                            boxLabel: 'ja',
                            name: 'driverLicense',
                            inputValue: 1,
                            checked: true
                            //checked: true
                        },
                        {
                            boxLabel: 'nein',
                            name: 'driverLicense',
                            inputValue: 0,
                            style: {
                                marginLeft: '10px'
                            }
                        }
                    ]
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
                    handler: 'onSaveReg',
                    iconCls: 'x-fa fa-share-square-o',
                    formBind: true
                }
            ]
        }
    ]

})