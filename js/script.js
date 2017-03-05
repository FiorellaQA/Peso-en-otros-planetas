document.getElementById("form1").addEventListener("submit",function(e){
	e.preventDefault(); //Evita el envío del formulario hasta comprobar
	
	var boton = document.getElementById("boton");
	var nombre = document.getElementById("name").value.trim();
	var peso = document.getElementById("peso").value.trim();

	if(isNaN(peso) || peso == null || peso == ""){
		alert("Verifique que el peso sean un número.");
		document.getElementById("peso").focus();
		return false;
	}else{
		var masa = peso/9.80;
	}

	var planetas = {
		"mercurio": 3.72,
		"venus": 	8.82,
		"tierra": 	9.8,
		"marte": 	3.72,
		"júpiter": 	23.33,
		"saturno": 	9.01,
		"urano": 	8.72,
		"neptuno": 	10.97,
		"plutón": 	0.65
	};
	var text = "";
	for( i in planetas){
		var masaPlaneta = planetas[i] * masa;
		planeta = i.charAt(0).toUpperCase() + i.slice(1);
		text += "Tu peso en " + planeta + " es de: " + masaPlaneta.toFixed(2) + "Kg \n";
	}
	alert("Hola " + nombre + "\n" + text);

});
