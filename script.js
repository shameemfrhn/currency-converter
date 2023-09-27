// script.js
const fromCurrencySelect = document.getElementById("fromCurrency");
const toCurrencySelect = document.getElementById("toCurrency");
const amountInput = document.getElementById("amount");
const convertedAmountText = document.getElementById("convertedAmount");

const exchangeRate = {
    INR: {
        USD: 0.014, // 1 INR to USD
    },
    USD: {
        INR: 71.19, // 1 USD to INR
    },
};

// Update converted amount when input or select values change
amountInput.addEventListener("input", convertCurrency);
fromCurrencySelect.addEventListener("change", convertCurrency);
toCurrencySelect.addEventListener("change", convertCurrency);

function convertCurrency() {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount)) {
        convertedAmountText.textContent = "Enter a valid amount";
        return;
    }

    if (exchangeRate[fromCurrency] && exchangeRate[fromCurrency][toCurrency]) {
        const rate = exchangeRate[fromCurrency][toCurrency];
        const convertedAmount = (amount * rate).toFixed(2);
        convertedAmountText.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
    } else {
        convertedAmountText.textContent = "Conversion not available";
    }
}
