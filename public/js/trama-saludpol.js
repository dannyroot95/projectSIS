

var trama1 = ``
var trama2 = ``
var trama3 = ``
var trama4 = ``


createDatatable()
createDatatable2()
createDatatable3()
createDatatable4()

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
       },scrollY: '35vh',scrollX: true, sScrollXInner: "100%",
       scrollCollapse: true,
      });
  
      var table = $('#tb-data-1').DataTable();
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

  $('#tb-data-1').DataTable().destroy()
  $("#tbody").html(data.map((d) => {

    ctx++

          return `

          <tr style="cursor: pointer;">
          <td class="minText2">${d.CAMPO1}</td>
          <td class="minText2">${d.CAMPO2}</td>
          <td class="minText2">${d.CAMPO3}</td>
          <td class="minText2">${d.CAMPO4}</td>
          <td class="minText2">${d.CAMPO5}</td>
          <td class="minText2">${d.CAMPO6}</td>
          <td class="minText2">${d.CAMPO7}</td>
          <td class="minText2">${d.CAMPO8}</td>
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

    ctx++
          return `
          <tr style="cursor: pointer;">
          <td class="minText2">${d.CAMPO1}</td>
          <td class="minText2">${d.CAMPO2}</td>
          <td class="minText2">${d.CAMPO3}</td>
          <td class="minText2">${d.CAMPO4}</td>
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
}

function enableButtons(){
  document.getElementById("btn-query").disabled = false
  document.getElementById("btn-deleted").disabled = false
}