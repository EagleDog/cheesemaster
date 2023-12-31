//
// master.js
//

const click1 = new Audio('./assets/click1.ogg');
const click2 = new Audio('./assets/rasp_click3.ogg');
const click3 = new Audio('./assets/typing6.ogg');
const click4 = new Audio('./assets/typing7.ogg');


const title = document.getElementById('title');

const tableDiv = document.getElementById('multiples');

const setArrow = document.getElementById('nav0d');

let titleWords = ["Achieve", "Succeed", "Encourage", "Promote", "Respond", "Extend"]
let titleWord = "Achieve"
let baseNumber = 0;
let multiple = 1;
let set = 1;


function prevNumber() {                 // prevNumber BUTTON
  click2.play();
  baseNumber -= 1;
  titleWord = titleWords[baseNumber + 1]
  title.innerHTML = "" + baseNumber + "  " + titleWord + " ";
  // freshSet();
  updateTable();
}

function nextNumber() {                 // nextNumber BUTTON
  click1.play();
  baseNumber += 1;
  titleWord = titleWords[baseNumber + 1]
  title.innerHTML = "" + baseNumber + "  " + titleWord + " ";
  // freshSet();
  updateTable();
}

function freshSet() {                   // freshSet BUTTON
  setArrow.innerHTML = '&#129095;';
  setArrow.style.background = '#ccc';
  setArrow.style.color = '#eee';
  set = 1;
  multiple = 1;  
}

function nextSet() {                    // nextSet BUTTON
  if (set === 1) {
    click3.play();
    setArrow.innerHTML = '&#129093;';
    setArrow.style.background = '#eee';
    setArrow.style.color = '#ccc';
    set = 2;
    multiple = 16;
    updateTable();
  } else {
    click4.play();
    freshSet();
    updateTable();
  }
}

function updateTable() {                // updateTable OUTPUT
  if (set === 2) { multiple = 16; } else { multiple = 1; };
  tableDiv.innerHTML = '';

  for (let i = 0; i < 3; i++) {
    let tr = document.createElement('tr');
    tableDiv.appendChild(tr);

    for (let j = 0; j < 5; j++) {
      let td = document.createElement('td');
      td.appendChild(document.createTextNode(baseNumber * multiple));
      tr.appendChild(td);
      multiple += 1;
    }

  }
}

 updateTable();                         // CALL updateTable();


