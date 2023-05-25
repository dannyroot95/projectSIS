
var params = [] 
var params2 = [] 
var dniResp = 71853201
var log = ""
var c = 0
var atencion = ``
var diagnostico = ``
var medicamentos = ``
var insumos = ``
var procedimientos = ``
var smi = ``
var ser = ``
var rn = ``
var res = ``

createDatatable()
createDatatable2()
createDatatable3()
createDatatable5()
createDatatable6()
createDatatable4()
createDatatable7()
createDatatable8()
arrayParams()

function arrayParams(){
    for(let i = 1 ; i<= 86 ; i++){
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

function query(){

    c = 0
    log = ""
    document.getElementById("errors").style = "display:none;"
    let mes = document.getElementById("inputGroupSelectProductionMonth")
    let anio = document.getElementById("inputGroupSelectYearSend")
    var mes_selected = mes.value
    var anio_selected = anio.value

    fetchTramaAtencion(mes_selected,anio_selected)
    fetchTramaDiagnostico(mes_selected,anio_selected)
    fetchTramaInsumos(mes_selected,anio_selected)
    fetchTramaMedicamentos(mes_selected,anio_selected)
    fetchTramaProcedimientos(mes_selected,anio_selected)
    fetchTramaSMI(mes_selected,anio_selected)
    fetchTramaSER(mes_selected,anio_selected)
    fetchTramaRN(mes_selected,anio_selected)
    

}

function fetchTramaAtencion(mes,anio){

        document.getElementById("body").style = "display:none;"
        disabledButtons()
        
        fetch(`${url}/trama-atencion/${anio}/${mes}/${mes}`,{
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

}

function insertDataDiagnostico(data){
  
    
    document.getElementById("tbody2").innerHTML = ""
    $('#tb-data-2').DataTable().destroy()

    $("#tbody2").html(data.map((d) => {
        const cells = params2.map(param => {

            if (param == 'x') {

                return validateData(d)

                
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

                return validateData(d)

                
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

                return validateData(d)

                
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
              ${validateDataOnlyValue(it[0])}
              <td class="minText2">${it[0]}</td>
              <td class="minText2">${it[1]}</td>
              <td class="minText2">${it[2]}</td>
              <td class="minText2">${it[3]}</td>
              <td class="minText2">${it[4]}</td>
              <td class="minText2">${it[5]}</td>
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
              ${validateDataOnlyValue(it[0])}
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
              ${validateDataOnlyValue(it[0])}
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
  
   
    document.getElementById("tbody8").innerHTML = ""
    $('#tb-data-8').DataTable().destroy()

    $("#tbody8").html(data.map((d) => {
        
        let it = (d.values).split("|")

              return `
              <tr style="cursor: pointer;">
              ${validateDataOnlyValue(it[0])}
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



function disabledButtons(){
loader.style = "display:block;"
document.getElementById("btn-logs").disabled = true
document.getElementById("btn-package").disabled = true
document.getElementById("btn-query").disabled = true
document.getElementById("btn-send").disabled = true
}

function enableButtons(){
loader.style = "display:none;"
document.getElementById("btn-logs").disabled = false
document.getElementById("btn-query").disabled = false
document.getElementById("btn-package").disabled = false
document.getElementById("btn-send").disabled = false
document.getElementById("btn-logs").style = "display:block;"
}

function enableButtonsError(){
  loader.style = "display:none;"
  document.getElementById("btn-logs").style = "display:none;"
  document.getElementById("btn-logs").disabled = false
  document.getElementById("btn-query").disabled = false
  document.getElementById("btn-package").disabled = false
  document.getElementById("btn-send").disabled = false
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

    let ctx = 0
  
    if(d["A33"].length > 6){
        ctx++
        c++
        let warning = `${c}.- HISTORIA CLINICA INCORRECTA [33] -> N° DE CUENTA : ${d["A1"]}`
        log = log+warning+"\n"
    }


   return counter(ctx)

}

function validateDataOnlyValue(v){
    let ctx = 0
  
    if(v == "1012567"){
        ctx++
    }


   return counter(ctx)
}

function counter(ctx){

    let value = ""

    if(ctx > 0){
        value = `<td class="minText2"><button class="btn btn-danger" onclick="alert('Errores encontrados!')"><i class="bi bi-eye-fill"></i></button></td>`
    }else{
        value = `<td class="minText2"><button class="btn btn-success" onclick="alert('0 Errores')"><i class="bi bi-file-check"></i></button></td>`
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

function sendTrama(ATENCION,ATENCIONDIA,ATENCIONMED,ATENCIONINS,ATENCIONPRO,ATENCIONSMI,ATENCIONSER,ATENCIONRN,RESUMEN,NAMEZIP){

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
}


function postTrama(){

    let mes = document.getElementById("inputGroupSelectProductionMonth")
    let anio = document.getElementById("inputGroupSelectYearSend")
    var mes_selected = mes.value
    var anio_selected = anio.value

    atencion = ``
    diagnostico = ``
    medicamentos = ``
    insumos = ``
    procedimientos = ``
    smi = ``
    ser = ``
    rn = ``
    res = ``

    disabledButtons()
    sendAllTramas(anio_selected,mes_selected)

}

function sendAllTramas(anio,mes){
    
    fetch(`${url}/get-trama-atencion/${anio}/${mes}/${mes}`,{
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

        getTramaDiagnostico(anio,mes)

      }).catch(err => {
        
        console.log(err)
        enableButtonsError()
      }); 

}

function getTramaDiagnostico(anio,mes){

    
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
        getTramaMedicamentos(anio,mes)

      }).catch(err => {
        
        console.log(err)
        enableButtonsError()
      }); 

}

function getTramaMedicamentos(anio,mes){

    
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
      
      getTramaInsumos(anio,mes)

    }).catch(err => {
      
      console.log(err)
      enableButtonsError()
    }); 

}

function getTramaInsumos(anio,mes){

    
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
      getTramaProcedimientos(anio,mes)

    }).catch(err => {
      
      console.log(err)
      enableButtonsError()
    }); 

}

function getTramaProcedimientos(anio,mes){

    
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
      getTramaSmi(anio,mes)

    }).catch(err => {
      
      console.log(err)
      enableButtonsError()
    }); 

}

function getTramaSmi(anio,mes){

    
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
      getTramaSer(anio,mes)

    }).catch(err => {
      
      console.log(err)
      enableButtonsError()
    }); 

}

function getTramaSer(anio,mes){

    
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
      getTramaRn(anio,mes)
      }else{
        getTramaRn(anio,mes)
      }
      
    }).catch(err => {
      
      console.log(err)
      enableButtonsError()
    }); 

}

function getTramaRn(anio,mes){

    
  fetch(`${url}/get-trama-rn/${anio}/${mes}`,{
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
            rn += value+"\n"
        }else{
          rn += value
        }
    });
    
    getLastCorrelative(anio,mes)
      
    }).catch(err => {
      
      console.log(err)
      enableButtonsError()
    }); 

}

function getLastCorrelative(anio,mes){

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
  
      if(x != null){
        correlative = x
        setResum(correlative,anio,mes)
      }else{
        setResum(correlative,anio,mes)
      }
      
      
    }).catch(err => {
      
      console.log(err)
      enableButtonsError()
    }); 

}

function setResum(correlative,anio,mes){

  let codReanes = '00002698'
  let nZip = codReanes+anio+padNumber(mes)+nSend(correlative)+'.zip'

  let data = {
    anio: anio,
    mes : mes,
    nroEnvio:nSend(correlative),
    nZip : nZip,
    dni:dniResp,
    mesP:mes
  }

 
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
      getAtencionResumen(anio,mes,nSend(correlative))

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

function getAtencionResumen(anio,mes,nEnvio){

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
    
    sendTrama(atencion,diagnostico,medicamentos,insumos,procedimientos,smi,ser,rn,res,data[0].NomPaquete)

    
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

function openModalPackage(){
  $('#packageModal').modal('show')
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