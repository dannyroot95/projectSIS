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
      let res = await pool.request().query(`SELECT TOP ${q} * from dbo.CajaComprobantesPago X`);
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
      let res = await pool.request().query(`SELECT * from dbo.CajaComprobantesPago X where X.NroDocumento = ${c}`);
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
      let res = await pool.request().query(`SELECT * from dbo.CajaComprobantesPago X where X.RazonSocial like '${c}%'`);
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
      let res = await pool.request().query(`update dbo.CajaComprobantesPago set IdEstadoComprobante = ${status} where IdComprobantePago = ${id}`);
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
      let res = await pool.request().query(`select * from dbo.CajaEstadosComprobante`);
      return res.recordsets;
    } catch (error) {
      console.log("error :" + error);
    }finally {
      sql.close();
    }
  }

  async function auth(user , password) {
    try {
      password = md5(password)
      console.log(password)
      let pool = await sql.connect(config);
      let res = await pool.request().query(`select * from dbo.Empleados X where X.Usuario = '${user}' and X.Clave = '${password}'`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
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
      .execute(`ReporteSisImplementacionSoaSis`) 
      return res.recordsets
    } catch (error) {
      console.log("error : " + error);
    }finally {
      sql.close();
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
  auth:auth
};
