import { WFMComponent } from "../../framework/index2";

export class SetPageComponent extends WFMComponent {
  constructor(config: { selector: string; template: string }) {
    super(config);
  }
}

export const setPageComponent  = new SetPageComponent({
  selector: 'main',
  template: `
  <h2>Game settings</h2>
    <form action="#" class='game-settings'>
      <ul class="set">
        <li>
          <div class="set__label">
            <label for="cards-type">Game cards</label>
          </div>
          <div class="cards__type">
            <select id="cards-type" name="phone">
              <option value="var1">variant1</option>
              <option value="var2">variant2</option>
            </select>
          </div>
        </li>
        <li>
          <div class="set__label">
            <label for="difficulty">Difficulty</label></div>
          <div class="game__diff"><select id="difficulty" name="phone">
            <option value="easy">Easy (4x4)</option>
            <option value="normal">Normal (6x6)</option>
            <option value="hard">Hard (8x8)</option></div>


        </li>
      </ul>
      </select>
    </form>
  `
}
);
