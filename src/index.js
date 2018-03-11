// import ownCarousel from './js/own.carousel.min.js'
// import isotope from './js/isotope.pkgd.min.js'
// import jQuery from './js/jquery-3.3.1.min.js'
// import chart from './js/Chart.min.js'

let $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    category: '[data-category]'
  }
});

$('#filters').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

$('#sorts').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});

$('#sorts').on( 'click', 'button', function() {
  var filterValueS = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValueS });
});

$('.button-group').each(function(i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on('click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $(this).addClass('is-checked');
  });
});
  


function loadCurrencies(){
  let from = document.getElementById('from');
  let to = document.getElementById('to');
  let xHttp = new XMLHttpRequest();
  xHttp.onreadystatechange = function(){
    if(xHttp.readyState == 4 && xHttp.status == 200){
      let obj = JSON.parse(this.responseText);
      let options = '';
      for(key in obj.rates){
        options = options + '<option>'+key+'</option>';
      }
      from.innerHtml = options;
      to.innerHtml = options;
    }
  }
  xHttp.open('GET','https://api.fixer.io/latest', true);
  xHttp.send();
}

function converterCurrency(){
  let from = document.getElementById('from').value;
  let to = document.getElementById('to').value;
  let amount = document.getElementById('amount').value;
  let result = document.getElementById('result');
  if(from.length>0 && to.length>0 && amount.length>0){
    let xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function(){
      if(xHttp.readyState == 4 && xHttp.status == 200){
        let obj = JSON.parse(this.responseText);
        let fact = obj.rates[to];
        if(fact!=undefined){
          result.innerHtml = parseFloat(amount)*parseFloat(fact);
        }
      }
    }    
  xHttp.open('GET','https://api.fixer.io/latest'+from+'&symbols'+to, true);
  xHttp.send();
  }
}



var radialCanvas = document.getElementById("radialChart");

var radialData = {
  labels: ["npm",  "jQuery", "SASS", "Webpack", "Veu.js", "Pug"],
  datasets: [{
    label: "Degree of ownership of technology",
    backgroundColor: "transparent",
    borderColor: "rgba(200,0,0,0.6)",
    fill: false,
    radius: 6,
    pointRadius: 6,
    pointBorderWidth: 3,
    pointBackgroundColor: "orange",
    pointBorderColor: "rgba(200,0,0,0.6)",
    pointHoverRadius: 10,
    data: [3, 2, 5, 1, 4, 6]
  }, {
    label: "Technology relevance",
    backgroundColor: "transparent",
    borderColor: "rgba(0,0,200,0.6)",
    fill: false,
    radius: 6,
    pointRadius: 6,
    pointBorderWidth: 3,
    pointBackgroundColor: "cornflowerblue",
    pointBorderColor: "rgba(0,0,200,0.6)",
    pointHoverRadius: 10,
    data: [4, 5, 4, 5, 5, 3]
  }]
};

var radarChart = new Chart(radialCanvas, {
  type: 'radar',
  data: radialData
});

var polarCanvas = document.getElementById("polarChart");

var polarData = {
  labels: ["npm",  "jQuery", "SASS", "Webpack", "Veu.js", "Pug"],
  datasets: [{
    data: [3, 3, 4, 3, 4, 5],
    backgroundColor: [
      "rgba(255, 0, 0, 0.5)",
      "rgba(100, 255, 0, 0.5)",
      "rgba(290, 205, 0, 0.5)",      
      "rgba(150, 55, 0, 0.5)",
      "rgba(200, 50, 255, 0.5)",
      "rgba(0, 100, 255, 0.5)"
    ],
    borderColor: "rgba(232, 140, 140, 0.8)"
  }]
};

var polarAreaChart = new Chart(polarCanvas, {
  type: 'polarArea',
  data: polarData
});

$(document).ready(function() {
              var owl = $('.owl-carousel');
              owl.owlCarousel({
                margin: 10,
                nav: true,
                loop: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 3
                  },
                  1000: {
                    items: 5
                  }
                }
              })
            })