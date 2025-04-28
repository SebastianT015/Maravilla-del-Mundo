function evaluarFormulario() {
    let puntaje = 0;
    const respuestas = {
        pregunta1: "Brasil",
        pregunta2: "Río de Janeiro",
        pregunta3: "1931",
        pregunta4: "Hormigón armado",
        pregunta5: "30"
    };

    const pregunta1 = document.getElementById("pregunta1").value.trim();
    const pregunta2 = document.getElementById("pregunta2").value.trim();
    const pregunta3 = document.getElementById("pregunta3").value.trim();
    const pregunta4 = document.getElementById("pregunta4").value.trim();
    const pregunta5 = document.getElementById("pregunta5").value.trim();
    if (pregunta1 === "" || pregunta2 === "" || pregunta3 === "" || pregunta4 === "" || pregunta5 === "") {
        alert("Por favor, completa todas las preguntas antes de enviar la evaluación.");
        return false;
    }
	function normalizar(texto) {
	       return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
	   }
	   if (normalizar(pregunta1) === normalizar(respuestas.pregunta1)) {
	       puntaje++;
	   }
	   if (normalizar(pregunta2) === normalizar(respuestas.pregunta2)) {
	       puntaje++;
	   }
	   if (normalizar(pregunta3) === normalizar(respuestas.pregunta3)) {
	       puntaje++;
	   }
	   if (normalizar(pregunta4) === normalizar(respuestas.pregunta4)) {
	       puntaje++;
	   }
	   if (normalizar(pregunta5) === normalizar(respuestas.pregunta5)) {
	       puntaje++;
	   }
    document.getElementById("resultado").innerHTML = "Obtuviste " + puntaje + " de 5 puntos.";

    return false;
}