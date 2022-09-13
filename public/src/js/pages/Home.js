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
                You are viewing the Home page from view Controller
            </header>
        </section>
        <h5>Welcome to web workers</h5>
        <form >
            <div class="input-group">
                <input type="text" name="first-name" id="first-name" placeholder="First Name">
            </div>
            <div class="input-group">
                <input type="text" name="second-name" id="second-name" placeholder="Second Name">
            </div>
            <button type="submit">Submit</button>
        </form>
        <form >
            <div class="input-group">
                <input type="text" name="first-name" id="first-name" placeholder="First Name">
            </div>
            <div class="input-group">
                <input type="text" name="second-name" id="second-name" placeholder="Second Name">
            </div>
            <button type="submit">Submit</button>
        </form>
        <div class="result"></div>
        <div id="kind"></div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Earum eaque aut eum, voluptates ab perspiciatis fuga quidem autem inventore 
        reprehenderit molestiae impedit quae necessitatibus mollitia, 
        non quaerat vero dolorem veniam iste beatae nulla id odio 
        exercitationem praesentium. Cumque dolores debitis fugiat 
        deleniti minima blanditiis nostrum ea quam sequi. Commodi, 
        placeat modi. Ipsum laboriosam consectetur maiores aut, 
        laborum corrupti saepe! Ab, eveniet porro. Veritatis 
        neque molestiae quia dolor est. Vel, voluptate corrupti 
        facere illo aliquid minima possimus quidem cumque laboriosam 
        esse unde in dignissimos doloribus, reprehenderit rem excepturi 
        quasi voluptatum magni nam laborum explicabo libero. Provident 
        quia blanditiis architecto voluptatem iure? Tempora corrupti debitis 
        esse quidem. Similique veritatis eaque quas facilis sequi adipisci 
        perspiciatis fuga vitae, quibusdam suscipit ipsum quidem provident, 
        ab reiciendis id amet fugit iure veniam sint sed! Nesciunt, quas alias, 
        earum dignissimos asperiores blanditiis repudiandae et itaque quia cumque 
        quaerat a, quos enim numquam inventore accusantium architecto ipsa 
        ducimus hic soluta iste voluptates velit tenetur. Beatae quibusdam 
        corporis voluptatibus voluptatum. Rem nam voluptate quaerat tempora 
        consequatur labore neque iusto vel debitis eius soluta accusamus
         architecto expedita id, perferendis tenetur, corporis ullam excepturi 
         error, atque cupiditate et? Aliquid impedit facere alias quia explicabo 
         quae accusamus labore magni animi commodi deleniti nisi, quod sint 
         cupiditate expedita id fugiat facilis est repudiandae? Facere beatae 
         maxime impedit obcaecati culpa quasi quo provident ullam. Dolorum 
         earum repellendus deserunt mollitia. Ratione aut praesentium quod? 
         Sequi quis quas natus omnis eum odio alias fuga saepe quam consequuntur 
         fugiat et minus perferendis fugit cupiditate consequatur mollitia expedita 
         enim porro, hic nam possimus voluptate laboriosam sed? Maxime delectus 
         explicabo, quia fugit beatae quidem expedita? Perferendis cum odit 
         repellendus laborum totam, tenetur blanditiis 
        `;
    }
}