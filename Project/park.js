window.onload = function () {
    HandleRefresh();
}

function HandleRefresh(){
    var url = "http://openapi.seoul.go.kr:8088/58427165766c6565373973656f7247/json/SearchParkInfoService/1/100";
    var request = new XMLHttpRequest();
    request.open("GET", url);

    request.onload = function(){
        if(request.status == 200){
            updateParkList(request.responseText);
        }
    }
    request.send(null);
}

function updateParkList(responseText){
    var parkDiv = document.getElementById("park");
    var parks = JSON.parse(responseText).SearchParkInfoService.row;
    var watchButton = document.getElementById("search");
    watchButton.onclick=function(){
        $("div").children().remove();
        var parkInfo = document.getElementById("parkInfo");
        parkInfos = parkInfo.options[parkInfo.selectedIndex].value;

        for (var i = 0; i < parks.length; i++) {
            var park = parks[i];
            if(parkInfos==park.P_ZONE){
                var div = document.createElement("div");
                div.setAttribute("class", "dataItem");
                div.innerHTML = "<p class='bg-info text-white'>"+ park.P_PARK +"</p>" +
                "공원 사진<image class='rounded-circle' width='250' height='250' style='margin-left: left; display: block;' alt='자료가 없습니다.'  src="+park.P_IMG+">"+
                "공원 안내도<image class='img-thumbnail' width='304' height='304' style='margin-left: left; display: block;' alt='안내도 자료가 없습니다.' src="+park.GUIDANCE+">" +
                "<br> 공원 개요 : " + park.P_LIST_CONTENT + "<br>" +
                "<br> 공원 면적 : " + park.AREA + 
                "<br> 주요 식물 -  " + park.MAIN_PLANTS + 
                "<br> 공원 주소 :  " + park.P_ADDR + 
                "<br> 전화 번호 :  " + park.P_ADMINTEL +
                "<br> <a href="+park.TEMPLATE_URL+" target=blank>"+"홈페이지 바로가기  "+"</a><br>" +
                "<br>" + "<br>";
                
                parkDiv.appendChild(div);
                if (parkDiv.childElementCount == 0) {
                    parkDiv.appendChild(div);
                }
                else {
                    parkDiv.insertBefore(div, parkDiv.firstChild);
                }
            }
        }
        
    }
}