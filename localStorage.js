console.log(`Hello from JS`);

const addItems = () => {
  console.log(`addItems\n`);

  const product = document.getElementById('product').value;
  document.getElementById('product').value = '';

  const quantity = document.getElementById('quantity').value;
  document.getElementById('quantity').value = '';

  saveItemsToLocalStorage(product, quantity)
  displayData(product, quantity);
}

const displayData = (product, quantity) => {
  const displayItems = document.getElementById('display-data');

  const ul = document.createElement('ul');
  ul.innerHTML = `
    <li>${product} : ${quantity}</li>
  `;

  displayItems.appendChild(ul);
}

const getItemsFromLocalStorage = () => {
  let cart = window.localStorage.getItem('cart');
  if (cart) {
    cart = JSON.parse(cart)
  }

  return cart;
}

const saveItemsToLocalStorage = (product, quantity) => {
  let cart = getItemsFromLocalStorage();

  if (!cart) {
    cart = {}
  }

  cart[product] = quantity
  window.localStorage.setItem("cart", JSON.stringify(cart))
}

const showProductsFromLocalStorage = () => {
  let cart = window.localStorage.getItem('cart');
  if (cart) {
    cart = JSON.parse(cart)
  }

  for (let items in cart) {
    displayData(items, cart[items])
  }
}

showProductsFromLocalStorage();