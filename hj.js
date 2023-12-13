const burger_img_button = document.querySelector('.burger_img_button')
const burger_img_buttonSpan = document.querySelector('.burger_img_button span')
const header_ul = document.querySelector('.header_ul')

burger_img_button.addEventListener('click', ()=> {
    header_ul.classList.toggle('active')
    burger_img_button.classList.toggle('close')
})