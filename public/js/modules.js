var contentModulo = document.querySelector(".myContent");

$('document').ready(function () {

    inicio();
  
      window.addEventListener('hashchange', (e) => {
  
        let direccion = window.location.hash;
  
        if (direccion == '#inicio') {
          inicio()
        }
        else if (direccion == '#estado_comprobante') {
          estado_comprobante()
        }else if (direccion == '#reporte_seguros') {
          reporte_seguros()
        }  
         else {
          routeErrE();
        }
      });
  
  })
  

  function inicio() {
    window.location.hash = "#inicio"
    contentModulo.innerHTML = urlModule("/content/inicio.html");
  }
 function estado_comprobante() {
    window.location.hash = "#estado_comprobante"
    contentModulo.innerHTML = urlModule("/content/estado-comprobante.html");
  }
  function reporte_seguros() {
    window.location.hash = "#reporte_seguros"
    contentModulo.innerHTML = urlModule("/content/reporte-seguros.html");
  }
  function routeErrE() {
    console.log("ruta error")
    contentModulo.innerHTML = "no existe la ruta";
  }
  
 
  
  function urlModule(url) {
    return (
      "<iframe src='" +
      url +
      "' style='width: 100%; height: 100%; border: none;'></iframe>"
    );
  }
  

  $('#details').on('hidden.bs.modal', function (e) {
    console.log("cerrando")
  })
 

  