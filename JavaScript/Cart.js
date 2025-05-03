const cart = document.getElementById("cart");

const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

let totalAmount = 0;

savedCart.forEach((element) => {
    totalAmount += parseFloat(element.price.toFixed(2));

    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const hr = document.createElement("hr");
    const removeButton = document.createElement("button");

    h4.textContent = element.name;
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeItem(element));
    div.classList.add("card");

    div.appendChild(h4);
    div.appendChild(hr);
    div.appendChild(removeButton);

    cart.appendChild(div);
});

function removeItem(product) {
    const index = savedCart.findIndex((item) => item.name === product.name);

    if (index !== -1) {
        savedCart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(savedCart));
        location.reload();
    }
}

if (savedCart.length) {
    const order = document.createElement("button");

    order.id = "order";
    order.addEventListener("click", orderFunc);
    order.textContent = `Order | $${totalAmount}`;

    document.body.appendChild(order);
} else {
    const existingOrder = document.getElementById("orderButton");
    if (existingOrder) {
        existingOrder.remove();
    }
}

function orderFunc() {
    localStorage.removeItem("cart");

    location.href = "Success.html";
}