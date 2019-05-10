function getAdvice() {
   $.getJSON("https://api.adviceslip.com/advice") 
   .done(function(data){
       console.log(data.slip.advice);
       $("#advice").text(data.slip.advice);
   })
   .fail(function(data) {})
}