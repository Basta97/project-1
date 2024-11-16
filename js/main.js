let quote = ["“So many books, so little time.”","“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”","“A room without books is like a body without a soul.”","“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”","“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”","“You only live once, but if you do it right, once is enough.”","“Be the change that you wish to see in the world.”","“In three words I can sum up everything I've learned about life: it goes on.”",];


function displayQuote(quote) {
    let quoteElement = document.getElementById("quoteContainer");
    quoteElement.innerHTML = quote[Math.floor(Math.random()*quote.length)];
}


function displayq(){
    displayQuote(quote);
}
