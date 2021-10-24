const tabBtnAll = document.querySelectorAll('.tab__link');
Array.prototype.forEach.call(tabBtnAll,function(tabBtn){
    tabBtn.addEventListener('click',function(e){     
        e.preventDefault();
        // const tabBtnAll = document.querySelectorAll('.tab__link');
        const tabContentAll = document.querySelectorAll('.tab__content');
        const tabNum = this.getAttribute('data-num')
        Array.prototype.forEach.call(tabContentAll, function(cont, i) {
            cont.classList.remove('is-active')
        })  
        Array.prototype.forEach.call(tabBtnAll, function(btn, i) {
            btn.parentElement.classList.remove('is-active')
        })      
        tabContentAll[tabNum].classList.add('is-active');
        tabBtnAll[tabNum].parentElement.classList.add('is-active');
    })
});
