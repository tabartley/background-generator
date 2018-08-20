var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var top = document.querySelector("top");
var right = document.querySelector("right");
var bottom = document.querySelector("bottom");
var left = document.querySelector("left");




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
        "linear-gradient(to top, "
        + color1.value
        + ", "
        + color2.value
        + ")";

        css.textContent = body.style.background + ";";
    }


    function setDirectionRight(){
      body.style.background =
          "linear-gradient(to right, "
          + color1.value
          + ", "
          + color2.value
          + ")";

          css.textContent = body.style.background + ";";
      }


      function setDirectionBottom(){
        body.style.background =
            "linear-gradient(to bottom, "
            + color1.value
            + ", "
            + color2.value
            + ")";

            css.textContent = body.style.background + ";";
        }




        function setDirectionLeft(){
          body.style.background =
              "linear-gradient(to left, "
              + color1.value
              + ", "
              + color2.value
              + ")";

              css.textContent = body.style.background + ";";
          }






color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

top.addEventListener("click", setDirectionTop);

right.addEventListener("click", setDirectionRight);

bottom.addEventListener("click", setDirectionBottom);

left.addEventListener("click", setDirectionLeft);
