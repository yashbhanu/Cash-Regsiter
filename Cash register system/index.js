// app logic

let billAmount = document.getElementById('bill');
let cashGiven = document.querySelector('#cashGiven');
let checkButton = document.getElementById('check');
let errorMsg = document.getElementById('errorMsg');
let noOfNotesTobeReturned = document.querySelectorAll('.no-of-notes')

let availableNotes = [2000,500,100,50,20,10,5,1];


checkButton.addEventListener("click",()=>{
    hideMsg();
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amntToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amntToBeReturned);
        }
        else{
            showErrorMessage("Do you wanna wash plates?");
        }
    }
    else{
        showErrorMessage("Invalid Bill Amount");
    }
});

function calculateChange(amntToBeReturned){
    //iterate through all the values in array
    for (let i = 0; i < availableNotes.length; i++) {
        //divide amount by 2000,500....in each iteration by Math.trunc and we would get no of notes
        const noOfNotes = Math.trunc(amntToBeReturned/availableNotes[i]);
        //update amounttobereturned on every iteration by modulus (amount left after calculating the number of notes needed)
        amntToBeReturned %= availableNotes[i];
        //also an easy way
        // amntToBeReturned = amntToBeReturned % availableNotes[i];
        //updating noOfnotes in table for current amount on every iteration
        noOfNotesTobeReturned[i].innerText = noOfNotes;
    }
}

function hideMsg(){
    errorMsg.style.display = "none";
}

function showErrorMessage(message) {
    errorMsg.style.display = "block";
    errorMsg.innerText = message;
}
