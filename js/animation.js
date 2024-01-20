let header = document.querySelector('.header'),
    topText = document.querySelector('.top__decor-text'),
    topContent = document.querySelector('.top__content'),
    topElement = document.querySelector('.top'),
    topImage = document.querySelector('.top__decor-image')

setTimeout(()=> {
    topText.style.top = '0'
},300);

setTimeout(()=> {
    topElement.classList.add('animate');
},600)

setTimeout(()=> {
    header.style.top = '0'
}, 900)

setTimeout(()=> {
    topContent.style.opacity = '1'
}, 1200)
