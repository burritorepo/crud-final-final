export default function Modal(opt) {
  this.element = opt.element;
  //function to call Run user from Modal
  this.referenceToUserFunction = opt.runUser;
  this.form = opt.element.querySelector('form');
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
  this.waitsubmit(this.form, this.referenceToUserFunction, this.close());
};

Modal.prototype.waitsubmit = function (form, runUser) {
  let modalThis = this;
  this.element.addEventListener('click', function(e){
  if(e.target.id == 'js_save_user') {
    form.addEventListener('submit',(e) => {
      e.preventDefault();
    });
    runUser();
    console.log('felicidad');
   }
 })
};




