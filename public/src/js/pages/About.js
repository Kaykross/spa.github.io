import Main from "./Main.js";

export default class extends Main{
    constructor(){
        super();
        this.setTitle("About");
    }
    async getHtml(){
        return `
        <section>
            <header class="header">
                You are viewing the About page from view Controller
            </header>
        </section>
        `;
    }
}