/*
  Created by 0znzw | v1.0
  Licensed Under MIT License.
  DO NOT REMOVE THIS COMMENT!!
*/
(function(Scratch) {
    'use strict';
    class base64ext {
      getInfo() {
        return {
          id: '0znzwAdvancedBase64',
          name: 'Better Base64',
          blocks: [
            {
              blockType: Scratch.BlockType.BOOLEAN,
              opcode: 'can_use_api',
              text: 'packaged-base64 api avalible?'
            },
            {
              blockType: Scratch.BlockType.REPORTER,
              opcode: 'encode',
              text: 'encode [DATA] to base64',
              arguments: {
                DATA: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'TurboWarp' 
                }
              }
            },
            {
              blockType: Scratch.BlockType.REPORTER,
              opcode: 'decode',
              text: 'decode [DATA] from base64',
              arguments: {
                DATA: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'VHVyYm9XYXJw' 
                }
              }
            },
          ]
        };
      }
      can_use_api() {
        try { Base64 && 1 } catch { return false };
        return true;
      }
      encode({ DATA }) {
        DATA = Scratch.Cast.toString(DATA);
        return Base64.encode(DATA);
      }
      decode({ DATA }) {
        DATA = Scratch.Cast.toString(DATA);
        return Base64.decode(DATA);
      }
    }
    Scratch.extensions.register(new base64ext());
  })(Scratch);