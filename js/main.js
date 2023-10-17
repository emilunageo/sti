const navMenuMobile = function () {
    const menuBtn = document.querySelector('.header-menuImg');
    const navList = document.querySelector('.header-nav');
    const body = document.querySelector('body');
    menuBtn.addEventListener('click', () => {
        navList.classList.toggle('header-nav__active');
        body.classList.toggle('stop-scroll');
    })
}
navMenuMobile()


const accordionItems = document.querySelectorAll(".accordion-item");
const accordionArrow = document.querySelectorAll('.accordion-header img');

accordionItems.forEach((item, index) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", function () {
        if (!content.classList.contains('accordion-active')) {
            content.classList.add('accordion-active');
            accordionArrow[index].classList.add('image-rotate')
        } else {
            content.classList.remove('accordion-active');
            accordionArrow[index].classList.remove('image-rotate')
        }
    });
});

const formValidation = () => {
    const inputs = document.querySelectorAll('.contact-input');
    const formBtn = document.querySelector('.contact-btn');
    if (formBtn) {
        formBtn.addEventListener('click', (event) => {
            event.preventDefault()
            inputs.forEach((input) => {
                if (input.value === '') {
                    input.classList.add('input-placeholder__color')
                }else {
                    input.classList.add('input-placeholder__color')
                }
            })
        })
    }
}

formValidation()