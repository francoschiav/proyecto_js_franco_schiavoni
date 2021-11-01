


// -----------------EVENTOS-----------------------------
    let botonIngresar = document.getElementById ("botonIngresar");
    botonIngresar.addEventListener ("click", respuestaClick);
    let presupuestoTotal = 0;

    function respuestaClick () {

         
        cantPozos = prompt ("Ingrese la cantidad de pozos a cargar: ");
        if(cantPozos == ""){
            cantPozos=prompt("No ha ingresado ninguna cantidad. Por favor, Ingrese la nueva cantidad de pozos a cargar: ");    
        }

        class Presupuesto{
            constructor (pozo,valor){
                this.pozo = pozo;
                this.valor = parseInt(valor);
                }
                detallarPresupuestos(){
                    console.log("presupuesto " + this.pozo+ "=  $" + this.valor); 
                }
            
        }

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
 

          let padre  = document.getElementById ("h3DePozos");
          for(let elementodelarray of presupuestos){
              let cadaPresupuesto = document.createElement("h3")
              cadaPresupuesto.innerHTML =  "Pozo:  " + elementodelarray.pozo + "; " + "Valor: USD "+ elementodelarray.valor; 
              padre.appendChild (cadaPresupuesto)
              // document.body.appendChild (cadaPresupuesto);
              }
  
        let tituloPrincipalIndex = document.getElementById ("tituloPrincipalIndex");
        tituloPrincipalIndex.innerHTML = "El presupuesto total ingresado es de: USD " + presupuestoTotal;  
            
        }

        // -------------------------------BOTON BORRAR-------------

        let botonBorrar = document.getElementById ("botonBorrar");
        botonBorrar.addEventListener ("click", respuestaClickBorrar);

        function respuestaClickBorrar (){
            tituloPrincipalIndex.innerHTML = "Si desea cargar nuevos pozos presione el botón Agregar Pozos ";
            presupuestoTotal = 0;
            presupuestos.length=0;

           let h3Aeliminar = document.getElementById ("padreCronograma")[0];
           let hijo = document.getElementsByTagName ("h3");
           h3Aeliminar.removeChild (hijo);

        }
