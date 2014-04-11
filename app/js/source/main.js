(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#title').click(title);
    $('.number').click(number);
    $('.clear').click(clear);
    $('.decimal').click(decimal);
    $('.sign').click(sign);
  }

  function title(){
    var display = $('#calculator').css('display');
    if(display === 'none'){
      $('#calculator').fadeIn();
    } else {
      $('#calculator').fadeOut();
    }
  }

  function number(){
    var num = this.textContent;
    var output = $('#display').text();

    if(output === '0'){
      output = num;
    } else {
      output += num;
    }
    $('#display').text(output);
  }

  function clear(){
    var c = this.textContent;
    if (c === 'C'){
      $('#display').text(0);
    }
  }

  function decimal(){
    var display = $('#display').text();
    var noDecimal = display.indexOf('.') === -1;

    if(noDecimal){
      $('#display').text(display + '.');
    }
  }

  function sign(){
    var display = $('#display').text();
    $('#display').text(display * -1);
  }

})();
