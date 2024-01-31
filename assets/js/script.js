let mnuEle = document.querySelector('.menu');
mnuEle.addEventListener('click', myFun);
function myFun() {
    mnuEle.classList.toggle("active");
}