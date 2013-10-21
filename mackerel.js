var Mackerel = (function(win, undefined){
  // Private properties
  var health = 100;
  var poisioned = false;
  // Private functions
  function reduceHealth(dmg){
    health -= dmg;
  }
  function inflictPoison(){
    if(poisioned) setTimeout(inflictPoison, 500); 
    reduceHealth(1);
  }
  // Public properties and methods
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
