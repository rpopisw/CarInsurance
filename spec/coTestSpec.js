const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", function() {

  it("Normal Producto", function() {
    const coTest = new CarInsurance([ new Product("Normal Product", -2, 6) ]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(-3);
    expect(products[0].price).equal(4);
  });

});
