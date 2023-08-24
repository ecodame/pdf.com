window.onload = function(){
   
    
    
    
    let getnapsme = document.getElementById('affichenom').innerHTML = sessionStorage.getItem('kosd');
    let getnapsmey = document.getElementById('affichematrucule').innerHTML = sessionStorage.getItem('dojh');
    
}

function result(){
    let name = document.getElementById('name').value;

    sessionStorage.setItem('dojh', name);
}