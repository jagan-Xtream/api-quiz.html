
window.onload = sendApireq
async function sendApireq(){
let response = await fetch(`https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`);
console.log(response)
let data = await response.json()
console.log(data)
UserApiData(data)
}

function UserApiData(data){

 document.querySelector("#question").innerHTML = `${data.results[0].question}`


document.querySelector("#answer1").innerHTML = data.results[0].correct_answer
 document.querySelector("#answer2").innerHTML = data.results[0].incorrect_answers[0]
 document.querySelector("#answer3").innerHTML = data.results[0].incorrect_answers[1]
 document.querySelector("#answer4").innerHTML = data.results[0].incorrect_answers[2]

}




let correctButton =document.querySelector("#answer1")
correctButton.addEventListener("click",() =>{
    alert("Correct")
    sendApireq()
})

let correctButton1 =document.querySelector("#answer2")
correctButton1.addEventListener("click",() =>{
    alert("Wrong")
    sendApireq()
})

let correctButton2 =document.querySelector("#answer3")
correctButton2.addEventListener("click",() =>{
    alert("Wrong")
    sendApireq()
})
let correctButton3 =document.querySelector("#answer4")
correctButton3.addEventListener("click",() =>{
    alert("Wrong")
    sendApireq()
})

category.style.textAlign ="center";
difficulty.style.textAlign="center";
question.style.textAlign="center";

