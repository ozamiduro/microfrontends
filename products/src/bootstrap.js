import faker from "faker"

const mount = (el) => {
    let products = "";

    for (let index = 0; index < 5; index++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    }

    el.innerHTML = products
}

/*
1.
We are running this file in development in isolation.
We are using out local index.html file
Which DEFINITELY has an element with an id of 'dev-products'
We want to immediately render our app into that element.
*/
if (process.env.NODE_ENV === "development") {
    const root = '#dev-products'
    const el = document.querySelector(root)

    // Assuming our container doesn't have element
    // with id 'dev-products'
    if (el) {
        // We are probably running in isolation
        mount(el)
    }
}

/*
2. 
We are running this file in development or production
through the CONTAINER app
NO GUARANTEE that an element with an id of 'dev-products' exists
WE DO NOT WANT try to immediately render the app.
*/
export { mount }