// script.js

function calcularIMC() {
    // Obtener los valores de peso, altura y edad
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const edad = parseInt(document.getElementById('edad').value);

    // Verificar si los valores son válidos
    if (isNaN(peso) || isNaN(altura) || isNaN(edad)) {
        alert("Por favor, ingresa valores válidos.");
        return;
    }

    // Calcular el IMC
    const imc = peso / (altura * altura);

    // Mostrar el IMC en el campo correspondiente
    document.getElementById('tuImc').value = imc.toFixed(2);

    // Generar recomendaciones basadas en el IMC
    let mensaje = "";
    let dieta = "";
    let ejercicios = "";

    if (imc < 18.5) {
        mensaje = "Bajo peso";
        dieta = "Dieta para subir de peso de forma saludable.";
        ejercicios = "Entrenamiento de fuerza y resistencia.";
    } else if (imc >= 18.5 && imc < 25) {
        mensaje = "Peso normal";
        dieta = "Dieta equilibrada y balanceada.";
        ejercicios = "Rutina de ejercicios cardiovasculares y de fuerza.";
    } else if (imc >= 25 && imc < 30) {
        mensaje = "Sobrepeso";
        dieta = "Dieta baja en calorías y grasas saturadas.";
        ejercicios = "Ejercicios cardiovasculares intensos y entrenamiento de resistencia.";
    } else {
        mensaje = "Obesidad";
        dieta = "Dieta estricta baja en calorías y grasas.";
        ejercicios = "Ejercicios cardiovasculares intensos, entrenamiento de fuerza y resistencia.";
    }

    // Mostrar las recomendaciones en el campo correspondiente
    document.getElementById('recomendaciones').value = `Mensaje: ${mensaje}\nDieta: ${dieta}\nEjercicios: ${ejercicios}`;
}
