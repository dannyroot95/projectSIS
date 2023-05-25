
let cache = sessionStorage.getItem("content")
let user = sessionStorage.getItem("user")


if(cache != "" && cache != null){
    console.log(user)
    setContentFromCache(cache)
}

function setContentFromCache(content){

 
    var scriptElement = document.createElement('script');
    scriptElement.src = '/js/script.js';
    scriptElement.type = 'text/javascript';

    var scriptElement2 = document.createElement('script');
    scriptElement2.src = '/js/modules.js';
    scriptElement2.type = 'text/javascript';

    document.getElementById("start").innerHTML = content

    document.head.appendChild(scriptElement);
    document.head.appendChild(scriptElement2);

    let z = JSON.parse(user)

    document.getElementById("nameuser").innerHTML = z.Usuario 
    document.getElementById("typeuser").innerHTML = z.Descripcion

  }

  function logout(){

    sessionStorage.removeItem("content")
    sessionStorage.removeItem("user")

    location.reload()

  }