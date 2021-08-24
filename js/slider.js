const leftButton = document.querySelector('#leftButton'),
    rightButton = document.querySelector('#rightButton'),
    imgSlider = document.querySelectorAll('.imgSlider'),
    indicatior = document.querySelectorAll('#indicator div'),
    onOff = document.querySelectorAll('#onOffAutoSlider button');

    let item = 0;

function hideImg() {
    imgSlider.forEach((img, i) => {
        img.classList.add('hide');
    });
}

function showImgRight(){
    imgSlider.forEach((img, i) =>{
        if (img.classList.contains('hide')==false) {
            item=i;
        }
    });
    item+=1;
}

function showImgLeft(){
    imgSlider.forEach((img, i) =>{
        if (img.classList.contains('hide')==false) {
            item=i;
        }
    });
    item-=1;
}

function showHideIndicator(item){
    indicatior.forEach((ind, i)=>{
        ind.classList = "";
        ind.classList.add('indicatorHide');
    });
    indicatior[item].classList.remove('indicatorHide');
    indicatior[item].classList.add('indicatorShow');
}

function serRight() {
    showImgRight();
    hideImg();
    if (item>=3) {
        item=0;
    }
    imgSlider[item].classList.remove('hide');
    showHideIndicator(item);
    addAnimation(item);
}

rightButton.addEventListener('click', () => {
    serRight();
});

leftButton.addEventListener('click', () => {
    showImgLeft();
    hideImg();
    if (item<0) {
        item=2;
    }
    showHideIndicator(item);
    addAnimationLeft(item);
    imgSlider[item].classList.remove('hide');
});

let auto = setInterval(function () {
    serRight();
}, 5000);

function onOffHide() {
    onOff.forEach(btn =>{
        btn.classList.remove('hide');
    });
}

onOff.forEach((btn, i) =>{
    btn.addEventListener('click', ()=>{
        onOffHide();
        btn.classList.add('hide');
        if (i==0) {
            let auto = setInterval(function () {
                serRight();
            }, 5000);
        }
        else{
            clearInterval(auto);
        }
    });
});

function addAnimation(item){
    imgSlider[item].classList.remove('sliderHideAnimation');
    imgSlider[item].classList.add('sliderShowAnimation');
    setTimeout(function () {
        imgSlider[item].classList.remove('sliderShowAnimation');
        imgSlider[item].classList.add('sliderHideAnimation');
    },4500);
}

function addAnimationLeft(){
    imgSlider[item].classList.remove('sliderHideAnimation');
    imgSlider[item].classList.add('sliderShowAnimation');
}