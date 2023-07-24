getYear()

function getYear(){
    const year = new Date().getFullYear();
    const lastTwoDigits = year.toString().slice(-2);
    document.getElementById("lote").value = lastTwoDigits
}

function actualizarNumero() {
  let inputElement = document.getElementById("fua");
  let numero = inputElement.value.trim();
  let lote = document.getElementById("lote").value.trim();

  // Verificar si el input está vacío o contiene solo ceros
  if (numero === "" || /^0+$/.test(numero)) {
    inputElement.value = "";
  } else {
    // Convertir a número entero para eliminar ceros no significativos
    numero = parseInt(numero, 10).toString();

    // Agregar ceros a la izquierda hasta alcanzar una longitud de 8 caracteres
    let cantidadCeros = 8 - numero.length;
    if (cantidadCeros > 0) {
      numero = '0'.repeat(cantidadCeros) + numero;
    }


    inputElement.value = numero;

    if(lote != ""){
        fetchFua(lote,numero)
    }else{
        Swal.fire(
            'Oops!',
            'Ingrese un lote!',
            'info'
          )
    }


    // Mostrar el alert con el número generado
    // mandar fetch -> numero
  }
  }


  function fetchFua(lote,fua){

    fetch(`${url}/search-fua-by-num-size/${lote}/${fua}`,{
        method: 'get',
        headers: {
          'Accept': 'application/json'
        }
    })
      .then(response => response.json())
      .then(data => {

        let v = data[0]
  
        if(v.success != "error"){
            setData(v)
        }else{
            cleanForm()
        }
       
    
      }).catch(error => {
        Swal.fire(
            'Oops!',
            'Se produjo un error',
            'warning'
          )
        console.error(error)
    });


  }

  function cleanForm() {
    // Obtener referencia al formulario
    let formulario = document.getElementById("form-search");
  
    // Recorrer todos los elementos del formulario
    for (let i = 3; i < formulario.elements.length; i++) {
      let elemento = formulario.elements[i];
  
      // Verificar si es un campo de entrada (input) o un elemento de selección (select)
      if (elemento.nodeName === "INPUT" || elemento.nodeName === "SELECT") {
        // Establecer el valor en una cadena vacía para limpiar el campo
        elemento.value = "";
      }
    }
  }

  function setData(data){

    document.getElementById("cod-pres").value = data.FuaCodigoPrestacion
    document.getElementById("type-doc-patient").value = isNull(data.DocumentoTipo)
    document.getElementById("num-doc-patient").value = isNull(data.DocumentoNumero)
    document.getElementById("hist-fua").value = data.FuaNrohistoria

    document.getElementById("disa-afi").value = data.AfiliacionDisa
    document.getElementById("type-afi").value = data.AfiliacionTipoFormato
    document.getElementById("num-afi").value = data.AfiliacionNroFormato

    document.getElementById("ap-paterno").value = data.Apaterno
    document.getElementById("ap-paterno").value = data.Apaterno
    document.getElementById("ap-materno").value = data.Amaterno
    document.getElementById("nombre").value = data.Pnombre
    document.getElementById("ot-nombre").value = data.Onombre

    if(data.Genero == '1'){
        document.getElementById("sex").selectedIndex = 1
    }else{
        document.getElementById("sex").selectedIndex = 2
    }

    document.getElementById("type-doc-dig").value = data.nombre_medico
    document.getElementById("name-dig").value = data.FuaMedicoDNI

    document.getElementById("num-doc-dig").value = data.CabDniUsuarioRegistra

  }

  function isNull(value){

    let x = ""

    if(value != 'null'){
        x = value
    }

    return x

  }