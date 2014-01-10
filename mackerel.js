var Mackerel = (function(win, undefined){
  // Private properties
  var health = 100;
  var poisioned = false;
  var ego = 50;
  var eats = ["Small finfish", "Squid", "Pelagic Crustaceans", "Base", "Zooplankton", "Copepods", "Shrimp"];
  // Private functions
  function modifyHealth(amount){
    health = modifyStat(health, amount);
  }
  function modifyEgo(amout){
    ego = modifyStat(ego, amount);
  }
  function modifyStat(stat, num){
    return Math.max(Math.min(100, stat + num), 0);
  }
  function inflictPoison(){
    if(poisioned) setTimeout(inflictPoison, 500); 
    modifyHealth(-1);
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
    isTasty: function(){
      if(this.isSmoked()) modifyEgo(5);
      return true;
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
    },
    canSwim: function(){
      return true;
    },
    canBreathe: function(parameters) {
      if(parameters.isUnderWater) return true;
      return false;
    },
    eat: function(parameters) {
      if(eats.indexOf(parameters)!=-1){
        modifyHealth(5);
        return "Mackerel ate "+parameters}
      return "Mackerel does not eat "+parameters;
    },
    layEggs: function() {
      return "Mackerel layed "+Math.floor(Math.random()*(1500000))+" eggs";
    },
    mate: function() {
      return "Macakeral mated";
    }
  };
  
  return Mackerel;

}(this));
