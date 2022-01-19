document.addEventListener('DOMContentLoaded', function() {
    var listViewEl = document.getElementById('list-view');
    var calendar = new FullCalendar.Calendar(listViewEl, {
      timeZone: 'America/New_York',
      initialView: 'listDay',
      displayEventTime: false,
      schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
      height: 'auto',
      events: 
        {
          url:'./scheduler/event'
        },
    });
    calendar.render();
  });


  