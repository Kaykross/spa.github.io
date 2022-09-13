import Main from "./Main.js";

export default class extends Main{
    constructor(){
        super();
        this.setTitle("Dashboard");
    }
    async getHtml(){
        return `
        <section>
            <header class="header">
                You are viewing the Blogs page from view Controller
            </header>
        </section>
        `;
    }
}