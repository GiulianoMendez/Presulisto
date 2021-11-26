google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart1);
function drawChart1() {
  var data = google.visualization.arrayToDataTable([
    ['Año', '20-30 años', '30-60 años'],
    ['2017',  232,       456],
    ['2018',  258,       560],
    ['2019',  292,       783],
    ['2020',  210,       320],
    ['2021',  222,       396]
  ]);

  var options = {
    title: 'Cantidad de Buenos Ahorradores según rango de edades',
    hAxis: {title: 'Año', titleTextStyle: {color: 'Black'}}
 };

var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
  chart.draw(data, options);
}

$(window).resize(function(){
  drawChart1();
});
    

$('.navbar a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },800);
    $(".active").removeClass("active");
    $(hash).addClass("active");
  }
});
$(window).resize(function(){drawColColors();});

window.onresize = doALoadOfStuff;
function doALoadOfStuff() {
  drawColColors();
}