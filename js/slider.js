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
    nextImg(item);
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

function nextImg(item) {
    imgSlider[item].style.opacity = '0';
    setTimeout(function () {
        imgSlider[item].style.opacity = '0';
        setTimeout(function () {
            imgSlider[item].style.opacity = '0.1';
            setTimeout(function () {
                imgSlider[item].style.opacity = '0.2';
                setTimeout(function () {
                    imgSlider[item].style.opacity = '0.25';
                    setTimeout(function () {
                        imgSlider[item].style.opacity = '0.3';
                        setTimeout(function () {
                            imgSlider[item].style.opacity = '0.35';
                            setTimeout(function () {
                                imgSlider[item].style.opacity = '0.4';
                                setTimeout(function () {
                                    imgSlider[item].style.opacity = '0.45';
                                    setTimeout(function () {
                                        imgSlider[item].style.opacity = '0.46';
                                        setTimeout(function () {
                                            imgSlider[item].style.opacity = '0.47';
                                            setTimeout(function () {
                                                imgSlider[item].style.opacity = '0.48';
                                                setTimeout(function () {
                                                    imgSlider[item].style.opacity = '0.5';
                                                },200);
                                            },200);
                                        },200);
                                    },200);
                                },200);
                            },200);
                        },200);
                    },200);
                },200);
            },200);
        },200);
    },200);
}