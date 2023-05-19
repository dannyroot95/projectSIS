var config = require("./dbconfig")
const sql = require("mssql")
const fs = require('fs');
const archiver = require('archiver');
archiver.registerFormat('zip-encrypted', require("archiver-zip-encrypted"));
const password = '7017FuaE47121'; 
const passwordTest = 'PilotoFUAE123'
 
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

  async function tramaAtencion(ANIO,MES,MESPRODUCCION) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('ANIO',ANIO)
      .input('MES',MES)
      .input('MESPRODUCCION',MESPRODUCCION)
      .execute(`CONSULTA_TRAMA_ATENCIONES`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }
  }

  async function getTramaAtencion(ANIO,MES,MESPRODUCCION) {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request()
      .input('ANIO',ANIO)
      .input('MES',MES)
      .input('MESPRODUCCION',MESPRODUCCION)
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
      .input('MESPRODUCCION',MESPRODUCCION)
      .execute(`SIGH.dbo.ATENCIONRESUMEN`) 
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
      let archive = archiver.create('zip-encrypted', {zlib: {level: 8}, encryptionMethod: 'aes256', password: passwordTest});
      
      // Crea un archivo de texto y escribe algunos datos
      const file1 = fs.createWriteStream('ATENCION.txt');
      file1.write(data.ATENCION);
      file1.end();
      
      // Crea otro archivo de texto y escribe algunos datos
      const file2 = fs.createWriteStream('ATENCIONDIA.txt');
      file2.write(data.ATENCIONDIA);
      file2.end();

      const file3 = fs.createWriteStream('ATENCIONMED.txt');
      file3.write(data.ATENCIONMED);
      file3.end();

      const file4 = fs.createWriteStream('ATENCIONINS.txt');
      file4.write(data.ATENCIONINS);
      file4.end();

      const file5 = fs.createWriteStream('ATENCIONPRO.txt');
      file5.write(data.ATENCIONPRO);
      file5.end();

      const file6 = fs.createWriteStream('ATENCIONSMI.txt');
      file6.write(data.ATENCIONSMI);
      file6.end();
      
      const file7 = fs.createWriteStream('ATENCIONSER.txt');
      file7.write(data.ATENCIONSER);
      file7.end()

      const file8 = fs.createWriteStream('ATENCIONRN.txt');
      file8.write(data.ATENCIONRN);
      file8.end()

      const file9 = fs.createWriteStream('RESUMEN.txt');
      file9.write(data.RESUMEN);
      file9.end()

      // Agrega los archivos al objeto Archiver
      archive.file('ATENCION.txt', { name: 'ATENCION.txt' });
      archive.file('ATENCIONDIA.txt', { name: 'ATENCIONDIA.txt' });
      archive.file('ATENCIONMED.txt', { name: 'ATENCIONMED.txt' });
      archive.file('ATENCIONINS.txt', { name: 'ATENCIONINS.txt' });
      archive.file('ATENCIONPRO.txt', { name: 'ATENCIONPRO.txt' });
      archive.file('ATENCIONSMI.txt', { name: 'ATENCIONSMI.txt' });
      archive.file('ATENCIONSER.txt', { name: 'ATENCIONSER.txt' });
      archive.file('ATENCIONRN.txt', { name: 'ATENCIONRN.txt' });
      archive.file('RESUMEN.txt', { name: 'RESUMEN.txt' });

      // Crea el archivo ZIP
      const output = fs.createWriteStream('C:/users/USUARIO/desktop/'+data.nameTrama);
      archive.pipe(output);
      archive.finalize();
      return [[{success:"Enviado!"}]]
    }catch (error) {
      console.log("error : " + error);
    }

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

module.exports = {
  getdata: getdata,
  sendTrama:sendTrama,
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
  discharge_control:discharge_control,
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
  getTramaRes:getTramaRes,
  getFuaByNumAndLote:getFuaByNumAndLote,
  getFuaByAccount:getFuaByAccount,
  getFuaByDNI:getFuaByDNI,
  getFuaByFullname:getFuaByFullname,
  getEmployee:getEmployee,
  setUser:setUser
};
