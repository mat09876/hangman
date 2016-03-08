

var InputBox = function() {
	this.value = '';
	this.dom = document.createElement('div');
	this.dom.className = 'we-love-hangman__display';
	// this.dom.innerHTML = 'display';
}

InputBox.prototype.addText = function(text) {
	this.value += text;
	this.dom.innerHTML = this.value;
};

// function input() {
// 	document.getElementByClass('input').innerHTML = this.text;
// }

// // Calculator Class
var Cal = function() {
	this.buttonConf = {
		a: {
			text: 'a',
			bg: 'dark',
			value: 'a',
		},
		b: {
			text: 'b',
			bg: 'dark',
			value: 'b',
		},

		c: {
			text: 'c',
			bg: 'dark',
			value: 'c',
		},

		d: {
			text: 'd',
			bg: 'dark',
			value: 'd',
		},

		e: {
			text: 'e',
			bg: 'dark',
			value: 'e',
		},

		f: {
			text: 'f',
			bg: 'dark',
			value: 'f',
		},

		g: {
			text: 'g',
			bg: 'dark',
			value: 'g',
		},

		h: {
			text: 'h',
			bg: 'dark',
			value: 'h',
		},

		i: {
			text: 'i',
			bg: 'dark',
			value: 'i',
		},

		j: {
			text: 'j',
			bg: 'dark',
			value: 'j',
		},

		k: {
			text: 'k',
			bg: 'dark',
			value: 'k',
		},

		l: {
			text: 'l',
			bg: 'dark',
			value: 'l',
		},

		m: {
			text: 'm',
			bg: 'dark',
			value: 'm',
		},

		n: {
			text: 'n',
			bg: 'dark',
			value: 'n',
		},

		o: {
			text: 'o',
			bg: 'dark',
			value: 'o',
		},

		p: {
			text: 'p',
			bg: 'dark',
			value: 'p',
		},

		q: {
			text: 'q',
			bg: 'dark',
			value: 'a',
		},

		r: {
			text: 'r',
			bg: 'dark',
			value: 'r',
		},

		s: {
			text: 's',
			bg: 'dark',
			value: 's',
		},

		t: {
			text: 't',
			bg: 'dark',
			value: 't',
		},

		u: {
			text: 'u',
			bg: 'dark',
			value: 'u',
		},


		v: {
			text: 'v',
			bg: 'dark',
			value: 'v',
		},

		w: {
			text: 'w',
			bg: 'dark',
			value: 'w',
		},

		x: {
			text: 'x',
			bg: 'dark',
			value: 'x',
		},

		y: {
			text: 'y',
			bg: 'dark',
			value: 'y',
		},

		z: {
			text: 'z',
			bg: 'dark',
			value: 'z',
		}

		

	}
	this.parent = document.querySelector('.we-love-hangman');
	this.display = null;
	this.buttons = [];
	this.values = [];
	this.operator = '';
	this.toClear = false;

	this.init();
};
Cal.prototype.reset = function() {
	this.values = [];
	this.operator = '';
};

Cal.prototype.clearDisplay = function() {
	this.display.dom.innerHTML = '';
};

Cal.prototype.init = function() {
	this.initDisplayArea();
	this.initButtons();
	this.values = [];
	this.operator;
};

Cal.prototype.initDisplayArea = function() {
	var display = new InputBox();
	this.display = display;
	this.parent.appendChild(display.dom);
};

Cal.prototype.initButtons = function() {
	var frag = document.createDocumentFragment();
	var temp;
	var btn;
	var c = 0;
	var btnsWrap;
	var btnWrap;
	for (var i in this.buttonConf) {
		if (c % 26 === 0) {
			btnsWrap = document.createElement('div');
			btnsWrap.className = 'btns-wrap';
			this.parent.appendChild(btnsWrap);
		}

		if (this.buttonConf.hasOwnProperty(i)) {
			btnWrap = document.createElement('div');
			btnWrap.className = 'btn-wrap';
			temp = this.buttonConf[i];
			//console.log(temp);
			btn = new CalBtn(temp);
			btn.cal = this;
			btnWrap.appendChild(btn.dom);
			btnsWrap.appendChild(btnWrap);
		}
		c++;

	}
	// this.parent.appendChild(frag);
	//console.log(this.parent);
};

// Cal.prototype.settings = function() {};

// Cal.prototype.rad = function(x, y) {
// 	var sum = x + y;
// 	this.display.dom.innerHTML = sum;
// 	return sum;
// };

// Cal.prototype.xl = function(x) {
// 	//var value = % * ;
// 	// console.log(x);
// 	var r = x,
// 		i = x - 1;
// 	for (; i > 0; i--) {
// 		r *= i;
// 	}

// 	this.display.dom.innerHTML = r;
// 	return r;
// };

// Cal.prototype.percentage = function(x, y) {
// 	var sum = x % y;
// 	this.display.dom.innerHTML = sum;
// 	return sum;
// };

// Cal.prototype.clear = function(x, y) {
// 	window.location.reload();
// };

// Cal.prototype.Inv = function(x, y) {
// 	var sum = x + y;
// 	this.display.dom.innerHTML = sum;
// 	return sum;
// };

// Cal.prototype.sin = function(x, y) {
// 	var sum = x + y;
// 	this.display.dom.innerHTML = sum;
// 	return sum;
// };

// Cal.prototype.ln = function(x, y) {
// 	var sum = x + y;
// 	this.display.dom.innerHTML = sum;
// 	return sum;
// };

// Cal.prototype.divide = function(x, y) {
// 	var sum = x / y;
// 	this.display.dom.innerHTML = sum;
// 	return sum;
// };

// Cal.prototype.pi = function(x, y) {
// 	var sum = x + y;
// 	this.display.dom.innerHTML = sum;
// 	return sum;
// };

// Cal.prototype.cos = function(x, y) {
// 	var sum = x % y;
// 	this.display.dom.innerHTML = sum;
// 	return sum;
// };

// Cal.prototype.log = function(x, y) {
// 	var sum = x % y;
// 	this.display.dom.innerHTML = sum;
// 	return sum;
// };

// Cal.prototype.multiply = function(x, y) {
// 	var sum = x * y;
// 	this.display.dom.innerHTML = sum;
// 	return sum;
// };

// Cal.prototype.Irrational_Number = function(x, y) {
// 	var sum = x + y;
// 	this.display.dom.innerHTML = sum;
// 	return sum;
// };

// Cal.prototype.tan = function(x, y) {
// 	var sum = x + y;
// 	this.display.dom.innerHTML = sum;
// 	return sum;
// };

// Cal.prototype.Square_Root = function(x, y) {
// 	var sum = x + y;
// 	this.display.dom.innerHTML = sum;
// 	return sum;
// };


// Cal.prototype.minus = function(x, y) {
// 	var sum = x - y;
// 	this.display.dom.innerHTML = sum;
// 	return sum;
// };

// Cal.prototype.Ans = function(x, y) {
// 	var sum = x / y;
// 	this.display.dom.innerHTML = sum;
// 	return sum;
// };


// Cal.prototype.EXP = function(x, y) {
// 	var sum = x / y;
// 	this.display.dom.innerHTML = sum;
// 	return sum;
// };



// Cal.prototype.xy = function(x, y) {
// 	var r = x * y;
// 	this.display.dom.innerHTML = r;
// 	return r;
// };

// Cal.prototype.add = function(x, y) {
// 	var sum = x + y;
// 	this.display.dom.innerHTML = sum;
// 	return sum;
// };

// Cal.prototype.doMath = function() {
// 	this[this.operator].apply(this, this.values);
// };

// Calculator Button Class
var CalBtn = function(conf) {
	this.text = conf.text || 'n/a';
	this.color = null;
	this.bg = conf.bg || '#ccc';
	this.dom = null;
	this.value = conf.value || 'n/a',
		this.cal = null;
	this.isOperater = conf.isOperater;
	this.operator = this.isOperater ? conf.operator : null;
	this.init();
};

CalBtn.prototype.init = function() {
	//console.log(this.conf);
	var baseCls = 'matt-hangman__btn';
	this.dom = document.createElement('a');
	this.dom.onclick = this._onClickMe.bind(this);
	this.dom.innerHTML = this.text;
	this.dom.className = baseCls + ' ' + baseCls + '--' + this.bg;
};

CalBtn.prototype._onClickMe = function() {
	if (this.cal.toClear) {
		this.cal.clearDisplay();
		this.cal.toClear = false;
	}
	if (this.text === '=') {
		this.cal.doMath();
		this.cal.reset();
		this.cal.toClear = true;
		return;
	}

	this.cal.display.addText(this.text + ' ');
 	if (this.isOperater) {
		this.cal.operator = this.operator;
	} else {
		this.cal.values.push(parseFloat(this.text));
	}

};

var myCal = new Cal();