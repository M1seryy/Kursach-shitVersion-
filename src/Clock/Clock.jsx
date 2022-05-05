import '../Clock/Clock.css';
const Clock = () =>
{
    const showTime =() =>
    {
        let time = new Date();
        let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
     
      
        if (hour > 12) {
            hour -= 12;
           
        }
        if (hour == 0) {
            hour = 12;
           
        }
      
        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
        let nowTime = [hour,min,sec];
        let currentTime = nowTime.join(":");
        document.getElementById('clock').innerHTML = currentTime;
       
    }
    return(
    <h1  id='clock'>
        {setInterval(showTime(),1000)}
    </h1>
    );
   
   
}

export default Clock;