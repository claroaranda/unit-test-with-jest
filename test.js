
test('adds 14 + 9 to equal 23', () => {
    // Importar la función sum del archivo app.js
    const { sum } = require('./app.js');
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
    //expect(fromEuroToDollar(3.5)).toBe(3.745);
    expect(dollars).toBe(expected);
})

test("Five dollar should be 731,3089 yenes", function() {
    const { fromDollarToYen, fromDollarToEuro } = require('./app.js');
    const yen = fromDollarToYen(5);
    const expected = fromDollarToEuro(5) * 156.5;
    expect(yen).toBe(expected);
})

test("Five yen should be 0.0278 pounds", function() {
    const { fromYenToPound, fromYenToEuro } = require('./app.js');
    const yen = fromYenToPound(5);
    const expected = fromYenToEuro(5) * 0.87;
    expect(yen).toBe(expected);
})