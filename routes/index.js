const { json } = require('express');
var express = require('express');
var router = express.Router();
const sql = require("../dboperation");


/* GET home page. */


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

router.get("/diagnosticos_procedimientos_codigo/:st/:id/:code", function (req, res, next) {
  let anio = req.params.st;
	let mes = req.params.id;
  let code = req.params.code;
  
  sql.diag_and_proc_by_code(anio,mes,code).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }

   
  });
});

router.get("/diagnosticos_procedimientos_nom/:st/:id/:nom", function (req, res, next) {
  let anio = req.params.st;
	let mes = req.params.id;
  let nom = req.params.nom;
  
  sql.diag_and_proc_by_name(anio,mes,nom).then((result) => {

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

router.get("/discharge_control_with_procedures/:x/:y", function (req, res,next) {
  let f_init = req.params.x;
  let f_fin = req.params.y;

  sql.discharge_control_with_procedures(f_init,f_fin).then((result) => {
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

router.get("/affiliate-by-name/:a/:b/:c", function (req, res,next) {
  let ap1 = req.params.a;
  let ap2 = req.params.b;
  let n = req.params.c;

  sql.searchAffiliateByName(ap1,ap2,n).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
  });
});

router.get("/trama-atencion/:a/:b/:c/:d", function (req, res,next) {
  let anio = req.params.a;
  let mes = req.params.b;
  let mesP = req.params.c;
  let anioP = req.params.d;

  sql.tramaAtencion(anio,mes,mesP,anioP).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
   
  });
});

router.get("/get-trama-atencion/:a/:b/:c/:d", function (req, res,next) {
  let anio = req.params.a;
  let mes = req.params.b;
  let mesP = req.params.c;
  let anioP = req.params.d;


  sql.getTramaAtencion(anio,mes,mesP,anioP).then((result) => {

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
      res.json([{error:"sin datos"}])
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
      res.json([{error:"sin datos"}])
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

router.post("/send-resum-debug", function (req, res,next) {

  const data = req.body
  const anio = data.anio
  const mes = data.mes
  const nroEnvio = data.nroEnvio
  const nZip = data.nZip
  const dni = data.dni
  const mesP = data.mesP

  sql.setTramaRESUMENDEBUG(anio,mes,nroEnvio,nZip,dni,mesP).then((result) => {
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

router.get("/get-trama-res-debug/:a/:b/:c", function (req, res,next) {
  let anio = req.params.a;
  let mes = req.params.b;
  let nenvio = req.params.c

  sql.getTramaResDebug(anio,mes,nenvio).then((result) => {

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

router.post("/send-trama-debug", function (req, res,next) {

  const data = req.body;

  sql.sendTramaDebug(data).then((result) => {
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

router.get("/get-fua-by-account/:a", function (req, res,next) {
  let num = req.params.a;

  sql.getFuaByAccount(num).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
   
  });
});

router.get("/get-fua-by-dni/:a", function (req, res,next) {
  let dni = req.params.a;

  sql.getFuaByDNI(dni).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
  
  });
});

router.get("/get-fua-by-fullname/:a/:b/:c", function (req, res,next) {
  let ap = req.params.a;
  let am = req.params.b;
  let name = req.params.c;

  sql.getFuaByFullname(ap,am,name).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
  
  });
});

router.get("/get-employee/:a", function (req, res,next) {
  let dni = req.params.a;

  sql.getEmployee(dni).then((result) => {

    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
  
  });
});

router.post("/excludes", function (req, res, next) {
  const { values } = req.body;

  sql.setExcludes(values)
    .then(() => {
      res.json({ success: "insertado" });
    })
    .catch((error) => {
      console.error("Error al insertar los valores:", error);
      res.status(500).json({ success: "error" });
    });
});

router.get("/saludpol/:a/:b", function (req, res,next) {
  let f1 = req.params.a;
  let f2 = req.params.b;

  sql.constructTramaSaludpol(f1,f2).then((result) => {

    if(result[0].length>0){
      res.json(result);
    }else{
      res.json({error:"sin datos"})
    }
  
  });
});


router.get("/get-employee-by-user/:a/:b", function (req, res,next) {
  let dni = req.params.a;
  let user = req.params.b;

  sql.getEmployee(dni,user).then((result) => {

    if(result[0].length>0){
      let type = {
        content : getTypeUser(result[0][0].IdTipoEmpleado)
      }

      for (let i = result.length - 1; i >= 1; i--) {
        result[i + 1] = result[i];
      }

      result[1] = type;

      res.json(result);
    }else{
      res.json({error:"sin datos"})
    }
  
  });
});

router.post("/create-user", function (req, res,next) {

  const data = req.body;
  const idEmpleado = data.IdEmpleado
  const ApellidoPaterno = data.ApellidoPaterno
  const ApellidoMaterno = data.ApellidoMaterno
  const Nombres = data.Nombres
  const IdCondicionTrabajo = data.IdCondicionTrabajo
  const IdTipoEmpleado = data.IdTipoEmpleado
  const DNI = data.DNI
  const CodigoPlanilla = data.CodigoPlanilla
  const FechaIngreso = data.FechaIngreso
  const FechaRegistroHerramienta = data.FechaRegistroHerramienta
  const Usuario = data.Usuario
  const ClaveSisHerramientas = data.ClaveSisHerramientas
  const ReniecAutorizado = data.ReniecAutorizado
  const idTipoDocumento = data.idTipoDocumento
  const idTipoSexo = data.idTipoSexo
  const TipoEmpleado = data.Descripcion
 

  sql.setUser(idEmpleado,ApellidoPaterno,ApellidoMaterno,Nombres,IdCondicionTrabajo,IdTipoEmpleado,DNI,CodigoPlanilla,FechaIngreso,FechaRegistroHerramienta,Usuario,ClaveSisHerramientas,ReniecAutorizado,idTipoDocumento,idTipoSexo,TipoEmpleado).then((result) => {
    if(result[0].length>0){
      res.json(result[0]);
    }else{
      res.json({error:"sin datos"})
    }
   
  });
});

function getTypeUser(value){

  let x = ''

  if(value == 102){
    x = `
    
    <div class="sidebar">
      <div class="logo-details">
        <i class='bx bxs-ambulance' ></i>
        <span style="font-size: 18px;margin-left: -12px;" class="logo_name">Herramientas SIS</span>
      </div>
  
      <ul class="nav-links" id="links">
  
        <li>
          <a href="#inicio">
            <i class='bx bx-grid-alt' ></i>
            <span class="link_name">Inicio</span>
          </a>
          <ul class="sub-menu blank">
            <li><a class="link_name" href="#inicio">Inicio</a></li>
          </ul>
        </li>
  
        <li>
          <a href="#usuarios">
            <i class='bx bx-user'></i>
            <span class="link_name">Usuarios</span>
          </a>
          <ul class="sub-menu blank">
            <li><a class="link_name" href="#usuarios">Usuarios</a></li>
          </ul>
        </li>
  
        <li>
          <a href="#afiliados">
            <i class='bx bxs-vector'></i>
            <span class="link_name">Afiliados</span>
          </a>
          <ul class="sub-menu blank">
            <li><a class="link_name" href="#afiliados">Afiliados</a></li>
          </ul>
        </li>
  
        <li>
        <a href="#catalogo">
        <i class='bx bx-folder-open'></i>
          <span class="link_name">Catalogo</span>
        </a>
        <ul class="sub-menu blank">
          <li><a class="link_name" href="#catalogo">Catalogo</a></li>
        </ul>
      </li>

        <li>
          <div class="iocn-link">
            <a>
              <i class='bx bx-file'></i>
              <span class="link_name">Digitación</span>
            </a>
            <i class='bx bxs-chevron-down arrow' ></i>
          </div>
          <ul class="sub-menu">
            <li><a class="link_name" href="#">Digitación</a></li>
            <li><a href="#fua_analysis">Análisis de FUA</a></li>
          </ul>
        </li>
  
        <li>
          <div class="iocn-link">
            <a>
              <i class='bx bx-collection' ></i>
              <span class="link_name">Caja</span>
            </a>
            <i class='bx bxs-chevron-down arrow' ></i>
          </div>
          <ul class="sub-menu">
            <li><a class="link_name" href="#">Caja</a></li>
            <li><a href="#estado_comprobante">Estado de comprobantes</a></li>
          </ul>
        </li>
      
        <li>
        <div class="iocn-link">
          <a>
            <i class='bx bx-objects-vertical-bottom'></i>
            <span class="link_name">Reportes</span>
          </a>
          <i class='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul class="sub-menu">
          <li><a class="link_name" href="#">Reportes</a></li>
          <li><a href="#reporte_seguros">Reporte de seguros SOAT</a></li>
          <li><a href="#produccion">Producción</a></li>
          <li><a href="#produccion_ins_med">Producción con ins y med.</a></li>
        </ul>
      </li>
  
      <li>
        <div class="iocn-link">
          <a>
            <i class='bx bx-clipboard'></i>
            <span class="link_name">Atenciones</span>
          </a>
          <i class='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul class="sub-menu">
          <li><a class="link_name">Atenciones</a></li>
          <li><a href="#control_altas">Control de altas</a></li>
          <li><a href="#control_altas_cpt">Control de altas CPT</a></li>
          <li><a href="#estado_atencion">Estado de atenciones</a></li>
          <li><a href="#diag_proc">Diagnosticos y Proced.</a></li>
        </ul>
      </li>
  
      <li>
        <div class="iocn-link">
          <a>
            <i class='bx bx-label'></i>
            <span class="link_name">Tramas</span>
          </a>
          <i class='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul class="sub-menu">
          <li><a class="link_name">Tramas</a></li>
          <li><a href="#trama_sis">Trama SIS</a></li>
          <li><a href="#trama_saludpol">Trama Saludpol</a></li>
        </ul>
      </li>
  
       <li>
      <div class="profile-details">
        <div class="profile-content">
        <i onclick="logout()" class='bx bx-log-out'></i>
          <img src="/image/profile.jpg" alt="profileImg">
        </div>
        <div class="name-job">
        <div id="nameuser" class="profile_name">Nombre de usuario</div>
        <div id="typeuser" class="job">Tipo de usuario</div>
        </div>
 
      </div>
    </li>
  </ul>
  
  
    </div>
    <section class="home-section">
      <div class="home-content">
        <i class='bx bx-menu' ></i>
      </div>
  
      <div class="myContent">
      </div>
    </section>

    `
  }
  else if(value == 212){
    x = `
    
    <div class="sidebar">
      <div class="logo-details">
        <i class='bx bxs-ambulance' ></i>
        <span style="font-size: 18px;margin-left: -12px;" class="logo_name">Herramientas SIS</span>
      </div>
  
      <ul class="nav-links" id="links">
  
        <li>
          <a href="#inicio">
            <i class='bx bx-grid-alt' ></i>
            <span class="link_name">Inicio</span>
          </a>
          <ul class="sub-menu blank">
            <li><a class="link_name" href="#inicio">Inicio</a></li>
          </ul>
        </li>
  
        <li>
          <div class="iocn-link">
            <a>
              <i class='bx bx-file'></i>
              <span class="link_name">Digitación</span>
            </a>
            <i class='bx bxs-chevron-down arrow' ></i>
          </div>
          <ul class="sub-menu">
            <li><a class="link_name" href="#">Digitación</a></li>
            <li><a href="#fua_analysis">Análisis de FUA</a></li>
          </ul>
        </li>
  
        <li>
          <div class="iocn-link">
            <a>
              <i class='bx bx-collection' ></i>
              <span class="link_name">Caja</span>
            </a>
            <i class='bx bxs-chevron-down arrow' ></i>
          </div>
          <ul class="sub-menu">
            <li><a class="link_name" href="#">Caja</a></li>
            <li><a href="#estado_comprobante">Estado de comprobantes</a></li>
          </ul>
        </li>
      
        <li>
        <div class="iocn-link">
          <a>
            <i class='bx bx-objects-vertical-bottom'></i>
            <span class="link_name">Reportes</span>
          </a>
          <i class='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul class="sub-menu">
          <li><a class="link_name" href="#">Reportes</a></li>
          <li><a href="#reporte_seguros">Reporte de seguros SOAT</a></li>
          <li><a href="#produccion">Producción</a></li>
          <li><a href="#produccion_ins_med">Producción con ins y med.</a></li>
        </ul>
      </li>
  
      <li>
        <div class="iocn-link">
          <a>
            <i class='bx bx-clipboard'></i>
            <span class="link_name">Atenciones</span>
          </a>
          <i class='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul class="sub-menu">
          <li><a class="link_name">Atenciones</a></li>
          <li><a href="#control_altas">Control de altas</a></li>
          <li><a href="#control_altas_cpt">Control de altas CPT</a></li>
          <li><a href="#estado_atencion">Estado de atenciones</a></li>
          <li><a href="#diag_proc">Diagnosticos y Proced.</a></li>
        </ul>
      </li>
  
      <li>
        <div class="iocn-link">
          <a>
            <i class='bx bx-label'></i>
            <span class="link_name">Tramas</span>
          </a>
          <i class='bx bxs-chevron-down arrow' ></i>
        </div>
        <ul class="sub-menu">
          <li><a class="link_name">Tramas</a></li>
          <li><a href="#trama_sis">Trama SIS</a></li>
          <li><a href="#trama_saludpol">Trama Saludpol</a></li>
        </ul>
      </li>
  
       <li>
      <div class="profile-details">
        <div class="profile-content">
        <i onclick="logout()" class='bx bx-log-out'></i>
          <img src="/image/profile.jpg" alt="profileImg">
        </div>
        <div class="name-job">
        <div id="nameuser" class="profile_name">Nombre de usuario</div>
        <div id="typeuser" class="job">Tipo de usuario</div>
        </div>
    </li>
  </ul>
  
  
    </div>
    <section class="home-section">
      <div class="home-content">
        <i class='bx bx-menu' ></i>
      </div>
  
      <div class="myContent">
      </div>
    </section>

    `
  }else if(value == 44){
    x = `
    
    <div class="sidebar">
      <div class="logo-details">
        <i class='bx bxs-ambulance' ></i>
        <span style="font-size: 18px;margin-left: -12px;" class="logo_name">Herramientas SIS</span>
      </div>
  
      <ul class="nav-links" id="links">
  
        <li>
          <a href="#inicio">
            <i class='bx bx-grid-alt' ></i>
            <span class="link_name">Inicio</span>
          </a>
          <ul class="sub-menu blank">
            <li><a class="link_name" href="#inicio">Inicio</a></li>
          </ul>
        </li>
  
  
  
        <li>
          <a href="#">
          <i class='bx bx-folder-open'></i>
            <span class="link_name">Catalogo</span>
          </a>
          <ul class="sub-menu blank">
            <li><a class="link_name" href="#">Catalogo</a></li>
          </ul>
        </li>

  
       <li>
      <div class="profile-details">
        <div class="profile-content">
          <i onclick="logout()" class='bx bx-log-out'></i>
          <img src="/image/profile.jpg" alt="profileImg">
        </div>
        <div class="name-job">
        <div id="nameuser" class="profile_name">Nombre de usuario</div>
        <div id="typeuser" class="job">Tipo de usuario</div>
        </div>
      </div>
    </li>
  </ul>
  
  
    </div>
    <section class="home-section">
      <div class="home-content">
        <i class='bx bx-menu' ></i>
      </div>
  
      <div class="myContent">
      </div>
    </section>

    `
  }else{
    x = `
   
    <div class="sidebar">
      <div class="logo-details">
        <i class='bx bxs-ambulance' ></i>
        <span style="font-size: 18px;margin-left: -12px;" class="logo_name">Herramientas SIS</span>
      </div>
 

    </div>
    <section class="home-section">
      <div class="home-content">
        <i class='bx bx-menu' ></i>
      </div>
  
      <div><center>
      <H1 style="margin-top:10%;">Módulos en mantenimiento</H1>
      
      <div class="form__group" style="margin-top: 10px;">
      <button style="cursor: pointer;" onclick="logout()" id="btn-login" class="btn-login">&nbsp;Cerrar sesión &nbsp;</button>
      </div>

      </center>
      </div>
    </section>
    `
  }

  return x

}


router.post("/get-package-trama/:a/:b/:c", function (req, res,next) {
  let anio = req.params.a;
  let month = req.params.b;
  let n_send = req.params.c;

    sql.getPackageTrama(anio,month,n_send).then((result) => {

      res.send(result);
  });
});


module.exports = router;


