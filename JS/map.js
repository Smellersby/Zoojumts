window.addEventListener('DOMContentLoaded', (event) => {
    //{coords:"",name:"",site:"",adress:""},
    //{coords:"",name:"",phone:"",adress:""},
    var map = L.map('map').setView([56.94741929512509, 24.104157144654774], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    //icons
    var hospIcon = L.icon({
        iconUrl: '../images/hospIcon.png',
        shadowUrl: '../images/pinShadow.png',

        iconSize:     [35, 35], // size of the icon
        shadowSize:   [35, 35], // size of the shadow
        iconAnchor:   [17, 35], // point of the icon which will correspond to marker's location
        shadowAnchor: [18, 36],  // the same for the shadow
        popupAnchor:  [0, -35] // point from which the popup should open relative to the iconAnchor
    });
    var foodIcon = L.icon({
        iconUrl: '../images/pinFood.png',
        shadowUrl: '../images/pinShadow.png',

        iconSize:     [35, 35], // size of the icon
        shadowSize:   [35, 35], // size of the shadow
        iconAnchor:   [17, 35], // point of the icon which will correspond to marker's location
        shadowAnchor: [18, 36],  // the same for the shadow
        popupAnchor:  [0, -35] // point from which the popup should open relative to the iconAnchor
    });
    var shelterIcon = L.icon({
        iconUrl: '../images/pinShelter.png',
        shadowUrl: '../images/pinShadow.png',

        iconSize:     [35, 35], // size of the icon
        shadowSize:   [35, 35], // size of the shadow
        iconAnchor:   [17, 35], // point of the icon which will correspond to marker's location
        shadowAnchor: [18, 36],  // the same for the shadow
        popupAnchor:  [0, -35] // point from which the popup should open relative to the iconAnchor
    });
    var noIcon = L.icon({
        iconUrl: '../images/pinShelter.png',
        shadowUrl: '../images/pinShadow.png',

        iconSize:     [0, 0], // size of the icon
        shadowSize:   [0, 0]
    });
    //filter
    let klinCheck = document.getElementById('klinikasCheck');
    klinCheck.checked=true;
    let foodCheck = document.getElementById('veikaliCheck');
    foodCheck.checked=true;
    let sheltCheck = document.getElementById('sheltersCheck');
    sheltCheck.checked=true;
    klinCheck.addEventListener("change", changeKlin);
    foodCheck.addEventListener("change", changeFood);
    sheltCheck.addEventListener("change", changeShelt);
    var hospMarker;
    const hospArr=[];
    var foodMarker;
    const foodArr=[];
    var sheltMarker;
    const sheltArr=[];
    klinCheck.checked=true;
    changeKlin();
    foodCheck.checked=true;
    changeFood();
    sheltCheck.checked=true;
    changeShelt();


    //markers

    function changeKlin(){
        if(klinCheck.checked==true){
            for(let i=0;i<klinikas.length;i++){
                let coords=klinikas[i].coords.split(', ')
                parseFloat(coords[0]);
                parseFloat(coords[1]);
                hospMarker = L.marker([coords[0],coords[1]], {icon: hospIcon}).addTo(map);
                hospArr.push(hospMarker);
                hospMarker.bindPopup(klinikas[i].name+"<br>Telefona numurs: "+klinikas[i].phone+"<br>Adrese: "+klinikas[i].adress).openPopup();
            }
        }else{
            for(let i=0;i<klinikas.length;i++){
                map.removeLayer(hospArr[i])
            }
            hospArr.length=0;
        }
    }
    function changeFood(){
        if(foodCheck.checked==true){
            for(let i=0;i<veikali.length;i++){
                let coords=veikali[i].coords.split(', ')
                parseFloat(coords[0]);
                parseFloat(coords[1]);
                foodMarker = L.marker([coords[0],coords[1]], {icon: foodIcon}).addTo(map);
                foodArr.push(foodMarker);
                foodMarker.bindPopup(veikali[i].name+"<br><a target='blank' href='"+veikali[i].site+"'>"+veikali[i].site+"</a><br>Adrese: "+veikali[i].adress).openPopup();
            }
        }else{
            for(let i=0;i<veikali.length;i++){
                map.removeLayer(foodArr[i])
            }
            foodArr.length=0;
        }
    }

    function changeShelt(){
        if(sheltCheck.checked==true){
            for(let i=0;i<shelters.length;i++){
                let coords=shelters[i].coords.split(', ')
                parseFloat(coords[0]);
                parseFloat(coords[1]);
                sheltMarker = L.marker([coords[0],coords[1]], {icon: shelterIcon}).addTo(map);
                sheltArr.push(sheltMarker);
                sheltMarker.bindPopup(shelters[i].name+"<br><a target='blank' href='"+shelters[i].site+"'>"+shelters[i].site+"</a><br>Adrese: "+shelters[i].adress).openPopup();
            }
        }else{
            for(let i=0;i<shelters.length;i++){
                map.removeLayer(sheltArr[i])
            }
            sheltArr.length=0;
        }
    }
})