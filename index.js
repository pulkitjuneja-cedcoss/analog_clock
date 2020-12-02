var h = setInterval(display_time,10);
var new_time;
var hours, minutes,seconds,time;


function  display_time(){

    time_string = new Date();
    console.log(time_string);

   hours = time_string.getHours();
   console.log(hours);

    minutes = time_string.getMinutes();
   console.log(minutes);

    seconds = time_string.getSeconds();
   console.log(seconds);

   
    var a = (hours* 30) + (minutes/2);
    console.log( "a"+a);
    document.getElementById("n1").style.transform =  "rotate("+ a +"deg)" ; 



    var b = (minutes ) * 6;
    console.log( "b"+b);
    document.getElementById("n2").style.transform =  "rotate("+ b +"deg)" ; 

    var c = (seconds ) * 6;
    console.log( "c"+c);

    document.getElementById("n3").style.transform = "rotate("+ c +"deg)" ; 

    
    time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("time").innerHTML = time;

}






