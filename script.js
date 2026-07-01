// =====================================
// KING D SHOES - JAVASCRIPT
// =====================================

// Live Search

const searchInput = document.getElementById("search");

if(searchInput){

searchInput.addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

const text=card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

// =====================================
// Wishlist

document.querySelectorAll(".card").forEach(card=>{

const heart=document.createElement("button");

heart.innerHTML="❤️";

heart.className="wishlist-btn";

heart.style.marginTop="10px";
heart.style.border="none";
heart.style.background="#FFD700";
heart.style.padding="10px";
heart.style.borderRadius="30px";
heart.style.cursor="pointer";

heart.onclick=function(){

if(heart.innerHTML==="❤️"){

heart.innerHTML="💖";

}else{

heart.innerHTML="❤️";

}

};

card.querySelector(".card-content").appendChild(heart);

});

// =====================================
// Shopping Cart

let cartCount=0;

const cartIcon=document.querySelector(".fa-cart-shopping");

const cartBadge=document.createElement("span");

cartBadge.style.background="red";
cartBadge.style.color="white";
cartBadge.style.padding="3px 8px";
cartBadge.style.borderRadius="50%";
cartBadge.style.fontSize="12px";
cartBadge.style.marginLeft="5px";
cartBadge.innerHTML="0";

if(cartIcon){
cartIcon.appendChild(cartBadge);
}

document.querySelectorAll(".order-btn").forEach(button=>{

const cartButton=document.createElement("button");

cartButton.innerHTML="🛒 Add to Cart";

cartButton.className="cart-btn";

cartButton.style.width="100%";
cartButton.style.marginTop="10px";
cartButton.style.padding="12px";
cartButton.style.border="none";
cartButton.style.background="#FFD700";
cartButton.style.fontWeight="700";
cartButton.style.cursor="pointer";
cartButton.style.borderRadius="40px";

cartButton.onclick=function(){

cartCount++;

cartBadge.innerHTML=cartCount;

alert("Added to cart!");

};

button.parentElement.appendChild(cartButton);

});

// =====================================
// Scroll To Top

const topBtn=document.createElement("button");

topBtn.id="topBtn";

topBtn.innerHTML="⬆";

document.body.appendChild(topBtn);

window.onscroll=function(){

if(document.documentElement.scrollTop>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// =====================================
// Floating WhatsApp

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/254104447580";

whatsapp.className="whatsapp-float";

whatsapp.innerHTML='<i class="fab fa-whatsapp"></i>';

document.body.appendChild(whatsapp);

// =====================================
// Fade Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".card,.category-card,.review-card,.about-box").forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=".6s";

observer.observe(item);

});
// =====================================
// DARK MODE

const darkBtn=document.createElement("button");

darkBtn.innerHTML="🌙";

darkBtn.style.position="fixed";
darkBtn.style.top="100px";
darkBtn.style.right="20px";
darkBtn.style.width="55px";
darkBtn.style.height="55px";
darkBtn.style.borderRadius="50%";
darkBtn.style.border="none";
darkBtn.style.cursor="pointer";
darkBtn.style.background="#FFD700";
darkBtn.style.fontSize="22px";
darkBtn.style.zIndex="999";

document.body.appendChild(darkBtn);

let dark=true;

darkBtn.onclick=function(){

if(dark){

document.body.style.background="#ffffff";
document.body.style.color="#111111";

document.querySelectorAll(".card,.category-card,.review-card,.about-box,.contact-box,.faq-item").forEach(el=>{

el.style.background="#f4f4f4";
el.style.color="#111";

});

darkBtn.innerHTML="☀️";

dark=false;

}else{

location.reload();

}

};

// =====================================
// WELCOME MESSAGE

window.addEventListener("load",()=>{

setTimeout(()=>{

alert("👋 Welcome to King D Shoes!\nEnjoy shopping with us.");

},1000);

});

// =====================================
// PRODUCT FILTERS

const categoryCards=document.querySelectorAll(".category-card");

categoryCards.forEach(category=>{

category.style.cursor="pointer";

category.addEventListener("click",()=>{

const name=category.innerText.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

if(card.innerText.toLowerCase().includes(name.split(" ")[0])){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

});

// =====================================
// SHOW ALL PRODUCTS BUTTON

const showAll=document.createElement("button");

showAll.innerHTML="Show All Products";

showAll.className="btn";

showAll.style.display="block";
showAll.style.margin="30px auto";

const shop=document.getElementById("shop");

if(shop){

shop.insertBefore(showAll,shop.firstChild);

}

showAll.onclick=function(){

document.querySelectorAll(".card").forEach(card=>{

card.style.display="block";

});

};

// =====================================
// SAVE CART

window.addEventListener("beforeunload",()=>{

localStorage.setItem("kingd-cart",cartCount);

});

window.addEventListener("load",()=>{

const saved=localStorage.getItem("kingd-cart");

if(saved){

cartCount=parseInt(saved);

cartBadge.innerHTML=cartCount;

}

});

// =====================================
// FOOTER YEAR

document.querySelectorAll("footer p").forEach(p=>{

if(p.innerHTML.includes("2026")){

p.innerHTML="© "+new Date().getFullYear()+" King D Shoes. All Rights Reserved.";

}

});

// =====================================
// THANK YOU MESSAGE

console.log("King D Shoes Website Loaded Successfully 👑");

// =====================================
// END
