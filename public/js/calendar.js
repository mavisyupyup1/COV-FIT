document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      editable: true,
      droppable: true, 
      timeZone: 'America/New_York',
      initialView: 'dayGridMonth',
      displayEventTime: false,
      schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
      height: 'auto',
      events: 
        {
          url:'scheduler/event'
        },
    });
  
    calendar.render();
  });


  