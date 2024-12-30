import { API_PRODUCT } from "./constants.js";
import { fetchAPI } from "./fetchAPI.js";
import { params, products } from "./variable.js";


export const drawProduct = () => {

    let category = "";
    if (params.category != "") {
        category = `&category=${params.category}`;
    }

    const api = `${API_PRODUCT}?q=${params.q}&_sort=${params.sort}&_order=${params.order}&_page=${params.page}&_limit=${params.limit}${category}`;

    fetchAPI(api)
        .then(data => {
            let htmls = data.map(item => {
                return `
            <div class="project-item">
                <img src="${item.thumbnail}" alt="${item.title}" class="image">
                <p class="name">${item.title}</p>
                <div class="info">
                    <span class="price">${item.price}$</span>
                    <span class="quantity">Còn lại: ${item.stock} sp</span>
                </div>
                <span class="discount">${item.discountPercentage}%</span>
             </div> 
        `;
            })

            products.innerHTML = htmls.join("");
        });
}