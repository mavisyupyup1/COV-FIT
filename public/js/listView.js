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

        eventDidMount: function(event, listViewEl) {
          listViewEl.append("<span class='removebtn'>X</span>");
          listViewEl.find(".removebtn").click(function() {
            $('#calendar').fullCalendar('removeEvents', event._id);
          });
        }
       
    });
    calendar.render();
  });


  