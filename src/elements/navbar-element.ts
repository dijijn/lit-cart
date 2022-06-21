import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('navbar')
export class NavBar extends LitElement {
  render() {
    return html`
  
      <div>
        <p>home</p>
        <input>Faça sua busca aqui</input>
        <p>minha conta</p>
      </div>

    `;
  }

  static styles = css`
  
    host:{
      width: 100%;
      height: 20px;
    }

  `;
}
