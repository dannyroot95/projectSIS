
function search(){

    let d_init = document.getElementById("d-init").value
    let d_final = document.getElementById("d-final").value

    if(d_init != "" && d_final != ""){

        fetch(`${url}/production/${d_init}/${d_final}`,{
            method: 'get',
            headers: {
              'Accept': 'application/json'
            }
        })
          .then(response => response.json())
          .then(data => {
      
              insertData(data)
      
          }).catch(err => {
              console.log(err)
          });  

    }else{
        Swal.fire(
            'Oops!',
            'Complete los campos!',
            'warning'
          )
    }

}


function insertData(data){

    $("#tbody").html(data.map((d) => {

        
        ctx++

              return `

              <tr style="cursor: pointer;" onclick="openDetails('${encodeURIComponent(JSON.stringify(d))}')">
              <td class="minText2">${ctx}</td>
              <td class="minText2">${d.IdCuentaAtencion}</td>
              <td class="minText2">${d.Nombres}</td>
              <td class="minText2">${d.NroHistoriaClinica}</td>
              <td class="minText2">${date1}</td>
              <td class="minText2">${date2}</td>
              <td class="minText2">${date3}</td>
              <td class="minText2">${getStatus(d.estado)}</td>
              <td>${getValue(d.diagnostico)}</td>
              <td>${getValue(d.procedimientos)}</td>
              <td>${getValue(d.laboratorio)}</td>
              <td>${getValue(d.imagenes)}</td>
              <td><button class="btn btn-primary" style="font-size:12px;">Detalles</td>
              </tr>`;
          })
          .join("")
      );



}


