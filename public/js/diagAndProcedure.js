
var allData=[]
createDatatable()

function clearJSON(data){
    const pacientes = {};
    for (let i = 0; i < data.length; i++) {
      const paciente = data[i];
      const { 
        NroHistoriaClinica,nrocuenta,ApellidoPaterno, ApellidoMaterno,PrimerNombre,SegundoNombre,sexo,
        Edad,tipoedad,departamento,provincia,distrito,codogoseguro,seguro,FechaSolicitud,HoraInicio,FechaApertura,HoraIngreso,FechaEgreso,HoraEgreso,Codigo,
        Nombre,Telefono,DireccionDomicilio,MedicoAtiende,Establecimieto_Origen,NroReferenciaOrigen,diaggnostico_referencia,Referencia_Destino,NroReferenciaDestino,Usuariodigitaros,
        Fecha_Digitador,horaInicioAtencion,dnipaciente,formacita,IdAtencion,IdCita} = paciente;
      const diagnostico = paciente.diagnostico;
      const pacienteActual = pacientes[nrocuenta];
  
      if (!pacienteActual) {
        pacientes[nrocuenta] = {
          NroHistoriaClinica,nrocuenta,ApellidoPaterno, ApellidoMaterno,PrimerNombre,SegundoNombre,sexo,
          Edad,tipoedad,departamento,provincia,distrito,codogoseguro,seguro,FechaSolicitud,HoraInicio,FechaApertura,HoraIngreso,FechaEgreso,HoraEgreso,Codigo,
          Nombre,Telefono,DireccionDomicilio,MedicoAtiende,Establecimieto_Origen,NroReferenciaOrigen,diaggnostico_referencia,Referencia_Destino,NroReferenciaDestino,Usuariodigitaros,
          Fecha_Digitador,horaInicioAtencion,dnipaciente,formacita,IdAtencion,IdCita,
          diagnostico1: diagnostico.trim(),
          diagnostico2: null,
          diagnostico3: null,
          diagnostico4: null,
          diagnostico5: null,
          diagnostico6: null
        };
      } else {
        for (let j = 2; j <= 6; j++) {
          if (pacienteActual[`diagnostico${j}`] === null) {
            pacienteActual[`diagnostico${j}`] = diagnostico.trim();
            break;
          }
        }
      }
    }
    let x =  Object.values(pacientes)
    insertData(x)
   

}

function query(){


    let d1 = document.getElementById("d-init").value
    let d2 = document.getElementById("d-final").value
   
    if(d1 != ""){
        let x = d1.split("-")
        fetchQuery(x[0],x[1])
    } 

}

function fetchQuery(d1,d2){
    disabledButtons()
    fetch(`${url}/diagnosticos_procedimientos/${d1}/${d2}`,{
        method: 'get',
        headers: {
          'Accept': 'application/json'
        }
    })
      .then(response => response.json())
      .then(data => {

        clearJSON(data)

      }).catch(err => {
        
        console.log(err)
        enableButtons()
      }); 
}

function insertData(data){
    document.getElementById("tbody").innerHTML = ""
    

    $('#tb-data').DataTable().destroy()

    $("#tbody").html(data.map((d) => {

        var d1 = ""
        var d2 = ""
        var d3 = ""
        var d4 = ""
        var d5 = ""
        var d6 = ""

        if(d.diagnostico1 == null ){
          d1="-"
        }else {d1 = d.diagnostico1}
        if(d.diagnostico2 == null ){
          d2="-"
        }else {d2 = d.diagnostico2}
        if(d.diagnostico3 == null ){
          d3="-"
        }else {d3 = d.diagnostico3}
        if(d.diagnostico4 == null ){
          d4="-"
        }else {d4 = d.diagnostico4}
        if(d.diagnostico5 == null ){
          d5="-"
        }else {d5 = d.diagnostico5}
        if(d.diagnostico6 == null ){
          d6="-"
        }else {d6 = d.diagnostico6}
 

              return `
              <tr style="cursor: pointer;">
              <td class="minText2">${d.NroHistoriaClinica}</td>
              <td class="minText2">${d.nrocuenta}</td>
              <td class="minText2">${d.ApellidoPaterno+" "+d.ApellidoMaterno+" "+d.PrimerNombre}</td>
              <td class="minText2">${d1}</td>
              <td class="minText2">${d2}</td>
              <td class="minText2">${d3}</td>
              <td class="minText2">${d4}</td>
              <td class="minText2">${d5}</td>
              <td class="minText2">${d6}</td>
              </tr>`;
          })
          .join("")
      );

      createDatatable()

      setTimeout(function() {
        document.getElementById("tr-table").click();
      }, 500);

      enableButtons()

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
       },scrollY: '50vh',scrollX: true, sScrollXInner: "100%",
       scrollCollapse: true,
      });
  
      var table = $('#tb-data').DataTable();
      $('#container').css( 'display', 'block' );
      table.columns.adjust().draw();

}

function exportToExcel(){
    let xls = new XlsExport(allData, 'reporte');
    xls.exportToXLS('reporte_de_seguros.xls')
  }

  function disabledButtons(){
    loader.style = "display:block;"
    document.getElementById("btn-xls").disabled = true
    document.getElementById("btn-search").disabled = true
    }
    
    function enableButtons(){
    loader.style = "display:none;"
    document.getElementById("btn-xls").disabled = false
    document.getElementById("btn-search").disabled = false
    }