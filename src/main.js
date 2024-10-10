import m from "mithril";
import App from "./App";
import router from "./router";

m.mount(document.getElementById("app"), {
    oncreate: router(),
    view: () => m(App),
});