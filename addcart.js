const cartIcon=document.querySelector("#cart-icon");
const cart=document.querySelector(".cart");
const cartClose=document.querySelector("#cart-close");

cartIcon.addEventListener("click",()=>cart.classList.add("active"));
cartClose.addEventListener("click",()=>cart.classList.remove("active"));

const addCartButtons = document.querySelectorAll(".add-cart");
addCartButtons.forEach(button => {
  button.addEventListener("click", event => {
    const productBox = event.target.closest(".product-box");
    addToCart(productBox);
  });
});

const cartcontent=document.querySelector(".cart-content");
const addToCart = (productBox) => {
  const productImgSrc = productBox.querySelector("img").src;
  const productTitle = productBox.querySelector(".product-title").textContent;
  const productPrice = productBox.querySelector(".price").textContent;

  const CardItems=cartcontent.querySelectorAll(".cart-product-title");
  for(let item  of CardItems){
if(item.textContent==productTitle){
    alert("This item is already in the Cart");
    return;
}
  }

  const cartBox = document.createElement("div");
  cartBox.classList.add("cart-box");
  cartBox.innerHTML = `
    <img src="${productImgSrc}" class="cart-img" alt="Product Image">
<div class="cart-detail">
<h2 class="cart-product-title">${productTitle}</h2>
<span class="cart-price">${productPrice}</span>
<div class="cart-quantity">
<button id="decrement">-</button>
<span class="number">1</span>
<button id="increment">+</button>
</div>
</div>
<i class="cart-remove"><img src="Delete.png" alt=""></i>
  `;
 cartcontent.appendChild(cartBox);
  // Append the cartBox to the cart container
  // (not shown in the provided code snippet)

  cartBox.querySelector(".cart-remove").addEventListener("click",()=>{
    cartBox.remove();
    updateCartCount(-1);
    updatetotalprice(-1);
  });

  updatetotalprice();

cartBox.querySelector(".cart-quantity").addEventListener("click", event=>{
  const numberElement=cartBox.querySelector(".number");
  const decrementButton=cartBox.querySelector("#decrement");
  let quantity=numberElement.textContent;
  
  if(event.target.id === "decrement" && quantity>1){
    quantity--;
    if(quantity==1){
    decrementButton.style.color="#999" ;   
  }
  }
  else if(event.target.id==="increment"){
    quantity++;
    decrementButton.style.color="#333";
  }
  
  numberElement.textContent=quantity;
  updatetotalprice();
});
    updateCartCount(1);
    updatetotalprice();
};


const updatetotalprice=()=>{
  const totalpriceElement=document.querySelector(".total-price");
  const cartBoxes= cartcontent.querySelectorAll(".cart-box");
  let total=0;
  cartBoxes.forEach(cartBox=>{
    const priceElement= cartBox.querySelector(".cart-price");
    const quantityElement=cartBox.querySelector(".number");
    const price=priceElement.textContent.replace("$","");
    const quantity=quantityElement.textContent;
    total+=price*quantity;
  });
  totalpriceElement.textContent=`$${total}`;
};


let cartItemcount=0;
const updateCartCount= change =>{
  const cartItemCountBadge= document.querySelector(".cart-item-count");
  cartItemcount+=change;
  if(cartItemcount>0){
    cartItemCountBadge.style.visibility="visible";
    cartItemCountBadge.textContent=cartItemcount;
  
  }
  else{
    cartItemCountBadge.style.visibility="hidden";
    cartItemCountBadge.textContent="";
  }
}


const  buyNowButton= document.querySelector(".btn-buy");
buyNowButton.addEventListener("click",()=>{

  const cartBoxes= cartcontent.querySelectorAll(".cart-box");
  if(cartBoxes.length==0){
  alert("Your cart Is empty! Please Add Cart to buy item");
  return;
  }

  cartBoxes.forEach(cartBox=>cartBox.remove());
  cartItemcount=0;
  updateCartCount(0);
  updatetotalprice();
  alert("Thank you for you Purchase!");


});