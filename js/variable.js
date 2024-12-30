export let params = {
    q: "",
    sort: "",
    order: "",
    page: 1,
    limit: 8,
    category: "",
};

export const inputSearch = document.querySelector('#search input');
export const btnSearch = document.querySelector('#search button');
export const filter = document.querySelector('#filter');

export const pagiPrev = document.querySelector('#paginationPrev');
export const pagiNum = document.querySelector('#paginationNumber');
export const pagiNext = document.querySelector('#paginationNext');
export const products = document.querySelector('#products');
