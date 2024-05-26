window.addEventListener('DOMContentLoaded', (event) => {
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

    

    //creating elements
    for(i of dzivnieki){
        const para = document.createElement("a");
        const para1 = document.createElement("p");
        para1.innerText = i.name;
        para.className = "aniGridEl";
        para.href = "./zinojums.html";
        para.style.backgroundColor='#ffffff00';
        document.getElementById("aniGrid").appendChild(para);
        aniArr.push(para);
        para.addEventListener('click',()=>{sessionStorage.petName=this.children[1].innerHTML})//saglaba miluļa vardu nakamai lapai
        const para2 = document.createElement("div");

        if(i.type=="dog"){
            var animalImage="../Images/daDog.png"
        }else{
            var animalImage="../Images/ccfa37b8659442e9a994fe07d0534ac8.webp"
        }
        if(i.shelter=="labasM"){
            var color="rgba(0, 255, 0, 0.1), rgba(0, 255, 0, 0.1)"
        }else if(i.shelter=="dzd"){
            var color="rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.1)"
        }else{
            var color="rgba(0, 0, 255, 0.1), rgba(0, 0, 255, 0.1)"
        }
        let url= "linear-gradient("+color+"),url('"+animalImage+"')"
        para2.className="aniGridElBackground";
        para2.style.backgroundImage=url;
        let created=document.querySelectorAll(".aniGridEl")                                          
        created[created.length-1].appendChild(para2);
        created[created.length-1].appendChild(para1);
    }

    //filtering elements 
    function kakiChange(){
        for(let u=0; u<aniArr.length; u++){
            if(dzivnieki[u].type=="dog"){
                aniArr[u].style.display="none";
            }else{
                if(labasCheck.checked==true && dzivnieki[u].shelter=="labasM"){
                    aniArr[u].style.display="flex";
                }else if(remiCheck.checked==true && dzivnieki[u].shelter=="remiC"){
                    aniArr[u].style.display="flex";
                }else if(dzdCheck.checked==true && dzivnieki[u].shelter=="dzd"){
                    aniArr[u].style.display="flex";
                }
            }
        }
    }
    function suniChange(){
        for(let u=0; u<aniArr.length; u++){
            if(dzivnieki[u].type=="cat"){
                aniArr[u].style.display="none";
            }else{
                if(labasCheck.checked==true && dzivnieki[u].shelter=="labasM"){
                    aniArr[u].style.display="flex";
                }else if(remiCheck.checked==true && dzivnieki[u].shelter=="remiC"){
                    aniArr[u].style.display="flex";
                }else if(dzdCheck.checked==true && dzivnieki[u].shelter=="dzd"){
                    aniArr[u].style.display="flex";
                }
            }
        }
    }
    function visiChange(){
        for(let u=0; u<aniArr.length; u++){
            if(labasCheck.checked==true && dzivnieki[u].shelter=="labasM"){
                aniArr[u].style.display="flex";
            }else if(remiCheck.checked==true && dzivnieki[u].shelter=="remiC"){
                aniArr[u].style.display="flex";
            }else if(dzdCheck.checked==true && dzivnieki[u].shelter=="dzd"){
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
                if(dzivnieki[u].shelter=="labasM"){
                    if(kakiOk==true && dzivnieki[u].type=="cat"){
                        aniArr[u].style.display="flex";
                    }
                    if(suniOk==true && dzivnieki[u].type=="dog"){
                        aniArr[u].style.display="flex";
                    }
                }
            }
        }else{
            for(let u=0; u<aniArr.length; u++){ 
                if(dzivnieki[u].shelter=="labasM"){
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
        if(suniCheck.checked==true || visiCheck.checked==true){
            suniOk=true;
        }else{
            suniOk=false;
        }
        if (remiCheck.checked==true){
            for(let u=0; u<aniArr.length; u++){
                if(dzivnieki[u].shelter=="remiC"){
                    if(kakiOk==true && dzivnieki[u].type=="cat"){
                        aniArr[u].style.display="flex";
                    }
                    if(suniOk==true && dzivnieki[u].type=="dog"){
                        aniArr[u].style.display="flex";
                    }
                }
            }
        }else{
            for(let u=0; u<aniArr.length; u++){
                if(dzivnieki[u].shelter=="remiC"){
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
        if(suniCheck.checked==true || visiCheck.checked==true){
            suniOk=true;
        }else{
            suniOk=false;
        }
        if(dzdCheck.checked==true){
            for(let u=0; u<aniArr.length; u++){
                if(dzivnieki[u].shelter=="dzd"){
                    if(kakiOk==true && dzivnieki[u].type=="cat"){
                        aniArr[u].style.display="flex";
                    }
                    if(suniOk==true && dzivnieki[u].type=="dog"){
                        aniArr[u].style.display="flex";
                    }
                }
            }
        }else{
            for(let u=0; u<aniArr.length; u++){
                if(dzivnieki[u].shelter=="dzd"){
                    aniArr[u].style.display="none";
                }
            }
        }
    }
})