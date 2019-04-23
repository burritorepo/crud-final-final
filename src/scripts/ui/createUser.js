export default function User(opt) {
  this.element = opt.element;
  this.currentCard = opt.currentCard;
  this.name = opt.name;
  this.email = opt.email;
  this.lastname = opt.lastname;
  this.phone = opt.phone;
  this.country = opt.country;
  this.photourl = opt.photourl;
  this.aboutme = opt.aboutme;
}

User.prototype.createObject = function () {
  let objValues = {
    name: this.name,
    email: this.email,
    lastname: this.lastname,
    phone: this.phone,
    country: this.country,
    photourl: this.photourl,
    aboutme: this.aboutme
  };
  return objValues;
}

User.prototype.add = function () {
  console.log();
  this.element.innerHTML += `<div class="card d-flex justify-content-center align-items-center" style="width: 18rem;">
  <img class="card-img-top" src="${this.photourl}" alt="Card image cap">
  <div class="card-body d-flex">
   <h5 class="card-title">${this.name} ${this.lastname}</h5>
   <div>
       <span>${this.phone} |</span><span> ${this.email}</span>
   </div>
   <p>${this.country}</p>
   <p class="card-text">${this.aboutme}</p>
   <a href="#" class="btn btn-primary">See my portfolio</a>
 </div>
</div>`;
};

User.prototype.delete = function () {
  console.log('delete', this.element);
  this.element.removeChild(this.currentCard);
};

