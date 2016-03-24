/**
 * @author Matt Mc Donnell <>
 * @date 14/03/2016
 * @
 */

(function(document, undefined) {
  'use strict';

  var wrap = document.querySelector('.wrap'),
    canvas = document.getElementById("myCanvas"),
    ctx = canvas.getContext("2d"),
    arr = ['audi', 'bentley', 'tesla', 'bmw', 'ferrari', 'ford' , 'jaguar' , 'mercedes'],
    curResult  = arr[Math.floor(Math.random() * arr.length)],
    collection = Array(curResult.length),
    lives = 10,
    printLives = document.querySelector('.lives'),
    map = [
    [200, 300, 260, 350],
    [200, 300, 140, 350],
    [200, 240, 260, 270],
    [200, 240, 140, 270],
    [200, 210, 200, 300],
    [],
    [200, 100, 200, 150],
    [100, 100, 300, 100],
    [100, 400, 100, 100],
    [300, 400, 100, 400],
  ];


  function initGame() {
    initLives(lives);
    genInputs(curResult);
  }

  function initLives(lives) {
    updateNumber(lives);
  }

  function decrementLives() {
    lives--;
    onUpdateLive(lives);
  }

  function onUpdateLive(newLives) {
    updateNumber(newLives);
    updateHangman();
  }

  function updateNumber(lives) {
    printLives.innerHTML = 'Lives ' + lives;
  }

  function drawPart(type, partIndex) {
    var fn = type === 1 ? drawLine : drawCircle;
    fn.apply(fn, map[partIndex]);
  }

  function drawHangman(part) {
    drawPart(part === 5 ? 0 : 1, part);
    if(part === 0) return alert('You Lose');
  }

  function updateHangman() {
    drawHangman(lives);
  }

  function genInputs(str) {
    var input, frag = document.createDocumentFragment(),
    i = 0;

    for(; i < str.length; i++) {
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

  function _onKeyUp(e) {
    var target = e.target,
      i = target.dataset.index,
      enteredVal = target.value;

    if(curResult[i] !== enteredVal) {
      decrementLives();
      target.value = '';
    }else {
      collection[i] = target.value;
      if(collection.join('') === curResult) {
        alert('You Win');
      }
    }
  }

  function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
  }

  function drawCircle() {
    ctx.beginPath();
    ctx.arc(200,180,30,0,2*Math.PI);
    ctx.stroke();  
  }

  initGame();
  console.log('This isnt cheating its improving your odds so the answer is ' + curResult);
  

})(document);
