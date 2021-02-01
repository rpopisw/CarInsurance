const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", () =>  {

  it("Normal Producto", () => {
    const coTest = new CarInsurance([ new Product("Normal Product", -2, 6) ]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(-3);
    expect(products[0].price).equal(4);
  });

  it("Full Coverage", () => {
    const coTest = new CarInsurance([ new Product("Full Coverage", -26, 50) ]);
    const products = coTest.updatePrice();
    expect(products[0].sellIn).equal(-27);
    expect(products[0].price).equal(50);
  });

});
