 async function scheduleHandler(event){
    event.preventDefault()
    console.log('ere')
    const painting_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1];
    const date =  document.querySelector('input[name="date"]').value;
  if(date){
      const response = await fetch('/api/scheduler',{
          method:'POST',
          body: JSON.stringify({
              date,
              painting_id
          }),
          headers:{
              'Content-Type':'application/json'
          }
      });
      if(response.ok){
          document.location.reload();
      } else{
          alert(response.statusText)
      }
  }
}
var date =document.getElementById('datepicker')
console.log(date)
document.querySelector('.calender-form').addEventListener('submit', scheduleHandler);
  