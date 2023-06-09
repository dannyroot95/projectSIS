var contentModulo = document.querySelector(".myContent");

$('document').ready(function () {

    inicio();
  
      window.addEventListener('hashchange', (e) => {
  
        let direccion = window.location.hash;
  
        if (direccion == '#inicio') {
          inicio()
        }else if (direccion == '#usuarios') {
          users()
        }
        else if (direccion == '#estado_comprobante') {
          estado_comprobante()
        }else if (direccion == '#reporte_seguros') {
          reporte_seguros()
        }else if (direccion == '#fua_analysis') {
          fua_analysis()
        }else if (direccion == '#estado_atencion') {
          estado_atencion()
        }else if (direccion == '#diag_proc') {
          diag_and_procedure()
        }else if (direccion == '#produccion') {
          produccion()
        }else if (direccion == '#produccion_ins_med') {
          produccion_ins_med()
        }else if (direccion == '#afiliados') {
          affiliate()
        }else if (direccion == '#control_altas') {
          discharge_control()
        }else if (direccion == '#control_altas_cpt') {
          discharge_control_cpt()
        }else if (direccion == '#trama_sis') {
          plot_sis()
        }else if (direccion == '#trama_saludpol') {
          plot_saludpol()
        }else if (direccion == '#catalogo') {
          catalog()
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
  function fua_analysis() {
    window.location.hash = "#fua_analysis"
    contentModulo.innerHTML = urlModule("/content/analisis-fua.html");
  }
  function estado_atencion() {
    window.location.hash = "#estado_atencion"
    contentModulo.innerHTML = urlModule("/content/estado-atencion.html");
  }
  function produccion() {
    window.location.hash = "#produccion"
    contentModulo.innerHTML = urlModule("/content/produccion.html");
  }
  function produccion_ins_med() {
    window.location.hash = "#produccion_ins_med"
    contentModulo.innerHTML = urlModule("/content/produccion-ins-med.html");
  }
  function affiliate() {
    window.location.hash = "#afiliados"
    contentModulo.innerHTML = urlModule("/content/afiliados.html");
  }
  function discharge_control() {
    window.location.hash = "#control_altas"
    contentModulo.innerHTML = urlModule("/content/control-de-altas.html");
  }
  function discharge_control_cpt() {
    window.location.hash = "#control_altas_cpt"
    contentModulo.innerHTML = urlModule("/content/control-de-altas-cpt.html");
  }
  function diag_and_procedure() {
    window.location.hash = "#diag_proc"
    contentModulo.innerHTML = urlModule("/content/diagnosticos-y-procedimientos.html");
  }
  function plot_sis() {
    window.location.hash = "#trama_sis"
    contentModulo.innerHTML = urlModule("/content/trama-sis.html");
  }
  function plot_saludpol() {
    window.location.hash = "#trama_saludpol"
    contentModulo.innerHTML = urlModule("/content/trama-saludpol.html");
  }
  function users() {
    window.location.hash = "#usuarios"
    contentModulo.innerHTML = urlModule("/content/usuarios.html");
  }
  function catalog() {
    window.location.hash = "#catalogo"
    contentModulo.innerHTML = urlModule("/content/catalogo.html");
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
 

  