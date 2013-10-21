var Mackerel = (function(win, undefined){
  var Mackerel = {
    isFish: function(){
      return true;
    },
    canFly: function(){
      return false;
    },
    canSwim: function(){
      return true;
    },
    canBreathe: function(parameters) {
      if(parameters.isUnderWater) return true;
      return false;
    }
  };
  
  return Mackerel;

}(this));
