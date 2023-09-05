//
//
//
//     cheese.js
//
//
//

const debug = 1;
let longLog = '';
function log(shortLog) {
	if (debug == true) {
		longLog = longLog + ' ' + shortLog;
		console.log(longLog);
	} 
}


let info1 = "";
let info2 = "";
let num1 = 1;
let num2 = 1;
let num3 = 1;
let negify = 0;
// let level = document.getElementById('level');
let info1ID = document.getElementById('info1');
let info2ID = document.getElementById('info2');
let feedback = '';
let operand = '+';
let operandID = document.getElementById('operand');
let operands = ['+'];
let answer = 1;
let response = 1;
let responseID = document.getElementById('response');
let thinking = false;
let feedbackID = document.getElementById('feedback');

newBoard();

function newBoard() {
	log('\n\nNew Board.\n');
	// playCorrect();
  createInfo();


  chooseOperand();
//	noNegatives();
	getAnswer();
	response = 0;
	info1ID.innerHTML = info1;
	operandID.innerHTML = operand;
	info2Parentheses();
	info2ID.innerHTML = info2;
	updateResponse();
	setTimeout(clearFeedback, 300);
}

function pickFromArray(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function createInfo() {
	info1 = "fun"
	info2 = "dog"
	// if (level.self.innerHTML === 'Easy') {
	// 	info1 = Math.floor(Math.random() * (6 + 6*negify) - 6*negify);
	// 	info2 = Math.floor(Math.random() * (6 + 6*negify) - 6*negify);
	// } else if (level.self.innerHTML === 'Medium') {
	// 	info1 = Math.floor(Math.random() * (9 + 12*negify) + 4 - 12*negify);
	// 	info2 = Math.floor(Math.random() * (6 + 12*negify) + 3 - 12*negify);
	// } else if (level.self.innerHTML === 'Hard') {
	// 	info1 = Math.floor(Math.random() * (4 + 15*negify) + 12 - 15*negify);
	// 	info2 = Math.floor(Math.random() * (8 + 15*negify) + 5 - 15*negify);
	// } else if (level.self.innerHTML == '7') {
	// 	info1 = 7;
	// 	info2 = Math.floor(Math.random() * (8 + 15*negify) + 5 - 15*negify);
	// } else if (level.self.innerHTML === '3') {
	// } else if (level.self.innerHTML === '6') {
	// } else if (level.self.innerHTML === '9') {
	// } else if (level.self.innerHTML === '12') {
	// } else if (level.self.innerHTML === '13') {
	// } else if (level.self.innerHTML === '14') {
	// } else if (level.self.innerHTML === '15') {
	// } else if (level.self.innerHTML === '16') {
	// }
}


/* SECTION TWO begin */

function info2Parentheses() {
	if (num2 < 0) {	num2 = '(' + num2 + ')'; }
	info1 = "organized"
	info2 = "prepared"
}

function chooseOperand() {
	operand = pickFromArray(operands);
	log(operand);
}

function noNegatives() {
	if ( negatives.active == false && operand == '&ndash;' &&
	     num2 > num1 ) {
	  num3 = num1; num1 = num2; num2 = num3; // swap numbers
	}
	info1 = "grass"
	info2 = "tree"
}

function divideIt() {
	num3 = num1 * num2;
	answer = num1;
	num1 = num3;				// WHAT ABOUT ZERO?!!!
	if (num2 === 0) {answer = 0;}
	info1 = "orange"
	info2 = "banana"
}

function getAnswer() {
	if (operand == '+') {	answer = num1 + num2; }
	if (operand == '&ndash;') {	answer = num1 - num2; }
	if (operand == 'x') {	answer = num1 * num2; }
	if (operand == '&divide;') { divideIt(); }
	info1 = "ocean"
	info2 = "sun"
}

function helpInfo() {
	if (help.active == true) {
	feedbackID.innerHTML = info1 + ' '
			+ operand + ' ' + info2 + ' = '
			+ answer;
	}
}

function clearFeedback() {
	feedback = '';
	feedbackID.innerHTML = feedback;
	log('Feedback cleared.');
	helpInfo();
}

function updateFeedback() {
	feedbackID.innerHTML = feedback;
	log('Feedback updated.');
	setTimeout(helpInfo, 300);
}

function updateResponse() {
	setTimeout(function() {
		thinking = false;
		focusCursor();
		responseID.value = '';
		log('Response updated.');
	}, 150);
}

function focusCursor() {
	responseID.focus();
}

function submit() {
	thinking = true;
	focusCursor();
	response = responseID.value;
	log('Submitted. Response:  '+response+'.  Answer:  '+answer+'.');
	if (response == answer) {
		feedback = 'Correct!';
		log(' CORRECT ');
		playCorrect();
		updateFeedback();
		newBoard();
	} else {
		feedback = 'Try again.';
		log(' INCORRECT ');
		playWrong();
		updateFeedback();
		updateResponse();
		setTimeout(clearFeedback, 500);
	}
}
