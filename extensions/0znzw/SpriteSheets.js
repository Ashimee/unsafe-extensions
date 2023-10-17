// Name: Sprite Sheets
// ID: 0znzwSpriteSheetsJS
// Description: Handle Sprite Sheets! (fancy yes yes /j)
/**
 * Sprite-Sheets extension v1.0 by 0znzw (English Version)
 * Majority code is by 0znzw || licensed under MIT license.
 * Do not remove this comment
 */
(function(Scratch) {
    'use strict';


    if (!Scratch.extensions.unsandboxed) {
        throw new Error('Sprite-Sheets extension must be run unsandboxed');
    }

    const vm = Scratch.vm;
    const clamp = (a, b, c) => (c >= b ? b : (c <= a ? a : c));


    function cutImageUp(image, numColsToCut, numRowsToCut, widthOfOnePiece, heightOfOnePiece) {
        let imagePieces = [];
        for (var x = 0; x < numColsToCut; ++x) {
            for (var y = 0; y < numRowsToCut; ++y) {
                var canvas = document.createElement('canvas');
                canvas.width = widthOfOnePiece;
                canvas.height = heightOfOnePiece;
                var context = canvas.getContext('2d');
                context.drawImage(image, x * widthOfOnePiece, y * heightOfOnePiece, widthOfOnePiece, heightOfOnePiece, 0, 0, canvas.width, canvas.height);
                imagePieces.push(canvas.toDataURL());
            }
        }
        return imagePieces;
    }

    let NULL = null;
    class extension {
        constructor() {
            this.spritesheets = {};
            this.unCutERR = 'Please cut the sheet first'
        }
        getInfo() {
            return {
                id: '0znzwSpriteSheets',
                name: 'Sprite-Sheets',
                color1: "#fcb103",
                color2: "#db9a37",
                color3: "#db8937",
                blocks: [{
                    opcode: 'newSheet',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'create new spritesheet [name] from [img]',
                    arguments: {
                        name: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'sheet1'
                        },
                        img: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: ''
                        },

                    }
                }, {
                    hideFromPalette: true,
                    opcode: 'newClip',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'new Clip: start-x [sx] start-y [sy] end-x [ex] end-y [ey]',
                    arguments: {
                        sx: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        sy: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        ex: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 480
                        },
                        ey: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 360
                        },

                    }
                }, {
                    hideFromPalette: true,
                    opcode: 'clipSheet',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'set clip of sheet [name] to [clip]',
                    arguments: {
                        name: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'sheet1'
                        },
                        clip: {
                            type: NULL
                        },

                    }
                }, {
                    opcode: 'newWxH',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'new WxH: width [w] height [h]',
                    arguments: {
                        w: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 16
                        },
                        h: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 16
                        },

                    }
                }, {
                    opcode: 'newCxR',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'new CxR: columns [c] rows [r]',
                    arguments: {
                        c: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 5
                        },
                        r: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 2
                        },

                    }
                }, {
                    opcode: 'cutSheet',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'cut sheet [name] with WxH [wxh] and CxR [cxr]',
                    arguments: {
                        name: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'sheet1'
                        },
                        wxh: {
                            type: NULL
                        },
                        cxr: {
                            type: NULL
                        },

                    }
                }, {
                    opcode: 'getSheetImg',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'image [imgIdx] of sheet [name]',
                    arguments: {
                        imgIdx: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        },
                        name: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'sheet1'
                        },

                    }
                }, {
                    opcode: 'getSheetData',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[attrib] of sheet [name]',
                    arguments: {
                        attrib: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'sheetOptions',
                            defaultValue: 'width'
                        },
                        name: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'sheet1'
                        },

                    }
                }],
                menus: {
                    _Images: {
                        acceptReporters: true,
                        items: '_getImages'
                    },
                    sheetOptions: {
                        acceptReporters: true,
                        items: ['width', 'height', 'columns', 'rows', 'image count', 'json']
                    }
                }
            };
        }
        _getCostumes() {
            const costumes = vm.runtime.getEditingTarget().sprite.costumes.map(item => {
                return item.name;
            });
            if (costumes.length > 0) {
                return costumes;
            }
            return [{
                text: '',
                value: ''
            }];
        }
        // Generation of settings for other blocks
        newClip(args, util) {
            let sx = Scratch.Cast.toNumber(args.sx),
                sy = Scratch.Cast.toNumber(args.sy);
            let ex = Scratch.Cast.toNumber(args.ex),
                ey = Scratch.Cast.toNumber(args.ey);
            return JSON.stringify({
                sx,
                sy,
                ex,
                ey
            });
        }
        newWxH(args, util) {
            let width = Scratch.Cast.toNumber(args.w),
                height = Scratch.Cast.toNumber(args.h);
            return JSON.stringify({
                width,
                height
            });
        }
        newCxR(args, util) {
            let cols = Scratch.Cast.toNumber(args.c),
                rows = Scratch.Cast.toNumber(args.r);
            return JSON.stringify({
                cols,
                rows
            });
        }
        //Sheet setup

        newSheet(args, util) {
            let sheetname = Scratch.Cast.toString(args.name);
            this.spritesheets[sheetname] = {
                sheetname,
                imgData: args.img,
                images: []
            };
        }
        clipSheet(args, util) {
            let sheetname = Scratch.Cast.toString(args.name),
                clip = JSON.parse(args.clip);
            this.spritesheets[sheetname].clip = clip;
        }
        //Actually "cutting" the sheet
        cutSheet(args, util) {
            let sheetname = Scratch.Cast.toString(args.name),
                spritesheets = this.spritesheets,
                sheet = spritesheets[sheetname],
                WxH = JSON.parse(args.wxh),
                CxR = JSON.parse(args.cxr);
            let img = new Image();
            img.onload = function() {
                sheet.images = cutImageUp(img, CxR.cols, CxR.rows, WxH.width, WxH.height);
            };
            img.src = sheet.imgData;

            sheet.width = WxH.width;
            sheet.height = WxH.height;
            sheet.cols = CxR.cols;
            sheet.rows = CxR.rows;

            spritesheets[sheetname] = sheet;
            this.spritesheets = spritesheets;
        }
        //Sheet properties

        getSheetData(args, util) {
            let sheetname = Scratch.Cast.toString(args.name),
                sheet = this.spritesheets[sheetname],
                attrib = Scratch.Cast.toString(args.attrib);
            switch (attrib) {
                case 'width':
                    return (sheet.width || this.unCutERR);
                case 'height':
                    return (sheet.height || this.unCutERR);
                case 'columns':
                    return (sheet.cols || this.unCutERR);
                case 'rows':
                    return (sheet.rows || this.unCutERR);
                case 'image count':
                    return sheet.images.length;
                case 'json':
                    return JSON.stringify(sheet);
            }
        }
        getSheetImg(args, util) {
            let sheetname = Scratch.Cast.toString(args.name),
                imgIdx = Scratch.Cast.toNumber(args.imgidx),
                sheet = this.spritesheets[sheetname];
            imgIdx = clamp(1, sheet.images.length, imgIdx);
            if (sheet.images.length > 0) return sheet.images[imgIdx];
            return this.unCutERR;
        }
    }
    Scratch.extensions.register(new extension());
})(Scratch);