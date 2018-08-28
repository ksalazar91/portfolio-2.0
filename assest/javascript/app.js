

function getRandomRgb() {
    var r = Math.floor(Math.random() * Math.floor(255));
    var g = Math.floor(Math.random() * Math.floor(255));
    var b = Math.floor(Math.random() * Math.floor(255));

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

setInterval(function(){ $('.skill-fon').css({color: getRandomRgb()}); }, 2000);




function letterDisplay(){
    var word = "W e l c o m e";
    
    for(var i = 0; i < word.length; i++){
        (function(index) {
          setTimeout(function() {
            document.getElementById("welcome").innerHTML+=word[index]; 
          }, 500 * i);
        })(i);
      }
      nameDisplay()
}

function nameDisplay(){
    setTimeout(function(){
        $("#name").append("I'm Karen Salazar");
    }, 8000);   
    titleDisplay();
}

function titleDisplay(){
    setTimeout(function(){
        $("#position").append("SOFTWARE  " + "  DEVELOPER");
    }, 9000); 
}

function quoteDisplay(){
    $('.quote').show();
    setTimeout(function(){
        letterDisplay();
    },1000);

    
}
$('.quote').hide();
setTimeout(quoteDisplay, 1000);


