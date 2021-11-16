
var nombre = null;
var anio = null;
var genero = null;
var actor01 = null;
var actor02 = null;
var actor03 = null;
var arreglo = new Array(); 
var id = null; 
var objeto = null;
var retro = null;
var i = 0;


function agregarNombre(parametro){
    nombre = parametro.value;
}

function agregarAno(parametro){
    anio = parametro.value;
}

function agregarActorUno(parametro){
    actor01 = parametro.value;
}

function agregarActorDos(parametro){
    actor02 = parametro.value;
}

function agregarActorTres(parametro){
    actor03 = parametro.value;
}

function agregarSinopsis(parametro){
    sinopsis = parametro.value;
}

function agregarGenero(parametro){
    genero = parametro.value;
}

function limpiarFormulario() {
    document.getElementById("formulario").reset();
}
function guardar(){
     objeto = {
        "nombre": nombre,
        "aniox" : anio,
        "generox" : genero,
        "sinopsis" : sinopsis,
            reparto : {
                "actor01" : actor01,
                "actor02" : actor02,
                "actor03" : actor03
            } 
    };
        arreglo[i] = objeto;
        i++;
        alert("Registro Guardado!");
        //console.log(objeto);
}

function mostrar(){
    var msj = "";
        for(var j = 0; j < arreglo.length; j++){
            msj += "<tr>"+
                    "<td>"+(j+1) +"</td>"+
                    "<td>"+ arreglo[j].nombre + "</td>" +
                    "<td>" + arreglo[j].aniox + "</td>" +
                    "<td>" + arreglo[j].generox + "</td>" +
                    "<td>" + arreglo[j].reparto.actor01 +
                        "<br>"+ arreglo[j].reparto.actor02 +
                        "</br>" + arreglo[j].reparto.actor03 +"</td>" +
                    "<td>" + arreglo[j].sinopsis + "</td>" +
                    "</tr>";
        }
        document.getElementById("resultados").innerHTML = msj;
        limpiarFormulario();
}

document.getElementById("buscar").addEventListener("click", function(){
   id = document.getElementById("identificador").value;
   console.log(id); 
});

function eliminar(){
      retro = id - 1;
     //arreglo.splice(desde donde comienza a eliminar , cuantos se eliminan);
     arreglo.splice(retro, 1);
    console.log(arreglo);
    
}

function actualizar(){document.getElementById("resultado2").innerHTML = "";
mostrar();
arreglo.splice(retro,0,objeto);
console.log(arreglo);
}






