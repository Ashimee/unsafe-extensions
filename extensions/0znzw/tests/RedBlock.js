/*
  Created by 0znzw | v1
  Licensed Under MIT License.
  DO NOT REMOVE THIS COMMENT!!
*/
(function(Scratch){
    class RedBlock {
        getInfo() {
            return {
                id: '0znzwRedBlock',
                name: '',
                menus: {},
                blocks: [
                    {
                        //@ts-expect-error
                        blockType: Scratch.BlockType.XML,
                        xml: '<block type="control_fori"/>'
                    }
                ]
            }
        }
    }
    //@ts-expect-error
    Scratch.extensions.register(new RedBlock());
})(Scratch);