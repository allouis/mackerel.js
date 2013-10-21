var Mackerel = (function(win, undefined){
  // Private properties
  var health = 100;
  var poisioned = false;
  var Mackerel = {
    isFish: function(){
      return true;
    },
    canFly: function(){
      return false;
    },
    isSmoked: function(){
      return !!document.querySelector("tr");
    }
  };
  
  return Mackerel;

}(this));
