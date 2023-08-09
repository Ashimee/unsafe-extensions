  /*
  * ColorAtXY extension v1.0 by 0znzw (English Version)
  * THIS EXTENSION WAS MINE, I LET SHARKPOOL USE IT, I WAS NOT CREDITED PROPERLY
  * Do not remove this comment
  */
  (function (Scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) {
      throw new Error('Color At XY must be run unsandboxed');
  }

    const BlockType = Scratch.BlockType;
    const ArgumentType = Scratch.ArgumentType;
    const Cast = Scratch.Cast;
    const renderer = Scratch.vm.renderer;

    class ColorAtXY {
        getInfo() {
            return {
                id: '0znzwColorAtXY',
                name: 'Color At XY',
                blocks: [
                    {
                        opcode: 'getColorAt',
                        text: 'get [attr] of color at x: [x] y: [y]',
                        disableMonitor: true,
                        blockType: BlockType.REPORTER,
                        arguments: {
                            attr: { type: ArgumentType.STRING, menu: 'modes' },
                            x: { type: ArgumentType.NUMBER, defaultValue: 0 },
                            y: { type: ArgumentType.NUMBER, defaultValue: 0 },
                        }
                    }
                ],
                menus: {
                    modes: {
                        acceptReporters: true,
                        items: ['hex','json','rgba(json object)','red(r)','green(g)','blue(b)','alpha(a)']
                    }
                }
            };
        }

        getColorAt(args) {
          function rgbaToHex(t,r,a,S){let n=t.toString(16).padStart(2,"0"),o=r.toString(16).padStart(2,"0"),g=a.toString(16).padStart(2,"0"),i=S.toString(16).padStart(2,"0");return`#${n}${o}${g}${i}`}
          var x = Cast.toNumber(args.x);
          var y = Cast.toNumber(args.y);
          const returnObj = renderer.extractColor(vm.runtime.stageWidth/2+x,vm.runtime.stageHeight/2+y,1).color;
          switch (args.attr) {
            case 'hex':
              return rgbaToHex(returnObj.r,returnObj.g,returnObj.b,returnObj.a).toString();
            case 'rgba(json object)':
              return JSON.stringify(returnObj);
            case 'json':
              return JSON.stringify([returnObj.r,returnObj.g,returnObj.b,returnObj.a]);
            case 'hex':
              return 
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
    }

    Scratch.extensions.register(new ColorAtXY());
})(Scratch);
