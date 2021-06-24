import { WFMComponent } from '../../framework/index2';

export class BestScorePageComponent extends WFMComponent {
  constructor(config: { selector: string; template: string }) {
    super(config);
  }
}

export const bestScorePageComponent = new BestScorePageComponent({
  selector: 'main',
  template: `
  <h2>Best score</h2>
    <div class="score">
      <div class="score__item">
        <div class="score__player">
          <img src="" alt="avatar" class="score__ava">
          <div class="score__player-credits">Nicci Troiani<br><span>nicci@gmail.com</span></div>
        </div>
        <div class="score__points">score: <span>475</span> </div>
      </div>
      <div class="score__item">
        <div class="score__player">
          <img src="" alt="avatar" class="score__ava">
          <div class="score__player-credits">Nicci Troiani<br><span>nicci@gmail.com</span></div>
        </div>
        <div class="score__points">score: <span>475</span> </div>
      </div>
      <div class="score__item">
        <div class="score__player">
          <img src="" alt="avatar" class="score__ava">
          <div class="score__player-credits">Nicci Troiani<br><span>nicci@gmail.com</span></div>
        </div>
        <div class="score__points">score: <span>475</span> </div>
      </div>
      <div class="score__item">
        <div class="score__player">
          <img src="" alt="avatar" class="score__ava">
          <div class="score__player-credits">Nicci Troiani<br><span>nicci@gmail.com</span></div>
        </div>
        <div class="score__points">score: <span>475</span> </div>
      </div>
    </div>
  `,
});
