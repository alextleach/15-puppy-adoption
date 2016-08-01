import PuppyView from 'puppy-view';
import CreateFormView from 'create-form';
export default class App {

  constructor(element) {
    this.element = element;
    this.data = [];
    this.formView = new CreateFormView(this.element.querySelector('main'), this);
    // const puppyList = world.querySelector('.puppy-container');
    // this.puppyView = new PuppyView(puppyList);
  }

  render() {
    this.element.innerHTML = '';
    console.log(data);
    const components = this.data.map((item) => new PuppyView(this, item));

    components.forEach((card) => {
      this.element.appendChild(card.element);
      card.render();
    });


  }

  start() {
    return fetch('http://tiny-tn.herokuapp.com/collections/al-puppy')
      .then((res) => res.json())
      .then((data) => {
        this.data = data;
        this.render(data);
      });
  }

  addPuppyData(puppy) {
    this.data = [...this.data, puppy];

    this.render();
  }
}
