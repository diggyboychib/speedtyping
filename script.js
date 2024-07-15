// My Solution for fetching random quote
const RANDOM_QUOTE_API_URL="https://api.quotable.io/random";
const quoteSpace=document.getElementById("quote");
const inputField=document.getElementById("quote-input");
const randomQuote=async function(){
    const quotePromise=await fetch("https://api.quotable.io/random");
    const quote=await quotePromise.json();
    quoteSpace.textContent="";
    quote.content.split("").forEach(element => {
        const characterSpan=document.createElement("span");
        characterSpan.textContent=element;
        quoteSpace.appendChild(characterSpan)
    });
    inputField.value=null;
}
randomQuote();

inputField.addEventListener("keydown",function(e){
       
       
})


