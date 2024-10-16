import m from "mithril";
import Keycap from "../components/keycaps/Keycap.jsx";

let themeToggle = false;

function toggleTheme() {
    themeToggle = !themeToggle;
}

function HomeView() {
    return {
        view: () => (
            <main class="intro-hero">
                <div className="hero-left">
                    <h1>Hi, I'm Sandyl,</h1>
                    <h2>@ backend developer</h2>
                    <p>
                        My journey began in frontend development, where I gained a foundational understanding of how
                        users interact with applications. As I progressed, I became fascinated by the complex systems
                        that run behind the scenes and how they support frontend functionality, which led me to
                        specialize in backend technologies. <br />
                        <br />
                        In my free time, I enjoy tinkering with microcontrollers for home automation projects and
                        designing 3D elements that I bring to life through 3D printing. I love using my skills to solve
                        problems and create practical solutions.
                    </p>
                </div>
                <div class="hero-right">
                    <Keycap backlight={themeToggle} character="A" onclick={toggleTheme} />
                </div>
            </main>
        ),
    };
}

export default HomeView;
