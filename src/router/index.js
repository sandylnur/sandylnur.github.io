import m from "mithril";
import Home from "../views/HomeView";
import About from "../views/AboutView";

const routes = {
    "/": Home,
    "/about": About,
};

const router = () => {
    m.route.prefix = "";
    m.route(document.getElementById("router-view"), "/", routes);
};

export default router;