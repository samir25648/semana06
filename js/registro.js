document.getElementById('miFormulario').addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    // Obtener los valores de los campos
    const usuario = document.getElementById('usuario').value;
    const dni = document.getElementById('numeroDni').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;
    const repetirContrasena = document.getElementById('repetirContrasena').value;
    const nombre = document.getElementById('nombre').value;

    // Referencias a los elementos de error
    const usuarioError = document.getElementById('usuarioError');
    const dniError = document.getElementById('numeroDniError');
    const correoError = document.getElementById('correoError');
    const contrasenaError = document.getElementById('contrasenaError');
    const repetirContrasenaError = document.getElementById('repetirContrasenaError');
    const nombreError = document.getElementById('nombreError');

    // Limpiar mensajes de error previos
    usuarioError.textContent = '';
    dniError.textContent = '';
    correoError.textContent = '';
    contrasenaError.textContent = '';
    repetirContrasenaError.textContent = '';
    nombreError.textContent = '';

    let esValido = true;

    // Validación del usuario
    const usuarioRegex = /^[a-zA-Z0-9_]{4,16}$/;
    if (usuario === '') {
        usuarioError.textContent = 'Es obligatorio.';
        esValido = false;
    } else if (!usuarioRegex.test(usuario)) {
        usuarioError.textContent = 'El usuario debe tener entre 4 y 16 caracteres y solo puede contener letras, números y guiones bajos.';
        esValido = false;
    }

    // Validación del nombre
    const nombreRegex = /^[a-zA-Z0-9_]{4,16}$/;
    if (nombre === '') {
        nombreError.textContent = 'Es obligatorio.';
        esValido = false;
    } else if (!nombreRegex.test(nombre)) {
        nombreError.textContent = 'El nombre debe tener entre 4 y 16 caracteres y solo puede contener letras, números y guiones bajos.';
        esValido = false;
    }

    // Validación de la contraseña
    if (contrasena === '') {
        contrasenaError.textContent = 'Es obligatorio.';
        esValido = false;
    } else if (contrasena !== repetirContrasena) {
        repetirContrasenaError.textContent = 'Las contraseñas no coinciden.';
        esValido = false;
    }

    // Validación del DNI
    const dniRegex = /^\d{8}$/;
    if (dni === '') {
        dniError.textContent = 'Es obligatorio.';
        esValido = false;
    } else if (!dniRegex.test(dni)) {
        dniError.textContent = 'El DNI debe ser de 8 dígitos numéricos.';
        esValido = false;
    }

    // Validación del correo
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (correo === '') {
        correoError.textContent = 'Es obligatorio.';
        esValido = false;
    } else if (!correoRegex.test(correo)) {
        correoError.textContent = 'El correo electrónico debe tener un formato válido.';
        esValido = false;
    } else if (correo.includes(' ')) {
        correoError.textContent = 'El correo electrónico no debe contener espacios.';
        esValido = false;
    }

    if (esValido) {
        // Almacenar datos en localStorage
        localStorage.setItem('usuario', usuario);
        localStorage.setItem('contrasena', contrasena);

        // Redirigir a la página de inicio de sesión
        window.location.href = '/components/IniciarSesion.html';
    }
}
