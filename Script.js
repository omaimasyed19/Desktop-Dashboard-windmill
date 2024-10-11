const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  body.classList.toggle('dark-theme');
  updateThemeIcon();
});

function updateThemeIcon() {
  if (body.classList.contains('light-theme')) {
    themeToggleBtn.textContent = '🌞';
  } else {
    themeToggleBtn.textContent = '🌙';
  }
}

updateThemeIcon();

const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});

const revenueData = [
  { name: 'Shirts', value: 400 },
  { name: 'Shoes', value: 300 },
  { name: 'Bags', value: 300 },
];

const trafficData = [
  { name: 'Jan', Organic: 40, Paid: 24 },
  { name: 'Feb', Organic: 30, Paid: 13 },
  { name: 'Mar', Organic: 20, Paid: 38 },
  { name: 'Apr', Organic: 27, Paid: 39 },
  { name: 'May', Organic: 18, Paid: 48 },
  { name: 'Jun', Organic: 23, Paid: 38 },
  { name: 'Jul', Organic: 34, Paid: 43 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

function preparePieData(data) {
  return {
    labels: data.map(item => item.name),
    datasets: [{
      data: data.map(item => item.value),
      backgroundColor: COLORS,
      hoverBackgroundColor: COLORS,
    }]
  };
}

function prepareLineData(data) {
  return {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Organic',
        data: data.map(item => item.Organic),
        borderColor: '#8884d8',
        backgroundColor: 'rgba(136, 132, 216, 0.2)',
        fill: true,
      },
      {
        label: 'Paid',
        data: data.map(item => item.Paid),
        borderColor: '#82ca9d',
        backgroundColor: 'rgba(130, 202, 157, 0.2)',
        fill: true,
      },
    ]
  };
}

const revenueCtx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(revenueCtx, {
  type: 'pie',
  data: preparePieData(revenueData),
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: getComputedStyle(document.body).getPropertyValue('--text-color')
        }
      },
      tooltip: {
        enabled: true
      }
    }
  }
});

const trafficCtx = document.getElementById('trafficChart').getContext('2d');
const trafficChart = new Chart(trafficCtx, {
  type: 'line',
  data: prepareLineData(trafficData),
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: getComputedStyle(document.body).getPropertyValue('--text-color')
        }
      },
      tooltip: {
        enabled: true
      }
    },
    scales: {
      x: {
        ticks: {
          color: getComputedStyle(document.body).getPropertyValue('--text-color')
        },
        grid: {
          color: 'rgba(74, 85, 104, 0.5)'
        }
      },
      y: {
        ticks: {
          color: getComputedStyle(document.body).getPropertyValue('--text-color')
        },
        grid: {
          color: 'rgba(74, 85, 104, 0.5)'
        }
      }
    }
  }
});
