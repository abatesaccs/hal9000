var hal9000 = function(){
  
}


$(document).ready(function() {
  $("form#input-string").submit(function(event) {
    event.preventDefault();
    var string = parseInt($("input#inputString").val());
    console.log(string);
    var result = hal9000(string);
  });
});
