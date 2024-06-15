const sum = (a,b) => {
    return a + b;
}

const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

// auxiliar function
const fromDollarToEuro = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.07;
    return valueInEuro;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = fromDollarToEuro(valueInDollar) * 156.5;
    return valueInYen;
}

// auxiliar function
const fromYenToEuro = function(valueInYen) {
    let valueInEuro = valueInYen / 156.5;
    return valueInEuro;
}

const fromYenToPound = function(valueInYen) {
    let valueInPound = fromYenToEuro(valueInYen) * 0.87;
    return valueInPound;
}

// Exporta la función para usarla en otros archivos 
module.exports = { sum, fromEuroToDollar, fromDollarToEuro, fromDollarToYen, fromYenToEuro, fromYenToPound };