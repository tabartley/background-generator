var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var topp = document.getElementById("topp");
var right = document.getElementById("right");
var bottom = document.getElementById("bottom");
var left = document.getElementById("left");
var random = document.getElementById("random");




  // function setGradient(){
  //   var aVariable =
  //       "linear-gradient(to right, "
  //       + color1.value
  //       + ", "
  //       + color2.value
  //       + ")";
  //
  //       css.textContent = aVariable + ";";
  //       body.syle.bacground = css.textContent;
  //       console.log(css.textContent);
  //   }


  function setGradient(){
    body.style.background =
        "linear-gradient(to right, "
    
        + color1.value
        + ", "
        + color2.value
        + ")";

        css.textContent = body.style.background + ";";

    }





  function setDirectionTop(){
    body.style.background =
        "linear-gradient(to bottom, "

        + color1.value
        + ", "
        + color2.value
        + ")";


    }







    function setDirectionRight(){
      body.style.background =
          "linear-gradient(to left, "

          + color1.value
          + ", "
          + color2.value
          + ")";

      }


      function setDirectionBottom(){
        body.style.background =
            "linear-gradient(to top, "

            + color1.value
            + ", "
            + color2.value
            + ")";


        }



        function setDirectionLeft(){
          body.style.background =
              "linear-gradient(to right, "

              + color1.value
              + ", "
              + color2.value
              + ")";

          }




    function setRandomGradient(){
    	var rcolor1 = "#"+Math.floor(Math.random()*16777215).toString(16);
    	var rcolor2 = "#"+Math.floor(Math.random()*16777215).toString(16);

    	color1.value = rcolor1;
    	color2.value = rcolor2;
    	body.style.background = "linear-gradient(to right,"
      + rcolor1
    	+ ","
    	+ rcolor2
    	+ ")";

    	css.textContent = body.style.background + ";";

    }







color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

topp.addEventListener("click", setDirectionTop);

right.addEventListener("click", setDirectionRight);

bottom.addEventListener("click", setDirectionBottom);

left.addEventListener("click", setDirectionLeft);

random.addEventListener("click", setRandomGradient);

setRandomGradient();
