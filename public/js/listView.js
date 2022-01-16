document.addEventListener('DOMContentLoaded', function() {
    var listViewEl = document.getElementById('list-view');
    var calendar = new FullCalendar.Calendar(listViewEl, {
      initialView: 'listMonth',
      events: 
        {
          url:'./scheduler/event'
        },
      
    });
  
    calendar.render();
  });


  