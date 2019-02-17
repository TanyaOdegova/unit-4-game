$(document).ready(function(){
  //The random number shown at the start of the game should be between 19 - 120.
  // 120 minus 19 is 101.
    var Random=Math.floor(Math.random()*101+19)
  
    $('#randomNumber').text(Random);
    //Each crystal should have a random hidden value between 1 - 12.
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    var num5= Math.floor(Math.random()*11+1)
    var num6= Math.floor(Math.random()*11+1)
   
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  //resets the game
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        num5= Math.floor(Math.random()*11+1);
        num6= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        setTimeout(function(){
          document.getElementById("resultholder").style.display = "none"; 
         }, 3000);
        } 
  //adds the wins to the userTotal
  function winner(){
  document.getElementById("resultholder").innerHTML = "You won!";
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  //addes the losses to the userTotal
  function loser(){
  document.getElementById("resultholder").innerHTML = "You lose! Please try again";
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  //sets up click for gems
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
            //sets win/lose conditions
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
  //sets win/lose conditions
            if (userTotal == Random){
          winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }
    }); 
    
    $('#five').on ('click', function(){
      userTotal = userTotal + num5;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }
    }); 
    $('#six').on ('click', function(){
      userTotal = userTotal + num6;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   
  }); 
  // Title animation I got from the examples on website Evato.com,
  //section Skewed Typeface by Kurt Emch
  $(function() {
    causeRepaintsOn = $ ("h1, h2");

    $(window).resize(function() {
      causeRepaintsOn.css("z-index", 1);

    })
  });
