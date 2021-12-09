
let sumaAlApretarBoton = 0;
let presupuestoTotal = 0;
let pozos = [];
class Pozo {
  constructor(nombre, valor) {
    this.nombre = nombre;
    this.valor = parseInt(valor);
  }
}

const guardarLocalValores = (clave, valor) => {
  localStorage.setItem(clave, valor);
};


$("form").submit(addPozo);

function addPozo(e) {
  e.preventDefault();
 
  pozos.push(new Pozo($("#nombrePozo").val(), $("#precioPozo").val()));

  guardarLocalValores("arrayPresFinal", JSON.stringify(pozos));
  presupuestoTotal = presupuestoTotal + JSON.parse($("#precioPozo").val()) ;
  $("#presupuestoTotal").hide().html(`<div id="div3" class="text-light">  <h3>Presupuesto Total: ${presupuestoTotal} </h3>  </div>`);

  $("#h3DePozos").append(
    `<h3>Pozo: ${$("#nombrePozo").val()}; Valor: USD ${$(
      "#precioPozo"
    ).val()}</h3>`);
}


let i = 0;
$("#btnPresFinal").click(addPresFinal);
function addPresFinal(e) {
  e.preventDefault();

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
    $("#presupuestoTotal").show();
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
      $("#presupuestoTotal").show();
      presupuestoTotal = 0;
    }
    
  
}

$("#btnHistorial").click (addHistorial);
function addHistorial (e){
  // $("#seccionHistorialId").hide().slideDown(1500);
  e.preventDefault();
  $("#seccionHistorialId").html(
    `<h2 class="text-danger mb-3 pb-0 pt-3 ms-3">Historial de Presupuestos</h2>`
  ).hide().slideDown(1500);
  
  let almacenadoHistorial = JSON.parse(localStorage.getItem("guardados"));

  for (const propiedad in almacenadoHistorial){
    $("#seccionHistorialId").append(`<div class="text-light">
                   <h3 class="text-primary mb-0 pb-0"> ${propiedad}: </h3>
                              </div>`).hide().slideDown(1000);

    sacarPozos = almacenadoHistorial[propiedad];  
    let sumaParcial = 0;
    for (let h=0; h<sacarPozos.length; h++){
      
      sumaParcial = sumaParcial + sacarPozos[h].valor;
      $("#seccionHistorialId").append(`<div class="text-light">
                  
                   <h3 class="mb-0 pb-0">Pozo: ${sacarPozos[h].nombre}---Valor: USD  ${sacarPozos[h].valor}</h3>
                              </div>`).hide().slideDown(1000);

    }  
    $("#seccionHistorialId").append(`<div class="text-light">
    <h3 class="text-success mb-0 pb-0">TOTAL: USD ${sumaParcial} </h3>
              </div>`).hide().slideDown(1000);

  }

}

