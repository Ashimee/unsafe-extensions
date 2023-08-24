/*
* Switch-Case extension v1.0 by 0znzw (English Version)
* All code is by 0znzw || licensed under MIT license.
* Do not remove this comment
*/
(function(Scratch) {
    'use strict';

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
            }
          ]
        };
      }

      switch_({ DATA }, util) {
        const thread = util.thread;
        const target = util.target;
        const blockID = thread.peekStack();

        let self = getBlockByID(target, blockID);
        self.switchData = DATA;
        self.ranCase = false;
        setBlockByID(target, blockID, self);

        util.startBranch();
      }

      case_({ DATA }, util) {
        const thread = util.thread;
        const target = util.target;
        const blockID = thread.peekStack();

        let outer = getOuterBlockID(target, blockID);
        if (outer.opcode != '0znzwSwitchCase_switch_') return;
        
        if (DATA == outer.switchData) {
          outer.ranCase = true;
          setBlockByID(target, outer.id, outer);
          util.startBranch();
        }
      }

      default_(args, util) {
        const thread = util.thread;
        const target = util.target;
        const blockID = thread.peekStack();

        let self = getBlockByID(target, blockID);
        let outer = getOuterBlockID(target, blockID);

        if (self.next) return;
        if (outer.opcode != '0znzwSwitchCase_switch_') return;

        if (outer.ranCase) return;
        util.startBranch();
      }
    }
    Scratch.extensions.register(new SwitchCaseExt());
  })(Scratch);