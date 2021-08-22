var thoughts = document.querySelector('#thoughtsLogo'),
thoughtsText = document.querySelector('#thoughtsText');

document.addEventListener('scroll', function () {
    console.log(window.scrollY);



    if (window.scrollY > 1000 && window.scrollY < 1750) {
        thoughts.classList.add('thoughtsLogoRiver');
        thoughtsText.classList.add('thoughtsText');
    }
    else{
        thoughts.classList = '';
        thoughtsText.classList = '';
    }
});