/*
 * 
 * 
 * v1.1 | Created by @0znzw.
 * Bruh this is perfect code stfu
 * 
* Do not remove this comment
*/
(function (Scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) {
        throw new Error('Sound To DataURI must be run unsandboxed');
    }

    function getCategoryColor(category_id) {
        const bubble = document.querySelector(`.scratchCategoryId-${category_id} .scratchCategoryItemBubble`);  
        const styles = window.getComputedStyle(bubble);
        const backgroundColor = styles.backgroundColor;
        const borderColor = styles.borderColor;
        function rgbToHex(rgb) {
            const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            if (match) {
                return "#" + match.slice(1).map(x => parseInt(x).toString(16).padStart(2, '0')).join('');
            }
            return rgb;
        }
        return {color1: rgbToHex(backgroundColor), color2: rgbToHex(borderColor)};
    }

    class SoundToDataUrl {
        getInfo() {
            return {
                id: '0znzwsoundDataUrl',
                color1: getCategoryColor('sound').color1,
                color2: getCategoryColor('sound').color2,
                name: "Sound to Data URL",
                blocks: [{
                    opcode: 'soundToDataUrl',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'convert sound [SOUND] to data URL',
                    arguments: {
                        SOUND: {
                            type: Scratch.ArgumentType.SOUND
                        }
                    }
                }]
            };
        }

        soundToDataUrl(args, util) {
            const index = this._getSoundIndex(args.SOUND, util);
            if (index < 0) return '';
            const sprite = util.target.sprite;
            const dataUrl = sprite.sounds[index].asset.encodeDataURI();
            return dataUrl;
        }

        _getSoundIndex(soundName, util) {
            const sounds = util.target.sprite.sounds;
            return sounds.indexOf(sounds.filter((sound) => {
                return sound.name == soundName;
            })[0]);
        }
    }

    Scratch.extensions.register(new SoundToDataUrl());
})(Scratch);