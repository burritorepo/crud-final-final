export default function Modal(opt) {
  this.element = opt.element;
  //function to call Run user from Modal
  this.referenceToUserFunction = opt.runUser;
  this.form = opt.element.querySelector('form');
  this.saveUserBtn = this.form.querySelector('.js_save_user');
  this.runUserFunction();
}

Modal.prototype.open = function () {
  console.log('open', this.element);
  //Reseting current form before displaying it
  this.form.reset();
  //Adding show class to modal form to display it
  this.element.classList.add('show');
};

Modal.prototype.close = function () {
  console.log('close', this.element);
  this.element.classList.remove('show');
};

Modal.prototype.runUserFunction = function () {
  this.submit(this.form);
};

Modal.prototype.innerfoo = function () {
  console.log('dentro submit');
}

Modal.prototype.submit = function (form) {
  form.onsubmit = this.innerfoo();
};




