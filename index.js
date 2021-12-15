const billAmount = document.querySelector("#bill-amount")
const cashGiven = document.querySelector("#cash-given")
const checkBTN = document.querySelector("#check-btn")
const nextBTN = document.querySelector("#next-btn")
const message = document.querySelector("#error")
const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000,500,100,20,10,5,1];

// checkBTN.addEventListener("click", ()=> console.log("clicked"))

function showErrorMessage(msg){
    message.style.display = "block";
        message.textContent = msg;
}

function calculateChange(amount){
    // const amount = cash-bill;
    for(let i=0; i<availableNotes.length;i++){
        const numberOfNotes = Math.trunc(amount / availableNotes[i])
        noOfNotes[i].innerHTML = numberOfNotes;

        // return the new amount NEW 
        amount %= availableNotes[i]; 
    }

}


checkBTN.addEventListener("click", function validateBillAndCash() {
    console.log("clicked!")
    message.style.display = "none";
    if (billAmount.value > 0) {
        if(cashGiven.value >= billAmount.value ){
            // message.style.display = "none";
            const amountToBeGiven = cashGiven.value-billAmount.value;
            calculateChange(amountToBeGiven);
        }
        else{
showErrorMessage("Cash Given should be greater than bill amount")
        }
    } else {
        showErrorMessage("Invaild Bill Amount")
    }
});