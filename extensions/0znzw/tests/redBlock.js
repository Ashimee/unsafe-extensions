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