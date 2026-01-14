function myTime(){
    var myDate= new Date();
     min = (myDate.getMinutes()<10) ? "0" + myDate.getMinutes() :myDate.getMinutes(),
        sec = (myDate.getSeconds() <10 ) ? "0" + myDate.getSeconds() : myDate.getSeconds(),
        M = (myDate.getHours() >= 12) ? "PM" : "AM";
        if(myDate.getHours() ==0){
            hr=12;
        }else if (myDate.getHours() >12){
                    hr =  myDate.getHours() -12;
        } else{
            hr = myDate.getHours();
        }


        /*currentTime=hr + ":" + min + ":" +sec +""; 
        document.getElementsByClassName("H")[0].innerHTML=currentTime;*/
        document.getElementsByClassName("hour1")[0].innerHTML=hr;
         document.getElementsByClassName("min1")[0].innerHTML=min;
          document.getElementsByClassName("sec1")[0].innerHTML=sec;
        document.getElementsByClassName("M1")[0].innerHTML= M;
        myDay=[ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        myMonth=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        day= myDate.getDate();

       /* currentDate= myDay[myDate.getDay()] + ", "+ " " + day + " " + myMonth[myDate.getMonth()] + " " + myDate.getFullYear();  ;
        document.getElementsByClassName("Date")[0].innerHTML=currentDate; */
        document.getElementsByClassName("day1")[0].innerHTML= myDay[myDate.getDay()];
        document.getElementsByClassName("month1")[0].innerHTML= day + ", " + myMonth[myDate.getMonth()];
        document.getElementsByClassName("year1")[0].innerHTML= myDate.getFullYear();
}

var hr, min,sec, M, currentDate, currentTime, myDate, myMonth, day, myDay;
myTime();
setInterval(myTime,1000);
