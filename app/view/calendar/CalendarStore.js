Ext.define('PowerUmzug.view.calendar.CalendarStore',{
    extend: 'Ext.data.Store',
    alias: 'store.calendarStore',

    model: 'PowerUmzug.view.calendar.CalendarModel',
    autoLoad: true
})