

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
            document.getElementById("btn-trama").style = "display:block;"
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
    let color = "white"

    if(d.CAMPO3 == null){
      color = "#FFDFE7"
    }

          return `

          <tr style="cursor: pointer;background-color:${color};">
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
document.getElementById("btn-trama").disabled = true
}


function enableButtons(){
  document.getElementById("btn-query").disabled = false
  document.getElementById("btn-deleted").disabled = false
  document.getElementById("btn-trama").disabled = false
}

function showModalDeleteAccount(){
  $('#modalDelete').modal('show')
}

function addToTable(){

  let n = document.getElementById("nAccount").value;

  if (n != "") {
    let table = document.getElementById('tb-data-accounts');
    let tbody = table.getElementsByTagName('tbody')[0];
    let rowS = tbody.getElementsByTagName('tr');

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

function deleteItem(button){
  var row = button.parentNode.parentNode.parentNode; // Obtener la fila que contiene el botón
  row.parentNode.removeChild(row);
}

function deleteAndConsult() {
  var table = document.getElementById('tb-data-accounts');
  var tbody = table.getElementsByTagName('tbody')[0];
  
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
  

  if(isEmpty()){
    Swal.fire(
      'Oops!',
      'La tabla está vacía!',
      'info'
    )
  }else{
    fetchTramaSaludpolExcludes(json)
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

function isEmpty() {
  var table = document.getElementById('tb-data-accounts');
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
  document.getElementById("tbodyAccount").innerHTML = ""
  document.getElementById("nAccount").value = "";
})