//map
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.5455919,127.0402491), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };
var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.5455919,127.0402491); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

//tab
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
