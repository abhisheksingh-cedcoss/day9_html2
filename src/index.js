$(document).ready(function(){
    $("#button1").click(function(){
      $('table').css("background-color", "yellow");
    });

    $("#button2").click(function(){
        $('tr').css("background-color", "green");
      });
  
      $("#button3").click(function(){
        var a = '<table>'
        a += $('button').parents('table').html();
        a+= '</table>'
        document.getElementById("outer").innerHTML= a;
      });
  
      $("#button4").click(function(){
        $('table').hide();
      });

      $("#button5").click(function(){
        $('table').show();
      });









  });
