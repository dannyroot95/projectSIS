
var params = [] 
var params2 = [] 
var log = ""
var c = 0

createDatatable()
createDatatable2()
createDatatable3()
createDatatable4()
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

function query(){

    c = 0
    document.getElementById("errors").style = "display:none;"
    let mes = document.getElementById("inputGroupSelectProductionMonth")
    let anio = document.getElementById("inputGroupSelectYearSend")
    var mes_selected = mes.value
    var anio_selected = anio.value

    fetchTramaAtencion(mes_selected,anio_selected)
    fetchTramaDiagnostico(mes_selected,anio_selected)
    fetchTramaMedicamentos(mes_selected,anio_selected)
    fetchTramaSMI(mes_selected,anio_selected)
    

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

function insertDataAtencion(data){
  
    
    document.getElementById("tbody").innerHTML = ""
    $('#tb-data').DataTable().destroy()

    $("#tbody").html(data.map((d) => {
        const cells = params.map(param => {

            let log = ""
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
        document.getElementById("logMED").click();
        document.getElementById("logSMI").click();
      }, 500);

      createDatatable()

      document.getElementById("body").style = "display:block;"
      enableButtons()
      if(c>0){
        document.getElementById("errors").style = "display:block;font-weight:bold;color:red;"
        document.getElementById("errors").innerHTML = c.toString()+" errores encontrados!"
      }else{
        document.getElementById("errors").style = "display:block;font-weight:bold;color:green;"
        document.getElementById("errors").innerHTML = "Ningún error encontrado!"
      }
      

}

function insertDataDiagnostico(data){
  
    
    document.getElementById("tbody2").innerHTML = ""
    $('#tb-data-2').DataTable().destroy()

    $("#tbody2").html(data.map((d) => {
        const cells = params2.map(param => {

            let log = ""
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
  
    
    document.getElementById("tbody3").innerHTML = ""
    $('#tb-data-3').DataTable().destroy()

    $("#tbody3").html(data.map((d) => {
        const cells = params2.map(param => {

            let log = ""
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


function disabledButtons(){
loader.style = "display:block;"
document.getElementById("btn-logs").disabled = false
document.getElementById("btn-query").disabled = true
document.getElementById("btn-send").disabled = true
}

function enableButtons(){
loader.style = "display:none;"
document.getElementById("btn-logs").disabled = false
document.getElementById("btn-query").disabled = false
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
        let warning = `${c}.- HISTORIA CLINICA INCORRECTA -> N° DE CUENTA : ${d["A1"]}`
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
        value = `<td class="minText2"><button class="btn btn-danger" onclick="alert('Botón presionado')"><i class="bi bi-eye-fill"></i></button></td>`
    }else{
        value = `<td class="minText2"><button class="btn btn-success" onclick="alert('Botón presionado')"><i class="bi bi-file-check"></i></button></td>`
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