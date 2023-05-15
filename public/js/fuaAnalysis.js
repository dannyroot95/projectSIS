var type = document.getElementById("selectFilters")

type.addEventListener('change', function handleChange(event) {
  let value = event.target.value
  
  if(value == 1){
    byName()
  }else if(value == 2){
    byFUA()
  }else if(value == 3){
    byAccount()
  }else{
    byDNI()
  }

})

function search(){

    
    let fua = document.getElementById("fua").value
    let lote = document.getElementById("lote").value
      
    fetch(`${url}/get-fua-by-num-and-lote/${fua}/${lote}`,{
        method: 'get',
        headers: {
          'Accept': 'application/json'
        }
    })
      .then(response => response.json())
      .then(data => {
    
        let x = data[0]
        document.getElementById("name").innerHTML = x.NombrePaciente
        document.getElementById("fechaAte").innerHTML = x.FuaAtencionFecha
        document.getElementById("cuenta").innerHTML = x.idCuentaAtencion
        document.getElementById("medico").innerHTML = (x.FuaMedico).toUpperCase()
        document.getElementById("digitador").innerHTML = x.NombreDigitador
        
      }).catch(err => {
        
        console.log(err)
        enableButtonsError()
      }); 
  
  }
  

  function byName(){

    let x = `
    <div class="input-group-prepend">
              <span class="input-group-text">A.Paterno</span>
              </div>
              <input type="tel" class="form-control" id="ap">

              <div class="input-group-prepend">
              <span class="input-group-text">A.Materno</span>
              </div>
              <input type="text" class="form-control" id="am">

              <div class="input-group-prepend">
              <span class="input-group-text">Nombres</span>
              </div>
              <input type="text" class="form-control" id="fullname">
    `
    let type = `
    <div class="table-responsive">
      <table class="table table-hover table-bordered display" id="tb-data">
          <thead>
            <tr>
              <th scope="col"><center>#</center></th>
              <th scope="col"><center>Paciente</center></th>
              <th scope="col"><center>Fecha de atención (FUA)</center></th>
              <th scope="col"><center>N° de cuenta</center></th>
              <th scope="col"><center>Médico</center></th>
              <th scope="col"><center>Digitador</center></th>
            </tr>
          </thead>
          <tbody id="tbody">
          </tbody>
        </table>
      </div>
    `

    document.getElementById("content").innerHTML = ''
    document.getElementById("content").innerHTML = x
    document.getElementById("type-content").innerHTML = ''
    document.getElementById("type-content").innerHTML = type
  }

  function byFUA(){

    let x = `
    <div class="input-group-prepend">
    <span class="input-group-text">FUA</span>
    </div>
    <input type="tel" class="form-control" id="fua">
    <div class="input-group-prepend">
    <span class="input-group-text">Lote</span>
    </div>
    <input type="tel" maxLength="2" class="form-control" id="lote">`
    let type = `
    <div class="card">
    <h2 class="card-header" id="name">PACIENTE</h2>
    <div class="card-body">
      <div style="display: flex; align-items: center;">
        <i class="bi bi-file-post fa-7x" style="margin-right: 1%;font-size: 80px;"></i>
        <div>
        <label style="display: flex;"><h5 class="card-title">Fecha de atencion (FUA) :</h5>&nbsp;<h5 class="card-title" style="color: blue;" id="fechaAte"></h5></label>
        <label style="display: flex;"><h5 class="card-title">N° de cuenta :</h5>&nbsp;<h5 class="card-title" style="color: blue;" id="cuenta"></h5></label>
        <label style="display: flex;"><h5 class="card-title">Médico :</h5>&nbsp;<h5 class="card-title" style="color: rgb(0, 107, 27);" id="medico"></h5></label>
        <label style="display: flex;"><h5 class="card-title">Digitador :</h5>&nbsp;<h5 class="card-title" style="color: rgb(212, 0, 0);" id="digitador"></h5></label>
        </div>
      </div>
      <p></p>
    </div>
  </div>
    `
    document.getElementById("content").innerHTML = ''
    document.getElementById("content").innerHTML = x
    document.getElementById("type-content").innerHTML = ''
    document.getElementById("type-content").innerHTML = type
  }

  function byAccount(){

    let x = `
    <div class="input-group-prepend">
    <span class="input-group-text">N° de cuenta</span>
    </div>
    <input type="number" class="form-control" id="account">`
    let type = `
    <div class="table-responsive">
      <table class="table table-hover table-bordered display" id="tb-data">
          <thead>
            <tr>
              <th scope="col"><center>#</center></th>
              <th scope="col"><center>Paciente</center></th>
              <th scope="col"><center>Fecha de atención (FUA)</center></th>
              <th scope="col"><center>N° de cuenta</center></th>
              <th scope="col"><center>Médico</center></th>
              <th scope="col"><center>Digitador</center></th>
            </tr>
          </thead>
          <tbody id="tbody">
          </tbody>
        </table>
      </div>
    `
    document.getElementById("content").innerHTML = ''
    document.getElementById("content").innerHTML = x
    document.getElementById("type-content").innerHTML = ''
    document.getElementById("type-content").innerHTML = type
  }

  function byDNI(){

    let x = `
    <div class="input-group-prepend">
    <span class="input-group-text">N° de DNI</span>
    </div>
    <input type="number" maxLength="" class="form-control" id="dni">`
    let type = `
    <div class="table-responsive">
      <table class="table table-hover table-bordered display" id="tb-data">
          <thead>
            <tr>
              <th scope="col"><center>#</center></th>
              <th scope="col"><center>Paciente</center></th>
              <th scope="col"><center>Fecha de atención (FUA)</center></th>
              <th scope="col"><center>N° de cuenta</center></th>
              <th scope="col"><center>Médico</center></th>
              <th scope="col"><center>Digitador</center></th>
            </tr>
          </thead>
          <tbody id="tbody">
          </tbody>
        </table>
      </div>
    `

    document.getElementById("content").innerHTML = ''
    document.getElementById("content").innerHTML = x
    document.getElementById("type-content").innerHTML = ''
    document.getElementById("type-content").innerHTML = type
  }