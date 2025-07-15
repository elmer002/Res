document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let userPattern = /^[A-Za-z]{3,}[1]@$/;  
    let passPattern = /^[A-Za-z]+7$/;       

    if (!userPattern.test(username)) {
        let errorMessage = "El usuario debe tener un nombre + 1 + @ (Ej: Juan1@).";
        window.location.href = `error.html?error=${encodeURIComponent(errorMessage)}`;
        return;
    }
    
    if (!passPattern.test(password)) {
        let errorMessage = "La contraseña debe ser el apellido + 7 (Ej: Lopez7).";
        window.location.href = `error.html?error=${encodeURIComponent(errorMessage)}`;
        return;
    }

    window.location.href = `exito.html?user=${encodeURIComponent(username)}`;
});
