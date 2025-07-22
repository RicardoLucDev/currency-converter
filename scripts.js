const convertButton = document.querySelector(".convert-button")
const currencySelectFromConvert = document.querySelector(".currency-select-from-convert")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")

async function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyFromConvert = document.querySelector(".currency-from-convert")
    const currencyToConvert = document.querySelector(".currency-to-converted")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL").then(res => res.json())
    const BRL_USD = data.USDBRL.ask, BRL_EUR = data.EURBRL.ask, BRL_GBP = data.GBPBRL.ask, BRL_BTC = data.BTCBRL.ask

    if (currencySelectFromConvert.value == "real") {
        if (currencySelectToConvert.value == "dolar")
            currencyToConvert.innerHTML = formatCurrency((inputCurrencyValue / BRL_USD), "USD");
        else if (currencySelectToConvert.value == "euro")
            currencyToConvert.innerHTML = formatCurrency((inputCurrencyValue / BRL_EUR), "EUR");
        else if (currencySelectToConvert.value == "libra")
            currencyToConvert.innerHTML = formatCurrency((inputCurrencyValue / BRL_GBP), "GBP");
        else if (currencySelectToConvert.value == "bitcoin")
            currencyToConvert.innerHTML = formatCurrency((inputCurrencyValue / BRL_BTC), "BTC");

        currencyFromConvert.innerHTML = formatCurrency(inputCurrencyValue, "BRL");
    }
    else if (currencySelectFromConvert.value == "dolar") {
        if (currencySelectToConvert.value == "real")
            currencyToConvert.innerHTML = formatCurrency((inputCurrencyValue * BRL_USD), "BRL");
        else if (currencySelectToConvert.value == "euro")
            currencyToConvert.innerHTML = formatCurrency((inputCurrencyValue * BRL_USD / BRL_EUR), "EUR");
        else if (currencySelectToConvert.value == "libra")
            currencyToConvert.innerHTML = formatCurrency((inputCurrencyValue * BRL_USD / BRL_GBP), "GBP");
        else if (currencySelectToConvert.value == "bitcoin")
            currencyToConvert.innerHTML = formatCurrency((inputCurrencyValue * BRL_USD / BRL_BTC), "BTC");

        currencyFromConvert.innerHTML = formatCurrency(inputCurrencyValue, "USD");
    }
    else if (currencySelectFromConvert.value == "euro") {
        if (currencySelectToConvert.value == "dolar")
            currencyToConvert.innerHTML = formatCurrency((inputCurrencyValue * BRL_EUR / BRL_USD), "USD");
        else if (currencySelectToConvert.value == "real")
            currencyToConvert.innerHTML = formatCurrency((inputCurrencyValue * BRL_EUR), "BRL");
        else if (currencySelectToConvert.value == "libra")
            currencyToConvert.innerHTML = formatCurrency((inputCurrencyValue * BRL_EUR / BRL_GBP), "GBP");
        else if (currencySelectToConvert.value == "bitcoin")
            currencyToConvert.innerHTML = formatCurrency((inputCurrencyValue * BRL_EUR / BRL_BTC), "BTC");

        currencyFromConvert.innerHTML = formatCurrency(inputCurrencyValue, "EUR");
    }
    else if (currencySelectFromConvert.value == "libra") {
        if (currencySelectToConvert.value == "dolar")
            currencyToConvert.innerHTML = formatCurrency((inputCurrencyValue * BRL_GBP / BRL_USD), "USD");
        else if (currencySelectToConvert.value == "euro")
            currencyToConvert.innerHTML = formatCurrency((inputCurrencyValue * BRL_GBP / BRL_EUR), "EUR");
        else if (currencySelectToConvert.value == "real")
            currencyToConvert.innerHTML = formatCurrency((inputCurrencyValue * BRL_GBP), "BRL");
        else if (currencySelectToConvert.value == "bitcoin")
            currencyToConvert.innerHTML = formatCurrency((inputCurrencyValue * BRL_GBP / BRL_BTC), "BTC");

        currencyFromConvert.innerHTML = formatCurrency(inputCurrencyValue, "GBP");
    }
    else if (currencySelectFromConvert.value == "bitcoin") {
        if (currencySelectToConvert.value == "dolar")
            currencyToConvert.innerHTML = formatCurrency((inputCurrencyValue * BRL_BTC / BRL_USD), "USD");
        else if (currencySelectToConvert.value == "euro")
            currencyToConvert.innerHTML = formatCurrency((inputCurrencyValue * BRL_BTC / BRL_EUR), "EUR");
        else if (currencySelectToConvert.value == "libra")
            currencyToConvert.innerHTML = formatCurrency((inputCurrencyValue * BRL_BTC / BRL_GBP), "GBP");
        else if (currencySelectToConvert.value == "real")
            currencyToConvert.innerHTML = formatCurrency((inputCurrencyValue * BRL_BTC), "BRL");

        currencyFromConvert.innerHTML = formatCurrency(inputCurrencyValue, "BTC");
    }
}

function formatCurrency(value, currency) {
    if (currency === "BRL") {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: currency
        }).format(value);
    } else if (currency === "USD") {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: currency
        }).format(value);
    } else if (currency === "EUR") {
        return new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: currency
        }).format(value);
    } else if (currency === "GBP") {
        return new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: currency
        }).format(value);
    } else if (currency === "BTC") {
        return new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: currency,
            maximumSignificantDigits: 4
        }).format(value);
    }

    return value;
}

convertButton.addEventListener("click", convertValues)

currencySelectToConvert.addEventListener("change", function () {
    const currencyName = document.getElementById("currency-name-to-convert")
    const currencyImg = document.getElementById("currency-flag-to-convert")

    if (currencySelectToConvert.value == "dolar") {
        currencyName.innerHTML = "US$ Dólar Americano"
        currencyImg.src = "./assets/dollar.png"
        document.getElementById('usdFromConvert').hidden = hiddenOption(true)
    }
    else if (currencySelectToConvert.value == "euro") {
        currencyName.innerHTML = "€ Euro"
        currencyImg.src = "./assets/euro.png"
        document.getElementById('eurFromConvert').hidden = hiddenOption(true)
    }
    else if (currencySelectToConvert.value == "libra") {
        currencyName.innerHTML = "£ Libra Esterlina"
        currencyImg.src = "./assets/libra.png"
        document.getElementById('gbpFromConvert').hidden = hiddenOption(true)
    }
    else if (currencySelectToConvert.value == "bitcoin") {
        currencyName.innerHTML = "₿ Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
        document.getElementById('btcFromConvert').hidden = hiddenOption(true)
    }
    else if (currencySelectToConvert.value == "real") {
        currencyName.innerHTML = "R$ Real"
        currencyImg.src = "./assets/real.png"
        document.getElementById('brlFromConvert').hidden = hiddenOption(true)
    }

    convertValues()
})

currencySelectFromConvert.addEventListener("change", function () {
    const currencyName = document.getElementById("currency-name-from-convert")
    const currencyImg = document.getElementById("currency-flag-from-convert")

    if (currencySelectFromConvert.value == "dolar") {
        currencyName.innerHTML = "US$ Dólar Americano"
        currencyImg.src = "./assets/dollar.png"
        document.getElementById('usdToConvert').hidden = hiddenOption(false)
    }
    else if (currencySelectFromConvert.value == "euro") {
        currencyName.innerHTML = "€ Euro"
        currencyImg.src = "./assets/euro.png"
        document.getElementById('eurToConvert').hidden = hiddenOption(false)
    }
    else if (currencySelectFromConvert.value == "libra") {
        currencyName.innerHTML = "£ Libra"
        currencyImg.src = "./assets/libra.png"
        document.getElementById('gbpToConvert').hidden = hiddenOption(false)
    }
    else if (currencySelectFromConvert.value == "bitcoin") {
        currencyName.innerHTML = "₿ Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
        document.getElementById('btcToConvert').hidden = hiddenOption(false)
    }
    else if (currencySelectFromConvert.value == "real") {
        currencyName.innerHTML = "R$ Real"
        currencyImg.src = "./assets/real.png"
        document.getElementById('brlToConvert').hidden = hiddenOption(false)
    }

    convertValues()
})

function hiddenOption(baseOrNot) {
    if (baseOrNot) {
        document.querySelectorAll('.currency-select-from-convert option').forEach(opcao => opcao.hidden = false);
        return true;
    } else {
        document.querySelectorAll('.currency-select-to-convert option').forEach(opcao => opcao.hidden = false);
        return true;
    }
}