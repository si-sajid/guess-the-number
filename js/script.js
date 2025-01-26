//generating a random number
let randomNum = Math.floor(Math.random() * 20 + 1)
let guessNum = (document.getElementById("guess").textContent = randomNum);

//Status Area
let rightMessage = document.querySelector(".message")
let wrongMessage = document.querySelector(".message")

//win Image
let winImg = document.getElementById("win")
//hiding image
let hidingImg = document.getElementById("hide")
//reset btn
let resetBtn = document.getElementById("again");
   resetBtn.addEventListener("click", () => {
    location.reload()
})
//storing Final result
let finalResult = document.getElementById("score");
let initialScore = 0;

//Verifying Output
let inputBtn = document.getElementById("input");
let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", () =>{
    //generating final attampt 
    initialScore++
    finalResult.textContent = initialScore
    let guessOutput = inputBtn.value;
    if(guessOutput == guessNum) {
        rightMessage.textContent = "🎉Congratulations Its Correct Number"
        winImg.style.display = "block"
        hidingImg.style.display = "none"
    } else if (guessOutput < guessNum){
        wrongMessage.textContent = "😒 Its Low Number"
        winImg.style.display = "none"
        hidingImg.style.backgroundImage = "url('image/low.png')"
    }else if (guessOutput > guessNum){
        wrongMessage.textContent = "😎 Its High Number"
        winImg.style.display = "none"
        hidingImg.style.backgroundImage = "url('image/high.png')"
    }

})

