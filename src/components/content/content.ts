import {BaseComponent} from '../baseComponent'

export class PageContent extends BaseComponent {
  constructor(){
    super('main');
    this.element.innerHTML=`
    <h2>How to play?</h2>
    <ul class="about-game">
      <li>
        <div class="about-game__item">
          <div class = "about-game__circle">1</div>
          <div class="about-game__text">Register new player in game</div>
        </div>
        <img src="./about-form.jpg" alt="about-form" class="about-game__img">
      </li>
      <li>
        <div class="about-game__item">
          <div class="about-game__circle">2</div>
          <div class="about-game__text">Configure your game settings</div>
        </div>
        <div class="about-game__setting">
          <img src="./svg/settings.svg" class="nav-list__img">
          <div class="nav-list__label">Game settings</div>
        </div>
      </li>
      <li>
        <div class="about-game__item">
          <div class="about-game__circle">3</div>
          <div class="about-game__text">Start you new game! Remember card positions and match it before times up.</div>
        </div>
        <img src="./about-game-view.jpg" alt="" class="about-game__img">
      </li>
    </ul>
    `

  }
}
