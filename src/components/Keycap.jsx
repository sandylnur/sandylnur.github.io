import m from "mithril";
import keycapSound from "../assets/audio/single-key-clack.wav";

/**
 * Keycap component that represents a key on a keyboard.
 * 
 * @component
 * 
 * @example
 * <Keycap 
 *   customWidth={["100px", "90px"]} 
 *   disableSound={false} 
 *   backlight={true} 
 *   programmaticActive={false} 
 *   character="A" 
 *   onclick={() => console.log('Key pressed')} 
 * />
 * 
 * @param {Object} attrs - Attributes passed to the component.
 * @param {Array} attrs.customWidth - Array containing the widths for background and foreground.
 * @param {boolean} attrs.disableSound - Flag to disable the key sound.
 * @param {boolean} attrs.backlight - Flag to enable or disable the backlight.
 * @param {boolean} attrs.programmaticActive - Flag to programmatically activate the key.
 * @param {string} attrs.character - Character to display on the keycap.
 * @param {Function} attrs.onclick - Function to call when the keycap is clicked.
 * 
 * @returns {Object} Mithril component object with `oninit` and `view` methods.
 */
function Keycap() {
    let audio;
    let widthBackground, widthForeground;
    let isActive = false;

    const activateKey = () => {
        isActive = true;
        m.redraw();
    };

    const deactivateKey = () => {
        setTimeout(() => {
            isActive = false;
            m.redraw();
        }, 150);
    };

    const handleMouseDown = (attrs) => {
        if (!attrs.disableSound) {
            audio.play();
        }
        activateKey();
    };

    const handleMouseUp = () => {
        deactivateKey();
    };

    const handleClick = (attrs) => {
        if (attrs.onclick) {
            attrs.onclick();
        }
    };

    return {
        oninit: ({ attrs }) => {
            audio = new Audio(keycapSound);

            if (Array.isArray(attrs.customWidth)) {
                widthBackground = `width: ${attrs.customWidth[0]};`;
                widthForeground = `width: ${attrs.customWidth[1]};`;
            }
        },

        view: ({ attrs }) => {
            if (attrs.programmaticActive && !isActive) {
                activateKey();
                deactivateKey();
            }

            return (
                <div
                    class={`keycap-background ${attrs.backlight ? "keycap-backlight-on" : "keycap-backlight-off"} ${isActive ? 'keycap-active' : ''} ${widthBackground ? "keycap-wide-background" : ""}`}
                    style={widthBackground}
                    onmousedown={() => handleMouseDown(attrs)}
                    onmouseup={handleMouseUp}
                    onmouseleave={handleMouseUp}
                    onclick={() => handleClick(attrs)}
                >
                    <div class={`keycap-foreground ${isActive ? 'keycap-active' : ''}`} style={widthForeground}>
                        <h7 class={`keycap-font ${attrs.smallFont ? "keycap-font-small" : ""}`}>{attrs.setAltKey ? attrs.altCharacter : attrs.character }</h7>
                    </div>
                </div>
            );
        },
    };
}

export default Keycap;
