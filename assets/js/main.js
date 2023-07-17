var quoteText = document.querySelector(".quote");
var autorname = document.querySelector(".autorname");
var btn = document.querySelector(".button");

var quotes=
[
    "Be yourself; everyone else is already taken.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "So many books, so little time.",
    "A room without books is like a body without a soul.",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    "You only live once, but if you do it right, once is enough.",
    "Be the change that you wish to see in the world.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    "If you tell the truth, you don't have to remember anything.",
    "A friend is someone who knows all about you and still loves you.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "Always forgive your enemies; nothing annoys them so much.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "We accept the love we think we deserve."
];
var autors=
[
    "Oscar Wilde",
    "Albert Einstein",
    "Frank Zappa",
    "Marcus Tullius Cicero",
    "Bernard M. Baruch",
    "William W. Purkey",
    "Dr. Seuss",
    "Mae West",
    "Mahatma Gandhi",
    "Robert Frost",
    "Albert Camus",
    "Mark Twain",
    "Maya Angelou",
    "Elbert Hubbard",
    "Oscar Wilde",
    "Mahatma Gandhi"
];

function randQuote(){
    var idx = Math.floor(Math.random() * quotes.length);
    quoteText.innerHTML = quotes[idx];
    autorname.innerHTML = autors[idx];
}

btn.addEventListener("click", randQuote);