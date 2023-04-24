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
        }else if (direccion == '#estado_atencion') {
          estado_atencion()
        }else if (direccion == '#produccion') {
          produccion()
        }else if (direccion == '#afiliados') {
          affiliate()
        }else if (direccion == '#control_altas') {
          discharge_control()
        }else if (direccion == '#trama_sis') {
          plot_sis()
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
  function estado_atencion() {
    window.location.hash = "#estado_atencion"
    contentModulo.innerHTML = urlModule("/content/estado-atencion.html");
  }
  function produccion() {
    window.location.hash = "#produccion"
    contentModulo.innerHTML = urlModule("/content/produccion.html");
  }
  function affiliate() {
    window.location.hash = "#afiliados"
    contentModulo.innerHTML = urlModule("/content/afiliados.html");
  }
  function discharge_control() {
    window.location.hash = "#control_altas"
    contentModulo.innerHTML = urlModule("/content/control-de-altas.html");
  }
  function plot_sis() {
    window.location.hash = "#trama_sis"
    contentModulo.innerHTML = urlModule("/content/trama-sis.html");
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
 

  