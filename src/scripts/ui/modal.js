export default function Modal (opt) {
  this.element = opt.element;
}

Modal.prototype.open = function () {
  console.log('open', this.element);
  this.element.classList.add('show');
};

Modal.prototype.close = function () {
  console.log('close', this.element);
  this.element.classList.remove('show');
};
