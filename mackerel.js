var Mackerel = (function(win, undefined){
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
