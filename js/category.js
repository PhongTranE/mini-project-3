import { API_PRODUCT } from "./constants.js";
import { drawProduct } from "./drawProduct.js";
import { fetchAPI } from "./fetchAPI.js";
import { params } from "./variable.js";

const category = document.querySelector('#category');


fetchAPI(API_PRODUCT)
  .then(data => {
    const CateArr = [...data.map(item => {
      return item.category;
    })];
    let htmls = [...new Set(CateArr)].map(item => {
      return `
        <button class="btn" data-category="${item}">${item}</button>
      `;
    })

    category.innerHTML = htmls.join("");

    const listCate = document.querySelectorAll("#category .btn");
    listCate.forEach(item=>{
      item.addEventListener('click',function(e) {
        // params.category = item.dataset.category;
        params.category = item.getAttribute("data-category");
        drawProduct();
      })
    })
  })