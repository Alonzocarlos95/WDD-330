const _targetLabel = document.getElementsByTagName("LABEL");

const donationName = document.getElementById("donation_name");

const donationLastName = document.getElementById("donation_lastName");

const carousel_btn = document.querySelectorAll(".carousel__button");

let other_amount = document.getElementById("specific_amount_donation");

var modal = document.getElementById("myModal");

let closeModal = document.getElementsByClassName("close")[0];

const url = "https://api.covid19api.com/summary";
let dataAPI;
debugger;
fetch(url)
.then(response => response.json())
.then(function(data){
    // debugger;
    document.getElementById("get_global_cases").innerHTML = data.Global.TotalConfirmed;
    document.getElementById("get_global_recovered").innerHTML = data.Global.TotalRecovered;
    document.getElementById("get_global_deaths").innerHTML = data.Global.TotalDeaths;

    data.Countries.forEach(function (p) {
        debugger;
        p.TotalConfirmed = (p.TotalConfirmed < 1 ? 1 : p.TotalConfirmed);
    });
    debugger;
    Highcharts.mapChart('container', {
            chart: {
              backgroundColor: "#36498f",
              map: 'custom/world'
            },
    title: {
        text: 'Zoom in on country by double click'
        },

    mapNavigation: {
        enabled: true,
        enableDoubleClickZoomTo: true
        },

        colorAxis: {
            min: 1,
            max: 1000,
            type: 'logarithmic'
          },

          tooltip: {
            formatter: function(){
                return '<span style="font-weight: bold;color:#415A77;">' +this.point.Country+'</span><br> </br><span style="font-weight: bold;color:#333333;">Total Confirmed: </span><span>' +this.point.TotalConfirmed+'</span><br> </br><span style="font-weight: bold;color:#333333;">Total Deaths: </span><span>' +this.point.TotalDeaths+'</span>';
            }
          },

          series: [{
            joinBy: ['iso-a2', 'CountryCode'],
            data: data.Countries,
            name: '',
            states: {
              hover: {
                color: '#a4edba'
              }
            },
            tooltip: {
              valueSuffix: '/km²'
            }
          }]
    
})

});


closeModal.onclick = function() {
  modal.style.display = "none";
}


document.getElementById("donate_btn").addEventListener("click",() => {
  modal.style.display = "block";

});


document.getElementById("durationPlan_btn").addEventListener('click', function(event){
  debugger;
  if (event.target.className !== "active_plan"){
    debugger;
    event.target.className = "active_plan";
    if(event.target.nextElementSibling === null || event.target.nextElementSibling === undefined){
      event.target.previousElementSibling.className = "";
      
    }
    else {
      event.target.nextElementSibling.className = "";
    }
  }
});



_targetLabel[0].addEventListener('click',function(event){
  debugger;
  if(event.target.parentNode.className === "suggested-amount-boxes" || event.target.parentNode.nodeName === "LABEL"){
      for(var i = 0; i < _targetLabel.length;i++){
        debugger;
        if(_targetLabel[i].className === "selected-amount"){
          _targetLabel[i].className = "";
        }
      }
      if(event.target.parentNode.className === "suggested-amount-boxes"){
      event.target.className = "selected-amount";
      }
      else {
        event.target.parentNode.className = "selected-amount";
      }
  }
});



_targetLabel[1].addEventListener('click',function(event){
  debugger;
  if(event.target.parentNode.className === "suggested-amount-boxes" || event.target.parentNode.nodeName === "LABEL"){
      for(var i = 0; i < _targetLabel.length;i++){
        debugger;
        if(_targetLabel[i].className === "selected-amount"){
          _targetLabel[i].className = "";
        }
      }
      if(event.target.parentNode.className === "suggested-amount-boxes"){
      event.target.className = "selected-amount";
      }
      else {
        event.target.parentNode.className = "selected-amount";
      }
  }
});



_targetLabel[2].addEventListener('click',function(event){
  debugger;
  if(event.target.parentNode.className === "suggested-amount-boxes" || event.target.parentNode.nodeName === "LABEL"){
      for(var i = 0; i < _targetLabel.length;i++){
        debugger;
        if(_targetLabel[i].className === "selected-amount"){
          _targetLabel[i].className = "";
        }
      }
      if(event.target.parentNode.className === "suggested-amount-boxes"){
      event.target.className = "selected-amount";
      }
      else {
        event.target.parentNode.className = "selected-amount";
      }
  }
});


_targetLabel[3].addEventListener('click',function(event){
  debugger;
  if(event.target.parentNode.className === "suggested-amount-boxes" || event.target.parentNode.nodeName === "LABEL"){
      for(var i = 0; i < _targetLabel.length;i++){
        debugger;
        if(_targetLabel[i].className === "selected-amount"){
          _targetLabel[i].className = "";
        }
      }
      if(event.target.parentNode.className === "suggested-amount-boxes"){
      event.target.className = "selected-amount";
      }
      else {
        event.target.parentNode.className = "selected-amount";
      }
  }
});



_targetLabel[4].addEventListener('click',function(event){
  debugger;
  if(event.target.parentNode.className === "suggested-amount-boxes" || event.target.parentNode.nodeName === "LABEL"){
      for(var i = 0; i < _targetLabel.length;i++){
        debugger;
        if(_targetLabel[i].className === "selected-amount"){
          _targetLabel[i].className = "";
        }
      }
      if(event.target.parentNode.className === "suggested-amount-boxes"){
      event.target.className = "selected-amount";
      }
      else {
        event.target.parentNode.className = "selected-amount";
      }
  }
});



_targetLabel[5].addEventListener('click',function(event){
  debugger;
  if(event.target.parentNode.className === "suggested-amount-boxes" || event.target.parentNode.nodeName === "LABEL"){
      for(var i = 0; i < _targetLabel.length;i++){
        debugger;
        if(_targetLabel[i].className === "selected-amount"){
          _targetLabel[i].className = "";
        }
      }
      if(event.target.parentNode.className === "suggested-amount-boxes"){
      event.target.className = "selected-amount";
      }
      else {
        event.target.parentNode.className = "selected-amount";
      }
  }
});


other_amount.addEventListener('click', () => {
  debugger;
  for(var i = 0; i < _targetLabel.length; i++){
    debugger;
    _targetLabel[i].className = "";
  }
})


carousel_btn.forEach((carousel, i) => {
    carousel.addEventListener('click', () => {
      // alert("carousel clicked");
      debugger;
      carousel[i];
      document.querySelector(".information_section").style.display = "block";
    })
})

// Uncomment to style it like Apple Watch
/*
if (!Highcharts.theme) {
  Highcharts.setOptions({
    chart: {
      backgroundColor: 'black'
    },
    colors: ['#F62366', '#9DFF02', '#0CCDD6'],
    title: {
      style: {
        color: 'silver'
      }
    },
    tooltip: {
      style: {
        color: 'silver'
      }
    }
  });
}
// */

/**
 * In the chart render event, add icons on top of the circular shapes
 */
 


// function renderIcons() {

//   // Move icon
//   if (!this.series[0].icon) {
//     this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
//       .attr({
//         stroke: '#303030',
//         'stroke-linecap': 'round',
//         'stroke-linejoin': 'round',
//         'stroke-width': 2,
//         zIndex: 10
//       })
//       .add(this.series[2].group);
//   }
//   this.series[0].icon.translate(
//     this.chartWidth / 2 - 10,
//     this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR -
//       (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2
//   );

//   // Exercise icon
//   if (!this.series[1].icon) {
//     this.series[1].icon = this.renderer.path(
//       ['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8,
//         'M', 8, -8, 'L', 16, 0, 8, 8]
//     )
//       .attr({
//         stroke: '#ffffff',
//         'stroke-linecap': 'round',
//         'stroke-linejoin': 'round',
//         'stroke-width': 2,
//         zIndex: 10
//       })
//       .add(this.series[2].group);
//   }
//   this.series[1].icon.translate(
//     this.chartWidth / 2 - 10,
//     this.plotHeight / 2 - this.series[1].points[0].shapeArgs.innerR -
//       (this.series[1].points[0].shapeArgs.r - this.series[1].points[0].shapeArgs.innerR) / 2
//   );

//   // Stand icon
//   if (!this.series[2].icon) {
//     this.series[2].icon = this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
//       .attr({
//         stroke: '#303030',
//         'stroke-linecap': 'round',
//         'stroke-linejoin': 'round',
//         'stroke-width': 2,
//         zIndex: 10
//       })
//       .add(this.series[2].group);
//   }

//   this.series[2].icon.translate(
//     this.chartWidth / 2 - 10,
//     this.plotHeight / 2 - this.series[2].points[0].shapeArgs.innerR -
//       (this.series[2].points[0].shapeArgs.r - this.series[2].points[0].shapeArgs.innerR) / 2
//   );
// }

// Highcharts.chart('container_gauge', {

//   chart: {
//     type: 'solidgauge',
//     height: '110%',
//     events: {
//       render: renderIcons
//     }
//   },

//   title: {
//     text: 'Activity',
//     style: {
//       fontSize: '24px'
//     }
//   },

//   tooltip: {
//     borderWidth: 0,
//     backgroundColor: 'none',
//     shadow: false,
//     style: {
//       fontSize: '16px'
//     },
//     valueSuffix: '%',
//     pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
//     positioner: function (labelWidth) {
//       return {
//         x: (this.chart.chartWidth - labelWidth) / 2,
//         y: (this.chart.plotHeight / 2) + 15
//       };
//     }
//   },

//   pane: {
//     startAngle: 0,
//     endAngle: 360,
//     background: [{ // Track for Move
//       outerRadius: '112%',
//       innerRadius: '88%',
//       backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0])
//         .setOpacity(0.3)
//         .get(),
//       borderWidth: 0
//     }, { // Track for Exercise
//       outerRadius: '87%',
//       innerRadius: '63%',
//       backgroundColor: Highcharts.color(Highcharts.getOptions().colors[1])
//         .setOpacity(0.3)
//         .get(),
//       borderWidth: 0
//     }, { // Track for Stand
//       outerRadius: '62%',
//       innerRadius: '38%',
//       backgroundColor: Highcharts.color(Highcharts.getOptions().colors[2])
//         .setOpacity(0.3)
//         .get(),
//       borderWidth: 0
//     }]
//   },

//   yAxis: {
//     min: 0,
//     max: 100,
//     lineWidth: 0,
//     tickPositions: []
//   },

//   plotOptions: {
//     solidgauge: {
//       dataLabels: {
//         enabled: false
//       },
//       linecap: 'round',
//       stickyTracking: false,
//       rounded: true
//     }
//   },

//   series: [{
//     name: 'Move',
//     data: [{
//       color: Highcharts.getOptions().colors[0],
//       radius: '112%',
//       innerRadius: '88%',
//       y: 80
//     }]
//   }, {
//     name: 'Exercise',
//     data: [{
//       color: Highcharts.getOptions().colors[1],
//       radius: '87%',
//       innerRadius: '63%',
//       y: 65
//     }]
//   }, {
//     name: 'Stand',
//     data: [{
//       color: Highcharts.getOptions().colors[2],
//       radius: '62%',
//       innerRadius: '38%',
//       y: 50
//     }]
//   }]
// });


donationName.onfocus = function(event){
  // debugger;
  event.target.nextElementSibling.className = "data-inp-selected";

}

donationLastName.onfocus = function(event){
  // debugger;
  event.target.nextElementSibling.className = "data-inp-selected";

}

donationName.onblur = function(event){
  debugger;
  if(event.target.value === ""){
    event.target.nextElementSibling.className = "";
  }
}

donationLastName.onblur = function(event){
  if(event.target.value === ""){
  event.target.nextElementSibling.className = "";
  }
}