import './styles/main.scss';
import Modal from './scripts/ui/modal';
import User from './scripts/ui/createUser';

function openModalForm() {
  const btnAddUser = document.querySelector('.js_open_modal_form');

  btnAddUser.addEventListener('click', () => {
    const add = new Modal({
      element: document.querySelector('.js_modal_form')
    });
    add.open();
  });
}

function closeModalForm() {
  const btnCloseModal = document.querySelector('.js_close_modal_form');
  const btnCloseModalUpperCorner = document.querySelector('.js_close_upper_corner');

  btnCloseModal.addEventListener('click', () => {
    const close = new Modal({
      element: document.querySelector('.js_modal_form')
    });
    close.close();
  });

  btnCloseModalUpperCorner.addEventListener('click', () => {
    const closeForm = new Modal({
      element: document.querySelector('.js_modal_form')
    });
    closeForm.close();
  });
}

function closeModalAlert() {
  const btnCloseModal = document.querySelector('.js_close_modal_alert');
  const btnCloseModalUpperCorner = document.querySelector('.js_close_upper_corner_alert');

  btnCloseModal.addEventListener('click', () => {
    const closeAlert = new Modal({
      element: document.querySelector('.js_modal_alert')
    });
    closeAlert.close();
  });

  btnCloseModalUpperCorner.addEventListener('click', () => {
    const close = new Modal({
      element: document.querySelector('.js_modal_alert')
    });
    close.close();
  });
}

function addNewUser() {
  let objects = [];
  const btnSaveUser = document.querySelector('.js_save_user');
  const modify = document.querySelector('.js_modify');

  function nuevo() {
    btnSaveUser.addEventListener('click', () => {
      const newUser = new User({
        element: document.querySelector('#users'),
        name: document.querySelector('.js_name').value,
        lastname: document.querySelector('.js_lastname').value,
        email: document.querySelector('.js_email').value,
        phone: document.querySelector('.js_phone').value,
        country: document.querySelector('.js_country').value,
        photourl: document.querySelector('.js_url').value,
        aboutme: document.querySelector('.js_aboutme').value
      });
      objects.push((newUser.createObject()));
      console.log(objects);
      newUser.add();

      btnSaveUser.addEventListener('click', () => {
        const newUser = new Modal({
          element: document.querySelector('.js_modal_form'),
        });
        newUser.close();
      });
    });
  };
  nuevo();

  modify.addEventListener('click', (e) => {
    console.log('click en modify', e.target.parentElement.parentElement);
    
    for (let {name: n, email: e} of objects) {
      console.log("Name: " + n + ", Email: " + e);
      /* if (n == ) */
    }

 /*    document.querySelector('.js_name').value = objects[0].name;
    document.querySelector('.js_lastname').value = objects[0].lastname;
    document.querySelector('.js_email').value = objects[0].email;
    document.querySelector('.js_phone').value = objects[0].phone;
    document.querySelector('.js_country').value = objects[0].country;
    document.querySelector('.js_url').value = objects[0].photourl;
    document.querySelector('.js_aboutme').value = objects[0].aboutme; */
    console.log(document.querySelector('.js_name').value);
    console.log(objects)
  });
}

function modifyUser() {

  const openDeleteAlert = document.querySelector('.js_delete');
  const deleteUser = document.querySelector('.js_modify_user');

  /* modifyUser.addEventListener('click', (callback)); */

  /*  modifyUser.addEventListener('click', () => {
     const add = new User({
       element: document.querySelector('.js_modal_form')
     });
     add.open();
   }); */

  openDeleteAlert.addEventListener('click', () => {
    console.log('borrar');
    const openAlert = new Modal({
      element: document.querySelector('.js_modal_alert')
    });
    openAlert.open();
  });

  deleteUser.addEventListener('click', () => {
    let current = openDeleteAlert.parentElement.parentElement;
    const deleteCurrent = new User({
      element: document.querySelector('#users'),
      currentCard: current
    });
    deleteCurrent.delete();
  });
}

openModalForm();
closeModalForm();
closeModalAlert();
addNewUser();
modifyUser();
