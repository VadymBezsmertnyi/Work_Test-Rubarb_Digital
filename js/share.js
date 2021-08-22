var share = document.querySelector('#share p');

document.addEventListener('scroll', function () {
    if (window.scrollY > 401 && window.scrollY < 3100) {
        share.style.color = 'black';
    }

    else if(window.scrollY > 0 && window.scrollY < 400){
        share.style.color = 'white';        
    }

    else if(window.scrollY > 3101 && window.scrollY < 3750){
        console.log('gfgfgf');
        share.style.color = 'white';        
    }
});