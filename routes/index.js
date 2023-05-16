const { json } = require('express');
var express = require('express');
var router = express.Router();
const sql = require("../dboperation");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//test connection
router.get('/test', function(req, res, next) {
  sql.getdata();
  res.render('index', { title: 'Express' });
});

router.get("/getdata_invoice_charge/:quantity", function (req, res, next) {
  let query = req.params.quantity 
  sql.getdata_invoice_charge(query).then((result) => {
    res.json(result[0]);
  });
});

router.get("/getdata_by_num_doc/:num", function (req, res, next) {
  let query = req.params.num 
  sql.getdata_by_num_doc(query).then((result) => {
    res.json(result[0]);
  });
});

router.get("/getdata_by_razon_social/:rs", function (req, res, next) {
  let query = req.params.rs 
  sql.getdata_by_razon_social(query).then((result) => {
    res.json(result[0]);
  });
});

router.get("/getdata_status_invoice", function (req, res, next) {
  sql.getdata_status_invoice().then((result) => {
    res.json(result[0]);
  });
});

router.get("/diagnosticos_procedimientos/:st/:id", function (req, res, next) {
  let anio = req.params.st;
	let mes = req.params.id;
  
  sql.diag_and_proc(anio,mes).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }

   
  });
});

router.post("/update_status_invoice/:st/:id", function (req, res, next) {
  let query = req.params.st
  let query2 = req.params.id
  sql.update_status_invoice(query,query2).then((result) => {
    res.send(result);
  });
});

router.get("/auth", function (req, res,next) {
  let username = req.body.user;
	let password = req.body.password;
  
  sql.auth(username,password).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }

   
  });
});

router.get("/insurance_report/:type/:init/:final", function (req, res,next) {
  let type = req.params.type;
	let init_month = req.params.init;
  let final_month = req.params.final;
  
  sql.insurance_report(type,init_month,final_month).then((result) => {

    res.json(result[0]);
   
  });
});

router.get("/status_atention/:i/:f", function (req, res,next) {
  let f_i = req.params.i;
  let f_f = req.params.f;

  sql.status_atention(f_i,f_f).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
   
  });
});

router.get("/status_atention_pro/:n", function (req, res,next) {
  let num_account = req.params.n;

  sql.status_atention_pro(num_account).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
   
  });
});

router.get("/production/:x/:y", function (req, res,next) {
  let f_init = req.params.x;
  let f_fin = req.params.y;

  sql.production(f_init,f_fin).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
   
  });
});

router.get("/production_ins_med/:x/:y", function (req, res,next) {
  let f_init = req.params.x;
  let f_fin = req.params.y;

  sql.production_ins_med(f_init,f_fin).then((result) => {
    if(result[0].length>0){

      let data = result[0]

      data.forEach(item => {
        if (!result[item.nro_formato]) {
          result[item.nro_formato] = {
            cuenta:item.cuenta,
            nro_formato: item.nro_formato,
            f_atencion:item.f_atencion,
            beneficiario:item.beneficiario,
            servicio:item.servicio,
            hist_clinica:item.hist_clinica,
            digitador:item.digitador,
            mes:item.mes,
            medico:item.medico,
            periodo:item.periodo,
            servicio:item.servicio,
            servicio_egreso:item.servicio_egreso,
            nombre_digitador:item.nombre_digitador,
            usuario:item.usuario,
            insumos: item.insumos,
            medicamentos: item.medicamentos
          };
        } else {
          result[item.nro_formato].insumos += '|' + item.insumos;
          result[item.nro_formato].medicamentos += '|' + item.medicamentos;
        }
      });
      
      let output = Object.values(result)
      let newArray = [...output]; // Copia el array original
      newArray.splice(0, 1);
      res.json(newArray);

    }else{
      res.json({error:"sin datos"})
    }
  });
});

router.get("/discharge_control/:x/:y", function (req, res,next) {
  let f_init = req.params.x;
  let f_fin = req.params.y;

  sql.discharge_control(f_init,f_fin).then((result) => {
    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
  });
});

router.get("/affiliate/:nro", function (req, res,next) {
  let nroFormato = req.params.nro;

  sql.searchAffiliate(nroFormato).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
  });
});

router.get("/trama-atencion/:a/:b/:c", function (req, res,next) {
  let anio = req.params.a;
  let mes = req.params.b;
  let mesP = req.params.c;

  sql.tramaAtencion(anio,mes,mesP).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
   
  });
});

router.get("/get-trama-atencion/:a/:b/:c", function (req, res,next) {
  let anio = req.params.a;
  let mes = req.params.b;
  let mesP = req.params.c;

  sql.getTramaAtencion(anio,mes,mesP).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
  });
});

router.get("/trama-diagnostico/:a/:b", function (req, res,next) {
  let anio = req.params.a;
  let mes = req.params.b;

  sql.tramaDiagnostico(anio,mes).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
  });
});

router.get("/get-trama-diagnostico/:a/:b", function (req, res,next) {
  let anio = req.params.a;
  let mes = req.params.b;

  sql.getTramaDiagnostico(anio,mes).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
  });
});


router.get("/trama-medicamentos/:a/:b", function (req, res,next) {
  let anio = req.params.a;
  let mes = req.params.b;

  sql.tramaMedicamentos(anio,mes).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
  });
});

router.get("/get-trama-medicamentos/:a/:b", function (req, res,next) {
  let anio = req.params.a;
  let mes = req.params.b;

  sql.getTramaMedicamentos(anio,mes).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
  });
});

router.get("/trama-insumos/:a/:b", function (req, res,next) {
  let anio = req.params.a;
  let mes = req.params.b;

  sql.tramaInsumos(anio,mes).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
  });
});

router.get("/get-trama-insumos/:a/:b", function (req, res,next) {
  let anio = req.params.a;
  let mes = req.params.b;

  sql.getTramaInsumos(anio,mes).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
   
  });
});

router.get("/trama-procedimientos/:a/:b", function (req, res,next) {
  let anio = req.params.a;
  let mes = req.params.b;

  sql.tramaProcedimientos(anio,mes).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
   
  });
});

router.get("/get-trama-procedimientos/:a/:b", function (req, res,next) {
  let anio = req.params.a;
  let mes = req.params.b;

  sql.getTramaProcedimientos(anio,mes).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
   
  });
});

router.get("/trama-smi/:a/:b", function (req, res,next) {
  let anio = req.params.a;
  let mes = req.params.b;

  sql.tramaSMI(anio,mes).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
   
  });
}); 

router.get("/get-trama-smi/:a/:b", function (req, res,next) {
  let anio = req.params.a;
  let mes = req.params.b;

  sql.getTramaSMI(anio,mes).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
  });
});

router.get("/trama-ser/:a/:b", function (req, res,next) {
  let anio = req.params.a;
  let mes = req.params.b;

  sql.tramaSER(anio,mes).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
   
  });
});

router.get("/get-trama-ser/:a/:b", function (req, res,next) {
  let anio = req.params.a;
  let mes = req.params.b;

  sql.getTramaSER(anio,mes).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
   
  });
});

router.get("/trama-rn/:a/:b", function (req, res,next) {
  let anio = req.params.a;
  let mes = req.params.b;

  sql.tramaRN(anio,mes).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
   
  });
});

router.get("/get-trama-rn/:a/:b", function (req, res,next) {
  let anio = req.params.a;
  let mes = req.params.b;

  sql.getTramaRN(anio,mes).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
   
  });
});

router.get("/get-last-correlative/:a/:b", function (req, res,next) {
  let anio = req.params.a;
  let mes = req.params.b;

  sql.getLastCorrelative(anio,mes).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
   
  });
});

router.post("/send-resum", function (req, res,next) {

  const data = req.body
  const anio = data.anio
  const mes = data.mes
  const nroEnvio = data.nroEnvio
  const nZip = data.nZip
  const dni = data.dni
  const mesP = data.mesP

  sql.setTramaRESUMEN(anio,mes,nroEnvio,nZip,dni,mesP).then((result) => {
    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
   
  });
});

router.get("/get-trama-res/:a/:b/:c", function (req, res,next) {
  let anio = req.params.a;
  let mes = req.params.b;
  let nenvio = req.params.c

  sql.getTramaRes(anio,mes,nenvio).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
   
  });
});

router.post("/send-trama", function (req, res,next) {

  const data = req.body;

  sql.sendTrama(data).then((result) => {
    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
   
  });
});

router.get("/get-fua-by-num-and-lote/:a/:b", function (req, res,next) {
  let fua = req.params.a;
  let lote = req.params.b;

  sql.getFuaByNumAndLote(fua,lote).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
   
  });
});

module.exports = router;


