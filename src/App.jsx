import m from "mithril";
import RouterView from "./router/RouterView";

function App() {
    return {
        view: () => (
            <main>
                <nav>
                    <m.route.Link href="/">Home</m.route.Link>
                    <m.route.Link href="/about">About</m.route.Link>
                </nav>

                <RouterView />
            </main>
        ),
    };
}

export default App;
