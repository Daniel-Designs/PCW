
function pedirLugares()
{
let url = './api/lugares';

fetch(url).then(function(respuesta){
if(respuesta.ok)
{ // Tenemos las respuesta
// respuesta.text().then(function(texto){
// console.log(texto);
// });
respuesta.json().then(function(objJS){
console.log(objJS);
let html = '';
objJS.FILAS.forEach(function(e){
html += `<li>${e.nombre}</li>`;
});
document.querySelector('#lugares').innerHTML = html;
});
}
else
{
// No tenemos la respuesta
}
}).catch(function(err){
console.log('Se ha producido un error: ' + err);
});
}


