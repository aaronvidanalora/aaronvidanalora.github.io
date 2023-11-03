let coches = [
    {
        id: "bugatti", 
        nombre: "Bugatti Chiron Super Sport 300+",
        potencia: "1,500+ caballos de fuerza",
        motor: "8.0 litros W16",
        foto: "src/bugatti-chiron-super-sport-300-1-1568021423.jpg"
    },
    {
        id: "koenigsegg", 
        nombre: "Koenigsegg Jesko",
        potencia: "1,600+ caballos de fuerza",
        motor: "V8 de 5.0 litros",
        foto: "src/koenigsegg-jesko-1626446571.jpg"
    },
    {
        id: "hennessey", 
        nombre: "Hennessey Venom F5",
        potencia: "1,800+ caballos de fuerza",
        motor: "V8 de 6.6 litros",
        foto: "src/hennessey-venom-f5-1637693051.jpg"
    },
    {
        id: "rimac", 
        nombre: "Rimac C_Two",
        potencia: "1,900+ caballos de fuerza",
        motor: "Eléctrico",
        foto: "src/1366_2000.jpg"
    },
    {
        id: "lamborghini", 
        nombre: "Lamborghini Sian",
        potencia: "800+ caballos de fuerza",
        motor: "V12 híbrido",
        foto: "src/PqYK2xcYZgmIYHqx5u4Ld-525b09c3e514f9ea908e7724b4b7b575-Nuevo_Lamborghini_Sian_Roadster_2020__7_-1100.jpg"
    }
]

const cochesCard = document.querySelector("#insertaCoches");
//vacio el pintarCoches para luego meter el card
let pintarCoches = "";
// recorrer el objeto
for (let i = 0; i < coches.length; i++) {

    //agrego el div con la informacion del coche
    pintarCoches += `
        <div class="col-md-4 mt-5" id="${coches[i].id}">
            <div class="card">
                <img src="${coches[i].foto}" class="card-img-top" alt="${coches[i].nombre}">
                <div class="card-body">
                    <h5 class="card-title">${coches[i].nombre}</h5>
                    <p class="card-text">Potencia: ${coches[i].potencia}</p>
                    <p class="card-text">Motor: ${coches[i].motor}</p>
                </div>
            </div>
        </div>`;
}

// inserto el html en el div
cochesCard.innerHTML = pintarCoches;


//TABLA COMPARARlista
const cocheSelector1 = document.querySelector("#cocheSelector1")
const cocheSelector2 = document.querySelector("#cocheSelector2")
const botonComparar = document.querySelector("#botonComparar")

botonComparar.addEventListener("click", comparar)

function comparar(){
    // cojo el valor de los coches seleccionados 
    const valorCoche1 = cocheSelector1.value;
    const valorCoche2 = cocheSelector2.value;

    let coche1;
    let coche2;

     //recorrer el objeto
    for (let i = 0; i < coches.length; i++) {
        // miro si el id en esta posicion coincide con el seleccionado
        if (coches[i].id == valorCoche1) {
            // si coincide se guarda en coche1
            coche1 = coches[i];
        }
        if (coches[i].id == valorCoche2) {
            coche2 = coches[i];
        }
    }

    // creo la tabla
    const tablaComparativa = `
        <table class="table mb-5">
            <thead>
                <tr>
                    <th></th>
                    <th>${coche1.nombre}</th>
                    <th>${coche2.nombre}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Potencia</td>
                    <td>${coche1.potencia}</td>
                    <td>${coche2.potencia}</td>
                </tr>
                <tr>
                    <td>Motor</td>
                    <td>${coche1.motor}</td>
                    <td>${coche2.motor}</td>
                </tr>
            </tbody>
        </table>
    `;

    // inserto la tabla en el div
    const tablaComparativaContainer = document.querySelector("#tablaComparativa");
    tablaComparativaContainer.innerHTML = tablaComparativa;
}

//LISTA CABALLOS
const potenciaInput = document.querySelector('#potenciaInput')
const botonBuscar = document.querySelector('#botonBuscar')
botonBuscar.addEventListener('click', listar)

function listar() {
    const potencia = parseFloat(potenciaInput.value);
    const listaCaballos = document.querySelector("#listaCaballos");
    //vacio el div
    listaCaballos.innerHTML = "";

      // Obtiene la hora actual en el formato hh:mm:ss
      const now = new Date();
      const horaActual = now.toLocaleTimeString();

   //recorro el objeto
    for (let i = 0; i < coches.length; i++) {
        const coche = coches[i];
        //extraigo los caballos del objeto coches solo quedandome con los números
        const potenciaCoche = coche.potencia.replace(/\D/g, '');

       //si la potencia que da es mayor a la introducida entra en el if
        if (potenciaCoche > potencia) {
           //pinto el div el nombre y su potencia
            listaCaballos.innerHTML += `<p>${coche.nombre} - <strong>${potenciaCoche} caballos</strong></p>`;
        }
    }
    //pinto la hora actual
    const horaCaballos = document.querySelector('#horaCaballos')
    horaCaballos.innerHTML = `<p class="mt-2">Hora de búsqueda : <strong>${horaActual}</strong></p> `
}
