const carts = [
  {
    id: `${crypto.randomUUID()}`,
    img: "Images/apple.jpg",
    name: "Apple",
    price: 2,
  },
  {
    id: `${crypto.randomUUID()}`,
    img: "Images/orange.jpg",
    name: "Orange",
    price: 1,
  },
  {
    id: `${crypto.randomUUID()}`,
    img: "Images/banana.jpg",
    name: "Banana",
    price: 3,
  },
  {
    id: `${crypto.randomUUID()}`,
    img: "Images/blueberries.jpg",
    name: "Blueberries",
    price: 3,
  },
  {
    id: `${crypto.randomUUID()}`,
    img: "Images/grapes.jpg",
    name: "Grapes",
    price: 3,
  },
  {
    id: `${crypto.randomUUID()}`,
    img: "Images/kiwi.jpg",
    name: "Kiwi",
    price: 3,
  },
  {
    id: `${crypto.randomUUID()}`,
    img: "Images/mango.jpg",
    name: "Mango",
    price: 3,
  },
  {
    id: `${crypto.randomUUID()}`,
    img: "Images/pineapple.jpg",
    name: "Pineapple",
    price: 3,
  },
  {
    id: `${crypto.randomUUID()}`,
    img: "Images/strawberries.jpg",
    name: "Strawberries",
    price: 3,
  },
  {
    id: `${crypto.randomUUID()}`,
    img: "Images/watermelon(slice).jpg",
    name: "Watermelon (slice)",
    price: 3,
  },
];

let quantity = 0;
let total = 0;
const selectedProduct = [];

// console.log(carts[0].name);

const container = document.querySelector(".container");
const cartContainer = document.querySelector(".cart-container");
const selectedItemContainer = document.querySelector(
  ".selected-item-container",
);
const totalAmount = document.querySelector(".total-amount");

renderProduct();

function renderProduct() {
  carts.forEach((cart) => {
    cart.quant = 0;

    const cartDiv = document.createElement("div");
    cartDiv.classList.add("cart");

    const img = document.createElement("img");
    img.classList.add("apple");
    img.src = cart.img;

    // create details
    const details = document.createElement("div");
    details.classList.add("details");
    const itemName = document.createElement("p");
    itemName.classList.add("item-name");
    itemName.textContent = `${cart.name}`;
    const itemPrice = document.createElement("p");
    itemPrice.classList.add("item-price");
    itemPrice.textContent = `$${cart.price}`;

    // create quantity
    const quantityDiv = document.createElement("div");
    quantityDiv.classList.add("quantity-div");
    const decButton = document.createElement("button");
    decButton.textContent = "−";
    const quantityPara = document.createElement("p");
    quantityPara.textContent = quantity;
    const incButton = document.createElement("button");
    incButton.textContent = "+";

    incButton.addEventListener("click", () => {
      cart.quant++;
      quantityPara.textContent = cart.quant;

      const existing = selectedProduct.find((item) => item.id === cart.id);

      if (existing) {
        existing.quant = cart.quant;
      } else {
        selectedProduct.push({
          id: `${cart.id}`,
          name: `${cart.name}`,
          price: `${cart.price}`,
          quant: cart.quant,
        });
      }
      renderCheckoutProduct();
    });
    decButton.addEventListener("click", () => {
      if (cart.quant <= 0) return;

      cart.quant--;

      quantityPara.textContent = cart.quant;

      const existing = selectedProduct.find((item) => item.id === cart.id);

      if (existing) {
        existing.quant = cart.quant;
      } else {
        selectedProduct.push({
          id: `${cart.id}`,
          name: `${cart.name}`,
          price: `${cart.price}`,
          quant: cart.quant,
        });
      }
      renderCheckoutProduct();
    });
    container.appendChild(cartContainer);
    cartContainer.appendChild(cartDiv);
    cartDiv.appendChild(img);
    cartDiv.appendChild(details);
    details.appendChild(itemName);
    details.appendChild(itemPrice);
    cartDiv.appendChild(quantityDiv);
    quantityDiv.appendChild(decButton);
    quantityDiv.appendChild(quantityPara);
    quantityDiv.appendChild(incButton);
  });
}

function renderCheckoutProduct() {
  // Basket

  console.log(selectedProduct);
  selectedItemContainer.innerHTML = "";
  selectedProduct.forEach((cart) => {
    const selectedItemDiv = document.createElement("div");

    const oneproductDiv = document.createElement("div");
    const selectedItemName = document.createElement("p");
    selectedItemName.innerHTML = `${cart.name}`;
    const selectedItemPrice = document.createElement("p");
    selectedItemPrice.innerHTML = `$${cart.price * cart.quant}`;
    const eachItemPrice = document.createElement("p");
    eachItemPrice.textContent = `$${cart.price} each`;
    const oneBigContainer = document.createElement("div");
    oneBigContainer.classList.add("selected-item-div");

    oneproductDiv.appendChild(selectedItemName);
    oneproductDiv.appendChild(eachItemPrice);
    oneBigContainer.appendChild(oneproductDiv);
    oneBigContainer.appendChild(selectedItemPrice);
    selectedItemDiv.appendChild(oneBigContainer);
    selectedItemContainer.appendChild(selectedItemDiv);
  
  });
}