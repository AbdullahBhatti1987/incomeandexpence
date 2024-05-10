// var newEntry = document.getElementById("screen");
// var entry = document.getElementById("entry");
// var textview = document.getElementById("textview");
// var amountview = document.getElementById("amountview");
// var currentview = document.getElementById("currentview");
// var totalview = document.getElementById("totalview");
// var incomebutton = document.getElementById("incomebutton");
// var expensebutton = document.getElementById("expensebutton");
// var detailtext = document.getElementById("detailtext");
// var amount = document.getElementById("amount");

// var numberformat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];


// function save() {
//     console.log(1)
//     newEntry.append(nextentry());
//     console.log(2)
//     newentry();
//     console.log(3)
//     if (detailtext.value == '' && amount.value == '') {
//         console.log(4)
//         textview.innerText = detailtext.value;
//         console.log(5)
//         currentview.innerText = amount.value;
//         console.log(6)
//         shortreset();
//         console.log(7)
//   } else {
//     console.log("Text null");
//     console.log(0)
//   }
// }
// var buttonIncome = document.getElementById("incomebutton");
// var buttonExpense = document.getElementById("expensebutton");
// buttonIncome.disabled = false;
// buttonExpense.disabled = false;

// function reset() {
//   buttonIncome.disabled = false;
//   buttonExpense.disabled = false;
//   detailtext.value = null;
//   amount.value = "";
//   detailtext.value = null;
//   amount.value = "";
// }
// function shortreset() {
//   buttonIncome.disabled = false;
//   buttonExpense.disabled = false;
// }
// function newentry() {
//   buttonIncome.disabled = true;
//   buttonExpense.disabled = true;
//   detailtext.value = null;
//   amount.value = "";
// }
// function incomeBtn() {
//   buttonIncome.disabled = true;
//   buttonExpense.disabled = false;
// }

// function expenseBtn() {
//   buttonExpense.disabled = true;
//   buttonIncome.disabled = false;
// }

// function nextentry() {
//   var pElelement = document.createElement("p");
//   pElelement.id = "entry";
//   pElelement.className = "entry";
//   newEntry.appendChild(pElelement);
//   var s1Element = document.createElement("span");
//   s1Element.className = "textfield";
//   s1Element.id = "textview";
//   pElelement.appendChild(s1Element);
//   var s2Element = document.createElement("span");
//   s2Element.className = "amount";
//   s2Element.id = "amountview";
//   pElelement.appendChild(s2Element);
//   var s3Element = document.createElement("span");
//   s3Element.className = "current";
//   s3Element.id = "currentview";
//   s2Element.appendChild(s3Element);
//   var s4Element = document.createElement("span");
//   s4Element.className = "total";
//   s4Element.id = "totalview";
//   s2Element.appendChild(s4Element);
// }




var entry = document.getElementById("entry");
var newEntry = document.getElementById("screen");
var textview = document.getElementById("textview");
var amountview = document.getElementById("amountview");

var incomebutton = document.getElementById("incomebutton");
var expensebutton = document.getElementById("expensebutton");


// totalview = '';

// var numberformat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];

function save() {
    nextentry();

    if (detailtext.value !== '' && amount.value !== '') {
        // textview = detailtext.value;
    shortreset();
    } else {
        alert('Entery text and amount.');
    }
}

var buttonIncome = document.getElementById("incomebutton");
var buttonExpense = document.getElementById("expensebutton");
buttonIncome.disabled = false;
buttonExpense.disabled = false;

function reset() {
    buttonIncome.disabled = false;
    buttonExpense.disabled = false;
    detailtext.value = '';
    amount.value = "";
    while (newEntry.firstChild) {
        newEntry.removeChild(newEntry.firstChild);
    }
}

function shortreset() {
    buttonIncome.disabled = false;
    buttonExpense.disabled = false;
    detailtext.value = '';
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
var totalIncomes = '';
var totalExpenses = '';
var totalSavings = '';

function nextentry() {
    var pElelement = document.createElement("p");
    pElelement.className = "entry";
    pElelement.id = "entry";

    newEntry.appendChild(pElelement);
    // console.log(pElelement);


    var s1Element = document.createElement("span");
    s1Element.className = "textfield";
    s1Element.id = 'textview';
    pElelement.appendChild(s1Element);
    var detailtext = document.getElementById("detailtext");
    s1Element.innerText = detailtext.value;
    
    
    var s2Element = document.createElement("span");
    s2Element.className = "amount";
    s2Element.id = 'amountview';
    pElelement.appendChild(s2Element);
    
    
    var s3Element = document.createElement("span");
    s3Element.className = "current";
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
    var totalview = document.getElementById("totalview");
    var temp2 = +totalview.value;
    // s4Element.innerText = temp2;
    s4Element.innerText = totalIncomes;
    console.log(typeof totalIncomes)

    console.log(typeof temp2)
    console.log(typeof +temp2)

    // totalview.innerText = s4Element.value;
    // pElelement;
}
