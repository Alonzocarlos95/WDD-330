Highcharts.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population-density.json', function (data) {
   debugger;

  // Prevent logarithmic errors in color calulcation
  data.forEach(function (p) {
      
    p.value = (p.value < 1 ? 1 : p.value);
  });
debugger;
  // Initialize the chart
  Highcharts.mapChart('container', {
    
    chart: {
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
      max: 950,
      type: 'logarithmic'
    },

    series: [{
      data: data[1],
      joinBy: ['iso-a3', 'code3'],
      name: 'Population density',
      states: {
        hover: {
          color: '#a4edba'
        }
      },
      tooltip: {
        valueSuffix: '/km²'
      }
    }]
  });
});












