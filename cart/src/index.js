import faker from "faker"

const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`


const cartId = "dev-cart"
document.querySelector(`#${cartId}`).innerHTML = cartText