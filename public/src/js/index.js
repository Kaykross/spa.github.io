import registerServiceWorker from "/src/js/registerWorker.js";
import Home from "./pages/Home.js";
import Dashboard from "./pages/Dashboard.js";
import About from "./pages/About.js";
import Blogs from "./pages/Blogs.js";
import PageNotFound from "./pages/404.js";

console.log( new Dashboard());

registerServiceWorker();

console.log("fired from index.js");

const navigateRoute = (url) =>{
    history.pushState(null,null,url);
    router();

};

const router = async() =>{
    const routes = [
        {path:"/",view:()=> new Home()},
        {path:"/dashboard",view:()=> new Dashboard()},
        {path:"/blogs",view:()=> new Blogs()},
        {path:"/about",view:()=> new About()},
        {path:"/404",view:()=> new PageNotFound()},
    ];

    const route = routes.map(route=>{
        return{
            route,
            isRoute :location.pathname === route.path
        };
    });
    let validRoute = route.find(route=>route.isRoute);
    if(!validRoute){
        validRoute = {
            route: routes.filter(i=>i.path == '/404')[0],
            isRoute: true
        };
    }
    const view = validRoute.route.view();
    document.querySelector('.content').innerHTML = await view.getHtml();
    console.log( await view.getHtml());
};

window.addEventListener('popstate',router);
document.addEventListener("DOMContentLoaded",e=>{
    document.body.addEventListener('click',e=>{
        if(e.target.matches('[class="nav-link"]')){
            console.log('fired link');
            e.preventDefault();
            navigateRoute(e.target.href);
        }
    });
    router();
});

