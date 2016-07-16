const cardTemplate = `
<div class="puppy__card__image">
          <img src="http://placecera.com/250/250" class="puppy__card__image__img" alt="">
        </div>
        <div class="puppy__card__info">
          <ul class="add-puppy__form old-puppy">
            <li class="add-puppy__form__item old-puppy-item">
              <p>Name</p><input type="text" name="name" class="add-puppy__form__item__input dog__name" value="Doge">
            </li>
            <li class="add-puppy__form__item old-puppy-item">
              <p>Age</p><input type="text" name="name" class="add-puppy__form__item__input dog__age" value="7">
            </li>
            <li class="add-puppy__form__item old-puppy-item">
              <p>Photo URL</p><input type="text" name="name" class="add-puppy__form__item__input photo__url" value="http://placecera.com/250/250">
            </li>
            <li class="add-puppy__form__item old-puppy-item">
              <p>Description</p><input type="text" name="name" class="add-puppy__form__item__input dog__description" value="actually the cutest doge">
            </li>
          </ul>

          <div class="puppy__card__info__buttons">
            <div class="puppy__card__info__buttons--btn">
              <button type="button" class="puppy__button puppy__delete" name="button">DELETE</button>
            </div>
            <div class="puppy__card__info__buttons--btn">
              <button type="button" class="puppy__button puppy__update" name="button">PUPDATE</button>
            </div>
          </div>
        </div>
        `;

export default class PuppyView {

  constructor(newElement, currentPup) {
    this.newElement = newElement;
    this.currentPup = currentPup;
    this.element = document.createElement('div');
    this.element.classList.add('puppy__card');
    this.element.innerHTML = cardTemplate;
            // this.element.appendChild(el);
  }



  render(){

    this.element.querySelector('.dog__name').value = this.currentPup.name;
    this.element.querySelector('.dog__age').value = this.currentPup.age;
    this.element.querySelector('.photo__url').value = this.currentPup.photoUrl;
    this.element.querySelector('.dog__description').value = this.currentPup.profile;
    this.element.querySelector('.puppy__card__image__img').src = this.currentPup.photoUrl;
  }
}
