
const RANDOM_QUOTE_API_URL="https://api.quotable.io/random";
const quoteSpace=document.getElementById("quote");
const inputField=document.getElementById("quote-input");
const timer=document.getElementById("timer");


let myTime;
function setTime(){
    myTime=new Date();
    timer.textContent=0;
    
    setInterval(() => {
        timer.textContent=time();
    }, 1000);
    
}

function time(){
    return Math.floor((new Date()-myTime)/1000);
}

const randomQuote=async function(){
    const quotePromise=await fetch("https://api.quotable.io/random");
    const quote=await quotePromise.json();
    quoteSpace.textContent="";
    setTime();
    quote.content.split("").forEach(element => {
        const characterSpan=document.createElement("span");
        characterSpan.textContent=element;
        quoteSpace.appendChild(characterSpan);
        
    });
    inputField.value=null;
}
randomQuote();

inputField.addEventListener("input",function(e){
    
       const mainQuote=quoteSpace.childNodes;
       const inputValue=this.value.split("");
       let flag=true;
       mainQuote.forEach((ele,index)=>{
        if(inputValue[index]==null){
            ele.classList.remove("correct")
            ele.classList.remove("error")
            flag=false;
        }
        else if(ele.textContent==inputValue[index]){
            ele.classList.add("correct");
            ele.classList.remove("error")
        }else{
            ele.classList.add("error");
            ele.classList.remove("correct")
            flag=false;
        }
        
        
       })
       if(flag)randomQuote();

       
})


