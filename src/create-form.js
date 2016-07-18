export default class CreateFormView {

toggle(){
  const addPuppyButton = document.querySelector('.puppy__plus');
  const addPuppyForm = document.querySelector('.add-puppy');

  addPuppyButton.addEventListener('click',onClick);

  function onClick(){
  addPuppyForm.classList.toggle('add-puppy__toggle');

  };
}

}
