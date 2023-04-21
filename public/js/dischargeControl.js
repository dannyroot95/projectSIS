var controller 
var signal 
var allData

var arrayInc = []
createDatatable()

function createDatatable(){

    $('#tb-data').DataTable({
        language: {
              "decimal": "",
              "emptyTable": "No hay información",
              "info": "Mostrando _START_ a _END_ de _TOTAL_ datos",
              "infoEmpty": "<b>Mostrando 0 to 0 of 0 datos</b>",
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
       },scrollY: '50vh',
       scrollCollapse: true,
      });
  
      var table = $('#tb-data').DataTable();
      $('#container').css( 'display', 'block' );
      table.columns.adjust().draw();
}

function search(){

    let f1 = document.getElementById("d-init").value
    let f2 = document.getElementById("d-final").value


    if(f1 != "" && f2 != ""){

        getData(date(f1),date(f2))

    }else{
        Swal.fire(
            'Oops!',
            'Complete los campos!',
            'warning'
          )
    }

}

function getData(f1,f2){

    controller = new AbortController();
    signal = controller.signal;

    document.getElementById("btn-search").disabled = true
    document.getElementById("btn-xls").style = "display:none;"
    document.getElementById("btn-cancel").style = "display:block;"
    loader.style = "display:block;"

    fetch(`${url}/discharge_control/${f1}/${f2}`,{
        method: 'get',
        signal: signal,
        headers: {
          'Accept': 'application/json'
        }
    })
      .then(response => response.json())
      .then(data => {
        allData = data
          insertData(data)
          console.log(data)
      }).catch(err => {
          document.getElementById("btn-search").disabled = false
          console.log(err)
          loader.style = "display:none;"
      }); 


}

function insertData(data){

    document.getElementById("tbody").innerHTML = ""
    $('#tb-data').DataTable().destroy()

    $("#tbody").html(data.map((d) => {

        arrayInc.push([d.Ncuenta,d.Asegurado,d.HC,d.FF,d.F_ingreso,d.F_egreso,d.F_E_Administrativo,d.Origen,d.Servicio_egreso,d.E_cuenta,d.Usuario,d.Nombre_usuario,d.F_ultima_receta,d.TotalValorizado])

              return `

              <tr style="cursor: pointer;">
              <td class="minText2">${d.Ncuenta}</td>
              <td class="minText2">${d.Asegurado}</td>
              <td class="minText2">${d.HC}</td>
              <td class="minText2">${d.FF}</td>
              <td class="minText2">${isNulledDate(d.F_ingreso)}</td>
              <td class="minText2">${isNulledDate(d.F_egreso)}</td>
              <td class="minText2">${isNulledDate(d.F_E_Administrativo)}</td>
              <td class="minText2">${isNulledString(d.FUA)}</td>
              <td class="minText2">${d.Origen}</td>
              <td class="minText2">${d.Servicio_egreso}</td>
              <td class="minText2">${d.E_cuenta}</td>
              <td class="minText2">${isNulledString(d.Usuario)}</td>
              <td class="minText2">${isNulledString(d.Nombre_usuario)}</td>
              <td class="minText2">${isNulledDate(d.F_ultima_receta)}</td>
              <td class="minText2"><b style="color:green;">S/${d.TotalValorizado}</b></td>
              </tr>`;
          })
          .join("")
      );

      loader.style = "display:none;"
      document.getElementById("btn-search").disabled = false
      document.getElementById("btn-cancel").style = "display:none;"
      document.getElementById("btn-xls").style = "display:block;"
      createDatatable()

}


function cancel(){
  
    controller.abort();
    signal.addEventListener('abort', () => {
        console.log(signal.aborted);
    });
  
    document.getElementById("btn-cancel").style = "display:none;"
  
  }


  function isNulledDate(val){

    let x = val

    if(x == null || x == ""){
        x = "<b>Sin datos</b>"
    }else{
        x = date(x)
    }

    return x

  }

  function isNulledString(val){

    let x = val

    if(x == null || x == ""){
        x = "<b>Sin datos</b>"
    }

    return x

  }

  function exportToExcel(){
    let xls = new XlsExport(allData, 'reporte');
    xls.exportToXLS('control_de_altas.xls')
  }