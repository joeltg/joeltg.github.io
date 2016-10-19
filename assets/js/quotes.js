/**
 * Created by joel on 9/11/16.
 */

var quotes = [
    "Take wrong turns. Talk to strangers. Do things without always knowing how they'll turn out.\nAnd remember that you are always making up the future as you go.",
    "Most people are other people. Their thoughts are someone else's opinions, their lives a mimicry, their passions a quotation.",
    "A foolish consistency is the hobgoblin of little minds.",
    "The easiest way to predict the future is to invent it."
];

var quote = document.getElementById('quote');
quote.innerText = '"' + quotes[Math.floor(Math.random() * quotes.length)] + '"';
