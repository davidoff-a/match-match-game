import { WFMComponent } from "../../framework/index2";

export class AppHeader extends WFMComponent {

  constructor(config: { selector: string, template: string}) {
    super(config);
  }

}


export const appHeader = new AppHeader({
  selector: 'header',
  template: `
    <ul class="logo">
      <li>match</li>
      <li class="logo_white">match</li>
    </ul>
    <div class="container">
      <nav class="nav-menu">
        <div class='nav-menu__item nav-menu__item_active'>
          <a href="./#about">
            <img src="./svg/about.svg" class="nav-list__img">
            <div class="nav-menu__label">About Game</div>
          </a>
        </div>
        <div class='nav-menu__item'>
          <a href="./#best-score">
            <img src="./svg/best-score.svg" class="nav-list__img" >
            <div class="nav-list__label">Best Score</div>
          </a>
        </div>
        <div class='nav-menu__item'>
          <a href="./#settings">
            <img src="./svg/settings.svg" class="nav-list__img">
            <div class="nav-menu__label">Game settings</div>
          </a>
        </div>
      </nav>
    </div>
    <btn></btn>
    <modal-form></modal-form>
  `,
});
