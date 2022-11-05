let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

let EUR = 4.7199
let USD = 4.7477
let GBP = 5.4733

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result;

    switch (currency) {
        case "EUR":
            result = amount / EUR;
            break;

        case "USD":
            result = amount / USD;
            break;

        case "GBP":
            result = amount / GBP;
            break;
    }

    resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
});


formElement.addEventListener("reset", () => {
    amountElement.innerText = "";
    resultElement.innerText = "";
  });
  

