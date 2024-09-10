var sliders = document.querySelectorAll(".slider1, .slider2, .slider3");
var circle = document.querySelectorAll(".circle .circle_0");
var currentIndex = 0;
let all_data = "";
let all_data_2 = "";
let all_data_3 = "";
let data_for_cart='';

var slider = setInterval(() => {
  sliders[currentIndex].style.display = "none";
  circle[currentIndex].classList.remove("circle_active");
  currentIndex = (currentIndex + 1) % sliders.length;
  sliders[currentIndex].removeAttribute("style");
  circle[currentIndex].classList.add("circle_active");
}, 8000);

// slider-section
document.querySelectorAll(".book img").forEach((bookImg) => {
  bookImg.addEventListener("mouseover", () => {
    bookImg.style.transform = "translateY(-12px)";
  });
  bookImg.addEventListener("mouseout", () => {
    bookImg.style.transform = "translateY(0)";
  });
});

//end login and register
/* ******************************************** */
async function getBooks() {
  const response = await fetch("/products.json");
  const data = await response.json();
//   console.log(data.products[0]);
for (let i = 0; i < 4; i++) {
  all_data += `<div  class="trending-slider-item">
                      <img id="${data.products[i].id}" src="${data.products[i].src}" alt="image">
                                                           <div class="shar">
                  <i class="fa-solid fa-heart"></i>
                  <i class="fa-solid fa-wifi"></i>
                  <i class="fa-solid fa-cart-shopping cart_btn"></i>
              </div>
                      <h3>${data.products[0].name}</h3>
                      <div class="favourite-main-item-stars1">
                          <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                          <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                          <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                          <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                          <i class="fa-regular fa-star-half-stroke" style="color: #FFD43B;"></i>
                      </div>
                      <p>Misty Figueroua</p>
                      <h4>$${data.products[0].price}</h4>
                  </div>`;
}
  document.querySelector(".trending_1").innerHTML = all_data;
  for (let i = 4; i < 8; i++) {
    all_data_2 += `<div  class="trending-slider-item">
                        <img id="${data.products[i].id}" src="${data.products[i].src}" alt="image">
                                                             <div class="shar">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-wifi"></i>
                    <i class="fa-solid fa-cart-shopping cart_btn"></i>
                </div>
                        <h3>${data.products[0].name}</h3>
                        <div class="favourite-main-item-stars1">
                            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                            <i class="fa-regular fa-star-half-stroke" style="color: #FFD43B;"></i>
                        </div>
                        <p>Misty Figueroua</p>
                        <h4>$${data.products[0].price}</h4>
                    </div>`;
  }
  document.querySelector(".trending_2").innerHTML = all_data_2;
  for (let i = 8; i < 12; i++) {
    all_data_3 += `<div  class="trending-slider-item">
                        <img id="${data.products[i].id}" src="${data.products[i].src}" alt="image">
                                        <div class="shar">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-wifi"></i>
                    <i class="fa-solid fa-cart-shopping cart_btn"></i>
                </div>
                        <h3>${data.products[0].name}</h3>
                        <div class="favourite-main-item-stars1">
                            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                            <i class="fa-regular fa-star-half-stroke" style="color: #FFD43B;"></i>
                        </div>
                        <p>Misty Figueroua</p>
                        <h4>$${data.products[0].price}</h4>
                    </div>`;
  }
  document.querySelector(".trending_3").innerHTML = all_data_3;
//   =======================  
let all_divs =document.querySelectorAll('.trending-slider .cart_btn')
all_divs.forEach(e => {
  const imgs = e.parentElement.parentElement.querySelector('img');
  e.addEventListener('click',function(){
    document.querySelector(".done_add_cart").style.left= '0%';
    setTimeout(function(){
      document.querySelector(".done_add_cart").style.left= '-20%';
    },1000)
    console.log(data.products[imgs.id]);
    localStorage.setItem(`data${imgs.id}`,JSON.stringify(data.products[imgs.id]))
});
});
}
getBooks();

//end api
/* ******************************************** */
// logout btn
document.getElementById('logout-cart').addEventListener('click', function() {
  localStorage.setItem('logout1', true);
  localStorage.setItem('logout2', true);
  localStorage.setItem('d-none', 'none');
  document.getElementById('logout-cart').style.display = 'none';
  window.location.href = 'account.html';
});
if (localStorage.getItem('logout1') === 'false' && localStorage.getItem('logout2') === 'false') {
  localStorage.setItem('d-none', 'block');
}
document.getElementById('logout-cart').style.display = localStorage.getItem('d-none');


const gallerySpans = document.querySelectorAll(".gallary-span")
let currentIndex_imgs = 0;
  gallerySpans.forEach((span, index) => {
    span.addEventListener("click", el => {
      const imgElement = span.querySelector("img");
      document.querySelector(".layer_1").style.display = "flex";
      document.querySelector(".layer-content img").src = imgElement.src;
      currentIndex = index; 
    });
  });
  document.querySelector(".layer_1 .close_22").addEventListener("click", (e) => {
    document.querySelector(".layer_1").style.display = "none";
  });
  
  document.querySelector("#next_22").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % gallerySpans.length; 
    const nextImage = gallerySpans[currentIndex].querySelector("img").src; 
    document.querySelector(".layer-content img").src = nextImage;
  });
document.querySelector(".layer_1 .close_22").addEventListener("click", () => {
  document.querySelector(".layer_1").style.display = "none";
});

document.querySelector("#prev_22").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + gallerySpans.length) % gallerySpans.length;
  const prevImage = gallerySpans[currentIndex].querySelector("img").src; 
  document.querySelector(".layer-content img").src = prevImage;
});
 