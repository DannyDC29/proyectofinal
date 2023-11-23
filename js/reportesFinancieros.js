document.addEventListener("DOMContentLoaded", function() {
    var selectMeses = document.getElementById('elegir-mes');
    var selectTipoReporte = document.getElementById('tipo-reporte');
    var tablaReportes = document.getElementById('tabla-reportes');

    var meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    meses.forEach(function(mes, indice) {
        var opcion = document.createElement('option');
        opcion.value = mes.toLowerCase();
        opcion.textContent = mes;
        selectMeses.appendChild(opcion);
    });

    selectMeses.addEventListener('change', function() {
        mostrarReportes();
    });

    selectTipoReporte.addEventListener('change', function() {
        mostrarReportes();
    });

    function mostrarReportes() {
        var mesSeleccionado = selectMeses.value;
        var tipoReporteSeleccionado = selectTipoReporte.value;

        var fila = document.createElement('tr');
        var celdaFecha = document.createElement('td');
        celdaFecha.textContent = '01/' + mesSeleccionado + '/2023'; // Ejemplo de fecha
        var celdaTipoReporte = document.createElement('td');
        celdaTipoReporte.textContent = tipoReporteSeleccionado.charAt(0).toUpperCase() + tipoReporteSeleccionado.slice(1); // Formatear texto

        fila.appendChild(celdaFecha);
        fila.appendChild(celdaTipoReporte);

        tablaReportes.querySelector('tbody').innerHTML = '';
        tablaReportes.querySelector('tbody').appendChild(fila);
    }
});





document.addEventListener("DOMContentLoaded", function() {
    var selectMeses = document.getElementById('elegir-mes');
    var selectTipoReporte = document.getElementById('tipo-reporte');

    selectMeses.addEventListener('change', function() {
        mostrarReportes();
    });

    selectTipoReporte.addEventListener('change', function() {
        mostrarReportes();
    });

    function mostrarReportes() {
        var mesSeleccionado = selectMeses.value;
        var tipoReporteSeleccionado = selectTipoReporte.value;

        // Aquí deberías tener tus datos para representar en el gráfico de barras
        // Ejemplo de datos
        var datos = [12, 19, 3, 5, 2, 3]; // Datos de ejemplo

        // Configuración del gráfico de barras
        var ctx = document.getElementById('grafico-barras').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: datos,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});