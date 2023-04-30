const productcontainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productcontainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerwidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerwidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerwidth;
    })
})