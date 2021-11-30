
let sumaAlApretarBoton = 0;
let presupuestoTotal = 0;
const pozos = [];
class Pozo{
    constructor (nombre,valor){
        this.nombre = nombre;
        this.valor = parseInt(valor);
    }     
}

var arrayPresFinal = [];
var guardados = [];


// -------------------------Botón submit con jQuery------------------------------------

$("form").submit (addPozo);
  
  function addPozo(e){
    e.preventDefault();
    // $( "#botonBorrar" ).show();
    // $( "#botonMostrarPresupuesto" ).show();
     pozos.push (new Pozo ($("#nombrePozo").val(), $("#precioPozo").val()));

        const guardarLocalValores = (clave, valor) => {localStorage.setItem(clave,valor)};
        guardarLocalValores ($("#nombrePozo").val(), $("#precioPozo").val());

        $("#h3DePozos").html(`<h3>Pozo: ${$("#nombrePozo").val()}; Valor: USD ${$("#precioPozo").val()}</h3>`);

    
    // var presFinal = JSON.parse(localStorage ["arrayPresFinal"]);
    
  }
// -------------------------Botón submit con jQuery------------------------------------

//Llenar la lista de pozos trayendo info del local storage
$("#btnPresFinal").click (addPresFinal)
function addPresFinal(e){
  e.preventDefault();
  arrayPresFinal.push (pozos);
  localStorage.setItem('arrayPresFinal', JSON.stringify(arrayPresFinal));
  guardados.push (arrayPresFinal);
  localStorage.setItem('guardados', JSON.stringify(guardados));
  for (let i=0; i<arrayPresFinal.length;i++){
    localStorage.removeItem("arrayPresFinal[i]");
  }
  arrayPresFinal = [];

//  $("#h3Historial").html(`JSON.parse(localStorage.getItem('guardados'))`)
}



// -------------------------Finalización Botón submit con jQuery------------------------------------

         // ------------------------------BOTON MOSTRAR PRESUPUESTO CON JQUERY-------------

        //  $("#botonMostrarPresupuesto").click (function(e){
        //      e.preventDefault();
        //      let sumaAlApretarBoton = 0;
        //      console.log (typeof sumaAlApretarBoton);
        //      for (let k=0 ; k < localStorage.length; k++){
    
        //         let claveJson =localStorage.key(k);
        //         console.log(typeof claveJson );
        //         let claveParseada = JSON.parse(localStorage.getItem(claveJson));
        //         console.log(typeof claveParseada );

        //         sumaAlApretarBoton = sumaAlApretarBoton  + claveParseada; 
        //         console.log(typeof sumaAlApretarBoton );
        //     }
            
        //     $("#tituloPrincipalIndex").html(`El presupuesto total ingresado es de: USD ${sumaAlApretarBoton}`).hide().fadeIn(1500);
        //  })
         
// ------------------------------FINALIZACIÓN BOTON MOSTRAR PRESUPUESTO CON JQUERY-------------     


// -------------------------------BOTON BORRAR CON JQUERY-------------
// $("#botonBorrar").click (function(e){
//     e.preventDefault();
//     $("#tituloPrincipalIndex").html(`Gracias por utilizar el servicio.`).hide().fadeIn(1500);
//     $("#h3DePozos").empty();
//     localStorage.clear();
//     $("#h3DePozos").prepend (`<div id="div1">
//                                 <h3> Borrado correctamente </h3>
//                                 </div>`);
//    $("#div1").hide().fadeIn(1500);    
             
//    $( "#botonBorrar" )
//       .animate({
//         height: "toggle",
//         opacity: "toggle"
//       })
//       $( "#botonMostrarPresupuesto" )
//       .animate({
//         height: "toggle",
//         opacity: "toggle"
//       })
// })

// -------------------------------FINALIZACIÓN BOTON BORRAR CON JQUERY-------------

