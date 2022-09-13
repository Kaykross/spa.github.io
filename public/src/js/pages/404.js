import Main from "./Main.js";

export default class extends Main{
    constructor(){
        super();
        this.setTitle(document.title);
    }
    async getHtml(){
        return `
        <section>
            <header class="header">
                You are viewing the 404 page from view Controller
            </header>
            <a href="/" class="nav-link">Go Home</a>
        </section>
        `;
    }
}