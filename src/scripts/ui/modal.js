export default function Modal(opt) {
  this.element = opt.element;
}

Modal.prototype.open = function() {
  console.log('open', this.element);
  document.body.classList.add('modal-open');
  this.element.classList.add('show');
};

Modal.prototype.close = () => {
  console.log('close');
};
