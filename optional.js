const getData = () => {
    const productInputField = document.getElementById("product-name");
    const product = productInputField.value ;
    productInputField.value = "";
    const quantityInputField = document.getElementById("product-quantity");
    const quantity = quantityInputField.value ;
    quantityInputField.value = "";
    showData(product,quantity);
}
const showData = (product,quantity) => {
    const ProductContainer = document.getElementById("product-container");
    const li = document.createElement("li");
    li.innerText=`${product}: ${quantity}`;
    ProductContainer.appendChild(li);
}

const getStoredCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}
const saveProductToLocalStorage = () =>{
    const savedCart = getStoredCart();
}

