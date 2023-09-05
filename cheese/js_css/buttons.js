//
//    buttons.js
//



window.addEventListener("load", fixButtonColors);

const colorOn = '#eee';
const colorOff = '#aaa';

const plus = { active: true,
             content: '+',
             style: document.getElementById('plus').style };
const minus = { active: false, 
              content: '&ndash;',
              style: document.getElementById('minus').style };
const multiply = { active: false, 
              content: 'x',
              style: document.getElementById('multiply').style };
const divide = { active: false, 
              content: '&divide;',
              style: document.getElementById('divide').style };

const level = { self: document.getElementById('level') };

const negatives = { active: false,
                  style: document.getElementById('negatives').style };

const opObjects = [plus, minus, multiply, divide];

const n7 = { active: false, style: document.getElementById('7').style };
const n3 = { active: false, style: document.getElementById('3').style };
const n6 = { active: false, style: document.getElementById('6').style };
const n9 = { active: false, style: document.getElementById('9').style };
const n12 = { active: false, style: document.getElementById('12').style };
const n13 = { active: false, style: document.getElementById('13').style };
const n14 = { active: false, style: document.getElementById('14').style };
const n15 = { active: false, style: document.getElementById('15').style };
const n16 = { active: false, style: document.getElementById('16').style };

function fixColor(symbol) {
  if (symbol.active == true) {
    symbol.style.background = colorOn;
  } else {
    symbol.style.background = colorOff;
  }
}

function fixButtonColors() {
  opObjects.forEach(function(symbol){fixColor(symbol);});
  fixColor(help);
  fixColor(negatives);
  fixColor(numbers);
}

function helpGo() {
  log('help go');
  playClick();
  if (help.active == true) {
    help.active = false;
    help.style.background = colorOff;
  } else {
    help.active = true;
    help.style.background = colorOn;
  }
  updateFeedback();
  focusCursor();
}

function levelGo() {
  playClick();
  if (level.self.innerHTML == 'Easy') {
    level.self.innerHTML = 'Medium';
  } else if (level.self.innerHTML == 'Medium') {
    level.self.innerHTML = 'Hard';
  } else {
    level.self.innerHTML = 'Easy';
  }
  log(level.self.innerHTML);
  newCard();
  // document.getElementById('level').innerHTML = "hello";
}


// -----

// function goNum() {
//   playClick();
//   if (7.active == true) {
//     7.active = false;
//     7.style.background = colorOff;
//   } else {
//     7.active = true;
//     7.style.background = colorOn;
//   }
//   log(level.self.innerHTML);
//   newCard();  
// }

// function go7() {
//   level.self.innerHTML = '7';
//   goNum();
// }
// function go3() {
//   level.self.innerHTML = '3';
//   goNum();
// }
// function go6() {
//   level.self.innerHTML = '6';
//   goNum();
// }
// function go9() {
//   level.self.innerHTML = '9';
//   goNum();
// }
// function go12() {
//   level.self.innerHTML = '12';
//   goNum();
// }
// function go13() {
//   level.self.innerHTML = '13';
//   goNum();
// }
// function go14() {
//   level.self.innerHTML = '14';
//   goNum();
// }
// function go15() {
//   level.self.innerHTML = '15';
//   goNum();
// }
// function go16() {
//   level.self.innerHTML = '16';
//   goNum();
// }

// ------


function opGo(symbol) {
  playClick();
  focusCursor();
  if (symbol.active === true) {
    if (operands.length === 1) { return; }
    symbol.active = false;
    symbol.style.background = colorOff;
  } else {
    symbol.active = true;
    symbol.style.background = colorOn;
  }
  log(symbol);
  updateOperands();
  newCard();
}

function negGo() {
  playClick();
  log('neg go');
  if (negatives.active == true) {
    negatives.active = false;
    negatives.style.background = colorOff;
    negify = 0;
  } else {
    negatives.active = true;
    negatives.style.background = colorOn;
    negify = 1;
  }
  updateFeedback();
  focusCursor();
  newCard();
}

function updateOperands() {
  operands = [];
  opObjects.forEach(function(symbol){
    if (symbol.active == true) {
      operands.push(symbol.content);
    }
    log(operands.length)
  });

}





