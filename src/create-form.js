export default class CreateFormView {

  constructor(element, application) {
    this.element = element;
    this.application = application;

    this.toggle();
    this.addPuppy();
  }

  toggle() {
    const addPuppyButton = document.querySelector('.puppy__plus');
    const addPuppyForm = document.querySelector('.add-puppy');

    addPuppyButton.addEventListener('click', onClick);

    function onClick() {
      addPuppyForm.classList.toggle('add-puppy__toggle');

    };
  }

  addPuppy() {
    const puppySubmit = this.element.querySelector('.add-puppy__submit');
    puppySubmit.addEventListener('submit', (ev) => {
      ev.preventDefault();

      this.formData = {
        name: this.element.querySelector('.puppy__name').value,
        age: this.element.querySelector('.puppy__age').value,
        photoUrl: this.element.querySelector('.puppy__url').value,
        profile: this.element.querySelector('.puppy__description').value,
      };
      fetch('http://tiny-tn.herokuapp.com/collections/al-puppies', {
          method: `post`,
          headers: {
            Accept: `application/json`,
            'Content-Type': `application/json`,
          },
          body: JSON.stringify(this.formData),
        }).then((res) => res.json())
        .then((data) => {
          this.element.querySelector('.puppy__name').value = '';
          this.element.querySelector('.puppy__age').value = '';
          this.element.querySelector('.photo__url').value = '';
          this.element.querySelector('.puppy__description').value = '';

          this.application.addPuppyData(data);
          const goAway = this.element.querySelector('.add-puppy');
          goAway.classList.toggle('add-puppy__toggle');
        });
    });

  }

}
