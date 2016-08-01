import PuppyView from 'puppy-view';
import CreateFormView from 'create-form';
export default class App {

  constructor(element) {
    this.element = element;
    this.data = [];
    this.formView = new CreateFormView(this.element.querySelector('.top-nav-form'), this);
  }

  render() {
    const puppyApp = this.element.querySelector('.puppy-container');
    puppyApp.innerHTML = '';
    // const components = this.data.map((item) => new PuppyView(this, item));

    this.data.forEach((card) => {
      const newPuppy = new PuppyView(card, this);
      puppyApp.appendChild(newPuppy.element);
    });
  }

  start() {
    return fetch('http://tiny-tn.herokuapp.com/collections/al-puppy')
      .then((res) => res.json())
      .then((info) => {
        this.data = info;
        this.render();
      });
  }

  addPuppyData(puppy) {
    this.data = [...this.data, puppy];

    this.render();
  }
}
