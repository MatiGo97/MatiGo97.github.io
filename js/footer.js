
const persona = '{"nombre":"Ailín Jimena", "apellido":"Berasay", "sexo":"Femenino", "nacimiento":"03 / Agosto / 1992", "edad":31, "Dirección": "General Pacheco 1042, Salta", "nacionalidad":"Argentina","email":"jaberasay@example.com", "tfijo": "(272) 790-0888", "celular":"(489) 330-2385"}';
const obj = JSON.parse(persona);

document.getElementById("correo").addEventListener("invalid", function () {
    alert("Debe completar los campos obligatorios (Correo Electrónico).");
})

document.getElementById("empresa").addEventListener("invalid", function () {
    alert("Debe completar los campos obligatorios (Empresa).");
})

document.getElementById("boton_contacto").onclick =function(){
    document.getElementById("email").innerHTML = "📧 Correo electrónico: "+obj.email
    document.getElementById("tfijo").innerHTML = "| 📞 Teléfono fijo: "+obj.tfijo
    document.getElementById("celular").innerHTML = "| 📱 Celular: "+obj.celular
}