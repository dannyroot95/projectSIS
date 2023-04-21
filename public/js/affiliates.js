
$('#chk2').change(function() {
    if(this.checked != true){
        document.getElementById("d-aMaterno").style = "display:block;"
          document.getElementById("i-aMaterno").style = "display:block;"
     }
  else{
    document.getElementById("d-aMaterno").style = "display:none;"
    document.getElementById("i-aMaterno").style = "display:none;"
  } 
});


function search(){

    let n = document.getElementById("nro-formato").value

    if(n != ""){
        disabled()
        fetch(`${url}/affiliate/${n}`,{
          method: 'get',
          headers: {
            'Accept': 'application/json'
          }
      })
        .then(response => response.json())
        .then(data => {
            if(data.error == "sin datos"){
                Swal.fire(
                    'Oops',
                    'Sin resultados!',
                    'info'
                  )
                  enable()
            }else{
                insertData(data)
            }
        }).catch(err => {
            console.log(err)
        });  

    }else{
        Swal.fire(
            'Oops',
            'Complete los campos!',
            'info'
          )
    }

}

function add(){
    $('#addModal').modal('show')
}

function insertData(data){
    enable()
    document.getElementById("tbody").innerHTML = ""
    $("#tbody").html(data.map((d) => {
              return `
              <tr>
              <th><center>Nombres</center></th>
              <td><center>${d.Paterno+' '+isNulled(d.Materno)+' '+d.Pnombre+' '+isNulled(d.Onombres).toUpperCase()}</center></td>
              </tr>
              
              <tr>
              <th><center>ID Siasis</center></th>
              <td><center>${d.idSiasis}</center></td>
              </tr>

              <tr>
              <th><center>Afiliación disa</center></th>
              <td><center>${d.AfiliacionDisa}</center></td>
              </tr>

              <tr>
              <th><center>Afiliación tipo</center></th>
              <td><center>${d.AfiliacionTipoFormato}</center></td>
              </tr>
              
              <tr>
              <th><center>Afiliación N° formato</center></th>
              <td><center>${d.AfiliacionNroFormato}</center></td>
              </tr>

              <tr>
              <th><center>Correlativo</center></th>
              <td><center>${hasCorrelative(d.AfiliacionNroIntegrante)}</center></td>
              </tr>

              <tr>
              <th><center>Tipo de documento</center></th>
              <td><center>${typeDoc(d.DocumentoTipo)}</center></td>
              </tr>

              <tr>
              <th><center>Número de documento</center></th>
              <td><center>${isNulledString(d.DocumentoNumero)}</center></td>
              </tr>
              
              <tr>
              <th><center>Código de establecimiento</center></th>
              <td><center>${isNulled(d.CodigoEstablAdscripcion)}</center></td>
              </tr>

              <tr>
              <th><center>Fecha de afiliación</center></th>
              <td><center>${date(d.AfiliacionFecha)}</center></td>
              </tr>

              
              <tr>
              <th><center>Fecha de nacimiento</center></th>
              <td><center>${date(d.Fnacimiento)}</center></td>
              </tr>

              <tr>
              <th><center>Género</center></th>
              <td><center>${gender(d.Genero)}</center></td>
              </tr>

              
              <tr>
              <th><center>ID de distrito</center></th>
              <td><center>${d.IdDistritoDomicilio}</center></td>
              </tr>

              <tr>
              <th><center>Estado</center></th>
              <td><center>${statusF(d.Estado)}</center></td>
              </tr>

              <tr>
              <th><center>Fecha de baja</center></th>
              <td><center>${isNulledString(d.Fbaja)}</center></td>
              </tr>

              <tr>
              <th><center>Motivo de baja</center></th>
              <td><center>${isNulledString(d.MotivoBaja)}</center></td>
              </tr>

              `;

          })
          .join("")
      );

}

function details(d){
    d = JSON.parse(decodeURIComponent(d))
}

function deleteSymbols(event) {
    let input = event.target;
    let text = input.value;
    input.value = text.replace(/[^\w\s]/gi, '');
  }

  function enable(){
    document.getElementById("btn-search").disabled = false
    document.getElementById("btn-add").disabled = false
    loader.style = "display:none;"
  }

  function disabled(){
    document.getElementById("btn-search").disabled = true
    document.getElementById("btn-add").disabled = true
    loader.style = "display:block;"
  }

  function isNulled(val){

    let x = val

    if(x == null || x == "" || x == "__________"){
        x = ""
    }

    return x

  }

  function isNulledString(val){

    let x = val

    if(x == null || x == "" || x == "__________"){
        x = "<b>Sin registro</b>"
    }

    return x

  }

  function hasCorrelative(val){
    let x = val

    if(x == null || x == ""){
        x = "<b>Sin registro</b>"
    }

    return x
  }

  function typeDoc(val){

    let doc = "Sin registro"

    if(val == '1'){doc = "dni"}
    else if(val == '2'){doc = "Código temporal ó Sin registro de Madre/tutor"}
    else if(val == '3'){doc = "Carnet de Extranjeria"}

    return doc.toUpperCase()

  }

  function gender(val){

    let doc = "masculino"

    if(val == '1'){doc = `<i style="color:blue;" class='bx bx-male' ></i> masculino`}
    else if(val == '0'){doc = `<i style="color:red;" class='bx bx-female-sign'></i> femenino`}
    else{
        doc = "<b>Sin registro</b>"
    }

    return doc.toUpperCase()

  }

  function statusF(val){

    let doc = "<b>Sin registro</b>"

    if(val == '1'){doc = `<b style="color:red;">Inactivo</b>`}
    else if(val == '0'){doc = `<b style="color:green;">Activo</b>`}

    return doc.toUpperCase()

  }