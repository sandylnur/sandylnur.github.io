import m from "mithril";
import Home from "./views/Home";
import About from "./views/About";

function App() {
    return {
        view: () => (
            <div class="app-container" id="app-container">
                <header>
                    <h1>Welcome to the Mithril + Vite App</h1>
                </header>
                <Home />
                <About />
            </div>
        )
    };
}

export default App;
