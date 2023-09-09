var root = document.querySelector(':root');
var theme=0;

var themeButton=document.getElementById('theme');
themeButton.addEventListener("click", changeTheme); 

var heroImg=document.getElementById('hero');
var buttonImg=document.getElementById('buttonImg');
var map=document.getElementById('map');

if(sessionStorage.theme){
    theme=sessionStorage.getItem("theme")
    changeTheme();
}
function changeTheme(){
    if(theme==0){
        root.style.setProperty('--white', 'rgb(18, 18, 22)');
        root.style.setProperty('--green', 'rgb(14, 70, 39)');
        root.style.setProperty('--black', '#ffffff');
        root.style.setProperty('--gray', '#17171c')
        root.style.setProperty('--Acolor', 'rgb(39, 181, 102)')
        if(heroImg){heroImg.src='./Images/blackCat.jpg';}
        buttonImg.src='./Images/Anti.png';
        sessionStorage.theme=0;
        theme=1;
    }else{
        root.style.setProperty('--white', '#fefffa');
        root.style.setProperty('--green', 'rgb(70, 145, 20)');
        root.style.setProperty('--black', '#000000');
        root.style.setProperty('--gray', '#f4f4f9')
        root.style.setProperty('--Acolor', 'rgb(33, 114, 200)')
        if(heroImg){heroImg.src='./Images/HeroImage.jpg';}
        buttonImg.src='./Images/Brightness.png';
        sessionStorage.theme=1;
        theme=0;
    }
}

/*let list = document.querySelectorAll("div.img a");
console.log(list);
const textList = [];

for(let i=0; i<list.length; i++){
    textList[i]=list[i].title;
    console.log(textList[i]);
}
aniGrid.innerText=textList;*/

let animalGrid = document.getElementById("aniGrid");
if(animalGrid){

    //filters
    let kakiCheck = document.getElementById("kakiCheck");
    kakiCheck.checked=false
    kakiCheck.addEventListener("change", kakiChange);
    let suniCheck = document.getElementById("suniCheck");
    suniCheck.checked=false
    suniCheck.addEventListener("change", suniChange);
    let visiCheck = document.getElementById("visiCheck");
    visiCheck.checked=true
    visiCheck.addEventListener("change", visiChange);

    let labasCheck = document.getElementById("labasCheck");
    labasCheck.checked=true
    labasCheck.addEventListener("change", labasChange);
    let remiCheck = document.getElementById("remiCheck");
    remiCheck.checked=true
    remiCheck.addEventListener("change", remiChange);
    let dzdCheck = document.getElementById("dzdCheck");
    dzdCheck.checked=true
    dzdCheck.addEventListener("change", dzdChange);

    const aniArr=[];
    let kakiOk
    let suniOk

    //dzivnieku info
    let rawNames ='Peppe , Pegazs , Buzis , Čārlijs , Džūlija , Saule , Rafaels , Nostra , Mūsējie pavisam , Puziks , Kalla , Reksis , Rada , Kaķēni , Sibilla , Rodžers , Sūze , Olafs , Debora , Otiņa , Beka , Rina , Robins , Sāra , Feja , Amēlija , Niko , Pema , Barbara , Mona , Bingo , Rindla , Murziks , Argo , Žoržs , Maija , Rokeris , Pičers , Maksis , Lācis , Fidžī , Diona , Dinas sunēni , Dina , Baltausu Pele , Bella , Bonečka , Bugijs , Burka , Goša , Jasmīna , Kotja , Lellīte , Meija , Meliss , Nika , Punktiņš , Roberts , Saša , Susurs , Tomass , Zefīrs , Černišs , Ģertrūde , Fricis , Olīvija , Atēna , Sjoma , Afis , Nemo , Ķīvīte , Klijāns , Liesmiņa , Oglīte , Margo (Maša) , Tekila , Pantere , Arbūzītes kundze';
    let rawHrefs ="https://patversme.lv/pepe/,https://patversme.lv/pegazs/,https://patversme.lv/buzis/,https://patversme.lv/carlijs/,https://patversme.lv/dzulija/,https://patversme.lv/saule/,https://patversme.lv/rafaels/,https://patversme.lv/nostra/,https://patversme.lv/musejie-pavisam/,https://patversme.lv/puziks/,https://patversme.lv/kalla/,https://patversme.lv/reksis/,https://patversme.lv/rada/,https://patversme.lv/kakeni/,https://patversme.lv/sibilla/,https://patversme.lv/rodzers/,https://patversme.lv/suze/,https://patversme.lv/olafs/,https://patversme.lv/debora-2/,https://patversme.lv/otina/,https://patversme.lv/beka/,https://patversme.lv/rina/,https://patversme.lv/tom/,https://patversme.lv/sara-3/,https://patversme.lv/feja/,https://patversme.lv/amelija/,https://patversme.lv/niko/,https://patversme.lv/pema/,https://patversme.lv/barbara/,https://patversme.lv/mona/,https://patversme.lv/bingo/,https://patversme.lv/rindla/,https://patversme.lv/murziks/,https://patversme.lv/argo/,https://patversme.lv/zorzs/,https://patversme.lv/maija/,https://patversme.lv/rokeris/,https://patversme.lv/picers/,https://patversme.lv/maksis-2/,https://patversme.lv/lacis/,https://patversme.lv/fidzi/,https://patversme.lv/diona-un-olivers/,https://patversme.lv/dinas-suneni/,https://patversme.lv/dina/,https://www.remicentrs.lv/adopte/baltausu-pele,https://www.remicentrs.lv/adopte/bugijs,https://www.remicentrs.lv/adopte/jasm%C4%ABna,https://www.remicentrs.lv/adopte/meija,https://www.remicentrs.lv/adopte/punkti%C5%86%C5%A1,https://www.remicentrs.lv/adopte/susurs,https://www.remicentrs.lv/adopte/%C4%8Derni%C5%A1s,https://www.remicentrs.lv/adopte/bella,https://www.remicentrs.lv/adopte/burka,https://www.remicentrs.lv/adopte/kotja,https://www.remicentrs.lv/adopte/meliss,https://www.remicentrs.lv/adopte/roberts,https://www.remicentrs.lv/adopte/tomass,https://www.remicentrs.lv/adopte/%C4%A3ertr%C5%ABde,https://www.remicentrs.lv/adopte/bo%C5%86e%C4%8Dka,https://www.remicentrs.lv/adopte/go%C5%A1a,https://www.remicentrs.lv/adopte/lell%C4%ABte,https://www.remicentrs.lv/adopte/nika,https://www.remicentrs.lv/adopte/sa%C5%A1a,https://www.remicentrs.lv/adopte/zef%C4%ABrs,http://www.dzd.lv/mekle-majas/dzivnieks/fricis-2/,http://www.dzd.lv/mekle-majas/dzivnieks/olivija/,http://www.dzd.lv/mekle-majas/dzivnieks/atena/,http://www.dzd.lv/mekle-majas/dzivnieks/sjoma-2/,http://www.dzd.lv/mekle-majas/dzivnieks/afis/,http://www.dzd.lv/mekle-majas/dzivnieks/nemo/,http://www.dzd.lv/mekle-majas/dzivnieks/kivite/,http://www.dzd.lv/mekle-majas/dzivnieks/klijans/,http://www.dzd.lv/mekle-majas/dzivnieks/5-kakeni-3/,http://www.dzd.lv/mekle-majas/dzivnieks/5-kakeni/,http://www.dzd.lv/mekle-majas/dzivnieks/margo-masa/,http://www.dzd.lv/mekle-majas/dzivnieks/tekila/,http://www.dzd.lv/mekle-majas/dzivnieks/pantere/,http://www.dzd.lv/mekle-majas/dzivnieks/arbuzite/";
    let rawSrc="https://patversme.lv/wp-content/uploads/2020/12/4E273614-4D60-4B91-8DA0-87087BC57993-768x512.jpeg,https://patversme.lv/wp-content/uploads/2020/12/C0AC133F-0335-4810-8985-DCA94807C2F2-768x513.jpeg,https://patversme.lv/wp-content/uploads/2021/11/Buzis_02_fotografs_Sandis_Lazda-Copy1h-768x1137.jpg,https://patversme.lv/wp-content/uploads/2021/11/IMG-6108-768x768.jpeg,https://patversme.lv/wp-content/uploads/2021/11/janisbilde-350-of-350-min-768x512.jpg,https://patversme.lv/wp-content/uploads/2021/11/IMG-20221122-WA0025.jpg,https://patversme.lv/wp-content/uploads/2021/11/Rafaels17.11..jpg,https://patversme.lv/wp-content/uploads/2021/11/20210514_134058-1024x702-min-768x527.jpg,https://patversme.lv/wp-content/uploads/2021/11/20211216_170414-768x576.jpg,https://patversme.lv/wp-content/uploads/2021/12/IMG-20221004-WA0014.jpg,https://patversme.lv/wp-content/uploads/2022/01/DSC_0334-768x768.jpg,https://patversme.lv/wp-content/uploads/2022/03/70ECD50D-76D3-4273-989B-A15D8ABD20B8.jpeg,https://patversme.lv/wp-content/uploads/2022/03/73114FF1-9353-4891-84CD-A109DBFA6446.jpeg,https://patversme.lv/wp-content/uploads/2022/05/329113800_1562719977580480_232333298106973087_n-grinchs1-768x1152.jpg,https://patversme.lv/wp-content/uploads/2022/06/IMG-20221101-WA0012-768x576.jpg,https://patversme.lv/wp-content/uploads/2022/06/IMG-20221122-WA0027.jpg,https://patversme.lv/wp-content/uploads/2022/06/IMG-20221226-WA0050.jpg,https://patversme.lv/wp-content/uploads/2022/07/1079BE25-2749-40F1-AEA6-621EE306845F-min-768x783.jpeg,https://patversme.lv/wp-content/uploads/2022/08/59EF11CE-2D1F-4050-A829-4E3E88CC0EF3-min-768x836.jpeg,https://patversme.lv/wp-content/uploads/2022/10/IMG-20221004-WA0032.jpg,https://patversme.lv/wp-content/uploads/2022/10/IMG-20221226-WA0059.jpg,https://patversme.lv/wp-content/uploads/2022/10/IMG-20221004-WA0022.jpg,https://patversme.lv/wp-content/uploads/2022/11/IMG-20221226-WA0041.jpg,https://patversme.lv/wp-content/uploads/2022/11/IMG-20221025-WA0039.jpg,https://patversme.lv/wp-content/uploads/2022/11/DSC_0451-768x768.jpg,https://patversme.lv/wp-content/uploads/2022/11/DSC_0409-768x769.jpg,https://patversme.lv/wp-content/uploads/2022/11/IMG-20221122-WA0021.jpg,https://patversme.lv/wp-content/uploads/2022/12/DSC_0356-768x768.jpg,https://patversme.lv/wp-content/uploads/2022/12/DSC_0319-768x767.jpg,https://patversme.lv/wp-content/uploads/2022/12/DSC_0115-768x768.jpg,https://patversme.lv/wp-content/uploads/2022/12/IMG-20221226-WA0043.jpg,https://patversme.lv/wp-content/uploads/2022/12/IMG-20221226-WA0053.jpg,https://patversme.lv/wp-content/uploads/2023/01/IMG-20230103-WA0012.jpg,https://patversme.lv/wp-content/uploads/2023/01/IMG-20230109-WA0016-768x768.jpg,https://patversme.lv/wp-content/uploads/2023/01/DSC_0225-768x768.jpg,https://patversme.lv/wp-content/uploads/2023/01/pec-2-min.jpeg-768x768.jpg,https://patversme.lv/wp-content/uploads/2023/01/DSC_0s266-768x768.jpg,https://patversme.lv/wp-content/uploads/2023/01/dddddddd-768x768.jpg,https://patversme.lv/wp-content/uploads/2022/05/DSC_01z5-768x768.jpg,https://patversme.lv/wp-content/uploads/2023/02/DSC_0107-768x768.jpg,https://patversme.lv/wp-content/uploads/2023/02/DSC_0189-768x769.jpg,https://patversme.lv/wp-content/uploads/2023/02/DSC_0003-768x769.jpg,https://patversme.lv/wp-content/uploads/2023/02/FB_IMG_1676905810000.jpg,https://patversme.lv/wp-content/uploads/2023/02/IMG-20230223-WA0009-768x767.jpg,./Images/0f82dc_3efc4896b7284c458b7d974dd8fdec6a~mv2.webp";
    for(let i=0; i<33; i++){
        rawSrc = rawSrc+",./Images/cat.png"; 
    }
    let typeArr="s s s s s s s k k s k s s k k s s k k k s s s s k k s k k k s s k s k s s k k s k k s s k k k k k k k k k k k k k k k k k k k k k k k k k k k k k k k k k k";
    let patArr=[];
    for(let i=0; i<44; i++){
        patArr.push("labasM")
    }
    for(let i=0; i<20; i++){
        patArr.push("remiC")
    }
    for(let i=0; i<14; i++){
        patArr.push("dzd")
    }

    typeArr=typeArr.split(' ');
    const animalNames = rawNames.split(' , ');
    const animalLinks = rawHrefs.split(",");
    const animalImages = rawSrc.split(",");

    for(let i=0; i<animalNames.length; i++){
        const para = document.createElement("a");
        const para12 = document.createElement("p");
        para12.innerText = animalNames[i];
        para.href = animalLinks[i];
        para.className = "aniGridEl";
        para.style.backgroundColor='#ffffff00';
        document.getElementById("aniGrid").appendChild(para);
        aniArr.push(para);

        const para2 = document.createElement("div");
        let url= "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),url('"+animalImages[i]+"')"
        para2.className="aniGridElBackground";
        para2.style.backgroundImage=url;
        let created=document.querySelectorAll(".aniGridEl")     //finds last created element
        let fuf=created.length;
        fuf= fuf-1;                                             //the fuf
        created[fuf].appendChild(para2);
        created[fuf].appendChild(para12);
    }
    
    //filter 
    function kakiChange(){
        for(let u=0; u<aniArr.length; u++){
            if(typeArr[u]=="s"){
                aniArr[u].style.display="none";
            }else{
                if(labasCheck.checked==true && patArr[u]=="labasM"){
                    aniArr[u].style.display="flex";
                }else if(remiCheck.checked==true && patArr[u]=="remiC"){
                    aniArr[u].style.display="flex";
                }else if(dzdCheck.checked==true && patArr[u]=="dzd"){
                    aniArr[u].style.display="flex";
                }
            }
        }
    }
    function suniChange(){
        for(let u=0; u<aniArr.length; u++){
            if(typeArr[u]=="k"){
                aniArr[u].style.display="none";
            }else{
                if(labasCheck.checked==true){
                    aniArr[u].style.display="flex";
                }
            }
        }
    }
    function visiChange(){
        for(let u=0; u<aniArr.length; u++){
            if(labasCheck.checked==true && patArr[u]=="labasM"){
                aniArr[u].style.display="flex";
            }else if(remiCheck.checked==true && patArr[u]=="remiC"){
                aniArr[u].style.display="flex";
            }else if(dzdCheck.checked==true && patArr[u]=="dzd"){
                aniArr[u].style.display="flex";
            }
        }
    }
    
    function labasChange(){
        if(kakiCheck.checked==true || visiCheck.checked==true){
            kakiOk=true;
        }else{
            kakiOk=false;
        }
        if(suniCheck.checked==true || visiCheck.checked==true){
            suniOk=true;
        }else{
            suniOk=false;
        }
        if (labasCheck.checked==true){
            for(let u=0; u<aniArr.length; u++){
                if(patArr[u]=="labasM"){
                    console.log("chech");
                    if(kakiOk==true && typeArr[u]=="k"){
                        console.log("good cat");
                        aniArr[u].style.display="flex";
                    }
                    if(suniOk==true && typeArr[u]=="s"){
                        console.log("good dog");
                        aniArr[u].style.display="flex";
                    }
                }
            }
        }else{
            for(let u=0; u<aniArr.length; u++){ 
                if(patArr[u]=="labasM"){
                    aniArr[u].style.display="none";
                }
            }
        }


    }
    function remiChange(){
        if(kakiCheck.checked==true || visiCheck.checked==true){
            kakiOk=true;
        }else{
            kakiOk=false;
        }
        if (remiCheck.checked==true){
            for(let u=0; u<aniArr.length; u++){
                if(patArr[u]=="remiC" && kakiOk==true){
                    aniArr[u].style.display="flex";
                }
            }
        }else{
            for(let u=0; u<aniArr.length; u++){
                if(patArr[u]=="remiC"){
                    aniArr[u].style.display="none";
                }
            }
        }
    }
    function dzdChange(){
        if(kakiCheck.checked==true || visiCheck.checked==true){
            kakiOk=true;
        }else{
            kakiOk=false;
        }
        if(dzdCheck.checked==true){
            for(let u=0; u<aniArr.length; u++){
                if(patArr[u]=="dzd" && kakiOk==true){
                    aniArr[u].style.display="flex";
                }
            }
        }else{
            for(let u=0; u<aniArr.length; u++){
                if(patArr[u]=="dzd"){
                    aniArr[u].style.display="none";
                }
            }
        }
    }


}


//map
if(map){ 
    const klinikas =[
        {coords:"56.94502405415593, 24.07175348121274", name:"Mazo brāļu hospitālis", phone:"67619061", adress:"Kalnciema Iela 19, Zemgales priekšpilsēta, Rīga, LV-1046"},
        {coords:"56.96053521828592, 24.12963495467299", name:"Terion, Veterinārā klīnika Miera iela", phone:"67379129", adress:"Miera iela 4, Centra rajons, Rīga, LV-1001"},
        {coords:"56.96052387306916, 24.145200960261747", name:"Terion veterinārā klīnika", phone:"67296909", adress:"Laboratorijas iela 2a, Latgales priekšpilsēta, Rīga, LV-1012"},
        {coords:"56.96220984078235, 24.14778120645476", name:"Dr.Makarova veterinārā klīnika", phone:"27005531", adress:"Aleksandra Čaka iela 138, Latgales priekšpilsēta, Rīga, LV-1012"},
        {coords:"56.94102778277322, 24.049132266124925",name:"PetCity Candera klīnika",site:"http://www.petcity.lv/",adress:"Fridriha Candera iela 4, Zemgales priekšpilsēta, Rīga, LV-1046"},
        {coords:"56.94989058134669, 24.136439128283936",name:"Dr. Beinerts",phone:"67288539",adress:"Ģertrūdes iela 101, Latgales priekšpilsēta, Rīga, LV-1009"},
        {coords:"56.95349999691336, 24.038585653300952",name:"Dr. Beinerts Imantas Veterinārā Klīnika",phone:"67411880",adress:"Kurzemes prospekts 1A, Kurzemes rajons, Rīga, LV-1067"}
    ];
    const veikali=[ 
        {coords:"56.92302318513759, 24.177661132307712", name:"PetCity Akropole", site:"http://www.petcity.lv/", adress:"Maskavas iela 257 1.stāvā pie D ieejas Rīga, LV-1019"},
        {coords:"56.927291287571734, 24.10352023470921",name:"PetCity Rīga Plaza",site:"http://www.petcity.lv/",adress:"Mūkusalas iela 71, Zemgales priekšpilsēta, Rīga, LV-1004"},
        {coords:"56.93432320395706, 24.05416058598671",name:'Remi "Kaķa sirds" patversme un veterinārā klīnika',site:"https://www.remicentrs.lv/",adress:"Kauguru iela 10, Zemgales priekšpilsēta, Rīga, LV-1046"}
    ]
    const shelters=[
        {coords:"56.969692792838266, 24.254552260233595", name:"Labās mājas", site:"http://www.patversme.lv/", adress:"Mežapurva iela 2, Vidzemes priekšpilsēta, Rīga, LV-1064"},
        {coords:"56.94127243140773, 24.049199951993195",name:"Dzīvnieku draugs patversme",site:"http://www.dzd.lv/",adress:"Fridriha Candera iela 4, Zemgales priekšpilsēta, Rīga, LV-1046"},
        {coords:"56.93432320395706, 24.05416058598671",name:'Remi "Kaķa sirds" patversme un veterinārā klīnika',site:"https://www.remicentrs.lv/",adress:"Kauguru iela 10, Zemgales priekšpilsēta, Rīga, LV-1046"}
    ]
    //{coords:"",name:"",site:"",adress:""},
    //{coords:"",name:"",phone:"",adress:""},

    var map = L.map('map').setView([56.94741929512509, 24.104157144654774], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    //icons
    var hospIcon = L.icon({
        iconUrl: './images/hospIcon.png',
        shadowUrl: './images/pinShadow.png',
    
        iconSize:     [35, 35], // size of the icon
        shadowSize:   [35, 35], // size of the shadow
        iconAnchor:   [17, 35], // point of the icon which will correspond to marker's location
        shadowAnchor: [18, 36],  // the same for the shadow
        popupAnchor:  [0, -35] // point from which the popup should open relative to the iconAnchor
    });
    var foodIcon = L.icon({
        iconUrl: './images/pinFood.png',
        shadowUrl: './images/pinShadow.png',
    
        iconSize:     [35, 35], // size of the icon
        shadowSize:   [35, 35], // size of the shadow
        iconAnchor:   [17, 35], // point of the icon which will correspond to marker's location
        shadowAnchor: [18, 36],  // the same for the shadow
        popupAnchor:  [0, -35] // point from which the popup should open relative to the iconAnchor
    });
    var shelterIcon = L.icon({
        iconUrl: './images/pinShelter.png',
        shadowUrl: './images/pinShadow.png',
    
        iconSize:     [35, 35], // size of the icon
        shadowSize:   [35, 35], // size of the shadow
        iconAnchor:   [17, 35], // point of the icon which will correspond to marker's location
        shadowAnchor: [18, 36],  // the same for the shadow
        popupAnchor:  [0, -35] // point from which the popup should open relative to the iconAnchor
    });
    var noIcon = L.icon({
        iconUrl: './images/pinShelter.png',
        shadowUrl: './images/pinShadow.png',
    
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
}