import PuppyView from 'puppy-view';
export default class App {

  constructor(world) {
    this.world = world;
    this.data = [];

    const puppyList = world.querySelector('.add-puppy__form');
    this.puppyView = new PuppyView(puppyList);
  }

  start() {
    this.getData()
    .then(() => {
      this.render();
    });
  }

  getData(){
    return fetch('http://tiny-tn.herokuapp.com/collections/ryan-puppy')
    .then((res) => res.json())
    .then((data) => {
      this.data = data;
    });
  }

  render(){
    this.puppyView.setData(this.data);
    this.puppyView.render();
  }
}
