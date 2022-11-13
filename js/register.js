registrar=() =>{
    
    const form= document.getElementById("form");
    const email= document.getElementById("remail").value;
    const password= document.getElementById("rcontraseña").value;
    const rnombre= document.getElementById("rnombre").value;
    const rapellido= document.getElementById("rapellido").value;
    const rdomicilio= document.getElementById("rdomicilio").value;
    const rdni= document.getElementById("rdni").value;

    const expresionesNombres = {
          numeros: /[0-9]/,
          caracterEspecial: /[ -/:-@[-`{-■]/,
          vacio: /^$/
          }

    if (expresionesNombres.numeros.test(rnombre)){
        swal({
            title: "Nombre tiene un numero",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    if (expresionesNombres.caracterEspecial.test(rnombre)){
        swal({
            title: "Nombre tiene algun caracter especial",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    if (expresionesNombres.vacio.test(rnombre)){
        swal({
            title: "Nombre esta vacio",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    if (rnombre.length < 3){
        swal({
            title: "El nombre es menor a lo permitido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }

    if (rnombre.length > 20){
        swal({
            title: "El nombre es mayor a lo permitido",
            text: "",
            icon: "warning",
            button: "Volver a ingresar dato",
          }); 
    }
}

