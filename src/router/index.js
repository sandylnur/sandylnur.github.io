import m from "mithril";
import Home from "../views/HomeView";
import ProjectsView from "../views/ProjectsView";
import BlogView from "../views/BlogView";

const routes = {
    "/": Home,
    "/projects": ProjectsView,
    "/blog": BlogView
};

function router() {
    m.route.prefix = "";
    window.onload = () => {
        m.route(document.getElementById("router-view"), "/", routes);
    };
}

export default router;
