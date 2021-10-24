let currData=document.getElementById('date');
let weather=document.getElementById('weather');
let place=document.getElementById('location');
let tempa=document.getElementById('tamp');

const tempStatus="clouds";

var inpu=document.getElementById('inpu');
var cityname;
var search=document.querySelector('#search');
search.addEventListener("click",()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+document.querySelector('input').value+'&appid=cd53e372a71a5447e5178d1bfdc17ff0').then(response=>response.json()).then(data=>showinfo(data)).catch(err=>alert("City name not valid"));
    document.querySelector('input').value="";
})
console.log(cityname);
var info;


console.log(info);

function showinfo(data){
     place.innerHTML=data.name+","+data.sys.country
     tempa.innerHTML=`${Math.ceil(data.main.temp-273)}<sup>o</sup>C`
}

const currDay=()=>{
    var week=new Array(7);
    week[0]="Sun";
    week[1]="Mon";
    week[2]="Tue";
    week[3]="Wed";
    week[4]="Thr";
    week[5]="Fri";
    week[6]="Sat";
    let currTime=new Date();
   return week[currTime.getDay()];
    //give the index of arrays of days
}
var currDate=()=>{
    var date=new Date();
    var month=date.getMonth()+1;
    var day=date.getDate();
    var year=date.getFullYear();
    var hour=date.getHours();
    var min=date.getMinutes();
    let sta="AM";
    if(hour>12){
        hour=hour-12;
        sta="PM";
    }else if(hour==00){
        hour=12;
    }
    console.log(month+"/"+day);
    
    console.log(hour+":"+min+" "+sta);
    hour=hour.toString();
    min=min.toString();
    var rhours=hour.padStart(2,"0");
    var rmins=min.padStart(2,"0");
    console.log(rhours+":"+rmins+" "+sta);
    currData.innerHTML=rhours+":"+rmins+" "+sta;
}
currDate();
