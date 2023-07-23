/*
* v2 | Created by @LilyMakesThings, Updated by @0znzw.
* Do not remove this comment
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

    //@0znzw

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