const btn = document.querySelectorAll('.animationButton'),
feedbackBtn = document.querySelector('.feedbackBtn');

console.log(feedbackBtn);

btn.forEach(btn =>{
    btn.addEventListener('mouseout', ()=>{
        console.log('GOOD!');
        btn.classList.add('animationButtonReverse');
    });
});

feedbackBtn.addEventListener('mouseout', ()=>{
    console.log('GOOD!');
    feedbackBtn.classList.add('animationButtonFeedbackReverse');
});