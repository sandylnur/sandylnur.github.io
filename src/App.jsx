import m from "mithril";
import RouterView from "./router/RouterView";

function App() {
    return {
        view: () => (
            <main class="content-wrapper">
                <nav>
                    <m.route.Link href="/">Home</m.route.Link>
                    <m.route.Link href="/projects">Projects</m.route.Link>
                    <m.route.Link href="/blog">Blog</m.route.Link>
                    <m.route.Link href="/contact-me">Contact Me</m.route.Link>
                </nav>

                <RouterView />
            </main>
        ),
    };
}

export default App;
