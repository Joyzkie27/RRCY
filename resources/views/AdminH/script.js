// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ----------------------------------------------------- CHARTS -------------------------------------------------------

// --------------------------------------------------- BAR CHARTS -----------------------------------------------------
const barChartOptions1 = {
  series: [
    {
      data: [10, 8, 6, 4, 2],
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ['Crime Against Person', 'Crime Against Property', 'Special Laws', 'Multiple Offense', 'Children at Risk'],
  },
  yaxis: {
    title: {
      text: 'Count',
    },
  },
};

const barChart1 = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions1
);
barChart1.render();

// --------------------------------------------------- BAR CHARTS -----------------------------------------------------
const barChartOptions2 = {
  series: [
    {
      data: [10, 8, 6, 4, 2],
    },
  ],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ['Crime Against Person', 'Crime Against Property', 'Special Laws', 'Multiple Offense', 'Children at Risk'],
  },
  yaxis: {
    title: {
      text: 'Count',
    },
  },
};

const barChart2 = new ApexCharts(
  document.querySelector('#bar-chart2'),
  barChartOptions2
);
barChart2.render();


//------------------------------------------------------- AREA CHART -------------------------------------------------
const areaChartOptions = {
  series: [
    {
      name: 'Purchase Orders',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'Sales Orders',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#4f35a1', '#246dec'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();



//------------------------------------------------------- PIE CHART -------------------------------------------------

const pieChartOptions = {
  series: [44, 55, 13, 43, 22],
  chart: {
    width: 600,
    type: 'pie',
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

const pieChart = new ApexCharts(
  document.querySelector("#pie-chart"),
  pieChartOptions
);
pieChart.render();



//------------------------------------------------------- LINE CHART -------------------------------------------------

const lineChartOptions = {
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51]
  }],
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Quarter 2022',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['1st Quater', '2nd Quater', '3rd Quater', '4th Quater'],
  }
};

const lineChart = new ApexCharts(
  document.querySelector("#line-chart"),
  lineChartOptions);
lineChart.render();



//------------------------------------------------------- DONUT CHART -------------------------------------------------
const pieChartOptions2 = {
  series: [44, 55, 13, 33],
  chart: {
    width: 380,
    type: 'donut',
  },
  dataLabels: {
    enabled: false
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        show: false
      }
    }
  }],
  legend: {
    position: 'right',
    offsetY: 0,
    height: 230,
  }
};

const pieChart2 = new ApexCharts(
  document.querySelector("#pie-chart2"),
  pieChartOption2);
pieChart2.render();


function appendData() {
  const arr = chart.w.globals.series.slice()
  arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
  return arr;
}

function removeData() {
  const arr = chart.w.globals.series.slice()
  arr.pop()
  return arr;
}

function randomize() {
  return chart.w.globals.series.map(function () {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1
  })
}

function reset() {
  return options.series
}

document.querySelector("#randomize").addEventListener("click", function () {
  chart.updateSeries(randomize())
})

document.querySelector("#add").addEventListener("click", function () {
  chart.updateSeries(appendData())
})

document.querySelector("#remove").addEventListener("click", function () {
  chart.updateSeries(removeData())
})

document.querySelector("#reset").addEventListener("click", function () {
  chart.updateSeries(reset())
})