var percentAmount;

//All elements on page
var bill = document.getElementById("bill");
var numberOfPeople = document.getElementById("numberOfPeople");
var peopleError = document.getElementById("peopleError");
var billError = document.getElementById("billError");
var tipError = document.getElementById("tipError");
var tipAmount = document.getElementById("tipAmount");
var total = document.getElementById("total");

const calculate = () => {
  if (bill.value === "") {
    billError.style.display = "block";
  } else {
    billError.style.display = "none";
  }

  if (percentAmount === undefined) {
    console.log("not defined");

    tipError.style.display = "block";
  } else {
    tipError.style.display = "none";
  }

  if (numberOfPeople.value === "" || numberOfPeople.value === "0") {
    peopleError.style.display = "block";
  } else {
    peopleError.style.display = "none";
  }

  let tipAmountValue =
    (parseFloat(bill.value) * percentAmount) / parseInt(numberOfPeople.value);

  tipAmount.innerText = "$" + Math.round(tipAmountValue * 100) / 100;

  let totalValue =
    (parseFloat(bill.value) + parseFloat(bill.value) * percentAmount) /
    parseInt(numberOfPeople.value);

  total.innerText = "$" + Math.round(totalValue * 100) / 100;
};

const setAmount = (amount) => {
  if (amount.nodeName === "BUTTON") {
    if (amount.textContent === "5%") {
      percentAmount = parseFloat("0.0" + amount.textContent);
    } else {
      percentAmount = parseFloat("0." + amount.textContent);
    }
  }

  if (amount.nodeName === "INPUT") {
    if (amount.value.length === 0) {
      percentAmount = parseFloat("0.0" + amount.value);
    } else {
      percentAmount = parseFloat("0." + amount.value);
    }
  }
  console.log(amount);

  for (let i = 0; i < 5; i++) {
    let button = document.getElementsByTagName("button")[i];

    button.classList.remove("activeButton");
  }

  tipError.style.display = "none";

  amount.classList.add("activeButton");

  calculate();
};

const reset = () => {
  bill.value = "";
  numberOfPeople.value = "";
  percentAmount = undefined;

  for (let i = 0; i < 5; i++) {
    let button = document.getElementsByTagName("button")[i];

    button.classList.remove("activeButton");
  }

  tipAmount.innerText = "$0.00";
  total.innerText = "$0.00";
};
