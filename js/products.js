import { drawProduct } from "./drawProduct.js";
import { inputSearch, btnSearch, params, filter, pagiNext, pagiPrev, pagiNum } from "./variable.js";
drawProduct();


// Search
const search = () => {
    params.q = inputSearch.value;
    drawProduct();
}

btnSearch.addEventListener('click', function () {
    search();
});

inputSearch.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        search();
    }
});


// Filter
filter.addEventListener('change', function (e) {
    console.log(e.target.value);
    switch (e.target.value) {
        case "mac-dinh":
            params.sort = "";
            params.order = "";
            break;
        case "decr":
            params.sort = "price";
            params.order = "desc";
            break;
        case "incr":
            params.sort = "price";
            params.order = "asc";
            break;
        case "sale":
            params.sort = "discountPercentage";
            params.order = "desc";
            break;
        default:
            break;
    }
    drawProduct();
});

// Pagination
pagiNext.addEventListener('click', function (e) {
    params.page += 1;
    pagiNum.innerHTML = params.page;
    drawProduct();
});

pagiPrev.addEventListener('click', function (e) {
    if (params.page > 1) {
        params.page -= 1;
        pagiNum.innerHTML = params.page;
        drawProduct();
    }
})

