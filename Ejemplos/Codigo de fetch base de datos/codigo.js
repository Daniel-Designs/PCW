function pedirLugares(){
    let url = 'https://localhost/pcw/practica2/api/lugares';
    //let url = 'api/lugares/2/valoraciones';
    
    fetch(url).then((res)=>{
        if(res.ok){//Tenemos la respuesta pero si no la buscamos en el else
           
            /*response.text().then((text)=>{
                console.log(text);
            })*/
            res.json().then((json)=>{
                console.log(json);
                let html = '';
                json.FILAS.array.forEach(element => {
                    html += `<li>${e.nombre}<li/>`
                });
                document.querySelector('#lugares').innerHTML = html;
            })

        }else{ //No tenemos las respuestas 

        }
    }).catch((err)=>{
        console.log(err);
    }); 
}
/*
function hacerLogin(frm){
    let = 'https://localhost/pcw/practica2/api/usuarios/login',
        xhr = new XMLHttpRequest(),
        fd = new FormData(frm);
        init = {method: 'POST', body : fd}

    xhr.open('POST',url,true);
    xhr.onload = ()=>{
        console.log(xhr.responseText);
    }

    xhr.send(fd); //Por se peticion Post el FD tiene que ser enviado

    evt.preventDefault(); // Cancelamos la accion por defecto para poder hacer el procesamiento nosotros mismos 

}
*/
//saludo();


function hacerLogin(frm){
    let = 'https://localhost/pcw/practica2/api/usuarios/login',
        xhr = new XMLHttpRequest(),
        fd = new FormData(frm);
        init = {method: 'POST', body : fd}
fetch(url,init).then((respuesta)=>{
    if(respuesta.ok){
        respuesta.json().then((datos)=>{
            console.log(datos);
        })
    }else{
        console.log("Error")
    }
}).catch((err)=>{
    console.log(err);
})
    
}


function mostrarMensaje(){
    let dialog = document.querySelector('#msjModal');

    dialog.onclose = ()=>{
        if(dialog.returnValue == 'login'){
            console.log('Ha puslsado acpetar')
            hacerLogin(dialog.querySelector('form'));
            
        }else{
            console.log('ha pulsado cancelar')
        }
    }

    dialog.oncancel = ()=>{
       console.log('salir')
    }

    dialog.showModal();
}

function hacerRegistro(frm){
    let url = 'api/usuarios/registro'
    fd = new FormData(frm),
    xhr = new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.onload = ()=>{
        let r = xhr.response;
        console.log(r);
    }
    xhr.send(fd);
    return false;
}