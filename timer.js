const timerEl=document.getElementById("timer")

const startEl=document.getElementById("start")
const stopEl=document.getElementById("stop")
const resetEl=document.getElementById("reset")

let startTime=0;
let elaps=0;
let timeinterval;

function startTimer(){
    // we need accurate/original time for ex: 123-0=123
    console.log("elapsed start"+" "+elaps)
    startTime=Date.now()-elaps
    timeinterval=setInterval(()=>{
        // when seconds are updating continously subtract to original time its hold in startTime
        elaps=Date.now()-startTime
        timerEl.textContent=formateTime(elaps)
        console.log("elapsedddd"+elaps)
    },10);
    console.log("elapsed-1"+" "+elaps)
    startEl.disabled=true
    stopEl.disabled=false
    

}
function formateTime(elaps){
    console.log("elapsed2"+" "+elaps)
    // Calculate the milliseconds component within the range of 0 to 999
    // 1 mili sec=0.001 seconds  so (elapse % 1000), /10 bcz we need 1-99, if you give /100 then 1-9
    const milisec=Math.floor((elaps % 1000)/10)
    // 0 to 99 if elaps(99)=991  ((991 % 1000)/10)=99, elaps=1002 ((1002 % 1000)/10)=0.2, elaps=1011,--untill 0-99, elaps=2002..((2002 % 1000)/10)=0.2
    const sec=Math.floor((elaps % (1000 *60))/1000)
    const min=Math.floor((elaps % (1000 *60 * 60 ))/(1000*60))
    const hour=Math.floor(elaps/(60*60*60))
 
    
    return (
        (hour ? ((hour > 9 ? hour : "0" + hour)) : "00")+":" +
            (min ? ((min > 9 ? min : "0" + min)) : "00")+":" +
            (sec ? ((sec > 9 ? sec : "0" + sec)) : "00" )+":" +
            
        ( milisec>9 ? milisec:"0"+milisec)
        // if (false) milisec<=9 o/p => 00,01,02..09 
        // if (true) milisec>9 o/p => 10,11,12....99
    );
    
}


function stopTimer(){
    clearInterval(timeinterval)
    startEl.disabled=false
    stopEl.disabled=true
}

function resetTimer(){
    elaps=0
    timerEl.textContent="00:00:00"
    clearInterval(timeinterval)
    startEl.disabled=false
    stopEl.disabled=true
}

startEl.addEventListener("click",startTimer);
stopEl.addEventListener("click",stopTimer)
resetEl.addEventListener("click",resetTimer)

