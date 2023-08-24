/*
 * v2.2 | Created by @LilyMakesThings, Updated by @0znzw.
 * Do not remove this comment
 */
(function (Scratch) {
	'use strict';
	if (!Scratch.extensions.unsandboxed) {
		throw new Error('Comment Blocks+ must be run unsandboxed');
	}
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
					},
					{
						//@0znzw
						opcode: 'commentLoop',
						blockType: Scratch.BlockType.LOOP,
						text: '// [COMMENT] | run [RUN]',
						arguments: {
							COMMENT: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: 'comment'
							},
							RUN: {
								type: Scratch.ArgumentType.BOOLEAN
							}
						}
					},
					{
						opcode: 'commentCommand',
						blockType: Scratch.BlockType.COMMAND,
						text: '// [COMMENT]',
						arguments: {
							COMMENT: {
								type: Scratch.ArgumentType.STRING,
								defaultValue: 'comment'
							}
						}
					},
					{
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
					},
					{
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
					},
					{
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
					},
					{
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
					}
				]
			};
		}
		commentHat() {
			// no-op
		}
		commentCommand() {
			// no-op
		}
		commentReporter(args) {
			return args.INPUT;
		}
		commentBoolean(args) {
			return Scratch.Cast.toBoolean(args.INPUT);
		}
		commentMatrix(args) {
			return args.INPUT;
		}
		commentColor(args) {
			return args.INPUT;
		}
		//Added support by @0znzw
		commentLoop(args) {
			try {
				if (Scratch.Cast.toBoolean(args.RUN)) return 1;
			} catch (err) {
				console.error(err);
			}
			return 0;
		}
	}
	Scratch.extensions.register(new CommentBlocks2());
})(Scratch);