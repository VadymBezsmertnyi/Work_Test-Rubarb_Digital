const btn = document.querySelectorAll('.animationButton'),
feedbackBtn = document.querySelector('.feedbackBtn'),
sliderBuutonLeft = document.querySelector('#sliderBuutonLeft'),
sliderBuutonRight = document.querySelector('#sliderBuutonRight');

console.log(feedbackBtn);

btn.forEach(btn =>{
    btn.addEventListener('mouseout', ()=>{
        console.log('GOOD!');
        btn.classList.add('animationButtonReverse');
    });
});

feedbackBtn.addEventListener('mouseout', ()=>{
    feedbackBtn.classList.add('animationButtonFeedbackReverse');
});

sliderBuutonLeft.addEventListener('mouseout', ()=>{
    console.log('GOOD!');
    sliderBuutonLeft.classList.add('sliderBuutonLeftReverse');
});

sliderBuutonRight.addEventListener('mouseout', ()=>{
    console.log('GOOD!');
    sliderBuutonRight.classList.add('sliderBuutonRightReverse');
});