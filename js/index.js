function validarUsuario(){
    var name = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;   

    if(name=="samir" && password=="1234"){
        window.location.href = "/index.html";
    }else{
        alert("Usuario o contraseña incorrectos");
    }
}