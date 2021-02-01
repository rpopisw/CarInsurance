const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", () => {

    it("Normal Producto", () => {
        const coTest = new CarInsurance([new Product("Normal Product", -2, 6)]);
        const products = coTest.updatePrice();
        expect(products[0].sellIn).equal(-3);
        expect(products[0].price).equal(4);
    });

    it("Full Coverage", () => {
        const coTest = new CarInsurance([new Product("Full Coverage", -26, 50)]);
        const products = coTest.updatePrice();
        expect(products[0].sellIn).equal(-27);
        expect(products[0].price).equal(50);
    });


    it("Mega Coverage", () => {
        const coTest = new CarInsurance([new Product("Mega Coverage", 3, 80)]);
        const products = coTest.updatePrice();
        expect(products[0].sellIn).equal(3);
        expect(products[0].price).equal(80);
    });

    it("Special Full Coverage days <= 5", () => {
        const coTest = new CarInsurance([ new Product("Special Full Coverage", 1, 48) ]);
        const products = coTest.updatePrice();
        expect(products[0].sellIn).equal(0);
        expect(products[0].price).equal(51);
    });

    it("Special Full Coverage days between 6 and 10", () => {
        const coTest = new CarInsurance([ new Product("Special Full Coverage", 10, 47) ]);
        const products = coTest.updatePrice();
        expect(products[0].sellIn).equal(9);
        expect(products[0].price).equal(49);
    });

    it("Super Sale", () => {
        const coTest = new CarInsurance([ new Product("Super Sale", 5, 5) ]);
        const products = coTest.updatePrice();
        expect(products[0].sellIn).equal(4);
        expect(products[0].price).equal(3);
    });

});
