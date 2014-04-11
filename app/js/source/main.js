(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('.number').click(display);
  }

  function display(){
    var num = this.textContent;
  } 

})();
