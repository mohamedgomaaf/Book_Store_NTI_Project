let all_obj = [];
let ele;
for (let i = 0; i < 12; i++) {
  if (localStorage.getItem(`data${i}`) !== null) {
    all_obj.push(JSON.parse(localStorage.getItem(`data${i}`)));
  }
}
let all_data = "";
for (let i = 0; i < all_obj.length; i++) {
  all_data += `
  <tr class="align-items-center" data-index="${all_obj[i].id}">
    <td>
      <div class="d-flex align-items-center flex-wrap">
        <div class="close" data-index="${i}"><i class="delete_cart d-inline fa-solid fa-xmark"></i></div>
        <img src="${all_obj[i].src}" alt="${all_obj[i].name}" class="ms-3 me-3 img-fluid" style="max-width: 100px;">
        <div class="text_product mt-md-3">
          <h6>${all_obj[i].name}</h6> 
        </div>
      </div>
    </td>
    <td>$${all_obj[i].price}</td>
    <td>
      <input type="number" class="num_quantity form-control w-50" value="1" data-index="${i}">
    </td>
    <td class="total_price" data-index="${i}">$${all_obj[i].price}</td>
  </tr>
  `;
}

if (localStorage.getItem('valid1')=='true' &&localStorage.getItem('valid2')=='true' && localStorage.getItem('logout1')=='false'&& localStorage.getItem('logout2')=='false' ) {
  ele = document.querySelector("#body");
  ele.innerHTML += all_data;
}

document.getElementById('logout-cart').addEventListener('click', function() {
  document.querySelector("#body").classList.add('d-none');
  localStorage.setItem('logout1', true);
  localStorage.setItem('logout2', true);
  localStorage.setItem('d-none', 'none');
  document.getElementById('logout-cart').style.display = 'none';
  window.location.href = 'account.html';
  for (let i = 0; i < 12; i++) {
    Object.keys(localStorage).forEach(key => {
      if (key.includes(`data${i}`)) {
        localStorage.removeItem(key);
      }
    });
  }
});
if (localStorage.getItem('logout1') === 'false' && localStorage.getItem('logout2') === 'false') {
  localStorage.setItem('d-none', 'block');
}
document.getElementById('logout-cart').style.display = localStorage.getItem('d-none');
// delete product
document.querySelectorAll(".close").forEach((e,i) => {  
  e.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.remove();
    localStorage.removeItem(`data${e.parentElement.parentElement.parentElement.getAttribute('data-index')}`);
    console.log(`data${e.getAttribute('data-index')}`); 
  });
});
  // quantity price
  function quantity_price() {
    let quantityInputs = document.querySelectorAll(".num_quantity");
    quantityInputs.forEach(input => {
      input.addEventListener("input", function(el) {
        let index = el.target.getAttribute('data-index'); 
        let price = all_obj[index].price;
        let total = el.target.value * price;
        let totalPriceElement = document.querySelector(`.total_price[data-index="${index}"]`);
        totalPriceElement.innerText = `$${total.toFixed(2)}`;
      });
    });
  }
        quantity_price();
  // update_Cart
  document.querySelector(".update_Cart").addEventListener("click", function() {
    quantity_price();
    let quantityInputs = document.querySelectorAll(".total_price");
    let total = 0;
    quantityInputs.forEach(input => {
      total += parseFloat(input.innerHTML.replace('$', ''));
    });
    document.querySelectorAll(".subtotal").forEach(subtotal => {
      subtotal.innerText = `$${total.toFixed(2)}`;
    });
  });