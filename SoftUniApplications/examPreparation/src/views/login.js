import { html } from '../../node_modules/lit-html/lit-html.js';

// recplace with actual view
const loginTemplate = () => html`
<h1>Login Page</h1>
<form>
    <labe>Email: <input type="text" name="email"></label>
    <label>Password: <input type="password" name="password"></label>
    <button>Login</button>
</form>`;

export function loginPage(ctx) {
    ctx.render(loginTemplate());

    async function onLogin(data) {
        
    }
}