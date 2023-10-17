(function(Scratch) {
    'use strict';
    class site_placeholder {
      getInfo() {
        return {
          id: 'thrdTest',
          name: '...args',
          blocks: [
            {
              blockType: Scratch.BlockType.COMMAND,
              opcode: 'thrdJS',
              text: 'run js (w/util) [js]',
              arguments: {js:{type:Scratch.ArgumentType.STRING,defaultValue:'console.log(util)'}}
            }
          ]
        };
      }
      thrdJS(args, util) {
        eval(args.js);
      }
    }
    Scratch.extensions.register(new site_placeholder());
  })(Scratch);