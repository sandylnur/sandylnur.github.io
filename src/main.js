import m from "mithril";
import Counter from "./App";
import router from "./router";
import "./assets/styles/styles.css";

m.mount(document.getElementById("app"), {
    oncreate: router(),
    view: () => m(Counter),
});