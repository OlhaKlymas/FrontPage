import ctrl from './controllers/currencyCtrl.js';
ctrl.render();
// ctrlP.render();
// import '.../style.css';
import '../node_modules/jquery/dist/jquery.min.js';

// import '../node_modules/bootstrap3/dist/js/bootstrap.min.js';
// import '../node_modules/bootstrap3/dist/css/bootstrap.min.css';
import 'owl.carousel';
// import  "isotope-layout/dist/isotope.pkgd.min.js";
// import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.js';
// import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js';
// import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.js';
// import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js';

// import '../static/fontawesome/fontawesome-all.js';
// import '../static/fontawesome/fontawesome-all.min.css';

// import '../node_modules/owl.carousel/dist/assets/owl.carousel.css';
var jQueryBridget = require('jquery-bridget');
var Isotope = require('isotope-layout');
// make Isotope a jQuery plugin
jQueryBridget( 'isotope', Isotope, $ );

(function(){
  if("seviceWorker" in navigator){
    navigator.serviceWorker.register("service-worker.js")
  }
})();


//Конвертер

document.getElementById("myRates").onclick = function ratesFunction() {
  let curr = document.getElementsByClassName("curr"),
      inputUSD = document.getElementById('USD'),
      inputBTC = document.getElementById('BTC'),
      inputRUR = document.getElementById('RUR'),
      inputEUR = document.getElementById('EUR'),
      mySalary = document.getElementById('mySalary'),
      salary = document.getElementById('salary'),
      myRes = document.getElementById('myRes'),
      res = document.getElementById('res');
    for (let i = 0; curr.length >= i; i++) {
       if(curr[i].checked){
             if (inputUSD.checked) {
                res.value = salary.value + ' USD';
                myRes.value = mySalary.value + ' USD';
            } 
            else if (inputRUR.checked) {
                res.value = inputUSD.value/inputRUR.value*salary.value + ' RUR';
                myRes.value = inputUSD.value/inputRUR.value*mySalary.value + ' RUR';
            } 
            else if (inputEUR.checked) {
                res.value = inputUSD.value/inputEUR.value*salary.value + ' EUR';
                myRes.value = inputUSD.value/inputEUR.value*mySalary.value + ' EUR';
            } 
            else if (inputBTC.checked) {
                res.value = inputUSD.value/inputBTC.value*salary.value + ' BTC';
                myRes.value = inputUSD.value/inputBTC.value*mySalary.value + ' BTC';
            } 
        }
    }
}



//popup

$('.show_popup').click(function() {
    var popup_id = $('#' + $(this).attr("rel"));
    $(popup_id).show();
    $('.overlay_popup').show();
})
$('.overlay_popup').click(function() {
    $('.overlay_popup, .popup').hide();
})


//toTop

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

document.getElementById("myBtn").onclick = function topFunction() {
    $('html,body').animate({ scrollTop: 0 }, 1000);
}

// Изотоп

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
  w = canvasBody.width = window.innerWidth*0.9,
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
};

anim();

function step() {
  var fillColor = opts.color.replace("hue", currentHue);
  canvas.fillStyle = fillColor;
  for (var i = 0; i < Math.round(opts.count); i++) {
    var random = Math.random() * opts.sizeRandom;
    canvas.fillRect(-(opts.size/2) + Math.random() * w, -(opts.size/2) + Math.random() * h, opts.size + random, opts.size + random)
  }
  canvas.fillStyle = "rgba(216,223,231," + opts.sparkLife + ")"
  canvas.fillRect(0, 0, w, h)
};

window.addEventListener("resize", function(){ 
  w = canvasBody.width = window.innerWidth;
  h = canvasBody.height = window.innerHeight;
});

function isNaturalNumber(n) {
    n = n.toString(); 
    var n1 = Math.abs(n),
        n2 = parseInt(n, 10);
    return !isNaN(n1) && n2 === n1 && n1.toString() === n;
};



// Конвертер валют


$(document).ready(function(){
  
$('#salary').on('change', function () {
  
  let custom_input = $('input:checked').val();
  let custom_res = $('#salary').val() * custom_input;
  let my_res = 400 * $('#USD').val();

  $('.currency').on('click', 'input', function() {
    
    $('#salary').val(custom_res / $('input:checked').val());
    $('#mySalary').val(my_res / $('input:checked').val());
    });
  });
}); 
     
//      inputs.addEventListener('click', rates);
// function rates(){
//   if (inputUSD.oninput){
//     salary.value = inputUSD.value*mySalary.value;
//             }
//   else if (inputEUR.oninput) {
//      salary.value = inputEUR.value*mySalary.value;
//             }
//   else if (inputRUR.oninput) {
//     salary.value = inputRUR.value*mySalary.value;
//             }
//   else if (inputBTC.oninput) {
//     salary.value = inputBTC.value*mySalary.value;
//             }
// }

      // inputUSD.addEventListener("oninput", eventUSD);
      // function eventUSD() {
      //           salary.value = inputUSD.value*salary.value;
      //           mySalary.value = inputUSD.value*mySalary.value;
      //       };
      // inputRUR.addEventListener("oninput", eventRUR);
      // function eventRUR() {
      //           salary.value = inputRUR.value*salary.value;
      //           mySalary.value = inputRUR.value*mySalary.value;
      //       };
      // inputEUR.addEventListener("oninput", eventEUR);
      // function() eventEUR{
      //           salary.value = inputEUR.value*salary.value;
      //           mySalary.value = inputEUR.value*mySalary.value;
      //       };
      // inputBTC.addEventListener("oninput", eventBTC); 
      // function eventBTC(){
      //           salary.value = inputBTC.value*salary.value;
      //           mySalary.value = inputBTC.value*mySalary.value;
      //       } ;
  


//   let usd = document.getElementById('USD'),
//       eur = document.getElementById('EUR'),
//       rur = document.getElementById('RUR'),
//       btc = document.getElementById('BTC'),
//       salary = document.getElementById('salary'),
//       mySalary = document.getElementById('mySalary');

// mySalary.addEventListener('keyup', salaryEvent);

// function salaryEvent() {
//     if (event.keyCode == 13) {
//         if (usd.checked) {
//             mySalary.value = salary.value * usd.value;
//         }  
//         else if (eur.checked) {
//             mySalary.value = salary.value * eur.value;
//         } 
//         else if (rur.checked) {
//             mySalary.value = salary.value * rur.value;
//         }
//         else if (btc.checked) {
//             mySalary.value = salary.value * btc.value;
//         }
//     }
// }

// let mySalary = document.getElementById('mySalary');
// let salary = document.getElementById('salary');
// let usd = document.getElementById('USD');
// let eur = document.getElementById('EUR');
// let rur = document.getElementById('RUR');
// let btc = document.getElementById('BTC');
// let currencyInp = document.getElementsByName('curr');
// alert(usd.value);
// salary.value =2;



// for (let i = 0; i < curre.lenght; i++) {
//   if(curr[i].checked){
//         if (usd.checked) {
//             salary.value = usd.value;
//         } 
//         else if (eur.checked) {
//             salary.value = eur.value;
//         } 
//         else if (rur.checked) {
//             salary.value = rur.value;
//         } 
//         else if (btc.checked) {
//             salary.value = btc.value;
//         }
//    }
// }

        // if (usd.checked) {
        //     salary.value = usd.value;
        // } 
        // else if (eur.checked) {
        //     salary.value = eur.value;
        // } 
        // else if (rur.checked) {
        //     salary.value = rur.value;
        // } 
        // else if (btc.checked) {
        //     salary.value = btc.value;
        // }
 

