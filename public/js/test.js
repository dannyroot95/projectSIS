let output = [];
let output2 = [];
const result = [];


let input  = [

  {
  name:"jose",
  diagnostico : "paralisis",
  procedimiento : "pisiquiatria"
  },
  
  {
  name:"jose",
  diagnostico : "ruptura",
  procedimiento : "traumatologia"
  },
  
  {
  name:"jose",
  diagnostico : "pierna rota",
  procedimiento : "vendaje"
  },
  
  {
    name:"jose",
    diagnostico : "ruptura",
    procedimiento : "cirujia"
    },

  {
  name:"danny",
  diagnostico : "caida",
  procedimiento : "curacion"
  },
  
  {
  name:"danny",
  diagnostico : "caida",
  procedimiento : "topico"
  }
  
  ];
   


  input.forEach(item => {
    let patient = output.find(p => p.name === item.name);
    if (!patient) {
      patient = { name: item.name };
      output.push(patient);
    }
    let diagNum = 1;
    let procNum = 1;
    for (let i = 1; i <= 4; i++) {
      if (patient[`diagnostico${i}`] === undefined) {
        diagNum = i;
        break;
      }
    }
    for (let i = 1; i <= 5; i++) {
      if (patient[`procedimiento${i}`] === undefined) {
        procNum = i;
        break;
      }
    }
    patient[`diagnostico${diagNum}`] = item.diagnostico;
    patient[`procedimiento${procNum}`] = item.procedimiento;
  });
  

for (let i = 0; i < output.length; i++) {
  const obj = {};
  const uniqueKeys = {};
  for (let key in output[i]) {
    if (!uniqueKeys.hasOwnProperty(output[i][key])) {
      uniqueKeys[output[i][key]] = true;
      obj[key] = output[i][key];
    }
  }
  result.push(obj);
}

result.forEach(function(element) {
  let name = element.name;
  let diagnostico = [];
  let procedimiento = [];
  let max_diagnostico = 6;
  let max_procedimiento = 7;

  for (let i = 1; i <= max_diagnostico; i++) {
    let diag_key = "diagnostico" + i;
    if (element.hasOwnProperty(diag_key)) {
      diagnostico.push(element[diag_key]);
    } else {
      diagnostico.push(null);
    }
  }

  for (let i = 1; i <= max_procedimiento; i++) {
    let proc_key = "procedimiento" + i;
    if (element.hasOwnProperty(proc_key)) {
      procedimiento.push(element[proc_key]);
    } else {
      procedimiento.push(null);
    }
  }

  let obj = {
    "name": name,
    "diagnostico1": diagnostico[0],
    "diagnostico2": diagnostico[1],
    "diagnostico3": diagnostico[2],
    "diagnostico4": diagnostico[3],
    "diagnostico5": diagnostico[4],
    "diagnostico6": diagnostico[5],
    "procedimiento1": procedimiento[0],
    "procedimiento2": procedimiento[1],
    "procedimiento3": procedimiento[2],
    "procedimiento4": procedimiento[3],
    "procedimiento5": procedimiento[4],
    "procedimiento6": procedimiento[5],
    "procedimiento7": procedimiento[6]
  };

  output2.push(obj);
});


console.log(output2);