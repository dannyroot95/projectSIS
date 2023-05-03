var config = require("./dbconfig");
const sql = require("mssql");
const md5 = require('md5')
 
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
 

/*
async function getdata_withQuery() {
    try {
      let pool = await sql.connect(config);
      let res = await pool.request().query("SELECT *  FROM I_AtencionCierre");
      return res.recordsets;
    } catch (error) {
      console.log("error :" + error);
    }
  }*/

 
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
      .execute(`sigh..ReporteSisImplementacionSoaSis`) 
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

module.exports = {
  getdata: getdata,
  getdata_invoice_charge:getdata_invoice_charge,
  getdata_by_num_doc:getdata_by_num_doc,
  getdata_by_razon_social:getdata_by_razon_social,
  getdata_status_invoice:getdata_status_invoice,
  update_status_invoice:update_status_invoice,
  insurance_report:insurance_report,
  status_atention:status_atention,
  status_atention_pro:status_atention_pro,
  diag_and_proc:diag_and_proc,
  production:production,
  searchAffiliate:searchAffiliate,
  discharge_control:discharge_control,
  tramaAtencion:tramaAtencion,
  tramaDiagnostico:tramaDiagnostico,
  tramaMedicamentos:tramaMedicamentos,
  tramaInsumos:tramaInsumos,
  tramaProcedimientos:tramaProcedimientos,
  tramaSMI:tramaSMI
};
