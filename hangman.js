var wrap = document.querySelector('.wrap');
var arr = ['audi', 'bentley', 'tesla', 'bmw', 'ferrari', 'ford' , 'jaguar' , 'mercedes'];
var curResult  = arr[Math.floor(Math.random() * arr.length)];
var collection = Array(curResult.length);



function genInputs(str) {
  var input;
  var frag = document.createDocumentFragment();
  for(var i = 0; i < str.length; i++) {
    input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('data-index', i);
    input.className = 'hangman__inputs';
    
    input.onkeyup = _onKeyUp;
    frag.appendChild(input);
  }
  wrap.appendChild(frag); 
  input = null;
}

function _onKeyUp() {
  var i = this.dataset.index;
  var enteredVal = this.value;
  if(curResult[i] !== enteredVal) {
    this.value = '';
  }else {
    collection[i] = this.value;
    if(collection.join('') === curResult) {
      alert('you win');
    }
  }
}

console.log(curResult);
genInputs(curResult);

/* THIS IS TEH HANGMAN WELL KINDA IS JUST NEED TO GET CANT READ PROPERTY 'GETCONTEXT'


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(300,400);
ctx.lineTo(100,400);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(100,400);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(225,100);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(225,150);
ctx.lineTo(225,100);
ctx.stroke();

ctx.beginPath();
ctx.arc(225,180,30,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(225,210);
ctx.lineTo(225,330);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(225,250);
ctx.lineTo(290,300);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(225,250);
ctx.lineTo(170,300);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250,370);
ctx.lineTo(225,330);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250,370);
ctx.lineTo(225,330);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(190,370);
ctx.lineTo(225,330);
ctx.stroke();


*/
