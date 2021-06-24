import { WFMComponent } from "../../framework/index2";

export class NewPlayerBtnComponent extends WFMComponent {
  constructor(config: { selector: string, template: string }) {
    super(config);

  }
  afterInit():void {
    const newPlayerBtn = document.querySelector(".register");
    if (newPlayerBtn) {newPlayerBtn.addEventListener('click', newPlayerButton.initNewPlayerForm)}
    if (newPlayerBtn) {newPlayerBtn.addEventListener('click', this.initNewPlayerForm)}
  }

  initNewPlayerForm():void {
    const playerForm = document.querySelector(".modal");
    if (playerForm) playerForm.classList.toggle('show');
  }




}

export const newPlayerButton = new NewPlayerBtnComponent({
  selector: 'btn',
  template: `
    <div class="register">
      <div class="register__btn">register new player</div>
      <img src="./acc-icon.png" alt="avatar" class="register__img">
    </div>
    `});
