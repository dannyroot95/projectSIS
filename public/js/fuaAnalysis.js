let type = 1

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
  