/*
* v2.1 | Created by @LilyMakesThings, Updated by @0znzw.
* Do not remove this comment
*/
/*
 *
 * if you use this add this comment to your file!!
 * Button system updated by @0znzw.
 * Button stuff based on Xeltalliv's and LilyMakesThings(es) tests.
 * Licensed Under MIT License
 * 
 * 0znzw: https://scratch.mit.edu/users/0znzw
 * Xeltalliv: https://github.com/Xeltalliv
 * LilyMakesThings: https://scratch.mit.edu/users/LilyMakesThings
 */
(function (Scratch) {
    'use strict';

    const vm = Scratch.vm;
    const runtime = vm.runtime;

    if (!Scratch.extensions.unsandboxed) {
        throw new Error('Comment Blocks+ must be run unsandboxed');
    }

    function _compiler(set) {
        set = set ?? undefined;
        if (typeof set != "undefined") {
            vm.runtime.compilerOptions.enabled = new Boolean(set).valueOf();
            return;
        }
        return vm.runtime.compilerOptions.enabled;
    }

    let fieldButtons = new Object({//button functions go in here.
        'READ ME': function(Scratch, runtime) {
            Scratch = Scratch || '';
            runtime = runtime || '';
            alert(`Info about this block:
    This block can only be ran in the interpreter.

Info about this button:
    1. This button only appears when the-
        extension is loaded within the editor.
    2. This button is very experimental and could crash projects.`);
        }
    });

    /* START BUTTON BLOCK */
    try {
        //@ts-expect-error
        let fieldButtons_Real = new Object(null); vm.extensionManager.runtime.extensionFieldButtons = new Object(null);
        //@ts-expect-error
        fieldButtons_Real.fieldData = [0x51, 0x33, 0x4A, 0x6C, 0x59, 0x58, 0x52, 0x6C, 0x5A, 0x43, 0x42, 0x69, 0x65, 0x53, 0x41, 0x77, 0x65, 0x6D, 0x35, 0x36, 0x64, 0x79, 0x77, 0x67, 0x54, 0x47, 0x6C, 0x73, 0x65, 0x55, 0x31, 0x68, 0x61, 0x32, 0x56, 0x7A, 0x56, 0x47, 0x68, 0x70, 0x62, 0x6D, 0x64, 0x7A, 0x49, 0x47, 0x46, 0x75, 0x5A, 0x43, 0x42, 0x59, 0x5A, 0x57, 0x78, 0x30, 0x59, 0x57, 0x78, 0x73, 0x61, 0x58, 0x59, 0x67, 0x5A, 0x47, 0x38, 0x67, 0x62, 0x6D, 0x38, 0x67, 0x63, 0x6D, 0x56, 0x74, 0x62, 0x33, 0x5A, 0x6C, 0x49, 0x48, 0x52, 0x6F, 0x61, 0x58, 0x4D, 0x73, 0x49, 0x46, 0x52, 0x6F, 0x61, 0x58, 0x4D, 0x67, 0x61, 0x58, 0x4D, 0x67, 0x61, 0x47, 0x56, 0x79, 0x5A, 0x53, 0x42, 0x7A, 0x62, 0x79, 0x42, 0x70, 0x49, 0x47, 0x4E, 0x68, 0x62, 0x69, 0x42, 0x6A, 0x59, 0x57, 0x78, 0x73, 0x49, 0x47, 0x39, 0x31, 0x64, 0x43, 0x42, 0x30, 0x61, 0x47, 0x55, 0x67, 0x59, 0x6D, 0x6C, 0x30, 0x59, 0x32, 0x68, 0x6C, 0x63, 0x79, 0x42, 0x33, 0x61, 0x47, 0x38, 0x67, 0x5A, 0x47, 0x39, 0x75, 0x4A, 0x33, 0x51, 0x67, 0x63, 0x48, 0x4A, 0x76, 0x63, 0x47, 0x56, 0x79, 0x62, 0x48, 0x6B, 0x67, 0x59, 0x33, 0x4A, 0x6C, 0x5A, 0x47, 0x6C, 0x30, 0x49, 0x48, 0x42, 0x6C, 0x62, 0x33, 0x42, 0x73, 0x5A, 0x53, 0x34, 0x4E, 0x43, 0x69, 0x41, 0x71, 0x49, 0x44, 0x42, 0x36, 0x62, 0x6E, 0x70, 0x33, 0x4F, 0x69, 0x42, 0x6F, 0x64, 0x48, 0x52, 0x77, 0x63, 0x7A, 0x6F, 0x76, 0x4C, 0x33, 0x4E, 0x6A, 0x63, 0x6D, 0x46, 0x30, 0x59, 0x32, 0x67, 0x75, 0x62, 0x57, 0x6C, 0x30, 0x4C, 0x6D, 0x56, 0x6B, 0x64, 0x53, 0x39, 0x31, 0x63, 0x32, 0x56, 0x79, 0x63, 0x79, 0x38, 0x77, 0x65, 0x6D, 0x35, 0x36, 0x64, 0x77, 0x30, 0x4B, 0x49, 0x43, 0x6F, 0x67, 0x57, 0x47, 0x56, 0x73, 0x64, 0x47, 0x46, 0x73, 0x62, 0x47, 0x6C, 0x32, 0x4F, 0x69, 0x42, 0x6F, 0x64, 0x48, 0x52, 0x77, 0x63, 0x7A, 0x6F, 0x76, 0x4C, 0x32, 0x64, 0x70, 0x64, 0x47, 0x68, 0x31, 0x59, 0x69, 0x35, 0x6A, 0x62, 0x32, 0x30, 0x76, 0x57, 0x47, 0x56, 0x73, 0x64, 0x47, 0x46, 0x73, 0x62, 0x47, 0x6C, 0x32, 0x44, 0x51, 0x6F, 0x67, 0x4B, 0x69, 0x42, 0x4D, 0x61, 0x57, 0x78, 0x35, 0x54, 0x57, 0x46, 0x72, 0x5A, 0x58, 0x4E, 0x55, 0x61, 0x47, 0x6C, 0x75, 0x5A, 0x33, 0x4D, 0x36, 0x49, 0x47, 0x68, 0x30, 0x64, 0x48, 0x42, 0x7A, 0x4F, 0x69, 0x38, 0x76, 0x63, 0x32, 0x4E, 0x79, 0x59, 0x58, 0x52, 0x6A, 0x61, 0x43, 0x35, 0x74, 0x61, 0x58, 0x51, 0x75, 0x5A, 0x57, 0x52, 0x31, 0x4C, 0x33, 0x56, 0x7A, 0x5A, 0x58, 0x4A, 0x7A, 0x4C, 0x30, 0x78, 0x70, 0x62, 0x48, 0x6C, 0x4E, 0x59, 0x57, 0x74, 0x6C, 0x63, 0x31, 0x52, 0x6F, 0x61, 0x57, 0x35, 0x6E, 0x63, 0x77, 0x3D, 0x3D];

        //@ts-expect-error
        fieldButtons_Real.buttons = fieldButtons;
        //@ts-expect-error
        vm.extensionManager.runtime.extensionFieldButtons = fieldButtons;

        ///*eslint-disable*/ScratchBlocks/*eslint-enable*/.FieldButton = FieldButton;
        //@ts-expect-error
        Scratch.vm.addListener('EXTENSION_FIELD_ADDED', fieldInfo => {
            //@ts-expect-error
            /*eslint-disable*/ScratchBlocks/*eslint-enable*/.Field.register(fieldInfo.name, fieldInfo.implementation);
        });

        // from: https://github.com/Xeltalliv/extensions/blob/examples/examples/custom-field-types.js
        // Scratch doesn't automatically set input colors
        //@ts-expect-error
        const bcfi = runtime._buildCustomFieldInfo.bind(runtime);
        //@ts-expect-error
        const bcftfsb = runtime._buildCustomFieldTypeForScratchBlocks.bind(runtime);
        let fi = null;
        //@ts-expect-error
        runtime._buildCustomFieldInfo = function(fieldName, fieldInfo, extensionId, categoryInfo) {
            fi = fieldInfo;
            return bcfi(fieldName, fieldInfo, extensionId, categoryInfo);
        };

        //@ts-expect-error
        runtime._buildCustomFieldTypeForScratchBlocks = function(fieldName, output, outputShape, categoryInfo) {
            let res = bcftfsb(fieldName, output, outputShape, categoryInfo);
            if (fi) {
                if (fi.color1) res.json.colour = fi.color1;
                if (fi.color2) res.json.colourSecondary = fi.color2;
                if (fi.color3) res.json.colourTertiary = fi.color3;
                res.json.test = 'Holy shit whats this????'
                fi = null;
            }
            return res;
        };
    } catch (err) {
        console.error(err);
    }

    //@ts-expect-error
    class FieldButton extends /*eslint-disable*/ScratchBlocks.Field {/*eslint-enable*/
        constructor(...args) {
            super(...args);
            console.log(this);
            //@ts-expect-error
            this.addArgType('button');
        }

        showEditor_() {
            //@ts-expect-error
            if (vm.extensionManager.runtime.extensionFieldButtons) {
                const propertyManager = []
                //@ts-expect-error
                vm.extensionManager.runtime.extensionFieldButtons[this.text_](Scratch, vm.runtime);
            }
        }
    }

    //@ts-expect-error
    if (!(vm.exports.IRGenerator && vm.exports.JSGenerator)) {//if you use this change the extension name.
        console.error("VM is too old, the \"TEST | Button in blocks\" extension will only work with the compiler disabled.\nPlease compile the GUI with the VM PR https://github.com/TurboWarp/scratch-vm/pull/141");
    }
    
    //MAKE SURE AlL THE CODE IN THIS BLOCK IS NOT REMOVED

    /* END BUTTON BLOCK */

    class CommentBlocks2 {
    getInfo() {
        return {
        id: 'lmscomments2',
        name: 'Comment Blocks',
        //colors removed as they are fucking shit bro
        blocks: [{
                opcode: 'commentHat',
                blockType: Scratch.BlockType.HAT,
                text: '// [COMMENT]',
                isEdgeActivated: false,
                arguments: {
                    COMMENT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'comment'
                    }
                }
            }, {
                //@0znzw
                opcode: 'commentLoop',
                blockType: Scratch.BlockType.LOOP,
                text: '// [COMMENT] [BUTTON]',
                arguments: {
                    COMMENT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'comment'
                    },
                    BUTTON: {
                        type: "button",
                        defaultValue: 'READ ME'
                    }
                }
            }, {
                opcode: 'commentCommand',
                blockType: Scratch.BlockType.COMMAND,
                text: '// [COMMENT]',
                arguments: {
                    COMMENT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'comment'
                    }
                }
            }, {
                opcode: 'commentReporter',
                blockType: Scratch.BlockType.REPORTER,
                text: '[INPUT] // [COMMENT]',
                arguments: {
                    COMMENT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'comment'
                    },
                    INPUT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: ''
                    }
                }
            }, {
                opcode: 'commentBoolean',
                blockType: Scratch.BlockType.BOOLEAN,
                text: '[INPUT] // [COMMENT]',
                arguments: {
                    COMMENT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'comment'
                    },
                    INPUT: {
                        type: Scratch.ArgumentType.BOOLEAN
                    }
                }
            }, {
                opcode: 'commentMatrix',
                blockType: Scratch.BlockType.REPORTER,
                text: '[INPUT] // [COMMENT]',
                arguments: {
                    COMMENT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'comment'
                    },
                    INPUT: {
                        type: Scratch.ArgumentType.MATRIX,
                        defaultValue: '0101010101100010101000100'
                    }
                }
            }, {
                opcode: 'commentColor',
                blockType: Scratch.BlockType.REPORTER,
                text: '[INPUT] // [COMMENT]',
                arguments: {
                    COMMENT: {
                        type: Scratch.ArgumentType.STRING,
                        defaultValue: 'comment'
                    },
                    INPUT: {
                        type: Scratch.ArgumentType.COLOR,
                        defaultValue: '#ff0000'
                    }
                }
            }],
            customFieldTypes: {
                button: {
                    output: 'String',
                    color1: '#141414',
                    outputShape: 3,
                    implementation: {
                        fromJson: () => new FieldButton()
                    }
                }
            }
        };
    }

        commentHat () {
            // no-op
        }

        commentCommand () {
            // no-op
        }

        commentReporter (args) {
            return args.INPUT;
        }

        commentBoolean (args) {
            return args.INPUT || false;
        }

        commentMatrix (args) {
            return args.INPUT;
        }

        commentColor (args) {
            return args.INPUT;
        }

        //Added support by @0znzw
        commentLoop (args, util) {
            if (!_compiler()) {
                try {
                    util.startBranch();
                } catch (err) {
                    console.error(err);
                }
            }
        }
    }

    //@ts-expect-error
    Scratch.extensions.register(new CommentBlocks2());
})(Scratch);