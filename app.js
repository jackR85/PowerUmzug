/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    name: 'PowerUmzug',
    extend: 'PowerUmzug.Application',

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    //mainView: 'Homework.view.main.Main',

    //-------------------------------------------------------------------------
    // Most customizations should be made to Homework.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------

    init: function() {
        var app = new PowerUmzug.Application();
    }
});
