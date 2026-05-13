function getBasketHeader() {
    return `Item Name\t\t\tPrice\n`
}

function getPrice(item) {
    return item._vat ? (item._price * 1.2) : item._price;
}

function getRow(item) {
    const tabs = item._name.length < 16 ? `\t\t\t` : `\t\t`;
    return `${item._name}${tabs}${getPrice(item).toFixed(2)}\n`
}

function getRows(basket) {
    rows = '';
    basket.forEach((item) => {
        rows += getRow(item);
    });
    return rows
}

function getTotal(basket) {
    let total = 0;
    basket.forEach((item) => {
        total += getPrice(item);
    });
    return (total).toFixed(2)
}

const printBasket = basket => {
    let basketOutput = '';
    basketOutput += getBasketHeader();
    basketOutput += getRows(basket);
    basketOutput += `\n\t\t\tTotal\t£${getTotal(basket)}`;
    return basketOutput;
}

const myBasket = [];

const item1 = { _id: 1, _name: "Baked Beans", _price: 0.85, _vat: false };
myBasket.push(item1);
console.log(printBasket(myBasket));

const item2 = { _id: 2, _name: "Battenburg Cake", _price: 1, _vat: true };
myBasket.push(item2);
console.log(printBasket(myBasket));

const item3 = { _id: 3, _name: "Granary Loaf", _price: 1.45, _vat: false };
myBasket.push(item3);
console.log(printBasket(myBasket));

const item4 = { _id: 4, _name: "Bottle of Red Wine", _price: 11.05, _vat: true };
myBasket.push(item4);
console.log(printBasket(myBasket));

console.log(myBasket);

module.exports = printBasket;