function convertirTemperatura (temp, tipo) {
	if (tipo !== "C" && tipo !== "F") {
		console.log("Por favor ingrese un tipo de temperatura correcta")
		return
	}

	if (isNaN(temp)) {
		console.log("Por favor ingrese un numero de temperatura")
		return
	}

	let resultado;

	if (tipo == "C") {
		resultado = (temp * 1.8) + 32
	}
	else {
		resultado = (temp - 32) / 1.8
	}

	console.log("El resultado es ", resultado)
} 

convertirTemperatura(25, "C");
