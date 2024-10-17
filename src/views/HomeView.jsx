import m from "mithril";
import Keycap from "../components/Keycap.jsx";

let themeToggle = false;

function toggleTheme() {
    themeToggle = !themeToggle;
}

function HomeView() {
    return {
        // oninit: () => {
        //     setTimeout(() => {
        //         const keycapElement = document.querySelector(".keycap");
        //         if (keycapElement) {
        //             keycapElement.click();
        //         }
        //     }, 0);
        // },
        view: () => (
            <main class="intro-hero">
                <div class="hero-left">
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
                    <div id="keyboard">
                        <div class="keyboard-row">
                            <Keycap backlight={themeToggle} character="&" />
                            <Keycap backlight={themeToggle} character="*" />
                            <Keycap backlight={themeToggle} character="(" />
                            <Keycap backlight={themeToggle} character=")" />
                            <Keycap backlight={themeToggle} character="fix me" customWidth={["7.936rem", "7.200rem"]}/>
                            <Keycap backlight={themeToggle} character="L" />
                        </div>
                        <div class="keyboard-row">
                            <Keycap backlight={themeToggle} character="I" />
                            <Keycap backlight={themeToggle} character="O" />
                            <Keycap backlight={themeToggle} character="P" />
                            <Keycap backlight={themeToggle} character="{" />
                            <Keycap backlight={themeToggle} character="}" />
                            <Keycap backlight={themeToggle} character="|" customWidth={["5.777rem", "5.041rem"]} />
                            <Keycap backlight={themeToggle} character="page down" textKey="" />
                        </div>
                        <div class="keyboard-row">
                            <Keycap backlight={themeToggle} character="J" />
                            <Keycap backlight={themeToggle} character="K" />
                            <Keycap backlight={themeToggle} character="L" />
                            <Keycap backlight={themeToggle} character="I" />
                            <Keycap backlight={themeToggle} character=";" />
                            <Keycap backlight={themeToggle} character="commit" customWidth={["9.103rem", "8.367rem"]} />
                            <Keycap backlight={themeToggle} character="home" specificKey="" />
                        </div>
                        <div class="keyboard-row">
                            <Keycap backlight={themeToggle} character="N" />
                            <Keycap backlight={themeToggle} character="M" />
                            <Keycap backlight={themeToggle} character="<" />
                            <Keycap backlight={themeToggle} character=">" />
                            <Keycap backlight={themeToggle} character="/" />
                            <Keycap backlight={themeToggle} character="format" customWidth={["6.886rem", "6.15rem"]} />
                            <Keycap backlight={themeToggle} character="&#708;" />
                            <Keycap backlight={themeToggle} character="end" specificKey="" />
                        </div>
                        <div class="keyboard-row">
                            <Keycap backlight={themeToggle} character="alt" specificKey="" />
                            <Keycap backlight={themeToggle} character="fn" specificKey="" />
                            <Keycap backlight={themeToggle} character="ctrl" specificKey="" />
                            <Keycap backlight={themeToggle} character="&#706;" />
                            <Keycap backlight={themeToggle} character="&#709;" />
                            <Keycap backlight={themeToggle} character="&#707;" />
                        </div>
                    </div>
                </div>
            </main>
        ),
    };
}

export default HomeView;
