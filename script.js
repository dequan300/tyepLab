"use strict";
let mountain = [
    { name: "Kilimanjaro", height: 5451 },
    { name: "everest", height: 5515 },
    { name: "Denali", height: 84841 }
];
let tallest = mountain[0].height;
let firstName = mountain[0].name;
function theTallestMountain(arrayOfMountains) {
    arrayOfMountains.forEach(mountain => {
        if (mountain.height > tallest) {
            tallest = mountain.height;
            firstName = mountain.name;
        }
        return firstName;
    });
}
let products = [
    { name: "chip", price: 20 },
    { name: "candy", price: 10 },
    { name: "choclate bar", price: 1 }
];
let productPrices = 0;
function calcAverageProductPrice(arrayOfProducts) {
    arrayOfProducts.forEach(product => {
        productPrices += product.price;
    });
    return productPrices / 3;
}
console.log(calcAverageProductPrice(products));
