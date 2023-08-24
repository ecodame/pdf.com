function openOnglet(evt , name){
    var i , tabcontent , tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for(i= 0; i <tabcontent.length ; i++){
      tabcontent[i].style.display = 'none';
    }
  
    tablinks = document.getElementsByClassName('tablinks');
    for(i= 0; i <tablinks.length ; i++){
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(name).style.display ="block" ;
    evt.currentTarget.className += " active";
  }


  function show(){
    document.querySelector('.remov').classList.toggle('activerr')
    document.querySelector('.remov1').classList.toggle('activerr1')

  }












// const onglet = document.querySelectorAll('.onglet');

// const contenue = document.querySelectorAll('.contenue');

// let index=0;

// onglet.forEach(onglet => {
//     onglet.addEventListener('click',() => {

//         if(onglet.classList.contains('active')){
//             return;
//         }
//         else{
//             onglet.classList.add('active');
//         }

//         index = onglet.getAttribute('data-anim');
//         console.log(index);

//         for (i = 0; i < onglet.length; i++){
//             if(onglet[i].getAttribute('data-anim') != index){
//                 onglet[i].classList.remove('active');
//             }
//         }

//         for(j = 0; j < contenue.length; j++){
//             if(contenue[j].getAttribute('data-anim') == index){
//                 contenue[j].classList.add('activecontenue');

//             }else{
//                 contenue[j].classList.remove('activecontenue');
//             }
//         }
//     })
// })

