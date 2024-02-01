document.addEventListener('DOMContentLoaded', function () {
    // Sample data for the charts
    var data1 = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'Chart 1 Data',
            backgroundColor: '#9564bf',
            borderColor: '#724b8e',
            data: [10, 20, 15, 25, 30],
        }]
    };

    var data2 = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Chart 2 Data',
            backgroundColor: ['#9564bf', '#724b8e', '#a184c7', '#7a5281', '#8e67ab', '#b399d4'],
            borderColor: '#fff',
            data: [12, 19, 3, 5, 2, 3],
        }]
    };

    // Chart configuration
    var config1 = {
        type: 'bar',
        data: data1,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    var config2 = {
        type: 'doughnut',
        data: data2,
    };

    // Create the charts
    var ctx1 = document.getElementById('chart1').getContext('2d');
    var ctx2 = document.getElementById('chart2').getContext('2d');

    new Chart(ctx1, config1);
    new Chart(ctx2, config2);
});


// Add the dark/light mode toggle functionality
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', darkModeToggle.checked);
});

// Your other JavaScript code
