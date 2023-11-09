/*
* v1.0 | Created by SharkPool.
* https://www.youtube.com/c/SharkPoolthe1
* Do not remove this comment
*/
(function (Scratch) {
    'use strict';
    if (!Scratch.extensions.unsandboxed) {
        throw new Error('This TimeExpanded must run unsandboxed');
    }

    const vm = Scratch.vm;

class TimeExpanded {

    getInfo() {
        return {
        id: 'sharkpooltimeexpanded',
        name: 'Time Expanded',
        color1: "#5D53D4",
        blocks: [{
                opcode: 'calculateTimeDuration',
                blockType: 'reporter',
                text: '[TIME_MENU] since year [START_YEAR] month [START_MONTH] day [START_DAY]',
                arguments: {
                    TIME_MENU: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'TIME_MENU',
                        defaultValue: 'days',
                    },
                    START_YEAR: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 2022,
                    },
                    START_MONTH: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 1,
                    },
                    START_DAY: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 1,
                    },
                },
            }, {
                opcode: 'calculateTimeDurationFromTime',
                blockType: 'reporter',
                text: '[TIME_MENU] since [START_HOUR]:[START_MINUTE]',
                arguments: {
                        TIME_MENU: {
                        type: Scratch.ArgumentType.STRING,
                        menu: 'TIME_MENU',
                        defaultValue: 'minutes',
                    },
                    START_HOUR: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                    START_MINUTE: {
                        type: Scratch.ArgumentType.NUMBER,
                        defaultValue: 0,
                    },
                },
            }, {
                    opcode: 'calculateTimeAddition',
                    blockType: 'reporter',
                    text: '[OPERATION] [MINUTES] minutes from [START_HOUR]:[START_MINUTE]',
                    arguments: {
                        OPERATION: {
                            type: Scratch.ArgumentType.STRING,
                            menu: 'OPERATION',
                            defaultValue: 'add',
                        },
                        MINUTES: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                        START_HOUR: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                        START_MINUTE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0,
                        },
                    },
            }, {
                opcode: 'convertToTime',
                blockType: 'reporter',
                text: '[VALUE] to time',
                arguments: {
                    VALUE: {
                        type: 'number',
                        defaultValue: 0,
                    },
                },
            },
        ],
        menus: {
            TIME_MENU: {
                items: ['days', 'months', 'years', 'minutes', 'hours'],
                acceptReporters: true
            },
            OPERATION: {
                items: ['add', 'subtract'],
                acceptReporters: true
            },
        }
        };
    }

    calculateTimeDuration({ TIME_MENU, START_YEAR, START_MONTH, START_DAY }) {
        const currentDate = new Date();
        const startDate = new Date(Scratch.Cast.toNumber(START_YEAR), Scratch.Cast.toNumber(START_MONTH - 1), Scratch.Cast.toNumber(START_DAY));
        const timeDifference = Math.abs(currentDate - startDate);

        let result = 0;
        switch (TIME_MENU) {
            case 'days':
                result = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                break;
            case 'months':
                result =
                currentDate.getMonth() -
                startDate.getMonth() +
                12 * (currentDate.getFullYear() - startDate.getFullYear());
                break;
            case 'years':
                result = currentDate.getFullYear() - startDate.getFullYear();
                break;
            case 'minutes':
                result = Math.floor(timeDifference / (1000 * 60));
                break;
            case 'hours':
                result = Math.floor(timeDifference / (1000 * 60 * 60));
                break;
            default:
                result = 0;
                break;
        }

        return result;
    }

        calculateTimeDurationFromTime({ TIME_MENU, START_HOUR, START_MINUTE }) {
            const currentDate = new Date();
            const startTime = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                currentDate.getDate(),
                Scratch.Cast.toNumber(START_HOUR),
                Scratch.Cast.toNumber(START_MINUTE)
            );
            const timeDifference = Math.abs(currentDate - startTime);

            let result = 0;
            switch (TIME_MENU) {
                case 'minutes':
                    result = Math.floor(timeDifference / (1000 * 60));
                    break;
                case 'hours':
                    result = Math.floor(timeDifference / (1000 * 60 * 60));
                    break;
                default:
                    result = 0;
                    break;
            }

            return result;
        }

        calculateTimeAddition({ OPERATION, MINUTES, START_HOUR, START_MINUTE }) {
            MINUTES = Scratch.Cast.toNumber(MINUTES);
            START_HOUR = Scratch.Cast.toNumber(START_HOUR);
            START_MINUTE = Scratch.Cast.toNumber(START_MINUTE);
            const startTime = new Date();
            startTime.setHours(START_HOUR);
            startTime.setMinutes(START_MINUTE);

            let result = new Date(startTime.getTime());
            switch (OPERATION) {
                case 'add':
                    result.setMinutes(result.getMinutes() + MINUTES);
                    break;
                case 'subtract':
                    result.setMinutes(result.getMinutes() - MINUTES);
                    break;
                default:
                    result.setMinutes(result.getMinutes() + MINUTES);
                    break;
            }

            const hours = result.getHours();
            const minutes = result.getMinutes();

            return `${hours}:${minutes}`;
        }

        convertToTime({ VALUE }) {
            VALUE = Scratch.Cast.toNumber(VALUE);
            const days = Math.floor(VALUE / (24 * 60));
            const hours = Math.floor((VALUE % (24 * 60)) / 60);
            const minutes = VALUE % 60;

            let result = '';
            if (days > 0) {
                result += `${days} day${days > 1 ? 's' : ''}`;
                if (hours > 0 || minutes > 0) {
                    result += ', ';
                }
            }

            if (hours > 0) {
                result += `${hours} hour${hours > 1 ? 's' : ''}`;
                if (minutes > 0) {
                    result += ' and ';
                }
            }

            if (minutes > 0) {
                result += `${minutes} minute${minutes > 1 ? 's' : ''}`;
            }

            return result;
        }
    }

    //@ts-expect-error
    Scratch.extensions.register(new TimeExpanded());
})(Scratch);