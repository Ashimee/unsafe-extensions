/*
* v1.0 | Created by @0znzw.
* Concept by SharkPool || Original non functional version by GPT-3.
* THIS EXTENSION WAS MINE, I LET SHARKPOOL USE IT, I WAS NOT CREDITED PROPERLY
* Do not remove this comment
*/
(function (Scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) {
        throw new Error('Sound To DataURI must be run unsandboxed');
    }

    class SoundToDataUrl {
        getInfo() {
            return {
                id: '0znzwsoundDataUrl',
                color1: "#009dff",
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