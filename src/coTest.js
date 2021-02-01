const dictionary = require('./products/types')

class Product {
    constructor(name, sellIn, price) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }
}

class CarInsurance {
    constructor(products = []) {
        this.products = products;
    }

    updatePrice = () => {

        this.products.map((product) => {
            let isRegister = dictionary.isTypeRegister(product.name);
            product.price = dictionary[isRegister.function](product.sellIn, product.price);

            if (isRegister.degrade)
            {
                product.sellIn = dictionary.degradeSellIn(product.sellIn);
            }

        })

        return this.products;
    }
}

module.exports = {
    Product,
    CarInsurance
}
