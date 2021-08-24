var share = document.querySelector('#share p');

document.addEventListener('scroll', function () {
    if (window.scrollY > 251 && window.scrollY < 3570) {
        share.style.color = 'black';
    }

    else if (window.scrollY > 4250) {
        share.style.color = 'black';
    }

    else if(window.scrollY > 0 && window.scrollY < 250){
        share.style.color = 'white';        
    }

    else if(window.scrollY > 3571 && window.scrollY < 4250){
        share.style.color = 'white';        
    }
});