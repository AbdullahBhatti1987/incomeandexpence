// var numberformat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];


var entry = document.getElementById("entry");
var newEntry = document.getElementById("screen");
var textview = document.getElementById("textview");
var amountview = document.getElementById("amountview");
var incomebutton = document.getElementById("incomebutton");
var expensebutton = document.getElementById("expensebutton");

var numberformat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];

function save() {
  nextentry();
  if (detailtext.value !== "" && amount.value !== "") {
    shortreset();
  } else {
    alert("Entery text and amount.");
  }
}

var buttonIncome = document.getElementById("incomebutton");
var buttonExpense = document.getElementById("expensebutton");
buttonIncome.disabled = false;
buttonExpense.disabled = false;

function reset() {
  buttonIncome.disabled = false;
  buttonExpense.disabled = false;
  detailtext.value = "";
  amount.value = "";
  while (newEntry.firstChild) {
    newEntry.removeChild(newEntry.firstChild);
  }
}

function shortreset() {
  buttonIncome.disabled = false;
  buttonExpense.disabled = false;
  detailtext.value = "";
  amount.value = "";
}

function incomeBtn() {
  buttonIncome.disabled = true;
  buttonExpense.disabled = false;
}

function expenseBtn() {
  buttonExpense.disabled = true;
  buttonIncome.disabled = false;
}
var totalIncomes = "";
var totalExpenses = "";
var totalSavings = "";
totalIncomes = +totalIncomes;
totalExpenses = +totalExpenses;
totalSavings = +totalSavings;

function nextentry() {
  if (buttonIncome.disabled == true) {
    var pElelement = document.createElement("p");
    pElelement.className = "entry profit";
    pElelement.id = "entry";
    newEntry.appendChild(pElelement);

    var s1Element = document.createElement("span");
    s1Element.className = "textfield";
    s1Element.id = "textview";
    pElelement.appendChild(s1Element);
    var detailtext = document.getElementById("detailtext");
    s1Element.innerText = detailtext.value;

    var s2Element = document.createElement("span");
    s2Element.className = "amount";
    s2Element.id = "amountview";
    pElelement.appendChild(s2Element);

    var s3Element = document.createElement("span");
    s3Element.className = "current profitFont";
    s3Element.id = "currentview";
    s2Element.appendChild(s3Element);
    var amount = document.getElementById("amount");

    var temp1 = +amount.value;
    totalIncomes = +totalIncomes + +temp1;
    s3Element.innerText = temp1;

    var s4Element = document.createElement("span");
    s4Element.className = "total";
    s4Element.id = "totalview";
    s2Element.appendChild(s4Element);
    totalSavings = totalIncomes - totalExpenses;
    s4Element.innerText = totalSavings;
    if(totalSavings > 0){
        s4Element.style.color = 'green';
    } else{
        s4Element.style.color = 'red';
    }
  } else if (buttonExpense.disabled == true) {
    var pElelement = document.createElement("p");
    pElelement.className = "entry lose";
    pElelement.id = "entry";
    newEntry.appendChild(pElelement);

    var s1Element = document.createElement("span");
    s1Element.className = "textfield";
    s1Element.id = "textview";
    pElelement.appendChild(s1Element);
    var detailtext = document.getElementById("detailtext");
    s1Element.innerText = detailtext.value;

    var s2Element = document.createElement("span");
    s2Element.className = "amount";
    s2Element.id = "amountview";
    pElelement.appendChild(s2Element);

    var s3Element = document.createElement("span");
    s3Element.className = "current loseFont";
    s3Element.id = "currentview";
    s2Element.appendChild(s3Element);
    var amount = document.getElementById("amount");
    var temp1 = +amount.value;
    totalExpenses = +totalExpenses + +temp1;
    s3Element.innerText = temp1;

    var s4Element = document.createElement("span");
    s4Element.className = "total";
    s4Element.id = "totalview";
    s2Element.appendChild(s4Element);
    totalSavings = totalIncomes - totalExpenses;
    s4Element.innerText = totalSavings;
    if(totalSavings < 0){
        s4Element.style.color = 'red';
    }
  } else {
    s4Element.style.color = 'green';
  }
}