function Product(name, category, hasDiscount, price) {
    this.productName = name;
    this.productCategory = category;
    this.productDiscount = hasDiscount;
    this.productPrice = price;
}

let products = [
    new Product("Milk", "drink", true, 50),
    new Product("Gum", "food", false, 5),
    new Product("Bread", "food", false, 20),
    new Product("Orange Juice", "drink", true, 55),
    new Product("Coffee", "drink", false, 200),
    new Product("Chips", "food", true, 100),
    new Product("Chocolate", "food", false, 60),
    new Product("Toothpaste", "hygeneProduct", true, 80),
    new Product("Soap", "hygeneProduct", false, 40),
    new Product("Apple", "food", false, 15),
    new Product("Still Water", "drink", false, 20),
    new Product("Toiler Paper", "hygeneProduct", false, 15),
    new Product("Avocado", "food", false, 45),
    new Product("Banana", "food", true, 50),
    new Product("Newspaper", "periodical", false, 10)]

console.log("-------------|TASK 1|-------------")

function priceGreaterThan20(products) {
    return products.productPrice > 20;
}
let greaterThan20 = products.filter(priceGreaterThan20)

console.log("These products are above 20:")
function logNames(greaterThan20){
    console.log(`${greaterThan20.productName}`)
}
greaterThan20.forEach(logNames)

console.log("-------------|TASK 2|-------------")

function categoryFood(products){
    return products.productCategory === "food";
}

let foodCategory = products.filter(categoryFood)

function foodDiscount(foodCategory){
    return foodCategory.productDiscount === true;
}

let discountFood = foodCategory.filter(foodDiscount)

function logDiscountFoodNames(discountFood){
    console.log(`${discountFood.productName}`)
}

console.log("These food products are on discount:")
discountFood.forEach(logDiscountFoodNames)

console.log("-------------|TASK 3|-------------")

function allProductsDiscount(products){
    return products.productDiscount === true;
}

function getPrices(products){
    return products.productPrice
}

function sumPrices(sum, price){
    return sum += price
}

let sumProductPrices = products
.filter(allProductsDiscount)
.map(getPrices)
.reduce(sumPrices, 0)

let discountProductsArray = []

let arrayProducts = products.filter(allProductsDiscount)

function logArrayProducts(arrayProducts){
    discountProductsArray.push(`${arrayProducts.productName}`)
}
arrayProducts.forEach(logArrayProducts)

let averagePrice = sumProductPrices / discountProductsArray.length

console.log("The average price of all products on discount is:")
console.log(averagePrice)

console.log("-------------|TASK 4|-------------")

function allProductsNoDiscount(products){
    return products.productDiscount === false;
}

discountVowelArray = []

function startWithVowel(products){
    if (products.productName.startsWith('A') || products.productName.startsWith('E') || products.productName.startsWith('I') || products.productName.startsWith('O') || products.productName.startsWith('U') === true){
        return products.productName
    }
}

let startsWithVowelNoDiscount = products
.filter(allProductsNoDiscount)
.filter(startWithVowel)


console.log("These products start with a vowel and are not on discount:")
function showNameAndPrice (startsWithVowelNoDiscount){
    console.log(`Name: ${startsWithVowelNoDiscount.productName} | Price: ${startsWithVowelNoDiscount.productPrice}`)
}

startsWithVowelNoDiscount.forEach(showNameAndPrice)

console.log("-------------|TASK 5|-------------")

let sortedProducts = []

function copyArray(products){
    products.forEach(x => sortedProducts.push(x))
    return sortedProducts
}

copyArray(products)

function sortPrices(price1, price2){
    return price1.productPrice - price2.productPrice
}
sortedProducts.sort(sortPrices)

console.log("These are the prices in ascending order:")

function logNamesPrices (array){
    console.log(`${array.productName} ${array.productPrice}`)
}

sortedProducts.forEach(logNamesPrices)

