import './style.css'

let headSnake = document.querySelector(".head");

let buttonAdd = document.querySelector('#buttonPlus');
let buttonMoins = document.querySelector('#buttonLess');
let buttonBackToNormal = document.querySelector('#buttonReset');
let counterText = document.querySelector("#counter");
let GameBox = document.querySelector(".theGameBox");
let counterDiv = document.querySelector(".counter");

let counterAdd = 10;
// let closeIt = document.querySelector(".closeIt");

// closeIt.addEventListener("click"), ()=>{
//   counterDiv.style.display = "none";
// }


document.querySelector("#counter").textContent = counterAdd;

    buttonBackToNormal.addEventListener("click", ()=> {
        counterAdd = 10;
        counterText.textContent = counterAdd + " "; 
    });

    buttonAdd.addEventListener("click", ()=> {
        counterAdd += 1;
        counterText.textContent = counterAdd + " "; 
    });

    buttonMoins.addEventListener("click", ()=> {
        counterAdd -= 1;
        document.querySelector("#counter").textContent = counterAdd + " ";    
    });

let top = counterAdd;
let right = counterAdd;
let counterDivDisabled = 0;
document.addEventListener('keydown', (e)=>{

  switch (e.key) {
    case "ArrowUp":;
      top -= counterAdd;
      headSnake.style.top = top + "px";
      break;
    case "ArrowDown":
      top += counterAdd;
      headSnake.style.top = top + "px";
      break;
    case "ArrowLeft":
      right += counterAdd;
      headSnake.style.right = right + "px";
      break;
    case "ArrowRight":
      right -= counterAdd;
      headSnake.style.right = right + "px";
      break;
    case "Escape":
     
      counterDivDisabled += 1;
      if (counterDivDisabled%2 == 0) {
        counterDiv.style.display = "block"
      } else {
        counterDiv.style.display = "none"
      }
      default:
        break;
  }

});

function createBonus(params) {
  
}


    
