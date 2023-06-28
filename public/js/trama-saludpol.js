

var trama1 = ``
var trama2 = ``
var trama3 = ``
var trama4 = ``
let allData = []
let report = []


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
            document.getElementById("btn-obs").style = "display:block;"
            document.getElementById("btn-report").style = "display:block;"
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
            document.getElementById("btn-obs").style = "display:block;"
            document.getElementById("btn-report").style = "display:block;"
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
            document.getElementById("btn-obs").style = "display:block;"
            document.getElementById("btn-report").style = "display:block;"
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
            document.getElementById("btn-obs").style = "display:block;"
            document.getElementById("btn-report").style = "display:block;"
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

  $('#tb-data-1').DataTable().destroy()
  $("#tbody").html(data.map((d) => {

    ctx++
    let color = "white"

    if(d.CAMPO3 == null){
      color = "#FFDFE7"
    }

    fetchReportSaludpol(d.CAMPO2)

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
document.getElementById("btn-obs").disabled = true
document.getElementById("btn-report").disabled = true
}


function enableButtons(){
  document.getElementById("btn-query").disabled = false
  document.getElementById("btn-deleted").disabled = false
  document.getElementById("btn-trama").disabled = false
  document.getElementById("btn-obs").disabled = false
  document.getElementById("btn-report").disabled = false
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

  let ctxPro = 0
  let gender = ``

  document.getElementById("loaderDetails").style = "display:block;"
  document.getElementById("tbodyDiag").innerHTML = ''
  document.getElementById("tbodyPro").innerHTML = ''
  document.getElementById("tbodyLab").innerHTML = ''
  document.getElementById("tbodyImg").innerHTML = ''
  document.getElementById("tbodyMed").innerHTML = ''
  document.getElementById("tbodyIns").innerHTML = ''
  document.getElementById("div-details").style="display: none;"
  document.getElementById("btn-edit-account").style="display: none;"


  if(d.CAMPO11 == 1){
    gender = `<i style="color: #001173;font-size: 30px;font-weight: bolder;" class="bi bi-gender-male"></i>&nbsp;`
  }else{ gender = `<i style="color: #ff2f41;font-size: 30px;font-weight: bolder;" class="bi bi-gender-female"></i>&nbsp;`}

  fetch(`${url}/get-atention-saludpol/${d.CAMPO2}`)
            .then(response => response.json())
            .then(data => {

              let t_pro = 0.0
              let t_lab = 0.0
              let t_img = 0.0
              let t_med = 0.0
              let t_ins = 0.0

              document.getElementById("d-ate").innerHTML = data[0][0].TipoServicio
              document.getElementById("d-auth").innerHTML = data[0][0].Autorizacion
              document.getElementById("d-account").innerHTML = data[0][0].idCuentaAtencion
              document.getElementById("d-fua").innerHTML = d.CAMPO1
              document.getElementById("d-history").innerHTML = data[0][0].NroHistoriaClinica
              
              document.getElementById("d-dni").innerHTML = data[0][0].NroDocumento
              document.getElementById("d-fullname").innerHTML = data[0][0].Nombres
              document.getElementById("d-sex").innerHTML = gender+data[0][0].Sexo
              document.getElementById("d-age").innerHTML = data[0][0].Edad
              document.getElementById("d-id-patient").innerHTML = data[0][0].IdPaciente
              document.getElementById("d-id-atention").innerHTML = data[0][0].IdAtencion

              document.getElementById("d-svi").innerHTML = data[0][0].ServicioIngreso
              document.getElementById("d-sve").innerHTML = data[0][0].ServicioEgreso
              document.getElementById("d-fi").innerHTML = data[0][0].FechaIngreso
              document.getElementById("d-fe").innerHTML = data[0][0].FechaEgreso

              document.getElementById("d-dig").innerHTML = isDataNull(data[0][0].Empleado)
              document.getElementById("d-ff").innerHTML = data[0][0].FuenteFinanciamiento

              document.getElementById("d-fur").innerHTML = dateNull(data[0][0].F_ultima_receta)

              document.getElementById("loaderDetails").style = "display:none;"
              document.getElementById("div-details").style = "display:block;"
              document.getElementById("btn-edit-account").style="display: block;"
              
              $("#tbodyDiag").html(data[1].map((d) => {
                
                      return `
                      <tr>
                      <td>${d.IdClasificacionDx}</td>
                      <td>${d.CodigoCIE2004}</td>
                      <td>${d.Descripcion}</td>
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
                      <td><button onclick="showModalDetailProcedure('${encodeURIComponent(JSON.stringify(d))}','${ctxPro}')" class="btn btn-dark"><i class="bi bi-pencil-square"></i></button></td>
                      </tr>`;

                  })
                  .join("")
              );
              document.getElementById("t-pro").innerHTML = t_pro.toFixed(2).toString()

              $("#tbodyLab").html(data[3].map((d) => {

                t_lab += parseFloat((d.Precio))
                
                      return `
                      <tr>
                      <td>${d.Codigo}</td>
                      <td>${(d.Nombre).trimEnd()}</td>
                      <td>${d.Cantidad}</td>
                      <td>${d.PrecioUnitario}</td>
                      <td>${d.Precio}</td>
                      <td><button class="btn btn-warning"><i class="bi bi-pencil-square"></i></button></td>
                      </tr>`;

                  })
                  .join("")
              );
              document.getElementById("t-lab").innerHTML = t_lab.toFixed(2).toString()

              $("#tbodyImg").html(data[4].map((d) => {

                t_img += parseFloat((d.Precio))
                
                      return `
                      <tr>
                      <td>${d.Codigo}</td>
                      <td>${(d.Nombre).trimEnd()}</td>
                      <td>${d.Cantidad}</td>
                      <td>${d.PrecioUnitario}</td>
                      <td>${d.Precio}</td>
                      <td><button class="btn btn-warning"><i class="bi bi-pencil-square"></i></button></td>
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
                      <td><button class="btn btn-warning"><i class="bi bi-pencil-square"></i></button></td>
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
                      <td><button class="btn btn-warning"><i class="bi bi-pencil-square"></i></button></td>
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
      'info'
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

function fetchReportSaludpol(n){

  fetch(`${url}/report-saludpol/${n}`)
            .then(response => response.json())
            .then(data => {
               
              for (var i = 0; i < data.length; i++) {
                var item = data[i];
                var newItem = {
                  "prestacion": convertBlank(item.prestacion),
                  "N°_Autorizacion": convertBlank(item.Autorizacion),
                  "Cuenta": convertBlank(item.idCuentaAtencion),
                  "Nombres": convertBlank(item.Nombres),
                  "Servicio": convertBlank(item.Nombres),
                  "dias_hosp": convertBlank(item.dias_hosp),
                  "Codigo": convertBlank(item.Codigo),
                  "Consumo": convertBlank(item.Nombre),
                  "Cantidad": convertBlank(item.Cantidad),
                  "Precio_Unitario": convertBlank('S/'+item.PrecioUnitario),
                  "Precio_Total": convertBlank('S/'+item.Precio),
                  'Verificacion_convenios':""
              }
              
              report.push(newItem);
            }

            }).catch(err =>{
                console.log(err)
            } );
          
}

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

  let xls = new XlsExport(report, 'reporte');
  xls.exportToXLS(`reporte_saludpol_${actual}.xls`)
}

function showModalDetailProcedure(data,index){
  data = JSON.parse(decodeURIComponent(data))
  $('#detailProcedure').modal('show')
  let account =  document.getElementById("d-account").innerHTML

  let code = data.Codigo  
  let procedure = data.Nombre

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

        let index = document.getElementById("index-pro").innerHTML
        var tabla = document.getElementById("tb-data-pro");
        var filaIndex = index; // Índice de la fila a actualizar (por ejemplo, la primera fila)
        var columnaIndex = 2; // Índice de la columna a actualizar (por ejemplo, la tercera columna)
        var celda = tabla.rows[filaIndex].cells[columnaIndex];
        
        // Actualizar el valor de la celda
        var nuevoValor = quantity; // El valor que deseas asignar a la celda
        celda.innerHTML = nuevoValor;

        let pUnit = tabla.rows[filaIndex].cells[3].textContent;
        let newSum = (parseInt(quantity)*parseFloat(pUnit))
        var newTotalCell = tabla.rows[filaIndex].cells[4];
        var nuevoValorTotal = newSum; // El valor que deseas asignar a la celda
        newTotalCell.innerHTML = nuevoValorTotal;

        var suma = 0;
          // Recorrer las filas de la tabla
          for (var i = 0; i < tabla.rows.length; i++) {
            // Obtener el valor de la celda en la posición deseada (tercera columna)
            var celda = tabla.rows[i].cells[4]; // Cambia el índice (2) según la posición de la columna que deseas sumar

            // Obtener el valor numérico de la celda y sumarlo a la variable suma
            var valor = parseFloat(celda.innerHTML);
            if (!isNaN(valor)) {
              suma += valor;
            }
          }
          document.getElementById("t-pro").innerHTML = suma.toFixed(2)
          let t_lab = parseFloat((document.getElementById("t-lab").innerHTML)).toFixed(2)
          let t_img = parseFloat((document.getElementById("t-img").innerHTML)).toFixed(2)
          let t_med = parseFloat((document.getElementById("t-med").innerHTML)).toFixed(2)
          let t_ins = parseFloat((document.getElementById("t-img").innerHTML)).toFixed(2)
          let consumo_total = (parseFloat((suma.toFixed(2)+t_lab+t_img+t_med+t_ins)).toFixed(2)).toString()
          document.getElementById("t-ate").innerHTML = consumo_total

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

  document.getElementById("et-f-in").value = date1ISO
  document.getElementById("et-f-out").value = date2ISO

  document.getElementById("ed-account").innerHTML = account

  if(doc_auth != ""){
    document.getElementById("ed-doc-auth").value = doc_auth
  }

  if(dni != ""){
    document.getElementById("ed-dni").value = dni
  }

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

    alert(id_atention+" "+code)

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

