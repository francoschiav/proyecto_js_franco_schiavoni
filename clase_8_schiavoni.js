
let sumaAlApretarBoton = 0;
let presupuestoTotal = 0;
let pozos = [];
let cantidadPozos =0;

class Pozo {
  constructor(nombre, valor) {
    this.nombre = nombre;
    this.valor = parseInt(valor);
  }
}

const guardarLocalValores = (clave, valor) => {
  localStorage.setItem(clave, valor);
};

//Inicio botón Submit donde se irá cargando cada nombre de pozo y cada valor de pozo.
$("form").submit(addPozo);
function addPozo(e) {
  e.preventDefault();
    pozos.push(new Pozo($("#nombrePozo").val(), $("#precioPozo").val()));
    guardarLocalValores("arrayPresFinal", JSON.stringify(pozos));
    presupuestoTotal = presupuestoTotal + JSON.parse($("#precioPozo").val()) ;
    cantidadPozos = cantidadPozos + 1;
    $("#presupuestoTotal").hide().html(`<div id="div3" class="text-light">  <h3>Presupuesto Total: ${presupuestoTotal} </h3>  </div>`)
    $("#h3DePozos").append(
      `<h3>Pozo: ${$("#nombrePozo").val()}; Valor: USD ${$(
        "#precioPozo"
      ).val()}</h3>`);
 }
//Finañización Botón submit donde se irá cargando cada nombre de pozo y cada valor de pozo.

//Inicio botón Presupuesto Total donde se verá el presupuesto total de los pozos cargados
let i = 0;
$("#btnPresFinal").click(addPresFinal);
function addPresFinal(e) {
  e.preventDefault();
  if ( presupuestoTotal ==0){
    Swal.fire(
      'Usted no ha ingresado nada aún',
      'Ingrese valores y presione Submit',
      'error'
    )
  } else{
          let arrayPres = JSON.parse(localStorage.getItem("arrayPresFinal"));
      let guardados = JSON.parse(localStorage.getItem("guardados"));
      if (guardados == undefined) {
            let guardados = {};
            guardados["Presupuesto " + i] = arrayPres;
            guardarLocalValores("guardados", JSON.stringify(guardados));
          //Nuevo
            arrayPres = [];
            pozos = [];
            i++;
          
            $("#h3DePozos").empty();
            Swal.fire(
              `Presupuesto creado
               Monto total: USD ${presupuestoTotal}
               Cantidad de pozos: ${cantidadPozos}`,
              'Puede continuar ingresando pozos para un nuevo presupuesto. Dirigirse a Historial para ver todos los presupuestos creados.',
              'success'
            )
            // $("#presupuestoTotal").show();
            presupuestoTotal = 0;

      } else {
              guardados["Presupuesto " + i] = arrayPres;
              localStorage.setItem("guardados", JSON.stringify(guardados));
              arrayPres = [];
              i++;
              localStorage.setItem("arrayPresFinal", JSON.stringify(arrayPres));
              //Nuevo
              pozos = [];
            
              $("#h3DePozos").empty();
              Swal.fire(
                `Presupuesto creado: USD ${presupuestoTotal}`,
                'Puede continuar ingresando pozos para un nuevo presupuesto. Dirigirse a Historial para ver todos los presupuestos creados.',
                'success'
              )
            
              // $("#presupuestoTotal").show();
              presupuestoTotal = 0;
        }
  }    
}
//Finalización botón Presupuesto Total donde se verá el presupuesto total de los pozos cargados

//Inicio boton ver Historial. El mismo se encuentra en el nav bar y hace que se despliegue el historial abajo de la página 
$("#btnHistorial").click (addHistorial);
function addHistorial (e){
  e.preventDefault();
  $("#seccionHistorialId").html(
    `<h2 class="text-danger mb-3 pb-0 pt-3 ms-3">Historial de Presupuestos</h2>`
  ).hide().fadeIn("slow");
  
  let almacenadoHistorial = JSON.parse(localStorage.getItem("guardados"));

  for (const propiedad in almacenadoHistorial){
    $("#seccionHistorialId").append(`<div class="text-light">
                   <h3 class="text-primary mb-0 pb-0"> ${propiedad}: </h3>
                              </div>`).hide().slideDown("slow");

    sacarPozos = almacenadoHistorial[propiedad];  
    
    let sumaParcial = 0;
    
    for (let h=0; h<sacarPozos.length; h++){
      
      sumaParcial = sumaParcial + sacarPozos[h].valor;
      
      $("#seccionHistorialId").append(`<div class="text-light">
                  
                   <h3 class="mb-0 pb-0">Pozo: ${sacarPozos[h].nombre}---Valor: USD  ${sacarPozos[h].valor}</h3>
                              </div>`).hide().slideDown("slow");

    }  
    $("#seccionHistorialId").append(`<div class="text-light">
    <h3 class="text-success mb-0 pb-0">TOTAL: USD ${sumaParcial} </h3>
              </div>`).hide().fadeIn("slow");

  }
//Acá se agrega un botón "Borrar Historial" una vez que se despliega el menu:
  $("#seccionHistorialId").append(`
              <button id="botonBorrar" class="btn btn-danger zindexeado mt-3"> Borrar Historial </button>
  
              `).hide().slideDown("slow");
}

//Finalización botón ver Historial


//Inicio función del botón borrar historial que se agrega por DOM al desplegar el Historial. Al hace click se limpia el localStorage.
 $("#seccionHistorialId").on ("click", "#botonBorrar", function(){
  if (localStorage.length ==0){
      Swal.fire(
        'El Historial ya se encuentra vacío',
        '',
        'error'
      )
      } else{
            localStorage.clear();
            $("#seccionHistorialId").empty();
            Swal.fire(
              'Historial borrado con éxito',
              'Gracias por utilizar la aplicación',
              'success')
            }
 });
//Finalicación función del botón borrar historial

 
