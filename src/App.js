import m from "mithril";
import Home from "./components/Home";

const App = {
    view: function () {
        return m("div", { class: "app-container" }, [
            m("header", [m("h1", "Welcome to the Mithril + Vite App")]),
            m(Home),
        ]);
    },
};

export default App;
