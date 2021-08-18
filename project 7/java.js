  const x = document.querySelector('.x');
  const alert = document.querySelector('.alert');
  const send = document.querySelector('.send-button');
  const search = document.querySelector('.user-search');
  const text = document.querySelector('#text');
  const sent = document.querySelector('.sent');
  const error = document.querySelector('.error');

  send.addEventListener('click', function() {
    if (search.value === '' || text.value === '') {
      error.style.display = 'block';
      sent.style.display = 'none'
    } else {
      sent.style.display = 'block';
      error.style.display = 'none'
    }
  });
  
  const labels = [
    '16-22',
    '23-29',
    '30-5',
    '6-12',
    '13-19',
    '20-26',
  ];
  const data = {
    labels: labels,
    datasets: [{
      backgroundColor: 'rgb(124, 118, 216, 0.35)',
      borderColor: 'rgb(124, 118, 216)',
      fill: true,
      data: [500, 1000, 300, 2000, 1500, 1250, 2500]
    }]
  };

  const config = {
    type: 'line',
    data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      }
    }
  };

var myChart = new Chart(
    document.getElementById('myLineChart'),
    config
  );

//second chart//

  const labelsTwo = [
    'S',
    'M',
    'T',
    'W',
    'T',
    'F',
    'S',
  ];
  const databar = {
    labels: labelsTwo,
    datasets: [{
      backgroundColor: 'rgb(124, 118, 216)',
      borderColor: 'purple',
      data: [100, 150, 200, 175, 160, 240, 230, 120],
      fill: true
    }]
  };

  const con = {
    type: 'bar',
    data: databar,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      }
    }
  };

var myChart2 = new Chart(
    document.getElementById('myBarChart'),
    con
  );

  //third chart//

  const labelsThree = [
    'DeskTop',
    'Tablet',
    'Phones'
  ];
  const datadough = {
    labels: labelsThree,
    datasets: [{
      label: 'Mobile Users',
      backgroundColor: [
      ' rgb(124, 118, 216)', 
       'rgb(3, 165, 252)',
       'rgb(252, 3, 94)'],
      borderColor: 'rgb(124, 118, 216, 0.35)',
      data: [100, 150, 200],
      fill: true
    }]
  };

  const condough = {
    type: 'doughnut',
    data: datadough,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right'
        }
      }
    }
  };

var myChart3 = new Chart(
    document.getElementById('myDoughChart'),
    condough
  );

  const mediaQuery = window.matchMedia('(min-width: 768px)')
if (mediaQuery.matches) {
  document.querySelector(".symbol").innerHTML += 
   "<h3>></h3>";
   document.querySelector(".symbol2").innerHTML += 
   "<h3>></h3>";
   document.querySelector(".symbol3").innerHTML += 
   "<h3>></h3>";
   document.querySelector(".symbol4").innerHTML += 
   "<h3>></h3>";
};

x.addEventListener("click", function() {
  alert.style.display = 'none';
  
});