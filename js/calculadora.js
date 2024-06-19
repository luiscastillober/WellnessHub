// js/calculadora.js

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
    let imageUrl = "";

    if (imc < 18.5) {
        mensaje = "Bajo peso";
        dieta = "Calórica y nutritiva: Incluir alimentos ricos en calorías y nutrientes, como frutos secos, semillas, aguacates, aceites saludables (como el aceite de oliva), y batidos de proteínas.\n" +
            "Proteína: Consumir suficiente proteína para ayudar en la construcción de masa muscular. Fuentes buenas incluyen carne magra, pescado, huevos, legumbres, y productos lácteos.\n" +
            "Frecuencia de comidas: Comer con más frecuencia, incorporando snacks saludables entre las comidas principales.";
        ejercicios = "Entrenamiento de fuerza: Levantamiento de pesas y ejercicios de resistencia para ganar masa muscular.\n" +
            "Ejercicio moderado: Mantener una rutina de ejercicio cardiovascular moderado para mejorar la salud cardiovascular sin quemar demasiadas calorías.";
        imageUrl = "imagenes/bajopeso.jpg";
    } else if (imc >= 18.5 && imc < 25) {
        mensaje = "Peso normal";
        dieta = "Balanceada: Una dieta equilibrada con frutas, verduras, granos enteros, proteínas magras, y grasas saludables.\n" +
            "Control de porciones: Mantener un control adecuado de las porciones para evitar el aumento de peso.\n" +
            "Hidratación: Beber suficiente agua a lo largo del día.";
        ejercicios = "Cardiovascular: Al menos 150 minutos de actividad cardiovascular moderada (como caminar, correr, andar en bicicleta) o 75 minutos de actividad vigorosa cada semana.\n" +
            "Entrenamiento de fuerza: Ejercicios de resistencia al menos dos veces por semana para mantener y construir masa muscular.";
        imageUrl = "imagenes/pesonormal.jpg";
    } else if (imc >= 25 && imc < 30) {
        mensaje = "Sobrepeso";
        dieta = "Reducción calórica: Crear un déficit calórico controlando la ingesta de calorías, pero asegurándose de obtener nutrientes suficientes.\n" +
            "Alimentos bajos en calorías: Comer más alimentos bajos en calorías y ricos en nutrientes, como frutas, verduras, y granos enteros.\n" +
            "Evitar azúcares y grasas saturadas: Reducir el consumo de alimentos procesados, azúcares añadidos, y grasas saturadas.";
        ejercicios = "Cardiovascular: Al menos 150-300 minutos de actividad cardiovascular moderada o 75-150 minutos de actividad vigorosa por semana.\n" +
            "Entrenamiento de fuerza: Ejercicios de resistencia al menos dos veces por semana.\n" +
            "Incremento gradual: Aumentar gradualmente la intensidad y duración del ejercicio para evitar lesiones.";
        imageUrl = "imagenes/sobrepeso.jpg";
    } else {
        mensaje = "Obesidad";
        dieta = "Plan estructurado: Seguir un plan de alimentación estructurado y supervisado por un nutricionista.\n" +
            "Déficit calórico: Crear un déficit calórico significativo pero saludable, asegurándose de obtener suficientes nutrientes.\n" +
            "Alimentos integrales: Consumir alimentos integrales y evitar alimentos procesados, azúcares añadidos, y grasas trans.";
        ejercicios = "Cardiovascular: Incrementar gradualmente la actividad cardiovascular a 300 minutos de ejercicio moderado o 150 minutos de ejercicio vigoroso por semana.\n" +
            "Entrenamiento de fuerza: Incorporar ejercicios de resistencia para mejorar la masa muscular y el metabolismo.\n" +
            "Actividad diaria: Aumentar la actividad física diaria (como caminar, subir escaleras, etc.) además del ejercicio planificado.";
        imageUrl = "imagenes/obesidad.jpg";
    }

    // Formatear las recomendaciones en párrafos
    const formatearEnParrafos = (texto) => {
        return texto.split("\n").map(linea => `<p>${linea}</p>`).join("");
    };

    // Mostrar las recomendaciones en el contenedor correspondiente
    const recommendationsContainer = document.getElementById('recommendations-container');
    recommendationsContainer.innerHTML = `
        <div class="recommendation">
            <img src="${imageUrl}" alt="${mensaje}">
            <div class="recommendation-content">
                <h3>${mensaje}</h3>
                <div><strong>Dieta:</strong> ${formatearEnParrafos(dieta)}</div>
                <div><strong>Ejercicios:</strong> ${formatearEnParrafos(ejercicios)}</div>
            </div>
        </div>
    `;
}