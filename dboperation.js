var config = require("./dbconfig")
const sql = require("mssql")
const fs = require('fs');
const axios = require('axios');
const archiver = require('archiver');
archiver.registerFormat('zip-encrypted', require("archiver-zip-encrypted"));
const passwordProduction = '7017FuaE47121'; 
const passwordTest = 'PilotoFUAE123'
//const passwordTest = 'PilotoFUAE123'

const urlTesting = 'http://pruebaws01.sis.gob.pe/cxf/esb/negocio/registroFuaBatch/v2'; // URL del servicio web SOAP
const urlProduction = 'http://ws01.sis.gob.pe/cxf/esb/negocio/registroFuaBatch/v2'; // URL del servicio web SOAP

const authTesting = '123456'
const authProduction = 'DsutgQ3U'

//requestSeachPackageTramaSOAP()



async function getPackageTrama(anio,month,n_send) {
  try {
   
    const xmlRequest = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:v2="http://sis.gob.pe/esb/negocio/registroFuaBatch/v2/">
         <soapenv:Header>
            <v2:requestHeader>
               <!--Optional:-->
               <v2:canal>SOAP</v2:canal>
               <v2:usuario>HSRPM</v2:usuario>
               <v2:autorizacion>DsutgQ3U</v2:autorizacion>
            </v2:requestHeader>
         </soapenv:Header>
         <soapenv:Body>
            <v2:consultarPaqueteRequest>
               <v2:paqueteNombre>00002698${anio}${month}${n_send}</v2:paqueteNombre>
            </v2:consultarPaqueteRequest>
         </soapenv:Body>
      </soapenv:Envelope>`;

    const headers = {
      'Content-Type': 'text/xml',
    };

    const response = await axios.post(urlProduction, xmlRequest, { headers });
    const responseData = {data:response.data};

    // Procesar la respuesta SOAP aquí
    //console.log(responseData);
    return responseData
    
  } catch (error) {
    console.error(error);
  }
}

async function getdata() {
  try {
    let pool = await sql.connect(config);
    console.log("sql server connected...");
  } catch (error) {
console.log("error :" + error);
  }finally {
    sql.close();
  }
}
 
  async function getdata_invoice_charge(quantity) {
    const q = quantity
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query(`SELECT TOP ${q} * from SIGH..CajaComprobantesPago X ORDER BY X.FechaCobranza DESC`);
      return res.recordsets;
    } catch (error) {
      console.log("error :" + error);
    }finally {
      sql.close();
    }
  }

  async function getdata_by_num_doc(num) {
    const c = num
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query(`SELECT * from SIGH..CajaComprobantesPago X where X.NroDocumento = ${c}`);
      return res.recordsets;
    } catch (error) {
      console.log("error :" + error);
    }finally {
      sql.close();
    }
  }

  async function getdata_by_razon_social(rs) {
    const c = rs
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query(`SELECT * from SIGH..CajaComprobantesPago X where X.RazonSocial like '${c}%'`);
      return res.recordsets;
    } catch (error) {
      console.log("error :" + error);
    }finally {
      sql.close();
    }
  }


  async function update_status_invoice(status , id) {
    status = parseInt(status)
    id = parseInt(id)
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query(`update SIGH..CajaComprobantesPago set IdEstadoComprobante = ${status} where IdComprobantePago = ${id}`);
      return res.recordsets;
    } catch (error) {
      console.log("error :" + error);
    }finally {
      sql.close();
    }
  }

  async function getdata_status_invoice() {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query(`select * from SIGH..CajaEstadosComprobante`);
      return res.recordsets;
    } catch (error) {
      console.log("error :" + error);
    }finally {
      sql.close();
    }
  }

  async function insurance_report(type , init_month , final_month ) {

    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('idFiltroTipo',type)
      .input('fecInicio',init_month)
      .input('fecFin',final_month)
      .execute(`SIGH.ReporteSisImplementacionSoaSis`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }finally {
      sql.close();
    }
  }

  async function status_atention(f_i,f_f) {

    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('fecha_ini',f_i)
      .input('fecha_fin',f_f)
      .execute(`PACIENTE_POR_NUM_CUENTA`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function status_atention_pro(num_account) {

    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('idCuentaAtencion',num_account)
      .execute(`JSP_SALUDPOL_PROCEDIMIENTOS`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function diag_and_proc(anio,mes) {

    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('year1',anio)
      .input('month1',mes)
      .execute(`CONSULTA_DIAGNOSTICOS_Y_PROCEDIMIENTOS`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function diag_and_proc_by_code(anio,mes,codigo) {

    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('year1',anio)
      .input('month1',mes)
      .input('codigo',codigo)
      .execute(`CONSULTA_DIAGNOSTICOS_Y_PROCEDIMIENTOS_POR_COD_SERV`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function diag_and_proc_by_name(anio,mes,name) {

    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('year1',anio)
      .input('month1',mes)
      .input('nom',name)
      .execute(`CONSULTA_DIAGNOSTICOS_Y_PROCEDIMIENTOS_POR_NOM_SERV`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function production(f_init,f_fin) {

    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('f_ini',f_init)
      .input('f_fin',f_fin)
      .execute(`PRODUCCION`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function production_ins_med(f_init,f_fin) {

    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('f_ini',f_init)
      .input('f_fin',f_fin)
      .execute(`PRODUCCION_INS_MED`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function discharge_control(f_init,f_fin) {

    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('fecha_in',f_init)
      .input('fecha_out',f_fin)
      .execute(`CONTROL_DE_ALTAS`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function discharge_control_with_procedures(f_init,f_fin) {

    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('fecha_in',f_init)
      .input('fecha_out',f_fin)
      .execute(`CONTROL_DE_ALTAS_CON_PROCEDIMIENTOS`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function searchAffiliate(nroFormato) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('n_formato',nroFormato)
      .execute(`BUSCAR_AFILIADOS`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function searchAffiliateByName(ap1,ap2,n) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('APELLIDO_PARTERNO',ap1)
      .input('APELLIDO_MARTERNO',ap2)
      .input('NOMBRE1',n)
      .execute(`BUSCAR_AFILIADOS_POR_NOMBRES`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function tramaAtencion(ANIO,MES,MESPRODUCCION,ANIOPRODUCCION) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('ANIO',ANIO)
      .input('MES',MES)
      .input('MESPRODUCCION',MESPRODUCCION)
      .input('ANIOPRODUCCION',ANIOPRODUCCION)
      .execute(`CONSULTA_TRAMA_ATENCIONES`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function getTramaAtencion(ANIO,MES,MESPRODUCCION,ANIOPRODUCCION) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('ANIO',ANIO)
      .input('MES',MES)
      .input('MESPRODUCCION',MESPRODUCCION)
      .input('ANIOPRODUCCION',ANIOPRODUCCION)
      .execute(`SIGH.dbo.ATENCION`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function tramaDiagnostico(ANIO,MES) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('ANIO',ANIO)
      .input('MES',MES)
      .execute(`CONSULTA_TRAMA_DIAGNOSTICO`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function getTramaDiagnostico(ANIO,MES) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('ANIO',ANIO)
      .input('MES',MES)
      .execute(`SIGH.dbo.ATENCIONDIA`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }
  
  async function tramaMedicamentos(ANIO,MES) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('ANIO',ANIO)
      .input('MES',MES)
      .execute(`CONSULTA_TRAMA_MEDICAMENTOS`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function getTramaMedicamentos(ANIO,MES) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('ANIO',ANIO)
      .input('MES',MES)
      .execute(`SIGH.dbo.ATENCIONMED`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }


  async function tramaInsumos(ANIO,MES) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('ANIO',ANIO)
      .input('MES',MES)
      .execute(`CONSULTA_TRAMA_INSUMOS`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function getTramaInsumos(ANIO,MES) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('ANIO',ANIO)
      .input('MES',MES)
      .execute(`SIGH.dbo.ATENCIONINS`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function tramaProcedimientos(ANIO,MES) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('ANIO',ANIO)
      .input('MES',MES)
      .execute(`CONSULTA_TRAMA_PROCEDIMIENTOS`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function getTramaProcedimientos(ANIO,MES) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('ANIO',ANIO)
      .input('MES',MES)
      .execute(`SIGH.dbo.ATENCIONPRO`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function tramaSMI(ANIO,MES) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('ANIO',ANIO)
      .input('MES',MES)
      .execute(`CONSULTA_TRAMA_SMI`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function getTramaSMI(ANIO,MES) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('ANIO',ANIO)
      .input('MES',MES)
      .execute(`SIGH.dbo.ATENCIONSMI`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function tramaSER(ANIO,MES) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('ANIO',ANIO)
      .input('MES',MES)
      .execute(`CONSULTA_TRAMA_SERVICIOS_ADICIONALES`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function getTramaSER(ANIO,MES) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('ANIO',ANIO)
      .input('MES',MES)
      .execute(`SIGH.dbo.ATENCIONSER`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function tramaRN(ANIO,MES) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('ANIO',ANIO)
      .input('MES',MES)
      .execute(`CONSULTA_TRAMA_RECIEN_NACIDO`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function getTramaRN(ANIO,MES) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('ANIO',ANIO)
      .input('MES',MES)
      .execute(`SIGH.dbo.ATENCIONRN`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function setTramaRESUMEN(ANIO,MES,NENVIO,NOMBREZIP,DNI,MESPRODUCCION) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('ANIO',ANIO)
      .input('MES',MES)
      .input('NENVIO',NENVIO)
      .input('NOMBREZIP',NOMBREZIP)
      .input('DNI',DNI)
      .input('ANIOPRODUCCION',ANIO)
      .input('MESPRODUCCION',MESPRODUCCION)
      .execute(`SIGH.dbo.ATENCIONRESUMEN`) 
      return [[{success:"Enviado!"}]]
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function setTramaRESUMENDEBUG(ANIO,MES,NENVIO,NOMBREZIP,DNI,MESPRODUCCION) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('ANIO',ANIO)
      .input('MES',MES)
      .input('NENVIO',NENVIO)
      .input('NOMBREZIP',NOMBREZIP)
      .input('DNI',DNI)
      .input('ANIOPRODUCCION',ANIO)
      .input('MESPRODUCCION',MESPRODUCCION)
      .execute(`ATENCIONRESUMENDEBUG`) 
      return [[{success:"Enviado!"}]]
    } catch (error) {
      console.log("error : " + error);
    }
  }

  
  async function getTramaRes(ANIO,MES,NENVIO) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query(`select * from SIGH_EXTERNA..SisFuaResumen where anio = ${ANIO} and mes = ${MES} and NroEnvio = ${NENVIO}`);
      return res.recordsets;
    } catch (error) {
      console.log("error :" + error);
    }finally {
      sql.close();
    }
  }

  async function getTramaResDebug(ANIO,MES,NENVIO) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query(`select * from BD_SIS_TOOLS..SisFuaResumenDebug where anio = ${ANIO} and mes = ${MES} and NroEnvio = ${NENVIO}`);
      return res.recordsets;
    } catch (error) {
      console.log("error :" + error);
    }finally {
      sql.close();
    }
  }

  async function getLastCorrelative(ANIO,MES) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('anio',ANIO)
      .input('mes',MES)
      .execute(`OBTENER_ULTIMO_CORRELATIVO_TRAMA`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }


  async function sendTrama(data) {

    try{
   
      // create archive and specify method of encryption and password
      let archive = archiver.create('zip-encrypted', {zlib: {level: 8}, encryptionMethod: 'zip20', password: passwordProduction});
      
      function writeFileWithUTF8(fileName, content) {
        fs.writeFileSync(fileName, content, 'utf8');
      }
    
      // Crea un archivo de texto y escribe algunos datos
      writeFileWithUTF8('ATENCION.TXT', data.ATENCION);
    
      // Crea otro archivo de texto y escribe algunos datos
      writeFileWithUTF8('ATENCIONDIA.TXT', data.ATENCIONDIA);
    
      writeFileWithUTF8('ATENCIONMED.TXT', data.ATENCIONMED);
    
      writeFileWithUTF8('ATENCIONINS.TXT', data.ATENCIONINS);
    
      writeFileWithUTF8('ATENCIONPRO.TXT', data.ATENCIONPRO);
    
      writeFileWithUTF8('ATENCIONSMI.TXT', data.ATENCIONSMI);
    
      writeFileWithUTF8('ATENCIONSER.TXT', data.ATENCIONSER);
    
      writeFileWithUTF8('ATENCIONRN.TXT', data.ATENCIONRN);
    
      writeFileWithUTF8('RESUMEN.TXT', data.RESUMEN);

      // Agrega los archivos al objeto Archiver
      archive.file('ATENCION.TXT', { name: 'ATENCION.TXT' });
      archive.file('ATENCIONDIA.TXT', { name: 'ATENCIONDIA.TXT' });
      archive.file('ATENCIONMED.TXT', { name: 'ATENCIONMED.TXT' });
      archive.file('ATENCIONINS.TXT', { name: 'ATENCIONINS.TXT' });
      archive.file('ATENCIONPRO.TXT', { name: 'ATENCIONPRO.TXT' });
      archive.file('ATENCIONSMI.TXT', { name: 'ATENCIONSMI.TXT' });
      archive.file('ATENCIONSER.TXT', { name: 'ATENCIONSER.TXT' });
      archive.file('ATENCIONRN.TXT', { name: 'ATENCIONRN.TXT' });
      archive.file('RESUMEN.TXT', { name: 'RESUMEN.TXT' });

      // Crea el archivo ZIP
      const output = fs.createWriteStream('C:/users/Administrador/desktop/tramas/'+data.nameTrama);
      archive.pipe(output);
      archive.finalize();

      return [[{success:"Enviado!"}]]
    }catch (error) {
      console.log("error : " + error);
    }

  }

  
  async function sendTramaDebug(data) {


    try{
      // create archive and specify method of encryption and password
      let archive = archiver.create('zip-encrypted', {zlib: {level: 8}, encryptionMethod: 'zip20', password: passwordTest});
      
      function writeFileWithUTF8(fileName, content) {
        fs.writeFileSync(fileName, content, 'utf8');
      }
    
      // Crea un archivo de texto y escribe algunos datos
      writeFileWithUTF8('ATENCION.TXT', data.ATENCION);
    
      // Crea otro archivo de texto y escribe algunos datos
      writeFileWithUTF8('ATENCIONDIA.TXT', data.ATENCIONDIA);
    
      writeFileWithUTF8('ATENCIONMED.TXT', data.ATENCIONMED);
    
      writeFileWithUTF8('ATENCIONINS.TXT', data.ATENCIONINS);
    
      writeFileWithUTF8('ATENCIONPRO.TXT', data.ATENCIONPRO);
    
      writeFileWithUTF8('ATENCIONSMI.TXT', data.ATENCIONSMI);
    
      writeFileWithUTF8('ATENCIONSER.TXT', data.ATENCIONSER);
    
      writeFileWithUTF8('ATENCIONRN.TXT', data.ATENCIONRN);
    
      writeFileWithUTF8('RESUMEN.TXT', data.RESUMEN);

      // Agrega los archivos al objeto Archiver
      archive.file('ATENCION.TXT', { name: 'ATENCION.TXT' });
      archive.file('ATENCIONDIA.TXT', { name: 'ATENCIONDIA.TXT' });
      archive.file('ATENCIONMED.TXT', { name: 'ATENCIONMED.TXT' });
      archive.file('ATENCIONINS.TXT', { name: 'ATENCIONINS.TXT' });
      archive.file('ATENCIONPRO.TXT', { name: 'ATENCIONPRO.TXT' });
      archive.file('ATENCIONSMI.TXT', { name: 'ATENCIONSMI.TXT' });
      archive.file('ATENCIONSER.TXT', { name: 'ATENCIONSER.TXT' });
      archive.file('ATENCIONRN.TXT', { name: 'ATENCIONRN.TXT' });
      archive.file('RESUMEN.TXT', { name: 'RESUMEN.TXT' });

      // Crea el archivo ZIP
      const output = fs.createWriteStream('C:/users/Administrador/desktop/tramas/'+data.nameTrama);
      archive.pipe(output);
      archive.finalize();

      archive.on('close', function() {
        console.log('El archivo ZIP se ha creado exitosamente.');
        // Aquí puedes agregar el código que deseas ejecutar después de que el archivo se haya creado exitosamente
      });
      
      archive.on('error', function(err) {
        console.error('Error al crear el archivo ZIP:', err);
      });
      
      const fileContent = readFileAsBase64('C:/users/Administrador/desktop/tramas/'+data.nameTrama); // Ruta al archivo que deseas adjuntar
     
      const xmlBody = `
      <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:v2="http://sis.gob.pe/esb/negocio/registroFuaBatch/v2/">
      <soapenv:Header>
        <v2:requestHeader>
          <!--Optional:-->
          <v2:canal>SOAPUI</v2:canal>
          <v2:usuario>HSRPM</v2:usuario>
          <v2:autorizacion>${authTesting}</v2:autorizacion>
        </v2:requestHeader>
      </soapenv:Header>
      <soapenv:Body>
        <v2:registrarFuaRequest>
          <v2:nombreZip>${data.nameTrama}</v2:nombreZip>
          <v2:dataZip>${fileContent}</v2:dataZip>
        </v2:registrarFuaRequest>
      </soapenv:Body>
    </soapenv:Envelope>
  `;

  const headers = {
    'Content-Type': 'text/xml',
  };
   
  const response = await axios.post(urlTesting, xmlBody, { headers });

  return [[
    {
      success:"Enviado!",
      server_response:response.data
    }]]

    //SI FALLA UTILIZAR TRY CATCH

    }catch (error) {
      console.log("error : " + error);
    }
  }

 

  function readFileAsBase64(filePath) {
    const fileData = fs.readFileSync(filePath);
    return Buffer.from(fileData).toString('base64');
  }

  async function getFuaByNumAndLote(FUA,LOTE) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('fua',FUA)
      .input('lote',LOTE)
      .execute(`BUSCAR_FUA_POR_NUMERO_LOTE`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function getFuaByAccount(num) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('num',num)
      .execute(`BUSCAR_FUA_POR_CUENTA`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function getFuaByDNI(dni) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('dni',dni)
      .execute(`BUSCAR_FUA_POR_DNI`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function getFuaByFullname(LASTNAME1,LASTNAME2,NAME) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('ap',LASTNAME1)
      .input('am',LASTNAME2)
      .input('name',NAME)
      .execute(`BUSCAR_FUA_POR_NOMBRES`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function getEmployee(dni) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('DNI',dni)
      .execute(`BUSCAR_EMPLEADO`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function getEmployeeByDniAndUser(dni,user) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('DNI',dni)
      .input('USER',user)
      .execute(`BUSCAR_EMPLEADO`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function setUser(idEmpleado,ApellidoPaterno,ApellidoMaterno,Nombres,
    IdCondicionTrabajo,IdTipoEmpleado,DNI,CodigoPlanilla,FechaIngreso,
    FechaRegistroHerramienta,Usuario,ClaveSisHerramientas,ReniecAutorizado,
    idTipoDocumento,idTipoSexo,TipoEmpleado) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('idEmpleado',idEmpleado)
      .input('ApellidoPaterno',ApellidoPaterno)
      .input('ApellidoMaterno',ApellidoMaterno)
      .input('Nombres',Nombres)
      .input('IdCondicionTrabajo',IdCondicionTrabajo)
      .input('IdTipoEmpleado',IdTipoEmpleado)
      .input('DNI',DNI)
      .input('CodigoPlanilla',CodigoPlanilla)
      .input('FechaIngreso',FechaIngreso)
      .input('FechaRegistroHerramienta',FechaRegistroHerramienta)
      .input('Usuario',Usuario)
      .input('ClaveSisHerramientas',ClaveSisHerramientas)
      .input('ReniecAutorizado',ReniecAutorizado)
      .input('idTipoDocumento',idTipoDocumento)
      .input('idTipoSexo',idTipoSexo)
      .input('TipoEmpleado',TipoEmpleado)
      .execute(`CREAR_USUARIO`) 
      return [[{success:"creado"}]]
    } catch (error) {
      console.log("error :" + error);
    }finally {
      sql.close();
    }
  }

  async function setExcludes(values) {
    try {
      let pool = await sql.connect(config);
      let res = await pool
        .request()
        .query(`INSERT INTO BD_SIS_TOOLS..excluidos_saludpol (IdCuentaAtencion) 
        VALUES ${values.map((value) => `(${value})`).join(", ")}`);
      return res.recordsets;
    } catch (error) {
      console.log("error: " + error);
    } finally {
      sql.close();
    }
  }

  async function setIncludes(values) {
    try {
      let pool = await sql.connect(config);
      let res = await pool
        .request()
        .query(`INSERT INTO BD_SIS_TOOLS..incluidos_saludpol (IdCuentaAtencion) 
        VALUES ${values.map((value) => `(${value})`).join(", ")}`);
      return res.recordsets;
    } catch (error) {
      console.log("error: " + error);
    } finally {
      sql.close();
    }
  }

  async function constructTramaSaludpol(f1,f2) {
    f1 = f1.replace(/-/g, "/");
    f2 = f2.replace(/-/g, "/");
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('F1',f1)
      .input('F2',f2)
      .execute(`REGISTRO_TRAMA_SALUDPOL`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function constructTramaSaludpolExcludes(f1,f2) {
    f1 = f1.replace(/-/g, "/");
    f2 = f2.replace(/-/g, "/");
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('F1',f1)
      .input('F2',f2)
      .execute(`REGISTRO_TRAMA_SALUDPOL_EXCLUIDOS`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function constructTramaSaludpolExcludesAndIncludes(f1,f2) {
    f1 = f1.replace(/-/g, "/");
    f2 = f2.replace(/-/g, "/");
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('F1',f1)
      .input('F2',f2)
      .execute(`REGISTRO_TRAMA_SALUDPOL_EXCLUIDOS_Y_INCLUIDOS`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function constructTramaSaludpolIncludes(f1,f2) {
    f1 = f1.replace(/-/g, "/");
    f2 = f2.replace(/-/g, "/");
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('F1',f1)
      .input('F2',f2)
      .execute(`REGISTRO_TRAMA_SALUDPOL_INCLUIDOS`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function generateTramaSaludpol() {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .execute(`BUILD_TRAMA_SALUDPOL`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function getAtentionSaludpol(x) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('idCuentaAtencion',x)
      .execute(`CONSULTA_ATENCION_SALUDPOL_POR_CUENTA`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function updateSisFiliacion(data) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('AFI_DISA',data.AfiliacionDisa)
      .input('AFI_TIPO_FORMATO',data.AfiliacionTipoFormato)
      .input('AFI_NRO_FORMATO',data.AfiliacionNroFormato)
      .input('ID_SIASIS',data.idSiasis)
      .input('LOTE',data.FuaLote)
      .input('CODIGO',data.Codigo)
      .input('CUENTA',data.idCuentaAtencion)
      .execute(`UPDATE_AFILIADO_FUA`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function production_saludpol(account) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('idCuentaAtencion',account)
      .execute(`PRODUCCION_SALUDPOL`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function id_procedure(account,procedure) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('idCuentaAtencion',account)
      .input('procedimiento',procedure)
      .execute(`OBTENER_ID_PROCEDIMIENTO`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function update_quantity_procedure(quantity,idProduct,idOrder) {
    const q = quantity
    const id_product = idProduct
    const id_order = idOrder
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query(`UPDATE SIGH..FacturacionServicioDespacho SET Cantidad = ${q}
      WHERE IdProducto = ${id_product} AND idOrden = ${id_order}`);
      return [[{success:"actualizado"}]]
    } catch (error) {
      return [[{success:"error"}]]
    }finally {
      sql.close();
    }
  }

  async function update_dni_patient(dni,id_patient) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('DNI',dni)
      .input('ID_PACIENTE',id_patient)
      .execute(`ACTUALIZAR_DNI_PACIENTE`) 
      return [[{success:"actualizado"}]]
    } catch (error) {
       return [[{success:"error"}]]
    }
  }

  async function update_gender_patient(gender,id_patient) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('GENERO',gender)
      .input('ID_PACIENTE',id_patient)
      .execute(`ACTUALIZAR_GENERO_PACIENTE`) 
      return [[{success:"actualizado"}]]
    } catch (error) {
       return [[{success:"error"}]]
    }
  }

  async function update_date_atention(account,date1,date2) {
    try {
      console.log(date1)
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('CUENTA',account)
      .input('FECHA1',date1)
      .input('FECHA2',date2)
      .execute(`ACTUALIZAR_FECHA_PACIENTE_SALUDPOL`) 
      return [[{success:"actualizado"}]]
    } catch (error) {
       return [[{success:"error"}]]
    }
  }

  async function update_nro_ref_origin(id_atention,nro) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('ID',id_atention)
      .input('NRO',nro)
      .execute(`ACTUALIZAR_NRO_REF_ORIGEN`) 
      return [[{success:"actualizado"}]]
    } catch (error) {
       return [[{success:"error"}]]
    }
  }

  async function get_data_medic(id_atention) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('CUENTA',id_atention)
      .execute(`OBTENER_DATOS_MEDICO_POR_CUENTA`) 
      return res.recordsets
    } catch (error) {
       return [[{success:"error"}]]
    }
  }

  async function update_dni_digitador(id_atention,dni) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('CUENTA',id_atention)
      .input('DNI',dni)
      .execute(`ACTUALIZAR_DNI_DIGITADOR_FUA`) 
      return [[{success:"actualizado"}]]
    } catch (error) {
       return [[{success:"error"}]]
    }
  }

  async function get_data_validate_catalog(lote,fua) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('LOTE',lote)
      .input('FUA',fua)
      .execute(`BUSCAR_CATALOGO_PARAMETROS`) 
      return res.recordsets
    } catch (error) {
       return [[{success:"error"}]]
    }
  }

  async function delete_procedure_saludpol(order,idProducto,cuenta) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('ORDEN',order)
      .input('PRODUCTO',idProducto)
      .input('CUENTA',cuenta)
      .execute(`BORRAR_PROCEDIMIENTO_SALUDPOL`) 
      return [[{success:"eliminado"}]]
    } catch (error) {
       return [[{success:"error"}]]
    }
  }

  async function search_procedure(name) {
    const n = name
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query(`SELECT FC.IdProducto,FC.Codigo,FC.Nombre, FCS.PrecioUnitario FROM SIGH..FactCatalogoServicios  FC
      INNER JOIN SIGH..FactCatalogoServiciosHosp FCS ON FCS.IdProducto = FC.IdProducto 
      where Nombre like '${n}%' AND FCS.IdTipoFinanciamiento = 7 AND FCS.Activo = 1`);
      return res.recordsets;
    } catch (error) {
      return [[{success:"error"}]]
    }finally {
      sql.close();
    }
  }

  async function search_procedure_by_code(code) {
    const n = (code).toString()
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query(`SELECT FC.IdProducto,FC.Codigo,FC.Nombre, FCS.PrecioUnitario FROM SIGH..FactCatalogoServicios  FC
      INNER JOIN SIGH..FactCatalogoServiciosHosp FCS ON FCS.IdProducto = FC.IdProducto 
      where Codigo = '${n}' AND FCS.IdTipoFinanciamiento = 7 AND FCS.Activo = 1`);
      return res.recordsets;
    } catch (error) {
      return [[{success:"error"}]]
    }finally {
      sql.close();
    }
  }

  
  async function add_procedure_saludpol(d) {
    try {

      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('PUNTOCARGA',d.puntoCarga)
      .input('PACIENTE',d.idPaciente)
      .input('CUENTA',d.idCuentaAtencion)
      .input('SERVICIO',d.idServicioPaciente)
      .input('TIPOFINANCIAMIENTO',d.idTipoFinanciamiento)
      .input('FUENTEFINANCIAMIENTO',d.fuenteFinanciamiento)
      .input('FECHACREA',d.fechaCrea)
      .input('USUARIO',d.usuario)
      .input('FECHADESPACHO',d.fechaDespacho)
      .input('USUARIODESPACHO',d.usuarioDespacho)
      .input('ESTADO',d.estado)
      .input('FECHACPT',d.fechaCpt)
      .input('PRODUCTO',d.idProducto)
      .input('CANTIDAD',d.cantidad)
      .input('PRECIO',d.precio)
      .input('TOTAL',d.precioTotal)
      .input('LABHIS',d.labHis)
      .input('GRUPO',d.grupo)
      .input('SUBGRUPO',d.subGrupo)
      .input('LABHISCODIGO',d.labHisCodigo)
  
      .execute(`INSERTAR_PROCEDIMIENTO_SALUDPOL`) 
      return [[{success:"insertado"}]]
    } catch (error) {
       return [[{success:"error"}]]
    }
  }

  async function search_fua_by_num_and_size(lote,fua) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('LOTE',lote)
      .input('FUA',fua)
      .execute(`BUSCAR_FUA_POR_NRO_FUA`) 
      return res.recordsets
    } catch (error) {
       console.log("error : " + error);
       return [[{success:"error"}]]
    }
  }

module.exports = {
  getdata: getdata,
  sendTrama:sendTrama,
  sendTramaDebug:sendTramaDebug,
  getdata_invoice_charge:getdata_invoice_charge,
  getdata_by_num_doc:getdata_by_num_doc,
  getdata_by_razon_social:getdata_by_razon_social,
  getdata_status_invoice:getdata_status_invoice,
  update_status_invoice:update_status_invoice,
  insurance_report:insurance_report,
  status_atention:status_atention,
  status_atention_pro:status_atention_pro,
  diag_and_proc:diag_and_proc,
  diag_and_proc_by_name:diag_and_proc_by_name,
  diag_and_proc_by_code:diag_and_proc_by_code,
  production:production,
  production_ins_med:production_ins_med,
  searchAffiliate:searchAffiliate,
  searchAffiliateByName:searchAffiliateByName,
  discharge_control:discharge_control,
  discharge_control_with_procedures:discharge_control_with_procedures,
  tramaAtencion:tramaAtencion,
  getTramaAtencion:getTramaAtencion,
  tramaDiagnostico:tramaDiagnostico,
  getTramaDiagnostico:getTramaDiagnostico,
  tramaMedicamentos:tramaMedicamentos,
  getTramaMedicamentos:getTramaMedicamentos,
  tramaInsumos:tramaInsumos,
  getTramaInsumos:getTramaInsumos,
  tramaProcedimientos:tramaProcedimientos,
  getTramaProcedimientos:getTramaProcedimientos,
  tramaSMI:tramaSMI,
  getTramaSMI:getTramaSMI,
  tramaSER:tramaSER,
  getTramaSER:getTramaSER,
  tramaRN:tramaRN,
  getTramaRN:getTramaRN,
  getLastCorrelative:getLastCorrelative,
  setTramaRESUMEN:setTramaRESUMEN,
  setTramaRESUMENDEBUG:setTramaRESUMENDEBUG,
  getTramaRes:getTramaRes,
  getTramaResDebug:getTramaResDebug,
  getFuaByNumAndLote:getFuaByNumAndLote,
  getFuaByAccount:getFuaByAccount,
  getFuaByDNI:getFuaByDNI,
  getFuaByFullname:getFuaByFullname,
  getEmployee:getEmployee,
  getEmployeeByDniAndUser:getEmployeeByDniAndUser,
  setUser:setUser,
  getPackageTrama:getPackageTrama,
  setExcludes:setExcludes,
  setIncludes:setIncludes,
  constructTramaSaludpol:constructTramaSaludpol,
  constructTramaSaludpolExcludes:constructTramaSaludpolExcludes,
  constructTramaSaludpolIncludes:constructTramaSaludpolIncludes,
  constructTramaSaludpolExcludesAndIncludes:constructTramaSaludpolExcludesAndIncludes,
  generateTramaSaludpol:generateTramaSaludpol,
  getAtentionSaludpol:getAtentionSaludpol,
  updateSisFiliacion:updateSisFiliacion,
  production_saludpol:production_saludpol,
  id_procedure:id_procedure,
  update_quantity_procedure:update_quantity_procedure,
  update_dni_patient:update_dni_patient,
  update_gender_patient:update_gender_patient,
  update_date_atention:update_date_atention,
  update_nro_ref_origin:update_nro_ref_origin,
  get_data_medic:get_data_medic,
  update_dni_digitador:update_dni_digitador,
  get_data_validate_catalog:get_data_validate_catalog,
  delete_procedure_saludpol:delete_procedure_saludpol,
  search_procedure:search_procedure,
  search_procedure_by_code:search_procedure_by_code,
  add_procedure_saludpol:add_procedure_saludpol,
  search_fua_by_num_and_size:search_fua_by_num_and_size
};
