(function(Scratch){
    let api = 'https://corsproxy.io/?https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&tags=@t&pid=@p&p_offer=1,0,4,0,1,1,6,0,1,1,6,0,1,1,2,0,1,1,5,0,5,8,0,4,7,0,4,7,0,1,0,3,0,1,0,5,0,1,1,6,0,1,0,4,0,1,1,7,0,9,8,0,4,6,0,9,9,0,1,1,1,0,1,0,9,0,4,7,0,8,3,0,1,1,7,0,1,1,4,0,1,1,8,0,6,9,0,1,2,0,0,6,9,0,4,9,0,8,0,0,9,9';
    Scratch.extensions.register({
    getInfo() {
      return({
        name: 'not r34 i swear', id:'sharkpoolLikesPorn',
        blocks: [{opcode:'f',blockType:'reporter',text:'r34 | fetch w/ tags: [tags] and pid: [page]',arguments:{tags:{type:'string',defaultValue:/*not a fetish I swear*/'[\'futanari\']'},page:{type:'number',defaultValue:0}}}]
      })
    },
    //@ts-ignore
    async f({ tags, page }) {
      let spawnTags = (function(){try{tags=JSON.parse(tags)}catch{return []};if(tags.hasOwnProperty('length')) {return tags}; return []}).call().join(', ');
      spawnTags = (spawnTags.slice(0, spawnTags.lastIndexOf(', ')));
      //@ts-ignore
      let call = api.replace('@p', Scratch.Cast.toNumber(page));
      call = call.replace('@t', encodeURIComponent(spawnTags));
      let f = await fetch(call);
      f = await f.json();
      return JSON.stringify(f);
    }});
  })(Scratch);