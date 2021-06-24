import { WFMComponent } from "../../framework/index2";
import { AppHeader } from "./app.header";
import { newPlayerButton } from "./newPlayerBtn";

export class AppRegFormComponent extends WFMComponent {
  constructor(config: { selector: string, template: string }) {
    super(config);
  }
  afterInit(){
    const playerFormClose = document.querySelector('.modal__close');
    if (playerFormClose) playerFormClose.addEventListener('click', newPlayerButton.initNewPlayerForm);

  }

  // checkFields(){
  //   const fName = document.queryselector("#fname");
  //   const lName = document.queryselector("#lname");
  //   const eMail = document.queryselector("#email");
  //   fName.addEventListener("input", ()=>(console.log(fName)));
  //   lName.addEventListener("input", ()=>(console.log(lName)));
  //   console.log(fName);
  //   console.log(lName);
  //   // eMail.addEventListener("input", this.checkEmail);
  // }

  // checkText(elem: HTMLElement, param: string){
  //   const regExpValues = {
  //     'text': "/[a-z]+/gi",
  //     'email': "/[a-z]+/gi"
  //   };
  //   console.log(elem);
  //   console.log(regExpValues);
  // }

  // isValidValue(el: HTMLElement, param: string){

  //   console.log(el.value);

  // }
}
export const appRegForm = new AppRegFormComponent({
  selector: 'modal-form',
  template: `
    <div class="modal">
      <div class="modal__dialog">
        <div class="modal__content">
          <form action="#">
            <div class="modal__close" data-close>&times;</div>
            <div class="modal__title">Register new Player</div>
            <input required placeholder="First name" name="f_name" type="text" class="modal__input" id="fname">
            <input required placeholder="Last name" name="l_name" type="text" class="modal__input" id="lname">
            <input required placeholder="Your email" name="email" type="email" class="modal__input" id="email">
            <button class="btn btn_dark btn_min">Add user</button>
            <button class="btn btn_dark btn_min">Cancel</button>
          </form>
        </div>
      </div>
  `,
});
