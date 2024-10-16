import m from "mithril";
import keycapSound from "../../assets/audio/single-key-clack.wav";

/**
 * Keycap component that represents a single key on a keyboard.
 *
 * @component
 *
 * @example
 * <Keycap
 *   character="A"
 *   backlight={true}
 *   disableSound={false}
 *   onclick={() => console.log('Key pressed')}
 * />
 *
 * @param {Object} attrs - Attributes passed to the component.
 * @param {string} attrs.character - The character displayed on the keycap.
 * @param {boolean} attrs.backlight - Determines if the keycap backlight is on or off.
 * @param {boolean} attrs.disableSound - If true, disables the key press sound.
 * @param {Function} attrs.onclick - Function to call when the keycap is clicked.
 *
 * @returns {Object} The Keycap component.
 */
function Keycap() {
    let audio;

    return {
        oninit: () => {
            audio = new Audio(keycapSound);
        },

        view: ({ attrs }) => {
            const handleClick = () => {
                if (!attrs.disableSound) {
                    audio.play();
                }
                attrs.onclick();
            };

            return (
                <div
                    class={`keycap-background ${attrs.backlight ? "keycap-backlight-on" : "keycap-backlight-off"}`}
                    onclick={handleClick}
                >
                    <div class="keycap-foreground">
                        <h7 class="keycap-font">{attrs.character}</h7>
                    </div>
                </div>
            );
        },
    };
}

export default Keycap;
