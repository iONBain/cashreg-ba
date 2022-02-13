// let billAmount = document.querySelector("#bill-amount")
// let cashGiven = document.querySelector("#cash-given")
const checkBTN = document.querySelector("#check-btn")
// const nextBTN = document.querySelector("#next-btn")
const message = document.querySelector("#error")
const noOfNotes = document.querySelectorAll(".no-of-notes")

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];


function showErrorMessage(msg) {
    message.style.display = "block";
    // message.classList.add("show")
    message.textContent = msg;
}

function calculateChange(amount) {
    // const amount = cash-bill;
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amount / availableNotes[i])
        noOfNotes[i].innerHTML = numberOfNotes;

        // return the new amount NEW 
        amount %= availableNotes[i];
    }

}


checkBTN.addEventListener("click", function validateBillAndCash() {
    console.log("clicked!")
    message.style.display = "none";
    // message.classList.remove("show")
    var billAmount = document.querySelector("#bill-amount")
    var cashGiven = document.querySelector("#cash-given")
    var bill = billAmount.value;
    var cashG = cashGiven.value;

    if (bill > 0) {
        if (cashG >= bill) {
            const amountToBeGiven = cashG - bill;
            calculateChange(amountToBeGiven);
        } 
        else {
            showErrorMessage("Cash Given should be greater than bill amount")
        }
    } 
    else {
        showErrorMessage("Invaild Bill Amount")
    }
    billAmount.textContent = 0;
    cashGiven.textContent = 0;
});