import m from "mithril";
import Home from "../views/HomeView";
import ProjectsView from "../views/ProjectsView";
import BlogView from "../views/BlogView";
import ContactMeView from "../views/ContactMeView";

const routes = {
    "/": Home,
    "/projects": ProjectsView,
    "/blog": BlogView,
    "/contact-me": ContactMeView,
};

function router() {
    m.route.prefix = "";
    window.onload = () => {
        m.route(document.getElementById("router-view"), "/", routes);
    };
}

export default router;
