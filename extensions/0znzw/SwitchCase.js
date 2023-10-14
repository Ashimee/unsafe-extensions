/*
* Switch-Case extension v1.3b by 0znzw (English Version)
* All code is by 0znzw || licensed under MIT license.
* IF YOU USE THE SWITCH CASE CODE PLEASE PROVIDE CREDIT!!
* Do not remove this comment
*/try{
  (function(Scratch) {
    'use strict';

    // sadly this function can error :( so if it does it just returns all black (this can break packaged projects if it does not return a color)
    function getCategoryColor(category_id) {
        try {
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
        return {color1: rgbToHex(backgroundColor), color2: rgbToHex(borderColor)};}catch(err){
            return {color1: '#000000', color2: '#000000', color3: '#000000'};
        }
    }

    function getBlockByID(target, id) {
          return(target.blocks._blocks[id]);
    }

    function setBlockByID(target, id, JSON) {
          target.blocks._blocks[id] = JSON;
    }

    function getOuterBlockID(target, startBlockID) {
      let block = getBlockByID(target, startBlockID);

      while(block.parent != null && getBlockByID(target, block.parent).next) {
        block = getBlockByID(target, block.parent);
      }

      if (block.parent) block = getBlockByID(target, block.parent);
      return block;
    }

    function genLabelXML(text) {
      text = text.replaceAll('\\', '\\\\');
      text = text.replaceAll('"', '&quot;');
      text = text.split('\n');

      let gap = -20;//minimum gap is not 0?
      for (let i = 0; i < text.length; i++) {
        let str = text[i];
        str = `<label text="${str}"/><sep gap="${gap}"/>`;
        text[i] = str;
      }

      text = text.join('');
      return text;
    }

    let showBroken = true;
    let brokenText = 'Show Broken';

    class SwitchCaseExt {
      getInfo() {
        return {
          id: '0znzwSwitchCase',
          name: 'Switch Case',
          color1: getCategoryColor('control').color1,
          color2: getCategoryColor('control').color2,
          blocks: [
            {
              opcode: 'switch_',
              blockType: Scratch.BlockType.CONDITIONAL,
              text: 'switch [DATA]',
              arguments: {
                DATA: {
                  type: Scratch.ArgumentType.STRING,
                }
              }
            },
            {
              opcode: 'case_',
              blockType: Scratch.BlockType.CONDITIONAL,
              text: 'case [DATA]',
              arguments: {
                DATA: {
                  type: Scratch.ArgumentType.STRING,
                }
              }
            },
            {
              opcode: 'default_',
              blockType: Scratch.BlockType.CONDITIONAL,
              text: 'default'
            },
            {
              blockType: Scratch.BlockType.BUTTON,
              text: brokenText,
              func: 'brokenUpdate'
            },
            {
              hideFromPalette: showBroken,
              blockType: Scratch.BlockType.XML,
              xml: genLabelXML('THESE BLOCKS CAN CORRUPT YOUR\nPROJECT, USE THEM AT YOUR OWN\nRISK.'),
            },
            {
              hideFromPalette: showBroken,
              opcode: 'lcv_case_',
              blockType: Scratch.BlockType.REPORTER,
              text: '[DATA]',
              arguments: {
                DATA: {
                  type: Scratch.ArgumentType.STRING,
                  menu: 'lcv'
                }
              }
            },
            {
              hideFromPalette: showBroken,
              opcode: 'break_',
              blockType: Scratch.BlockType.COMMAND,
              text: 'break',
              isTerminal: true
            },
            {
              hideFromPalette: showBroken,
              opcode: 'continue_',
              blockType: Scratch.BlockType.COMMAND,
              text: 'continue',
              isTerminal: true
            },
            {
              hideFromPalette: showBroken,
              opcode: 'exec_case_',
              blockType: Scratch.BlockType.COMMAND,
              text: 'run case [DATA] and break: [DATA1]?',
              arguments: {
                DATA: {
                  type: Scratch.ArgumentType.STRING,
                },
                DATA1: {
                  type: Scratch.ArgumentType.BOOLEAN,
                },
              }
            },
            {
              hideFromPalette: showBroken,
              opcode: 'next_',
              blockType: Scratch.BlockType.COMMAND,
              text: 'run next case and break: [DATA]?',
              arguments: {
                DATA: {
                  type: Scratch.ArgumentType.BOOLEAN,
                },
              }
            },
          ], menus: {
            lcv: {
              acceptReporters: false,
              items: [{text: 'last case', value: 0},
                      /*'current case',*/
                      {text: 'switch value', value: 1}]
            }
          }
        };
      }

      brokenUpdate() { showBroken = !showBroken;
                       brokenText = (!showBroken ? 'Hide Broken' : 'Show Broken');
                       Scratch.vm.extensionManager.refreshBlocks();
                     }

      switch_({ DATA }, util) {
        const thread = util.thread;
        const target = util.target;
        const blockID = thread.peekStack();

        let self = getBlockByID(target, blockID);
        self.switchData = DATA;
        self.ranCase = false;
        setBlockByID(target, blockID, self);

        return 1;
      }

      case_({ DATA }, util) {
        const thread = util.thread;
        const target = util.target;
        const blockID = thread.peekStack();

        let outer = getOuterBlockID(target, blockID);
        if (outer.opcode != '0znzwSwitchCase_switch_') return 0;
        
        if (DATA == outer.switchData) {
          outer.ranCase = true;
          setBlockByID(target, outer.id, outer);
          return 1;
        }

        return 0;
      }

      default_(args, util) {
        const thread = util.thread;
        const target = util.target;
        const blockID = thread.peekStack();

        let self = getBlockByID(target, blockID);
        let outer = getOuterBlockID(target, blockID);

        if (self.next) return 0;
        if (outer.opcode != '0znzwSwitchCase_switch_') return 0;

        if (outer.ranCase) return 0;
        return 1;
      }

      lcv_case_(args, util) {
        const thread = util.thread;
        const target = util.target;
        const blockID = thread.peekStack();

        let self = getBlockByID(target, blockID);
        let outer = getOuterBlockID(target, blockID);

        if (outer.opcode != '0znzwSwitchCase_switch_') return 0;

        switch(args.DATA) {
          case 0: return 0;
          case 1: return outer.switchData;
        }
      }

      next_(args, util) {
        const thread = util.thread;
        const target = util.target;
        const blockID = thread.peekStack();

        let self = getBlockByID(target, blockID);
        let outer = getOuterBlockID(target, blockID);

        if (outer.opcode != '0znzwSwitchCase_switch_') return 0;

        /* code here... */
        if (args.DATA) { this.break_({}, util); return };
      }

      exec_case_(args, util) {
        const thread = util.thread;
        const target = util.target;
        const blockID = thread.peekStack();

        let self = getBlockByID(target, blockID);
        let outer = getOuterBlockID(target, blockID);

        if (outer.opcode != '0znzwSwitchCase_switch_') return 0;

        /* code here... */
        if (args.DATA1) { this.break_({}, util); return };
      }

      break_(args, util) {
        const thread = util.thread;
        const target = util.target;
        const blockID = thread.peekStack();

        let self = getBlockByID(target, blockID);
        let outer = getOuterBlockID(target, blockID);

        if (outer.opcode != '0znzwSwitchCase_switch_') return 0;

        thread.stop = function() {alert('hmmm stop?, idk this does not work idk why.')};
        thread.stop();//hmmmm?
      }

      continue_(args, util) {
        const thread = util.thread;
        const target = util.target;
        const blockID = thread.peekStack();

        let self = getBlockByID(target, blockID);
        let outer = getOuterBlockID(target, blockID);

        if (outer.opcode != '0znzwSwitchCase_switch_') return 0;

        /* code here... */
      }

    }
    Scratch.extensions.register(new SwitchCaseExt());
  })(Scratch);}catch(err){alert(err)};