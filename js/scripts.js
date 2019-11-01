var noNumber = false;
var hal9000 = function(num, name){
  var resultsArray = new Array();
  var defaultName = "Dave";
  var finalResult;

  if (name){
    defaultName = name;
  }

  for(i = 0; i <= num; i++){
    resultsArray[i] = i + " ";
    var holder = resultsArray[i].toString();
    if (holder.includes(3)){
      resultsArray[i] = "I'm sorry, " + defaultName + ". I'm afraid I can't do that. ";
    } else if (holder.includes(2)){
      resultsArray[i] = "Boop ";
    } else if (holder.includes(1)) {
      resultsArray[i] = "Beep ";
    }
  }
  if (isNaN(num)){
    $(".results").html("");
    noNumber = true;
    return "Please enter a number<br />"
  } else {
    if (noNumber){
      $(".results").html("");
      noNumber = false;
    }
    finalResult = (num + ":<br />" + resultsArray + "<br />")
    return finalResult;
  }
}


$(document).ready(function() {
  $("form#input-string").submit(function(event) {
    event.preventDefault();
    var num = parseInt($("input#inputNum").val());
    var name = $("input#inputName").val();
    var result = hal9000(num, name);
    $(".results").hide().append(result).fadeIn(350);
  });
  $("button#clear").click(function(event) {
    event.preventDefault();
    $(".results").html("");
  });
});
