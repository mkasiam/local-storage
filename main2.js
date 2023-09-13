const handleClick = () => {
  const productElement = document.getElementById("productName");
  const product = productElement.value;
  productElement.value = "";
  const quantityElement = document.getElementById("productQuantity");
  const quantity = quantityElement.value;
  quantityElement.value = "";
  showProductDetails(product, quantity);
  saveItemToLocalStorage(product,quantity)
};

const showProductDetails =(product, quantity)=> {
    const productContainer = document.getElementById("productContainer");
    const li = document.createElement('li');
    li.innerText=`${product} ${quantity}`;
    productContainer.appendChild(li);
}

const getItemFromLocalStorage = ()=>{
    let cart={};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;

}

const saveItemToLocalStorage =(product,quantity)=>{
    const cart = getItemFromLocalStorage();
    console.log(cart);
    cart[product]=quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

const displayCartFromLocalStorage = () =>{
    const savedCart = getItemFromLocalStorage() ;
    console.log(savedCart);
    for (const product in savedCart) {
        const quantity = savedCart[product];
        showProductDetails(product,quantity);
        console.log(product,quantity); 
    }
}

displayCartFromLocalStorage();