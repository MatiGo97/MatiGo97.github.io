
const persona = '{"nombre":"Ailín Jimena", "apellido":"Berasay", "sexo":"Femenino", "nacimiento":"03 / Agosto / 1992", "edad":31, "Dirección": "General Pacheco 1042, Salta", "nacionalidad":"Argentina","email":"jaberasay@example.com", "tfijo": "(272) 790-0888", "celular":"(489) 330-2385"}';
const obj = JSON.parse(persona);

/*
document.getElementById("correo").addEventListener("invalid", function () {
    alert("Debe completar los campos obligatorios (Correo Electrónico).");
})

document.getElementById("empresa").addEventListener("invalid", function () {
    alert("Debe completar los campos obligatorios (Empresa).");
})

    document.getElementById("boton_contacto").innerHTML = "Ocultar Datos de Contacto"

**/

document.getElementById("boton_mostrar").onclick =function(){
    document.getElementById("boton_mostrar").style.display = 'none'
    document.getElementById("boton_ocultar").style.display = 'inline'
    document.getElementById("email").innerHTML = "📧 Correo electrónico: "+obj.email
    document.getElementById("tfijo").innerHTML = "| 📞 Teléfono fijo: "+obj.tfijo
    document.getElementById("celular").innerHTML = "| 📱 Celular: "+obj.celular
}

document.getElementById("boton_ocultar").onclick =function(){
    document.getElementById("boton_mostrar").style.display = 'inline'
    document.getElementById("boton_ocultar").style.display = 'none'
    document.getElementById("email").innerHTML = " "
    document.getElementById("tfijo").innerHTML = " "
    document.getElementById("celular").innerHTML = " "
}