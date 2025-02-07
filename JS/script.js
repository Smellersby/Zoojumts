// temas(ari starp lapam), mobilo ieriču atbalsts, 2 navigacijas paneli(un animacija), karte, filtrešana, json?, vestule

var root = document.querySelector(':root');
var theme=0;

var navbar = document.querySelector('.navContainer');
var compactNav = document.querySelector('.compactNav');

var themeButton=document.getElementById('theme');
themeButton.addEventListener("click", changeTheme); 

var menuButton=document.getElementById('menuButton');
menuButton.addEventListener("click", openMenu); 
var backButton=document.getElementById('backButton');
backButton.addEventListener("click", openMenu); 
var menuOpened=false

var heroImg=document.getElementById('hero');
var buttonImg=document.getElementById('buttonImg');
var map=document.getElementById('map');

function openMenu(){
    if(menuOpened==false){
        compactNav.style.left = "0px";
        menuOpened=true
    }else{
        compactNav.style.left = "-500px";
        menuOpened=false
    }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
} 

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
        if(heroImg){heroImg.src='../Images/blackCat.jpg';}
        buttonImg.src='../Images/Anti.png';
        menuButtonImg.src='../Images/antiMenuButton.png'
        backButtonImg.src='../Images/antiBack.png'
        sessionStorage.theme=0;
        theme=1;
    }else{
        root.style.setProperty('--white', '#fefffa');
        root.style.setProperty('--green', 'rgb(70, 145, 20)');
        root.style.setProperty('--black', '#000000');
        root.style.setProperty('--gray', '#f4f4f9')
        root.style.setProperty('--Acolor', 'rgb(33, 114, 200)')
        if(heroImg){heroImg.src='../Images/HeroImage.jpg';}
        buttonImg.src='../Images/brightness.png';
        menuButtonImg.src='../Images/menuButton.png'
        backButtonImg.src='../Images/back.png'
        sessionStorage.theme=1;
        theme=0;
    }
}