import { Products } from "./Products.js";

const productsList = document.getElementById("products");

let cart = [];

if (productsList) {
    Products.forEach((element) => {
        const div = document.createElement("div");
        const h4 = document.createElement("h4");
        const hr = document.createElement("hr");
        const p = document.createElement('p');
        const button = document.createElement("button");
    
        div.classList.add("card");
        div.appendChild(h4);
        div.appendChild(hr);
        div.appendChild(p);
        div.appendChild(button);
    
        h4.textContent = element.name;
        p.textContent = `Price: $${element.price}`
        button.textContent = "Add To Cart";
        button.addEventListener("click", () => addToCart(element));
    
        productsList.appendChild(div);
    });
}

function addToCart(product) {
    cart.push(product);

    localStorage.clear();
    localStorage.setItem("cart", JSON.stringify(cart));

    const blockquote = document.createElement("blockquote");
    const p = document.createElement('p');

    blockquote.classList.add("hint");
    p.textContent = "Added To Cart";

    blockquote.appendChild(p);
    document.body.insertBefore(blockquote, document.body.firstChild);

    setTimeout(() => {
        document.body.removeChild(blockquote);
    }, 2000);
}