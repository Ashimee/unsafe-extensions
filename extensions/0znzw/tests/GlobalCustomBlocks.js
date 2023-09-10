/*
  Created by 0znzw | v1
  Licensed Under MIT License.
  DO NOT REMOVE THIS COMMENT!!
*/
(function(Scratch) {
    let procedureCode = 'run global function %s with args %s';
    if (!Object.keys(vm.runtime.addonBlocks).includes(procedureCode)) vm.runtime.addAddonBlock({
        arguments: ['func', 'args'],
        procedureCode,
        callback: (args) => {
            globalThis.globalFunctionHandler(args)
        },
        hidden: false
    });
    globalThis.globalFunctionHandler = (args) => {
        let target = vm.runtime.getTargetForStage();

        function getGlobalFunctions() {
            let globalFunctions = {};
            vm.runtime.allScriptsDo(script => {
                const script_opcode = script;
                script = target.blocks.getBlock(script);
                if (script.opcode !== 'lmscomments_commentHat') return;
                let comment_value = target.blocks.getBlock(script.inputs.COMMENT.block).fields.TEXT.value;
                if (!comment_value.startsWith('GLOBAL DEFINITION ')) return;
                globalFunctions[comment_value.replace('GLOBAL DEFINITION ', '')] = {
                    opcode: script_opcode,
                    json: script,
                    target
                }
            }, target);
            return globalFunctions;
        }
        const func = args.func;
        let functions = getGlobalFunctions();
        if (!Object.keys(functions).includes(func)) return;
        const nblock_opcode = functions[func].json.next;
        const nblock_json = target.blocks.getBlock(functions[func].json.next);
        if (nblock_json.opcode !== 'procedures_call') return;

        function replaceCustomBlocksCallArguments(opcode, newArgs) {
            let target = vm.runtime.getTargetForStage();
            let block = target.blocks.getBlock(opcode);
            const inputVal = Object.values(block.inputs);
            const inputCount = inputVal.length;
            for (let i = 0; i < inputCount; i++) {
                let newBlock = target.blocks.getBlock(inputVal[i].block);
                newBlock.fields.TEXT.value = newArgs[i];
            }
        }
        replaceCustomBlocksCallArguments(nblock_json.id, JSON.parse(args.args));
        vm.refreshWorkspace();
        vm.runtime.toggleScript(nblock_opcode, {
            target,
            stackClick: true
        });
    }
})(Scratch);