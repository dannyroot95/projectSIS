var controller 
var signal
var params = [] 
document.getElementById("inputGroupSelectYearSend").value = new Date().getFullYear()
document.getElementById("inputGroupSelectProductionMonth").value = new Date().getMonth()+1

createDatatable()
createDatatable2()
arrayParams()

function arrayParams(){
    for(let i = 1 ; i<= 86 ; i++){
        if(i == 1){
            params.push("x")
        }
        let x = 'A'+i.toString()
        params.push(x)
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

function query(){

    let mes = document.getElementById("inputGroupSelectProductionMonth")
    let anio = document.getElementById("inputGroupSelectYearSend")
    var mes_selected = mes.value
    var anio_selected = anio.value

    fetchTramaAtencion(mes_selected,anio_selected)
    

}

function fetchTramaAtencion(mes,anio){

        controller = new AbortController();
        signal = controller.signal;

        disabledButtons()
        
        fetch(`${url}/trama-atencion/${anio}/${mes}/${mes}`,{
            method: 'get',
            signal: signal,
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

function insertDataAtencion(data){
  
    
    document.getElementById("tbody").innerHTML = ""
    $('#tb-data').DataTable().destroy()

    $("#tbody").html(data.map((d) => {
        const cells = params.map(param => {

            let log = ""
            if (param == 'x') {

                return validateData(d)

                
            } else {
                return `<td class="minText2">${d[param]}</td>`;
            }
        }).join("");
    return `<tr style="cursor: pointer;">${cells}</tr>`;
    }).join(""));

      enableButtons()
      createDatatable()
      document.getElementById("btn-logs").style = "display:block;"

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
    let value 

    if(d["A1"] == "1012567"){
        ctx++
    }

    if(ctx > 0){
        value = `<td class="minText2"><button class="btn btn-danger" onclick="alert('Botón presionado')"><i class="bi bi-eye-fill"></i></button></td>`
    }else{
        value = `<td class="minText2"><button class="btn btn-success" onclick="alert('Botón presionado')"><i class="bi bi-file-check"></i></button></td>`
    }

   return value

}