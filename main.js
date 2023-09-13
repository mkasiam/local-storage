const getInfo = () => {
    const productInputField = document.getElementById("product-name");
    const product = productInputField.value;
    productInputField.value = "";
    const quantityInputField = document.getElementById("product-quantity");
    const quantity = quantityInputField.value;
    quantityInputField.value = "";
    loadDataHandler(product,quantity);
    saveProductToLocalStorage(product,quantity);
}
const loadDataHandler = (product,quantity) => {
    const ProductContainer = document.getElementById("product-container");
    const li = document.createElement("li");
    li.innerText = `${product}: ${quantity}`;
    ProductContainer.appendChild(li);
}


const getStoredCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem("cart");
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product,quantity) => {
   const cart = getStoredCart();
   cart[product] = quantity;
   console.log(cart);
   const cartStringified = JSON.stringify(cart);
   localStorage.setItem("cart",cartStringified);
}


const displayCartFromLocalStorage = () =>{
    const savedCart = getStoredCart() ;
    console.log(savedCart);
    for (const product in savedCart) {
        const quantity = savedCart[product];
        loadDataHandler(product,quantity);
        console.log(product,quantity); 
    }
}

displayCartFromLocalStorage();