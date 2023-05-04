let datosOriginales = [
    {
     "nrocuenta": 1018495,
     "idatencion": 1015145,
     "idcita": 688206,
     "diagnostico": "Examen psiquiátrico general, no clasificado en otra parte",
     "procedimiento": "Consulta ambulatoria para la evaluación y manejo de un paciente continuador especializada"
    },
    {
     "nrocuenta": 1018495,
     "idatencion": 1015145,
     "idcita": 688206,
     "diagnostico": "Nino \/ Adolescente \/ Persona Sana                                                                   ",
     "procedimiento": "Consulta ambulatoria para la evaluación y manejo de un paciente continuador especializada"
    },
    {
     "nrocuenta": 1018495,
     "idatencion": 1015144,
     "idcita": 688205,
     "diagnostico": "Examen psiquiátrico general, no clasificado en otra parte",
     "procedimiento": "Consulta ambulatoria para la evaluación y manejo de un paciente continuador especializada"
    },
    {
     "nrocuenta": 1018495,
     "idatencion": 1015144,
     "idcita": 688205,
     "diagnostico": "Nino \/ Adolescente \/ Persona Sana                                                                   ",
     "procedimiento": "Consulta ambulatoria para la evaluación y manejo de un paciente continuador especializada"
    },
    {
     "nrocuenta": 1018138,
     "idatencion": 1014788,
     "idcita": 688011,
     "diagnostico": "Insuficiencia renal terminal",
     "procedimiento": "Segunda Sesión de Hemodialisis"
    },
    {
     "nrocuenta": 1018138,
     "idatencion": 1014788,
     "idcita": 688011,
     "diagnostico": "Anemia en otras enfermedades crónicas clasificadas en otra parte",
     "procedimiento": "CONSULTORIO EXTERNO - (COSTO=CERO)"
    },
    {
     "nrocuenta": 1018138,
     "idatencion": 1014788,
     "idcita": 688011,
     "diagnostico": "Insuficiencia renal terminal",
     "procedimiento": "CONSULTORIO EXTERNO - (COSTO=CERO)"
    },
    {
     "nrocuenta": 1018138,
     "idatencion": 1014788,
     "idcita": 688011,
     "diagnostico": "Insuficiencia renal terminal",
     "procedimiento": "Consulta Ambulatoria II y III nivel de atención (Servicio de Consulta Externa)"
    }
   ];
   
   function removeDuplicates(arrayIn) {
    var arrayOut = [];
    arrayIn.forEach(item=> {
      try {
        if (JSON.stringify(arrayOut[arrayOut.length-1].nrocuenta) !== JSON.stringify(item.nrocuenta)) {
          arrayOut.push(item);
        }
      } catch(err) {
        arrayOut.push(item);
       }
    })
    return arrayOut;
}

console.log(removeDuplicates(datosOriginales))