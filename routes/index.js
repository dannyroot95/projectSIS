const { json } = require('express');
var express = require('express');
var router = express.Router();
const sql = require("../dboperation");
const app = express()


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//test connection
router.get('/test', function(req, res, next) {
  sql.getdata();
  res.render('index', { title: 'Express' });
});

/*
router.get("/getdata_withQuery", function (req, res, next) {
  sql.getdata_withQuery().then((result) => {
    res.json(result[0]);
  });
});*/


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


module.exports = router;


