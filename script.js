const countElements = document.getElementById("count");
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const resetButton = document.getElementById("reset");


let counter = 0

const updateCounter = () => {
    countElements.innerText = counter;
}

incrementButton.addEventListener("click", () => {
    counter+++
    updateCounter();
})

decrementButton.addEventListener("click", () => {
   if(counter > 0){
    counter---
    updateCounter();
   }else{
    alert("The number cannot go negetive");
   }
})

resetButton.addEventListener("click", () => {
    counter = 0;
    updateCounter();
})