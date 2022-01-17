document.addEventListener('DOMContentLoaded', function() {
    var listViewEl = document.getElementById('list-view');
    var calendar = new FullCalendar.Calendar(listViewEl, {
      initialView: 'listDay',
      displayEventTime: false,
      schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
      events: 
        {
          url:'./scheduler/event'
        },
    });
    calendar.render();
  });


  