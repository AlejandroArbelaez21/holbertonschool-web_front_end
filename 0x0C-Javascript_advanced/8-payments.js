const processPayment = (amount) => {
    console.log("Collecting payment of ", amount);
}

const text1 = 'is being processed';
const text2 = "has been fully processed";

const processOrder = (orderId, amount) => {
    console.log(orderId, text2);
    processPayment(amount)
    console.log(orderId, text2)
}

console.log("Processing orders")
processOrder(12321, 10.99)
processOrder(12322, 12.99)
processOrder(12323, 15.0)
console.log("All the orders have been processed")
