(function(){

    var displays = ["Marcas", "Apps", "Websites","Logos"]
    var point = 0

    var fnChange = function () {

      newText = displays[point]

      if (point == displays.length -1)
      point = 0
      else point += 1
      $("#changing").fadeOut(1500, function(){
       $("#changing").text(newText)
        $("#changing").fadeIn(1500, function() {
          fnChange()
        })
      })
      
        


    }


   fnChange() 
    //Runs for the first time.
    //Sets the interval.
  
}())
