const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
            label: 'Ventas por Mes',
            data: [0, 10, 5, 2, 20, 30, 45, 15, 20, 10, 20, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
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
                'rgba(255, 159, 64, 1)',
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
const fakeData = [
    { name: 'Curso A', price: 100, sales: 5 },
    { name: 'Curso B', price: 150, sales: 10 },
    { name: 'Curso C', price: 200, sales: 7 },
];

const form = document.getElementById('report-form');
const table = document.getElementById('report-table');
const coursesSold = document.getElementById('courses-sold');
const totalSales = document.getElementById('total-sales');
const costTotal = document.getElementById('cost-total');
const salesTotal = document.getElementById('sales-total');
const finalProfit = document.getElementById('final-profit');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    generateReport();
});

function generateReport() {
    const selectedMonth = document.getElementById('month').value;
    const courses = [];
    let totalCoursesSold = 0;
    let totalCost = 0;
    let totalSalesValue = 0;

    fakeData.forEach((course) => {
        const salesForMonth = course.sales;
        const revenue = salesForMonth * course.price;
        const cost = salesForMonth * (course.price * 0.8); 

        if (salesForMonth > 0) {
            courses.push({
                name: course.name,
                price: course.price,
                sales: salesForMonth,
                revenue: revenue,
                cost: cost,
            });

            totalCoursesSold += salesForMonth;
            totalCost += cost;
            totalSalesValue += revenue;
        }
    });

    displayCourses(courses);
    displayFinancialReport(totalCoursesSold, totalCost, totalSalesValue);
}

function displayCourses(courses) {
    const tbody = table.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    courses.forEach((course) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${course.name}</td>
            <td>$${course.price}</td>
            <td>$${course.revenue}</td>
        `;
        tbody.appendChild(tr);
    });
}

function displayFinancialReport(totalCoursesSold, totalCost, totalSalesValue) {
    coursesSold.textContent = `Cantidad de Cursos Vendidos: ${totalCoursesSold}`;
    totalSales.textContent = `Total de Ventas: $${totalSalesValue}`;
    costTotal.textContent = `Importe de Costos: $${totalCost}`;
    salesTotal.textContent = `Importe de Ventas: $${totalSalesValue}`;
    finalProfit.textContent = `Renta Final: $${totalSalesValue - totalCost}`;
}