//const { Date } = require("mssql")

var trama1 = ``
var trama2 = ``
var trama3 = ``
var trama4 = ``
let allData = []
let report = []
let report2 = []


createDatatable()
createDatatable2()
createDatatable3()
createDatatable4()
createDatatableSearchProcedure()
createDatatableSearchDiagnosys()
createDatatableSearchDiagnosysByLab()
createDatatableSearchDiagnosysByImg()
createDatatableSearchService()

function createDatatable(){

    $('#tb-data-1').DataTable({
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
       },scrollY: '30vh',scrollX: true, sScrollXInner: "100%",
       scrollCollapse: true,
      });

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

function createDatatableSearchProcedure(){
  $('#tb-data-search-procedure').DataTable({
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
     },scrollY: '28vh',scrollX: true, sScrollXInner: "100%",
     scrollCollapse: true,
    });

    var table = $('#tb-data-search-procedure').DataTable();
    $('#container').css( 'display', 'block' );
    table.columns.adjust().draw();
}

function createDatatableSearchDiagnosys(){
  $('#tb-data-search-diagnosys').DataTable({
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
     },scrollY: '28vh',scrollX: true, sScrollXInner: "100%",
     scrollCollapse: true,
    });

    var table = $('#tb-data-search-diagnosys').DataTable();
    $('#container').css( 'display', 'block' );
    table.columns.adjust().draw();
}

function createDatatableSearchDiagnosysByLab(){
  $('#tb-data-search-diagnosys-by-lab').DataTable({
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
     },scrollY: '28vh',scrollX: true, sScrollXInner: "100%",
     scrollCollapse: true,
    });

    var table = $('#tb-data-search-diagnosys-by-lab').DataTable();
    $('#container').css( 'display', 'block' );
    table.columns.adjust().draw();
}

function createDatatableSearchDiagnosysByImg(){
  $('#tb-data-search-diagnosys-by-img').DataTable({
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
     },scrollY: '28vh',scrollX: true, sScrollXInner: "100%",
     scrollCollapse: true,
    });

    var table = $('#tb-data-search-diagnosys-by-img').DataTable();
    $('#container').css( 'display', 'block' );
    table.columns.adjust().draw();
}


function createDatatableSearchProcedureByLab(){
  $('#tb-data-search-procedure-by-lab').DataTable({
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
     },scrollY: '28vh',scrollX: true, sScrollXInner: "100%",
     scrollCollapse: true,
    });

    var table = $('#tb-data-search-procedure-by-lab').DataTable();
    $('#container').css( 'display', 'block' );
    table.columns.adjust().draw();
}

function createDatatableSearchProcedureByImg(){
  $('#tb-data-search-procedure-by-img').DataTable({
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
     },scrollY: '28vh',scrollX: true, sScrollXInner: "100%",
     scrollCollapse: true,
    });

    var table = $('#tb-data-search-procedure-by-lab').DataTable();
    $('#container').css( 'display', 'block' );
    table.columns.adjust().draw();
}

function createDatatableSearchService(){
  $('#tb-data-search-service').DataTable({
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
     },scrollY: '28vh',scrollX: true, sScrollXInner: "100%",
     scrollCollapse: true,
    });

    var table = $('#tb-data-search-service').DataTable();
    $('#container').css( 'display', 'block' );
    table.columns.adjust().draw();
}



function query(){

  let month = document.getElementById("inputGroupSelectProductionMonth").value
  const { primerDiaMes, ultimoDiaMes } = getDays(month);
  let init = primerDiaMes
  let final = ultimoDiaMes
  fetchTramaSaludpol(init,final)
    //fetchTrama2()
    //fetchTrama3()
    //fetchTrama4()

}

function fetchTramaSaludpol(init,final){

  loader.style = "display:block;"
  disableButtons()

        fetch(`${url}/saludpol/${init}/${final}`,{
            method: 'get',
            headers: {
              'Accept': 'application/json'
            }
        })
          .then(response => response.json())
          .then(data => {
            insertDataTrama1(data[0])
            insertDataTrama2(data[1])
            insertDataTrama3(data[2])
            insertDataTrama4(data[3])
            loader.style = "display:none;"
            enableButtons()
            document.getElementById("btn-trama").style = "display:block;"
            document.getElementById("btn-upload-trama").style = "display:block;"
            document.getElementById("btn-obs").style = "display:block;"
            document.getElementById("btn-report").style = "display:block;"
            document.getElementById("btn-no-ate").style = "display:block;background-color: #49002b;border-color: #49002b;"
          }).catch(err => {
            
            console.log(err)
            enableButtons()
          }); 

}

function fetchTramaSaludpolEx(init,final){

  loader.style = "display:block;"
  disableButtons()

  $('#modalDelete').modal('hide')

        fetch(`${url}/saludpol-excludes/${init}/${final}`,{
            method: 'get',
            headers: {
              'Accept': 'application/json'
            }
        })
          .then(response => response.json())
          .then(data => {
            insertDataTrama1(data[0])
            insertDataTrama2(data[1])
            insertDataTrama3(data[2])
            insertDataTrama4(data[3])
            loader.style = "display:none;"
            enableButtons()
            document.getElementById("btn-trama").style = "display:block;"
            document.getElementById("btn-upload-trama").style = "display:block;"
            document.getElementById("btn-obs").style = "display:block;"
            document.getElementById("btn-report").style = "display:block;"
            document.getElementById("btn-no-ate").style = "display:block;background-color: #49002b;border-color: #49002b;"

          }).catch(err => {
            
            console.log(err)
            enableButtons()
          }); 

}

function fetchTramaSaludpolExAndIn(init,final){

  loader.style = "display:block;"
  disableButtons()

  $('#modalDelete').modal('hide')

        fetch(`${url}/saludpol-excludes-and-includes/${init}/${final}`,{
            method: 'get',
            headers: {
              'Accept': 'application/json'
            }
        })
          .then(response => response.json())
          .then(data => {
            insertDataTrama1(data[0])
            insertDataTrama2(data[1])
            insertDataTrama3(data[2])
            insertDataTrama4(data[3])
            loader.style = "display:none;"
            enableButtons()
            document.getElementById("btn-trama").style = "display:block;"
            document.getElementById("btn-upload-trama").style = "display:block;"
            document.getElementById("btn-obs").style = "display:block;"
            document.getElementById("btn-report").style = "display:block;"
            document.getElementById("btn-no-ate").style = "display:block;background-color: #49002b;border-color: #49002b;"
          }).catch(err => {
            
            console.log(err)
            enableButtons()
          }); 

}

function fetchTramaSaludpolIn(init,final){

  loader.style = "display:block;"
  disableButtons()

  $('#modalDelete').modal('hide')

        fetch(`${url}/saludpol-includes/${init}/${final}`,{
            method: 'get',
            headers: {
              'Accept': 'application/json'
            }
        })
          .then(response => response.json())
          .then(data => {
            insertDataTrama1(data[0])
            insertDataTrama2(data[1])
            insertDataTrama3(data[2])
            insertDataTrama4(data[3])
            loader.style = "display:none;"
            enableButtons()
            document.getElementById("btn-trama").style = "display:block;"
            document.getElementById("btn-upload-trama").style = "display:block;"
            document.getElementById("btn-obs").style = "display:block;"
            document.getElementById("btn-report").style = "display:block;"
            document.getElementById("btn-no-ate").style = "display:block;background-color: #49002b;border-color: #49002b;"
          }).catch(err => {
            
            console.log(err)
            enableButtons()
          }); 

}

function fetchTrama1(){

  fetch(`${url}/saludpol-1`,{
      method: 'get',
      headers: {
        'Accept': 'application/json'
      }
  })
    .then(response => response.json())
    .then(data => {

      insertDataTrama1(data)

    }).catch(err => {
      
      console.log(err)
      enableButtons()
    }); 

}


function insertDataTrama1(data){

  let ctx = 0
  report = []
  report2 = []

  $('#tb-data-1').DataTable().destroy()
  $("#tbody").html(data.map((d) => {

    ctx++
    let color = "white"

    if(d.CAMPO3 == null){
      color = "#FFDFE7"
    }

    report2.push(d.CAMPO2)

    //fetchReportSaludpol(d.CAMPO2)

    let female = `<center><i style="color: #ff2f41;font-size: 20px;font-weight: bolder;" class="bi bi-gender-female"></i>&nbsp;${d.CAMPO8}</center>`
    let male = `<center><i style="color: #001173;font-size: 20px;font-weight: bolder;" class="bi bi-gender-male"></i>&nbsp;${d.CAMPO8}</center>`

    let gender = ''

    if(d.CAMPO11 == 1){
      gender = male
    }else{gender = female}


          return `

          <tr style="cursor: pointer;background-color:${color};">
          <td class="minText2"><input type="checkbox" style="width:30px;height:30px;"></td>
          <td class="minText2"><button onclick="showDetailModal('${encodeURIComponent(JSON.stringify(d))}')" class="btn btn-success"><i class="bi bi-eye-fill"></i></button></td>
          <td class="minText2">${d.CAMPO1}</td>
          <td class="minText2">${d.CAMPO2}</td>
          <td class="minText2">${isDataNull(d.CAMPO3)}</td>
          <td class="minText2">${d.CAMPO4}</td>
          <td class="minText2">${d.CAMPO5}</td>
          <td class="minText2">${d.CAMPO6}</td>
          <td class="minText2">${d.CAMPO7}</td>
          <td class="minText2">${gender}</td>
          <td class="minText2">${d.CAMPO9}</td>
          <td class="minText2">${d.CAMPO10}</td>
          <td class="minText2">${d.CAMPO11}</td>
          <td class="minText2">${d.CAMPO12}</td>
          <td class="minText2">${d.CAMPO13}</td>
          <td class="minText2">${d.CAMPO14}</td>
          <td class="minText2">${d.CAMPO15}</td>
          <td class="minText2">${d.CAMPO16}</td>
          <td class="minText2">${d.CAMPO17}</td>
          <td class="minText2">${d.CAMPO18}</td>
          <td class="minText2">${d.CAMPO19}</td>
          <td class="minText2">${d.CAMPO20}</td>
          <td class="minText2">${d.CAMPO21}</td>
          <td class="minText2">${d.CAMPO22}</td>
          <td class="minText2">${d.CAMPO23}</td>
          <td class="minText2">${d.CAMPO24}</td>
          </tr>`;
      })
      .join("")
  );
  createDatatable()

}

async function fetchWithInterval(urls) {
  for (const id of urls) {
    try {
      // Realiza la solicitud fetch con el ID actual
      const response = await fetch(`${url}/report-saludpol/${id}`); // Reemplaza "URL_BASE" con la URL base de tu API
      
      if (response.ok) {
        // Procesa la respuesta como desees
        const data = await response.json();
        
        for (var i = 0; i < data.length; i++) {
          var item = data[i];
          var newItem = {
            "Prestacion": convertBlank(item.prestacion),
            "N°_Autorizacion": convertBlank(item.Autorizacion),
            "Cuenta": convertBlank(item.idCuentaAtencion),
            "Nombres": convertBlank(item.Nombres),
            "DNI": convertBlank(item.dni),
            "Sexo": convertBlank(item.sexo),
            "Historia": convertBlank(item.HC),
            "Fecha Ingreso": convertBlank(item.fIngreso),
            "Fecha Egreso": convertBlank(item.fEgreso),
            "Medico": convertBlank(item.medico),
            "Servicio": convertBlank(item.ServicioIngreso),
            "Dias_hosp": convertBlank(item.dias_hosp),
            "Dx": convertBlank(item.dx),
            "Diagnostico": convertBlank(item.diagnostico),
            "Tipo de consumo": convertBlank(item.tipo),
            "Codigo": convertBlank(item.Codigo),
            "Consumo": convertBlank(item.Nombre),
            "Cantidad": convertBlank(item.Cantidad),
            "Precio_Unitario": convertBlank('S/'+item.PrecioUnitario),
            "Precio_Total": convertBlank('S/'+item.Precio),
            'Verificacion_convenios':""
        }
        
        report.push(newItem);
      }

      } else {
        console.error(`Error al hacer la solicitud para ID ${id}:`, response.status);
      }
    } catch (error) {
      console.error(`Error al hacer la solicitud para ID ${id}:`, error);
    }

    // Espera 3 segundos antes de la próxima solicitud
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }
}


async function fetchSequentially() {

  let ctx = 0
  disableButtons()
  loader.style = "display:block;"

  for (const id of report2) {
    try {
      // Realiza la solicitud fetch con el ID actual
      const response = await fetch(`${url}/report-saludpol/${id}`); // Reemplaza "URL_BASE" con la URL base de tu API

      if (response.ok) {
        // Procesa la respuesta como desees
        const data = await response.json();

        ctx++

        for (var i = 0; i < data.length; i++) {
          var item = data[i];
          var newItem = {
            "Prestacion": convertBlank(item.prestacion),
            "N°_Autorizacion": convertBlank(item.Autorizacion),
            "Cuenta": convertBlank(item.idCuentaAtencion),
            "Nombres": convertBlank(item.Nombres),
            "DNI": convertBlank(item.dni),
            "Sexo": convertBlank(item.sexo),
            "Historia": convertBlank(item.HC),
            "Fecha Ingreso": convertBlank(item.fIngreso),
            "Fecha Egreso": convertBlank(item.fEgreso),
            "Medico": convertBlank(item.medico),
            "Servicio": convertBlank(item.ServicioIngreso),
            "Dias_hosp": convertBlank(item.dias_hosp),
            "Dx": convertBlank(item.dx),
            "Diagnostico": convertBlank(item.diagnostico),
            "Tipo de consumo": convertBlank(item.tipo),
            "Codigo": convertBlank(item.Codigo),
            "Consumo": convertBlank(item.Nombre),
            "Cantidad": convertBlank(item.Cantidad),
            "Precio_Unitario": convertBlank('S/'+item.PrecioUnitario),
            "Precio_Total": convertBlank('S/'+item.Precio),
            'Verificacion_convenios':""
        }
        
        report.push(newItem);
        }

      } else {
        console.error(`Error al hacer la solicitud para ID ${id}:`, response.status);
      }
    } catch (error) {
      console.error(`Error al hacer la solicitud para ID ${id}:`, error);
    }
  }

  if(report2.length == ctx){
    enableButtons()
    exportToExcel2()
    loader.style = "display:none;"
  }

}


function insertDataTrama2(data){

  let ctx = 0

  $('#tb-data-2').DataTable().destroy()
  $("#tbody2").html(data.map((d) => {

    ctx++
          return `
          <tr style="cursor: pointer;">
          <td class="minText2">${d.CAMPO1}</td>
          <td class="minText2">${d.CAMPO2}</td>
          <td class="minText2">${d.CAMPO3}</td>
          <td class="minText2">${d.CAMPO4}</td>
          </tr>`;
      })
      .join("")
  );
  createDatatable2()
}

function insertDataTrama3(data){

  let ctx = 0

  $('#tb-data-3').DataTable().destroy()
  $("#tbody3").html(data.map((d) => {

    ctx++
          return `
          <tr style="cursor: pointer;">
          <td class="minText2">${d.CAMPO1}</td>
          <td class="minText2">${d.CAMPO2}</td>
          <td class="minText2">${d.CAMPO3}</td>
          <td class="minText2">${d.CAMPO4}</td>
          </tr>`;
      })
      .join("")
  );
  createDatatable3()
}

function insertDataTrama4(data){

  let ctx = 0

  $('#tb-data-4').DataTable().destroy()
  $("#tbody4").html(data.map((d) => {

    let color = "white"

    if(d.CAMPO4 == null || d.CAMPO4 == ""){
      color = "#FFDFE7"
    }

    ctx++
          return `
          <tr style="cursor: pointer;background-color:${color}">
          <td class="minText2">${d.CAMPO1}</td>
          <td class="minText2">${d.CAMPO2}</td>
          <td class="minText2">${d.CAMPO3}</td>
          <td class="minText2">${isDataNull(d.CAMPO4)}</td>
          <td class="minText2">${d.CAMPO5}</td>
          </tr>`;
      })
      .join("")
  );
  createDatatable4()
}

function getDays(mes) {
  // Obtener el año y mes actual
  const fechaActual = new Date();
  const anioActual = fechaActual.getFullYear();

  // Crear una nueva fecha con el año y mes actual, y el día 1
  const primeraFechaMes = new Date(anioActual, mes - 1, 1);

  // Crear una nueva fecha con el año y mes actual, y el día 0 (último día del mes anterior)
  const ultimaFechaMesAnterior = new Date(anioActual, mes - 1, 0);

  // Obtener el último día del mes restando un día a la primera fecha del mes siguiente
  const ultimaFechaMes = new Date(anioActual, mes, 0);

  // Formatear las fechas en el formato yyyy-mm-dd
  const primerDiaMes = `${anioActual}-${(mes < 10 ? "0" + mes : mes)}-01`;
  const ultimoDiaMes = `${anioActual}-${(mes < 10 ? "0" + mes : mes)}-${ultimaFechaMes.getDate()}`;

  return {
    primerDiaMes,
    ultimoDiaMes
  };
}

function disableButtons(){
document.getElementById("btn-query").disabled = true
document.getElementById("btn-deleted").disabled = true
document.getElementById("btn-trama").disabled = true
document.getElementById("btn-upload-trama").disabled = true
document.getElementById("btn-obs").disabled = true
document.getElementById("btn-report").disabled = true
document.getElementById("btn-no-ate").disabled = true
}


function enableButtons(){
  document.getElementById("btn-query").disabled = false
  document.getElementById("btn-deleted").disabled = false
  document.getElementById("btn-trama").disabled = false
  document.getElementById("btn-upload-trama").disabled = false
  document.getElementById("btn-obs").disabled = false
  document.getElementById("btn-report").disabled = false
  document.getElementById("btn-no-ate").disabled = false

}

function showModalDeleteAccount(){
  $('#modalDelete').modal('show')
}

function addToTable(){

  let n = document.getElementById("nAccount").value;

  if (n != "") {
    let table = document.getElementById('tb-data-accounts-in');
    let tbody = table.getElementsByTagName('tbody')[0];
    let rowS = tbody.getElementsByTagName('tr');

    //---

    let table2 = document.getElementById('tb-data-accounts');
    let tbody2 = table2.getElementsByTagName('tbody')[0];
    let rowS2 = tbody2.getElementsByTagName('tr');

    // Verificar si el valor ya existe en alguna fila
    let exist = false;
    for (let i = 0; i < rowS.length; i++) {
      let cell = rowS[i].getElementsByTagName('td')[0];
      let valueCell = cell.innerText || cell.textContent;
      if (valueCell.trim() === n.trim()) {
        exist = true;
        break;
      }
    }

    for (let i = 0; i < rowS2.length; i++) {
      let cell = rowS2[i].getElementsByTagName('td')[0];
      let valueCell = cell.innerText || cell.textContent;
      if (valueCell.trim() === n.trim()) {
        exist = true;
        break;
      }
    }

    if (exist) {
      Swal.fire(
        'Oops!',
        'El número de cuenta ya existe en la tabla!',
        'info'
      );
    } else {
      let td =
        `<tr>
          <td> <center>${n}</center></td>
          <td><center>
          <button onclick="deleteItem(this)" class="btn btn-danger">Eliminar</button>
          </center></td>
        </tr>`;
      $(td).appendTo('#tbodyAccount');
      document.getElementById("nAccount").value = "";
    }
  } else {
    Swal.fire(
      'Oops!',
      'Ingrese el número de cuenta!',
      'info'
    );
  }
}

function addToTableIn(){

  let n = document.getElementById("nAccount").value;

  if (n != "") {

    let table = document.getElementById('tb-data-accounts');
    let tbody = table.getElementsByTagName('tbody')[0];
    let rowS = tbody.getElementsByTagName('tr');

    //---

    let table2 = document.getElementById('tb-data-accounts-in');
    let tbody2 = table2.getElementsByTagName('tbody')[0];
    let rowS2 = tbody2.getElementsByTagName('tr');

    // Verificar si el valor ya existe en alguna fila
    let exist = false;
    for (let i = 0; i < rowS.length; i++) {
      let cell = rowS[i].getElementsByTagName('td')[0];
      let valueCell = cell.innerText || cell.textContent;
      if (valueCell.trim() === n.trim()) {
        exist = true;
        break;
      }
    }

    for (let i = 0; i < rowS2.length; i++) {
      let cell = rowS2[i].getElementsByTagName('td')[0];
      let valueCell = cell.innerText || cell.textContent;
      if (valueCell.trim() === n.trim()) {
        exist = true;
        break;
      }
    }

    if (exist) {
      Swal.fire(
        'Oops!',
        'El número de cuenta ya existe en la tabla!',
        'info'
      );
    } else {
      let td =
        `<tr>
          <td> <center>${n}</center></td>
          <td><center>
          <button onclick="deleteItem(this)" class="btn btn-danger">Eliminar</button>
          </center></td>
        </tr>`;
      $(td).appendTo('#tbodyAccountIn');
      document.getElementById("nAccount").value = "";
    }
  } else {
    Swal.fire(
      'Oops!',
      'Ingrese el número de cuenta!',
      'info'
    );
  }
}

function deleteItem(button){
  var row = button.parentNode.parentNode.parentNode; // Obtener la fila que contiene el botón
  row.parentNode.removeChild(row);
}

function consult() {
  var table = document.getElementById('tb-data-accounts');
  var tbody = table.getElementsByTagName('tbody')[0];

  var table2 = document.getElementById('tb-data-accounts-in');
  var tbody2 = table2.getElementsByTagName('tbody')[0];
  
  if(isEmptyEx() && isEmptyIn()){
    Swal.fire(
      'Oops!',
      'La tabla está vacía!',
      'info'
    )
  }else if (!isEmptyEx() && isEmptyIn()){

    var values = [];
  
      // Recorrer las filas de la tabla
      for (var i = 0; i < tbody.rows.length; i++) {
        var row = tbody.rows[i];
        var cell = row.cells[0]; // Primera celda de la fila
        
        // Obtener el valor y agregarlo al arreglo
        var val = cell.innerText || cell.textContent;
        values.push(val.trim());
        
      }
      
      // Generar el objeto JSON de ejemplo
      var json = {
        "values": values
      };

    fetchTramaSaludpolExcludes(json)
  }else if (isEmptyEx() && !isEmptyIn()){

    var values = [];
  
      // Recorrer las filas de la tabla
      for (var i = 0; i < tbody2.rows.length; i++) {
        var row = tbody2.rows[i];
        var cell = row.cells[0]; // Primera celda de la fila
        
        // Obtener el valor y agregarlo al arreglo
        var val = cell.innerText || cell.textContent;
        values.push(val.trim());
        
      }
      
      // Generar el objeto JSON de ejemplo
      var json = {
        "values": values
      };

    fetchTramaSaludpolIncludes(json)
  }else{

      var values = [];
      var values2 = [];
  
      // Recorrer las filas de la tabla

      for (var i = 0; i < tbody.rows.length; i++) {
        var row = tbody.rows[i];
        var cell = row.cells[0]; // Primera celda de la fila
        
        // Obtener el valor y agregarlo al arreglo
        var val = cell.innerText || cell.textContent;
        values.push(val.trim());
        
      }

      for (var i = 0; i < tbody2.rows.length; i++) {
        var row = tbody2.rows[i];
        var cell = row.cells[0]; // Primera celda de la fila
        
        // Obtener el valor y agregarlo al arreglo
        var val = cell.innerText || cell.textContent;
        values2.push(val.trim());
        
      }
      
      // Generar el objeto JSON de ejemplo
      var json = {
        "values": values
      };
      var json2 = {
        "values": values2
      };

    fetchTramaSaludpolExcludesAndIncludes(json,json2)

  }


  // Realizar la acción deseada con el objeto JSON
  
}

function fetchTramaSaludpolExcludes(json){


  fetch(`${url}/excludes/`, {
    method: 'POST', // o 'PUT', 'DELETE', etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json) // data es un objeto con los datos a enviar
  })
  .then(response => response.json())
  .then(data => {
     if(data.success == "insertado"){
      
      let month = document.getElementById("inputGroupSelectProductionMonth").value
      const { primerDiaMes, ultimoDiaMes } = getDays(month);
      let init = primerDiaMes
      let final = ultimoDiaMes
      fetchTramaSaludpolEx(init,final)

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

}

function fetchTramaSaludpolExcludesAndIncludes(json,json2){


  fetch(`${url}/excludes/`, {
    method: 'POST', // o 'PUT', 'DELETE', etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json) // data es un objeto con los datos a enviar
  })
  .then(response => response.json())
  .then(data => {
     if(data.success == "insertado"){

      fetch(`${url}/includes/`, {
        method: 'POST', // o 'PUT', 'DELETE', etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(json2) // data es un objeto con los datos a enviar
      })
      .then(response => response.json())
      .then(data => {
         if(data.success == "insertado"){
    
    
          let month = document.getElementById("inputGroupSelectProductionMonth").value
          const { primerDiaMes, ultimoDiaMes } = getDays(month);
          let init = primerDiaMes
          let final = ultimoDiaMes
          fetchTramaSaludpolExAndIn(init,final)
    
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

}

function fetchTramaSaludpolIncludes(json){


  fetch(`${url}/includes/`, {
    method: 'POST', // o 'PUT', 'DELETE', etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json) // data es un objeto con los datos a enviar
  })
  .then(response => response.json())
  .then(data => {
     if(data.success == "insertado"){
      
      let month = document.getElementById("inputGroupSelectProductionMonth").value
      const { primerDiaMes, ultimoDiaMes } = getDays(month);
      let init = primerDiaMes
      let final = ultimoDiaMes
      fetchTramaSaludpolIn(init,final)

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

}

function isEmptyEx() {
  var table = document.getElementById('tb-data-accounts');
  var tbody = table.getElementsByTagName('tbody')[0];
  
  return tbody.rows.length === 0;
}

function isEmptyIn() {
  var table = document.getElementById('tb-data-accounts-in');
  var tbody = table.getElementsByTagName('tbody')[0];
  
  return tbody.rows.length === 0;
}

function buildTrama(){

  loader.style = "display:block;"
  disableButtons()

        fetch(`${url}/trama-saludpol`,{
            method: 'get',
            headers: {
              'Accept': 'application/json'
            }
        })
          .then(response => response.json())
          .then(data => {
            
            let ctx = 0
            let ctx2 = 0
            let ctx3 = 0
            let ctx4 = 0
            let trama1 = ""
            let trama2 = ""
            let trama3 = ""
            let trama4 = ""

            data[0].forEach(e => {
              let value = e.Items
              ctx++
              if(value != null){
              if(data[0].length != ctx){
                trama1 += value+"\n"
              }else{
                trama1 += value
              }}
          });

          data[1].forEach(e => {
            let value = e.Items
            ctx2++
            if(value != null){
            if(data[1].length != ctx2){
              trama2 += value+"\n"
            }else{
              trama2 += value
            }}
        });

        data[2].forEach(e => {
          let value = e.Items
          ctx3++
          if(value != null){
          if(data[2].length != ctx3){
            trama3 += value+"\n"
          }else{
            trama3 += value
          }}
      });

      data[3].forEach(e => {
        let value = e.Items
        ctx4++
        if(value != null){
        if(data[3].length != ctx4){
          trama4 += value+"\n"
        }else{
          trama4 += value
        }}
    });
          
            loader.style = "display:none;"
            enableButtons()

            const selectElement = document.getElementById('inputGroupSelectProductionMonth');
            const selectedIndex = selectElement.selectedIndex;
            const m = selectElement.options[selectedIndex].text;

            downloadFile(trama1, 'trama1-'+m+'.txt');
            downloadFile(trama2, 'trama2-'+m+'.txt');
            downloadFile(trama3, 'trama3-'+m+'.txt');
            downloadFile(trama4, 'trama4-'+m+'.txt');
            
          }).catch(err => {
            
            console.log(err)
            enableButtons()
          }); 

}

function downloadFile(content, fileName) {
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(new Blob([content], { type: 'text/plain' }));
  downloadLink.download = fileName;
  downloadLink.click();
}


$('#modalDelete').on('hidden.bs.modal', function (e) {
  //document.getElementById("tbodyAccount").innerHTML = ""
  //document.getElementById("tbodyAccountIn").innerHTML = ""
  document.getElementById("nAccount").value = "";
})

function showDetailModal(d){
  $('#detailModal').modal('show')
  d = JSON.parse(decodeURIComponent(d))

  document.getElementById("loaderDetails").style = "display:block;"
  document.getElementById("tbodyDiag").innerHTML = ''
  document.getElementById("tbodyPro").innerHTML = ''
  document.getElementById("tbodyLab").innerHTML = ''
  document.getElementById("tbodyImg").innerHTML = ''
  document.getElementById("tbodyMed").innerHTML = ''
  document.getElementById("tbodyIns").innerHTML = ''
  document.getElementById("div-details").style="display: none;"
  document.getElementById("btn-edit-account").style="display: none;"


  getDataClientSaludpol(d)
  
  //xdddd

}

function obtenerDatos() {
  var table = $('#tb-data-1').DataTable();
  allData = []

  var checkboxes = table.column(0).nodes().to$().find('input[type="checkbox"]');
  var isChecked = false;

  checkboxes.each(function() {
    if (this.checked) {
      isChecked = true;
      return false; // Sale del bucle cuando encuentra un checkbox marcado
    }
  });

  if (!isChecked) {
    Swal.fire(
      'Oops!',
      'Debe seleccionar al menos un item!',
      'error'
    )
    return;
  }

  table.rows({selected: true}).every(function() {
    var rowData = this.data();
    var checkbox = $(this.node()).find("input[type='checkbox']");
    
    if (checkbox.prop("checked")) {
      var celda3 = rowData[2];
      var celda4 = rowData[3];
      var celda7 = rowData[6];
      var celda8 = rowData[7];
      var celda9 = rowData[8];
      var celda10 = rowData[9];
      var celda15 = rowData[14];
      var celda16 = rowData[15];
      var celda19 = rowData[18];
      var celda20 = rowData[19];
      var celda21 = rowData[20];

      allData.push({
        "Prestacion": celda3,
        "Cuenta": celda4,
        "Paciente": celda8 + " " + celda9 + " " + celda10,
        "DNI": celda7,
        "Fecha de ingreso": celda15,
        "Fecha de egreso": celda16,
        "Médico": celda19 + " " + celda20 + " " + celda21,
        "Observacion": "",
        "Digitador": ""
      });
    }
  });
  exportToExcel()  
}

function exportToExcel(){

  Swal.fire({
      title: 'En breves se descargará el archivo!',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      },
    })


  let xls = new XlsExport(allData, 'reporte');
  xls.exportToXLS('informe-de-observacion-saludpol.xls')
}

function dateNull(y){

  let x = `<b style="color:red;">Sin registro</b>`

  if(y != null){
    x =  date(y)
  }

  return x

}

function isDataNull(data){
  let x = data

  if(x == null || x == ""){
    x = `<b style="color:red;">Sin registro</b>`
  }

  return x
}

/*
function fetchReportSaludpol(n) {
  return new Promise((resolve, reject) => {
    fetch(`${url}/report-saludpol/${n}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const report = [];
        for (var i = 0; i < data.length; i++) {
          var item = data[i];
          var newItem = {
            "Prestacion": convertBlank(item.prestacion),
            "N°_Autorizacion": convertBlank(item.Autorizacion),
            "Cuenta": convertBlank(item.idCuentaAtencion),
            "Nombres": convertBlank(item.Nombres),
            "DNI": convertBlank(item.dni),
            "Sexo": convertBlank(item.sexo),
            "Historia": convertBlank(item.HC),
            "Fecha Ingreso": convertBlank(item.fIngreso),
            "Fecha Egreso": convertBlank(item.fEgreso),
            "Medico": convertBlank(item.medico),
            "Servicio": convertBlank(item.ServicioIngreso),
            "Dias_hosp": convertBlank(item.dias_hosp),
            "Dx": convertBlank(item.dx),
            "Diagnostico": convertBlank(item.diagnostico),
            "Tipo de consumo": convertBlank(item.tipo),
            "Codigo": convertBlank(item.Codigo),
            "Consumo": convertBlank(item.Nombre),
            "Cantidad": convertBlank(item.Cantidad),
            "Precio_Unitario": convertBlank('S/'+item.PrecioUnitario),
            "Precio_Total": convertBlank('S/'+item.Precio),
            'Verificacion_convenios': ""
          };
          report.push(newItem);
        }
        resolve(report);
      })
      .catch(err => {
        reject(err);
      });
  });
}*/

function convertBlank(value){
  x = value
  if(value == null || value == "S/null"){
    x = '-'
  }else if(value == 0){
    x = '0'
  }


  return x

}

function exportToExcel2(){

  Swal.fire({
      title: 'En breves se descargará el archivo!',
      timer: 3000,
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

  let xls = new XlsExport(report, 'reporte');
  xls.exportToXLS(`reporte_saludpol_${actual}.xls`)
}

function showModalDetailProcedure(data,index,type){
  data = JSON.parse(decodeURIComponent(data))
  $('#detailProcedure').modal('show')

  let procedureType = type

  document.getElementById("id-detail-procedure").innerHTML = ''
  document.getElementById("id-detail-code").innerHTML = ''
  document.getElementById("detail-procedure-quantity").value = ''
  document.getElementById("id-order").innerHTML = ''
  document.getElementById("id-product").innerHTML = ''
  document.getElementById("index-pro").innerHTML = ''

  let account =  document.getElementById("d-account").innerHTML

  let code = data.Codigo  
  let procedure = (data.Nombre).trimEnd()

  if(procedureType == '1'){
    document.getElementById("staticBackdropLabel").innerHTML = 'Detalle de procedimiento'
    var tabla = document.getElementById("tb-data-pro");
    var filaIndex = index; // Índice de la fila a actualizar (por ejemplo, la primera fila)
    var columnaIndex = 2; 
    let quantity = tabla.rows[filaIndex].cells[columnaIndex].textContent;
  
    document.getElementById("loader-procedure-detail").style = "display:block;"
  
    fetch(`${url}/get-id-procedure/${account}/${data.Nombre}`)
              .then(response => response.json())
              .then(data => {
               
                document.getElementById("loader-procedure-detail").style = "display:none;"
                document.getElementById("id-detail-procedure").innerHTML = procedure
                document.getElementById("id-detail-code").innerHTML = code
                document.getElementById("detail-procedure-quantity").value = quantity
                document.getElementById("id-order").innerHTML = data[0].idOrden
                document.getElementById("id-product").innerHTML = data[0].IdProducto
                document.getElementById("index-pro").innerHTML = index
  
              }).catch(err =>{
                  console.log(err)
              } );
              
  }else if(procedureType == '2'){
  document.getElementById("staticBackdropLabel").innerHTML = 'Detalle de laboratorio'
  var tabla = document.getElementById("tb-data-lab");
  var filaIndex = index; // Índice de la fila a actualizar (por ejemplo, la primera fila)
  var columnaIndex = 2; 
  let quantity = tabla.rows[filaIndex].cells[columnaIndex].textContent;

  document.getElementById("loader-procedure-detail").style = "display:block;"

  fetch(`${url}/get-id-laboratory/${account}/${(data.Nombre).trimEnd()}`)
            .then(response => response.json())
            .then(data => {
             

              document.getElementById("loader-procedure-detail").style = "display:none;"

              document.getElementById("id-detail-procedure").innerHTML = procedure
              document.getElementById("id-detail-code").innerHTML = code
              document.getElementById("detail-procedure-quantity").value = quantity

              document.getElementById("id-order").innerHTML = data[0].idOrden
              document.getElementById("id-product").innerHTML = data[0].IdProducto

              document.getElementById("index-pro").innerHTML = index

            }).catch(err =>{
                console.log(err)
            } );

  }else if(procedureType == '3'){
  document.getElementById("staticBackdropLabel").innerHTML = 'Detalle de imagenes'
  var tabla = document.getElementById("tb-data-img");
  var filaIndex = index; // Índice de la fila a actualizar (por ejemplo, la primera fila)
  var columnaIndex = 2; 
  let quantity = tabla.rows[filaIndex].cells[columnaIndex].textContent;

  document.getElementById("loader-procedure-detail").style = "display:block;"

  let x = {
    account : account,
    image : (data.Nombre).trimEnd()
  }

  fetch(`${url}/get-id-image`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(x)
  })
            .then(response => response.json())
            .then(data => {
             

              document.getElementById("loader-procedure-detail").style = "display:none;"

              document.getElementById("id-detail-procedure").innerHTML = procedure
              document.getElementById("id-detail-code").innerHTML = code
              document.getElementById("detail-procedure-quantity").value = quantity

              document.getElementById("id-order").innerHTML = data[0].idOrden
              document.getElementById("id-product").innerHTML = data[0].IdProducto

              document.getElementById("index-pro").innerHTML = index

            }).catch(err =>{
                console.log(err)
            } );

  }

  
}


function updateQuantityProcedure(){

  let quantity = document.getElementById("detail-procedure-quantity").value
  let idProduct = document.getElementById("id-product").innerHTML
  let idOrder = document.getElementById("id-order").innerHTML

  if(quantity != "" && quantity != 0){
    fetch(`${url}/update-quantity-procedure/${quantity}/${idProduct}/${idOrder}`)
    .then(response => response.json())
    .then(data => {
     
      if(data[0].success = "actualizado"){
        Swal.fire(
          'Muy bien!',
          'Cantidad de procedimiento actualizada!',
          'success'
        )

        updateDetailAccount()

      }else{
        Swal.fire(
          'Oops!',
          'Ocurrió un error!',
          'error'
        )
      }
      
    }).catch(err =>{
        console.log(err)
    } );
  }else{
    Swal.fire(
      'Oops!',
      'Ingrese una cantidad!',
      'info'
    )
  }

}

function showModalEditAccount(){

  $('#editAccount').modal('show')
  getAndUpdateGender()

  document.getElementById("ed-doc-auth").value = ""
  document.getElementById("et-f-in").value = ""
  document.getElementById("et-f-out").value = ""
  document.getElementById("ed-dni").value = ""

  let account = document.getElementById("d-account").innerHTML
  let doc_auth = (document.getElementById("d-auth").innerHTML).toString()
  let dni = document.getElementById("d-dni").innerHTML
  let gender = document.getElementById("d-sex")
  let d_in = (document.getElementById("d-fi").innerHTML).toString()
  let d_out = (document.getElementById("d-fe").innerHTML).toString()

  let date1ISO = d_in.split("/").reverse().join("-")
  let date2ISO = d_out.split("/").reverse().join("-")

  let service = document.getElementById("d-svi").innerHTML
  let idService = document.getElementById("d-id-svi").innerHTML

  let service2 = document.getElementById("d-sve").innerHTML
  let idService2 = document.getElementById("d-id-sve").innerHTML

  document.getElementById("et-f-in").value = date1ISO
  document.getElementById("et-f-out").value = date2ISO

  document.getElementById("ed-account").innerHTML = account

  if(doc_auth != ""){
    document.getElementById("ed-doc-auth").value = doc_auth
  }

  if(dni != ""){
    document.getElementById("ed-dni").value = dni
  }

  document.getElementById("ed-service").value = service
  document.getElementById("id-ed-service").value = idService

  document.getElementById("ed-service-2").value = service2
  document.getElementById("id-ed-service-2").value = idService2

  if(gender.textContent.includes("Femenino")){
    document.getElementById("femaleCheckbox").checked = true
    document.getElementById("maleCheckbox").checked = false

  }else{
    document.getElementById("femaleCheckbox").checked = false
    document.getElementById("maleCheckbox").checked = true
}

}

function getAndUpdateGender() {
 
  var masculinoCheckbox = document.getElementById("maleCheckbox");
  var femeninoCheckbox = document.getElementById("femaleCheckbox");

  masculinoCheckbox.addEventListener("change", function() {
    if (masculinoCheckbox.checked) {
      femeninoCheckbox.checked = false
      
    }
  });

  femeninoCheckbox.addEventListener("change", function() {
    if (femeninoCheckbox.checked) {
      masculinoCheckbox.checked = false
      
     
    }
  });
  
}

function updateDniPatient(){
   let id_patient = (document.getElementById("d-id-patient").innerHTML).toString()
   let dni = document.getElementById("ed-dni").value

   if(dni != "" && dni.length == 8){

    fetch(`${url}/update-dni-patient/${dni}/${id_patient}`)
            .then(response => response.json())
            .then(data => {

              let response = data[0]

              if(response.success == "actualizado"){
                Swal.fire(
                  'Muy bien!',
                  'DNI actualizado!',
                  'success'
                )
                document.getElementById("d-dni").innerHTML = dni
              }else{
                Swal.fire(
                  'Oops!',
                  'Ocurrió un error!',
                  'error'
                )
              }
            
            }).catch(err =>{
                console.log(err)
                Swal.fire(
                  'Oops!',
                  'Ocurrió un error!',
                  'error'
                )
            } );


   }else{
    Swal.fire(
      'Oops!',
      'Ingrese un DNI válido!',
      'info'
    )
   }

}

function updateGenderPatient(){

  let id_patient = (document.getElementById("d-id-patient").innerHTML).toString()
  let chkMale = document.getElementById("maleCheckbox").checked
  let chkFamale = document.getElementById("femaleCheckbox").checked
  let value = 0

   if(chkMale == false && chkFamale == false){
    Swal.fire(
      'Oops!',
      'Seleccione un género!',
      'info'
    )
   }else if(chkMale == true && chkFamale == false){
    value = 1
    fetchUpdateGenderPatient(id_patient,value)
   }else if(chkMale == false && chkFamale == true){
    value = 2
    fetchUpdateGenderPatient(id_patient,value)
   }


}

function fetchUpdateGenderPatient(id_patient,gender){

  let change = ``

  fetch(`${url}/update-gender-patient/${gender}/${id_patient}`)
            .then(response => response.json())
            .then(data => {

              let response = data[0]

              if(response.success == "actualizado"){
                Swal.fire(
                  'Muy bien!',
                  'Género actualizado!',
                  'success'
                )
                
                if(gender == 1){
                  change = `<i style="color: #001173;font-size: 30px;font-weight: bolder;" class="bi bi-gender-male"></i>&nbsp;<label>Masculino</label>`
                }else{ change = `<i style="color: #ff2f41;font-size: 30px;font-weight: bolder;" class="bi bi-gender-female"></i>&nbsp;<label>Femenino</label>`}
              
                document.getElementById("d-sex").innerHTML = change

              }else{
                Swal.fire(
                  'Oops!',
                  'Ocurrió un error!',
                  'error'
                )
              }
            
            }).catch(err =>{
                console.log(err)
                Swal.fire(
                  'Oops!',
                  'Ocurrió un error!',
                  'error'
                )
            } );
          }


 function updateDate(){

  let id_account = (document.getElementById("d-id-atention").innerHTML).toString()

  let date1 = document.getElementById("et-f-in").value
  let date2 = document.getElementById("et-f-out").value

  if(date1 != "" && date2 != ""){
    date1 = date1+" 00:00:00.000"
    date2 = date2+" 00:00:00.000"
    fetchUpdateDateAtention(id_account,date1,date2)
  }else{
    Swal.fire(
      'Oops!',
      'Seleccione las fechas!',
      'info'
    )
  }

 }         


 function fetchUpdateDateAtention(account,date1,date2){

  fetch(`${url}/update-date-atention/${account}/${date1}/${date2}`)
            .then(response => response.json())
            .then(data => {

              let response = data[0]

              if(response.success == "actualizado"){
                Swal.fire(
                  'Muy bien!',
                  'Fecha actualizada!',
                  'success'
                )
                
               document.getElementById("d-fi").innerHTML = date(date1)
               document.getElementById("d-fe").innerHTML = date(date2)

              }else{
                Swal.fire(
                  'Oops!',
                  'Ocurrió un error!',
                  'error'
                )
              }
            
            }).catch(err =>{
                console.log(err)
                Swal.fire(
                  'Oops!',
                  'Ocurrió un error!',
                  'error'
                )
            } );

 }

 function updateNroCodeOrigin(){

  let id_atention = (document.getElementById("d-id-atention").innerHTML).toString()
  let code = document.getElementById("ed-doc-auth").value
  let year = new Date()
  year = year.getFullYear()

  if(code != ""){

    //alert(id_atention+" "+code)

    fetch(`${url}/update-nro-ref-origin/${id_atention}/${code}`)
    .then(response => response.json())
    .then(data => {

      let response = data[0]

      if(response.success == "actualizado"){
        Swal.fire(
          'Muy bien!',
          'Doc. de autorización actualizado!',
          'success'
        )
        
        document.getElementById("d-auth").innerHTML = 'CV003-1601-'+year+'0000000'+code

      }else{
        Swal.fire(
          'Oops!',
          'Ocurrió un error!',
          'error'
        )
      }
    
    }).catch(err =>{
        console.log(err)
        Swal.fire(
          'Oops!',
          'Ocurrió un error!',
          'error'
        )
    } );

  }else{
    Swal.fire(
      'Oops!',
      'Ingrese de número!',
      'info'
    )
  }

}

function modalDeleteProcedure(){
  Swal.fire({
    title: 'Estas seguro de eliminar este item?',
    showCancelButton: true,
    confirmButtonText: 'Si',
    cancelButtonText : 'Cancelar'
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Eliminado!', '', 'success')
      deleteProcedure()
    }
  })
}

function deleteProcedure(){

  let account = document.getElementById("d-account").innerHTML 
  let order = document.getElementById("id-order").innerHTML 
  let id_product = document.getElementById("id-product").innerHTML
  let index = document.getElementById("index-pro").innerHTML
  let type = document.getElementById("staticBackdropLabel").innerHTML
  let table 

  if(type == "Detalle de laboratorio"){

    table = document.getElementById("tb-data-lab")
    const numReg = table.rows.length;

    if(numReg > 1){
  
    fetch(`${url}/delete-laboratory-saludpol/${order}/${id_product}/${account}`)
      .then(response => response.json())
      .then(data => {
  
        let response = data[0]
  
        if(response.success == "eliminado"){
  
        updateDetailAccount()
        table.deleteRow(index)
        $('#detailProcedure').modal('hide')
  
          Swal.fire(
            'Muy bien!',
            'El procedimiento ha sido eliminado!',
            'success'
          )
  
        }else{
          Swal.fire(
            'Oops!',
            'Ocurrió un error!',
            'error'
          )
        }
      
      }).catch(err =>{
          console.log(err)
          Swal.fire(
            'Oops!',
            'Ocurrió un error!',
            'error'
          )
      } );
    
  
      }else{
        Swal.fire(
          'Oops!',
          'Debe tener al menos un laboratorio!',
          'info'
        )
      }
  
  }else if(type == "Detalle de procedimiento"){

    table = document.getElementById("tb-data-pro")
    const numReg = table.rows.length;
  
    if(numReg > 2){
  
    fetch(`${url}/delete-procedure-saludpol/${order}/${id_product}/${account}`)
      .then(response => response.json())
      .then(data => {
  
        let response = data[0]
  
        if(response.success == "eliminado"){
  
        updateDetailAccount()
        table.deleteRow(index)
        $('#detailProcedure').modal('hide')
  
          Swal.fire(
            'Muy bien!',
            'El procedimiento ha sido eliminado!',
            'success'
          )
  
        }else{
          Swal.fire(
            'Oops!',
            'Ocurrió un error!',
            'error'
          )
        }
      
      }).catch(err =>{
          console.log(err)
          Swal.fire(
            'Oops!',
            'Ocurrió un error!',
            'error'
          )
      } );
    
  
      }else{
        Swal.fire(
          'Oops!',
          'Debe tener al menos un procedimiento!',
          'info'
        )
      }
  
  }else if(type == "Detalle de imagenes"){

    table = document.getElementById("tb-data-img")
    const numReg = table.rows.length;

    if(numReg > 1){
  
    fetch(`${url}/delete-images-saludpol/${order}/${id_product}/${account}`)
      .then(response => response.json())
      .then(data => {
  
        let response = data[0]
  
        if(response.success == "eliminado"){
  
        updateDetailAccount()
        table.deleteRow(index)
        $('#detailProcedure').modal('hide')
  
          Swal.fire(
            'Muy bien!',
            'El procedimiento ha sido eliminado!',
            'success'
          )
  
        }else{
          Swal.fire(
            'Oops!',
            'Ocurrió un error!',
            'error'
          )
        }
      
      }).catch(err =>{
          console.log(err)
          Swal.fire(
            'Oops!',
            'Ocurrió un error!',
            'error'
          )
      } );
    
  
      }else{
        Swal.fire(
          'Oops!',
          'Debe tener al menos un laboratorio!',
          'info'
        )
      }
  
  }


}

function getDataClientSaludpol(d){

  let ctxPro = 0
  let ctxLab = 0
  let ctxImg = 0
  let gender = ``


  fetch(`${url}/get-atention-saludpol/${d.CAMPO2}`)
            .then(response => response.json())
            .then(data => {

              let t_pro = 0.0
              let t_lab = 0.0
              let t_img = 0.0
              let t_med = 0.0
              let t_ins = 0.0

              if(d.CAMPO11 == 1){
                gender = `<i style="color: #001173;font-size: 30px;font-weight: bolder;" class="bi bi-gender-male"></i>&nbsp;`
              }else{ gender = `<i style="color: #ff2f41;font-size: 30px;font-weight: bolder;" class="bi bi-gender-female"></i>&nbsp;`}
            

              document.getElementById("d-ate").innerHTML = data[0][0].TipoServicio
              document.getElementById("d-auth").innerHTML = data[0][0].Autorizacion
              document.getElementById("d-account").innerHTML = data[0][0].idCuentaAtencion
              document.getElementById("d-fua").innerHTML = isDataNull(data[0][0].Autorizacion)
              document.getElementById("d-history").innerHTML = data[0][0].NroHistoriaClinica
              
              document.getElementById("d-dni").innerHTML = data[0][0].NroDocumento
              document.getElementById("d-fullname").innerHTML = data[0][0].Nombres
              document.getElementById("d-sex").innerHTML = gender+data[0][0].Sexo
              document.getElementById("d-nac").innerHTML = ((data[0][0].FechaNacimiento).split("T")[0]).split("-")[2]+'-'+((data[0][0].FechaNacimiento).split("T")[0]).split("-")[1]+'-'+((data[0][0].FechaNacimiento).split("T")[0]).split("-")[0]
              document.getElementById("d-age").innerHTML = data[0][0].Edad
              document.getElementById("d-id-patient").innerHTML = data[0][0].IdPaciente
              document.getElementById("d-id-atention").innerHTML = data[0][0].IdAtencion

              document.getElementById("d-svi").innerHTML = data[0][0].ServicioIngreso
              document.getElementById("d-id-svi").innerHTML = data[0][0].IdServicioIngreso
              document.getElementById("d-sve").innerHTML = data[0][0].ServicioEgreso
              document.getElementById("d-id-sve").innerHTML = data[0][0].IdServicioEgreso
              document.getElementById("d-svi").innerHTML = data[0][0].ServicioIngreso
              document.getElementById("d-fi").innerHTML = data[0][0].FechaIngreso
              document.getElementById("d-fe").innerHTML = data[0][0].FechaEgreso

              document.getElementById("d-dig").innerHTML = isDataNull(data[0][0].Empleado)
              document.getElementById("d-ff").innerHTML = data[0][0].FuenteFinanciamiento
              document.getElementById("d-tipo-ff").innerHTML = data[0][0].IdTipoFinanciamiento
              document.getElementById("d-id-ff").innerHTML = data[0][0].IdFuenteFinanciamiento

              document.getElementById("d-fur").innerHTML = dateNull(data[0][0].F_ultima_receta)

              document.getElementById("d-id-medico").innerHTML = data[0][0].medico
              document.getElementById("d-id-medic-col").innerHTML = data[0][0].Colegiatura

              document.getElementById("loaderDetails").style = "display:none;"
              document.getElementById("div-details").style = "display:block;"
              document.getElementById("btn-edit-account").style="display: block;"
              
              $("#tbodyDiag").html(data[1].map((d) => {
                
                      return `
                      <tr>
                      <td>${d.IdClasificacionDx}</td>
                      <td>${d.CodigoCIE2004}</td>
                      <td>${d.Descripcion}</td>
                      <td><center><button style="background-color:red;border-color:red;" onclick="showModalDeleteDiagnosys('${d.IdAtencionDiagnostico}')" class="btn btn-dark">X</button></center></td>
                      </tr>`;
    
                  })
                  .join("")
              );

              $("#tbodyPro").html(data[2].map((d) => {
                
                ctxPro++

                t_pro += parseFloat((d.Precio))

                      return `
                      <tr>
                      <td>${d.Codigo}</td>
                      <td>${(d.Nombre).trimEnd()}</td>
                      <td>${d.Cantidad}</td>
                      <td>${d.PrecioUnitario}</td>
                      <td>${d.Precio}</td>
                      <td><center><button style="background-color:#d3a202;border-color:#d3a202;color:black;" onclick="showModalDetailProcedure('${encodeURIComponent(JSON.stringify(d))}','${ctxPro}','1')" class="btn btn-dark"><i class="bi bi-pencil-square"></i></button></center></td>
                      </tr>`;

                  })
                  .join("")
              );
              document.getElementById("t-pro").innerHTML = t_pro.toFixed(2).toString()

              $("#tbodyLab").html(data[3].map((d) => {

                ctxLab++
                t_lab += parseFloat((d.Precio))
                
                      return `
                      <tr>
                      <td>${d.Codigo}</td>
                      <td>${(d.Nombre).trimEnd()}</td>
                      <td>${d.Cantidad}</td>
                      <td>${d.PrecioUnitario}</td>
                      <td>${d.Precio}</td>
                        <td><center><button style="background-color:#d3a202;border-color:#d3a202;color:black;" onclick="showModalDetailProcedure('${encodeURIComponent(JSON.stringify(d))}','${ctxLab}','2')" class="btn btn-dark"><i class="bi bi-pencil-square"></i></button></center></td>
                      </tr>`;

                  })
                  .join("")
              );
              document.getElementById("t-lab").innerHTML = t_lab.toFixed(2).toString()

              $("#tbodyImg").html(data[4].map((d) => {

                ctxImg++
                t_img += parseFloat((d.Precio))
                
                      return `
                      <tr>
                      <td>${d.Codigo}</td>
                      <td>${(d.Nombre).trimEnd()}</td>
                      <td>${d.Cantidad}</td>
                      <td>${d.PrecioUnitario}</td>
                      <td>${d.Precio}</td>
                      <td><center><button style="background-color:#d3a202;border-color:#d3a202;color:black;" onclick="showModalDetailProcedure('${encodeURIComponent(JSON.stringify(d))}','${ctxImg}','3')" class="btn btn-dark"><i class="bi bi-pencil-square"></i></button></center></td>
                      </tr>`;

                  })
                  .join("")
              );
              document.getElementById("t-img").innerHTML = t_img.toFixed(2).toString()

              $("#tbodyMed").html(data[5].map((d) => {
                
                let diag_med = isDataNull(d.dx)

                t_med += parseFloat((d.Precio))

                      return `
                      <tr>
                      <td>${d.Codigo}</td>
                      <td>${(d.Nombre).trimEnd()}</td>
                      <td>${d.Cantidad}</td>
                      <td>${diag_med}</td>
                      <td>${d.PrecioUnidad}</td>
                      <td>${d.Precio}</td>
                      <td><button class="btn btn-warning" onclick="optionMedical('${encodeURIComponent(JSON.stringify(d))}')" style="background-color:#ac0039;border-color:#ac0039;color:white;"><i class="bi bi-pencil-square"></i></button></td>
                      </tr>`;

                  })
                  .join("")
              );
              document.getElementById("t-med").innerHTML = t_med.toFixed(2).toString()

              $("#tbodyIns").html(data[6].map((d) => {

                let diag_med = isDataNull(d.dx)

                t_ins += parseFloat((d.Precio))
                
                      return `
                      <tr>
                      <td>${d.Codigo}</td>
                      <td>${(d.Nombre).trimEnd()}</td>
                      <td>${d.Cantidad}</td>
                      <td>${diag_med}</td>
                      <td>${d.PrecioUnidad}</td>
                      <td>${d.Precio}</td>
                      <td><button class="btn btn-warning" onclick="optionMedical('${encodeURIComponent(JSON.stringify(d))}')" style="background-color:#ac0039;border-color:#ac0039;color:white;"><i class="bi bi-pencil-square"></i></button></td>
                      </tr>`;

                  })
                  .join("")
              );
              document.getElementById("t-ins").innerHTML = t_ins.toFixed(2).toString()
              document.getElementById("t-ate").innerHTML = (t_pro+t_lab+t_img+t_med+t_ins).toFixed(2).toString()

            }).catch(err =>{
                console.log(err)
            } );
}

function openModalAddProcedure(){
  $('#addProcedure').modal('show')
}

function searchProcedure(){
  var input = document.getElementById("in-procedure");
  var inputValue = input.value.trim();
  
  if (inputValue.length > 1) {
    fetchSearchProcedure(inputValue)
  }
}

function searchProcedureLab(){
  var input = document.getElementById("in-procedure-by-lab");
  var inputValue = input.value.trim();
  
  if (inputValue.length > 1) {
    fetchSearchProcedureByLab(inputValue)
  }
}

function searchProcedureImg(){
  var input = document.getElementById("in-procedure-by-img");
  var inputValue = input.value.trim();
  
  if (inputValue.length > 1) {
    fetchSearchProcedureByImg(inputValue)
  }
}

function searchProcedureByCode(){
  var input = document.getElementById("in-procedure-code").value;

  if (input != "") {
    fetchSearchProcedureByCode(input)
  }
  else{
    Swal.fire(
      'Oops!',
      'Ingrese el código del procedimiento!',
      'error'
    )
  }
}

$('#addProcedure').on('hidden.bs.modal', function (e) {
  cleanTableAddProcedure()
})

$('#addService').on('hidden.bs.modal', function (e) {
  cleanTableAddService()
})

$('#modalAddDiagnosys').on('hidden.bs.modal', function (e) {
  document.getElementById("tbodySeachDiagnosys").innerHTML = ''
  document.getElementById("in-diagnosys").value = ''
})

function cleanTableAddProcedure(){
  document.getElementById("in-procedure").value = ""
  document.getElementById("in-procedure-code").value = ""
  document.getElementById("tbodySeachProcedure").innerHTML = ''
  document.getElementById("select-name-procedure").innerHTML = ''
  document.getElementById("edt-id-product").value = ""
  document.getElementById("edt-product-price").value = ""
  document.getElementById("edt-product-quantity").value = ""
  document.getElementById("edt-product-total-price").value = ""
}

function cleanTableAddService(){
  document.getElementById("ser-service").value = ""
  document.getElementById("tbodySeachService").innerHTML = ''
}

function fetchSearchProcedure(n){

  fetch(`${url}/search-procedure/${n}`)
    .then(response => response.json())
    .then(data => {

      document.getElementById("tbodySeachProcedure").innerHTML = ''
      $('#tb-data-search-procedure').DataTable().destroy()
      
      $("#tbodySeachProcedure").html(data.map((d) => {
                
              return `
              <tr>
              <td><button onclick="getDetailsProcedure('${encodeURIComponent(JSON.stringify(d))}')" class="btn btn-primary"><i class="bi bi-plus-circle"></i><label style="font-size:14px;margin-left:4px;">Seleccionar</label></button></td>
              <td>${d.IdProducto}</td>
              <td>${d.Codigo}</td>
              <td>${(d.Nombre).toUpperCase()}</td>
              <td>${d.PrecioUnitario}</td>
              </tr>`;

          })
          .join("")
      );
      createDatatableSearchProcedure()
    
    }).catch(err =>{
        console.log(err)
        Swal.fire(
          'Oops!',
          'Ocurrió un error!',
          'error'
        )
    } );

}

function fetchSearchProcedureByLab(n){

  fetch(`${url}/search-procedure/${n}`)
    .then(response => response.json())
    .then(data => {

      document.getElementById("tbodySeachProcedureByLab").innerHTML = ''
      $('#tb-data-search-procedure-by-lab').DataTable().destroy()
      
      $("#tbodySeachProcedureByLab").html(data.map((d) => {
                
              return `
              <tr>
              <td><button onclick="getDetailsProcedureByLab('${encodeURIComponent(JSON.stringify(d))}')" class="btn btn-primary"><i class="bi bi-plus-circle"></i><label style="font-size:14px;margin-left:4px;">Seleccionar</label></button></td>
              <td>${d.IdProducto}</td>
              <td>${d.Codigo}</td>
              <td>${(d.Nombre).toUpperCase()}</td>
              <td>${d.PrecioUnitario}</td>
              </tr>`;

          })
          .join("")
      );
      createDatatableSearchProcedureByLab()
    
    }).catch(err =>{
        console.log(err)
        Swal.fire(
          'Oops!',
          'Ocurrió un error!',
          'error'
        )
    } );

}

function fetchSearchProcedureByImg(n){

  fetch(`${url}/search-procedure/${n}`)
    .then(response => response.json())
    .then(data => {

      document.getElementById("tbodySeachProcedureByImg").innerHTML = ''
      $('#tb-data-search-procedure-by-img').DataTable().destroy()
      
      $("#tbodySeachProcedureByImg").html(data.map((d) => {
                
              return `
              <tr>
              <td><button onclick="getDetailsProcedureByImg('${encodeURIComponent(JSON.stringify(d))}')" class="btn btn-primary"><i class="bi bi-plus-circle"></i><label style="font-size:14px;margin-left:4px;">Seleccionar</label></button></td>
              <td>${d.IdProducto}</td>
              <td>${d.Codigo}</td>
              <td>${(d.Nombre).toUpperCase()}</td>
              <td>${d.PrecioUnitario}</td>
              </tr>`;

          })
          .join("")
      );
      createDatatableSearchProcedureByImg()
    
    }).catch(err =>{
        console.log(err)
        Swal.fire(
          'Oops!',
          'Ocurrió un error!',
          'error'
        )
    } );

}


function fetchSearchProcedureByCode(n){

  fetch(`${url}/search-procedure-by-code/${n}`)
    .then(response => response.json())
    .then(data => {

      console.log(data)

      document.getElementById("tbodySeachProcedure").innerHTML = ''
      $('#tb-data-search-procedure').DataTable().destroy()
      
      $("#tbodySeachProcedure").html(data.map((d) => {
                
              return `
              <tr>
              <td><button onclick="getDetailsProcedure('${encodeURIComponent(JSON.stringify(d))}')" class="btn btn-primary"><i class="bi bi-plus-circle"></i><label style="font-size:14px;margin-left:4px;">Seleccionar</label></button></td>
              <td>${d.IdProducto}</td>
              <td>${d.Codigo}</td>
              <td>${(d.Nombre).toUpperCase()}</td>
              <td>${d.PrecioUnitario}</td>
              </tr>`;

          })
          .join("")
      );
      createDatatableSearchProcedure()
    
    }).catch(err =>{
        console.log(err)
        Swal.fire(
          'Oops!',
          'Ocurrió un error!',
          'error'
        )
    } );

}

function getDetailsProcedure(data){
  data = JSON.parse(decodeURIComponent(data))

  document.getElementById("select-name-procedure").innerHTML = (data.Nombre).toUpperCase()
  document.getElementById("edt-id-product").value = data.IdProducto
  document.getElementById("edt-product-price").value = data.PrecioUnitario
  document.getElementById("edt-product-quantity").value = ""
  document.getElementById("edt-product-total-price").value = ""

}

function getDetailsProcedureByLab(data){
  data = JSON.parse(decodeURIComponent(data))

  document.getElementById("select-name-procedure-lab").innerHTML = (data.Nombre).toUpperCase()
  document.getElementById("edt-id-product-lab").value = data.IdProducto
  document.getElementById("edt-product-price-lab").value = data.PrecioUnitario
  document.getElementById("edt-product-quantity-lab").value = ""
  document.getElementById("edt-product-total-price-lab").value = ""

}

function getDetailsProcedureByImg(data){
  data = JSON.parse(decodeURIComponent(data))

  document.getElementById("select-name-procedure-img").innerHTML = (data.Nombre).toUpperCase()
  document.getElementById("edt-id-product-img").value = data.IdProducto
  document.getElementById("edt-product-price-img").value = data.PrecioUnitario
  document.getElementById("edt-product-quantity-img").value = ""
  document.getElementById("edt-product-total-price-img").value = ""

}

function addQuantityAndPriceProcedure(){
  let quantity = document.getElementById("edt-product-quantity").value
  let price = document.getElementById("edt-product-price").value
  let total = 0

  if(price != "" && quantity != 0){
    total = price*quantity
    document.getElementById("edt-product-total-price").value = total
  }else{
    document.getElementById("edt-product-total-price").value = ""
  }
}

function addQuantityAndPriceProcedureImg(){
  let quantity = document.getElementById("edt-product-quantity-img").value
  let price = document.getElementById("edt-product-price-img").value
  let total = 0

  if(price != "" && quantity != 0){
    total = price*quantity
    document.getElementById("edt-product-total-price-img").value = total
  }else{
    document.getElementById("edt-product-total-price-img").value = ""
  }
}

function addQuantityAndPriceProcedureLab(){
  let quantity = document.getElementById("edt-product-quantity-lab").value
  let price = document.getElementById("edt-product-price-lab").value
  let total = 0

  if(price != "" && quantity != 0){
    total = price*quantity
    document.getElementById("edt-product-total-price-lab").value = total
  }else{
    document.getElementById("edt-product-total-price-lab").value = ""
  }

}

function showModaladdProcedureAccount(){

  let price = document.getElementById("edt-product-total-price").value
  let procedure = document.getElementById("select-name-procedure").innerHTML

  var  filter, table, tr, td, i, txtValue;
  filter = procedure
  table = document.getElementById("tb-data-pro");
  tr = table.getElementsByTagName("tr");
  var found = false; // Variable para rastrear si se encontró el término

  for (i = 1; i < tr.length; i++) { // Comenzamos desde 1 para omitir la fila de encabezados
    td = tr[i].getElementsByTagName("td")[1]; // Columna "Nombre" (índice 0)

    if (td) {
      txtValue = td.textContent || td.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        found = true; // Se encontró el término
      } 
    }
  }
  
  if(price != ""){

    if(!found){

      Swal.fire({
        title: 'Estas seguro de agregar este procedimiento?',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText : 'Cancelar'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          addProcedureAccount()
        } 
      })

    }else{
      Swal.fire(
        'Oops!',
        'Ya existe el procedimiento en la tabla!',
        'info'
      )
    }
  }else{
    Swal.fire(
      'Oops!',
      'Inserte una cantidad al procedimiento!',
      'info'
    )
  }
}

function showModaladdProcedureLabAccount(){

  let price = document.getElementById("edt-product-total-price-lab").value
  let procedure = document.getElementById("select-name-procedure-lab").innerHTML

  var  filter, table, tr, td, i, txtValue;
  filter = procedure
  table = document.getElementById("tb-data-lab");
  tr = table.getElementsByTagName("tr");
  var found = false; // Variable para rastrear si se encontró el término

  for (i = 1; i < tr.length; i++) { // Comenzamos desde 1 para omitir la fila de encabezados
    td = tr[i].getElementsByTagName("td")[1]; // Columna "Nombre" (índice 0)

    if (td) {
      txtValue = td.textContent || td.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        found = true; // Se encontró el término
      } 
    }
  }
  
  if(price != ""){

    if(!found){

      Swal.fire({
        title: 'Estas seguro de agregar este procedimiento de laboratorio?',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText : 'Cancelar'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          addProcedureAccountByLab()
        } 
      })

    }else{
      Swal.fire(
        'Oops!',
        'Ya existe el procedimiento en la tabla!',
        'info'
      )
    }
  }else{
    Swal.fire(
      'Oops!',
      'Inserte una cantidad al procedimiento!',
      'info'
    )
  }
}

function showModaladdProcedureImgAccount(){

  let price = document.getElementById("edt-product-total-price-img").value
  let procedure = document.getElementById("select-name-procedure-img").innerHTML

  var  filter, table, tr, td, i, txtValue;
  filter = procedure
  table = document.getElementById("tb-data-img");
  tr = table.getElementsByTagName("tr");
  var found = false; // Variable para rastrear si se encontró el término

  for (i = 1; i < tr.length; i++) { // Comenzamos desde 1 para omitir la fila de encabezados
    td = tr[i].getElementsByTagName("td")[1]; // Columna "Nombre" (índice 0)

    if (td) {
      txtValue = td.textContent || td.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        found = true; // Se encontró el término
      } 
    }
  }
  
  if(price != ""){

    if(!found){

      Swal.fire({
        title: 'Estas seguro de agregar este procedimiento de imágenes?',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText : 'Cancelar'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          addProcedureAccountByImg()
        } 
      })

    }else{
      Swal.fire(
        'Oops!',
        'Ya existe el procedimiento en la tabla!',
        'info'
      )
    }
  }else{
    Swal.fire(
      'Oops!',
      'Inserte una cantidad al procedimiento!',
      'info'
    )
  }
}

function addProcedureAccount(){

  let idServicioPaciente = document.getElementById("d-id-svi").innerHTML

  let fechaHoraActual = new Date();

// Obtener componentes individuales (opcional)
  let año = fechaHoraActual.getFullYear();
  let mes = fechaHoraActual.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, por lo que sumamos 1.
  let dia = fechaHoraActual.getDate();
  let hora = fechaHoraActual.getHours();
  let minutos = fechaHoraActual.getMinutes();
  let segundos = fechaHoraActual.getSeconds();

  // Formatear la fecha y hora como una cadena (opcional)

  let idPuntoCarga = 1
  let idPaciente = document.getElementById("d-id-patient").innerHTML
  let idCuentaAtencion = document.getElementById("d-account").innerHTML
  let idTipoFinanciamiento = document.getElementById("d-tipo-ff").innerHTML
  let FuenteFinanciamiento = document.getElementById("d-id-ff").innerHTML
  let fechaActual = `${año}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia} ${hora < 10 ? '0' + hora : hora}:${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
  let usuario = 2060
  let estado = 1

  let idProduct = document.getElementById("edt-id-product").value
  let quantity = document.getElementById("edt-product-quantity").value
  let price = document.getElementById("edt-product-price").value
  let totalPrice = document.getElementById("edt-product-total-price").value

  let data = {
    puntoCarga : idPuntoCarga,
    idPaciente : parseInt(idPaciente),
    idCuentaAtencion : parseInt(idCuentaAtencion),
    idServicioPaciente : parseInt(idServicioPaciente),
    idTipoFinanciamiento : parseInt(idTipoFinanciamiento),
    fuenteFinanciamiento : parseInt(FuenteFinanciamiento),
    fechaCrea : fechaActual,
    usuario : usuario,
    fechaDespacho : fechaActual,
    usuarioDespacho : usuario,
    estado : estado,
    fechaCpt : fechaActual,
    idProducto : parseInt(idProduct),
    cantidad : parseInt(quantity),
    precio : parseFloat(price).toFixed(2),
    precioTotal : parseFloat(totalPrice).toFixed(2),
    labHis : '',
    grupo : 0,
    subGrupo : 0,
    labHisCodigo : ''
  }

  fetchInsertDataProcedureSaludpol(data)

}


function addProcedureAccountByLab(){

  let idServicioPaciente = document.getElementById("d-id-svi").innerHTML

  let fechaHoraActual = new Date();

// Obtener componentes individuales (opcional)
  let año = fechaHoraActual.getFullYear();
  let mes = fechaHoraActual.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, por lo que sumamos 1.
  let dia = fechaHoraActual.getDate();
  let hora = fechaHoraActual.getHours();
  let minutos = fechaHoraActual.getMinutes();
  let segundos = fechaHoraActual.getSeconds();

  // Formatear la fecha y hora como una cadena (opcional)

  let idPuntoCarga = 2
  let idPaciente = document.getElementById("d-id-patient").innerHTML
  let idCuentaAtencion = document.getElementById("d-account").innerHTML
  let idTipoFinanciamiento = document.getElementById("d-tipo-ff").innerHTML
  let FuenteFinanciamiento = document.getElementById("d-id-ff").innerHTML
  let fechaActual = `${año}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia} ${hora < 10 ? '0' + hora : hora}:${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
  let usuario = 2060
  let estado = 1

  let idProduct = document.getElementById("edt-id-product-lab").value
  let quantity = document.getElementById("edt-product-quantity-lab").value
  let price = document.getElementById("edt-product-price-lab").value
  let totalPrice = document.getElementById("edt-product-total-price-lab").value


  let data = {
    puntoCarga : idPuntoCarga,
    idPaciente : parseInt(idPaciente),
    idCuentaAtencion : parseInt(idCuentaAtencion),
    idServicioPaciente : parseInt(idServicioPaciente),
    idTipoFinanciamiento : parseInt(idTipoFinanciamiento),
    fuenteFinanciamiento : parseInt(FuenteFinanciamiento),
    fechaCrea : fechaActual,
    usuario : usuario,
    fechaDespacho : fechaActual,
    usuarioDespacho : usuario,
    estado : estado,
    fechaCpt : fechaActual,
    idProducto : parseInt(idProduct),
    cantidad : parseInt(quantity),
    precio : parseFloat(price).toFixed(2),
    precioTotal : parseFloat(totalPrice).toFixed(2),
    labHis : '',
    grupo : 0,
    subGrupo : 0,
    labHisCodigo : ''
  }

  fetchInsertDataProcedureLabSaludpol(data)

  /*
  
  ,
    idPersonaTomaLab:idPersonaTomaLab,
    idDiagnostico:idDiagnostico,
    EsDiagnosticoDefinitivo:EsDiagnosticoDefinitivo,
    OrdenaPrueba:OrdenaPrueba,
    Paciente:paciente,
    idTipoSexo:tipoSexo,
    FechaNacimiento:fNac,
    colegiatura:colegiatura
  
  */

}

function addProcedureAccountByImg(){

  let idServicioPaciente = document.getElementById("d-id-svi").innerHTML

  let fechaHoraActual = new Date();

// Obtener componentes individuales (opcional)
  let año = fechaHoraActual.getFullYear();
  let mes = fechaHoraActual.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, por lo que sumamos 1.
  let dia = fechaHoraActual.getDate();
  let hora = fechaHoraActual.getHours();
  let minutos = fechaHoraActual.getMinutes();
  let segundos = fechaHoraActual.getSeconds();

  // Formatear la fecha y hora como una cadena (opcional)

  let idPuntoCarga = 2
  let idPaciente = document.getElementById("d-id-patient").innerHTML
  let idCuentaAtencion = document.getElementById("d-account").innerHTML
  let idTipoFinanciamiento = document.getElementById("d-tipo-ff").innerHTML
  let FuenteFinanciamiento = document.getElementById("d-id-ff").innerHTML
  let fechaActual = `${año}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia} ${hora < 10 ? '0' + hora : hora}:${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
  let usuario = 2060
  let estado = 1

  let idProduct = document.getElementById("edt-id-product-img").value
  let quantity = document.getElementById("edt-product-quantity-img").value
  let price = document.getElementById("edt-product-price-img").value
  let totalPrice = document.getElementById("edt-product-total-price-img").value


  let data = {
    puntoCarga : idPuntoCarga,
    idPaciente : parseInt(idPaciente),
    idCuentaAtencion : parseInt(idCuentaAtencion),
    idServicioPaciente : parseInt(idServicioPaciente),
    idTipoFinanciamiento : parseInt(idTipoFinanciamiento),
    fuenteFinanciamiento : parseInt(FuenteFinanciamiento),
    fechaCrea : fechaActual,
    usuario : usuario,
    fechaDespacho : fechaActual,
    usuarioDespacho : usuario,
    estado : estado,
    fechaCpt : fechaActual,
    idProducto : parseInt(idProduct),
    cantidad : parseInt(quantity),
    precio : parseFloat(price).toFixed(2),
    precioTotal : parseFloat(totalPrice).toFixed(2),
    labHis : '',
    grupo : 0,
    subGrupo : 0,
    labHisCodigo : ''
  }

  fetchInsertDataProcedureImgSaludpol(data)

  /*
  
  ,
    idPersonaTomaLab:idPersonaTomaLab,
    idDiagnostico:idDiagnostico,
    EsDiagnosticoDefinitivo:EsDiagnosticoDefinitivo,
    OrdenaPrueba:OrdenaPrueba,
    Paciente:paciente,
    idTipoSexo:tipoSexo,
    FechaNacimiento:fNac,
    colegiatura:colegiatura
  
  */

}

function fetchInsertDataProcedureSaludpol(data){

  fetch(`${url}/insert-procedure-saludpol/`, {
    method: 'POST', // o 'PUT', 'DELETE', etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // data es un objeto con los datos a enviar
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
     if(data[0].success == "insertado"){

      Swal.fire('Agregado!', '', 'success')

      updateDetailAccount()
      cleanTableAddProcedure()
      
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

}

function fetchInsertDataProcedureLabSaludpol(data){

  console.log(data)

  fetch(`${url}/insert-laboratory-saludpol/`, {
    method: 'POST', // o 'PUT', 'DELETE', etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // data es un objeto con los datos a enviar
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
     if(data[0].length != 0){

      console.log(data[0].IdOrden)
      fetchInsertLabMovimiento(data[0].IdOrden)
      
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
}

function fetchInsertDataProcedureImgSaludpol(data){

  console.log(data)

  fetch(`${url}/insert-laboratory-saludpol/`, {
    method: 'POST', // o 'PUT', 'DELETE', etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // data es un objeto con los datos a enviar
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
     if(data[0].length != 0){

      console.log(data[0].IdOrden)
      fetchInsertImgMovimiento(data[0].IdOrden)
      
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
}

function fetchInsertLabMovimiento(orden){

  let fechaHoraActual = new Date();

// Obtener componentes individuales (opcional)
  let año = fechaHoraActual.getFullYear();
  let mes = fechaHoraActual.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, por lo que sumamos 1.
  let dia = fechaHoraActual.getDate();
  let hora = fechaHoraActual.getHours();
  let minutos = fechaHoraActual.getMinutes();
  let segundos = fechaHoraActual.getSeconds();

  let fechaActual = `${año}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia} ${hora < 10 ? '0' + hora : hora}:${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`;

  let idCuentaAtencion = document.getElementById("d-account").innerHTML

  let sex = document.getElementById("d-sex").innerHTML 
  let valueSex = 2
      
  if(sex.includes("Masculino")){
    valueSex = 1
  }


  let idPersonaTomaLab = 5708
  let idDiagnostico = document.getElementById("lab-diagnosys-code").innerHTML
  let EsDiagnosticoDefinitivo = 1
  let OrdenaPrueba = document.getElementById("d-id-medico").innerHTML
  let paciente = document.getElementById("d-fullname").innerHTML 
  let tipoSexo = valueSex
  let fNac = (document.getElementById("d-nac").innerHTML ).split("-")[2]+'-'+(document.getElementById("d-nac").innerHTML ).split("-")[1]+'-'+(document.getElementById("d-nac").innerHTML ).split("-")[0]
  let colegiatura = document.getElementById("d-id-medic-col").innerHTML 

  let datax = {
    IdOrden:orden,
    idCuentaAtencion:idCuentaAtencion,
    fechaCrea:fechaActual,
    idPersonaTomaLab:idPersonaTomaLab,
    idDiagnostico:idDiagnostico,
    EsDiagnosticoDefinitivo:EsDiagnosticoDefinitivo,
    OrdenaPrueba:OrdenaPrueba,
    Paciente:paciente,
    idTipoSexo:tipoSexo,
    FechaNacimiento:fNac,
    colegiatura:colegiatura
  }

  console.log(datax)

  fetch(`${url}/insert-mov-laboratory-saludpol/`, {
    method: 'POST', // o 'PUT', 'DELETE', etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datax) // data es un objeto con los datos a enviar
  })
  .then(response => response.json())
  .then(data => {
    
    console.log(data)

     if(data[0].success == "insertado"){

      Swal.fire('Agregado!', '', 'success')

      updateDetailAccount()
      
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
}

function fetchInsertImgMovimiento(orden){

  let fechaHoraActual = new Date();

// Obtener componentes individuales (opcional)
  let año = fechaHoraActual.getFullYear();
  let mes = fechaHoraActual.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, por lo que sumamos 1.
  let dia = fechaHoraActual.getDate();
  let hora = fechaHoraActual.getHours();
  let minutos = fechaHoraActual.getMinutes();
  let segundos = fechaHoraActual.getSeconds();

  let fechaActual = `${año}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia} ${hora < 10 ? '0' + hora : hora}:${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`;

  let idCuentaAtencion = document.getElementById("d-account").innerHTML

  let sex = document.getElementById("d-sex").innerHTML 
  let valueSex = 2
      
  if(sex.includes("Masculino")){
    valueSex = 1
  }


  let idPersonaTomaLab = 5708

  let paciente = document.getElementById("d-fullname").innerHTML 
  let tipoSexo = valueSex
  let fNac = (document.getElementById("d-nac").innerHTML ).split("-")[2]+'-'+(document.getElementById("d-nac").innerHTML ).split("-")[1]+'-'+(document.getElementById("d-nac").innerHTML ).split("-")[0]

  let datax = {
    IdOrden:orden,
    idCuentaAtencion:idCuentaAtencion,
    fecha:fechaActual,
    IdUsuario:idPersonaTomaLab,
    Paciente:paciente,
    idTipoSexo:tipoSexo,
    FechaNacimiento:fNac,
  }

  console.log(datax)

  fetch(`${url}/insert-mov-images-saludpol/`, {
    method: 'POST', // o 'PUT', 'DELETE', etc.
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datax) // data es un objeto con los datos a enviar
  })
  .then(response => response.json())
  .then(data => {
    
    console.log(data)

     if(data[0].success == "insertado"){

      Swal.fire('Agregado!', '', 'success')

      updateDetailAccount()
      
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
}

function showModalDeleteDiagnosys(id){

  let atencion = document.getElementById("d-id-atention").innerHTML

  Swal.fire({
    title: 'Estas seguro de eliminar este diagnostico?',
    showCancelButton: true,
    confirmButtonText: 'Si',
    cancelButtonText : 'Cancelar'
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      //Swal.fire('Eliminado!', '', 'success')

  fetch(`${url}/delete-diagnosys/${id}/${atencion}`)
    .then(response => response.json())
    .then(data => {

      console.log(data)

      if(data[0].success == "eliminado"){
          updateDetailAccount()
          Swal.fire('Eliminado!', '', 'success')
      }else{
        Swal.fire(
          'Oops!',
          'Ocurrió un error!',
          'error'
        )
      }

      
    }).catch(err =>{
        console.log(err)
        Swal.fire(
          'Oops!',
          'Ocurrió un error!',
          'error'
        )
    } );

    } 
  })

}


function showModalAddDiagnosys(){
  $('#modalAddDiagnosys').modal('show')
}

function getSubDiagnosys() {
  var selectElement = document.getElementById("inputGroupSelectTypeAtention");
  var selectedValue = selectElement.value;

  fetch(`${url}/get-sub-diagnosys/${selectedValue}`)
    .then(response => response.json())
    .then(data => {

      document.getElementById("selectSubClass").style = "display:flex;"
      document.getElementById("input-diagnosys").style = "display:flex;"
      
      document.getElementById("inputGroupSelectSubClass").innerHTML = ''

      $("#inputGroupSelectSubClass").html(data.map((d) => {
        
        return `
        <option value="${d.IdClasificacionDx+'/'+d.IdSubclasificacionDx}">${(d.Descripcion).toUpperCase()}</option>
        `;

    })
    .join("")
    )

    }).catch(err =>{
        console.log(err)
        Swal.fire(
          'Oops!',
          'Ocurrió un error!',
          'error'
        )
    } );

}

function fetchSearchDiagnosys(diagnosys){

  fetch(`${url}/get-diagnosys/${diagnosys}`)
    .then(response => response.json())
    .then(data => {

      if(data[0].success != "error"){
        document.getElementById("tbodySeachDiagnosys").innerHTML = ''
        $('#tb-data-search-diagnosys').DataTable().destroy()
        
        $("#tbodySeachDiagnosys").html(data.map((d) => {
                  
                return `
                <tr>
                <td><button onclick="insertDiagnosys('${encodeURIComponent(JSON.stringify(d))}')" class="btn btn-primary"><i class="bi bi-plus-circle"></i><label style="font-size:14px;margin-left:4px;">Seleccionar</label></button></td>
                <td>${d.IdDiagnostico}</td>
                <td>${d.Descripcion}</td>
                </tr>`;
  
            })
            .join("")
        );
        createDatatableSearchDiagnosys()
      }else{
        document.getElementById("tbodySeachDiagnosys").innerHTML = ''
      }
    
    }).catch(err =>{
        console.log(err)
        Swal.fire(
          'Oops!',
          'Ocurrió un error!',
          'error'
        )
    } );

}

function fetchSearchDiagnosysByLab(diagnosys){

  fetch(`${url}/get-diagnosys/${diagnosys}`)
    .then(response => response.json())
    .then(data => {

      if(data[0].success != "error"){
        document.getElementById("tbodySeachDiagnosysByLab").innerHTML = ''
        $('#tb-data-search-diagnosys-by-lab').DataTable().destroy()
        
        $("#tbodySeachDiagnosysByLab").html(data.map((d) => {
                  
                return `
                <tr>
                <td><button onclick="insertDiagnosysByLab('${encodeURIComponent(JSON.stringify(d))}')" class="btn btn-primary"><i class="bi bi-plus-circle"></i><label style="font-size:14px;margin-left:4px;">Seleccionar</label></button></td>
                <td>${d.IdDiagnostico}</td>
                <td>${d.Descripcion}</td>
                </tr>`;
  
            })
            .join("")
        );
        createDatatableSearchDiagnosysByLab()
      }else{
        document.getElementById("tbodySeachDiagnosysByLab").innerHTML = ''
      }
    
    }).catch(err =>{
        console.log(err)
        Swal.fire(
          'Oops!',
          'Ocurrió un error!',
          'error'
        )
    } );

}

function fetchSearchDiagnosysByImg(diagnosys){

  fetch(`${url}/get-diagnosys/${diagnosys}`)
    .then(response => response.json())
    .then(data => {

      if(data[0].success != "error"){
        document.getElementById("tbodySeachDiagnosysByImg").innerHTML = ''
        $('#tb-data-search-diagnosys-by-img').DataTable().destroy()
        
        $("#tbodySeachDiagnosysByImg").html(data.map((d) => {
                  
                return `
                <tr>
                <td><button onclick="insertDiagnosysByImg('${encodeURIComponent(JSON.stringify(d))}')" class="btn btn-primary"><i class="bi bi-plus-circle"></i><label style="font-size:14px;margin-left:4px;">Seleccionar</label></button></td>
                <td>${d.IdDiagnostico}</td>
                <td>${d.Descripcion}</td>
                </tr>`;
  
            })
            .join("")
        );
        createDatatableSearchDiagnosysByImg()
      }else{
        document.getElementById("tbodySeachDiagnosysByImg").innerHTML = ''
      }
    
    }).catch(err =>{
        console.log(err)
        Swal.fire(
          'Oops!',
          'Ocurrió un error!',
          'error'
        )
    } );

}

function searchDiagnosys(){
  var input = document.getElementById("in-diagnosys");
  var inputValue = input.value.trim();
  
  if (inputValue.length > 1) {
    fetchSearchDiagnosys(inputValue)
  }else{
    document.getElementById("tbodySeachDiagnosys").innerHTML = ''
  }
}


function searchDiagnosysByLab(){
  var input = document.getElementById("in-diagnosys-by-lab");
  var inputValue = input.value.trim();
  
  if (inputValue.length > 1) {
    fetchSearchDiagnosysByLab(inputValue)
  }else{
    document.getElementById("tbodySeachDiagnosysByLab").innerHTML = ''
  }
}

function searchDiagnosysByImg(){
  var input = document.getElementById("in-diagnosys-by-img");
  var inputValue = input.value.trim();
  
  if (inputValue.length > 1) {
    fetchSearchDiagnosysByImg(inputValue)
  }else{
    document.getElementById("tbodySeachDiagnosysByImg").innerHTML = ''
  }
}

function insertDiagnosysByLab(d){
  d = JSON.parse(decodeURIComponent(d))
  document.getElementById("lab-diagnosys").innerHTML = d.Descripcion
  document.getElementById("lab-diagnosys-code").innerHTML = d.IdDiagnostico
  document.getElementById ("lab-t-t1").style = "display:flex;font-weight: 700;"
  $('#tb-data-search-procedure-by-lab').DataTable().destroy()
  document.getElementById("tb-data-search-procedure-by-lab").style = "display:run-in;"
  createDatatableSearchProcedureByLab()
}

function insertDiagnosysByImg(d){
  d = JSON.parse(decodeURIComponent(d))
  document.getElementById("img-diagnosys").innerHTML = d.Descripcion
  document.getElementById("img-diagnosys-code").innerHTML = d.IdDiagnostico
  document.getElementById ("img-t-t1").style = "display:flex;font-weight: 700;"
  $('#tb-data-search-procedure-by-img').DataTable().destroy()
  document.getElementById("tb-data-search-procedure-by-img").style = "display:run-in;"
  createDatatableSearchProcedureByImg()
}

function insertDiagnosys(d){
  d = JSON.parse(decodeURIComponent(d))

  let IdAtencion = document.getElementById("d-id-atention").innerHTML
  let IdClasificacionDx = (document.getElementById("inputGroupSelectSubClass").value).split("/")[0]
  let IdDiagnostico = d.IdDiagnostico
  let IdSubclasificacionDx = (document.getElementById("inputGroupSelectSubClass").value).split("/")[1]
  let labConfHIS = null
  let GrupoHIS = 0
  let SubGrupoHIS = 0
  let labConfHIScodigo = ''
  let idServicio = null
  let IdUsuario = null
  let NroEvaluacion = null

  let values = {
    IdAtencion : IdAtencion ,
    IdClasificacionDx : IdClasificacionDx,
    IdDiagnostico : IdDiagnostico,
    IdSubclasificacionDx : IdSubclasificacionDx ,
    labConfHIS : labConfHIS,
    GrupoHIS : GrupoHIS,
    SubGrupoHIS : SubGrupoHIS,
    labConfHIScodigo : labConfHIScodigo,
    idServicio : idServicio,
    IdUsuario : IdUsuario,
    NroEvaluacion : NroEvaluacion
  }


   Swal.fire({
    title: 'Estas seguro de agregar este diagnostico?',
    showCancelButton: true,
    confirmButtonText: 'Si',
    cancelButtonText : 'Cancelar'
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {

      fetch(`${url}/insert-diagnosys-saludpol/`, {
        method: 'POST', // o 'PUT', 'DELETE', etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values) // data es un objeto con los datos a enviar
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
         if(data[0].success == "insertado"){
    
          document.getElementById("tbodySeachDiagnosys").innerHTML = ''
          document.getElementById("in-diagnosys").value = ''
          updateDetailAccount()
          Swal.fire('Agregado!', '', 'success')
    
        
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
      
    } 
  })     
        
}

function updateDetailAccount(){
        let account = document.getElementById("d-account").innerHTML 
        let sex = document.getElementById("d-sex").innerHTML 
        let valueSex = 2
      
            if(sex.includes("Masculino")){
              valueSex = 1
            }
          
            let ate = {
                CAMPO2:account,
                CAMPO11:valueSex
              }
              getDataClientSaludpol(ate)
}

function openModalAddLaboratory(){
    $('#modalAddLab').modal('show')
}

function openModalAddImages(){
  /*let tb = document.getElementById("tbodyImg").rows.length
  if(tb > 0){
  }*/
  $('#modalAddImg').modal('show')
}


function printAtention(){

  let account = document.getElementById("d-account").innerHTML
  let fullname = document.getElementById("d-fullname").innerHTML
  let ff = document.getElementById("d-ff").innerHTML
  let ts = document.getElementById("d-ate").innerHTML
  let afiliation = document.getElementById("d-auth").innerHTML
  let servI = document.getElementById("d-svi").innerHTML
  let servE = document.getElementById("d-sve").innerHTML
  let his = document.getElementById("d-history").innerHTML
  let fa = document.getElementById("d-fe").innerHTML

  let totalPro = document.getElementById("t-pro").innerHTML
  let totalLab = document.getElementById("t-lab").innerHTML
  let totalImg= document.getElementById("t-img").innerHTML
  let totalMed= document.getElementById("t-med").innerHTML
  let totalIns= document.getElementById("t-ins").innerHTML

  let totalAte= document.getElementById("t-ate").innerHTML

  let fechaHoraActual = new Date();

  let positionTableDiag = 73


  // Obtener componentes individuales (opcional)
    let año = fechaHoraActual.getFullYear();
    let mes = fechaHoraActual.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, por lo que sumamos 1.
    let dia = fechaHoraActual.getDate();
    let horas = fechaHoraActual.getHours();
    let minutos = fechaHoraActual.getMinutes();

    let fechaActual = `${dia < 10 ? '0' + dia : dia}/${mes < 10 ? '0' + mes : mes}/${año}`;
  
    const ampm = horas >= 12 ? 'pm' : 'am';

    const horas12 = horas % 12 === 0 ? 12 : horas % 12;
    const formatoHora = `${horas12 < 10 ? '0' : ''}${horas12}:${minutos < 10 ? '0' : ''}${minutos} ${ampm}`;


  var doc = new jspdf.jsPDF()
  doc.addImage('/image/logoHSR.png', 'JPEG', 5, 7, 22, 12)
  doc.setFontSize(9)
  doc.text(62, 10, 'HOSPITAL SANTA ROSA    www.hospitalsantarosa.gob.pe')
  doc.text(190, 10, fechaActual)
  doc.text(90, 15, 'JR.CAJAMARCA 171')
  doc.text(190, 15, formatoHora)
  doc.text(89, 20, 'TELEFONO : 57-1019')
  doc.setFontSize(10)
  doc.setFont(undefined, 'bold')
  doc.text(41, 27, 'COBERTURA DE PROCESOS DE PRESTACIONES DE SALUD DE SALUDPOL')
  doc.setFontSize(9)
  doc.setFont(undefined, 'normal')
  doc.text(7, 38, 'Apellidos y nombres : '+fullname+'     Fte.Financ : '+ff+' ;  T.Serv : '+ts)
  doc.text(7, 45, 'Código de afiliación : '+afiliation)
  doc.text(160, 45, 'N°  Cuenta : '+account)
  doc.text(7, 52, 'Servicio ingreso : '+servI)
  doc.text(160, 52, 'Hist. Clin : '+his)
  doc.text(7, 59, 'Servicio egreso : '+servE)
  doc.text(160, 59, 'Fecha Alta : '+fa)
  doc.setFont(undefined, 'bold')

  doc.text(93, 68, 'DIAGNOSTICOS')
   doc.autoTable({
    head: [['Clasificación','Código','Descripción']],
    body: arrayDiag(),
    theme: 'grid',
    styles : { halign : 'center',fontSize: 8},
   headStyles :{fillColor : [0, 142, 138]}, 
   alternateRowStyles: {fillColor : [238, 255, 254]}, 
   tableLineColor: [0, 142, 138], 
   tableLineWidth: 0.1,
   margin: {top: positionTableDiag},
    })


  doc.text(91, doc.lastAutoTable.finalY+10, 'PROCEDIMIENTOS')
  doc.autoTable({
    startY: doc.lastAutoTable.finalY + 15,
    head: [['Código','Descripción','Cantidad','Precio.U','Monto']],
    body: arrayPro(),
    theme: 'grid',
    styles : { halign : 'center',fontSize: 8},
   headStyles :{fillColor : [216, 166, 0]}, 
   alternateRowStyles: {fillColor : [255, 252, 242]}, 
   tableLineColor: [216, 166, 0], 
   tableLineWidth: 0.1,
   margin: {top: 10},
    })
  doc.setFont(undefined, 'normal')
  doc.text(138, doc.lastAutoTable.finalY+5, 'Sub Total de procedimientos : S/'+totalPro)

  doc.setFont(undefined, 'bold')

  doc.text(93, doc.lastAutoTable.finalY+10, 'LABORATORIO')
  doc.autoTable({
    startY: doc.lastAutoTable.finalY + 15,
    head: [['Código','Descripción','Cantidad','Precio.U','Monto']],
    body: arrayLab(),
    theme: 'grid',
    styles : { halign : 'center',fontSize: 8},
   headStyles :{fillColor : [216, 166, 0]}, 
   alternateRowStyles: {fillColor : [255, 252, 242]}, 
   tableLineColor: [216, 166, 0], 
   tableLineWidth: 0.1,
   margin: {top: 10},
    })
  doc.setFont(undefined, 'normal')
  doc.text(143, doc.lastAutoTable.finalY+5, 'Sub Total de laboratorio : S/'+totalLab)


  doc.setFont(undefined, 'bold')

  doc.text(96, doc.lastAutoTable.finalY+10, 'IMÁGENES')
  doc.autoTable({
    startY: doc.lastAutoTable.finalY + 15,
    head: [['Código','Descripción','Cantidad','Precio.U','Monto']],
    body: arrayImg(),
    theme: 'grid',
    styles : { halign : 'center',fontSize: 8},
   headStyles :{fillColor : [216, 166, 0]}, 
   alternateRowStyles: {fillColor : [255, 252, 242]}, 
   tableLineColor: [216, 166, 0], 
   tableLineWidth: 0.1,
   margin: {top: 10},
    })
  doc.setFont(undefined, 'normal')
  doc.text(146, doc.lastAutoTable.finalY+5, 'Sub Total de imágenes : S/'+totalImg)


  doc.setFont(undefined, 'bold')
 
  doc.text(93, doc.lastAutoTable.finalY+10, 'MEDICAMENTOS')
  doc.autoTable({
    startY: doc.lastAutoTable.finalY + 15,
    head: [['Código','Nombre','Cantidad','Diagnostico','Precio.U','Monto']],
    body: arrayMed(),
    theme: 'grid',
    styles : { halign : 'center',fontSize: 8},
    headStyles :{fillColor : [172, 0, 57]}, 
    alternateRowStyles: {fillColor : [255, 243, 247]}, 
    tableLineColor: [172, 0, 57], 
   tableLineWidth: 0.1,
   margin: {top: 10},
    })
  doc.setFont(undefined, 'normal')
  doc.text(141, doc.lastAutoTable.finalY+5, 'Sub Total de medicamentos : S/'+totalMed)

  doc.setFont(undefined, 'bold')


  doc.text(96, doc.lastAutoTable.finalY+10, 'INSUMOS')
  doc.autoTable({
    startY: doc.lastAutoTable.finalY + 15,
    head: [['Código','Nombre','Cantidad','Diagnostico','Precio.U','Monto']],
    body: arrayIns(),
    theme: 'grid',
    styles : { halign : 'center',fontSize: 8},
   headStyles :{fillColor : [172, 0, 57]}, 
   alternateRowStyles: {fillColor : [255, 243, 247]}, 
   tableLineColor: [172, 0, 57], 
   tableLineWidth: 0.1,
   margin: {top: 10},
    })
  doc.setFont(undefined, 'normal')
  doc.text(146, doc.lastAutoTable.finalY+5, 'Sub Total de insumos : S/'+totalIns)
  doc.text(146, doc.lastAutoTable.finalY+10, 'Total consumo : S/'+totalAte)


  doc.save('Saludpol-'+account+'.pdf')

}


function arrayDiag(){
  const table = document.getElementById('tb-data-diag');
  const tbody = table.querySelector('tbody');

  // Array para almacenar los datos de la tabla
  const array = [];

  // Recorrer las filas del cuerpo de la tabla
  for (const row of tbody.rows) {
    const rowData = [];

    // Recorrer las celdas de la fila actual
    for (const cell of row.cells) {
      rowData.push(cell.textContent.trim());
    }

    array.push(rowData);
  }
  return array
}

function arrayPro(){
  const table = document.getElementById('tb-data-pro');
  const tbody = table.querySelector('tbody');

  // Array para almacenar los datos de la tabla
  const array = [];

  // Recorrer las filas del cuerpo de la tabla
  for (const row of tbody.rows) {
    const rowData = [];

    // Recorrer las celdas de la fila actual
    for (const cell of row.cells) {
      rowData.push(cell.textContent.trim());
    }

    array.push(rowData);
  }
  return array
}

function arrayLab(){
  const table = document.getElementById('tb-data-lab');
  const tbody = table.querySelector('tbody');

  // Array para almacenar los datos de la tabla
  const array = [];

  // Recorrer las filas del cuerpo de la tabla
  for (const row of tbody.rows) {
    const rowData = [];

    // Recorrer las celdas de la fila actual
    for (const cell of row.cells) {
      rowData.push(cell.textContent.trim());
    }

    array.push(rowData);
  }
  return array
}

function arrayImg(){
  const table = document.getElementById('tb-data-img');
  const tbody = table.querySelector('tbody');

  // Array para almacenar los datos de la tabla
  const array = [];

  // Recorrer las filas del cuerpo de la tabla
  for (const row of tbody.rows) {
    const rowData = [];

    // Recorrer las celdas de la fila actual
    for (const cell of row.cells) {
      rowData.push(cell.textContent.trim());
    }

    array.push(rowData);
  }
  return array
}

function arrayMed(){
  const table = document.getElementById('tb-data-med');
  const tbody = table.querySelector('tbody');

  // Array para almacenar los datos de la tabla
  const array = [];

  // Recorrer las filas del cuerpo de la tabla
  for (const row of tbody.rows) {
    const rowData = [];

    // Recorrer las celdas de la fila actual
    for (const cell of row.cells) {
      rowData.push(cell.textContent.trim());
    }

    array.push(rowData);
  }
  return array
}

function arrayIns(){
  const table = document.getElementById('tb-data-ins');
  const tbody = table.querySelector('tbody');

  // Array para almacenar los datos de la tabla
  const array = [];

  // Recorrer las filas del cuerpo de la tabla
  for (const row of tbody.rows) {
    const rowData = [];

    // Recorrer las celdas de la fila actual
    for (const cell of row.cells) {
      rowData.push(cell.textContent.trim());
    }

    array.push(rowData);
  }
  return array
}

function openModalSearchService(type){
  $('#addService').modal('show')

  if(type == 1){
    document.getElementById("type-serv").innerHTML = "ingreso"
  }else{
    document.getElementById("type-serv").innerHTML = "egreso"
  }

}

function searchService(){
  var input = document.getElementById("ser-service");
  var inputValue = input.value.trim();
  if (inputValue.length > 0) {
    fetchSearchService(inputValue)
  }
}

function fetchSearchService(n){

  let valueType = 1
  let type = document.getElementById("type-serv").innerHTML
  if(type == "egreso"){
    valueType = 2
  }

  fetch(`${url}/search-service/${n}`)
    .then(response => response.json())
    .then(data => {

      console.log(data)

      document.getElementById("tbodySeachService").innerHTML = ''
      $('#tb-data-search-service').DataTable().destroy()
      
      $("#tbodySeachService").html(data.map((d) => {
                
              return `
              <tr>
              <td><button onclick="updateService('${d.IdServicio}',${valueType})" class="btn btn-primary"><i class="bi bi-plus-circle"></i><label style="font-size:14px;margin-left:4px;">Seleccionar</label></button></td>
              <td>${(d.descripcion).toUpperCase()}</td>
              <td>${d.IdServicio}</td>
              <td>${(d.especialidad).toUpperCase()}</td>
              <td>${(d.tipoServicio).toUpperCase()}</td>
              </tr>`;

          })
          .join("")
      );
      createDatatableSearchService()
    
    }).catch(err =>{
        console.log(err)
        Swal.fire(
          'Oops!',
          'Ocurrió un error!',
          'error'
        )
    } );
}

function updateService(id,v){
  
  let account =  document.getElementById("d-account").innerHTML
  
  if(v == 1){
    fetch(`${url}/update-service-in/${id}/${account}`)
    .then(response => response.json())
    .then(data => {
     
      if(data[0].success = "actualizado"){
        Swal.fire(
          'Muy bien!',
          'Servicio de ingreso actualizado!',
          'success'
        )
        $('#editAccount').modal('hide')
        $('#addService').modal('hide')
        updateDetailAccount()

      }else{
        Swal.fire(
          'Oops!',
          'Ocurrió un error!',
          'error'
        )
      }
      
    }).catch(err =>{
        console.log(err)
    } );
  }else{
    fetch(`${url}/update-service-out/${id}/${account}`)
    .then(response => response.json())
    .then(data => {
     
      if(data[0].success = "actualizado"){
        Swal.fire(
          'Muy bien!',
          'Servicio de egreso actualizado!',
          'success'
        )
        $('#editAccount').modal('hide')
        $('#addService').modal('hide')
        updateDetailAccount()

      }else{
        Swal.fire(
          'Oops!',
          'Ocurrió un error!',
          'error'
        )
      }
      
    }).catch(err =>{
        console.log(err)
    } );
  }

  

}

function optionMedical(d){

  d = JSON.parse(decodeURIComponent(d))

  $('#modalMedical').modal('show')

  document.getElementById("med-idReceta").value = d.idReceta
  document.getElementById("med-idItem").value = d.idItem
  document.getElementById("med-dx").value = d.dx

}

function updateDX(){

  let idReceta = document.getElementById("med-idReceta").value
  let idItem = document.getElementById("med-idItem").value
  let dx =  document.getElementById("med-dx").value 

  if(dx != ""){
    fetchUpdateDX(idReceta,idItem,dx)
  }else{
    Swal.fire(
      'Oops!',
      'Ingrese el código DX de un diganostico!',
      'info'
    );
  }

}

function fetchUpdateDX(idReceta,idItem,dx){

  let x = {
    idReceta:idReceta,
    idItem:idItem,
    dx:dx
  }
  
  fetch(`${url}/update-dx-med-ins`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(x)
  })
            .then(response => response.json())
            .then(data => {
            

              let responseX = data[0]
              if(responseX.success == "actualizado"){
                Swal.fire(
                  'Muy bien!',
                  'DX actualizado!',
                  'success'
                );
                updateDetailAccount()
              }else{
                Swal.fire(
                  'Oops!',
                  'Error al actualizar DX!',
                  'error'
                );
              }

            }).catch(err =>{
                console.log(err)
            } );

}

function showModalEditAtention(){
  $('#modalEditAtention').modal('show')
}

function fetchQueryNoAtention(){
  let account = document.getElementById("no-ate-account").value

  if(account != ""){
    fetch(`${url}/query-no-atention/${account}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
              .then(response => response.json())
              .then(data => {
            
                let d = data[0]
        
                document.getElementById("no-ate-name").innerHTML = d.nombres
                document.getElementById("no-ate-age").innerHTML = d.edad
                document.getElementById("no-ate-dni").innerHTML = d.NroDocumento
                document.getElementById("no-ate-gender").innerHTML = d.sexo
                document.getElementById("no-ate-service").innerHTML = d.TipoServicio
                document.getElementById("no-ate-account-q").innerHTML = d.IdCuentaAtencion
                document.getElementById("no-ate-id-patient").innerHTML = d.idPaciente
                document.getElementById("no-ate-auth").innerHTML = d.carta

                document.getElementById("no-ate-in-date").value = (d.FechaIngreso).split("T")[0];
                document.getElementById("no-ate-in-hour").value = d.horaIngreso
  
                document.getElementById("no-ate-out-date").value = (d.FechaEgreso).split("T")[0];
                document.getElementById("no-ate-out-hour").value = d.horaEgreso

              }).catch(err =>{
                Swal.fire(
                  'Oops!',
                  'Ocurrió un error!',
                  'error'
                );
              } );
  }else{
    Swal.fire(
      'Oops!',
      'Ingrese un numero de cuenta!',
      'info'
    );
  }
}

function updateDateAtentionSaludpol(){

  let account = document.getElementById("no-ate-account-q").innerHTML
  let f1 = document.getElementById("no-ate-in-date").value
  let f2 = document.getElementById("no-ate-out-date").value
  let h1 = document.getElementById("no-ate-in-hour").value
  let h2 = document.getElementById("no-ate-out-hour").value

  if(f1 != "" && f2 != "" && h1 != "" && h2 != ""){
    fetch(`${url}/update-date-atention-saludpol/${account}/${f1}/${h1}/${f2}/${h2}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
              .then(response => response.json())
              .then(data => {
            
                let success = data[0].success
        
                if(success == "actualizado"){
                  Swal.fire(
                    'Muy bien!',
                    'Datos actualizados!',
                    'success'
                  );
                }else{
                  Swal.fire(
                    'Oops!',
                    'Ocurrió un error!',
                    'error'
                  );
                }

              }).catch(err =>{
                Swal.fire(
                  'Oops!',
                  'Ocurrió un error!',
                  'error'
                );
              } );
  }else{
    Swal.fire(
      'Oops!',
      'Complete los campos!',
      'info'
    );
  }

}

$('#modalEditAtention').on('hidden.bs.modal', function (e) {
  document.getElementById("no-ate-account").value = ""
  document.getElementById("no-ate-name").innerHTML = ""
  document.getElementById("no-ate-age").innerHTML = ""
  document.getElementById("no-ate-dni").innerHTML = ""
  document.getElementById("no-ate-gender").innerHTML = ""
  document.getElementById("no-ate-service").innerHTML = ""
  document.getElementById("no-ate-account").innerHTML = ""
  document.getElementById("no-ate-id-patient").innerHTML = ""
  document.getElementById("no-ate-auth").innerHTML = ""

  document.getElementById("no-ate-in-date").value = ""
  document.getElementById("no-ate-out-date").value = ""
  document.getElementById("no-ate-in-hour").value = ""
  document.getElementById("no-ate-out-hour").value = ""

})
