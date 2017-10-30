    Ext.define('Powerumzug.classes.Login', {
        statics:{
            logout: function(callback, scope){
                Ext.Ajax.request({
                    url: 'php/ajax.php',
                    params: {
                        action: 'logout'
                    },
                    success: function(response){
                        try{
                            callback.call(scope);
                        }catch(e){
                            //TODO
                        }
                    }
                });
            }
        },

        isLoggedIn: function(callback, scope){
            Ext.Ajax.request({
                url: 'php/ajax.php',
                params: {
                    action: 'checkSession'
                },
                success: function(response){
                    try{
                        var data = Ext.JSON.decode(response.responseText);
                            callback.call(scope, data);
                    }catch(e){
                        //TODO
                    }
                }
            });
        }

    });