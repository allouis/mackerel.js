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
    },
    feed: function(food){
      if(this.food instanceof Poison){
          this.givePoison();
      }
      if(this.food instanceof Antidote){
        this.giveAntidote();
      }
    },
    givePoison: function(){
      poisioned = true;
      inflictPoison();
    },
    giveAntidote: function(){
        poisioned = false;   
    },
    getHealth: function(){
      return health;
    }
  };
  
  return Mackerel;

}(this));
