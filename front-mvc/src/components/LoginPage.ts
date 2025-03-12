import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import "@material/web/textfield/filled-text-field.js";

@customElement("login-page")
export class LoginPage extends LitElement {
    static styles = css`
        .login-box {
            position: absolute;
            top: 0;
            left: 0;

            width: 100vw;
            height: 100vh;

            background: url("/img/loginBgImg.jpg");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;

            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        .login-widget {
            width: 30vw;
            height: 60vh;

            min-width: 500px;

            background-color: #ffffff88;
            border-radius: 2rem;

            box-shadow: #9e9e9e 0.1rem 0.1rem 1rem;
            backdrop-filter: blur(3px);
        }
    `;

    @property()
    name?: string = "World";

    render() {
        return html`<div class="login-box">
            <div class="login-widget">
                <h1>登录页面</h1>

                <md-outlined-text-field label="Label" value="Value">
                </md-outlined-text-field>
            </div>
        </div>`;
    }
}
