
let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration)
});

const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransform(){
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll (' .active-btn') ;
            currentBtn[0].className = currentBtn[0].className.replace ('active-btn') , '' ;
            this.className += ' active-btn';
        })
    }

allSections.addEventListener('click', e => {
const id = e.target.dataset.id;
if (id)  {
    sectBtns.forEach((btn)  => {
        btn.classList.remove('actve')
    })
    e.target.classList.add ('active')
    sections.forEach ((section) =>{
        section.classList.remove('active')
    })
    const element = document.getElementById(id);
    element.classList.add ('active')

}
})
  const themeBtn = document.querySelector('.btn-theme');
  themeBtn.addEventListener('click',  function  () {
    let element = document.body;
    element.classList.toggle ('light-mode');
  })
}
PageTransform();









