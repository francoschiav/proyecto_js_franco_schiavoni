// Corrección con FORM
let sumaAlApretarBoton = 0;
let presupuestoTotal = 0;
const presupuestos = [];
class Presupuesto{
    constructor (pozo,valor){
        this.pozo = pozo;
        this.valor = parseInt(valor);
    }     
}

$("form").submit (function(e){
  
    e.preventDefault();
        presupuestos.push (new Presupuesto ($("#nombrePozo").val(), $("#precioPozo").val()));

        const guardarLocalValores = (clave, valor) => {localStorage.setItem(clave,valor)};
        guardarLocalValores ($("#nombrePozo").val(), $("#precioPozo").val());

        $("#h3DePozos").append(`<h3>Pozo: ${$("#nombrePozo").val()}; Valor: USD ${$("#precioPozo").val()}</h3>`);
       
}) 


         // ------------------------------BOTON MOSTRAR PRESUPUESTO CON JQUERY-------------

         $("#botonMostrarPresupuesto").click (function(e){
             e.preventDefault();
             let sumaAlApretarBoton = 0;
             console.log (typeof sumaAlApretarBoton);
             for (let k=0 ; k < localStorage.length; k++){
    
                let claveJson =localStorage.key(k);
                console.log(typeof claveJson );
                let claveParseada = JSON.parse(localStorage.getItem(claveJson));
                console.log(typeof claveParseada );

                sumaAlApretarBoton = sumaAlApretarBoton  + claveParseada; 
                console.log(typeof sumaAlApretarBoton );
            }
            $("#tituloPrincipalIndex").html(`El presupuesto total ingresado es de: USD ${sumaAlApretarBoton}`);
         })
     
       


// -------------------------------BOTON BORRAR CON JQUERY-------------
$("#botonBorrar").click (function(e){
    e.preventDefault();
    $("#tituloPrincipalIndex").html(`Gracias por utilizar el servicio.`);
    $("#h3DePozos").empty();
    localStorage.clear();
})



