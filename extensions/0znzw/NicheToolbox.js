/*
* Niche Toolbox extension v1.2.1 by 0znzw (English Version)
* All code is by 0znzw || licensed under MIT license.
* Do not remove this comment
*/
(function (Scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) {
        throw new Error('NicheToolbox must be run unsandboxed');
    }

    /* DEFINING GLOBAL OBJECTS */
    //CASTING
    const BlockType = Scratch.BlockType;
    const ArgumentType = Scratch.ArgumentType;
    const Cast = Scratch.Cast;
    //VM
    const vm = Scratch.vm;
    const renderer = vm.renderer;
    const runtime = vm.runtime;

    /* UTILS */
    function _addLabel(data) {
        return {
            blockType: Scratch.BlockType.LABEL,
            text: data,
            hideFromPalette: true //for rn
        };
    }

    /* ICON BY SHARKPOOL */
    const menuIconURI = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNjciIGhlaWdodD0iMjY3IiB2aWV3Qm94PSIwLDAsMjY3LDI2NyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwNi41LC00Ni41KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0xMDYuNSwxODBjMCwtNzMuNzMwMDEgNTkuNzY5OTksLTEzMy41IDEzMy41LC0xMzMuNWM3My43MzAwMSwwIDEzMy41LDU5Ljc2OTk5IDEzMy41LDEzMy41YzAsNzMuNzMwMDEgLTU5Ljc2OTk5LDEzMy41IC0xMzMuNSwxMzMuNWMtNzMuNzMwMDEsMCAtMTMzLjUsLTU5Ljc2OTk5IC0xMzMuNSwtMTMzLjV6IiBmaWxsPSIjZWQ2MzAwIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjUzLjk3MTczLDEwMS4yMTI4NWMwLjQ5OTE0LDAuMDY1MTggMS4zMDU0NiwwLjE5NTUyIDEuNzkxODEsMC4yNzM3M2M3LjEyODgzLDEuMTA3OTYgMTMuNDEyOTUsMy45NDk1NyAxOS4wNDQzNSw4LjY0MjEyYzEuODU1OCwxLjUyNTA4IDMuMzUzMjQsMy4wNjMyIDE2LjgwNDU5LDE3LjA4ODczYzYuNjgwODcsNi45NzM2NiA3LjgxOTk2LDguMjkwMTggOS44OTMzMywxMS40MDU1MmMxLjQzMzQ1LDIuMTUwNzYgMi4wNDc3OCwzLjMxMDg2IDMuNDU1NjMsNi41MDQ0MWMwLjY3ODMzLDEuNTUxMTUgMS41NDg2NCwzLjM0OTk2IDEuOTE5OCwzLjk4ODY3YzAuNzAzOTMsMS4xODYxOCAyLjQwNjE0LDMuNTU4NTIgMy4zMDIwNSw0LjYxNDM1bDAuNDk5MTQsMC41NzM1M2wwLjY5MTEzLC0wLjM2NDk4YzEuMDExMDksLTAuNTIxMzkgMS44MzAyLC0wLjcxNjkzIDMuMDg0NDYsLTAuNzE2OTNjMS45OTY1OCwwIDMuNjk4OCwwLjc4MjEgNS4yMjE4NCwyLjQxMTQ2YzEuMzgyMjUsMS40ODU5NyAyLjAzNDk4LDIuOTE5ODEgMi4xNTAxNyw0Ljc1NzczYzAuMDg5NTksMS4zNDI1OSAtMC4wODk1OSwyLjMwNzE3IC0wLjYyNzEzLDMuNDE1MTRjLTAuMzQ1NTcsMC43MTY5MiAtMS4xNjQ2NywxLjYwMzMgLTYuNDI0OSw2Ljk4NjY5Yy0zLjMxNDg0LDMuMzg5MDYgLTYuMjk2OTMsNi4zNzQwNSAtNi42Mjk2OSw2LjYyMTcxYy0xLjg2ODU5LDEuNDA3NzYgLTQuNDUzOTIsMS42MDMyOSAtNi43MzIwNywwLjUwODM2Yy0yLjcwMDUxLC0xLjMwMzQ4IC00LjM4OTkzLC0zLjc0MTAxIC00LjU5NDcsLTYuNjQ3NzljLTAuMTQwNzgsLTIuMDU5NTEgMC40NzM1NSwtMy41NDU0OSAyLjIxNDE3LC01LjM5NjQ0bDEuMTc3NDcsLTEuMjI1MjhsLTEuODE3NCwtMi4yOTQxNGMtNC4xMjExNSwtNS4yNDAwMiAtNi4yNDU3MywtNi44NDMzMSAtOS4yOTE4LC03LjAxMjc3Yy0wLjc0MjMyLC0wLjA1MjE0IC0xLjM5NTA0LDAgLTIuMDQ3NzgsMC4xNDMzOWMtMy41MzI0MiwwLjc5NTEyIC01LjkwMDE2LDAuNTczNTMgLTguMTc4MzIsLTAuNzE2OTNjLTAuODA2MzEsLTAuNDY5MjYgLTEuODQzLC0xLjE4NjE3IC0yLjMxNjU1LC0xLjYyOTM2bC0wLjMzMjc3LC0wLjI5OThsLTEzLjQxMjk1LDEzLjY2MDU1Yy03LjkwOTU1LDguMDU1NTUgLTEzLjM4NzM2LDEzLjcyNTcyIC0xMy4zMzYxNywxMy44MTY5N2MwLjA1MTE5LDAuMDc4MjEgMS4zOTUwNSwxLjM4MTcgMi45OTQ4OCwyLjkwNjc3YzEuNTk5ODMsMS41MjUwOCAzLjE2MTI2LDMuMDM3MTMgMy40ODEyMywzLjM2M2MwLjMxOTk3LDAuMzI1ODcgMi4wOTg5NywyLjA1OTUxIDMuOTY3NTcsMy44NDUyOWMxLjg2ODU5LDEuNzk4ODEgMy45OTMxNywzLjg0NTI5IDQuNzM1NDksNC41NjIyMWMwLjc0MjMyLDAuNzE2OTIgMi44NDEyOSwyLjczNzMzIDQuNjcxNSw0LjQ5NzA0YzEuODMwMiwxLjc1OTcxIDMuOTI5MTcsMy43ODAxMSA0LjY3MTQ5LDQuNDk3MDNjMC43NDIzMiwwLjcxNjkyIDIuODQxMjksMi43MzczMyA0LjY3MTUsNC40OTcwNGMxLjgzMDIsMS43NTk3MSAzLjkyOTE4LDMuNzgwMTEgNC42NzE1LDQuNDk3MDNjMC43NDIzMiwwLjcxNjkyIDIuODY2ODksMi43NzY0NCA0LjczNTQ5LDQuNTYyMjFjMS44Njg1OSwxLjc4NTc4IDMuOTY3NTcsMy44MDYxOCA0LjY3MTUsNC40OTcwM2MwLjcwMzkzLDAuNjkwODUgMS44MDQ2MSwxLjc0NjY3IDIuNDMxNzQsMi4zNDYyOGM3LjMyMDgxLDcuMDI1OCAxMi43MjE4MiwxMi4yNzg4NSAxMy40NTEzNCwxMy4wODcwMWMyLjQ1NzMzLDIuNjk4MjEgMy41NDUyMiw2LjQxMzE2IDIuOTQzNjksOS45MzI1N2MtMC44NzAzLDUuMDMxNDYgLTQuNDc5NTIsOS4zODUxMSAtOS4wOTk4MiwxMC45NzUzN2MtMS41NDg2NCwwLjUyMTM5IC0yLjA0Nzc4LDAuNjEyNjMgLTMuNzc1NTksMC42MTI2M2MtMi4wMDkzOCwwIC0yLjkwNTI4LC0wLjE2OTQ1IC00LjU4MTksLTAuODYwM2MtMS44NDMsLTAuNzU2MDIgLTMuMjM4MDUsLTEuNzMzNjQgLTUuMDA0MjYsLTMuNDgwMzFjLTAuNTYzMTQsLTAuNTQ3NDcgLTQuMTQ2NzUsLTQuNDA1NzggLTcuOTczNTQsLTguNTYzOTFjLTMuODEzOTgsLTQuMTU4MTMgLTcuODcxMTUsLTguNTUwODggLTguOTk3NDMsLTkuNzc2MTVjLTMuMzc4ODMsLTMuNjQ5NzcgLTE3LjU3MjUsLTE5LjA0Mzk1IC0yMC45ODk3MywtMjIuNzQ1ODZjLTEuNzUzNDEsLTEuOTAzMDkgLTQuMDQ0MzYsLTQuMzkyNzUgLTUuMTA2NjUsLTUuNTM5ODJjLTEuMDYyMjksLTEuMTQ3MDcgLTMuMTg2ODUsLTMuNDU0MjUgLTQuNzIyNjksLTUuMTIyNzFjLTEuNTM1ODQsLTEuNjU1NDMgLTIuODQxMjksLTMuMDI0MSAtMi45MDUyOCwtMy4wMjQxYy0wLjA1MTE5LDAgLTAuMzQ1NTcsMC4yNzM3NCAtMC42NTI3MywwLjYxMjY0Yy0wLjUzNzU1LDAuNjEyNjQgLTMuMTk5NjYsMy40NjcyOCAtMTAuOTk0MDEsMTEuODM1NjdjLTIuMDczMzcsMi4yMjg5NiAtNS4yNzMwMyw1LjY1NzE0IC03LjExNjAzLDcuNjI1NGMtMjYuNzQ5MTEsMjguNzE1ODMgLTMyLjEzNzMzLDM0LjQ3NzI1IC0zMi42NDkyNywzNC45NDY1Yy0xLjI2NzA3LDEuMTYwMSAtMi42NjIxMiwxLjcwNzU3IC00LjM4OTkzLDEuNzA3NTdjLTEuMzY5NDUsMC4wMTMwNCAtMi4wMjIxOCwtMC4xMTczMSAtMy40ODEyMiwtMC42OTA4NWMtMi4wNjA1OCwtMC44MDgxNyAtMi43MjYxMSwtMS4zOTQ3MyAtOS40NTgxOCwtOC4yOTAxOGMtNi44MzQ0NywtNi45ODY2OSAtNy4yNDQwMiwtNy40ODIwMiAtNy45MDk1NSwtOS41NDE1M2MtMC41ODg3NCwtMS44MjQ4OCAtMC4yMDQ3OCwtMy43MTQ5NCAxLjEyNjI4LC01LjUxMzc1YzAuMjU1OTcsLTAuMzUxOTQgMi45NDM2OSwtMy4wNjMyMSA1Ljk2NDE2LC02LjAwOTA4YzMuMDMzMjcsLTIuOTU4OTIgNi4zMzUzMiwtNi4xOTE1NyA3LjM1OTIxLC03LjE5NTI1YzEuOTcwOTksLTEuOTQyMiA1LjMxMTQzLC01LjIwMDkxIDEyLjY3MDYzLC0xMi4zODMxM2MyLjQ5NTczLC0yLjQzNzUyIDUuMzQ5ODMsLTUuMjI2OTggNi4zMzUzMiwtNi4xOTE1N2MwLjk4NTQ5LC0wLjk2NDU4IDMuODEzOTksLTMuNzI3OTcgNi4yNzEzMiwtNi4xMjY0YzIuNDcwMTMsLTIuMzk4NDIgNS4yODU4MywtNS4xNjE4MiA2LjI3MTMyLC02LjEyNjM5YzAuOTg1NDksLTAuOTc3NjIgMy43NjI3OSwtMy42ODg4NyA2LjE4MTczLC02LjA0ODE4YzIuNDA2MTQsLTIuMzU5MzEgNC4zNzcxMywtNC4zMjc1OCA0LjM3NzEzLC00LjM5Mjc1YzAsLTAuMTE3MzIgLTEuMTc3NDgsLTEuNDA3NzYgLTguOTU5MDMsLTkuODI4MjljLTEuNTIzMDQsLTEuNjU1NDMgLTMuNTA2ODIsLTMuODA2MTggLTQuNDE1NTMsLTQuNzk2ODRjLTAuODk1OTEsLTAuOTc3NjIgLTEuNjYzODIsLTEuNzg1NzggLTEuNjg5NDIsLTEuNzg1NzhjLTAuMDI1NiwwIC0wLjQ2MDc0LDAuMDkxMjQgLTAuOTcyNjksMC4xODI0OWMtMC41MTE5NCwwLjEwNDI4IC0xLjg2ODYxLDAuMzc4MDIgLTMuMDMzMjgsMC41OTk2MWMtMS4xNjQ2OCwwLjIyMTU5IC0yLjM2Nzc0LDAuNDU2MjIgLTIuNjg3NzEsMC41MjEzOWMtMC4zMTk5NywwLjA2NTE4IC0xLjUyMzA0LDAuMjk5OCAtMi42ODc3MSwwLjUyMTM5Yy0xLjE2NDY4LDAuMjIxNTkgLTIuMzY3NzQsMC40NTYyMiAtMi42ODc3MSwwLjUyMTRjLTAuMzE5OTcsMC4wNjUxOCAtMS41MjMwNCwwLjI5OTggLTIuNjg3NzEsMC41MjEzOWMtMS4xNjQ2OCwwLjIyMTU5IC0yLjUwODUzLDAuNDgyMjkgLTMuMDA3NjcsMC41ODY1N2MtNC4zMTMxNCwwLjg2MDMgLTYuNjI5NjksMS4yNTEzNSAtNi43MDY0OCwxLjE2MDFjLTAuMDUxMTksLTAuMDY1MTggLTIuMTM3MzYsLTMuMTE1MzQgLTQuNjIwMywtNi43NjUxYy0yLjQ5NTczLC0zLjY2MjggLTYuMTY4OTMsLTguOTk0MDYgLTguMTY1NTEsLTExLjg2MTczYy0yLjAwOTM4LC0yLjg2NzY3IC00LjYwNzUsLTYuNTgyNjIgLTUuNzcyMTgsLTguMjY0MTFjLTEuMTY0NjgsLTEuNjY4NDYgLTIuMTExNzgsLTMuMTQxNDEgLTIuMDg2MTcsLTMuMjU4NzFjMC4wMjU2LC0wLjExNzMyIDEuODY4NiwtMi4wNzI1NSA0LjA5NTU2LC00LjM1MzY1bDQuMDU3MTYsLTQuMTMyMDZsOS4wMjMwMiw5LjE4OTU5bDkuMDIzMDMsOS4xODk1OWw2LjA5MjE0LC0xLjc3Mjc0bDYuMTA0OTQsLTEuNzcyNzRsMS4xMTM0OCwtNC4wMDE3MWMwLjYyNzEzLC0yLjE4OTg2IDEuMTc3NDgsLTQuMTg0MiAxLjI0MTQ3LC00LjQxODgzYzAuMTAyMzksLTAuNDA0MDkgMC4yMzAzOCwtMC44ODYzNyAwLjQ3MzU1LC0xLjc1OTcxYzAuMTc5MTgsLTAuNTg2NTcgMC4zOTY3NiwtMS4zODE3IDAuNTExOTQsLTEuODUwOTVjMC4xMDIzOSwtMC4zNzgwMSAtMC4xMDIzOSwtMC42MTI2MyAtOC44OTUwNCwtOS41ODA2M2wtOS4wMTAyMywtOS4xODk1OWw0LjQ1MzkyLC00LjUzNjE0bDQuNDQxMTIsLTQuNTIzMWwxLjIxNTg3LDAuODIxMmMxLjU2MTQzLDEuMDY4ODYgMTguNTgzNiwxMi4zNTcwNiAyNC43NjUzMywxNi40MjM5NGMyLjYxMDkyLDEuNzA3NTcgNC43MjI2OSwzLjE4MDUxIDQuNzIyNjksMy4yNTg3MmMtMC4wMTI4LDAuMDkxMjUgLTAuMjA0NzgsMC45NTE1NCAtMC40MjIzNSwxLjkxNjEyYy0wLjY3ODMzLDMuMDM3MTMgLTEuNDQ2MjUsNi40MzkyMyAtMS41NDg2NCw2LjkwODQ5Yy0wLjA1MTE5LDAuMjQ3NjYgLTAuMzk2NzUsMS43OTg4MSAtMC43Njc5MSwzLjQ1NDI0Yy0wLjcyOTUyLDMuMjMyNjUgLTAuODA2MzEsMy42MTA2NiAtMC45OTgzLDQuNDk3MDNjLTAuMDYzOTksMC4zMjU4NyAtMC40MjIzNSwxLjkyOTE2IC0wLjc5MzUyLDMuNTg0NTljLTAuOTM0Myw0LjE5NzIzIC0wLjkyMTUsNC4xNDUwOSAtMC45NDcxLDQuNDMxODZjLTAuMDEyOCwwLjI3MzczIDAuNDQ3OTUsMC43NDI5OCA2LjI1ODUyLDYuMzIxOTFjMS44MzAyLDEuNzU5NzEgMy45MjkxOCwzLjc4MDExIDQuNjcxNSw0LjQ5NzAzYzEuMjAzMDcsMS4xNzMxMyA2Ljk2MjQ1LDYuNzEyOTYgOC44Njk0NCw4LjUyNDgxbDAuNzQyMzIsMC43MTY5MmwxMy41NzkzNCwtMTMuODMwMDFsMTMuNTc5MzQsLTEzLjgzbC0wLjI4MTU3LC0wLjQwNDA5Yy0wLjcwMzkzLC0xLjAwMzY5IC0xLjEyNjI4LC0yLjQzNzUyIC0xLjI0MTQ3LC00LjE4NDJjLTAuMTAyMzksLTEuNTY0MTggMC4wNjM5OSwtMi40NjM1OSAwLjcxNjczLC0zLjkxMDQ2YzAuOTg1NDksLTIuMTYzNzkgMS4yNTQyNywtMy43Mjc5OCAxLjAyMzg5LC01Ljg1MjY2Yy0wLjU3NTk0LC01LjA5NjYzIC00LjEwODM2LC0xMC4xMTUwNiAtMTAuMzkyNDgsLTE0LjcyOTQxYy0zLjM3ODgzLC0yLjQ3NjYzIC04LjEyNzEyLC00LjgzNTk0IC0xMi4xOTcwOCwtNi4wNjEyMmMtMy44OTQxMywtMS4xNjAyIC0wLjcwMzkzLC0zLjg3MTM2IDMuNzc1NTksLTQuMTcxMTZjMS4zNDM4NSwtMC4wOTEyNSA3Ljg3MTE1LDAuMDM5MSA4Ljc2NzA2LDAuMTgyNDl6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxMzMuNToxMzMuNS0tPg==';

    class NicheToolbox {
        getInfo() {
            return {
                id: '0znzwNicheToolbox',
                color1: "#ed6300",
                color2: "#d65900",
                color3: "#c65200",
                name: "The Niche Toolbox",
                menuIconURI,
                blocks: [_addLabel('Color at XY'), {
                    opcode: 'cAxy_getColorAt',
                    text: 'get [attr] of color at x: [x] y: [y]',
                    disableMonitor: true,
                    blockType: BlockType.REPORTER,
                    arguments: {
                        attr: { type: ArgumentType.STRING, menu: 'cAxy_modes' },
                        x: { type: ArgumentType.NUMBER, defaultValue: 0 },
                        y: { type: ArgumentType.NUMBER, defaultValue: 0 },
                    }
                }, _addLabel('Sound to DataURL'), {
                    opcode: 'stJS_soundToDataUrl',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'convert sound [SOUND] to data URL',
                    arguments: {
                        SOUND: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'soundsMenu'
                        }
                    }
                }, _addLabel('ShovelUtils+'), {
                    opcode: 'sUp_deleteCostume',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'delete costume [COSNAME] in [SPRITE]',
                    arguments: {
                        COSNAME: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'costume1'
                        },
                        SPRITE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Sprite1'
                        }
                    }
                }, {
                    hideFromPalette: true,
                    opcode: 'sUp_deleteSpriteNoConfirm',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Delete sprite [SPRITE] | No Confirmation',
                    arguments: {
                        SPRITE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Sprite1'
                        }
                    }
                }],
                menus: {
                    /* UTIL MENUS */
                    soundsMenu: {
                        acceptReporters: true,
                        items: '_getSounds'
                    },
                    /* SECTION: colorAtXY.js */
                    cAxy_modes: {
                        acceptReporters: true,
                        items: ['hex','json','rgba(json object)','red(r)','green(g)','blue(b)','alpha(a)']
                    }
                }
            };
        }

        _getSounds() {
            const sounds = Scratch.vm.runtime.getEditingTarget().sprite.sounds.map(item=>{
                return item.name;
            });
            if (sounds.length > 0) {
                return sounds;
            }
            return [{text:'',value:''}];
        }

        _getSoundIndex(soundName, util) {
            const sounds = util.target.sprite.sounds;
            return sounds.indexOf(sounds.filter((sound) => {
                return sound.name == soundName;
            })[0]);
        }

        /* SECTION: shovelutils+.js */
        sUp_deleteSpriteNoConfirm({ SPRITE }) {
            const target = runtime.getSpriteTargetByName(SPRITE);
            if (!target || target.isStage) {
                return;
            }
            vm.deleteSprite(target.id);
        }

        sUp_deleteCostume({SPRITE, COSNAME}, util) {
            var target;
            if (SPRITE == 'Stage') {
                target = runtime.targets[0];
            } else {
                target = runtime.getSpriteTargetByName(SPRITE);
            }

            if (!target) {
                return;
            }
            target.deleteCostume(target.getCostumeIndexByName(COSNAME));
        }

        /* SECTION: colorAtXY.js */
        cAxy_getColorAt(args) {
            function rgbaToHex(t,r,a,S){
                let n = t.toString(16).padStart(2,"0"),o = r.toString(16).padStart(2,"0"),g = a.toString(16).padStart(2,"0"),i = S.toString(16).padStart(2,"0");return `#${n}${o}${g}${i}`;
            }
            var x = Cast.toNumber(args.x);
            var y = Cast.toNumber(args.y) * -1;
            const canvas = (document.querySelector("canvas").getBoundingClientRect());
            console.log(canvas);
            const returnObj = renderer.extractColor(x, y,1).color;
            switch (args.attr) {
                case 'hex':
                    return rgbaToHex(returnObj.r,returnObj.g,returnObj.b,returnObj.a).toString();
                case 'rgba(json object)':
                    return JSON.stringify(returnObj);
                case 'json':
                    return JSON.stringify([returnObj.r,returnObj.g,returnObj.b,returnObj.a]);
                case 'red(r)':
                    return returnObj.r;
                case 'green(g)':
                    return returnObj.g;
                case 'blue(b)':
                    return returnObj.b;
                case 'alpha(a)':
                    return returnObj.a;
            }
            }

        /* SECTION: soundTo.js */
        stJS_soundToDataUrl(args, util) {
            const index = this._getSoundIndex(args.SOUND, util);
            if (index < 0) return '';
            const sprite = util.target.sprite;
            const dataUrl = sprite.sounds[index].asset.encodeDataURI();
            return dataUrl;
        }
    }

    Scratch.extensions.register(new NicheToolbox());
})(Scratch);
