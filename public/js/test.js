
let data   = 
  [
  {
  usuario : "etuesta",
  insumo : "SODIO CLORURO 0.9  X 1L",
  medicamento : "JERINGA DESCARTABLE"
  },
  {
  usuario : "etuesta",
  insumo : "SODIO CLORURO 0.12  X 1L",
  medicamento : "JERINGA 10ml"
  },
  {
  usuario : "oporto",
  insumo : "SODIO DE POTACIO 1L",
  medicamento : "GASA 10ml"
  },
  {
  usuario : "oporto",
  insumo : "SODIO DE POTACIO 1L",
  medicamento : "JERINGA 10ml"
  },
  {
  usuario : "oporto",
  insumo : "SODIO DE POTACIO 1L",
  medicamento : "PASTILLAS 10ml"
  }
  ]

   


  const result = {};

  data.forEach(item => {
    if (!result[item.usuario]) {
      result[item.usuario] = {
        usuario: item.usuario,
        insumo: item.insumo,
        medicamento: item.medicamento
      };
    } else {
      result[item.usuario].insumo += '|' + item.insumo;
      result[item.usuario].medicamento += '|' + item.medicamento;
    }
  });
  
  const output = {
    items: Object.values(result)
  };
  
  console.log(output);

  fetch(`http://172.16.2.85:8080/production_ins_med/2023-03-01/2023-03-08/`,{
    method: 'get',
    headers: {
      'Accept': 'application/json'
    }
})
  .then(response => response.json())
  .then(data => {

    console.log(data)
    
  }).catch(err => {
    
    console.log(err)
  
  }); 