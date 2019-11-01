var hal9000 = function(num){
  var resultsArray = new Array();

  for(i = 0; i <= num; i++){
    resultsArray[i] = i + " ";
    var holder = resultsArray[i].toString();
    if (holder.includes(3)){
      resultsArray[i] = "I'm sorry, Dave. I'm afraid I can't do that. ";
    } else if (holder.includes(2)){
      resultsArray[i] = "Boop ";
    } else if (holder.includes(1)) {
      resultsArray[i] = "Beep ";
    }
  }
  console.log(resultsArray);
  return resultsArray;
}


$(document).ready(function() {
  $("form#input-string").submit(function(event) {
    event.preventDefault();
    var string = parseInt($("input#inputString").val());
    console.log(string);
    var result = hal9000(string);

    $(".results").append(string + ":  " + result + "<br />");
  });
});
