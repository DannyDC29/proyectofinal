document.addEventListener("DOMContentLoaded", function () {
    const calificarButton = document.getElementById('calificarButton');
    calificarButton.addEventListener('click', function () {
        const form = document.getElementById('quizForm');
        const respuestas = {
            pregunta1: form.elements['pregunta1'].value,
            pregunta2: form.elements['pregunta2'].value,
            pregunta3: form.elements['pregunta3'].value,
            pregunta4: form.elements['pregunta4'].value,
            pregunta5: form.elements['pregunta5'].value
        };

        const puntaje = calcularPuntaje(respuestas);

        // Redireccionar a resultado.html con el puntaje como parámetro
        window.location.href = `evaluacionnota.html?puntaje=${puntaje}`;
    });

    function calcularPuntaje(respuestas) {
        let puntaje = 0;
        if (respuestas.pregunta1 === 'c') {
            puntaje += 1;
        }
        if (respuestas.pregunta2 === 'c') {
            puntaje += 1;
        }
        if (respuestas.pregunta3 === 'b') {
            puntaje += 1;
        }
        if (respuestas.pregunta4 === 'c') {
            puntaje += 1;
        }
        if (respuestas.pregunta5 === 'c') {
            puntaje += 1;
        }
        return puntaje;
    }
});