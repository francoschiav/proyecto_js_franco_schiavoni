


// -----------------EVENTOS-----------------------------

    let botonIngresar = document.getElementById ("botonIngresar");
    botonIngresar.addEventListener ("click", respuestaClickAgregar);
    let presupuestoTotal = 0;

    function respuestaClickAgregar (e) {

        e.preventDefault();
       
        cantPozos = prompt ("Ingrese la cantidad de pozos a cargar: ");
        if(cantPozos == ""){
            cantPozos=prompt("No ha ingresado ninguna cantidad. Por favor, Ingrese la nueva cantidad de pozos a cargar: ");    
        }

        class Presupuesto{
            constructor (pozo,valor){
                this.pozo = pozo;
                this.valor = parseInt(valor);
            }

            
        }

        const presupuestos = [];

        for (let i =1; i<= cantPozos; i++){
            presupuestos.push (new Presupuesto (prompt("Nombre del pozo: "), parseInt(prompt("Ingrese valor del pozo: "))));
        }
        // ---------USO DE STORAGE Y JASON
        //-----Para almacenar array completo:
        const guardarLocalValores = (clave, valor) => {localStorage.setItem(clave,valor)};
        //guardarLocal("todosLosPozos", JSON.stringify(presupuestos));

         //---------USO DE STORAGE Y JASON
          for (const presupuestoIndividual of presupuestos) {
              guardarLocalValores (presupuestoIndividual.pozo, JSON.stringify(presupuestoIndividual.valor));
          }
        





        // for(let elementodelarray of presupuestos){
        //     presupuestoTotal = presupuestoTotal + elementodelarray.valor;
        //     }
 

        //   let padre  = document.getElementById ("h3DePozos");
        //   for(let elementodelarray of presupuestos){
        //       let cadaPresupuesto = document.createElement("h3")
        //       cadaPresupuesto.innerHTML =  "Pozo:  " + elementodelarray.pozo + "; " + "Valor: USD "+ elementodelarray.valor; 
        //       padre.appendChild (cadaPresupuesto);
        //       // document.body.appendChild (cadaPresupuesto);
        //       }
  
        // let tituloPrincipalIndex = document.getElementById ("tituloPrincipalIndex");
        // tituloPrincipalIndex.innerHTML = "El presupuesto total ingresado es de: USD " + presupuestoTotal;  



        // for (let valores of presupuestos){
        //     console.log(valores);
        // }
        }

         // ------------------------------BOTON MOSTRAR PRESUPUESTO-------------

         let botonPresupuestar = document.getElementById ("botonMostrarPresupuesto");
         botonPresupuestar.addEventListener ("click", respuestaClickPresupuestar);
         let padre  = document.getElementById ("h3DePozos");

         function respuestaClickPresupuestar (e){
             e.preventDefault();
             let sumaAlApretarBoton = 0;
           
             for (let k=0 ; k < localStorage.length; k++){
    
                 let claveJson =localStorage.key(k);
                 let claveParseada = JSON.parse(localStorage.getItem(claveJson));
                 let cadaPresupuesto = document.createElement("h3")
                 cadaPresupuesto.innerHTML = "Pozo:  " + claveJson + "; " + "Valor: USD "+ claveParseada; 
                 padre.appendChild (cadaPresupuesto);

             sumaAlApretarBoton = sumaAlApretarBoton  + claveParseada; 
             }
             let tituloPrincipalIndex = document.getElementById ("tituloPrincipalIndex");
             tituloPrincipalIndex.innerHTML = "El presupuesto total ingresado es de: USD " + sumaAlApretarBoton;  

         }

         
        // -------------------------------BOTON BORRAR-------------

        let botonBorrar = document.getElementById ("botonBorrar");
        botonBorrar.addEventListener ("click", respuestaClickBorrar);

        function respuestaClickBorrar (e){
            e.preventDefault();
           tituloPrincipalIndex.innerHTML = "Gracias por utilizar el servicio. ";
           let listaEliminar = document.getElementById ("padreCronograma");
           listaEliminar.parentNode.removeChild (listaEliminar);
           localStorage.clear();
        }
