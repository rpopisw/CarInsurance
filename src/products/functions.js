/**typesProducts: lista de tipo de producto tienen las siguiente propiedades:
 * name: Nombre del producto, este debe ser igual al nombre que se le asigna al objeto al crear.
 * function: Nombre de la función que ejecutara la regla de negocio.
 * degradeSellIn (boolean) =  bandera  para indicar si se debe restar dias
 */

const typesProducts = [{
    'name': 'Full Coverage',
    'function': 'fullCoverage',
    'degradeSellIn': true
}, {
    'name': 'Mega Coverage',
    'function': 'megaCoverage',
    'degradeSellIn': false
}, {
    'name': 'Special Full Coverage',
    'function': 'specialFullCoverage',
    'degradeSellIn': true
}, {
    'name': 'Super Sale',
    'function': 'superSale',
    'degradeSellIn': true
}];


const sellInValidation = (sellIn, price) => {
    price += 1;
    if (price < 50) {
        if (sellIn < 11)
            price += 1;
        if (sellIn < 6)
            price += 1;
    }
    return price;
}

const isTypeRegister = (name) => {
    let index = typesProducts.map(function (e) {
        return ((e.name).toLowerCase()).trim()
    }).indexOf(((name).toLowerCase()).trim());
    if (index >= 0) {
        return {
            'function': typesProducts[index].function,
            'degrade': typesProducts[index].degradeSellIn
        }
    } else {
        return {
            'function': 'normalProduct',
            'degrade': true
        }
    }
}

const normalProduct = (sellIn, price) => {
    if (price > 0) {
        price -= 1;
        if (sellIn < 0 && price > 0)
            price -= 1;
    }
    return price;
}

const degradeSellIn = (sellIn) => {
    sellIn -= 1;
    return sellIn;
}

const fullCoverage = (sellIn, price) => {
    if (price < 50) {
        price += 1;
        if (sellIn < 0 && price < 50) {
            price += 1
        }
    }
    return price;
}

const megaCoverage = (sellIn, price) => {
    return 80;
}

const specialFullCoverage = (sellIn, price) => {
    if (price < 50) {
        price = sellInValidation(sellIn, price)
    }
    if (price < 0) {
        price = 0
    }
    return price;
}

const superSale =  (sellIn, price) => {

    if (price > 0) {
        price -= 2;
    }
    if (price < 0)
        price = 0;
    return price;
}

module.exports = {
    superSale,
    megaCoverage,
    fullCoverage,
    normalProduct,
    isTypeRegister,
    specialFullCoverage,
    degradeSellIn

}
