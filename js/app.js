;(function (){
    window.addEventListener("load", cargaPagina);

    var contenedor = document.getElementById("contenedor");
    var newElemntArray = document.getElementById("elemento");
    var indiceArray = document.getElementById("numero");
    var botonAgregar = document.getElementById("agregar");
    var botonOrdenar = document.getElementById("orden");
    var botonEliminar = document.getElementById("delete");
    var array = [];
    var creado = false;
    
    function cargaPagina() {
        botonAgregar.addEventListener("click", agregarArreglo);
        botonOrdenar.addEventListener("click", ordenarArreglo);
        botonEliminar.addEventListener("click", eliminarElementoArray);
    }
    
    function agregarArreglo(e){
        e.preventDefault();
        array.push(newElemntArray.value);
        newElemntArray.value = "";
        imprimir();  
    }
    
    function imprimir(){
        var nuevoArray;
        if (!creado) {
            nuevoArray = document.createElement("div");
            contenedor.insertBefore(nuevoArray, contenedor.children[2])
            nuevoArray.setAttribute("id", "array-spotlight");
            creado = true;
        } else {
            nuevoArray = document.getElementById("array-spotlight");
        }
        nuevoArray.textContent = array.join(", ");
        console.log(array);
    }
    
    function ordenarArreglo(e){
        e.preventDefault();
        array.sort(function(a, b){
          return a - b;
        });
        imprimir();  
    }
    
    function eliminarElementoArray(e){
        e.preventDefault();
        var index = parseFloat(indiceArray.value)
        if(index >= 0){
            array.splice(index, 1);
            imprimir(); 
            indiceArray.value = "";
        }
    }
    
})();
