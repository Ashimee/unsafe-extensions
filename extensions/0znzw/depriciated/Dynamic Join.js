  /*@0znzw || DO NOT REMOVE THIS COMMENT || v1.0
  LICENSED UNDER Creative Commons Attribution 4.0 International.
  https://creativecommons.org/licenses/by/4.0/deed.en
  https://creativecommons.org/licenses/by/4.0/legalcode.en
  */
(function(Scratch) {
    'use strict';
const ProjectStore = class {
  /*@0znzw || DO NOT REMOVE THIS COMMENT || v1.3
  LICENSED UNDER Creative Commons Attribution 4.0 International.
  https://creativecommons.org/licenses/by/4.0/deed.en
  https://creativecommons.org/licenses/by/4.0/legalcode.en
  */
  #namespace;
  constructor(_namespace) {
    this.#namespace = _namespace;
    vm.project_data = JSON.parse(vm.toJSON())['project_data'] || {};
    if (vm.toJSONbound == undefined) vm.toJSONbound = vm.toJSON.bind(vm);
    vm.project_data[this.#namespace] = vm.project_data[this.#namespace] || {};
    vm.toJSON = this.#toJSON;
  }
  #toJSON(e, t) {
    let tmp = JSON.parse(vm.toJSONbound(e, t));
    tmp['project_data'] = vm.project_data || {};
    return JSON.stringify(tmp);
  }
  get(prop) {
    return vm.project_data[this.#namespace][prop];
  }
  set(prop, value) {
    vm.project_data[this.#namespace][prop] = value;
  }
  remove(prop) {
    vm.project_data[this.#namespace][prop] = {};
    delete vm.project_data[this.#namespace][prop];
  }
  unhook() {
    vm.project_data[this.#namespace] = {};
    delete vm.project_data[this.#namespace];
  }
}
    let dynamicStorage = new ProjectStore('0znzwDynamicJoin');
    let joins = 2;
    let hasJoin = [2];
    let joinBlocks = dynamicStorage.get('blocks');
    if (joinBlocks == [] || joinBlocks == {} || joinBlocks == undefined) joinBlocks = [{
              blockType: Scratch.BlockType.BUTTON,
              text: '+1',
              func: 'addJoin'
            },
            {
              blockType: Scratch.BlockType.BUTTON,
              text: '-1',
              func: 'removeJoin'
            },
            {
              blockType: Scratch.BlockType.BUTTON,
              text: 'Refresh JOIN block',
              func: '_UpdateJoin'
            },
            {
              blockType: Scratch.BlockType.REPORTER,
              text: 'join [a] [b]',
              opcode: 'join2',
              arguments: {
                a: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'a'
                },
                b: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: 'b'
                }
              }
            }];
    class extension {
      getInfo() {
        return {
          id: '0znzwDynamicJoin',
          name: 'Dynamic Join',
          blocks: joinBlocks
        };
      }
      constructor() {
        if (joinBlocks.length > 3) {
          for (let i = 0; i < joinBlocks.length; i++) {
            let block = joinBlocks[i];
            if (
              block.opcode.startsWith('join') && block._dym_function
            ) this[block.opcode] = block._dym_function;
          }
        }
      }
      _AddArgumentObj(char) {
        return {
          type: Scratch.ArgumentType.STRING,
          defaultValue: char.toString()
        }
      }
      _GenerateInputsOfLength(count) {
        let args = [];
        let argums = {};
        for (let i = 0; i < count; i++) {
          let str = `_${i.toString()}`;
          args.push(str);
        }
        for (let i = 0; i < count; i++) argums[args[i]] = this._AddArgumentObj(args[i]);
        return {args, argums};
      }
      _UpdateJoin() {
        for (let i = 0; i < joinBlocks.length; i++) {
          let block = joinBlocks[i];
          if (block.blockType == Scratch.BlockType.BUTTON) continue;
          block.hideFromPalette = true;
        }
        if (hasJoin.includes(joins)) {
          for (let i = 0; i < joinBlocks.length; i++) {
            let block = joinBlocks[i];
            if (parseInt(block.opcode) == joins) {
              block.hideFromPalette = false;
              return;
            }
          }
          return;
        }

        let generatedArgs = this._GenerateInputsOfLength(joins);
        let args = generatedArgs.args;
        for (let i = 0; i < args.length; i++) args[i] = `[${args[i]}]`;

        let text = `join (${joins}) `+args.join(' ');
        let opcode = `join${joins}`;

        let argums = generatedArgs.argums;

        this[opcode] = function(...argu) {
          return Object.values(argu[0]).join('');
        }
        let block = {
          hideFromPalette: false,
          blockType: Scratch.BlockType.REPORTER,
          opcode,
          text,
          arguments: argums,
          _dym_function: this[opcode]
        }
        joinBlocks.push(block);
        vm.extensionManager.refreshBlocks();
        dynamicStorage.set('blocks', joinBlocks);
      }
      addJoin() {
        joins += 1;
        //if (joins > 52) joins = 52;
      }
      removeJoin() {
        joins -= 1;
        if (joins < 2) joins = 2;
      }
      join2(...argu) { return Object.values(argu[0]).join('') }
    }
    Scratch.extensions.register(new extension());
  })(Scratch);