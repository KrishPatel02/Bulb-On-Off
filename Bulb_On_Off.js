//Declaration

let btn = document.getElementById("btnbulb");

let bulbimage = document.getElementById("bulbimg");

btn.addEventListener("click", turnbulb);

//CSS Styling in Javascript

document.querySelector(".bulb-sec").style.width = "100vw";

document.querySelector(".bulb-sec").style.height = "100vh";

document.querySelector("body").style.background =
  "linear-gradient(135deg, #434343 10%, #000000 100%)";

document.querySelector("#btnbulb").style.background =
  "linear-gradient(135deg, #FDEB71 10%, #F8D800 100%)";

document.querySelector("#btnbulb").style.color = "black";

// Bulb On-Off Function

function turnbulb() {
  if (btn.textContent.includes("On")) {
    btn.textContent = "Turn Off";

    bulbimage.src = "/Bulb-On-Off/Bulb_On_Image.png";

    document.querySelector("body").style.background =
      "linear-gradient(135deg, #FDEB71 10%, #F8D800 100%)";

    document.querySelector("#btnbulb").style.background =
      "linear-gradient(135deg, #434343 10%, #000000 100%)";

    document.querySelector("#btnbulb").style.color = "yellow";

    btn.addEventListener("click", turnbulb);
  } else {
    btn.textContent = "Turn On";

    bulbimage.src = "/Bulb-On-Off/Bulb_Off_Image.png";

    document.querySelector("body").style.background =
      "linear-gradient(135deg, #434343 10%, #000000 100%)";

    document.querySelector("#btnbulb").style.background =
      "linear-gradient(135deg, #FDEB71 10%, #F8D800 100%)";

    document.querySelector("#btnbulb").style.color = "black";
  }
}
