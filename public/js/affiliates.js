
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
    loader.style = "display:none;"
  }

  function disabled(){
    document.getElementById("btn-search").disabled = true
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

  function searchWebService() {
    fetch(`${url}/get-afiliate-web-service`)
      .then(response => response.json())
      .then(data => {
        showDataAuth(data[0].server_response)
        // Accede a la información organizada
        //console.log('Success:', data[0].success); // 'autorizado'
        //console.log('Session ID:', data[0].server_response); // El ID de sesión obtenido del XML
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  function showDataAuth(data){
    var xmlString = data;
  
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xmlString, "text/xml");
    
    // Obtener la respuesta SOAP
    var response = xmlDoc.getElementsByTagName("GetSessionResponse")[0];    
    // Obtener los elementos de la respuesta
    var auth = response.getElementsByTagName("GetSessionResult")[0].textContent;
    searchWebServiceData(auth)
    console.log(auth)
  
  }

  function searchWebServiceData(auth) {
    fetch(`${url}/get-afiliate-web-service-data/${auth}`)
      .then(response => response.json())
      .then(data => {
        showDataAfiliate(data[0].server_response)
        // Accede a la información organizada
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }


  function showDataAfiliate(data) {
    var xmlString = data;
  
    // Parsear el XML
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xmlString, "text/xml");
  
    // Obtener la respuesta SOAP
    var response = xmlDoc.getElementsByTagName("ConsultarAfiliadoFuaEResult")[0];
  
    // Obtener los elementos de la respuesta
    var idError = response.getElementsByTagName("IdError")[0].textContent;
    var resultado = response.getElementsByTagName("Resultado")[0].textContent;
    var tipoDocumento = response.getElementsByTagName("TipoDocumento")[0].textContent;
    var nroDocumento = response.getElementsByTagName("NroDocumento")[0].textContent;
    var apePaterno = response.getElementsByTagName("ApePaterno")[0].textContent;
    var apeMaterno = response.getElementsByTagName("ApeMaterno")[0].textContent;
    var nombres = response.getElementsByTagName("Nombres")[0].textContent;
    var fecAfiliacion = response.getElementsByTagName("FecAfiliacion")[0].textContent;
    var eess = response.getElementsByTagName("EESS")[0].textContent;
    var descEESS = response.getElementsByTagName("DescEESS")[0].textContent;
    var eessUbigeo = response.getElementsByTagName("EESSUbigeo")[0].textContent;
    var descEESSUbigeo = response.getElementsByTagName("DescEESSUbigeo")[0].textContent;
    var regimen = response.getElementsByTagName("Regimen")[0].textContent;
    var tipoSeguro = response.getElementsByTagName("TipoSeguro")[0].textContent;
    var descTipoSeguro = response.getElementsByTagName("DescTipoSeguro")[0].textContent;
    var contrato = response.getElementsByTagName("Contrato")[0].textContent;
    var estado = response.getElementsByTagName("Estado")[0].textContent;
    var tabla = response.getElementsByTagName("Tabla")[0].textContent;
    var idNumReg = response.getElementsByTagName("IdNumReg")[0].textContent;
    var genero = response.getElementsByTagName("Genero")[0].textContent;
    var fecNacimiento = response.getElementsByTagName("FecNacimiento")[0].textContent;
    var idUbigeo = response.getElementsByTagName("IdUbigeo")[0].textContent;
    var disa = response.getElementsByTagName("Disa")[0].textContent;
    var tipoFormato = response.getElementsByTagName("TipoFormato")[0].textContent;
    var nroContrato = response.getElementsByTagName("NroContrato")[0].textContent;
    var correlativo = response.getElementsByTagName("Correlativo")[0].textContent;
    var idPlan = response.getElementsByTagName("IdPlan")[0].textContent;
    var idGrupoPoblacional = response.getElementsByTagName("IdGrupoPoblacional")[0].textContent;
    var msgConfidencial = response.getElementsByTagName("MsgConfidencial")[0].textContent;
  
    // Hacer lo que necesites con los datos extraídos
    console.log("IdError:", idError);
    console.log("Resultado:", resultado);
    console.log("TipoDocumento:", tipoDocumento);
    console.log("NroDocumento:", nroDocumento);
    console.log("ApePaterno:", apePaterno);
    console.log("ApeMaterno:", apeMaterno);
    console.log("Nombres:", nombres);
    console.log("FecAfiliacion:", fecAfiliacion);
    console.log("EESS:", eess);
    console.log("DescEESS:", descEESS);
    console.log("EESSUbigeo:", eessUbigeo);
    console.log("DescEESSUbigeo:", descEESSUbigeo);
    console.log("Regimen:", regimen);
    console.log("TipoSeguro:", tipoSeguro);
    console.log("DescTipoSeguro:", descTipoSeguro);
    console.log("Contrato:", contrato);
    console.log("Estado:", estado);
    console.log("Tabla:", tabla);
    console.log("IdNumReg:", idNumReg);
    console.log("Genero:", genero);
    console.log("FecNacimiento:", fecNacimiento);
    console.log("IdUbigeo:", idUbigeo);
    console.log("Disa:", disa);
    console.log("TipoFormato:", tipoFormato);
    console.log("NroContrato:", nroContrato);
    console.log("Correlativo:", correlativo);
    console.log("IdPlan:", idPlan);
    console.log("IdGrupoPoblacional:", idGrupoPoblacional);
    console.log("MsgConfidencial:", msgConfidencial);
    // ... Agrega más console.log según sea necesario
  }