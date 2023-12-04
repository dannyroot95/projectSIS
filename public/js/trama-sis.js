
var params = [] 
var params2 = [] 
var dniResp = 71853201
var log = ""
var rclog = ""
var c = 0
var c2 = 0
var atencion = ``
var diagnostico = ``
var medicamentos = ``
var insumos = ``
var procedimientos = ``
var smi = ``
var ser = ``
var rn = ``
var res = ``
var duplexAccount = []
var catalog = []
var notFound = []
let ctxG = 1

yearLater()
createDatatable()
createDatatable2()
createDatatable3()
createDatatable5()
createDatatable6()
createDatatable4()
createDatatable7()
createDatatable8()
createDatatableValidateCatalog()
arrayParams()

function arrayParams(){
    for(let i = 1 ; i<= 88 ; i++){
        if(i == 1){
            params.push("x")
        }
        let x = 'A'+i.toString()
        params.push(x)
    }

    for(let i = 1 ; i<= 5 ; i++){
        if(i == 1){
            params2.push("x")
        }
        let x = 'A'+i.toString()
        params2.push(x)
    }

}

function yearLater(){
  var select = document.getElementById("inputGroupSelectYearSend");
  var select2 = document.getElementById("inputGroupSelectYearSend2");
  
  // Obtener el año actual
  var currentYear = new Date().getFullYear();
  
  // Agregar las opciones de los tres años anteriores y el actual
  for (var i = currentYear - 3; i <= currentYear; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    
    // Establecer el año actual como seleccionado por defecto
    if (i === currentYear) {
      option.selected = true;
    }
    
    select.appendChild(option);
  }

  for (var i = currentYear - 3; i <= currentYear; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    
    // Establecer el año actual como seleccionado por defecto
    if (i === currentYear) {
      option.selected = true;
    }
    
    select2.appendChild(option);
  }

}

function createDatatable(){

    $('#tb-data').DataTable({
        language: {
              "decimal": "",
              "emptyTable": "No hay información",
              "info": "Mostrando _START_ a _END_ de _TOTAL_ datos",
              "infoEmpty": "Mostrando 0 to 0 of 0 datos",
              "infoFiltered": "(Filtrado de _MAX_ total datos)",
              "infoPostFix": "",
              "thousands": ",",
              "lengthMenu": "Mostrar _MENU_ datos",
              "loadingRecords": "Cargando...",
              "processing": "Procesando...",
              "search": "Buscar en la lista:",
              "zeroRecords": "Sin resultados encontrados",
              "paginate": {
                  "first": "Primero",
                  "last": "Ultimo",
                  "next": "Siguiente",
                  "previous": "Anterior"
              }
       },scrollY: '35vh',scrollX: true, sScrollXInner: "100%",
       scrollCollapse: true,
      });
  
      var table = $('#tb-data').DataTable();
      $('#container').css( 'display', 'block' );
      table.columns.adjust().draw();

}

function createDatatable2(){
    $('#tb-data-2').DataTable({
        language: {
              "decimal": "",
              "emptyTable": "No hay información",
              "info": "Mostrando _START_ a _END_ de _TOTAL_ datos",
              "infoEmpty": "Mostrando 0 to 0 of 0 datos",
              "infoFiltered": "(Filtrado de _MAX_ total datos)",
              "infoPostFix": "",
              "thousands": ",",
              "lengthMenu": "Mostrar _MENU_ datos",
              "loadingRecords": "Cargando...",
              "processing": "Procesando...",
              "search": "Buscar en la lista:",
              "zeroRecords": "Sin resultados encontrados",
              "paginate": {
                  "first": "Primero",
                  "last": "Ultimo",
                  "next": "Siguiente",
                  "previous": "Anterior"
              }
       },scrollY: '35vh',scrollX: true, sScrollXInner: "100%",
       scrollCollapse: true,
      });
  
      var table = $('#tb-data-2').DataTable();
      $('#container').css( 'display', 'block' );
      table.columns.adjust().draw();
}

function createDatatable3(){
    $('#tb-data-3').DataTable({
        language: {
              "decimal": "",
              "emptyTable": "No hay información",
              "info": "Mostrando _START_ a _END_ de _TOTAL_ datos",
              "infoEmpty": "Mostrando 0 to 0 of 0 datos",
              "infoFiltered": "(Filtrado de _MAX_ total datos)",
              "infoPostFix": "",
              "thousands": ",",
              "lengthMenu": "Mostrar _MENU_ datos",
              "loadingRecords": "Cargando...",
              "processing": "Procesando...",
              "search": "Buscar en la lista:",
              "zeroRecords": "Sin resultados encontrados",
              "paginate": {
                  "first": "Primero",
                  "last": "Ultimo",
                  "next": "Siguiente",
                  "previous": "Anterior"
              }
       },scrollY: '35vh',scrollX: true, sScrollXInner: "100%",
       scrollCollapse: true,
      });
  
      var table = $('#tb-data-3').DataTable();
      $('#container').css( 'display', 'block' );
      table.columns.adjust().draw();
}

function createDatatable4(){
    $('#tb-data-4').DataTable({
        language: {
              "decimal": "",
              "emptyTable": "No hay información",
              "info": "Mostrando _START_ a _END_ de _TOTAL_ datos",
              "infoEmpty": "Mostrando 0 to 0 of 0 datos",
              "infoFiltered": "(Filtrado de _MAX_ total datos)",
              "infoPostFix": "",
              "thousands": ",",
              "lengthMenu": "Mostrar _MENU_ datos",
              "loadingRecords": "Cargando...",
              "processing": "Procesando...",
              "search": "Buscar en la lista:",
              "zeroRecords": "Sin resultados encontrados",
              "paginate": {
                  "first": "Primero",
                  "last": "Ultimo",
                  "next": "Siguiente",
                  "previous": "Anterior"
              }
       },scrollY: '35vh',scrollX: true, sScrollXInner: "100%",
       scrollCollapse: true,
      });
  
      var table = $('#tb-data-4').DataTable();
      $('#container').css( 'display', 'block' );
      table.columns.adjust().draw();
}

function createDatatable5(){
    $('#tb-data-5').DataTable({
        language: {
              "decimal": "",
              "emptyTable": "No hay información",
              "info": "Mostrando _START_ a _END_ de _TOTAL_ datos",
              "infoEmpty": "Mostrando 0 to 0 of 0 datos",
              "infoFiltered": "(Filtrado de _MAX_ total datos)",
              "infoPostFix": "",
              "thousands": ",",
              "lengthMenu": "Mostrar _MENU_ datos",
              "loadingRecords": "Cargando...",
              "processing": "Procesando...",
              "search": "Buscar en la lista:",
              "zeroRecords": "Sin resultados encontrados",
              "paginate": {
                  "first": "Primero",
                  "last": "Ultimo",
                  "next": "Siguiente",
                  "previous": "Anterior"
              }
       },scrollY: '35vh',scrollX: true, sScrollXInner: "100%",
       scrollCollapse: true,
      });
  
      var table = $('#tb-data-5').DataTable();
      $('#container').css( 'display', 'block' );
      table.columns.adjust().draw();
}

function createDatatable6(){
    $('#tb-data-6').DataTable({
        language: {
              "decimal": "",
              "emptyTable": "No hay información",
              "info": "Mostrando _START_ a _END_ de _TOTAL_ datos",
              "infoEmpty": "Mostrando 0 to 0 of 0 datos",
              "infoFiltered": "(Filtrado de _MAX_ total datos)",
              "infoPostFix": "",
              "thousands": ",",
              "lengthMenu": "Mostrar _MENU_ datos",
              "loadingRecords": "Cargando...",
              "processing": "Procesando...",
              "search": "Buscar en la lista:",
              "zeroRecords": "Sin resultados encontrados",
              "paginate": {
                  "first": "Primero",
                  "last": "Ultimo",
                  "next": "Siguiente",
                  "previous": "Anterior"
              }
       },scrollY: '35vh',scrollX: true, sScrollXInner: "100%",
       scrollCollapse: true,
      });
  
      var table = $('#tb-data-6').DataTable();
      $('#container').css( 'display', 'block' );
      table.columns.adjust().draw();
}
function createDatatable7(){
    $('#tb-data-7').DataTable({
        language: {
              "decimal": "",
              "emptyTable": "No hay información",
              "info": "Mostrando _START_ a _END_ de _TOTAL_ datos",
              "infoEmpty": "Mostrando 0 to 0 of 0 datos",
              "infoFiltered": "(Filtrado de _MAX_ total datos)",
              "infoPostFix": "",
              "thousands": ",",
              "lengthMenu": "Mostrar _MENU_ datos",
              "loadingRecords": "Cargando...",
              "processing": "Procesando...",
              "search": "Buscar en la lista:",
              "zeroRecords": "Sin resultados encontrados",
              "paginate": {
                  "first": "Primero",
                  "last": "Ultimo",
                  "next": "Siguiente",
                  "previous": "Anterior"
              }
       },scrollY: '35vh',scrollX: true, sScrollXInner: "100%",
       scrollCollapse: true,
      });
  
      var table = $('#tb-data-7').DataTable();
      $('#container').css( 'display', 'block' );
      table.columns.adjust().draw();
}
function createDatatable8(){
    $('#tb-data-8').DataTable({
        language: {
              "decimal": "",
              "emptyTable": "No hay información",
              "info": "Mostrando _START_ a _END_ de _TOTAL_ datos",
              "infoEmpty": "Mostrando 0 to 0 of 0 datos",
              "infoFiltered": "(Filtrado de _MAX_ total datos)",
              "infoPostFix": "",
              "thousands": ",",
              "lengthMenu": "Mostrar _MENU_ datos",
              "loadingRecords": "Cargando...",
              "processing": "Procesando...",
              "search": "Buscar en la lista:",
              "zeroRecords": "Sin resultados encontrados",
              "paginate": {
                  "first": "Primero",
                  "last": "Ultimo",
                  "next": "Siguiente",
                  "previous": "Anterior"
              }
       },scrollY: '35vh',scrollX: true, sScrollXInner: "100%",
       scrollCollapse: true,
      });
  
      var table = $('#tb-data-8').DataTable();
      $('#container').css( 'display', 'block' );
      table.columns.adjust().draw();
}

function createDatatableValidateCatalog(){

  $('#tableValidateCatalog').DataTable({
      language: {
            "decimal": "",
            "emptyTable": "No hay información",
            "info": "Mostrando _START_ a _END_ de _TOTAL_ datos",
            "infoEmpty": "Mostrando 0 to 0 of 0 datos",
            "infoFiltered": "(Filtrado de _MAX_ total datos)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Mostrar _MENU_ datos",
            "loadingRecords": "Cargando...",
            "processing": "Procesando...",
            "search": "Buscar en la lista:",
            "zeroRecords": "Sin resultados encontrados",
            "paginate": {
                "first": "Primero",
                "last": "Ultimo",
                "next": "Siguiente",
                "previous": "Anterior"
            }
     },scrollY: '55vh',scrollX: true, sScrollXInner: "100%",
     scrollCollapse: true,
    });

    var table = $('#tableValidateCatalog').DataTable();
    $('#container').css( 'display', 'block' );
    table.columns.adjust().draw();

}

function query(){

    c = 0
    log = ""
    document.getElementById("errors").style = "display:none;"
    let mes_ATENCION = document.getElementById("inputGroupSelectProductionMonth").value
    let anio_ATENCION = document.getElementById("inputGroupSelectYearSend").value
    let mes_SEND= document.getElementById("inputGroupSelectProductionMonth2").value
    let anio_SEND = document.getElementById("inputGroupSelectYearSend2").value
   


    fetchTramaAtencion(mes_ATENCION,anio_ATENCION,mes_SEND,anio_SEND)
    fetchTramaDiagnostico(mes_ATENCION,anio_ATENCION)
    fetchTramaInsumos(mes_ATENCION,anio_ATENCION)
    fetchTramaMedicamentos(mes_ATENCION,anio_ATENCION)
    fetchTramaProcedimientos(mes_ATENCION,anio_ATENCION)
    fetchTramaSMI(mes_ATENCION,anio_ATENCION)
    fetchTramaSER(mes_ATENCION,anio_ATENCION)
    fetchTramaRN(mes_ATENCION,anio_ATENCION)
    

}

function fetchTramaAtencion(mes_ATENCION,anio_ATENCION,mes_SEND,anio_SEND){

        document.getElementById("body").style = "display:none;"
        disabledButtons()
        
        fetch(`${url}/trama-atencion/${anio_ATENCION}/${mes_ATENCION}/${mes_SEND}/${anio_SEND}`,{
            method: 'get',
            headers: {
              'Accept': 'application/json'
            }
        })
          .then(response => response.json())
          .then(data => {

            insertDataAtencion(data)

          }).catch(err => {
            
            console.log(err)
            enableButtons()
          }); 

}


function fetchTramaDiagnostico(mes,anio){


    fetch(`${url}/trama-diagnostico/${anio}/${mes}`,{
        method: 'get',
        headers: {
          'Accept': 'application/json'
        }
    })
      .then(response => response.json())
      .then(data => {

        insertDataDiagnostico(data)

      }).catch(err => {
        
        console.log(err)
        enableButtons()
      }); 

}

function fetchTramaMedicamentos(mes,anio){


    fetch(`${url}/trama-medicamentos/${anio}/${mes}`,{
        method: 'get',
        headers: {
          'Accept': 'application/json'
        }
    })
      .then(response => response.json())
      .then(data => {

        insertDataMedicamentos(data)

      }).catch(err => {
        
        console.log(err)
        enableButtons()
      }); 

}

function fetchTramaInsumos(mes,anio){


    fetch(`${url}/trama-insumos/${anio}/${mes}`,{
        method: 'get',
        headers: {
          'Accept': 'application/json'
        }
    })
      .then(response => response.json())
      .then(data => {

        insertDataInsumos(data)

      }).catch(err => {
        
        console.log(err)
        enableButtons()
      }); 

}

function fetchTramaProcedimientos(mes,anio){


    fetch(`${url}/trama-procedimientos/${anio}/${mes}`,{
        method: 'get',
        headers: {
          'Accept': 'application/json'
        }
    })
      .then(response => response.json())
      .then(data => {

        insertDataProcedimientos(data)

      }).catch(err => {
        
        console.log(err)
        enableButtons()
      }); 

}

function fetchTramaSMI(mes,anio){


    fetch(`${url}/trama-smi/${anio}/${mes}`,{
        method: 'get',
        headers: {
          'Accept': 'application/json'
        }
    })
      .then(response => response.json())
      .then(data => {

        insertDataSMI(data)

      }).catch(err => {
        
        console.log(err)
        enableButtons()
      }); 

}

function fetchTramaSER(mes,anio){


    fetch(`${url}/trama-ser/${anio}/${mes}`,{
        method: 'get',
        headers: {
          'Accept': 'application/json'
        }
    })
      .then(response => response.json())
      .then(data => {

        insertDataSER(data)

      }).catch(err => {
        
        console.log(err)
        enableButtons()
      }); 

}

function fetchTramaRN(mes,anio){


    fetch(`${url}/trama-rn/${anio}/${mes}`,{
        method: 'get',
        headers: {
          'Accept': 'application/json'
        }
    })
      .then(response => response.json())
      .then(data => {

        insertDataRN(data)

      }).catch(err => {
        
        console.log(err)
        enableButtons()
      }); 

}

function insertDataAtencion(data){
  
    
    document.getElementById("tbody").innerHTML = ""
    $('#tb-data').DataTable().destroy()

    $("#tbody").html(data.map((d) => {
        const cells = params.map(param => {
            if (param == 'x') {

                return validateDataATE(d)

                
            } else {
                return `<td class="minText2">${d[param]}</td>`;
            }
        }).join("");
    return `<tr style="cursor: pointer;">${cells}</tr>`;
    }).join(""));

    setTimeout(function() {
        document.getElementById("logATE").click();
        document.getElementById("logDIA").click();
        document.getElementById("logINS").click();
        document.getElementById("logMED").click();
        document.getElementById("logPRO").click();
        document.getElementById("logSMI").click();
        document.getElementById("logRN").click();
      }, 500);

      createDatatable()
      document.getElementById("body").style = "display:block;"
      
      if(c>0){
        document.getElementById("errors").style = "display:block;font-weight:bold;color:red;"
        document.getElementById("errors").innerHTML = c.toString()+" errores encontrados!"
      }else{
        document.getElementById("errors").style = "display:block;font-weight:bold;color:green;"
        document.getElementById("errors").innerHTML = "Ningún error encontrado!"
      }

      enableButtons()
      buscarDuplicados(duplexAccount)

}

function insertDataDiagnostico(data){
  
    
    document.getElementById("tbody2").innerHTML = ""
    $('#tb-data-2').DataTable().destroy()

    $("#tbody2").html(data.map((d) => {
        const cells = params2.map(param => {

            if (param == 'x') {

                return `<td class="minText2"><button class="btn btn-success" onclick="alert('0 Errores')"><i class="bi bi-file-check"></i></button></td>`

                
            } else {
                return `<td class="minText2">${d[param]}</td>`;
            }
        }).join("");
    return `<tr style="cursor: pointer;">${cells}</tr>`;
    }).join(""));

      createDatatable2()

}

function insertDataMedicamentos(data){
  
    
    document.getElementById("tbody5").innerHTML = ""
    $('#tb-data-5').DataTable().destroy()

    $("#tbody5").html(data.map((d) => {
        const cells = params2.map(param => {

            if (param == 'x') {

                return `<td class="minText2"><button class="btn btn-success" onclick="alert('0 Errores')"><i class="bi bi-file-check"></i></button></td>`

                
            } else {
                return `<td class="minText2">${d[param]}</td>`;
            }
        }).join("");
    return `<tr style="cursor: pointer;">${cells}</tr>`;
    }).join(""));

      createDatatable5()

}

function insertDataInsumos(data){
  
    
    document.getElementById("tbody3").innerHTML = ""
    $('#tb-data-3').DataTable().destroy()

    $("#tbody3").html(data.map((d) => {
        const cells = params2.map(param => {

            if (param == 'x') {

                return `<td class="minText2"><button class="btn btn-success" onclick="alert('0 Errores')"><i class="bi bi-file-check"></i></button></td>`

                
            } else {
                return `<td class="minText2">${d[param]}</td>`;
            }
        }).join("");
    return `<tr style="cursor: pointer;">${cells}</tr>`;
    }).join(""));

      createDatatable3()

}

function insertDataProcedimientos(data){
  

    document.getElementById("tbody6").innerHTML = ""
    $('#tb-data-6').DataTable().destroy()

    $("#tbody6").html(data.map((d) => {
        
        let it = (d.Items).split("|")
  
              return `
              <tr style="cursor: pointer;">
              <td class="minText2"><button class="btn btn-success" onclick="alert('0 Errores')"><i class="bi bi-file-check"></i></button></td>
              <td class="minText2">${it[0]}</td>
              <td class="minText2">${it[1]}</td>
              <td class="minText2">${it[2]}</td>
              <td class="minText2">${it[3]}</td>
              <td class="minText2">${it[4]}</td>
              <td class="minText2">${it[5]}</td>
              <td class="minText2">${it[6]}</td>
              </tr>`;
          })
          .join("")
      );

      createDatatable6()

}


function insertDataSMI(data){
  
   
    document.getElementById("tbody4").innerHTML = ""
    $('#tb-data-4').DataTable().destroy()

    $("#tbody4").html(data.map((d) => {
        
        let it = (d.items).split("|")

              return `
              <tr style="cursor: pointer;">
              <td class="minText2"><button class="btn btn-success" onclick="alert('0 Errores')"><i class="bi bi-file-check"></i></button></td>
              <td class="minText2">${it[0]}</td>
              <td class="minText2">${it[1]}</td>
              <td class="minText2">${it[2]}</td>
              </tr>`;
          })
          .join("")
      );

      createDatatable4()

}

function insertDataSER(data){
  

    document.getElementById("tbody7").innerHTML = ""
    $('#tb-data-7').DataTable().destroy()

    if(data.length >0){
        $("#tbody7").html(data.map((d) => {

            let it = (d.items).split("|")

              return `
              <tr style="cursor: pointer;">
              <td class="minText2"><button class="btn btn-success" onclick="alert('0 Errores')"><i class="bi bi-file-check"></i></button></td>
              <td class="minText2">${it[0]}</td>
              <td class="minText2">${it[1]}</td>
              </tr>`;
        
          })
          .join("")
      ); 
      createDatatable7()

    }else{
        createDatatable7()
    }
     
}


function insertDataRN(data){
  
  if(data[0].error != "sin datos"){
    document.getElementById("tbody8").innerHTML = ""
    $('#tb-data-8').DataTable().destroy()

    $("#tbody8").html(data.map((d) => {
        
        let it = (d.values).split("|")

              return `
              <tr style="cursor: pointer;">
              <td class="minText2"><button class="btn btn-success" onclick="alert('0 Errores')"><i class="bi bi-file-check"></i></button></td>
              <td class="minText2">${it[0]}</td>
              <td class="minText2">${it[1]}</td>
              <td class="minText2">${it[2]}</td>
              <td class="minText2">${it[3]}</td>
              <td class="minText2">${it[4]}</td>
              <td class="minText2">${it[5]}</td>
              <td class="minText2">${it[6]}</td>
              <td class="minText2">${it[7]}</td>
              <td class="minText2">${it[8]}</td>
              <td class="minText2">${it[9]}</td>
              <td class="minText2">${it[10]}</td>
              <td class="minText2">${it[11]}</td>
              <td class="minText2">${it[12]}</td>
              <td class="minText2">${it[13]}</td>
              </tr>`;
          })
          .join("")
      );
      createDatatable8()
  }
   
}



function disabledButtons(){
loader.style = "display:block;"
document.getElementById("btn-logs").disabled = true
document.getElementById("btn-package").disabled = true
document.getElementById("btn-query").disabled = true
document.getElementById("btn-send-debug").disabled = true

}

function enableButtons(){
loader.style = "display:none;"
document.getElementById("btn-logs").disabled = false
document.getElementById("btn-query").disabled = false
document.getElementById("btn-package").disabled = false
document.getElementById("btn-send-debug").disabled = false
document.getElementById("btn-logs").style = "display:block;"
}

function enableButtonsError(){
  loader.style = "display:none;"
  document.getElementById("btn-logs").style = "display:none;"
  document.getElementById("btn-logs").disabled = false
  document.getElementById("btn-query").disabled = false
  document.getElementById("btn-package").disabled = false
  document.getElementById("btn-send-debug").disabled = false
  document.getElementById("btn-logs").style = "display:block;"
  }

function validateData(d){

    let ctx = 0
  
    if(d["A1"].length > 6){
        ctx++
    }


   return counter(ctx)

}

function validateDataATE(d){

  duplexAccount.push(d["A1"])

    let ctx = 0
  
    if(d["A17"] == "" && d["A42"] == '056'){
        ctx++
        c++
        let warning = `${c}.- SIN REGISTRO EN LOS CAMPOS DE AFILIACIÓN -> N° DE CUENTA : ${d["A1"]} ; DIGITADOR : ${d["A87"]} ; SERVICIO : ${d["A88"]} `
        log = log+warning+"\r\n\r\n"
        searchAndUpdateAtentionFromAfiliate(d["A26"],d["A27"],d["A28"])
    }

    if(d["A20"] == ""){
      ctx++
      c++
      let warning = `${c}.- EL CAMPO ATE#20 (CONTRATO DEL ASEGURADO) NO DEBE SER VACÍO -> N° DE CUENTA : ${d["A1"]} ; DIGITADOR : ${d["A87"]} ; SERVICIO : ${d["A88"]}`
      log = log+warning+"\r\n\r\n"
    }
    if (d["A81"].trim() === "1" && (d["A82"].trim() === "" || d["A82"].trim().length !== 8)) {
      ctx++;
      c++;
      let warning = `${c}.- EL CAMPO ATE#82 (N° DOC DEL DIGITADOR) DEBE TENER 8 DIGITOS DE ACUERDO AL CAMPO ATE#81 (TIPO DE DOCUMENTO DIGITADOR) -> N° DE CUENTA : ${d["A1"]} ; DIGITADOR : ${d["A87"]} ; SERVICIO : ${d["A88"]}`;
      log = log + warning + "\r\n\r\n";
  }
    if(d["A24"] == ""){
      ctx++
      c++
      let warning = `${c}.- EL CAMPO ATE#24 TIPO DE DOCUMENTO DEL ASEGURADO TIENE UN VALOR NO PERMITIDO -> N° DE CUENTA : ${d["A1"]} ; DIGITADOR : ${d["A87"]} ; SERVICIO : ${d["A88"]}`
      log = log+warning+"\r\n\r\n"
    }
    if(d["A42"].length != 3){
      ctx++
      c++
      let warning = `${c}.- EL CAMPO ATE#42 DEBE SER UN CAMPO ALFANUMÉRICO DE 3 DIGITOS -> N° DE CUENTA : ${d["A1"]} ; DIGITADOR : ${d["A87"]} ; SERVICIO : ${d["A88"]}`
      log = log+warning+"\r\n\r\n"
    }
    if(d["A42"] == '054' && d["A47"] == ''){
      ctx++
      c++
      let warning = `${c}.- SE REQUIERE UNA FECHA DE ALTA DE HOSPITALIZACIÓN -> N° DE CUENTA : ${d["A1"]} ; DIGITADOR : ${d["A87"]} ; SERVICIO : ${d["A88"]}`
      log = log+warning+"\r\n\r\n"
    }

    if(d["A34"] == '2' && d["A43"] != '3' && d["A40"] == ''){
      ctx++
      c++
      let warning = `${c}.- EL CAMPO ATE#40 (IPRESS DE REFERENCIA) ES REQUERIDO -> N° DE CUENTA : ${d["A1"]} ; DIGITADOR : ${d["A87"]} ; SERVICIO : ${d["A88"]}`
      log = log+warning+"\r\n\r\n"
    }
    if(d["A18"] == ""){
      ctx++
      c++
      let warning = `${c}.- EL CAMPO ATE#18 (NUMERO DEL CODIGO DE ASEGURADO) DEBE DE SER UN CAMPO ALFANUMERICO DE 8 O 9 DIGITOS -> N° DE CUENTA : ${d["A1"]} ; DIGITADOR : ${d["A87"]} ; SERVICIO : ${d["A88"]}`
      log = log+warning+"\r\n\r\n"
    }

    if(d["A21"] == ""){
      ctx++
      c++
      let warning = `${c}.- EL CAMPO ATE#21 (REGISTRO DEL ASEGURADO) DEBE SER UN CAMPO HASTA 10 DIGITOS -> N° DE CUENTA : ${d["A1"]} ; DIGITADOR : ${d["A87"]} ; SERVICIO : ${d["A88"]}`
      log = log+warning+"\r\n\r\n"
    }

    if(d["A40"] != "" && d["A34"] == "1" && d["A43"] == "1"){
      ctx++
      c++
      let warning = `${c}.- EL CAMPO ATE#40 (IPRESS DE REFERENCIA) DEBE SER VACIO SEGUN EL CAMPO ATE#34 (TIPO DE ATENCION) Y AL CAMPO ATE43 (ORIGEN DE PERSONAL) -> N° DE CUENTA : ${d["A1"]} ; DIGITADOR : ${d["A87"]} ; SERVICIO : ${d["A88"]}`
      log = log+warning+"\r\n\r\n"
    }

    if(d["A24"] == "8" && d["A25"].length < 10){
      ctx++
      c++
      let warning = `${c}.- EL CAMPO ATE#25 (NRO DE DOCUMENTO DEL ASEGURADO) DEBE SER DE 10 DIGITOS DE ACUERDO AL CAMPO #ATE24 (TIPO DE DOCUMENTO DEL ASEGURADO) -> N° DE CUENTA : ${d["A1"]} ; DIGITADOR : ${d["A87"]} ; SERVICIO : ${d["A88"]}`
      log = log+warning+"\r\n\r\n"
    }

    /*
    if (d["A41"] != "" && containCharactersNotPermition(d["A41"])) {
      ctx++
      c++
      let warning = `${c}.- EL CAMPO ATE#41 (HOJA DE REFERENCIA) DEBE DE SER UN CAMPO ALFANUMERICO DE HASTA 20 DIGITOS -> N° DE CUENTA : ${d["A1"]} ; DIGITADOR : ${d["A87"]} ; SERVICIO : ${d["A88"]}`
      log = log+warning+"\r\n\r\n"
    }*/

      if(d["A72"] == "1" && d["A73"].length > 8){
      ctx++
      c++
      let warning = `${c}.- EL CAMPO ATE#73 (NUMERO DE DOCUMENTO DEL PERSONAL) DEBE CONSIGNAR 8 DIGITOS DE ACUERDO AL CAMPO ATE#72 (TIPO DE DOCUMENTO DEL PERSONAL) -> N° DE CUENTA : ${d["A1"]} ; DIGITADOR : ${d["A87"]} ; SERVICIO : ${d["A88"]}`
      log = log+warning+"\r\n\r\n"
    }

    if (d["A35"] == "1" && d["A50"] == "") {
      ctx++
      c++
      let warning = `${c}.- EL CAMPO ATE#50 (FECHA DE PARTO) DEBE DE CUMPLIR EL FORMATO DD/MM/AAAA Y SER UNA FECHA VALIDA -> N° DE CUENTA : ${d["A1"]} ; DIGITADOR : ${d["A87"]} ; SERVICIO : ${d["A88"]}`
      log = log+warning+"\r\n\r\n"
    }

  if (d["A35"] == "2" && d["A50"] == "") {
      ctx++
      c++
      let warning = `${c}.- EL CAMPO ATE#50 (FECHA DE PARTO) DEBE DE CUMPLIR EL FORMATO DD/MM/AAAA Y SER UNA FECHA VALIDA -> N° DE CUENTA : ${d["A1"]} ; DIGITADOR : ${d["A87"]} ; SERVICIO : ${d["A88"]}`
      log = log+warning+"\r\n\r\n"
    }

    if (d["A35"] == "0"  && d["A50"].length > 0) {
      ctx++
      c++
      let warning = `${c}.- EL CAMPO ATE#50 (FECHA DE PARTO) DEBE SER VACIO SEGÚN AL CAMPO ATE#35 -> N° DE CUENTA : ${d["A1"]} ; DIGITADOR : ${d["A87"]} ; SERVICIO : ${d["A88"]}`
      log = log+warning+"\r\n\r\n"
    }

    if(d["A24"] == "3" && d["A25"].length < 9){
      ctx++
      c++
      let warning = `${c}.- EL CAMPO ATE#25 (NUMERO DE DOCUMENTO DEL ASEGURADO) DEBE CONSIGNAR 9 DIGITOS DE ACUERDO AL CAMPO ATE#24 (TIPO DE DOCUMENTO DEL ASEGURADO) -> N° DE CUENTA : ${d["A1"]} ; DIGITADOR : ${d["A87"]} ; SERVICIO : ${d["A88"]}`
      log = log+warning+"\r\n\r\n"
    }

    if(d["A24"] == "1" && d["A25"].length > 8){
      ctx++
      c++
      let warning = `${c}.- EL CAMPO ATE#25 (NUMERO DE DOCUMENTO DEL ASEGURADO) DEBE CONSIGNAR 8 DIGITOS DE ACUERDO AL CAMPO ATE#24 (TIPO DE DOCUMENTO DEL ASEGURADO) -> N° DE CUENTA : ${d["A1"]} ; DIGITADOR : ${d["A87"]} ; SERVICIO : ${d["A88"]}`
      log = log+warning+"\r\n\r\n"
    }

    if(d["A34"] == "2" && d["A41"] == ""){
      ctx++
      c++
      let warning = `${c}.- EL CAMPO ATE#41 (HOJA DE REFERENCIA) ES REQUERIDO DE ACUERDO AL CAMPO ATE#34 (TIPO DE ATENCION) Y AL CAMPO ATE#43 (TIPO DE PERSONAL) -> N° DE CUENTA : ${d["A1"]} ; DIGITADOR : ${d["A87"]} ; SERVICIO : ${d["A88"]}`
      log = log+warning+"\r\n\r\n"
    }

    if(!containNumbersDni(d["A24"])){
      ctx++
      c++
      let warning = `${c}.- EL CAMPO ATE#25 (NUMERO DE DOCUMENTO DEL ASEGURADO) DEBE TENER SOLO NÚMEROS -> N° DE CUENTA : ${d["A1"]} ; DIGITADOR : ${d["A87"]} ; SERVICIO : ${d["A88"]}`
      log = log+warning+"\r\n\r\n"
   }


   return counter(ctx,d)

}

function containCharactersNotPermition(value) {
  // Usamos una expresión regular para verificar si el dato contiene caracteres no permitidos.
  // La expresión regular /^[0-9.]+$/ coincidirá con cadenas que contengan solo números y un punto decimal.
  // Si el dato contiene algún otro carácter, la función retornará true; de lo contrario, retornará false.
  return !/^[0-9.]+$/.test(value);
}

function containNumbersDni(data){
 return /^\d+$/.test(data);
}

function validateDataOnlyValue(v){
    let ctx = 0
  
    if(v == "1012567"){
        ctx++
    }


   return counter(ctx)
}

function counter(ctx,d){

    let value = ""

    if(ctx > 0){
        value = `<td class="minText2"><button class="btn btn-danger" onclick="showDetailModal('${encodeURIComponent(JSON.stringify(d))}')"><i class="bi bi-eye-fill"></i></button></td>`
    }else{
        value = `<td class="minText2"><button class="btn btn-success" onclick="showDetailModal('${encodeURIComponent(JSON.stringify(d))}')"><i class="bi bi-file-check"></i></button></td>`
    }

    return value

}

function donwloadLog(){

// Crear un enlace de descarga dinámico
const link = document.createElement('a');
link.href = URL.createObjectURL(new Blob([log], { type: 'text/plain' }));
link.download = 'logs.txt';
link.click();

}

function sendTrama(ATENCION,ATENCIONDIA,ATENCIONMED,ATENCIONINS,ATENCIONPRO,ATENCIONSMI,ATENCIONSER,ATENCIONRN,RESUMEN,NAMEZIP,n){

    let data = {
        ATENCION:ATENCION,
        ATENCIONDIA:ATENCIONDIA,
        ATENCIONMED:ATENCIONMED,
        ATENCIONINS:ATENCIONINS,
        ATENCIONPRO:ATENCIONPRO,
        ATENCIONSMI:ATENCIONSMI,
        ATENCIONSER:ATENCIONSER,
        ATENCIONRN:ATENCIONRN,
        RESUMEN : RESUMEN,
        nameTrama : NAMEZIP
    }

    if(n != 0){
      fetch(`${url}/send-trama/`, {
        method: 'POST', // o 'PUT', 'DELETE', etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // data es un objeto con los datos a enviar
      })
      .then(response => response.json())
      .then(data => {
         if(data.length > 0){
            Swal.fire(
                'Muy bien',
                'Trama enviada!',
                'success'
              )
              enableButtons()
         }
      })
      .catch(error => {
        Swal.fire(
            'Oops!',
            'Se produjo un error',
            'warning'
          )
        console.error(error)
        enableButtonsError()
    });
  }else{
    fetch(`${url}/send-trama-debug/`, {
      method: 'POST', // o 'PUT', 'DELETE', etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // data es un objeto con los datos a enviar
    })
    .then(response => response.json())
    .then(data => {
       if(data.length > 0){
            showDataResponse(data[0].server_response)
            enableButtons()
       }
    })
    .catch(error => {
      Swal.fire(
          'Oops!',
          'Se produjo un error',
          'warning'
        )
      console.error(error)
      enableButtonsError()
  });
  }

    
}


function postTrama(n){

  let mes_ATENCION = document.getElementById("inputGroupSelectProductionMonth").value
  let anio_ATENCION = document.getElementById("inputGroupSelectYearSend").value
  let mes_SEND= document.getElementById("inputGroupSelectProductionMonth2").value
  let anio_SEND = document.getElementById("inputGroupSelectYearSend2").value

    atencion = ``
    diagnostico = ``
    medicamentos = ``
    insumos = ``
    procedimientos = ``
    smi = ``
    ser = ``
    rn = ``
    res = ``

    var tablaATE = $('#tb-data-3').DataTable();
    var filaATE = tablaATE.rows().count();

    if(filaATE > 0){
      disabledButtons()
      sendAllTramas(anio_ATENCION,mes_ATENCION,mes_SEND,anio_SEND,n)
    }else{
      Swal.fire(
        'Oops!',
        'Consulte la trama antes de enviar',
        'warning'
      )
    }

  

}

function sendAllTramas(anio,mes,mes_send,anio_send,n){
    
    fetch(`${url}/get-trama-atencion/${anio}/${mes}/${mes_send}/${anio_send}`,{
        method: 'get',
        headers: {
          'Accept': 'application/json'
        }
    })
      .then(response => response.json())
      .then(data => {
        let ctx = 0
   
        data.forEach(e => {
            let value = e.items
            ctx++
            if(data.length != ctx){
                atencion += value+"\n"
            }else{
                atencion += value
            }
        });

        getTramaDiagnostico(anio,mes,n)

      }).catch(err => {
        
        console.log(err)
        enableButtonsError()
      }); 

}

function getTramaDiagnostico(anio,mes,n){

    
    fetch(`${url}/get-trama-diagnostico/${anio}/${mes}`,{
        method: 'get',
        headers: {
          'Accept': 'application/json'
        }
    })
      .then(response => response.json())
      .then(data => {

        let ctx = 0
   
        data.forEach(e => {
            let value = e.items
            ctx++
            if(data.length != ctx){
                diagnostico += value+"\n"
            }else{
                diagnostico += value
            }
        });
        getTramaMedicamentos(anio,mes,n)

      }).catch(err => {
        
        console.log(err)
        enableButtonsError()
      }); 

}

function getTramaMedicamentos(anio,mes,n){

    
  fetch(`${url}/get-trama-medicamentos/${anio}/${mes}`,{
      method: 'get',
      headers: {
        'Accept': 'application/json'
      }
  })
    .then(response => response.json())
    .then(data => {

      let ctx = 0
 
      data.forEach(e => {
          let value = e.Items
          ctx++
          if(data.length != ctx){
              medicamentos += value+"\n"
          }else{
              medicamentos += value
          }
      });
      
      getTramaInsumos(anio,mes,n)

    }).catch(err => {
      
      console.log(err)
      enableButtonsError()
    }); 

}

function getTramaInsumos(anio,mes,n){

    
  fetch(`${url}/get-trama-insumos/${anio}/${mes}`,{
      method: 'get',
      headers: {
        'Accept': 'application/json'
      }
  })
    .then(response => response.json())
    .then(data => {

      let ctx = 0
 
      data.forEach(e => {
          let value = e.Items
          ctx++
          if(data.length != ctx){
              insumos += value+"\n"
          }else{
              insumos += value
          }
      });
      getTramaProcedimientos(anio,mes,n)

    }).catch(err => {
      
      console.log(err)
      enableButtonsError()
    }); 

}

function getTramaProcedimientos(anio,mes,n){

    
  fetch(`${url}/get-trama-procedimientos/${anio}/${mes}`,{
      method: 'get',
      headers: {
        'Accept': 'application/json'
      }
  })
    .then(response => response.json())
    .then(data => {

      let ctx = 0
 
      data.forEach(e => {
          let value = e.Items
          ctx++
          if(data.length != ctx){
              procedimientos += value+"\n"
          }else{
            procedimientos += value
          }
      });
      getTramaSmi(anio,mes,n)

    }).catch(err => {
      
      console.log(err)
      enableButtonsError()
    }); 

}

function getTramaSmi(anio,mes,n){

    
  fetch(`${url}/get-trama-smi/${anio}/${mes}`,{
      method: 'get',
      headers: {
        'Accept': 'application/json'
      }
  })
    .then(response => response.json())
    .then(data => {

      let ctx = 0
 
      data.forEach(e => {
          let value = e.items
          ctx++
          if(data.length != ctx){
              smi += value+"\n"
          }else{
            smi += value
          }
      });
      getTramaSer(anio,mes,n)

    }).catch(err => {
      
      console.log(err)
      enableButtonsError()
    }); 

}

function getTramaSer(anio,mes,n){

    
  fetch(`${url}/get-trama-ser/${anio}/${mes}`,{
      method: 'get',
      headers: {
        'Accept': 'application/json'
      }
  })
    .then(response => response.json())
    .then(data => {

      let ctx = 0
 
      if(data.length>0){
        data.forEach(e => {
          let value = e.items
          ctx++
          if(data.length != ctx){
              ser += value+"\n"
          }else{
            ser += value
          }
      });
      getTramaRn(anio,mes,n)
      }else{
        getTramaRn(anio,mes,n)
      }
      
    }).catch(err => {
      
      console.log(err)
      enableButtonsError()
    }); 

}

function getTramaRn(anio,mes,n){

    
  fetch(`${url}/get-trama-rn/${anio}/${mes}`,{
      method: 'get',
      headers: {
        'Accept': 'application/json'
      }
  })
    .then(response => response.json())
    .then(data => {

      let ctx = 0

      if(data[0].error != "sin datos"){
        data.forEach(e => {
          let value = e.items
          ctx++
          if(data.length != ctx){
              rn += value+"\n"
          }else{
            rn += value
          }
      });
      
      }

    getLastCorrelative(anio,mes,n)
      
    }).catch(err => {
      
      console.log(err)
      enableButtonsError()
    }); 

}

function getLastCorrelative(anio,mes,n){

  var correlative = '00000'
    
  fetch(`${url}/get-last-correlative/${anio}/${mes}`,{
      method: 'get',
      headers: {
        'Accept': 'application/json'
      }
  })
    .then(response => response.json())
    .then(data => {
  
      let x = data[0].correlativo
      let monthOfSend = document.getElementById("inputGroupSelectProductionMonth2").value
  
      if(x != null){
        correlative = x
        setResum(correlative,anio,monthOfSend,n)
      }else{
        setResum(correlative,anio,monthOfSend,n)
      }
      
      
    }).catch(err => {
      
      console.log(err)
      enableButtonsError()
    }); 

}

function setResum(correlative,anio,mes,n){

  let codReanes = '00002698'
  let nZip = codReanes+anio+padNumber(mes)+nSend(correlative)+'.zip'
  let month = document.getElementById("inputGroupSelectProductionMonth").value 

  let data = {
    anio: anio,
    mes : month,
    nroEnvio:nSend(correlative),
    nZip : nZip,
    dni:dniResp,
    mesP:mes
  }

  console.log(data)

  if(n != 0){
    fetch(`${url}/send-resum/`, {
      method: 'POST', // o 'PUT', 'DELETE', etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // data es un objeto con los datos a enviar
    })
    .then(response => response.json())
    .then(data => {
       if(data.length > 0){
        
        //GET RESUMEN
        getAtencionResumen(anio,mes,nSend(correlative),n)
  
       }
    })
    .catch(error => {
      enableButtonsError()
      Swal.fire(
          'Oops!',
          'Se produjo un error',
          'warning'
        )
      console.error(error)
  });
  }
  
  else{

    fetch(`${url}/send-resum-debug/`, {
      method: 'POST', // o 'PUT', 'DELETE', etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // data es un objeto con los datos a enviar
    })
    .then(response => response.json())
    .then(data => {
       if(data.length > 0){
        
        //GET RESUMEN
        getAtencionResumenDebug(anio,month,nSend(correlative),n)
  
       }
    })
    .catch(error => {
      enableButtonsError()
      Swal.fire(
          'Oops!',
          'Se produjo un error',
          'warning'
        )
      console.error(error)
  });

  }
 
  

}

function getAtencionResumen(anio,mes,nEnvio,n){

    fetch(`${url}/get-trama-res/${anio}/${mes}/${nEnvio}`,{
      method: 'get',
      headers: {
        'Accept': 'application/json'
      }
  })
    .then(response => response.json())
    .then(data => {
  
      res += data[0].Anio.toString()+"\n"
      res += padNumber(data[0].Mes)+"\n"
      res += data[0].NroEnvio+"\n"
      res += data[0].NomPaquete+"\n"
      res += data[0].VersionGTI+"\n"
      res += data[0].CantFilATE.toString()+"\n"
      res += data[0].CantFilSMI.toString()+"\n"
      res += data[0].CantFilDIA.toString()+"\n"
      res += data[0].CantFilMED.toString()+"\n"
      res += data[0].CantFilINS.toString()+"\n"
      res += data[0].CantFilPRO.toString()+"\n"
      res += data[0].CantFilSER.toString()+"\n"
      res += data[0].CantFilRN.toString()+"\n"
      res += data[0].NomApp+"\n"
      res += data[0].VersApp+"\n"
      res += data[0].VersEnvio+"\n"
      res += data[0].IdResp+"\n"
      res += data[0].NroDoc+"\n"
      
      sendTrama(atencion,diagnostico,medicamentos,insumos,procedimientos,smi,ser,rn,res,data[0].NomPaquete,n)
  
      
    }).catch(err => {
      enableButtonsError()
      console.log(err)
      enableButtons()
    }); 

}

function getAtencionResumenDebug(anio,mes,nEnvio,n){

  let month = document.getElementById("inputGroupSelectProductionMonth2").value 

  fetch(`${url}/get-trama-res-debug/${anio}/${mes}/${nEnvio}`,{
    method: 'get',
    headers: {
      'Accept': 'application/json'
    }
})
  .then(response => response.json())
  .then(data => {

    var tablaSMI = $('#tb-data-4').DataTable();
    var filaSMI = tablaSMI.rows().count();

    var tablaMED = $('#tb-data-5').DataTable();
    var filaMED = tablaMED.rows().count();

    var tablaINS = $('#tb-data-3').DataTable();
    var filaINS = tablaINS.rows().count();

    var tablaPRO = $('#tb-data-6').DataTable();
    var filaPRO = tablaPRO.rows().count();

    res += data[0].Anio.toString()+"\n"
    res += padNumber(month)+"\n"
    res += data[0].NroEnvio+"\n"
    res += data[0].NomPaquete+"\n"
    res += data[0].VersionGTI+"\n"
    res += data[0].CantFilATE.toString()+"\n"
    res += filaSMI.toString()+"\n"
    res += data[0].CantFilDIA.toString()+"\n"
    res += filaMED.toString()+"\n"
    res += filaINS.toString()+"\n"
    res += filaPRO.toString()+"\n"
    res += data[0].CantFilSER.toString()+"\n"
    res += data[0].CantFilRN.toString()+"\n"
    res += data[0].NomApp+"\n"
    res += data[0].VersApp+"\n"
    res += data[0].VersEnvio+"\n"
    res += data[0].IdResp+"\n"
    res += data[0].NroDoc+"\n"
 
    sendTrama(atencion,diagnostico,medicamentos,insumos,procedimientos,smi,ser,rn,res,data[0].NomPaquete,n)

    
  }).catch(err => {
    enableButtonsError()
    console.log(err)
    enableButtons()
  }); 

}

function nSend(n){

  let c = parseInt(n,10)
  c += 1
  let x = ""

  if(c.toString().length == 1){
    x = "0000"+c.toString()
  }else if(c.toString().length == 2){
    x = "000"+c.toString()
  }else if(c.toString().length == 3){
    x = "00"+c.toString()
  }

  return x

}

function padNumber(n){
  let x = n.toString();

  if (x.length === 1) {
    x = x.padStart(2, '0');
  }

  return x

}

function queryPackage(){

  let anio = document.getElementById("inputGroupSelectPackageYear").value
  let month = document.getElementById("inputGroupSelectPackageMonth").value
  let num = document.getElementById("numSending").value

  if(num != ""){
    fetch(`${url}/get-package-trama/${anio}/${month}/${numSend(num)}`,{
      method: 'post',
      headers: {
        'Accept': 'application/json'
      }
  })
    .then(response => response.json())
    .then(data => {
  
      showDataPackage(data.data)
      //console.log(data.data)
      
    }).catch(err => {
      console.log(err)
    }); 
  }else{
    Swal.fire(
      'Oops!',
      'Ingrese el Número de envío',
      'info'
    )
  }

}

function showDataPackage(data){
  var xmlString = data;

  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xmlString, "text/xml");
  
  // Obtener la respuesta SOAP
  var response = xmlDoc.getElementsByTagName("consultarPaqueteResponse")[0];
  
  // Obtener los elementos de la respuesta
  var paqueteEstado = response.getElementsByTagName("paqueteEstado")[0].textContent;
  var pasoDescripcion = response.getElementsByTagName("pasoDescripcion")[0].textContent;
  var pasoEstado = response.getElementsByTagName("pasoEstado")[0].textContent;
  var ateCargadas = response.getElementsByTagName("ateCargadas")[0].textContent;
  var ateDuplicadas = response.getElementsByTagName("ateDuplicadas")[0].textContent;
  var ateConsolidadas = response.getElementsByTagName("ateConsolidadas")[0].textContent;
  var ateObservadas = response.getElementsByTagName("ateObservadas")[0].textContent;
  var ateProduccion = response.getElementsByTagName("ateProduccion")[0].textContent;
  
  document.getElementById("statusP").innerHTML = paqueteEstado
  document.getElementById("descriptionP").innerHTML = pasoDescripcion.replaceAll("�",'ó')
  document.getElementById("statusP2").innerHTML = pasoEstado
  document.getElementById("ateCar").innerHTML = ateCargadas
  document.getElementById("ateDu").innerHTML = ateDuplicadas
  document.getElementById("ateCon").innerHTML = ateConsolidadas
  document.getElementById("ateObs").innerHTML = ateObservadas
  document.getElementById("ateProd").innerHTML = ateProduccion

}

function showDataResponse(data) {
  
  var xmlString = data;

  var parser = new DOMParser();
  var xmlDoc = parser.parseFromString(xmlString, "text/xml");

  // Obtener la respuesta SOAP
  var response = xmlDoc.getElementsByTagName("registrarFuaResponse")[0];

  // Obtener el código y el paqueteNombre
  var cod = response.getElementsByTagName("codigo")[0].textContent;
  var status = response.getElementsByTagName("paqueteNombre")[0].textContent;

  if(cod == "0"){
    document.getElementById("cod-resp").innerHTML = cod;
    document.getElementById("mes-resp").innerHTML = "TRAMA ENVIADA CORRECTAMENTE!";
    document.getElementById("pack-resp").innerHTML = status + '.zip';

    $('#modalTramaResponse').modal('show');
  }else{
// Verificar si el elemento "respuesta" existe en la respuesta SOAP
    var resElement = response.getElementsByTagName("respuesta")[0];
    var res = resElement ? resElement.textContent : "";

    document.getElementById("cod-resp").innerHTML = cod;
    document.getElementById("mes-resp").innerHTML = res;
    document.getElementById("pack-resp").innerHTML = status + '.zip';

    $('#modalTramaResponse').modal('show');
  }

  
}

function openModalPackage(){
  $('#packageModal').modal('show')
}

function validateCatalog(){
  $('#validateCatalogModal').modal('show')
}

function numSend(num){

  let x = ""
  
  if(num.length == 1){
    x = '0000'+num
  }else if(num.length == 2){
    x = '000'+num
  }else{
    x = '00'+num
  }

  return x

}

function closeModalPackage(){
  $('#packageModal').modal('hide')
  document.getElementById("numSending").value = ""
  document.getElementById("statusP").innerHTML = "Ninguno"
  document.getElementById("descriptionP").innerHTML = "Ninguno"
  document.getElementById("statusP2").innerHTML = "Ninguno"
  document.getElementById("ateCar").innerHTML = "Ninguno"
  document.getElementById("ateDu").innerHTML = "Ninguno"
  document.getElementById("ateCon").innerHTML = "Ninguno"
  document.getElementById("ateObs").innerHTML = "Ninguno"
  document.getElementById("ateProd").innerHTML = "Ninguno"
}

function showDetailModal(d){
  d = JSON.parse(decodeURIComponent(d))
  $('#modalDetail').modal('show')

  document.getElementById("afi-disa").value = ''
  document.getElementById("afi-type").value = ''
  document.getElementById("afi-num").value = ''
  document.getElementById("afi-siasis").value = ''

  document.getElementById("tbodyD").innerHTML = ""
  document.getElementById("d-lote").innerHTML = d.A3
  document.getElementById("d-account").innerHTML = (d.A1).trimEnd()
  document.getElementById("d-name").innerHTML = d.A26+" "+d.A27+" "+d.A28
  document.getElementById("d-idpatient").innerHTML = d.A89

  document.getElementById("fua-id-ate").value = d.A42
  document.getElementById("inputGroupSelectTypeAte").value = d.A34

  document.getElementById("inputGroupSelectTypeDni").value = d.A24
  document.getElementById("fua-patient-dni").value = d.A25
  document.getElementById("fua-date-birth").value = (d.A30).split("/")[2]+'-'+(d.A30).split("/")[1]+'-'+(d.A30).split("/")[0]
  
  document.getElementById("fua-num-ipress").value = d.A40

  if(d.A50 != ""){
    document.getElementById("fua-date-pregnancy").value = (d.A50).split("/")[2]+'-'+(d.A50).split("/")[1]+'-'+(d.A50).split("/")[0]
  }

  if(d.A31 == "1"){
    document.getElementById("inputGroupSelectSex").value = 1
  }else{
    document.getElementById("inputGroupSelectSex").value = 2
  }


  fetch(`${url}/affiliate-by-name/${d.A26}/${d.A27}/${d.A28}`,{
    method: 'get',
    headers: {
      'Accept': 'application/json'
    }
})
  .then(response => response.json())
  .then(data => {

    let size = (data.length)-1

  if(size >= 0){
    document.getElementById("afi-disa").value = data[size].AfiliacionDisa
    document.getElementById("afi-type").value = data[size].AfiliacionTipoFormato
    document.getElementById("afi-num").value = data[size].AfiliacionNroFormato
    document.getElementById("afi-siasis").value = data[size].idSiasis
    document.getElementById("afi-code").value = data[size].Codigo
  }

    
    $("#tbodyD").html(data.map((V) => {
                
      return `
      <tr>
      <td>${V.AfiliacionDisa}</td>
      <td>${V.AfiliacionTipoFormato}</td>
      <td>${V.AfiliacionNroFormato}</td>
      <td>${V.idSiasis}</td>
      <td>${V.AfiliacionFecha}</td>
      <td>${V.nombres}</td>
      <td>${V.Codigo}</td>
      </tr>`;

  })
  .join("")
);

  }).catch(err => {
    console.log(err)
  }); 


  fetch(`${url}/get-data-medic/${d.A1}`,{
    method: 'get',
    headers: {
      'Accept': 'application/json'
    }
})
  .then(response => response.json())
  .then(data => {

   let value = data[0]

   document.getElementById("afi-type-dig").value = d.A81

   if(d.A82 == ""){
    document.getElementById("afi-num-dig").value = (value.dni_medico).trim()
   }else{
    document.getElementById("afi-num-dig").value = d.A82
   }

  }).catch(err => {
    console.log(err)
  }); 

}

function updateAfiliation(){

  let lote = document.getElementById("d-lote").innerHTML 
  let account =  document.getElementById("d-account").innerHTML 
  let disa =  document.getElementById("afi-disa").value 
  let type =  document.getElementById("afi-type").value
  let num =  document.getElementById("afi-num").value
  let siasis =  document.getElementById("afi-siasis").value
  let code =  document.getElementById("afi-code").value

  if(disa != "" && type != "" && num != "" && siasis != "" && code != ""){

    let data = {
      AfiliacionDisa:disa,
      AfiliacionTipoFormato:type,
      AfiliacionNroFormato:num,
      idSiasis:siasis,
      FuaLote:lote,
      idCuentaAtencion:account,
      Codigo:code
    }


    fetch(`${url}/update-sis-afiliation/`, {
      method: 'POST', // o 'PUT', 'DELETE', etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // data es un objeto con los datos a enviar
    })
    .then(response => response.json())
    .then(data => {
       if(data.success == "insertado"){
        
        Swal.fire(
          'Muy bien!',
          'Cuenta actualizada',
          'success'
        )
  
       }else{
        Swal.fire(
          'Oops!',
          'Se produjo un error',
          'warning'
        )
       }
    })
    .catch(error => {
      Swal.fire(
          'Oops!',
          'Se produjo un error',
          'warning'
        )
      console.error(error)
  
  });


  }else{
    Swal.fire(
      'Oops!',
      'Complete los campos',
      'info'
    )
  }

}

function updateDNIDigitador(){

  let dni = document.getElementById("afi-num-dig").value 
  let account = document.getElementById("d-account").innerHTML

  if(dni != ""){

    let data = {
      dni:dni,
      account:account,
    }


    fetch(`${url}/update-dni-digitador`, {
      method: 'POST', // o 'PUT', 'DELETE', etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // data es un objeto con los datos a enviar
    })
    .then(response => response.json())
    .then(data => {

       if(data[0].success == "actualizado"){
        
        Swal.fire(
          'Muy bien!',
          'Cuenta actualizada',
          'success'
        )
  
       }else{
        Swal.fire(
          'Oops!',
          'Se produjo un error',
          'warning'
        )
       }
    })
    .catch(error => {
      Swal.fire(
          'Oops!',
          'Se produjo un error',
          'warning'
        )
      console.error(error)
  
  });


  }else{
    Swal.fire(
      'Oops!',
      'Complete los campos',
      'info'
    )
  }

}

$(document).ready(function() {
  $('#excelFile').on('change', function(evt) {
    var file = evt.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      var data = new Uint8Array(e.target.result);
      var workbook = XLSX.read(data, {type: 'array'});
      var sheetName = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[sheetName];
      var jsonData = XLSX.utils.sheet_to_json(worksheet, {header: 1});

      var table = $('#tableValidateCatalog').DataTable();
      table.clear();

      for (var i = 1; i < jsonData.length; i++) { // Ignorar la primera fila (encabezados)
        fetchValidateCatalog(jsonData[i],jsonData.length)
      }

      table.draw();
      table.columns.adjust().draw();

    };
    reader.readAsArrayBuffer(file);
  });
});

function fetchValidateCatalog(jsonData,l){

  const [usuario, fecha, descripcion] = jsonData

  var table = $('#tableValidateCatalog').DataTable();
  
  var fuaData = descripcion.split("FUA: ")[1]
  var lote = fuaData.split("-")[1]
  var fua = fuaData.split("-")[2]

  fetch(`${url}/get-data-validate-catalog/${lote}/${fua}`,{
    method: 'get',
    headers: {
      'Accept': 'application/json'
    }
})
  .then(response => response.json())
  .then(data => {

    ctxG++

    var cuenta = data[0].idCuentaAtencion
    var f_ate = data[0].FuaAtencionFecha
    var digitador = (data[0].nombres).toUpperCase()
    var servicio = (data[0].Nombre).toUpperCase()

    catalog.push({Cuenta :cuenta,Descripcion:descripcion,Fecha_de_atencion : f_ate,Servicio : servicio,Digitador : digitador})
   
    table.row.add([usuario, fecha, descripcion,cuenta,fuaData,f_ate,digitador,servicio]);
    table.draw();
    table.columns.adjust().draw();
   
    document.getElementById("loadCatalog").style = "display:block;"
    
    if(l == ctxG){
      document.getElementById("btn-catalog").style = "display:block;"
      document.getElementById("loadCatalog").style = "display:none;"
      ctxG = 1
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

function updateAtePrincipal(){

  let account = document.getElementById("d-account").innerHTML
  let cod = document.getElementById("fua-id-ate").value

  if(cod != "" && cod != "0"){

    fetch(`${url}/update-cod-ate-fua/${account}/${cod}`,{
      method: 'get',
      headers: {
        'Accept': 'application/json'
      }
  })
    .then(response => response.json())
    .then(data => {

      let x = data[0]
      if(x.success == "actualizado"){
        Swal.fire(
          'Muy bien!',
          'Codigo actualizado!',
          'success'
        )
      }else{
        Swal.fire(
          'Oops!',
          'Se produjo un error, intentelo nuevamente',
          'info'
        )
      }
   
  
    }).catch(error => {
      Swal.fire(
          'Oops!',
          'Se produjo un error',
          'warning'
        )
  });

  }
}


function updateTypeAte(){

  let type = document.getElementById("inputGroupSelectTypeAte").value
  let account = document.getElementById("d-account").innerHTML

  fetch(`${url}/update-type-atention-fua/${type}/${account}`,{
    method: 'get',
    headers: {
      'Accept': 'application/json'
    }
})
  .then(response => response.json())
  .then(data => {
    let x = data[0]
    if(x.success == "actualizado"){
      Swal.fire(
        'Muy bien!',
        'Tipo de atención actualizado!',
        'success'
      )
    }else{
      Swal.fire(
        'Oops!',
        'Se produjo un error, intentelo nuevamente',
        'info'
      )
    }
 

  }).catch(error => {
    Swal.fire(
        'Oops!',
        'Se produjo un error',
        'warning'
      )
});
}


function updateDniPatient(){

  let type = document.getElementById("inputGroupSelectTypeDni").value
  let dni = document.getElementById("fua-patient-dni").value
  let account = document.getElementById("d-account").innerHTML

  if(dni != ""){

 
  fetch(`${url}/update-dni-patient-fua/${type}/${dni}/${account}`,{
    method: 'get',
    headers: {
      'Accept': 'application/json'
    }
})
  .then(response => response.json())
  .then(data => {
    let x = data[0]
    if(x.success == "actualizado"){
      Swal.fire(
        'Muy bien!',
        'Documento actualizado!',
        'success'
      )
    }else{
      Swal.fire(
        'Oops!',
        'Se produjo un error, intentelo nuevamente',
        'info'
      )
    }
 

  }).catch(error => {
    Swal.fire(
        'Oops!',
        'Se produjo un error',
        'warning'
      )
});

  }else{
    Swal.fire(
      'Oops!',
      'Ingrese el número de documento!',
      'info'
    )
  }
}

function buscarDuplicados(arr) {
  const duplicados = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicados.includes(arr[i])) {
        duplicados.push(arr[i]);
      }
    }
  }

  console.log('duplicados :'+duplicados)
  return duplicados;
}

function exportToExcelCatalog(){

  Swal.fire({
      title: 'En breves se descargará el archivo!',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      },
    })

var fechaActual = new Date();

var dia = fechaActual.getDate();
var mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0 (enero es 0)
var anio = fechaActual.getFullYear();

// Agrega un cero inicial si el día o el mes son menores a 10
if (dia < 10) {
    dia = '0' + dia;
}

if (mes < 10) {
    mes = '0' + mes;
}

var actual = +dia + '/' + mes + '/' + anio;

  let xls = new XlsExport(catalog, 'catalogo');
  xls.exportToXLS(`reporte_catalogo_de_errores_sis_${actual}.xls`)
}


function updateSexPatient(){

  let sex = document.getElementById("inputGroupSelectSex").value
  let id = document.getElementById("d-idpatient").innerHTML

  fetch(`${url}/update-gender-patient/${sex}/${id}`,{
    method: 'get',
    headers: {
      'Accept': 'application/json'
    }
})
  .then(response => response.json())
  .then(data => {
    let x = data[0]
    if(x.success == "actualizado"){
      Swal.fire(
        'Muy bien!',
        'Genero actualizado!',
        'success'
      )
    }
  }).catch(error => {
    console.log(error)
    Swal.fire(
        'Oops!',
        'Se produjo un error',
        'warning'
      )
});

}

function updateDateBirthday(){

  let birth = document.getElementById("fua-date-birth").value
  let id = document.getElementById("d-idpatient").innerHTML

  if(birth != ""){

    let data = {
      date : birth+' 00:00:00.000',
      idPatient : id
    }
  
    fetch(`${url}/update-date-birth-patient`, {
      method: 'POST', // o 'PUT', 'DELETE', etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // data es un objeto con los datos a enviar
    })
    .then(response => response.json())
    .then(data => {
      let x = data[0]
      console.log(data)
      if(x.success == "actualizado"){
        Swal.fire(
          'Muy bien!',
          'Fecha de nacimiento actualizado!',
          'success'
        )
      }
    }).catch(error => {
      Swal.fire(
          'Oops!',
          'Se produjo un error',
          'warning'
        )
  });
  }else{
    Swal.fire(
      'Oops!',
      'Ingrese una fecha',
      'warning'
    )
  }

}

function updateDatePregnancy(){

  let preg = document.getElementById("fua-date-pregnancy").value
  let id = document.getElementById("d-account").innerHTML

  if(preg != ""){

    let data = {
      date : date(preg),
      idCuentaAtencion: id
    }
   
    fetch(`${url}/update-date-pregnancy`, {
      method: 'POST', // o 'PUT', 'DELETE', etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // data es un objeto con los datos a enviar
    })
    .then(response => response.json())
    .then(data => {
      let x = data[0]
      console.log(data)
      if(x.success == "actualizado"){
        Swal.fire(
          'Muy bien!',
          'Fecha de parto actualizada!',
          'success'
        )
      }
    }).catch(error => {
      Swal.fire(
          'Oops!',
          'Se produjo un error',
          'warning'
        )
  });
  }else{
    Swal.fire(
      'Oops!',
      'Ingrese una fecha',
      'warning'
    )
  }

}


function updateNumIpress(){

  let ipress = document.getElementById("fua-num-ipress").value
  let id = document.getElementById("d-account").innerHTML

  if(ipress != ""){

    let data = {
      ipress : ipress,
      idCuentaAtencion: id
    }
   
    fetch(`${url}/update-num-ipress`, {
      method: 'POST', // o 'PUT', 'DELETE', etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // data es un objeto con los datos a enviar
    })
    .then(response => response.json())
    .then(data => {
      let x = data[0]
      console.log(data)
      if(x.success == "actualizado"){
        Swal.fire(
          'Muy bien!',
          'Código de IPRESS actualizada!',
          'success'
        )
      }
    }).catch(error => {
      Swal.fire(
          'Oops!',
          'Se produjo un error',
          'warning'
        )
  });
  }else{
    Swal.fire(
      'Oops!',
      'Ingrese una IPRESS válida',
      'warning'
    )
  }

}


function updateNullDatePregnancy() {
  let account = document.getElementById("d-account").innerHTML
  fetch(`${url}/update-date-null-pregnancy/${account}`)
    .then(response => response.json())
    .then(data => {
      if(data[0].success == "actualizado"){
        Swal.fire(
          'Muy bien!',
          'Sin fecha de parto!',
          'success'
        )
      }else{
        Swal.fire(
          'Oops!',
          'Ocurrió un error',
          'warning'
        )
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

//--------------------------------------------------------------RC-------------------------

function openModalValidation(){
  $('#compareModal').modal('show')
}

function compareSigeps() {
  const excelFile = document.getElementById('excelFileX').files[0];
  const txtFile = document.getElementById('txtFileX').files[0];
  document.getElementById("btn-down").style = "display:none;"
  let ctxFound = 0;
  let ctxNoFound = 0;

  if (!excelFile || !txtFile) {
    alert('Por favor, seleccione ambos archivos.');
    return;
  }

  const excelReader = new FileReader();
  const txtReader = new FileReader();

  excelReader.onload = function () {
    document.getElementById("loader2").style = "display:block"
    const excelData = excelReader.result;

    const excelDocuments = {};
    const workbook = XLSX.read(excelData, { type: 'binary' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const excelJSON = XLSX.utils.sheet_to_json(worksheet);

    excelJSON.forEach(row => {
      const documentoExcel = row['NRO FORMATO']; // Reemplaza 'DOCUMENTO' con el nombre correcto de la columna del documento en tu archivo Excel
      if (documentoExcel) {
        excelDocuments[documentoExcel.split("-")[2]] = true;
      }
    });

    txtReader.onload = function () {
      const txtData = txtReader.result;

      const results = [];

      const txtLines = txtData.split('\n');
      txtLines.forEach(line => {
        const parts = line.split('|');
        if (parts.length >= 4) {
          const documentoTXT = parts[3];
          if (documentoTXT in excelDocuments) {
            ctxFound++;
            results.push(`FUA ENCONTRADA -> ${documentoTXT}`);
          } else {
            ctxNoFound++;
            results.push(`FUA NO ENCONTRADA -> ${documentoTXT}`);
            fetchNoFound(documentoTXT)
          }
        }
      });

      if (results.length === 0) {
        console.log('No se encontraron coincidencias.');
      } else {
        //console.log('N° DE FUAS EN SIGEPS -> ' + ctxFound);
        //console.log('N° NO ENCONTRADAS -> ' + ctxNoFound);
        results.forEach(result => {
          //console.log(result);
        });
      }
    };

    txtReader.readAsText(txtFile); // Lee el archivo de texto como texto
  };
  excelReader.readAsBinaryString(excelFile); // Lee el archivo Excel como binario

}

$('#compareModal').on('hidden.bs.modal', function (e) {
  document.getElementById('txtFileX').value = ""
  document.getElementById('excelFileX').value = ""
})

async function fetchNoFound(fua){

  const fechaActual = new Date();
  const lote = (fechaActual.getFullYear().toString()).substring(2);
  document.getElementById("loader2").style = "display:block"

try {
  // Realiza la solicitud fetch con el ID actual
  const response = await fetch(`${url}/get-data-validate-catalog/${lote}/${fua}`); // Reemplaza "URL_BASE" con la URL base de tu API

  if (response.ok) {
    // Procesa la respuesta como desees
    const data = await response.json();
    var cuenta = data[0].idCuentaAtencion
    var f_ate = data[0].FuaAtencionFecha
    var digitador = (data[0].nombres).toUpperCase()
    var servicio = (data[0].Nombre).toUpperCase()

    notFound.push({Cuenta :cuenta,fua:'00002698-'+lote+'-'+fua,Fecha_de_atencion : f_ate,Servicio : servicio,Digitador : digitador})
    document.getElementById("loader2").style = "display:none;"
    document.getElementById("btn-down").style = "display:block;"


  } else {
    console.error(`Error al hacer la solicitud para ID ${fua}:`, response.status);
  }
} catch (error) {
  console.error(`Error al hacer la solicitud para ID ${fua}:`, error);
}
}

function exportNotFound(){
  Swal.fire({
    title: 'En breves se descargará el archivo!',
    timer: 5000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
    },
  })

var fechaActual = new Date();

var dia = fechaActual.getDate();
var mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0 (enero es 0)
var anio = fechaActual.getFullYear();

// Agrega un cero inicial si el día o el mes son menores a 10
if (dia < 10) {
  dia = '0' + dia;
}

if (mes < 10) {
  mes = '0' + mes;
}

var actual = +dia + '/' + mes + '/' + anio;

setTimeout(() => {
  let xls = new XlsExport(notFound, 'catalogo');
  xls.exportToXLS(`fuas_no_encontrados_en_sigeps_${actual}.xls`);
}, 5000); 

}

function jsonATE() {
  var table = $('#tb-data').DataTable(); // Obtén la instancia de la tabla DataTables

  // Define un array para almacenar los objetos JSON
  var jsonData = [];

  // Itera a través de los datos de la tabla
  table.rows().data().each(function (rowData) {
    // Crea un objeto JSON para cada fila
    var data = {
      cuenta_1: rowData[1],
      disa_2: rowData[2],
      lote_3 : rowData[3],
      fua_4 : rowData[4],
      udr_5 : rowData[5],
      renaesIpress_6 : rowData[6],
      categoriaIpress_7 : rowData[7],
      nivelIpress_8 : rowData[8],
      puntoDigitacion_9 : rowData[9],
      fuaReconsideracion_10 : rowData[10],
      codigoDisa_11 : rowData[11],
      loteFuaReconsideracion_12 : rowData[12],
      nFuaReconsideracion_13 : rowData[13],
      idConvenio_14 : rowData[14],
      componenteAsegurado_15 : rowData[15],
      codigoAfiliado_16 : rowData[16],
      loteFormatoAfiliado_17 : rowData[17],
      numFormatoAfiliado_18 : rowData[18],
      correlativoAfiliado_19 : rowData[19],
      tipoTabla_20 : rowData[20],
      idContratoAfiliado_21 : rowData[21],
      cobertura_22 : rowData[22],
      grupoPoblacional_23 : rowData[23],
      tipoDocumento_24 : rowData[24],
      numDocumento_25 : rowData[25],
      apellidoPaterno_26 : rowData[26],
      apellidoMaterno_27 : rowData[27],
      primerNombre_28 : rowData[28],
      otrosNombres_29 : rowData[29],
      fechaNacimiento_30 : rowData[30],
      sexo_31 : rowData[31],
      codigoDistrito_32 : rowData[32],
      historia_33 : rowData[33],
      tipoAtencion_34 : rowData[34],
      condicionMaterna_35 : rowData[35],
      modalidadAtencion_36 : rowData[36],
      numAutorizacion_37 : rowData[37],
      montoAutorizado_38 : rowData[38],
      fechaAtencion_39 : rowData[39],
      renaes_40 : rowData[40],
      numHojaReferencia_41 : rowData[41],
      servicio_42 : rowData[42],
      origenPersonal_43 : rowData[43],
      lugarAtencion_44 : rowData[44],
      destinoAsegurado_45 : rowData[45],
      fechaIngresoHospitalizacion_46 : rowData[46],
      fechaAltaHospitalizacion_47 : rowData[47],
      susaludRenaes_48 : rowData[48],
      numHojaReferenciaOContra_49 : rowData[49],
      fechaParto_50 : rowData[50],
      grupoRiesgo_51 : rowData[51],
      catalogoIe_52 : rowData[52],
      nivelEducativo_53 : rowData[53],
      gradoEducativo_54 : rowData[54],
      seccionEducativo_55 : rowData[55],
      turnoEducativo_56 : rowData[56],
      educacionEspecial_57 : rowData[57],
      anexoEducacion_58 : rowData[58],
      fallecimientoAsegurado_59 : rowData[59],
      ofertaFlexible_60 : rowData[60],
      etnia_61 : rowData[61],
      institucionSeguro_62 : rowData[62],
      seguroIAFAS_63 : rowData[63],
      ups_64 : rowData[64],
      fechaCorteAdministrativo_65 : rowData[65],
      codigoUdr_66 : rowData[66],
      loteCodigoAutorizacion_67 : rowData[67],
      correlativoCodigoAutorizacion_68 : rowData[68],
      codigoDisaORenaes_69 : rowData[69],
      loteFuaVinculado_70 : rowData[70],
      fuaVinculado_71 : rowData[71],
      tipoDocResponsableAtencion_72 : rowData[72],
      documentoResponsableAtencion_73 : rowData[73],
      tipoPersonalSalud_74 : rowData[74],
      especialidadResponsable_75 : rowData[75],
      egresado_76 : rowData[76],
      colegiatura_77 : rowData[77],
      rne_78 : rowData[78],
      periodoProduccion_79 : rowData[79],
      mesProduccion_80 : rowData[80],
      tipoDocDigitador_81 : rowData[81],
      documentoDigitador_82 : rowData[82],
      fechaHoraRegistroAtencion_83 : rowData[83],
      observacion_84 : rowData[84],
      versionApp_85 : rowData[85],
      codigoSiteds_86 : rowData[86],
      procedimientos : []
    };
    // Agrega el objeto JSON al array
    jsonData.push(data);
  });
  // El objeto JSON resultante se encuentra en jsonStr
  
  jsonProcedure(jsonData)
}


function jsonProcedure(jsonAte) {
  var table = $('#tb-data-6').DataTable(); // Obtén la instancia de la tabla DataTables
  var jsonPro = [];

  table.rows().data().each(function (rowData) {
    var data = {
      cuenta_1: rowData[1],
      codigoCpt_2: rowData[2],
      codigoCpms_3: rowData[3],
      correlativoDxPertenece_4: rowData[4],
      cantidadPrescrita_5: rowData[5],
      cantidadEntregada_6: rowData[6]
    };
    jsonPro.push(data);
  });

  var combinedData = {};

  // Iterar a través del primer JSON (json1)
  jsonAte.forEach(function (item) {
    // Clonar el objeto para no modificar el original
    var combinedItem = { ...item };
    // Filtrar los elementos del segundo JSON (json2) que coinciden con la "cuenta_1" del primer JSON
    var matchingItems = jsonPro
      .filter(function (subItem) {
        return subItem.cuenta_1 === item.cuenta_1;
      })
      .map(function (subItem) {
        // Clonar el objeto de procedimientos y excluir el campo "cuenta_1"
        var procedimientos = { ...subItem };
        delete procedimientos.cuenta_1;
        return procedimientos;
      });
    // Agregar los elementos coincidentes al campo "procedimientos" del objeto combinado
    combinedItem.procedimientos = matchingItems;
    // Almacenar el objeto combinado en el objeto de resultados usando "cuenta_1" como clave
    combinedData[item.cuenta_1] = combinedItem;
  });
  
  // Obtener un arreglo de los objetos combinados
  var combinedArray = Object.values(combinedData);
  
  c2 = 0
  rc(combinedArray)

}


function rc(array){
  array.forEach(function (item) {
    if (item.servicio_42 === '063') {
      var procedimientos = item.procedimientos;

      // Contadores para verificar la existencia y duplicados de '99295'
      var existCount = 0;
      var duplicateCount = 0;

      procedimientos.forEach(function (proc) {
        if (proc.codigoCpt_2 === '99285') {
          existCount++;
          if (existCount > 1) {
            duplicateCount++;
          }
        }
      });

      if (existCount === 0) {
        c2++
        let warning = `${c2}.- RC-01 No existe el código "99285" en los procedimientos. CUENTA : ${item.cuenta_1}  `
        rclog = rclog+warning+"\r\n\r\n"
      } else if (existCount === 1 && duplicateCount > 0) {
        c2++
        let warning = `${c2}.- RC-01 El código "99285" existe una vez, pero hay duplicados. CUENTA : ${item.cuenta_1}  `
        rclog = rclog+warning+"\r\n\r\n"
      }
    }
  });

  donwloadRC()
}

function donwloadRC(){

  // Crear un enlace de descarga dinámico
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([rclog], { type: 'text/plain' }));
  link.download = 'rc.txt';
  link.click();
  
  }