interface Mountain {
  name: string;
  height: number;
}

let mountain: Mountain[] = [
  { name: "Kilimanjaro", height: 5451 },
  { name: "everest", height: 5515 },
  { name: "Denali", height: 84841 }
];

let tallest: number = mountain[0].height;
let firstName: string = mountain[0].name;

function theTallestMountain(arrayOfMountains: Mountain[]): any {
  arrayOfMountains.forEach(mountain => {
    if (mountain.height > tallest) {
      tallest = mountain.height;
      firstName = mountain.name;
    }
    return firstName;
  });
}

interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: "chip", price: 20 },
  { name: "candy", price: 10 },
  { name: "choclate bar", price: 1 }
];
let productPrices: number = 0;
function calcAverageProductPrice(arrayOfProducts: Product[]): number {
  arrayOfProducts.forEach(product => {
    productPrices += product.price;
  });
  return productPrices / 3;
}
console.log(calcAverageProductPrice(products));

interface InventoryItems {
  product: Product;
  quantity: number;
}

let inventory: InventoryItems[] = [
   {product: { name: "motor", price: 10}, quantity: 10  },
   {product: { name: "motor", price: 12.50}, quantity: 4  },
   {product: { name: "motor", price: 1}, quantity: 20  }

];

let prices:number =0
let quantity: number =0
function calcInventoryValue( arrayOfInventoryItem : InventoryItems[]): any {
arrayOfInventoryItem.forEach(inventoryItem=>{
prices+=inventoryItem.product.price * 
})
}
