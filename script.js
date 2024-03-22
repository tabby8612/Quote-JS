const APIURL = "https://api.quotable.io/random";
const quote = document.getElementById("quote")
const author = document.getElementById("author");
const newQuoteBtn = document.querySelector(".quote-box button");
const tweetBtn = document.querySelectorAll(".quote-box button")[1];



async function getQuote(url) {
    const response = await fetch(url);
    const data = await response.json();

    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}


function tweet(text) {
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "Tweet Window", "width=600, height=300");

}



getQuote(APIURL);


newQuoteBtn.addEventListener("click", () => {
    getQuote(APIURL);
});


tweetBtn.addEventListener("click", () => {
    tweet(quote.innerHTML);
});

