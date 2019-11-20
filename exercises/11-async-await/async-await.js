/**
 * As a user, I should be able to click on a button and get a quote, so I can learn about what ron-swanson's opinions are.
 *
 *
 *  Developer notes:
 *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
 *
 *
 * This is the API you will be using. The method will be GET.
 * https://ron-swanson-quotes.herokuapp.com/v2/quotes
 */

let button = document.querySelector("button");


const gneratedQuote = document.querySelector("#quote");
//   gneratedQuote.textContent = ("click", Math.random(response));
button.addEventListener('click', () => {
    let quote = null;
    getData().then(response => quote = response.data);
    document.querySelector('#quote').textContent = quote;
});

async function getData() {
    let reponse = await fetch(
        "https://ron-swanson-quotes.herokuapp.com/v2/quotes", {
            // method: "get"
            return: reponse
        })
};

// .then(reponse => reponse.json())
// .then(reponse => response)

//   ,response => {
//     return response;
//       }
//     );
//     return response;
//   }