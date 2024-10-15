import m from "mithril";
import RouterView from "./router/RouterView";
import Header from "./components/Header";

function App() {
    return {
        view: () => (
            <main class="content-wrapper">
                <Header />

                <RouterView />
            </main>
        ),
    };
}

export default App;
