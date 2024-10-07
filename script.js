/*
 * CS20 HW3: Joe's Hotdog Stand - script.js
 * By John Puka
 * 09/30/24
 */

const PRICE_HOTDOG        =   4.80;
const PRICE_FRIES         =   3.95;
const PRICE_DRINKS        =   1.99;
const MASS_TAX_RATE       =   0.0625;
const DISCOUNT_THRESHOLD  =   25;
const DISCOUNT_RATE       =   0.10;

/* Rounds to two decimals */
function showMoney(value) {
    let roundedValue = Math.round(value * 100) / 100;
    return roundedValue.toString().includes(".") ? roundedValue.toString() +
           "00".slice(0, 2 - roundedValue.toString().split(".")[1].length) : 
           roundedValue + ".00";
}

/* Calculates the order total price */
function calculateOrder() {
    let numDogs = parseInt(prompt("How many hotdogs do you want?")) || 0;
    let numFries = parseInt(prompt("How many fries do you want?")) || 0;
    let numSoda = parseInt(prompt("How many sodas do you want?")) || 0;

    let subtotal = (numDogs * PRICE_HOTDOG) + (numFries * PRICE_FRIES) + 
                   (numSoda * PRICE_DRINKS);

    let discount = 0;
    if (subtotal >= DISCOUNT_THRESHOLD) {
        discount = subtotal * DISCOUNT_RATE;
        subtotal -= discount;
    }

    let tax = subtotal * MASS_TAX_RATE;
    let finalTotal = subtotal + tax;

    document.getElementById("order-summary").innerHTML = `
        <h2>Your Order</h2>
        <p>Hotdogs: ${numDogs} @ ${showMoney(PRICE_HOTDOG)} = $${showMoney(numDogs * PRICE_HOTDOG)}</p>
        <p>Fries: ${numFries} @ $${showMoney(PRICE_FRIES)} = $${showMoney(numFries * PRICE_FRIES)}</p>
        <p>Drinks: ${numSoda} @ $${showMoney(PRICE_DRINKS)} = $${showMoney(numSoda * PRICE_DRINKS)}</p>
        <p>Subtotal: $${showMoney(subtotal + discount)}</p>
        <p>Discount: -$${showMoney(discount)}</p>
        <p>Tax: $${showMoney(tax)}</p>
        <h3>Total: $${showMoney(finalTotal)}</h3>
    `;

    const orderSummary = document.getElementById("order-summary");
    orderSummary.classList.add("show");
}
