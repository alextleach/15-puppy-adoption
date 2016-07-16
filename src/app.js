import PuppyView from 'puppy-view';
export default class App {

  constructor(world) {
    this.world = world;
    this.data = [];

    const puppyList = world.querySelector('.puppy-container');
    this.puppyView = new PuppyView(puppyList);
    debugger
  }

  render(data){
    // this.world.innerHTML='';

    const components = this.data.map((item) => new PuppyView(this, item));

    components.forEach((card) => {
      this.world.appendChild(card.element);
      card.render();
    });

    this.puppyView.setData(this.data);
    this.puppyView.render();
  }

  start() {
     return fetch('http://tiny-tn.herokuapp.com/collections/ryan-puppy')
     .then((res) => res.json())
     .then((data)=> {
       this.data = data;
       this.render(data);
   });
 }


}
