import { WFMComponent } from "../../framework/index2";

export class RegFormComponent extends WFMComponent{
  constructor(config:{selector: string, template: string}) {
    super(config);
  }
}

export const regForm = new RegFormComponent({
selector: "main",
template: `
<div class="modal">
  <div class="modal__dialog">
    <div class="modal__content">
      <form action="#">
        <div class="modal__close" data-close>&times;</div>
        <div class="modal__title">Мы свяжемся с вами как можно быстрее!</div>
        <input required placeholder="Ваше имя" name="name" type="text" class="modal__input">
        <input required placeholder="Ваш номер телефона" name="phone" type="phone" class="modal__input">
        <button class="btn btn_dark btn_min">Перезвонить мне</button>
      </form>
    </div>
  </div>
</div>
`
});
