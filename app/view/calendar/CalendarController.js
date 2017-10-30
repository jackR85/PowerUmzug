Ext.define('PowerUmzug.view.calendar.CalendarController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.calendarController',


    onDateSelect: function(field, date, eOpts){
        var view = this.getView(),
            store = view.getStore();

        view.setLoading(true);
        store.proxy.extraParams = { date: Ext.Date.format(field.getValue(), 'Y-m-d')}
        store.load({
            callback: function (records, operation, success) {
                if(success){
                    view.setLoading(false);
                }
            },
            failure: function (records, operation, success) {
                console.log('fail: ' + success);
            },
            success: function (records, operation, success) {
                console.log('succ: ' + success);
            }
        });
        this.onRenderKw();

    },

    getDate: function () {
        let date = this.getView().up('panel').down('#datepicker').getValue();
        date = Ext.Date.format(date, 'Y-m-d');
        return date;
    },

    onRenderKw: function () {
        let montag = this.getView().getColumns();
        console.log('column: ' + montag);
        let dateO = this.getDate();
        var date = new Date(dateO);

        // In JavaScript the Sunday has value 0 as return value of getDay() function.
        // So we have to order them first ascending from Monday to Sunday
        // Monday: ((1+6) % 7) = 0
        // Tuesday	((2+6) % 7) = 1
        // Wednesday:	((3+6) % 7) = 2
        // Thursday:	((4+6) % 7) = 3
        // Friday: ((5+6) % 7) = 4
        // Saturday:	((6+6) % 7) = 5
        // Sunday: ((0+6) % 7) = 6
        // (3 - result) is necessary to get the Thursday of the current week.
        // If we want to have Tuesday it would be (1-result)
        var currentThursday = new Date(date.getTime() +(3-((date.getDay()+6) % 7)) * 86400000);
        // At the beginnig or end of a year the thursday could be in another year.
        var yearOfThursday = currentThursday.getFullYear();

        // Get first Thursday of the year
        var firstThursday = new Date(new Date(yearOfThursday,0,4).getTime() +(3-((new Date(yearOfThursday,0,4).getDay()+6) % 7)) * 86400000);

        // +1	we start with week number 1
        // +0.5 an easy and dirty way to round result (in combinationen with Math.floor)
        var weekNumber = Math.floor(1 + 0.5 + (currentThursday.getTime() - firstThursday.getTime()) / 86400000/7);

        return this.getView().up('panel').down('#kwWeek').setValue('KW: ' + weekNumber);

        /*
        Ext.Ajax.request({
            url: 'php/web/index.php?r=tourday/getcalendarweek',
            method:'get',
            headers: { 'Content-Type': 'application/json' },
            jsonData: true,
            params: {
                date: date
            },
            success: function(response){
                console.log('test')

            }
        });
        */

    },

    onEditCell: function (view, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        let win = Ext.widget({
            xtype: 'setTour',
            record: record
        });

        win.show();


    }
})