import './styles/main.scss';
import Modal from './scripts/ui/modal';
import User from './scripts/components/user';

function buttonOpenModalForm(button) {
  //adding functionality to button in order to open modal form
  button.addEventListener('click', () => {
    const add = new Modal({
      element: document.querySelector('.js_modal_form'),
      runUser: User
    });
    add.open();
  });
}

buttonOpenModalForm(document.querySelector('.js_open_modal_form'));

