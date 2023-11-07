/**
 * Right Click Menu extension v1.0 by 0znzw (English Version)
 * All code is by 0znzw || licensed under MIT license.
 * https://scratch.mit.edu/users/0znzw/
 * Do not remove this comment
 */
(function(Scratch) {
  'use strict';
  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Right-Click-Menu(Extension) must be run unsandboxed');
  }
  const disable = function(e){e.preventDefault(); return false}, enable = function(e){return true};
  const fakeEvent = {preventDefault: function(){}};
  document.oncontextmenu = enable;
  let isDisabled = false;
  class extension {
    getInfo() { return({
      id: '0znzwRightClick',
      name: 'Right Click menu',
      blocks: [{
        blockType: Scratch.BlockType.COMMAND,
        opcode: 'enable',
        text: 'enable right click menu'
      }, {
        blockType: Scratch.BlockType.COMMAND,
        opcode: 'disable',
        text: 'disable right click menu'
      }, {
        blockType: Scratch.BlockType.BOOLEAN,
        opcode: 'isDisabled',
        text: 'is right click menu disabled?'
      }]
    })}
    isDisabled() { return(!document.oncontextmenu(fakeEvent)) }
    enable() { document.oncontextmenu = enable; }
    disable() { document.oncontextmenu = disable; }
  }
  Scratch.extensions.register(new extension());
})(Scratch);