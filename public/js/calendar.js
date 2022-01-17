document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      displayEventTime: false,
      schedulerLicenseKey: 'GPL-My-Project-Is-Open-Source',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: 
        {
          url:'scheduler/event'
        },
      
    });
  
    calendar.render();
  });


  