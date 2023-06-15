var firstminute=document.querySelector("#firstminute")
var firstsecond=document.querySelector("#firstsecond")


const btn=document.querySelector("#submit")


btn.addEventListener('click',()=>{
   
    const time=document.querySelector("#time").value;
    var timer=time*60;

    var countdownInterval=setInterval(function(){

        var minutes = Math.floor(timer / 60);
        var seconds = timer % 60;

        var min = minutes.toString().padStart(2, '0');
        var sec = seconds.toString().padStart(2, '0');
        firstminute.innerHTML=min;
        firstsecond.innerHTML=sec

        if (--timer < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "Countdown complete!";
        }

    },1000)

});
