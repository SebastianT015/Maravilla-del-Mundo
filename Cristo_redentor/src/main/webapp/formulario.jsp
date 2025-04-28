<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Evaluación</title>
		<link rel="stylesheet" href="css/estilo_formulario.css">
		<script src="js/funciones.js"></script>
	</head>
	<body>
		<main>
			<header>
		        <nav>
		            <ul>
		                <li><a href="index.jsp"><img src= "iconos/casa.png" width = "80" height = "80" alt = "página principal"/></a></li>
		            </ul>
		        </nav>
		    </header>
		    <section id="formulario">
				<h2 style=text-align:center>Formulario de Evaluación</h2>
		    	<form id="formularioEvaluacion" onsubmit="return evaluarFormulario();">
			        <p>1. ¿En qué país está el Cristo Redentor?</p>
			        <input type="text" id="pregunta1"><br><br>
			
			        <p>2. ¿En qué ciudad está ubicado?</p>
			        <input type="text" id="pregunta2"><br><br>
			
			        <p>3. ¿En qué año fue inaugurado?</p>
			        <input type="text" id="pregunta3"><br><br>
			
			        <p>4. ¿De qué material está hecho principalmente?</p>
			        <input type="text" id="pregunta4"><br><br>
			
			        <p>5. ¿Cuántos metros de altura mide?</p>
			        <input type="text" id="pregunta5"><br><br>
			
			        <input type="submit" value="Enviar evaluación">
			    </form>
			    <div id="resultado"></div>
		    </section>
		    
		</main>
		<footer>
			<p>&copy; 2025 Blog del Cristo Redentor - Trabajo Práctico</p>
		</footer>
	</body>
</html>