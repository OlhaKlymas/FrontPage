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

// let tech = document.getElementById('technology');
// let techKnow = document.getElementsByClassName('.know');
// let techActual = document.getElementsByClassName('.actual');
// let techShouldLearn = document.getElementsByClassName(':not(.know)');

// let divKnow = document.createElement('div');
// divKnow.className='iKnow';
// let divIKnow = document.getElementsByClassName('.iKnow');
// tech.appendChild(divKnow);

// for (var i =0; techKnow.length >= i; i++) {
//  divIKnow[i].innerHTML = techKnow[i].innerHTML;
// };

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
  
function convertCurrency(){
  let from = document.getElementById('from').value;
  let to = document.getElementById('to').value;
  let amount = document.getElementById('amount').value;
  let result = document.getElementById('result');
  if(from.length > 0 && to.length > 0 && amount.length > 0){
    let xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function(){
      if(xHttp.readyState==4 && xHttp.status==200){
        let obj = JSON.parse(this.responseText);
        let fact = obj.rates[to];
        if(fact!=undefined){
          result.innerHTML = parseFloat(amount)*parseFloat(fact);
        }
      }
    }    
  xHttp.open('GET','http://api.fixer.io/latest?base='+from+'&symbols='+to, true);
  xHttp.send();
  }
}
document.getElementById("amount").oninput = convertCurrency();
document.getElementsByTagName("select").onchange = convertCurrency();

function loadCurrencies(){
  let from = document.getElementById('from');
  let to = document.getElementById('to');
  let xHttp = new XMLHttpRequest();
  xHttp.onreadystatechange = function(){
    if(xHttp.readyState==4 && xHttp.status==200){
      let obj = JSON.parse(this.responseText);
      let options = '';
      for(key in obj.rates){
        options = options + '<option>'+key+'</option>';
      }
      from.innerHTML = options;
      to.innerHTML = options;
    }
  }
  xHttp.open('GET','http://api.fixer.io/latest', true);
  xHttp.send();
}

window.onload = loadCurrencies();



var radialCanvas = document.getElementById("radialChart");

var radialData = {
  labels: ["npm",  "jQuery", "SASS", "Webpack", "Vue.js", "Pug"],
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
  labels: ["npm",  "jQuery", "SASS", "Webpack", "Vue.js", "Pug"],
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

$(document).ready(function(){
  let owl = $(".owl-carousel"),
      url = null,
      bgDrop = $(".bg-drop"),
      prev = $("#left"),
      next = $("#right");
  owl.owlCarousel({
    loop: true,
    center: true,
    margin: 10,
    stagePadding: 20,
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplaySpeed: 500,
        smartSpeed: 1000
      },
      1200: {
        items: 3,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplaySpeed: 500,
        smartSpeed: 1000
      }
    }
  });

  next.on("click", ()=>{
    owl.trigger("next.owl.carousel");
  });
  prev.on("click", ()=>{
    owl.trigger("prev.owl.carousel");
  })
});


let opts = {
    count: 3,
    size: 10, 
    sizeRandom: 10,
    sparkLife: 0.1, 
    spawnOpacity: 1,
    color: "hsl(hue, 100%, 50%)"
  },

  canvasBody = document.getElementById("canvas"),
  canvas = canvasBody.getContext("2d"),
  w = canvasBody.width = window.innerWidth*0.988,
  h = canvasBody.height = window.innerHeight,
  tick = 0,
  currentHue = 0;

function anim() {
  setTimeout(function() {
    window.requestAnimationFrame(anim)
  }, 1000 / 20 ) 
  step();
  ++tick;
  if(isNaturalNumber(tick/10)){
    currentHue++;
  };
  if(currentHue == 356){
    currentHue = 0;
  }
}

anim() 

function step() {
  var fillColor = opts.color.replace("hue", currentHue);
  canvas.fillStyle = fillColor;
  for (var i = 0; i < Math.round(opts.count); i++) {
    var random = Math.random() * opts.sizeRandom;
    canvas.fillRect(-(opts.size/2) + Math.random() * w, -(opts.size/2) + Math.random() * h, opts.size + random, opts.size + random)
  }
  canvas.fillStyle = "rgba(216,223,231," + opts.sparkLife + ")"
  canvas.fillRect(0, 0, w, h)
}

window.addEventListener("resize", function(){ 
  w = canvasBody.width = window.innerWidth;
  h = canvasBody.height = window.innerHeight;
});

function isNaturalNumber(n) {
    n = n.toString(); 
    var n1 = Math.abs(n),
        n2 = parseInt(n, 10);
    return !isNaN(n1) && n2 === n1 && n1.toString() === n;
}