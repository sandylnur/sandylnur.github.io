import m from "mithril";
import Keycap from "../components/Keycap.jsx";

let blState = false;
let altKeyToggle = false;

function toggleBacklight() {
    blState = !blState;
}

function toggleAltKey() {
    altKeyToggle = !altKeyToggle;
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
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="&" altCharacter="!" />
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="*" altCharacter="@" />
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="(" altCharacter="#" />
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character=")" altCharacter="$" />
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="fix me" altCharacter="debug" customWidth={["7.936rem", "7.200rem"]} smallFont={true}/>
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="L" altCharacter="esc" smallFont={true}/>
                        </div>
                        <div class="keyboard-row">
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="I" altCharacter="Q" />
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="O" altCharacter="W" />
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="P" altCharacter="E" />
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="{" altCharacter="R" />
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="}" altCharacter="T" />
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="|" altCharacter="pipe" customWidth={["5.777rem", "5.041rem"]} smallFont={true}/>
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="init" altCharacter="loop" textKey="" smallFont={true}/>
                        </div>
                        <div class="keyboard-row">
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="J" altCharacter="A" />
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="K" altCharacter="S" />
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="L" altCharacter="D" />
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="I" altCharacter="F" />
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character=";" altCharacter="H" />
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="commit" altCharacter="push" customWidth={["9.103rem", "8.367rem"]} smallFont={true}/>
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="hash" altCharacter="start" smallFont={true}/>
                        </div>
                        <div class="keyboard-row">
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="N" altCharacter="Z" />
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="M" altCharacter="X" />
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="<" altCharacter="C" />
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character=">" altCharacter="V" />
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="/" altCharacter="B" />
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="format" altCharacter="align" customWidth={["6.886rem", "6.15rem"]} smallFont={true}/>
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="&#708;" altCharacter="&#708;" />
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="end" altCharacter="null" smallFont={true}/>
                        </div>
                        <div class="keyboard-row">
                            <Keycap onclick={toggleAltKey} setAltKey={altKeyToggle} backlight={blState} character="MO" altCharacter="MO" smallFont={true}/>
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="fn" altCharacter="super" smallFont={true}/>
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="ctrl" altCharacter="ctrl" smallFont={true}/>
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="<" altCharacter="<" />
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character="&#709;" altCharacter="&#709;" />
                            <Keycap setAltKey={altKeyToggle} backlight={blState} character=">" altCharacter=">" />
                        </div>
                    </div>
                </div>
            </main>
        ),
    };
}

export default HomeView;
