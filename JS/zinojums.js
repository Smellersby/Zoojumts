window.addEventListener('DOMContentLoaded', (event) => {
    
    petName=sessionStorage.getItem("petName")
    for (i of dzivnieki) {
        if(i.name==petName){
            patversme.value=i.shelter
            addOptions(i.shelter)
        }
    }
    dzivnieks.value=petName

    patversme.addEventListener('change',changeOptions)

    submitButton.addEventListener('click',(event)=>{
        if(validate()==false){
            event.preventDefault()
        }
    })

    function validate(){
        for(i of ziedojums.value){
            if((i>'9'||i<'0')&&i!='.'){
                alert("ziedojumam jabūt positivam skaitlim") 
                return false
            }
        }
        if(ziedojums.value){
            ziedojums.value=Math.round(parseFloat(ziedojums.value*100))/100;
        }
        return true
    }


    function addOptions(izveletaPatversme){
        for (i of dzivnieki) {
            if(i.shelter==izveletaPatversme){
                const option = document.createElement("option");
                const textnode = document.createTextNode(i.name);
                option.appendChild(textnode);
                option.value=i.name
                dzivnieks.appendChild(option);
            }
        }
    }

    function removeOptions(){
        while(dzivnieks.childElementCount>0){
            dzivnieks.removeChild(dzivnieks.children[0]);
        }
    }

    function changeOptions(){
        removeOptions()
        addOptions(patversme.value)
    }
})