/*---------------------------------------------------------- 
------------------------------------------------------------
------ Author : Mizanur Rahman -----------------------------
------ Assignment #4 : Flight booking JS Integration -------
------------------------------------------------------------
------------------------------------------------------------
*/

// ticket input count  adding functionality
function handleTicketChange(ticketTypes, isIncrease) {
  const ticketCount = getInputValue(ticketTypes); // calling getInputValue function for getting input value

  let ticketNewCount = ticketCount;

  // checking if value is increasable
  if (isIncrease == true) {
    ticketNewCount = ticketCount + 1;
  }
  // checking if value positive and decrease
  if (isIncrease == false && ticketCount > 0) {
    ticketNewCount = ticketCount - 1;
  }
  document.getElementById(ticketTypes + "-ticket-count").value = ticketNewCount;
  let totalTicketAmount = 0;

  // calculation of ticket numbers and amount
  if (ticketTypes == "firstClass") {
    totalTicketAmount = ticketNewCount * 150;
  }
  if (ticketTypes == "economy") {
    totalTicketAmount = ticketNewCount * 100;
  }

  // storing the amount inside the total-amount element
  document.getElementById("total-amount").innerText = "$" + totalTicketAmount;
  calculateTotalAmount();
  modalMessage(ticketNewCount, totalTicketAmount);
}

// calculation of total
function calculateTotalAmount() {
  const firstClassTicketCount = getInputValue("firstClass");
  const economyTicketCount = getInputValue("economy");

  // calculating ticket number by multiplying it with business class and economy class value
  const totalPrice = firstClassTicketCount * 150 + economyTicketCount * 100;
  document.getElementById("total-amount").innerText = "$" + totalPrice;

  // calculating 10 percentage tax rate and storing tax value inside tax
  const tax = Math.round(totalPrice * 0.1);
  document.getElementById("tax-amount").innerText = "$" + tax;

  // calculating total grand amount and storing inside grandTotal variable and grand-total elements
  const grandTotal = totalPrice + tax;
  document.getElementById("grand-total").innerText = "$" + grandTotal;
}

// function for getting the input
function getInputValue(ticketTypes) {
  const ticketInput = document.getElementById(ticketTypes + "-ticket-count");
  const ticketCount = parseInt(ticketInput.value);
  return ticketCount;
}

function modalMessage(ticketNumbers, totalAmout) {
  const modalBodyMessage = document.getElementById("modal-message");
  modalBodyMessage.innerText =
    "You have booked " +
    ticketNumbers +
    " tickets and Your total amount is " +
    totalAmout;

  const modalHeadingMessage = document.getElementById("modal-heading");
  modalHeadingMessage.style.color = "green";
  modalHeadingMessage.innerText = "Congratulations";
  return modalHeadingMessage, modalBodyMessage;
}

/*---------------------------------------------------------- 
------------------------------------------------------------
------------------------- The End --------------------------
------------------------------------------------------------
------------------------------------------------------------
*/
