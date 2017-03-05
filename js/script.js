var boton = document.getElementById("boton");
var printResul = document.getElementById("printResul");

document.getElementById("form1").addEventListener("submit",function(e){
	e.preventDefault(); //Evita el envío del formulario hasta comprobar
	//escribir el código aquí
	var nombre = document.getElementById("name").value ;
    var peso= document.getElementById("peso").value ;

	alert( "Hola "+ nombre +" Tu peso en los planetas es:"+
		    "\n" + "En mercurio es :"+ ((peso/9.8)*3.7).toFixed(2) +" Kg"+
			"\n" + "En jupiter es :"+ ((peso/9.8)*23.12).toFixed(2) +" Kg"+
			"\n" + "En marte es :"+ ((peso/9.8)*3.71).toFixed(2) +" Kg"+
			"\n" + "En venus es :"+ ((peso/9.8)*9.87).toFixed(2) +" Kg"+
			"\n" + "En pluton es :"+ ((peso/9.8)*0.81).toFixed(2) +" Kg"+
			"\n" + "En saturno es :"+ ((peso/9.8)*8.96).toFixed(2 )+" Kg"+
			"\n" + "En urano es :"+ ((peso/9.8)*8.69).toFixed(2) +" Kg"+
			"\n" + "En neptuno es :"+ ((peso/9.8)*11).toFixed(2) +" Kg");
			
					
});
