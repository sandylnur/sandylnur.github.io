import m from "mithril";

const Home = {
    view: function () {
        return m("div", { class: "home" }, [
            m("h2", "Home Page"),
            m("p", "This is the home page of your Mithril + Vite project."),
        ]);
    },
};

export default Home;
