const activeEmployee = document.querySelector('.employee-active__photo');
const employeeList = document.querySelectorAll('.employee');

employeeList.forEach(miniImg=> {
    miniImg.addEventListener('click', function (event) {
        activeEmployee.src = event.target.src;
    });    
});      

// смена блоков employee
const adrianaAddingtonphoto = document.querySelector('.adriana-addington__photo');
const aboutEmployeeVar = document.querySelector('.about-employee');
const adrianaAddington = document.querySelector('.adriana-addington');
const alexanderSmithEl = document.querySelector('.alexander-smith');
const sokinaJueeEle = document.querySelector('.sokina-jue');

adrianaAddingtonphoto.addEventListener('click', function () {
    aboutEmployeeVar.classList.add('none')
    adrianaAddington.classList.add('visible')
    alexanderSmithEl.classList.remove('visible')
    sokinaJueeEle.classList.remove('visible')
});

const alexanderSmith = document.querySelector('.alexander-smith');
const aboutEmployee = document.querySelector('.about-employee');
const adrianaAddingtonblock = document.querySelector('.adriana-addington');
const alexanderSmithPhoto = document.querySelector('.alexander-smith__photo');
const sokinaJueeElem = document.querySelector('.sokina-jue');

alexanderSmithPhoto.addEventListener('click', function () {
   alexanderSmith.classList.add('visible')
   adrianaAddingtonblock.classList.remove('visible')
   sokinaJueeElem.classList.remove('visible')
   aboutEmployee.classList.add('none')
});

const alexanderSmithEmp = document.querySelector('.alexander-smith');
const aboutEmployeeemp = document.querySelector('.about-employee');
const adrianaAddingtonEl = document.querySelector('.adriana-addington');
const alexanderSmithimg = document.querySelector('.alexander-smith__photo');
const sokinaJuePhoto = document.querySelector('.sokina-jue__photo');
const sokinaJueeEl = document.querySelector('.sokina-jue');


sokinaJuePhoto.addEventListener('click', function () {
    alexanderSmithEmp.classList.remove('visible')
    adrianaAddingtonblock.classList.remove('visible')
    aboutEmployee.classList.add('none')
    sokinaJueeEl.classList.add('visible')   
     
});

const alexanderSmithE = document.querySelector('.alexander-smith');
const aboutEmployeeem = document.querySelector('.about-employee');
const adrianaAddingtonE = document.querySelector('.adriana-addington');
const alexanderSmithim = document.querySelector('.alexander-smith__photo');
const sokinaJueem = document.querySelector('.sokina-jue__photo');
const sokinaJueeE = document.querySelector('.sokina-jue');
const markWaungPhoto =document.querySelector('.mark-waungh__photo');

markWaungPhoto.addEventListener('click', function () {
   aboutEmployeeem.classList.remove('none')
   adrianaAddingtonE.classList.remove('visible')
   alexanderSmithE.classList.remove('visible')
   sokinaJueeE.classList.remove('visible')
        
});


// burger
const burgerEl = document.querySelector('.burger');
const menu_mobileEl = document.querySelector('.menu_mobile');

    burgerEl.addEventListener('click', function (e) {
    menu_mobileEl.classList.toggle('menu__show')
});

// scroll
const scrollupBtn = document.querySelector('.scroll-up');

    window.document.addEventListener('scroll', trackScroll);       
    scrollupBtn.addEventListener("click", goTop);
    function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = 100;
    if (scrolled > coords) {
    scrollupBtn.classList.add("scroll-up__show");
    } else {
    scrollupBtn.classList.remove("scroll-up__show");
    }      
    }
    function goTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -75);
        setTimeout(goTop, 0);
    }
}

