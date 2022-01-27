class GameboyOptionButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: 30px;
        --height: 12px;
      }

      .container {
          background: linear-gradient(to top, #000000, #454545);
          box-shadow:
            -4px 4px 3px -3px #0005 inset,
            4px -4px 3px -3px #fffc inset;
          border-radius: 15px;
          padding: 1px 0;
      }

      .button {
        background: #9e9baf;
        background-image: linear-gradient(#000000, #454545);
        border-radius: 10px;
        box-shadow:
          -2px -2px 5px #0004 inset,
          2px 2px 5px #fff3 inset,
          2px 2px 6px #0007,
          -1px 2px 3px #000d;
        width: var(--width);
        height: var(--height);
        margin: 2px 6px;
      }

      .label {
        font-family: "Pretendo";
        font-size: 10px;
        letter-spacing: 0.5px;
        color: #302058;
        transform: translate(10px, 2px) rotate(0deg);
        text-align: center;
      }
    `;
  }

  connectedCallback() {
    this.name = this.getAttribute("name");
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${GameboyOptionButton.styles}</style>
    <div class="container">
      <div class="button"></div>
    </div>
    <div class="label">${this.name}</div>
    `;
  }
}

customElements.define("gameboy-option-button", GameboyOptionButton);
