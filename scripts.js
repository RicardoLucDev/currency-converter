const convertButton = document.querySelector(".convert-button")
const currencySelectFromConvert = document.querySelector(".currency-select-from-convert")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyFromConvert = document.querySelector(".currency-from-convert")
    const currencyToConvert = document.querySelector(".currency-to-converted")

    const dolarToday = 5.6633
    const euroToday = 6.3211
    const libraToday = 7.5211
    const bitcoinToday = 586122.88

    if (currencySelectFromConvert.value == "real") {
        if (currencySelectToConvert.value == "dolar") {
            currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolarToday)
        }
        else if (currencySelectToConvert.value == "euro") {
            currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euroToday)
        }
        else if (currencySelectToConvert.value == "libra") {
            currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libraToday)
        }
        else if (currencySelectToConvert.value == "bitcoin") {
            currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC",
                maximumSignificantDigits: 4
            }).format(inputCurrencyValue / bitcoinToday)
        }

        currencyFromConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
    else if (currencySelectFromConvert.value == "dolar") {
        if (currencySelectToConvert.value == "real") {
            currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * dolarToday)
        }
        else if (currencySelectToConvert.value == "euro") {
            currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * dolarToday / euroToday)
        }
        else if (currencySelectToConvert.value == "libra") {
            currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue * dolarToday / libraToday)
        }
        else if (currencySelectToConvert.value == "bitcoin") {
            currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC",
                maximumSignificantDigits: 4
            }).format(inputCurrencyValue * dolarToday / bitcoinToday)
        }

        currencyFromConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    else if (currencySelectFromConvert.value == "euro") {
        if (currencySelectToConvert.value == "dolar") {
            currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * euroToday / dolarToday)
        }
        else if (currencySelectToConvert.value == "real") {
            currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * euroToday)
        }
        else if (currencySelectToConvert.value == "libra") {
            currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue * euroToday / libraToday)
        }
        else if (currencySelectToConvert.value == "bitcoin") {
            currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC",
                maximumSignificantDigits: 4
            }).format(inputCurrencyValue * euroToday / bitcoinToday)
        }

        currencyFromConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    else if (currencySelectFromConvert.value == "libra") {
        if (currencySelectToConvert.value == "dolar") {
            currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * libraToday / dolarToday)
        }
        else if (currencySelectToConvert.value == "euro") {
            currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * libraToday / euroToday)
        }
        else if (currencySelectToConvert.value == "real") {
            currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * libraToday)
        }
        else if (currencySelectToConvert.value == "bitcoin") {
            currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC",
                maximumSignificantDigits: 4
            }).format(inputCurrencyValue * libraToday / bitcoinToday)
        }

        currencyFromConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }
    else if (currencySelectFromConvert.value == "bitcoin") {
        if (currencySelectToConvert.value == "dolar") {
            currencyToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue * bitcoinToday / dolarToday)
        }
        else if (currencySelectToConvert.value == "euro") {
            currencyToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue * bitcoinToday / euroToday)
        }
        else if (currencySelectToConvert.value == "libra") {
            currencyToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue * bitcoinToday / libraToday)
        }
        else if (currencySelectToConvert.value == "real") {
            currencyToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue * bitcoinToday)
        }

        currencyFromConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
            maximumSignificantDigits: 4
        }).format(inputCurrencyValue)
    }

}

convertButton.addEventListener("click", convertValues)

currencySelectToConvert.addEventListener("change", function () {
    const currencyName = document.getElementById("currency-name-to-convert")
    const currencyImg = document.getElementById("currency-flag-to-convert")

    if (currencySelectToConvert.value == "dolar") {
        currencyName.innerHTML = "US$ Dólar Americano"
        currencyImg.src = "./assets/dollar.png"
    }
    else if (currencySelectToConvert.value == "euro") {
        currencyName.innerHTML = "€ Euro"
        currencyImg.src = "./assets/euro.png"
    }
    else if (currencySelectToConvert.value == "libra") {
        currencyName.innerHTML = "£ Libra"
        currencyImg.src = "./assets/libra.png"
    }
    else if (currencySelectToConvert.value == "bitcoin") {
        currencyName.innerHTML = "₿ Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }
    else if (currencySelectToConvert.value == "real") {
        currencyName.innerHTML = "R$ Real"
        currencyImg.src = "./assets/real.png"
    }

    convertValues()
})

currencySelectFromConvert.addEventListener("change", function () {
    const currencyName = document.getElementById("currency-name-from-convert")
    const currencyImg = document.getElementById("currency-flag-from-convert")

    if (currencySelectFromConvert.value == "dolar") {
        currencyName.innerHTML = "US$ Dólar Americano"
        currencyImg.src = "./assets/dollar.png"
    }
    else if (currencySelectFromConvert.value == "euro") {
        currencyName.innerHTML = "€ Euro"
        currencyImg.src = "./assets/euro.png"
    }
    else if (currencySelectFromConvert.value == "libra") {
        currencyName.innerHTML = "£ Libra"
        currencyImg.src = "./assets/libra.png"
    }
    else if (currencySelectFromConvert.value == "bitcoin") {
        currencyName.innerHTML = "₿ Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }
    else if (currencySelectFromConvert.value == "real") {
        currencyName.innerHTML = "R$ Real"
        currencyImg.src = "./assets/real.png"
    }

    convertValues()
})