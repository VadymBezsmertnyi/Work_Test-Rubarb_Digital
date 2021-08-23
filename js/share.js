var share = document.querySelector('#share p');

document.addEventListener('scroll', function () {
    if (window.scrollY > 261 && window.scrollY < 3653) {
        share.style.color = 'black';
    }

    else if(window.scrollY > 0 && window.scrollY < 260){
        share.style.color = 'white';        
    }

    else if(window.scrollY > 3654 && window.scrollY < 3950){
        console.log('gfgfgf');
        share.style.color = 'white';        
    }
});