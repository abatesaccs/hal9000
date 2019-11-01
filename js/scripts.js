var hal9000 = function(num, name){
  var resultsArray = new Array();

  for(i = 0; i <= num; i++){
    resultsArray[i] = i + " ";
    var holder = resultsArray[i].toString();
    if (holder.includes(3)){
      resultsArray[i] = "I'm sorry, " + name + ". I'm afraid I can't do that. ";
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
    var num = parseInt($("input#inputNum").val());
    var name = $("input#inputName").val();
    console.log(num);
    console.log(name);
    var result = hal9000(num, name);

    $(".results").append(num + ":  " + result + "<br />");
  });
  $("form#clear").click(function(event) {
    event.preventDefault();
    $(".results").html("");
  });
});
