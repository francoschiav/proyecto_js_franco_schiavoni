// DOM
let presupuestoTotal=0;
class Presupuesto{
    constructor (pozo,valor){
        this.pozo = pozo;
        this.valor = parseInt(valor);
        }
        detallarPresupuestos(){
            console.log("presupuesto " + this.pozo+ "=  $" + this.valor); 
        }
    
}
let cantPozos = prompt ("Bienvenido al simulador de presupuestos de intervenciones petroleras. Ingrese la cantidad de pozos a cargar: ");

//Verificación de que ingresa una cantidad de pozos
if(cantPozos == ""){
   cantPozos=prompt("No ha ingresado ninguna cantidad. Por favor, Ingrese la cantidad de pozos a cargar: ");    
 }

console.log("Cantidad de pozos a cargar"+ "= " + cantPozos);



    const presupuestos = [];

    for (i =1; i<= cantPozos; i++){
        presupuestos.push (new Presupuesto (prompt("Nombre del pozo: "), parseInt(prompt("Ingrese valor del pozo: "))));
    }

    for(let elementodelarray of presupuestos){
    elementodelarray.detallarPresupuestos();
    }

    for(let elementodelarray of presupuestos){
        presupuestoTotal = presupuestoTotal + elementodelarray.valor;
        }
 
    console.log("Presupuesto total: $" + presupuestoTotal);

 //---------APLICANDO DOM-------------

    //    let tituloPrincipalIndex = document.getElementById ("tituloPrincipalIndex");
    //    tituloPrincipalIndex.innerHTML = "El presupuesto ingresado es de $ " + presupuestoTotal; 

  
    //   for(let elementodelarray of presupuestos){
    //     let h3DePozos = document.getElementById ("h3DePozos");
    //     h3DePozos.innerHTML = "Pozo  " + elementodelarray.pozo + " ;" + "valor:  $"+ elementodelarray.valor; 
    
    //     }

        let padre  = document.getElementById ("h3DePozos");
        for(let elementodelarray of presupuestos){
            let cadaPresupuesto = document.createElement("h3")
            cadaPresupuesto.innerHTML =  "Pozo  " + elementodelarray.pozo + "; " + "valor [USD]:  $"+ elementodelarray.valor; 
            padre.appendChild (cadaPresupuesto)
            // document.body.appendChild (cadaPresupuesto);
            }

    let tituloPrincipalIndex = document.getElementById ("tituloPrincipalIndex");
    tituloPrincipalIndex.innerHTML = "El presupuesto ingresado es de [USD]: $" + presupuestoTotal;     
