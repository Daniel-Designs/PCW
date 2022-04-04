
function asignarManejadores(){
    let btns;
    console.log("Hola");
    //Boton Destacar
    btns = document.querySelectorAll('footer > button:first-of-type'); //El primer hijo boton que tenga padre footer
    btns.forEach(function(e){
        e.addEventListener('click',(event)=>{
            e.parentElement.parentElement.classList.add('destacar');
        })
      
    });



     //Boton Destacar
     btns = document.querySelectorAll('footer>button:last-of-type'); //El ultimo hijo boton que tenga padre footer
     btns.forEach(function(e){
        e.addEventListener('click',(event)=>{
            e.parentElement.parentElement.classList.remove('destacar');
        })
    });
     btns = document.querySelectorAll('footer>button:nth-of-type(2)'); //El ultimo hijo boton que tenga padre footer


}

//saludo();