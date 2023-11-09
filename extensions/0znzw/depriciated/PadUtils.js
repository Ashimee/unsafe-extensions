(function(Scratch) {
    'use strict';
    class padutils {
      constructor() {
        this.SEND_MENU = ['start', 'end'];
      }
      getInfo() {
        return {
          id: '0znzwPadUtils',
          name: 'Padding utils',
          /* start blocks */
          blocks: [
            {
              opcode: 'addPadding',
              blockType: Scratch.BlockType.REPORTER,
              text: 'add padding to [TEXT] with character [CHAR] to length [LEN] at [SEND]',
              arguments: {
                TEXT: { defaultValue: 'aGk',   type: Scratch.ArgumentType.STRING },
                CHAR: { defaultValue: '=',     type: Scratch.ArgumentType.STRING },
                LEN:  { defaultValue: 4,       type: Scratch.ArgumentType.NUMBER },
                SEND: { defaultValue: 'end', type: Scratch.ArgumentType.STRING, menu: 'SEND' },
              }
            }
          ], /* end blocks and start menus */
          menus: {
            SEND: { acceptReporters: true, items: this.SEND_MENU }
          }
          /* end menus */
        };
      }
      /* start code */
      addPadding({ TEXT, CHAR, LEN, SEND }) {
        TEXT = Scratch.Cast.toString(TEXT);
        CHAR = Scratch.Cast.toString(CHAR);
        LEN = Scratch.Cast.toNumber(LEN);
        SEND = Scratch.Cast.toString(SEND);
        if (!this.SEND_MENU.includes(SEND)) SEND = 'start';
        switch(SEND) {
          case 'start':
            TEXT = TEXT.padStart(LEN, CHAR);
          case 'end':
            TEXT = TEXT.padEnd(LEN, CHAR);
        }
        return TEXT;
      }
      /* end code */
    }
    Scratch.extensions.register(new padutils());
  })(Scratch);