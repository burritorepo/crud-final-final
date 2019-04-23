import './styles/main.scss';
import Modal from './scripts/ui/modal';

function addUser() {
  const btnAdduser = document.querySelector('.js_add');
  btnAdduser.addEventListener('click', () => {
    const modal = new Modal({
      element: document.querySelector('.js_modal')
    });
    modal.open();
  });
}
addUser();
closeModal();
