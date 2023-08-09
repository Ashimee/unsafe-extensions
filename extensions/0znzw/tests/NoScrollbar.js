(function(Scratch){
    class NoScrollbar {
        getInfo() {
            return {
                id: '0znzwNoScrollbar',
                name: 'No Scrollbar :)',
                menus: {},
                blocks: [
                    {
                        //@ts-expect-error
                        blockType: Scratch.BlockType.XML,
                        xml: '<sep gap="2147483647" />'
                    }
                ]
            }
        }
    }
    //@ts-expect-error
    Scratch.extensions.register(new NoScrollbar());
})(Scratch);