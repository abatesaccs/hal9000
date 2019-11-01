var hal9000 = function(num){
  var resultsArray = new Array();

  for(i = 0; i <= num; i++){
    resultsArray[i] = i;
  }
  console.log(resultsArray);
}


$(document).ready(function() {
  $("form#input-string").submit(function(event) {
    event.preventDefault();
    var string = parseInt($("input#inputString").val());
    console.log(string);
    var result = hal9000(string);
  });
});
