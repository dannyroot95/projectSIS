let loader = document.getElementById("loader")
let chart = document.getElementById("myChart")
let pie = document.getElementById("myChartPie")
let print = document.getElementById("btn-print")
let divFilter = document.getElementById("divFilter")
let divSelectors = document.getElementById("selectors")

let atentionSelector = document.getElementById("atentionSelector")
let spanAtention = document.getElementById("sp-ate")

let serviceSelector = document.getElementById("serviceSelector")
let spanService = document.getElementById("sp-ser")

let spanMedic = document.getElementById("sp-med")
let medicSelector = document.getElementById("medicosSelector")

let arrayMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
let arrayDaysOfWeek = ['Lunes','Martes','Miercoles',]
var json = []

const chkMedic = document.getElementById("chkMedic")
const chkAtention = document.getElementById("chkTypeAtention")
const chkService = document.getElementById("chkService")

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})


yearLater()

// ------------------ EVENTS LISTENER DE CHECKBOXES------------------------------

chkMedic.addEventListener("change", function() {
  // Aquí puedes realizar acciones basadas en el estado del checkbox
  if (chkMedic.checked) {
    medicSelector.style = "display:block;"
    spanMedic.style =  "display:block;"
  } else {
      // Si el checkbox no está marcado
      medicSelector.style = "display:none;"
      spanMedic.style =  "display:none;"
      // Aquí puedes realizar acciones adicionales
  }
});
chkAtention.addEventListener("change", function() {
  // Aquí puedes realizar acciones basadas en el estado del checkbox
  if (chkAtention.checked) {
    spanAtention.style =  "display:block;"
    atentionSelector.style = "display:block;"
  } else {
      // Si el checkbox no está marcado
      atentionSelector.style = "display:none;"
      spanAtention.style =  "display:none;"
      getServices(json)
      // Aquí puedes realizar acciones adicionales
  }
});
chkService.addEventListener("change", function() {
  // Aquí puedes realizar acciones basadas en el estado del checkbox
  if (chkService.checked) {
    spanService.style =  "display:block;"
    serviceSelector.style = "display:block;"
  } else {
      // Si el checkbox no está marcado
      spanService.style = "display:none;"
      serviceSelector.style =  "display:none;"
      getMedics(json)
      // Aquí puedes realizar acciones adicionales
  }
});
// -----------------------------------------------------------------------------

// ------------------ EVENTS LISTENER DE SELECTORS------------------------------
//----------1
medicSelector.addEventListener("change", function () {
  const selectedMedico = medicSelector.value;
  const selectedServ = serviceSelector.value;
  if(chkAtention.checked && chkService.checked){
    const selectedAte = atentionSelector.value;
    if(selectedAte != '0' && selectedServ != '0'){
      getMedicAndService(json, selectedMedico , selectedServ );
      Toast.fire({
        icon: 'success',
        title: 'Datos filtrados!',
      
      })
    }else{
      Toast.fire({
        icon: 'info',
        title: 'Debe seleccionar al un tipo de atencion y servicio!',
        background: '#C70039'
      })
    } 
  }
  else if(chkAtention.checked){
    const selectedAte = atentionSelector.value;
    if(selectedAte != '0'){
      getMedicAndAtention(json, selectedMedico , selectedAte );
      Toast.fire({
        icon: 'success',
        title: 'Datos filtrados!',
      
      })
    }else{
      Toast.fire({
        icon: 'info',
        title: 'Debe seleccionar al menos un tipo de atencion!',
        background: '#C70039'
      })
    } 
  }else if(chkService.checked){
    const selectedServ= serviceSelector.value;
    if(selectedServ != '0'){
      getMedicAndService(json, selectedMedico , selectedServ );
      Toast.fire({
        icon: 'success',
        title: 'Datos filtrados!',
      
      })
    }else{
      Toast.fire({
        icon: 'info',
        title: 'Debe seleccionar al menos un tipo de servicio!',
        background: '#C70039'
      })
    } 
  }
  
  else{
    getAtentionMedicOnly(json, selectedMedico);
  }
});
//----------2
atentionSelector.addEventListener("change", function () {
  const selectedAte = atentionSelector.value;
  getMedicsByAtention(json,selectedAte)
  getServiceByAtention(json,selectedAte)

  if(chkMedic.checked && chkService.checked){
    const selectedMedico = medicSelector.value;
    const selectedServ= serviceSelector.value;
    if(selectedMedico != '0' && selectedServ != '0' ){
      getMedicAndService(json, selectedMedico , selectedServ );
      Toast.fire({
        icon: 'success',
        title: 'Datos filtrados!',
      
      })
    }else{
      Toast.fire({
        icon: 'info',
        title: 'Debe seleccionar al menos un medico y servicio!',
        background: '#C70039'
      })
    } 
  }
  else if(chkMedic.checked){
    const selectedMedico = medicSelector.value;
    if(selectedMedico != '0'){
      getMedicAndAtention(json, selectedMedico , selectedAte );
      Toast.fire({
        icon: 'success',
        title: 'Datos filtrados!',
      
      })
    }else{
      Toast.fire({
        icon: 'info',
        title: 'Debe seleccionar al menos un medico!',
        background: '#C70039'
      })
    } 
  }else{
    getTypeAtentionOnly(json, selectedAte);
  }
});
//----------3
serviceSelector.addEventListener("change", function () {
  const selectedServ = serviceSelector.value;
  getMedicsByService(json,selectedServ)
  if(chkMedic.checked){
    const selectedMedico = medicSelector.value;
    if(selectedMedico != '0'){
      getMedicAndService(json, selectedMedico , selectedServ );
      Toast.fire({
        icon: 'success',
        title: 'Datos filtrados!',
      
      })
    }else{
      Toast.fire({
        icon: 'info',
        title: 'Debe seleccionar al menos un medico!',
        background: '#C70039'
      })
    } 
  }else{
    getServiceOnly(json, selectedServ);
  }
});

// -----------------------------------------------------------------------------

function setGraph(){

    let drop = document.getElementById("dp_graph").value

    if(drop != "0"){
        enableLoader()
        fetchGraph(drop)
    }else{
        Swal.fire(
            'Oops',
            'Seleccione una producción!',
            'info'
          ) 
    }
}

function enableLoader(){
    loader.style = "display:block;"
    chart.style = "display:none;"
    pie.style = "display:none;"
    print.style = "display:none;"
    divFilter.style = "display:none;"
    divSelectors.style = "display:none;"
    
    chkAtention.checked = false
    chkMedic.checked = false
    chkService.checked = false
    medicSelector.style = "display:none;"
    atentionSelector.style = "display:none;"
    serviceSelector.style = "display:none;"
    spanAtention.style = "display:none;"
    spanMedic.style = "display:none;"
    spanService.style = "display:none;"

}

function disableLoader(){
    loader.style = "display:none;"
    chart.style = "display:block;"
    pie.style = "display:block;"
    print.style = "display:block;"
    divFilter.style = "display:block;"
    divSelectors.style = "display:flex;width:80%;"
}

function yearLater(){
    var select = document.getElementById("dp_graph");
    // Obtener el año actual
    var currentYear = new Date().getFullYear();
    // Agregar las opciones de los tres años anteriores y el actual
    for (var i = currentYear - 3; i <= currentYear; i++) {
      var option = document.createElement("option");
      option.value = i;
      option.text = i;
      // Establecer el año actual como seleccionado por defecto
      if (i === currentYear) {
        option.selected = true;
      }
      select.appendChild(option);
    }

  }

  function loadChart(allData,totalAtenciones){
    let chartConfig = {
        type: 'bar',
        plot: {
          stacked: true
        },
        title: {
            "text": "TOTAL DE ATENCIONES : "+totalAtenciones,
            "font-color": "#000",
            "backgroundColor": "none",
            "font-size": "22px",
            "alpha": 1,
            "adjust-layout": true,
          },
        tooltip: {
          text: 'Cantidad: %v',
          textAlign: 'left'
        },
        scaleX: {
          labels: arrayMonths,
          "item":{  
            "font-size":"18px",
            "font-color":"#000"  
        } 
        },
        
        scaleY: {
            "item":{  
              "font-size":"14px",
              "font-color":"#000"  
          } 
          }

        ,
       
        series: [{
            values: allData,
            backgroundColor: "#6666FF #FF0066",
            alpha: 0.5,
            valueBox: {
              placement: 'top',
              'font-color': "#000",
              'font-size': "14px",
              rules: [{
                rule: '%offset-values == 0',
                visible: false
              }]
            }
          },
        ]
      };
       
      zingchart.render({
        id: 'myChart',
        data: chartConfig,
        height: '100%',
        width: '100%'
      });
      disableLoader()
  }

 function fetchGraph(year){

    fetch(`${url}/get-graph/${year}`,{
        method: 'get',
        headers: {
          'Accept': 'application/json'
        }
    })
      .then(response => response.json())
      .then(data => {
       
        json = data
        let totalAtenciones = 0;
        const totalesPorFuente = {};

        const totalesPorMes = new Array(12).fill(0);
        // Recorrer el JSON y sumar los totales por mes
        data.forEach(entry => {
        const mes = entry.mes - 1; // Restar 1 para ajustar al índice del array
        totalesPorMes[mes] += entry.totalatenciones;
        totalAtenciones += entry.totalatenciones;

        const fuenteFin = entry.fuenteFin;

        if (!totalesPorFuente[fuenteFin]) {
            totalesPorFuente[fuenteFin] = 0;
        }
        totalesPorFuente[fuenteFin] += entry.totalatenciones

        });

        console.log(totalesPorFuente)

        loadChart(totalesPorMes,totalAtenciones)
        loadPie(totalesPorFuente)
        getMedics(data)
        getTypeAtention(data)
        getServices(data)

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

 function loadPie(totalesPorFuente){
    var myConfig = {
        "type": "pie",
        legend: {
            x: "79%",
            y: "1%",
            'border-width': 1,
            'border-color': "gray",
            'border-radius': "5px",
            header: {
              text: "Fuente de Financiamiento ",
              'font-family': "Arial",
              'font-size': 12,
              'font-color': "#000",
              'font-weight': "normal"
            },
        },
        "plot": {
            "value-box": {
              "visible": true,
              "placement": "out",
              "text": "%t (%v) - %npv%"
            }
        },
        "series": Object.keys(totalesPorFuente).map(fuente => {
            return {
                "values": [totalesPorFuente[fuente]],
                "text": fuente
            };
        })
    };

    zingchart.render({
        id: 'myChartPie',
        data: myConfig,
        height: 400,
        width: "100%"
    });
 }

 function printer(){

    Swal.fire({
        title: 'En breves se descargará el archivo!',
        timer: 5000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
        },
      })

      html2canvas(document.querySelector("#myChart")).then(canvas => {
        //document.body.appendChild(canvas)

        html2canvas(document.querySelector("#myChartPie")).then(canvas2 => {
            //document.body.appendChild(canvas)
            
            var pdf = new jspdf.jsPDF()
          
            pdf.setFontSize(18)
            pdf.text(30, 16, "HOSPITAL SANTA ROSA")
            pdf.setFontSize(9)
            pdf.text(30, 20, "Reporte de atenciones")
            //pdf.text(30, 26, "Fecha : "+onlyDateNumber(Date.now()))
            pdf.setFontSize(12)
            pdf.addImage('/image/logoHSR.png', 'PNG', 4, 7, 22, 12)
          
            pdf.addImage(canvas, 'JPEG', 7, 32, 195, 90);
            pdf.addImage(canvas2, 'JPEG', -48, 140, 280, 66);


            pdf.save('reporte-de-atenciones'+'.pdf')
          

          });
      
      });

}

// ----------------------------------SELECTORS-------------------------------------------

function getMedics(data){
  const selectElement = document.getElementById("medicosSelector");
  selectElement.innerHTML = '';

  // Crear un conjunto para almacenar nombres de médicos únicos
  const medicosUnicos = new Set();

  // Recorre el array 'data' y agrega los nombres de médicos al conjunto
  data.forEach(item => {
      medicosUnicos.add(item.ApellidosNombres);
  });

  // Crear la opción "Seleccione un médico..." deshabilitada
  const placeholderOption = document.createElement("option");
  placeholderOption.value = "0";
  placeholderOption.textContent = "Seleccione un médico...";
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  selectElement.appendChild(placeholderOption);

  // Crear opciones para los nombres de médicos únicos
  medicosUnicos.forEach(medico => {
      const option = document.createElement("option");
      option.value = medico;
      option.textContent = medico;
      selectElement.appendChild(option);
  });
}

function getTypeAtention(data){
  const selectElement = document.getElementById("atentionSelector");
  selectElement.innerHTML = '';

  // Crear un conjunto para almacenar nombres de médicos únicos
  const atention = new Set();

  // Recorre el array 'data' y agrega los nombres de médicos al conjunto
  data.forEach(item => {
    atention.add(item.Descripcion);
  });

  // Crear la opción "Seleccione un médico..." deshabilitada
  const placeholderOption = document.createElement("option");
  placeholderOption.value = "0";
  placeholderOption.textContent = "Seleccione un tipo de atencion...";
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  selectElement.appendChild(placeholderOption);

  // Crear opciones para los nombres de médicos únicos
  atention.forEach(AT => {
      const option = document.createElement("option");
      option.value = AT;
      option.textContent = AT;
      selectElement.appendChild(option);
  });
}

function getServices(data){
  const selectElement = document.getElementById("serviceSelector");
  selectElement.innerHTML = '';

  // Crear un conjunto para almacenar nombres de médicos únicos
  const service = new Set();

  // Recorre el array 'data' y agrega los nombres de médicos al conjunto
  data.forEach(item => {
    service.add(item.TipoServicio);
  });

  // Crear la opción "Seleccione un médico..." deshabilitada
  const placeholderOption = document.createElement("option");
  placeholderOption.value = "0";
  placeholderOption.textContent = "Seleccione un tipo de servicio...";
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  selectElement.appendChild(placeholderOption);

  // Crear opciones para los nombres de médicos únicos
  service.forEach(AT => {
      const option = document.createElement("option");
      option.value = AT;
      option.textContent = AT;
      selectElement.appendChild(option);
  });
}

// -----------------------------------------------------------------------------


// -------------------------POR SOLO UN TIPO DE CHECK----------------------------

function getAtentionMedicOnly(data, medico) {
  // Filtrar los datos por el nombre del médico
  let totalAtenciones = 0;
  const totalesPorFuente = {};
  const totalesPorMes = new Array(12).fill(0);

  // Filtrar los datos por el nombre del médico
  const datosMedico = data.filter(item => item.ApellidosNombres === medico);

  // Recorrer los datos del médico y sumar los totales por mes y fuente de financiamiento
  datosMedico.forEach(entry => {
      const mes = entry.mes - 1; // Restar 1 para ajustar al índice del array
      totalesPorMes[mes] += entry.totalatenciones;
      totalAtenciones += entry.totalatenciones;

      const fuenteFin = entry.fuenteFin;

      if (!totalesPorFuente[fuenteFin]) {
          totalesPorFuente[fuenteFin] = 0;
      }
      totalesPorFuente[fuenteFin] += entry.totalatenciones;
  });

  console.log(totalesPorFuente);

  loadChart(totalesPorMes, totalAtenciones);
  loadPie(totalesPorFuente);
}

function getTypeAtentionOnly(data, typeAte) {
  // Filtrar los datos por el nombre del médico
  let totalAtenciones = 0;
  const totalesPorFuente = {};
  const totalesPorMes = new Array(12).fill(0);

  // Filtrar los datos por el nombre del médico
  const datosAtencion = data.filter(item => item.Descripcion === typeAte);

  // Recorrer los datos del médico y sumar los totales por mes y fuente de financiamiento
  datosAtencion.forEach(entry => {
      const mes = entry.mes - 1; // Restar 1 para ajustar al índice del array
      totalesPorMes[mes] += entry.totalatenciones;
      totalAtenciones += entry.totalatenciones;

      const fuenteFin = entry.fuenteFin;

      if (!totalesPorFuente[fuenteFin]) {
          totalesPorFuente[fuenteFin] = 0;
      }
      totalesPorFuente[fuenteFin] += entry.totalatenciones;
  });

  console.log(totalesPorFuente);

  loadChart(totalesPorMes, totalAtenciones);
  loadPie(totalesPorFuente);
}

function getServiceOnly(data, typeServ) {
  // Filtrar los datos por el nombre del médico
  let totalAtenciones = 0;
  const totalesPorFuente = {};
  const totalesPorMes = new Array(12).fill(0);

  // Filtrar los datos por el nombre del médico
  const datosServicio = data.filter(item => item.TipoServicio === typeServ);

  // Recorrer los datos del médico y sumar los totales por mes y fuente de financiamiento
  datosServicio.forEach(entry => {
      const mes = entry.mes - 1; // Restar 1 para ajustar al índice del array
      totalesPorMes[mes] += entry.totalatenciones;
      totalAtenciones += entry.totalatenciones;

      const fuenteFin = entry.fuenteFin;

      if (!totalesPorFuente[fuenteFin]) {
          totalesPorFuente[fuenteFin] = 0;
      }
      totalesPorFuente[fuenteFin] += entry.totalatenciones;
  });

  console.log(totalesPorFuente);

  loadChart(totalesPorMes, totalAtenciones);
  loadPie(totalesPorFuente);
}

// -----------------------------------------------------------------------------

// ----------------------------POR 2 TIPOS DE CHECK-----------------------------

function getMedicAndAtention(data, medic ,typeAte) {
  // Filtrar los datos por el nombre del médico y el tipo de atención
  let totalAtenciones = 0;
  const totalesPorFuente = {};
  const totalesPorMes = new Array(12).fill(0);

  // Filtrar los datos por el nombre del médico y el tipo de atención
  const datosFiltrados = data.filter(item => item.ApellidosNombres === medic && item.Descripcion === typeAte);

  // Recorrer los datos filtrados y sumar los totales por mes y fuente de financiamiento
  datosFiltrados.forEach(entry => {
      const mes = entry.mes - 1; // Restar 1 para ajustar al índice del array
      totalesPorMes[mes] += entry.totalatenciones;
      totalAtenciones += entry.totalatenciones;

      const fuenteFin = entry.fuenteFin;

      if (!totalesPorFuente[fuenteFin]) {
          totalesPorFuente[fuenteFin] = 0;
      }
      totalesPorFuente[fuenteFin] += entry.totalatenciones;
  });

  console.log(totalesPorFuente);

  loadChart(totalesPorMes, totalAtenciones);
  loadPie(totalesPorFuente);

}

function getMedicAndService(data, medic ,service) {
  // Filtrar los datos por el nombre del médico y el tipo de atención
  let totalAtenciones = 0;
  const totalesPorFuente = {};
  const totalesPorMes = new Array(12).fill(0);

  // Filtrar los datos por el nombre del médico y el tipo de atención
  const datosFiltrados = data.filter(item => item.ApellidosNombres === medic && item.TipoServicio === service);

  // Recorrer los datos filtrados y sumar los totales por mes y fuente de financiamiento
  datosFiltrados.forEach(entry => {
      const mes = entry.mes - 1; // Restar 1 para ajustar al índice del array
      totalesPorMes[mes] += entry.totalatenciones;
      totalAtenciones += entry.totalatenciones;

      const fuenteFin = entry.fuenteFin;

      if (!totalesPorFuente[fuenteFin]) {
          totalesPorFuente[fuenteFin] = 0;
      }
      totalesPorFuente[fuenteFin] += entry.totalatenciones;
  });

  console.log(totalesPorFuente);

  loadChart(totalesPorMes, totalAtenciones);
  loadPie(totalesPorFuente);
}

function getMedicsByAtention(data,ate){
  const selectElement = document.getElementById("medicosSelector");
  selectElement.innerHTML = '';

  // Crear un conjunto para almacenar nombres de médicos únicos
  const medicosUnicos = new Set();

  const datosFiltrados = data.filter(item => item.Descripcion === ate);

  // Recorre el array 'data' y agrega los nombres de médicos al conjunto
  datosFiltrados.forEach(item => {
      medicosUnicos.add(item.ApellidosNombres);
  });

  // Crear la opción "Seleccione un médico..." deshabilitada
  const placeholderOption = document.createElement("option");
  placeholderOption.value = "0";
  placeholderOption.textContent = "Seleccione un médico...";
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  selectElement.appendChild(placeholderOption);

  // Crear opciones para los nombres de médicos únicos
  medicosUnicos.forEach(medico => {
      const option = document.createElement("option");
      option.value = medico;
      option.textContent = medico;
      selectElement.appendChild(option);
  });
}

function getServiceByAtention(data,ate){
  const selectElement = document.getElementById("serviceSelector");
  selectElement.innerHTML = '';

  // Crear un conjunto para almacenar nombres de médicos únicos
  const serviciosUnicos = new Set();

  const datosFiltrados = data.filter(item => item.Descripcion === ate);

  // Recorre el array 'data' y agrega los nombres de médicos al conjunto
  datosFiltrados.forEach(item => {
    serviciosUnicos.add(item.TipoServicio);
  });

  // Crear la opción "Seleccione un médico..." deshabilitada
  const placeholderOption = document.createElement("option");
  placeholderOption.value = "0";
  placeholderOption.textContent = "Seleccione un servicio...";
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  selectElement.appendChild(placeholderOption);

  // Crear opciones para los nombres de médicos únicos
  serviciosUnicos.forEach(serv => {
      const option = document.createElement("option");
      option.value = serv;
      option.textContent = serv;
      selectElement.appendChild(option);
  });
}

function getMedicsByService(data,service){
  const selectElement = document.getElementById("medicosSelector");
  selectElement.innerHTML = '';

  // Crear un conjunto para almacenar nombres de médicos únicos
  const medicosUnicos = new Set();

  const datosFiltrados = data.filter(item => item.TipoServicio === service);

  // Recorre el array 'data' y agrega los nombres de médicos al conjunto
  datosFiltrados.forEach(item => {
      medicosUnicos.add(item.ApellidosNombres);
  });

  // Crear la opción "Seleccione un médico..." deshabilitada
  const placeholderOption = document.createElement("option");
  placeholderOption.value = "0";
  placeholderOption.textContent = "Seleccione un médico...";
  placeholderOption.disabled = true;
  placeholderOption.selected = true;
  selectElement.appendChild(placeholderOption);

  // Crear opciones para los nombres de médicos únicos
  medicosUnicos.forEach(medico => {
      const option = document.createElement("option");
      option.value = medico;
      option.textContent = medico;
      selectElement.appendChild(option);
  });
}



// Llamar a la función pasando el nombre del médico

