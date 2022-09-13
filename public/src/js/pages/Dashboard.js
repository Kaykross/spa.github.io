import Main from "./Main.js";

export default class extends Main {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }
    async getHtml() {
        return `
        <section>
            <header class="header">
                You are viewing the Dashboard page from view Controller
            </header>
        </section>
        `;
    }

    async res(){
        const resp = await fetch('http://localhost:4050/src/pages/files/dashboard.see');
        const res = await resp.text();
        console.log(res);
    }
}