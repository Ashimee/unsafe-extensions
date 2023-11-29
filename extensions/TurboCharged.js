/* View the unminified source here: https://github.com/SurvExe1Pc/TurboCharged/ */
//@ts-ignore
!function(e){"use strict";globalThis.Scratch=e;let t={Colours:{motion:{primary:"#4C97FF",secondary:"#4280D7",tertiary:"#3373CC"},looks:{primary:"#9966FF",secondary:"#855CD6",tertiary:"#774DCB"},sounds:{primary:"#CF63CF",secondary:"#C94FC9",tertiary:"#BD42BD"},control:{primary:"#FFAB19",secondary:"#EC9C13",tertiary:"#CF8B17"},event:{primary:"#FFBF00",secondary:"#E6AC00",tertiary:"#CC9900"},sensing:{primary:"#5CB1D6",secondary:"#47A8D1",tertiary:"#2E8EB8"},pen:{primary:"#0fBD8C",secondary:"#0DA57A",tertiary:"#0B8E69"},operators:{primary:"#59C059",secondary:"#46B946",tertiary:"#389438"},data:{primary:"#FF8C1A",secondary:"#FF8000",tertiary:"#DB6E00"},data_lists:{primary:"#FF661A",secondary:"#FF5500",tertiary:"#E64D00"},more:{primary:"#FF6680",secondary:"#FF4D6A",tertiary:"#FF3355"},text:"#575E75",workspace:"#F9F9F9",toolboxHover:"#4C97FF",toolboxSelected:"#E9EEF2",toolboxText:"#575E75",toolbox:"#FFFFFF",flyout:"#F9F9F9",scrollbar:"#CECDCE",scrollbarHover:"#CECDCE",textField:"#FFFFFF",insertionMarker:"#000000",insertionMarkerOpacity:.2,dragShadowOpacity:.6,stackGlow:"#FFF200",stackGlowSize:4,stackGlowOpacity:1,replacementGlow:"#FFFFFF",replacementGlowSize:2,replacementGlowOpacity:1,colourPickerStroke:"#FFFFFF",fieldShadow:"rgba(255, 255, 255, 0.3)",dropDownShadow:"rgba(0, 0, 0, .3)",numPadBackground:"#547AB2",numPadBorder:"#435F91",numPadActiveBackground:"#435F91",numPadText:"white",valueReportBackground:"#FFFFFF",valueReportBorder:"#AAAAAA"},ScratchMsgs:{translate:function(e){return e}},Msg:JSON.parse('{"CONTROL_FOREVER":"forever","CONTROL_REPEAT":"repeat %1","CONTROL_IF":"if %1 then","CONTROL_ELSE":"else","CONTROL_STOP":"stop","CONTROL_STOP_ALL":"all","CONTROL_STOP_THIS":"this script","CONTROL_STOP_OTHER":"other scripts in sprite","CONTROL_WAIT":"wait %1 seconds","CONTROL_WAITUNTIL":"wait until %1","CONTROL_REPEATUNTIL":"repeat until %1","CONTROL_WHILE":"while %1","CONTROL_FOREACH":"for each %1 in %2","CONTROL_STARTASCLONE":"when I start as a clone","CONTROL_CREATECLONEOF":"create clone of %1","CONTROL_CREATECLONEOF_MYSELF":"myself","CONTROL_DELETETHISCLONE":"delete this clone","CONTROL_COUNTER":"counter","CONTROL_INCRCOUNTER":"increment counter","CONTROL_CLEARCOUNTER":"clear counter","CONTROL_ALLATONCE":"all at once","DATA_SETVARIABLETO":"set %1 to %2","DATA_CHANGEVARIABLEBY":"change %1 by %2","DATA_SHOWVARIABLE":"show variable %1","DATA_HIDEVARIABLE":"hide variable %1","DATA_ADDTOLIST":"add %1 to %2","DATA_DELETEOFLIST":"delete %1 of %2","DATA_DELETEALLOFLIST":"delete all of %1","DATA_INSERTATLIST":"insert %1 at %2 of %3","DATA_REPLACEITEMOFLIST":"replace item %1 of %2 with %3","DATA_ITEMOFLIST":"item %1 of %2","DATA_ITEMNUMOFLIST":"item # of %1 in %2","DATA_LENGTHOFLIST":"length of %1","DATA_LISTCONTAINSITEM":"%1 contains %2?","DATA_SHOWLIST":"show list %1","DATA_HIDELIST":"hide list %1","DATA_INDEX_ALL":"all","DATA_INDEX_LAST":"last","DATA_INDEX_RANDOM":"random","EVENT_WHENFLAGCLICKED":"when %1 clicked","EVENT_WHENTHISSPRITECLICKED":"when this sprite clicked","EVENT_WHENSTAGECLICKED":"when stage clicked","EVENT_WHENTOUCHINGOBJECT":"when this sprite touches %1","EVENT_WHENBROADCASTRECEIVED":"when I receive %1","EVENT_WHENBACKDROPSWITCHESTO":"when backdrop switches to %1","EVENT_WHENGREATERTHAN":"when %1 > %2","EVENT_WHENGREATERTHAN_TIMER":"timer","EVENT_WHENGREATERTHAN_LOUDNESS":"loudness","EVENT_BROADCAST":"broadcast %1","EVENT_BROADCASTANDWAIT":"broadcast %1 and wait","EVENT_WHENKEYPRESSED":"when %1 key pressed","EVENT_WHENKEYPRESSED_SPACE":"space","EVENT_WHENKEYPRESSED_LEFT":"left arrow","EVENT_WHENKEYPRESSED_RIGHT":"right arrow","EVENT_WHENKEYPRESSED_DOWN":"down arrow","EVENT_WHENKEYPRESSED_UP":"up arrow","EVENT_WHENKEYPRESSED_ANY":"any","LOOKS_SAYFORSECS":"say %1 for %2 seconds","LOOKS_SAY":"say %1","LOOKS_HELLO":"Hello!","LOOKS_THINKFORSECS":"think %1 for %2 seconds","LOOKS_THINK":"think %1","LOOKS_HMM":"Hmm...","LOOKS_SHOW":"show","LOOKS_HIDE":"hide","LOOKS_HIDEALLSPRITES":"hide all sprites","LOOKS_EFFECT_COLOR":"color","LOOKS_EFFECT_FISHEYE":"fisheye","LOOKS_EFFECT_WHIRL":"whirl","LOOKS_EFFECT_PIXELATE":"pixelate","LOOKS_EFFECT_MOSAIC":"mosaic","LOOKS_EFFECT_BRIGHTNESS":"brightness","LOOKS_EFFECT_GHOST":"ghost","LOOKS_CHANGEEFFECTBY":"change %1 effect by %2","LOOKS_SETEFFECTTO":"set %1 effect to %2","LOOKS_CLEARGRAPHICEFFECTS":"clear graphic effects","LOOKS_CHANGESIZEBY":"change size by %1","LOOKS_SETSIZETO":"set size to %1 %","LOOKS_SIZE":"size","LOOKS_CHANGESTRETCHBY":"change stretch by %1","LOOKS_SETSTRETCHTO":"set stretch to %1 %","LOOKS_SWITCHCOSTUMETO":"switch costume to %1","LOOKS_NEXTCOSTUME":"next costume","LOOKS_SWITCHBACKDROPTO":"switch backdrop to %1","LOOKS_GOTOFRONTBACK":"go to %1 layer","LOOKS_GOTOFRONTBACK_FRONT":"front","LOOKS_GOTOFRONTBACK_BACK":"back","LOOKS_GOFORWARDBACKWARDLAYERS":"go %1 %2 layers","LOOKS_GOFORWARDBACKWARDLAYERS_FORWARD":"forward","LOOKS_GOFORWARDBACKWARDLAYERS_BACKWARD":"backward","LOOKS_BACKDROPNUMBERNAME":"backdrop %1","LOOKS_COSTUMENUMBERNAME":"costume %1","LOOKS_NUMBERNAME_NUMBER":"number","LOOKS_NUMBERNAME_NAME":"name","LOOKS_SWITCHBACKDROPTOANDWAIT":"switch backdrop to %1 and wait","LOOKS_NEXTBACKDROP_BLOCK":"next backdrop","LOOKS_NEXTBACKDROP":"next backdrop","LOOKS_PREVIOUSBACKDROP":"previous backdrop","LOOKS_RANDOMBACKDROP":"random backdrop","MOTION_MOVESTEPS":"move %1 steps","MOTION_TURNLEFT":"turn %1 %2 degrees","MOTION_TURNRIGHT":"turn %1 %2 degrees","MOTION_POINTINDIRECTION":"point in direction %1","MOTION_POINTTOWARDS":"point towards %1","MOTION_POINTTOWARDS_POINTER":"mouse-pointer","MOTION_POINTTOWARDS_RANDOM":"random direction","MOTION_GOTO":"go to %1","MOTION_GOTO_POINTER":"mouse-pointer","MOTION_GOTO_RANDOM":"random position","MOTION_GOTOXY":"go to x: %1 y: %2","MOTION_GLIDESECSTOXY":"glide %1 secs to x: %2 y: %3","MOTION_GLIDETO":"glide %1 secs to %2","MOTION_GLIDETO_POINTER":"mouse-pointer","MOTION_GLIDETO_RANDOM":"random position","MOTION_CHANGEXBY":"change x by %1","MOTION_SETX":"set x to %1","MOTION_CHANGEYBY":"change y by %1","MOTION_SETY":"set y to %1","MOTION_IFONEDGEBOUNCE":"if on edge, bounce","MOTION_SETROTATIONSTYLE":"set rotation style %1","MOTION_SETROTATIONSTYLE_LEFTRIGHT":"left-right","MOTION_SETROTATIONSTYLE_DONTROTATE":"don\'t rotate","MOTION_SETROTATIONSTYLE_ALLAROUND":"all around","MOTION_XPOSITION":"x position","MOTION_YPOSITION":"y position","MOTION_DIRECTION":"direction","MOTION_SCROLLRIGHT":"scroll right %1","MOTION_SCROLLUP":"scroll up %1","MOTION_ALIGNSCENE":"align scene %1","MOTION_ALIGNSCENE_BOTTOMLEFT":"bottom-left","MOTION_ALIGNSCENE_BOTTOMRIGHT":"bottom-right","MOTION_ALIGNSCENE_MIDDLE":"middle","MOTION_ALIGNSCENE_TOPLEFT":"top-left","MOTION_ALIGNSCENE_TOPRIGHT":"top-right","MOTION_XSCROLL":"x scroll","MOTION_YSCROLL":"y scroll","MOTION_STAGE_SELECTED":"Stage selected: no motion blocks","OPERATORS_ADD":"%1 + %2","OPERATORS_SUBTRACT":"%1 - %2","OPERATORS_MULTIPLY":"%1 * %2","OPERATORS_DIVIDE":"%1 / %2","OPERATORS_RANDOM":"pick random %1 to %2","OPERATORS_GT":"%1 > %2","OPERATORS_LT":"%1 < %2","OPERATORS_EQUALS":"%1 = %2","OPERATORS_AND":"%1 and %2","OPERATORS_OR":"%1 or %2","OPERATORS_NOT":"not %1","OPERATORS_JOIN":"join %1 %2","OPERATORS_JOIN_APPLE":"apple","OPERATORS_JOIN_BANANA":"banana","OPERATORS_LETTEROF":"letter %1 of %2","OPERATORS_LETTEROF_APPLE":"a","OPERATORS_LENGTH":"length of %1","OPERATORS_CONTAINS":"%1 contains %2?","OPERATORS_MOD":"%1 mod %2","OPERATORS_ROUND":"round %1","OPERATORS_MATHOP":"%1 of %2","OPERATORS_MATHOP_ABS":"abs","OPERATORS_MATHOP_FLOOR":"floor","OPERATORS_MATHOP_CEILING":"ceiling","OPERATORS_MATHOP_SQRT":"sqrt","OPERATORS_MATHOP_SIN":"sin","OPERATORS_MATHOP_COS":"cos","OPERATORS_MATHOP_TAN":"tan","OPERATORS_MATHOP_ASIN":"asin","OPERATORS_MATHOP_ACOS":"acos","OPERATORS_MATHOP_ATAN":"atan","OPERATORS_MATHOP_LN":"ln","OPERATORS_MATHOP_LOG":"log","OPERATORS_MATHOP_EEXP":"e ^","OPERATORS_MATHOP_10EXP":"10 ^","PROCEDURES_DEFINITION":"define %1","PROCEDURES_RETURN":"return %1","PROCEDURES_TO_REPORTER":"Change To Reporter","PROCEDURES_TO_STATEMENT":"Change To Statement","PROCEDURES_DOCS":"How to use return","SENSING_TOUCHINGOBJECT":"touching %1?","SENSING_TOUCHINGOBJECT_POINTER":"mouse-pointer","SENSING_TOUCHINGOBJECT_EDGE":"edge","SENSING_TOUCHINGCOLOR":"touching color %1?","SENSING_COLORISTOUCHINGCOLOR":"color %1 is touching %2?","SENSING_DISTANCETO":"distance to %1","SENSING_DISTANCETO_POINTER":"mouse-pointer","SENSING_ASKANDWAIT":"ask %1 and wait","SENSING_ASK_TEXT":"What\'s your name?","SENSING_ANSWER":"answer","SENSING_KEYPRESSED":"key %1 pressed?","SENSING_MOUSEDOWN":"mouse down?","SENSING_MOUSEX":"mouse x","SENSING_MOUSEY":"mouse y","SENSING_SETDRAGMODE":"set drag mode %1","SENSING_SETDRAGMODE_DRAGGABLE":"draggable","SENSING_SETDRAGMODE_NOTDRAGGABLE":"not draggable","SENSING_LOUDNESS":"loudness","SENSING_LOUD":"loud?","SENSING_TIMER":"timer","SENSING_RESETTIMER":"reset timer","SENSING_OF":"%1 of %2","SENSING_OF_XPOSITION":"x position","SENSING_OF_YPOSITION":"y position","SENSING_OF_DIRECTION":"direction","SENSING_OF_COSTUMENUMBER":"costume #","SENSING_OF_COSTUMENAME":"costume name","SENSING_OF_SIZE":"size","SENSING_OF_VOLUME":"volume","SENSING_OF_BACKDROPNUMBER":"backdrop #","SENSING_OF_BACKDROPNAME":"backdrop name","SENSING_OF_STAGE":"Stage","SENSING_CURRENT":"current %1","SENSING_CURRENT_YEAR":"year","SENSING_CURRENT_MONTH":"month","SENSING_CURRENT_DATE":"date","SENSING_CURRENT_DAYOFWEEK":"day of week","SENSING_CURRENT_HOUR":"hour","SENSING_CURRENT_MINUTE":"minute","SENSING_CURRENT_SECOND":"second","SENSING_DAYSSINCE2000":"days since 2000","SENSING_USERNAME":"username","SENSING_USERID":"user id","SOUND_PLAY":"start sound %1","SOUND_PLAYUNTILDONE":"play sound %1 until done","SOUND_STOPALLSOUNDS":"stop all sounds","SOUND_SETEFFECTO":"set %1 effect to %2","SOUND_CHANGEEFFECTBY":"change %1 effect by %2","SOUND_CLEAREFFECTS":"clear sound effects","SOUND_EFFECTS_PITCH":"pitch","SOUND_EFFECTS_PAN":"pan left/right","SOUND_CHANGEVOLUMEBY":"change volume by %1","SOUND_SETVOLUMETO":"set volume to %1%","SOUND_VOLUME":"volume","SOUND_RECORD":"record...","CATEGORY_MOTION":"Motion","CATEGORY_LOOKS":"Looks","CATEGORY_SOUND":"Sound","CATEGORY_EVENTS":"Events","CATEGORY_CONTROL":"Control","CATEGORY_SENSING":"Sensing","CATEGORY_OPERATORS":"Operators","CATEGORY_VARIABLES":"Variables","CATEGORY_MYBLOCKS":"My Blocks","DUPLICATE":"Duplicate","DELETE":"Delete","ADD_COMMENT":"Add Comment","REMOVE_COMMENT":"Remove Comment","DELETE_BLOCK":"Delete Block","DELETE_X_BLOCKS":"Delete %1 Blocks","DELETE_ALL_BLOCKS":"Delete all %1 blocks?","CLEAN_UP":"Clean up Blocks +","HELP":"Help","UNDO":"Undo","REDO":"Redo","EDIT_PROCEDURE":"Edit","SHOW_PROCEDURE_DEFINITION":"Go to definition","WORKSPACE_COMMENT_DEFAULT_TEXT":"Say something...","COLOUR_HUE_LABEL":"Color","COLOUR_SATURATION_LABEL":"Saturation","COLOUR_BRIGHTNESS_LABEL":"Brightness","CHANGE_VALUE_TITLE":"Change value:","RENAME_VARIABLE":"Rename variable","RENAME_VARIABLE_TITLE":"Rename all \\"%1\\" variables to:","RENAME_VARIABLE_MODAL_TITLE":"Rename Variable","NEW_VARIABLE":"Make a Variable","NEW_VARIABLE_TITLE":"New variable name:","VARIABLE_MODAL_TITLE":"New Variable","VARIABLE_ALREADY_EXISTS":"A variable named \\"%1\\" already exists.","VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE":"A variable named \\"%1\\" already exists for another variable of type \\"%2\\".","DELETE_VARIABLE_CONFIRMATION":"Delete %1 uses of the \\"%2\\" variable?","CANNOT_DELETE_VARIABLE_PROCEDURE":"Can\'t delete the variable \\"%1\\" because it\'s part of the definition of the function \\"%2\\"","DELETE_VARIABLE":"Delete the \\"%1\\" variable","NEW_PROCEDURE":"Make a Block","PROCEDURE_ALREADY_EXISTS":"A procedure named \\"%1\\" already exists.","PROCEDURE_DEFAULT_NAME":"block name","PROCEDURE_USED":"To delete a block definition, first remove all uses of the block","NEW_LIST":"Make a List","NEW_LIST_TITLE":"New list name:","LIST_MODAL_TITLE":"New List","LIST_ALREADY_EXISTS":"A list named \\"%1\\" already exists.","RENAME_LIST_TITLE":"Rename all \\"%1\\" lists to:","RENAME_LIST_MODAL_TITLE":"Rename List","DEFAULT_LIST_ITEM":"thing","DELETE_LIST":"Delete the \\"%1\\" list","RENAME_LIST":"Rename list","NEW_BROADCAST_MESSAGE":"New message","NEW_BROADCAST_MESSAGE_TITLE":"New message name:","BROADCAST_MODAL_TITLE":"New Message","DEFAULT_BROADCAST_MESSAGE_NAME":"message1"}')},a=new Proxy(t,{__getter__:function(e){try{return a}catch{return t}},get:function(e,t){return e[t]}}),o=`<!DOCTYPE html>
<html>
<head>
<script></script><noscript></noscript>
<title>TurboCharged</title>
<style>
code {
    font-size: large;
    font-weight: bold;
    background-color: lightgray;
    border: 2px #000 solid;
}
code.box {
    display: box;
}
code.flex {
    display: flex;
}
</style>
</head>
<body>
<h1>TurboCharged</h1>
<div id="top_creds">
<code id="version" class="box">v9.3</code><span> || Functional and base Idea by LilyMakesThings.</span><br>
<span id="injection_credits">XML Injection based on Xeltallivs and LilyMakesThings XML Injectors.</span><br>
<span id="other_main_credits">Update+Maintained by 0znzw<br><br>Color Change Attempt also by Lily, 0znzw for the XML.</span>
</div>
<div id="extensions">
<span>Text+ (by CST1229)</span>
<span>Base (by TrueFantom)</span>
<span>Bitwise (by TrueFantom)</span>
<span>BigInt (by SkyHigh173)</span>
<span>Math (by TrueFantom)</span>
<span>Cast (by Lily aka LilyMakesThings)</span>
<span>More Comparisons (by NOname-awa)</span>
<span>Tween (by JeremyGamer13)</span>
<span>High Precision (by Qxsck)</span>
<span>More motion (by NamelessCat aka NexusKitten)</span>
<span>Clones+ (by Lily aka LilyMakesThings)</span>
<span>Sensing+ (by ObviousAlexC)</span>
</div>
<div id="user_links">
<h4>User links</h4>
<span>Lily: https://scratch.mit.edu/users/LilyMakesThings/</span><br>
<span>0znzw: https://scratch.mit.edu/users/0znzw/</span><br>
<span>Xeltalliv: https://github.com/Xeltalliv/</span><br>
<span>CST1229: https://scratch.mit.edu/users/CST1229/</span><br>
<span>Skyhigh173: https://github.com/SkyHigh173/</span><br>
<span>TrueFantom: https://scratch.mit.edu/users/TrueFantom/</span><br>
<span>JeremyGamer13: https://scratch.mit.edu/users/JeremyGamer13/</span><br>
<span>NOname-awa: https://github.com/NOname-awa/</span><br>
<span>Qxsck: https://github.com/qxsck/</span><br>
<span>NamelessCat: https://scratch.mit.edu/users/NamelessCat/</span><br>
<span>ObviousAlexC: https://scratch.mit.edu/users/pinksheep2917/</span>
</div>
<div id="license"><h4>License</h4><code class="flex">
Licensed under MIT license.<br>

<!-- Initial copy: https://web.archive.org/web/20231129230145/https://opensource.org/license/mit/ -->
<!-- Lily said to not include copyright so I will just put the date -->
Maintained &lt;2023-2023&gt;<br>
<br>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software<br>
and associated documentation files (the "Software"), to deal in the Software without<br>
restriction, including without limitation the rights to use, copy, modify, merge, publish,<br>
distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the<br>
Software is furnished to do so, subject to the following conditions:<br>
<br>
The above copyright notice and this permission notice shall be included in all copies<br>
or substantial portions of the Software.<br>
<br>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR<br>
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,<br>
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL<br>
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR<br>
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,<br>
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR<br>
OTHER DEALINGS IN THE SOFTWARE.
</code></div>
</body>
</html>`;window.Scratch=e;let l=e.vm,r=l.runtime;l.TurboCharged={extensionsData:{},blockedCategories:["data"],enabled:!0,specialEnabled:!0,gbx:r.getBlocksXML.bind(r)};let n='<sep gap="36"/>',s='<sep gap="36"/>';a.ScratchMsgs.translate;let u=r._convertBlockForScratchBlocks.bind(r),i="event",d=r.getTargetForStage(),T=e.ArgumentType;T.VARIABLE="variable",T.VERTICAL_SEPARATOR="vertical_separator",T.VARIABLE_GETTER="variable_getter",T.LABEL="label",T.LABEL_SERIALIZABLE="label_serializable";let p={generateXML:function(e){return`colour="${e.primary}" secondaryColour="${e.secondary}"`},gcc:function(e){return a.Colours[e]}};Object.keys(a.Colours).forEach(e=>{let t=Object.assign(p.gcc(e),{xml:p.generateXML(p.gcc(e))}),a={};a[e]=t,Object.assign(p,a)}),p.events=structuredClone(p.event),p.sound=structuredClone(p.sounds),l.TurboCharged.extensionData={textPlus:{splitCache:[],matchCache:[],CaseParam:{LOWERCASE:"lowercase",UPPERCASE:"uppercase",MIXEDCASE:"mixedcase",TITLECASE:"titlecase",EXACTTITLECASE:"exacttitlecase"}},createBlobTo:{hasRanBlob:!1,url:""},DefaultExtensions:{addBlocks(e,t){for(let a in t)a=t[a],e.push(a);return e}}};let c=[{text:"space",value:"space"},{text:"up arrow",value:"up arrow"},{text:"down arrow",value:"down arrow"},{text:"right arrow",value:"right arrow"},{text:"left arrow",value:"left arrow"},{text:"enter",value:"enter"},{text:"backspace",value:"backspace"},{text:"delete",value:"delete"},{text:"shift",value:"shift"},{text:"caps lock",value:"caps lock"},{text:"scroll lock",value:"scroll lock"},{text:"control",value:"control"},{text:"escape",value:"escape"},{text:"insert",value:"insert"},{text:"home",value:"home"},{text:"end",value:"end"},{text:"page up",value:"page up"},{text:"page down",value:"page down"},{text:"a",value:"a"},{text:"b",value:"b"},{text:"c",value:"c"},{text:"d",value:"d"},{text:"e",value:"e"},{text:"f",value:"f"},{text:"g",value:"g"},{text:"h",value:"h"},{text:"i",value:"i"},{text:"j",value:"j"},{text:"k",value:"k"},{text:"l",value:"l"},{text:"m",value:"m"},{text:"n",value:"n"},{text:"o",value:"o"},{text:"p",value:"p"},{text:"q",value:"q"},{text:"r",value:"r"},{text:"s",value:"s"},{text:"t",value:"t"},{text:"u",value:"u"},{text:"v",value:"v"},{text:"w",value:"w"},{text:"x",value:"x"},{text:"y",value:"y"},{text:"z",value:"z"},{text:"0",value:"0"},{text:"1",value:"1"},{text:"2",value:"2"},{text:"3",value:"3"},{text:"4",value:"4"},{text:"5",value:"5"},{text:"6",value:"6"},{text:"7",value:"7"},{text:"8",value:"8"},{text:"9",value:"9"},];var m={},E=0;let y=(e,t)=>e?"x position"===t?e.x:"y position"===t?e.y:"direction"===t?e.direction:"costume num"===t?e.currentCostume+1:"costume name"===t?e.getCostumes()[e.currentCostume].name:"size"===t?e.size:"volume"===t?e.volume:"":"",N=function(){l.TurboCharged.extensionData.createBlobTo.hasRanBlob||(l.TurboCharged.extensionData.createBlobTo.hasRanBlob=!0,l.TurboCharged.extensionData.createBlobTo.url=function e(t){let a=new Blob([t],{type:"text/html"});return URL.createObjectURL(a)}(o)),window.open(l.TurboCharged.extensionData.createBlobTo.url,"_blank")},b=function(e){return`<field name="LIST" id="${e.id}" variabletype="list">${e.name}</field>`},h=function(e){var t,a;let o=""!=e.type?"list":"variable",l=(t=e,`<field name="${a=o.toUpperCase()}" id="${t.id}" variabletype="${t.type}">${t.name}</field>`),r=`<block type="data_${o}" id="${e.id}">${l}</block>`;return r},A=function(e){let t=`<field name="LIST">${e.name}</field>`,a=`<block type="data_listcontents" id="${e.id}">${t}</block>`;return a};function O(e){function t(t,a){e.hasOwnProperty(t)||(e[t]=a)}if(!e.hasOwnProperty("blockType"))return;t("terminal",!1),t("blockAllThreads",!1),t("opcode",""),t("func",e.opcode),t("isDynamic",!0),t("color1","#ff0000"),t("color2","#00ff00"),t("color3","#0000ff"),t("disableMonitor",!0),t("isTerminal",!1),t("arguments",{});let a=`<mutation blockInfo='${JSON.stringify(e)}'/>`;return a}function R(e,t){return d.lookupVariableByNameAndType(e)||t.lookupVariableByNameAndType(e)}function g(e,t,a){var o;let r=R(e);(o=e,null!==d.lookupVariableByNameAndType(o))?l.setVariableValue(d.id,r,t):l.setVariableValue(a.id,r,t)}let S=function(e,t,o,l,r){let u=a.ScratchMsgs.translate("LOOKS_HELLO","Hello!"),i=a.ScratchMsgs.translate("LOOKS_HMM","Hmm...");return`
<category name="%{BKY_CATEGORY_LOOKS} \xf0Ÿ\xaa„" id="looks" ${p.looks.xml}>
${t?"":`
<block type="looks_sayforsecs">
    <value name="MESSAGE">
        <shadow type="text">
            <field name="TEXT">${u}</field>
        </shadow>
    </value>
    <value name="SECS">
        <shadow type="math_number">
            <field name="NUM">2</field>
        </shadow>
    </value>
</block>
<block type="looks_say">
    <value name="MESSAGE">
        <shadow type="text">
            <field name="TEXT">${u}</field>
        </shadow>
    </value>
</block>
<block type="looks_thinkforsecs">
    <value name="MESSAGE">
        <shadow type="text">
            <field name="TEXT">${i}</field>
        </shadow>
    </value>
    <value name="SECS">
        <shadow type="math_number">
            <field name="NUM">2</field>
        </shadow>
    </value>
</block>
<block type="looks_think">
    <value name="MESSAGE">
        <shadow type="text">
            <field name="TEXT">${i}</field>
        </shadow>
    </value>
</block>
${s}
`}
${t?`
    <block type="looks_switchbackdropto">
        <value name="BACKDROP">
            <shadow type="looks_backdrops">
                <field name="BACKDROP">${r}</field>
            </shadow>
        </value>
    </block>
    <block type="looks_switchbackdroptoandwait">
        <value name="BACKDROP">
            <shadow type="looks_backdrops">
                <field name="BACKDROP">${r}</field>
            </shadow>
        </value>
    </block>
    <block type="looks_nextbackdrop"/>
`:`
    <block id="${o}_switchcostumeto" type="looks_switchcostumeto">
        <value name="COSTUME">
            <shadow type="looks_costume">
                <field name="COSTUME">${l}</field>
            </shadow>
        </value>
    </block>
    <block type="looks_nextcostume"/>
    <block type="looks_switchbackdropto">
        <value name="BACKDROP">
            <shadow type="looks_backdrops">
                <field name="BACKDROP">${r}</field>
            </shadow>
        </value>
    </block>
    <block type="looks_nextbackdrop"/>
    ${s}
    <block type="looks_changesizeby">
        <value name="CHANGE">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
    <block type="looks_setsizeto">
        <value name="SIZE">
            <shadow type="math_number">
                <field name="NUM">100</field>
            </shadow>
        </value>
    </block>
`}
${s}
<block type="looks_changeeffectby">
    <value name="CHANGE">
        <shadow type="math_number">
            <field name="NUM">25</field>
        </shadow>
    </value>
</block>
<block type="looks_seteffectto">
    <value name="VALUE">
        <shadow type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
</block>
<block type="looks_cleargraphiceffects"/>
${s}
${t?"":`
    <block type="looks_show"/>
    <block type="looks_hide"/>
${s}
    <block type="looks_gotofrontback"/>
    <block type="looks_goforwardbackwardlayers">
        <value name="NUM">
            <shadow type="math_integer">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
`}
${t?`
    <block id="backdropnumbername" type="looks_backdropnumbername"/>
`:`
    <block id="${o}_costumenumbername" type="looks_costumenumbername"/>
    <block id="backdropnumbername" type="looks_backdropnumbername"/>
    <block id="${o}_size" type="looks_size"/>
`}
${n}
</category>
`};class I{getInfo(){return{id:"motion",name:"Motion \xf0Ÿ\xaa„",color1:p.motion.primary,color2:p.motion.secondary,color3:p.motion.tertiary,blocks:[{blockType:e.BlockType.BUTTON,text:"Credits",func:"credit"},{disableMonitor:!0,opcode:"credit_version",func:"credit_version",blockType:e.BlockType.COMMAND,text:"TurboCharged Version",isDynamic:!0,color1:"#ffb6c1"},{hideFromPalette:!0,disableMonitor:!0,opcode:"data_test",func:"data_test",blockType:e.BlockType.COMMAND,text:"Test",isDynamic:!0,color1:p.data.primary},{disableMonitor:!0,opcode:"data_getVariable",func:"data_getVariable",blockType:e.BlockType.REPORTER,text:"var [VARIABLE]",isDynamic:!0,color1:p.data.primary,color2:p.data.secondary,color3:p.data.tertiary,arguments:{VARIABLE:{type:e.ArgumentType.STRING,defaultValue:"my variable"}}},{disableMonitor:!0,opcode:"data_deleteVariable",func:"data_deleteVariable",blockType:e.BlockType.COMMAND,text:"delete variable [VARIABLE]",isDynamic:!0,color1:p.data.primary,color2:p.data.secondary,color3:p.data.tertiary,arguments:{VARIABLE:{type:e.ArgumentType.STRING,defaultValue:"my variable"}}},{disableMonitor:!0,opcode:"data_hasVariable",func:"data_hasVariable",blockType:e.BlockType.BOOLEAN,text:"variable [VARIABLE] exists?",isDynamic:!0,color1:p.data.primary,color2:p.data.secondary,color3:p.data.tertiary,arguments:{VARIABLE:{type:e.ArgumentType.STRING,defaultValue:"my variable"}}},{opcode:"rotationStyle",blockType:e.BlockType.REPORTER,text:"rotation style"},{opcode:"moremotionchangexy",blockType:e.BlockType.COMMAND,text:"change x: [X] y: [Y]",arguments:{X:{type:e.ArgumentType.NUMBER,defaultValue:"0"},Y:{type:e.ArgumentType.NUMBER,defaultValue:"0"}}},{opcode:"moremotionpointto",blockType:e.BlockType.COMMAND,text:"point towards x: [X] y: [Y]",arguments:{X:{type:e.ArgumentType.NUMBER,defaultValue:"0"},Y:{type:e.ArgumentType.NUMBER,defaultValue:"0"}}},{opcode:"moremotionfence",blockType:e.BlockType.COMMAND,text:"manually fence"},{opcode:"moremotionsteptowards",blockType:e.BlockType.COMMAND,text:"move [STEPS] steps towards x: [X] y: [Y]",arguments:{STEPS:{type:e.ArgumentType.NUMBER,defaultValue:"10"},X:{type:e.ArgumentType.NUMBER,defaultValue:"0"},Y:{type:e.ArgumentType.NUMBER,defaultValue:"0"}}},{opcode:"moremotiontweentowards",blockType:e.BlockType.COMMAND,text:"move [PERCENT]% of the way to x: [X] y: [Y]",arguments:{PERCENT:{type:e.ArgumentType.NUMBER,defaultValue:"10"},X:{type:e.ArgumentType.NUMBER,defaultValue:"0"},Y:{type:e.ArgumentType.NUMBER,defaultValue:"0"}}},{opcode:"moremotiondirectionto",blockType:e.BlockType.REPORTER,text:"direction to x: [X] y: [Y]",arguments:{X:{type:e.ArgumentType.NUMBER,defaultValue:"0"},Y:{type:e.ArgumentType.NUMBER,defaultValue:"0"}}},{opcode:"moremotiondistanceto",blockType:e.BlockType.REPORTER,text:"distance from x: [X] y: [Y]",arguments:{X:{type:e.ArgumentType.NUMBER,defaultValue:"0"},Y:{type:e.ArgumentType.NUMBER,defaultValue:"0"}}},{opcode:"moremotionspritewh",blockType:e.BlockType.REPORTER,text:"sprite [WHAT]",disableMonitor:!0,arguments:{WHAT:{type:e.ArgumentType.STRING,menu:"moremotionWHAT"}}},{opcode:"moremotiontouchingxy",blockType:e.BlockType.BOOLEAN,text:"touching x: [X] y: [Y]?",arguments:{X:{type:e.ArgumentType.NUMBER,defaultValue:"0"},Y:{type:e.ArgumentType.NUMBER,defaultValue:"0"}}},{opcode:"moremotiontouchingrect",blockType:e.BlockType.BOOLEAN,text:"touching rectangle x1: [X1] y1: [Y1] x2: [X2] y2: [Y2]?",arguments:{X1:{type:e.ArgumentType.NUMBER,defaultValue:"-100"},Y1:{type:e.ArgumentType.NUMBER,defaultValue:"-100"},X2:{type:e.ArgumentType.NUMBER,defaultValue:"100"},Y2:{type:e.ArgumentType.NUMBER,defaultValue:"100"}}}],menus:{variablesMenu:{acceptReporters:!0,items:"getVariables"},moremotionWHAT:{acceptreporters:!0,items:["width","height","costume width","costume height"]}}}}doNothing(){}credit(){N()}credit_version(){return 9.3}getVariables(){let e=l.runtime.getEditingTarget().getAllVariableNamesInScopeByType("","");return e.length>0?e:[{text:"",value:""}]}data_test(e,t){l.runtime.visualReport(t.thread.peekStack(),"Custom block in variables???")}data_getVariable(e,t){let a=R(e.VARIABLE,t.target);return null==a||void 0==a?"":a.value}data_hasVariable(e,t){return t.target.getAllVariableNamesInScopeByType("","").includes(e.VARIABLE)}data_createVariable(e,t){l.runtime.visualReport(t.thread.peekStack(),"W.I.P")}data_deleteVariable(e,t){!function e(t,a){let o=R(t,a);a.deleteVariable(o)}(e.VARIABLE,t.target)}rotationStyle(e,t){return t.target.rotationStyle}moremotionchangexy(t,a){let o=e.Cast.toNumber(t.X),l=e.Cast.toNumber(t.Y);a.target.setXY(a.target.x+o,a.target.y+l)}moremotionpointto(t,a){let o=e.Cast.toNumber(t.X),l=e.Cast.toNumber(t.Y);a.target.y>l?a.target.setDirection(180/Math.PI*Math.atan((o-a.target.x)/(l-a.target.y))+180):a.target.setDirection(180/Math.PI*Math.atan((o-a.target.x)/(l-a.target.y)))}moremotionfence(t,a){let o=e.vm.renderer.getFencedPositionOfDrawable(a.target.drawableID,[a.target.x,a.target.y]);a.target.setXY(o[0],o[1])}moremotiondirectionto(t,a){let o=e.Cast.toNumber(t.X),l=e.Cast.toNumber(t.Y);return a.target.y>l?180/Math.PI*Math.atan((o-a.target.x)/(l-a.target.y))+180:180/Math.PI*Math.atan((o-a.target.x)/(l-a.target.y))}moremotiondistanceto(t,a){let o=e.Cast.toNumber(t.X),l=e.Cast.toNumber(t.Y);return Math.sqrt((o-a.target.x)**2+(l-a.target.y)**2)}moremotionsteptowards(t,a){let o=e.Cast.toNumber(t.X),l=e.Cast.toNumber(t.Y),r=e.Cast.toNumber(t.STEPS),n=r/Math.sqrt((o-a.target.x)**2+(l-a.target.y)**2);n>=1?a.target.setXY(o,l):a.target.setXY((o-a.target.x)*n+a.target.x,(l-a.target.y)*n+a.target.y)}moremotiontweentowards(t,a){let o=e.Cast.toNumber(t.X),l=e.Cast.toNumber(t.Y),r=e.Cast.toNumber(t.PERCENT);a.target.setXY((o-a.target.x)*(r/100)+a.target.x,(l-a.target.y)*(r/100)+a.target.y)}moremotiontouchingrect(t,a){let o=e.Cast.toNumber(t.X1),l=e.Cast.toNumber(t.X2),r=e.Cast.toNumber(t.Y1),n=e.Cast.toNumber(t.Y2);if(o>l){let s=o;o=l,l=s}if(r>n){let u=r;r=n,r=u}let i=e.vm.renderer._allDrawables[a.target.drawableID];if(!i)return!1;let d=i.getFastBounds();d.snapToInt();let T=Object.getPrototypeOf(d).constructor,p=new T;if(p.initFromBounds(o,l,r,n),p.snapToInt(),!p.intersects(d))return!1;i.updateCPURenderAttributes();let c=T.intersect(d,p);for(let m=c.left;m<c.right;m++)for(let E=c.bottom;E<c.top;E++)if(i.isTouching([m,E]))return!0;return!1}moremotiontouchingxy(t,a){let o=e.Cast.toNumber(t.X),l=e.Cast.toNumber(t.Y),r=e.vm.renderer._allDrawables[a.target.drawableID];return!!r&&(r.updateCPURenderAttributes(),r.isTouching([o,l]))}moremotionspritewh(t,a){if("width"===t.WHAT||"height"===t.WHAT){let o=e.vm.renderer.getBounds(a.target.drawableID);return"width"===t.WHAT?Math.ceil(o.width):Math.ceil(o.height)}if("costume width"===t.WHAT||"costume height"===t.WHAT){let l=a.target.sprite.costumes[a.target.currentCostume];return"costume width"===t.WHAT?Math.ceil(l.size[0]):Math.ceil(l.size[1])}}}class v{getInfo(){return{id:"_credits",name:"Credits \xf0Ÿ\xaa„",color1:"#4C97FF",color2:"#3373CC",blocks:[]}}}let f=function(e,t,o){var l,r,u;let i=a.Msg.MOTION_STAGE_SELECTED;return`
${`
<category name="Credits \xf0Ÿ\xaa„" id="credits" colour="#ffb6c1" secondaryColour="#ffc0cb"> //oooooo :D
<label text="/!\\ THIS IS ENGLISH ONLY /!\\"></label>
<button text="Credits" callbackKey="EXTENSION_CALLBACK" callbackData="motion_credit"></button>
<block type="motion_credit_version">
<mutation blockInfo='{"blockType":"reporter","terminal":false,"blockAllThreads":false,"arguments":{},"opcode":"credit_version","text":"TurboCharged Version","isDynamic":true,"color1":"#ffb6c1","isTerminal":false,"disableMonitor":true}'/> // this was extremely annoying but worth it.
</block>
${n}
</category>`}
<category name="%{BKY_CATEGORY_MOTION} \xf0Ÿ\xaa„" id="motion" ${p.motion.xml}>
${t?`
<label text="${i}"></label>
`:`
<block type="motion_movesteps">
    <value name="STEPS">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block type="motion_moremotionsteptowards">
<value name="STEPS">
    <shadow type="math_number">
<field name="NUM">10</field>
</shadow>
</value>
<value name="X">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
<value name="Y">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
</block>
<block type="motion_changexby">
    <value name="DX">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block type="motion_setx">
    <value name="X">
        <shadow id="setx" type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
</block>
<block type="motion_changeyby">
    <value name="DY">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block type="motion_sety">
    <value name="Y">
        <shadow id="sety" type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
</block>
        <block type="motion_moremotionchangexy">
<value name="X">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
<value name="Y">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
</block>
${s}
<block type="motion_goto">
    <value name="TO">
        <shadow type="motion_goto_menu">
        </shadow>
    </value>
</block>
<block type="motion_gotoxy">
    <value name="X">
        <shadow id="movex" type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
    <value name="Y">
        <shadow id="movey" type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
</block>
<block type="motion_glideto" id="motion_glideto">
    <value name="SECS">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="TO">
        <shadow type="motion_glideto_menu">
        </shadow>
    </value>
</block>
<block type="motion_glidesecstoxy">
    <value name="SECS">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="X">
        <shadow id="glidex" type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
    <value name="Y">
        <shadow id="glidey" type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
</block>
${s}
<block type="motion_moremotiontweentowards">
<value name="PERCENT">
    <shadow type="math_number">
<field name="NUM">10</field>
</shadow>
</value>
<value name="X">
<shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
<value name="Y">
<shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
</block>
${s}
<block id="${o}_xposition" type="motion_xposition"/>
<block id="${o}_yposition" type="motion_yposition"/>
${s}
<block type="motion_moremotiontouchingxy">
<value name="X">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
<value name="Y">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
</block>
<block type="motion_moremotiontouchingrect">
    <value name="X1">
        <shadow type="math_number">
<field name="NUM">-100</field>
</shadow>
    </value>
    <value name="Y1">
        <shadow type="math_number">
<field name="NUM">-100</field>
</shadow>
    </value>
    <value name="X2">
        <shadow type="math_number">
<field name="NUM">100</field>
</shadow>
    </value>
    <value name="Y2">
        <shadow type="math_number">
<field name="NUM">100</field>
</shadow>
    </value>
</block>
${s}
<block type="motion_pointindirection">
    <value name="DIRECTION">
        <shadow type="math_angle">
            <field name="NUM">90</field>
        </shadow>
    </value>
</block>
<block type="motion_pointtowards">
    <value name="TOWARDS">
        <shadow type="motion_pointtowards_menu">
        </shadow>
    </value>
</block>
<block type="motion_moremotionpointto">
<value name="X">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
<value name="Y">
    <shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
</block>
<block type="motion_moremotiondirectionto">
<value name="X">
<shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
<value name="Y">
<shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
</block>
<block type="motion_turnright">
    <value name="DEGREES">
        <shadow type="math_number">
            <field name="NUM">15</field>
        </shadow>
    </value>
</block>
<block type="motion_turnleft">
    <value name="DEGREES">
        <shadow type="math_number">
            <field name="NUM">15</field>
        </shadow>
    </value>
</block>
<block id="${o}_direction" type="motion_direction"/>
${s}
<block type="motion_setrotationstyle"/>
<block id="${o}_rotationStyle" type="motion_rotationStyle"/>
<block type="motion_moremotionspritewh">
<value name="WHAT">
    <shadow type="motion_menu_moremotionWHAT">
</shadow>
</value>
</block>
${s}
<block type="motion_ifonedgebounce"/>
${s}
<block type="motion_moremotionfence">
</block>
`}
${n}
</category>
`},k=function(e,t){let o=a.ScratchMsgs.translate("SENSING_ASK_TEXT","What's your name?");return`
<category name="%{BKY_CATEGORY_SENSING} \xf0Ÿ\xaa„" id="sensing" ${p.sensing.xml}>
${t?"":`
    <block type="sensing_touchingobject">
        <value name="TOUCHINGOBJECTMENU">
            <shadow type="sensing_touchingobjectmenu"/>
        </value>
    </block>
    <block type="sensing_touchingcolor">
        <value name="COLOR">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="sensing_coloristouchingcolor">
        <value name="COLOR">
            <shadow type="colour_picker"/>
        </value>
        <value name="COLOR2">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="sensing_distanceto">
        <value name="DISTANCETOMENU">
            <shadow type="sensing_distancetomenu"/>
        </value>
    </block>
    ${s}
`}
${e?"":`
    <block id="askandwait" type="sensing_askandwait">
        <value name="QUESTION">
            <shadow type="text">
                <field name="TEXT">${o}</field>
            </shadow>
        </value>
    </block>
`}
<block id="answer" type="sensing_answer"/>
${s}
<block type="sensing_keypressed">
    <value name="KEY_OPTION">
        <shadow type="sensing_keyoptions"/>
    </value>
</block>
<block type="sensing_mousedown"/>
<block type="sensing_mousex"/>
<block type="sensing_mousey"/>
${t?"":`
    ${s}
    '<block type="sensing_setdragmode" id="sensing_setdragmode"></block>'+
    ${s}
`}
${s}
<block id="loudness" type="sensing_loudness"/>
${s}
<block id="timer" type="sensing_timer"/>
<block type="sensing_resettimer"/>
${s}
<block id="of" type="sensing_of">
    <value name="OBJECT">
        <shadow id="sensing_of_object_menu" type="sensing_of_object_menu"/>
    </value>
</block>
${s}
<block id="current" type="sensing_current"/>
<block type="sensing_dayssince2000"/>
${s}
<block type="sensing_username"/>
${n}
</category>
`};class w{getInfo(){return{id:"variables",name:"Variables (extension) \xf0Ÿ\xaa„",color1:p.data.primary,color2:p.data.secondary,color3:p.data.tertiary,blocks:[]}}}let C=function e(t){t=new t().getInfo().blocks;let a={};for(let o=0;o<t.length;o++){let l=t[o];l.hasOwnProperty("opcode")&&l.hasOwnProperty("blockType")&&(a[l.opcode]=l)}return a}(I);function M(){let t=l.runtime;try{t.ext_microbit}catch{return""}let a=t.ext_microbit;void 0==a.getInfoBound&&(a.getInfoBound=a.getInfo.bind(a));let o=a.getInfoBound;a.matrixValidator=function({MATRIX:t},a){return!((t=e.Cast.toString(t)).length<25)&&t.length%25==0&&""===t.replace(/[01]/g,"")},a.matrixCoupler=function({A:t},a){return e.Cast.toString(t)},a.quadMatrixCoupler=function({A:t,B:a,C:o,D:l},r){return`${e.Cast.toString(t)}${e.Cast.toString(a)}${e.Cast.toString(o)}${e.Cast.toString(l)}`},a.getMicrobitMatrix=function({NUMBER:t,MATRIX:a},o){return t=Math.round(e.Cast.toNumber(t)),(a=e.Cast.toString(a)).slice((t-1)*25,(t-1)*25+25)},a.getDigitAt=function({ROW:t,COLLUM:a,MATRIX:o},l){return t=Math.round(e.Cast.toNumber(t)),a=Math.round(e.Cast.toNumber(a)),o=e.Cast.toString(o),t=t<1?1:t>5?5:t,a=a<1?1:a>5?5:a,o.charAt((t-1)*5+(a-1))},a.getInfo=function(){let t=window.extensionData.DefaultExtensions,a=o(),l=a.blocks;return a.name="micro:bit \xf0Ÿ\xaa„",l.push({blockType:"label",text:"Matrixes"}),l=t.addBlocks(l,[{blockType:e.BlockType.BOOLEAN,opcode:"matrixValidator",text:"is binary [MATRIX] a valid matrix?",arguments:{MATRIX:{defaultValue:"0101010101100010101000100",type:e.ArgumentType.MATRIX}}},{blockType:e.BlockType.REPORTER,opcode:"matrixCoupler",text:"[A]",arguments:{A:{defaultValue:"0101010101100010101000100",type:e.ArgumentType.MATRIX}}},{blockType:e.BlockType.REPORTER,opcode:"quadMatrixCoupler",text:["[A] [B]","[C] [D]"],arguments:{A:{defaultValue:"0101010101100010101000100",type:e.ArgumentType.MATRIX},B:{defaultValue:"0101010101100010101000100",type:e.ArgumentType.MATRIX},C:{defaultValue:"0101010101100010101000100",type:e.ArgumentType.MATRIX},D:{defaultValue:"0101010101100010101000100",type:e.ArgumentType.MATRIX}}},{blockType:e.BlockType.REPORTER,opcode:"getMicrobitMatrix",text:"get matrix number [NUMBER] out of binary [MATRIX]",arguments:{NUMBER:{defaultValue:1,type:e.ArgumentType.NUMBER},MATRIX:{defaultValue:"0101010101100010101000100",type:e.ArgumentType.STRING}}},{blockType:e.BlockType.REPORTER,opcode:"getDigitAt",text:"get pixel at row [ROW] and collum [COLLUM] of matrix [MATRIX]",arguments:{ROW:{defaultValue:3,type:e.ArgumentType.NUMBER},COLLUM:{defaultValue:5,type:e.ArgumentType.NUMBER},MATRIX:{defaultValue:"0101010101100010101000100",type:e.ArgumentType.MATRIX}}}]),a},l.extensionManager.refreshBlocks()}function P(){let e=l.runtime;try{e.ext_pen}catch{return""}let t=e.ext_pen;void 0==t.getInfoBound&&(t.getInfoBound=t.getInfo.bind(t));let a=t.getInfoBound;t.getInfo=function(){let e=window.extensionData.DefaultExtensions,t=a(),o=t.blocks;return t.name="Pen \xf0Ÿ\xaa„",o=e.addBlocks(o,[]),t},l.extensionManager.refreshBlocks()}r._convertBlockForScratchBlocks=function(e,t){let a=u(e,t);return e.color1&&!a.json.color1&&(a.json.color1=e.color1),e.color2&&!a.json.color2&&(a.json.color2=e.color2),e.color3&&!a.json.color3&&(a.json.color3=e.color3),e.outputShape&&!a.json.outputShape&&(a.json.outputShape=e.outputShape),e.extensions&&!a.json.extensions&&(a.json.extensions=e.extensions),a.json.branchCount||(a.json.branchCount=e.branchCount),a},r.getBlocksXML=function(e){this._blockInfo;let t=l.TurboCharged.gbx(e);return t.map(e=>{var t,o,u,d,T,c,m,E,y;if(l.TurboCharged.blockedCategories.includes(e.id)||!l.TurboCharged.enabled)return e;if("motion"===e.id){let{editingTarget:N,runtime:R}=l,g=R.getTargetForStage();N||(N=g),e.xml=f(!1,N.isStage,N.id)}if("looks"===e.id){let{editingTarget:I,runtime:v}=l,w=v.getTargetForStage();I||(I=w),e.xml=S(!1,I.isStage,I.id,I.getCurrentCostume().name,w.getCurrentCostume().name)}if("sound"===e.id){let{editingTarget:M,runtime:P}=l,x=P.getTargetForStage();M||(M=x),e.xml=(M.isStage,u=M.id,`
<category name="%{BKY_CATEGORY_SOUND} \xf0Ÿ\xaa„" id="sound" ${p.sound.xml}>
<block id="${u}_sound_playuntildone" type="sound_playuntildone">
    <value name="SOUND_MENU">
        <shadow type="sound_sounds_menu">
            <field name="SOUND_MENU">${d}</field>
        </shadow>
    </value>
</block>
<block id="${u}_sound_play" type="sound_play">
    <value name="SOUND_MENU">
        <shadow type="sound_sounds_menu">
            <field name="SOUND_MENU">${d}</field>
        </shadow>
    </value>
</block>
<block type="sound_stopallsounds"/>
${s}
<block type="sound_changeeffectby">
    <value name="VALUE">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block type="sound_seteffectto">
    <value name="VALUE">
        <shadow type="math_number">
            <field name="NUM">100</field>
        </shadow>
    </value>
</block>
<block type="sound_cleareffects"/>
${s}
<block type="sound_changevolumeby">
    <value name="VOLUME">
        <shadow type="math_number">
            <field name="NUM">-10</field>
        </shadow>
    </value>
</block>
<block type="sound_setvolumeto">
    <value name="VOLUME">
        <shadow type="math_number">
            <field name="NUM">100</field>
        </shadow>
    </value>
</block>
<block id="${u}_volume" type="sound_volume"/>
${n}
</category>
`)}if("event"===e.id){let{editingTarget:$,runtime:_}=l,B=_.getTargetForStage();$||($=B),e.xml=(c=$.isStage,$.id,`
    <category name="%{BKY_CATEGORY_EVENTS} \xf0Ÿ\xaa„" id="${i}" ${p.events.xml}>
    <block type="event_whenflagclicked"/>
    <block type="${i}_MoreEventswhenStopClicked"></block>
    <block type="${i}_MoreEventsforever"></block>
            ${s}
            
    <block type="event_whenkeypressed"></block>
    <block type="${i}_MoreEventswhenKeyAction">
        <value name="KEY_OPTION">
            <shadow type="${i}_menu_keyboardButtons">
                <field name="keyboardButtons">space</field>
            </shadow>
        </value>
    </block>
    <block type="${i}_MoreEventswhileKeyPressed">
        <value name="KEY_OPTION">
            <shadow type="${i}_menu_keyboardButtons">
                <field name="keyboardButtons">space</field>
            </shadow>
        </value>
    </block>
            ${s}
            
    <block type="${i}_MoreEventswhenTrueFalse">
        <value name="CONDITION"></value>
    </block>
    <block type="${i}_MoreEventswhileTrueFalse">
        <value name="CONDITION"></value>
    </block>
    <block type="${i}_MoreEventswhenValueChanged">
        <value name="INPUT"></value>
    </block>
            ${c?`
                
    <block type="event_whenstageclicked"/>
            `:`
                
    <block type="event_whenthisspriteclicked"/>
            `}
            
    <block type="event_whenbackdropswitchesto"></block>
            ${s}
            
    <block type="event_whengreaterthan">
        <value name="VALUE">
            <shadow type="math_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>
            ${s}
            
    <block type="event_whenbroadcastreceived"></block>
    <block type="event_broadcast">
        <value name="BROADCAST_INPUT">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
    </block>
    <block type="event_broadcastandwait">
        <value name="BROADCAST_INPUT">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
    </block>
    <block type="${i}_MoreEvents_broadcastToTarget">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="TARGET">
            <shadow type="${i}_menu_targetMenu"></shadow>
        </value>
    </block>
    <block type="${i}_MoreEvents_broadcastToTargetAndWait">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="TARGET">
            <shadow type="${i}_menu_targetMenu"></shadow>
        </value>
    </block>
    ${s}
    <block type="${i}_MoreEvents_broadcastData">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="DATA">
            <shadow type="text"></shadow>
        </value>
    </block>
    <block type="${i}_MoreEvents_broadcastDataAndWait">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="DATA">
            <shadow type="text"></shadow>
        </value>
    </block>
    <block type="${i}_MoreEventsreceivedData"></block>
    ${s}
    <block type="${i}_MoreEvents_broadcastDataToTarget">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="TARGET">
            <shadow type="${i}_menu_targetMenu"></shadow>
        </value>
        <value name="DATA">
            <shadow type="text"></shadow>
        </value>
    </block>
    <block type="${i}_MoreEvents_broadcastDataToTargetAndWait">
        <value name="BROADCAST_OPTION">
            <shadow type="event_broadcast_menu"></shadow>
        </value>
        <value name="TARGET">
            <shadow type="${i}_menu_targetMenu"></shadow>
        </value>
        <value name="DATA">
            <shadow type="text"></shadow>
        </value>
    </block>
            ${n}
        
</category>
    `)}if("control"===e.id){let{editingTarget:D,runtime:U}=l,L=U.getTargetForStage();D||(D=L),e.xml=(E=D.isStage,D.id,`
<category name="%{BKY_CATEGORY_CONTROL} \xf0Ÿ\xaa„" id="control" ${p.control.xml}>
<block type="control_wait">
    <value name="DURATION">
        <shadow type="math_positive_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
</block>
${s}
<block type="control_repeat">
    <value name="TIMES">
        <shadow type="math_whole_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block id="forever" type="control_forever"/>
${s}
<block type="control_if"/>
<block type="control_if_else"/>
<block id="wait_until" type="control_wait_until"/>
<block id="repeat_until" type="control_repeat_until"/>
<block id="while" type="control_while"/>
<block id="for_each" type="control_for_each">
    <value name="VALUE">
        <shadow type="math_whole_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
${s}
<block type="control_stop"/>
${s}
${E?`
    <block type="control_create_clone_of">
        <value name="CLONE_OPTION">
            <shadow type="control_create_clone_of_menu"/>
        </value>
    </block>
    <block type="control_clonespluscloneCount">
    </block>
    <block type="control_clonesplusdeleteClonesInSprite">
    <value name="INPUT">
        <shadow type="control_menu_spriteMenu">
</shadow>
    </value>
</block>
<block type="control_clonesplusstopScriptsInSprite">
<value name="INPUT">
    <shadow type="control_menu_spriteMenu">
</shadow>
</value>
</block>
`:`
    <block type="control_start_as_clone"/>
    <block type="control_clonespluswhenCloneStartsWithVar">
    <value name="INPUTA">
        <shadow type="control_menu_variablesMenu">
</shadow>
    </value>
    <value name="INPUTB">
        <shadow type="text">
<field name="TEXT">1</field>
</shadow>
    </value>
</block>
    <block type="control_create_clone_of">
        <value name="CLONE_OPTION">
            <shadow type="control_create_clone_of_menu"/>
        </value>
    </block>
    <block type="control_clonespluscreateCloneWithVar">
    <value name="INPUTA">
        <shadow type="control_menu_variablesMenu">
</shadow>
    </value>
    <value name="INPUTB">
        <shadow type="text">
<field name="TEXT">1</field>
</shadow>
    </value>
</block>
    <block type="control_delete_this_clone"/>
    <block type="control_clonesplusdeleteCloneWithVar">
    <value name="INPUTA">
        <shadow type="control_menu_variablesMenu">
</shadow>
    </value>
    <value name="INPUTB">
        <shadow type="text">
<field name="TEXT">1</field>
</shadow>
    </value>
</block>
<block type="control_clonesplussetVariableOfMainSprite">
<value name="INPUTA">
    <shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTB">
    <shadow type="text">
<field name="TEXT">1</field>
</shadow>
</value>
</block>
<block type="control_clonesplussetVariableOfClone">
<value name="INPUTA">
    <shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTB">
    <shadow type="text">
<field name="TEXT">0</field>
</shadow>
</value>
<value name="INPUTC">
    <shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTD">
    <shadow type="text">
<field name="TEXT">1</field>
</shadow>
</value>
</block>
<block type="control_clonesplusstopScriptsInSprite">
<value name="INPUT">
    <shadow type="control_menu_spriteMenu">
</shadow>
</value>
</block>
<block type="control_clonesplusdeleteClonesInSprite">
<value name="INPUT">
    <shadow type="control_menu_spriteMenu">
</shadow>
</value>
</block>
    <block type="control_clonesplusisClone">
    </block>
    <block type="control_clonesplusspriteCloneCount">
    <value name="INPUT">
        <shadow type="control_menu_spriteMenu">
</shadow>
    </value>
</block>
<block type="control_clonespluscloneExists">
<value name="INPUTA">
    <shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTB">
    <shadow type="text">
<field name="TEXT">1</field>
</shadow>
</value>
</block>
<block type="control_clonesplustouchingMainSprite">
</block>
<block type="control_clonesplustouchingCloneWithVar">
<value name="INPUTA">
    <shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTB">
    <shadow type="text">
<field name="TEXT">1</field>
</shadow>
</value>
</block>

<block type="control_clonesplusgetThingOfMainSprite">
<value name="INPUT">
<shadow type="control_menu_thingOfMenu">
</shadow>
</value>
</block>
<block type="control_clonesplusgetThingOfClone">
<value name="INPUTA">
<shadow type="control_menu_thingOfMenu">
</shadow>
</value>
<value name="INPUTB">
<shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTC">
<shadow type="text">
<field name="TEXT">1</field>
</shadow>
</value>
</block>
<block type="control_clonesplusgetVariableOfMainSprite">
<value name="INPUT">
<shadow type="control_menu_variablesMenu">
</shadow>
</value>
</block>
<block type="control_clonesplusgetVariableOfClone">
<value name="INPUTA">
<shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTB">
<shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTC">
<shadow type="text">
<field name="TEXT">1</field>
</shadow>
</value>
</block>
<block type="control_clonespluscloneCount">
</block>
<block type="control_clonesplusstopScriptsInMainSprite">
</block>
<block type="control_clonesplusstopScriptsInClone">
<value name="INPUTA">
    <shadow type="control_menu_variablesMenu">
</shadow>
</value>
<value name="INPUTB">
    <shadow type="text">
<field name="TEXT">1</field>
</shadow>
</value>
</block>
`}
${n}
</category>
`)}if("sensing"===e.id){let{editingTarget:G,runtime:V}=l,F=V.getTargetForStage();G||(G=F),e.xml=k(!1,G.isStage,G.id)}if("operators"===e.id){let{editingTarget:X,runtime:H}=l,Y=H.getTargetForStage();X||(X=Y),e.xml=(X.isStage,X.id,`
<category name="%{BKY_CATEGORY_OPERATORS} \xf0Ÿ\xaa„" id="operators" ${p.operators.xml}>
<block type="operator_add">
    <value name="NUM1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="NUM2">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
</block>
<block type="operator_subtract">
    <value name="NUM1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="NUM2">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
</block>
<block type="operator_multiply">
    <value name="NUM1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="NUM2">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
</block>
<block type="operator_divide">
    <value name="NUM1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="NUM2">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
</block>
${s}
<block type="operator_random">
    <value name="FROM">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="TO">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block type="operators_clamp"> // TurboCharged Block
    <value name="NUM">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
    <value name="MIN">
        <shadow type="math_number">
            <field name="NUM">25</field>
        </shadow>
    </value>
    <value name="MAX">
        <shadow type="math_number">
            <field name="NUM">40</field>
        </shadow>
    </value>
</block>
<block type="operators_ifthenelse_reporter">
    <value name="CONDITION">
        <shadow type="boolean">
            <field name="CONDITION"></field>
        </shadow>
    </value>
    <value name="TEXT1">
        <shadow type="text">
            <field name="TEXT">pass</field>
        </shadow>
    </value>
    <value name="TEXT2">
        <shadow type="text">
            <field name="TEXT">fail</field>
        </shadow>
    </value>
</block>
<block type="operators_egg">
    <value name="TEXT">
        <shadow type="text">
            <field name="TEXT">\xf0Ÿ\xa5š</field>
        </shadow>
    </value>
</block>
${s}
<block type="operator_gt">
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
</block>
<block type="operators_gtEqual"> // TurboCharged Block
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
</block>
<block type="operator_lt">
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
</block>
<block type="operators_ltEqual"> // TurboCharged Block
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
</block>
<block type="operator_equals">
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM"></field>
        </shadow>
    </value>
    <value name="OPERAND1">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
</block>
        <block type="operators_textplusidentical"> // TurboCharged Block
    <value name="OPERAND1">
            <shadow type="text">
                <field name="TEXT">A</field>
            </shadow>
        </value>
    <value name="OPERAND2">
            <shadow type="text">
                <field name="TEXT">a</field>
            </shadow>
        </value>
</block>
<block type="operators_textplusisCase"> // TurboCharged Block
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
<value name="TEXTCASE">
        <shadow type="operators_menu_textCase"></shadow>
    </value>
</block>
<block type="operators_textplustoCase"> // TurboCharged Block
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
<value name="TEXTCASE">
        <shadow type="operators_menu_textCase"></shadow>
    </value>
</block>
${s}
<block type="operator_and">
    <value name="OPERAND1">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
</block>
<block type="operator_or">
    <value name="OPERAND1">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
</block>
<block type="operators_nor"> // TurboCharged Block
    <value name="OPERAND1">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
</block>
<block type="operators_xor"> // TurboCharged Block
    <value name="OPERAND1">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
</block>
<block type="operator_not">
    <value name="OPERAND1">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
    <value name="OPERAND2">
        <shadow type="boolean">
            <field name="BOOL"></field>
        </shadow>
    </value>
</block>
${s}
<block type="operator_join">
    <value name="STRING1">
        <shadow type="text">
            <field name="TEXT">apple </field>
        </shadow>
    </value>
    <value name="STRING2">
        <shadow type="text">
            <field name="TEXT">banana</field>
        </shadow>
    </value>
</block>
<block type="operators_textplusrepeat"> // TurboCharged Block
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple </field>
        </shadow>
    </value>
<value name="REPEAT">
        <shadow type="math_number">
            <field name="NUM">3</field>
        </shadow>
    </value>
</block>
<block type="operators_textplussplit"> // TurboCharged Block
<value name="ITEM">
        <shadow type="math_number">
            <field name="NUM">3</field>
        </shadow>
    </value>
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
<value name="SPLIT">
        <shadow type="text">
            <field name="TEXT">p</field>
        </shadow>
    </value>
</block>
<block type="operator_letter_of">
    <value name="LETTER">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
</block>
<block type="operators_textplusindexof"> // TurboCharged Block
<value name="SUBSTRING">
        <shadow type="text">
            <field name="TEXT">p</field>
        </shadow>
    </value>
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
</block>
<block type="operators_textpluscount"> // TurboCharged Block
<value name="SUBSTRING">
        <shadow type="text">
            <field name="TEXT">p</field>
        </shadow>
    </value>
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
</block>
<block type="operators_substring">
    <value name="START">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    <value name="END">
            <shadow type="math_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
    <value name="STRING">
            <shadow type="text">
                <field name="TEXT">apple</field>
            </shadow>
        </value>
</block>
<block type="operator_length">
    <value name="STRING">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
</block>
<block type="operator_contains">
    <value name="STRING1">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
    <value name="STRING2">
        <shadow type="text">
            <field name="TEXT">a</field>
        </shadow>
    </value>
</block>
<block type="operators_replace"> // TurboCharged Block
    <value name="INPUT1">
        <shadow type="text">
            <field name="TEXT">Charged</field>
        </shadow>
    </value>
    <value name="INPUT2">
        <shadow type="text">
            <field name="TEXT">Warp</field>
        </shadow>
    </value>
    <value name="STRING">
        <shadow type="text">
            <field name="TEXT">TurboCharged</field>
        </shadow>
    </value>
</block>
${s}
<block type="operators_textplusunicodeof"> // TurboCharged Block
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">A</field>
        </shadow>
    </value>
</block>
<block type="operators_textplusunicodefrom"> // TurboCharged Block
<value name="NUM">
        <shadow type="math_number">
            <field name="NUM">65</field>
        </shadow>
    </value>
</block>
${s}
<block type="operators_textplusreplaceRegex"> // TurboCharged Block
<value name="REGEX">
        <shadow type="text">
            <field name="TEXT">.</field>
        </shadow>
    </value>
<value name="FLAGS">
        <shadow type="text">
            <field name="TEXT">g</field>
        </shadow>
    </value>
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">Hello world!</field>
        </shadow>
    </value>
<value name="REPLACE">
        <shadow type="text">
            <field name="TEXT">$&amp;$&amp;</field>
        </shadow>
    </value>
</block>
<block type="operators_textplusmatchRegex"> // TurboCharged Block
<value name="ITEM">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">Hello world!</field>
        </shadow>
    </value>
<value name="REGEX">
        <shadow type="text">
            <field name="TEXT">(.) (.{2})</field>
        </shadow>
    </value>
<value name="FLAGS">
        <shadow type="text">
            <field name="TEXT">g</field>
        </shadow>
    </value>
</block>
<block type="operators_textpluscountRegex"> // TurboCharged Block
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">Hello world!</field>
        </shadow>
    </value>
<value name="REGEX">
        <shadow type="text">
            <field name="TEXT">[AEIOU]</field>
        </shadow>
    </value>
<value name="FLAGS">
        <shadow type="text">
            <field name="TEXT">i</field>
        </shadow>
    </value>
</block>
<block type="operators_textplustestRegex"> // TurboCharged Block
<value name="STRING">
        <shadow type="text">
            <field name="TEXT">Hello world!</field>
        </shadow>
    </value>
<value name="REGEX">
        <shadow type="text">
            <field name="TEXT">hello</field>
        </shadow>
    </value>
<value name="FLAGS">
        <shadow type="text">
            <field name="TEXT">i</field>
        </shadow>
    </value>
</block>
${s}
<block type="operators_tweenValue">
<value name="MODE">
        <shadow type="operators_menu_tweenmodes"></shadow>
    </value>
<value name="DIRECTION">
        <shadow type="operators_menu_tweendirection"></shadow>
    </value>
<value name="START">
        <shadow type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
<value name="END">
        <shadow type="math_number">
            <field name="NUM">100</field>
        </shadow>
    </value>
<value name="AMOUNT">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
</block>
<block type="operator_mod"/>
<block type="operator_round"/>
${s}
<block type="operators_percentof">
    <value name="PERCENT">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
    <value name="AMOUNT">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
</block>
<block type="operators_percentis">
    <value name="PERCENT">
        <shadow type="math_number">
            <field name="NUM">5</field>
        </shadow>
    </value>
    <value name="AMOUNT">
        <shadow type="math_number">
            <field name="NUM">10</field>
        </shadow>
    </value>
</block>
<block type="operators_percentUD">
    <value name="AMOUNT">
        <shadow type="math_number">
            <field name="NUM">45</field>
        </shadow>
    </value>
    <value name="MODE">
        <shadow type="operators_menu_percentMode"></shadow>
    </value>
    <value name="PERCENT">
        <shadow type="math_number">
            <field name="NUM">11.11</field>
        </shadow>
    </value>
</block>
${s}
<block type="operator_mathop"/>
${s}
<block type="operators_bool_coupler"> // TurboCharged Block
    <value name="TEXT">
        <shadow type="text">
            <field name="TEXT">true</field>
        </shadow>
    </value>
</block>
<block type="operators_true_block"> // TurboCharged Block
</block>
<block type="operators_false_block"> // TurboCharged Block
</block>
<block type="operators_casttoType"> // TurboCharged Block
    <value name="TYPE">
        <shadow type="operators_menu_castType"></shadow>
    </value>
    <value name="INPUT">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
</block>
<block type="operators_casttypeOf"> // TurboCharged Block
<value name="INPUT">
        <shadow type="text">
            <field name="TEXT">apple</field>
        </shadow>
    </value>
</block>

<label text="High Precision Math"/>
<block type="operators_presadd"> // TurboCharged Block
<value name="A">
        <shadow type="text">
            <field name="TEXT">0.2</field>
        </shadow>
    </value>
<value name="B">
        <shadow type="text">
            <field name="TEXT">0.1</field>
        </shadow>
    </value>
</block>
<block type="operators_pressubtract"> // TurboCharged Block
<value name="A">
        <shadow type="text">
            <field name="TEXT">0.4</field>
        </shadow>
    </value>
<value name="B">
        <shadow type="text">
            <field name="TEXT">0.1</field>
        </shadow>
    </value>
</block>
<block type="operators_presmultiply"> // TurboCharged Block
<value name="A">
        <shadow type="text">
            <field name="TEXT">0.3</field>
        </shadow>
    </value>
<value name="B">
        <shadow type="text">
            <field name="TEXT">0.1</field>
        </shadow>
    </value>
</block>
<block type="operators_presdivided"> // TurboCharged Block
<value name="A">
        <shadow type="text">
            <field name="TEXT">10</field>
        </shadow>
    </value>
<value name="B">
        <shadow type="text">
            <field name="TEXT">3</field>
        </shadow>
    </value>
<value name="PRE">
        <shadow type="text">
            <field name="TEXT">10</field>
        </shadow>
    </value>
</block>
${n}
</category>
`)}if("data"===e.id){let{editingTarget:K,runtime:W}=l,j=W.getTargetForStage();K||(K=j),e.xml=function e(t,o){let l,n,s=[],u=[],i=o.getAllVariableNamesInScopeByType("",""),d=r.getTargetForStage().getAllVariableNamesInScopeByType("",""),T=i.filter(e=>!d.includes(e));for(let c=0;c<d.length;c++){let m=h(o.lookupVariableByNameAndType(d[c]));u.push(m)}if(!o.isStage)for(let E=0;E<T.length;E++){let y=h(o.lookupVariableByNameAndType(T[E]));s.push(y)}return`
<category name="%{BKY_CATEGORY_VARIABLES} \xf0Ÿ\xaa„" id="variables" ${p.data.xml} >
<button text="${a.Msg.NEW_VARIABLE}" callbackKey="CREATE_VARIABLE"></button>
${u.length>0||s.length>0?`
// <block type="motion_data_deleteVariable">
//     ${O(C.data_deleteVariable)}
//     <value name="VARIABLE">
//         <shadow type="text">
//             <field name="TEXT">my variable</field>
//         </shadow>
//     </value>
// </block>
<block type="data_setvariableto" gap="20">
    <value name="VARIABLE">
    <shadow type="control_menu_variablesMenu2"></shadow>
    </value>
    <value name="VALUE">
        <shadow type="text">
            <field name="TEXT">0</field>
        </shadow>
    </value>
</block>
<block type="data_changevariableby">
    <value name="VARIABLE">
        <shadow type="control_menu_variablesMenu2"></shadow>
    </value>
    <value name="VALUE">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
</block>
<block type="data_showvariable">
    <value name="VARIABLE">
        <shadow type="control_menu_variablesMenu2"></shadow>
    </value>
</block>
<block type="data_hidevariable">
    <value name="VARIABLE">
        <shadow type="control_menu_variablesMenu2"></shadow>
    </value>
</block>
<block type="motion_data_hasVariable">
    ${O(C.data_hasVariable)}
    <value name="VARIABLE">
        <shadow type="text">
            <field name="TEXT">my variable</field>
        </shadow>
    </value>
</block>
<block type="motion_data_getVariable">
    ${O(C.data_getVariable)}
    <value name="VARIABLE">
        <shadow type="text">
            <field name="TEXT">my variable</field>
        </shadow>
    </value>
</block>
${n=`
${u.length>0?'<label text="For all sprites:"/>':""}
${u.join("\n")}`}
${o.isStage?"":`
${l=`
${s.length>0?'<label text="For this sprite only:"/>':""}
${s.join("\n")}`}
`}`:""}
</category>
${function e(t,o){let l,n,s=[],u=[],i=o.getAllVariableNamesInScopeByType("list",""),d=r.getTargetForStage().getAllVariableNamesInScopeByType("list",""),T=i.filter(e=>!d.includes(e)),c=o.lookupVariableByNameAndType(i[0],"list")||"my list";for(let m=0;m<d.length;m++){let E=A(o.lookupVariableByNameAndType(d[m],"list"));u.push(E)}if(!o.isStage)for(let y=0;y<T.length;y++){let N=A(o.lookupVariableByNameAndType(T[y],"list"));s.push(N)}return`<category name="Lists \xf0Ÿ\xaa„" id="lists" ${p.data_lists.xml}>
    <button text="${a.Msg.NEW_LIST}" callbackKey="CREATE_LIST"></button>
    ${u.length>0||s.length>0?`
    <block type="data_addtolist">
        ${b(c)}
        <value name="ITEM">
            <shadow type="text">
                <field name="TEXT">thing</field>
            </shadow>
        </value>
    </block>
    <block type="data_deleteoflist">
        ${b(c)}
        <value name="INDEX">
            <shadow type="math_integer">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="data_deletealloflist">
        ${b(c)}
    </block>
    <block type="data_insertatlist">
        ${b(c)}
        <value name="INDEX">
            <shadow type="math_integer">
            <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="ITEM">
            <shadow type="text">
                <field name="TEXT">thing</field>
            </shadow>
        </value>
    </block>
    <block type="data_replaceitemoflist">
        ${b(c)}
        <value name="INDEX">
            <shadow type="math_integer">
                <field name="NUM">1</field>
            </shadow>
        </value>
        <value name="ITEM">
            <shadow type="text">
                <field name="TEXT">thing</field>
            </shadow>
        </value>
    </block>
    <block type="data_itemoflist">
        ${b(c)}
        <value name="INDEX">
            <shadow type="math_integer">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="data_itemnumoflist">
        <value name="ITEM">
            <shadow type="text">
                <field name="TEXT">thing</field>
            </shadow>
        </value>
        ${b(c)}
    </block>
    <block type="data_lengthoflist">
        ${b(c)}
    </block>
    <block type="data_listcontainsitem">
        ${b(c)}
            <value name="ITEM">
                <shadow type="text">
                    <field name="TEXT">thing</field>
                </shadow>
            </value>
    </block>
    <block type="data_showlist">
        ${b(c)}
    </block>
    <block type="data_hidelist">
        ${b(c)}
    </block>
        ${n=`
${u.length>0?'<label text="For all sprites:"/>':""}
${u.join("\n")}`}
        ${o.isStage?"":l=`
${s.length>0?'<label text="For this sprite only:"/>':""}
${s.join("\n")}`}
    `:""}
    </category>`}(t,o)}
`;/*!
 * <category
    name="Lists"
    id="lists"
    colour="#FF661A"
    secondaryColour="#FF5500"
    custom="LIST">
    </category>"
*/ }(!1,K)}if("myBlocks"===e.id){let{editingTarget:z,runtime:q}=l,J=q.getTargetForStage();z||(z=J),e.xml=myBlocks(!1,z.isStage,z.id)}return e}),t};let x=r._convertPlaceholders.bind(r);r._convertPlaceholders=function(e,t,a){let o=x(e,t,a),l=e.blockInfo.arguments[a]||{},r=`args${e.outLineNum}`,n=e.blockJSON[r],s=n[n.length-1];return l.type===T.VARIABLE&&(s.type="field_variable",s.variableTypes=[l.variableType??""],l.variable&&(s.variable=l.variable)),o},e.extensions.register(new I),e.extensions.register(new class e{getInfo(){return{id:"looks",name:"Looks \xf0Ÿ\xaa„",color1:p.looks.primary,color2:p.looks.secondary,color3:p.looks.tertiary,blocks:[]}}}),e.extensions.register(new class e{getInfo(){return{id:"sound",name:"Sound \xf0Ÿ\xaa„",color1:p.sound.primary,color2:p.sound.secondary,color3:p.sound.tertiary,blocks:[]}}}),e.extensions.register(new class t{constructor(){r.shouldExecuteStopClicked=!0,r.on("BEFORE_EXECUTE",()=>{E++,r.shouldExecuteStopClicked=!1,r.startHats(i+"_MoreEventsforever"),r.startHats(i+"_MoreEventswhileTrueFalse"),r.startHats(i+"_MoreEventswhenValueChanged"),r.startHats(i+"_MoreEventseveryDuration"),r.startHats(i+"_MoreEventswhileKeyPressed")}),r.on("PROJECT_START",()=>{E=0}),r.on("PROJECT_STOP_ALL",()=>{E=0,r.shouldExecuteStopClicked&&queueMicrotask(()=>r.startHats(i+"_MoreEventswhenStopClicked"))}),r.on("AFTER_EXECUTE",()=>{r.shouldExecuteStopClicked=!0});let e=l.greenFlag;l.greenFlag=function(){r.shouldExecuteStopClicked=!1,e.call(this)}}getInfo(){return{id:i,name:"Events \xf0Ÿ\xaa„",color1:p.events.primary,color2:p.events.secondary,color3:p.events.tertiary,blocks:[{opcode:"MoreEventswhenStopClicked",blockType:e.BlockType.EVENT,text:"when [STOP] clicked",isEdgeActivated:!1,arguments:{STOP:{type:e.ArgumentType.IMAGE,dataURI:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAQlBMVEUAAAC/UFC8Q0OzTU24SEi4SEi3SEi4R0e4SEi4SEi4SEi4SEi7SUm8SUnMTk7MT0/OT0/PT0/gVVXiVVXsWVn///+CoOd2AAAAC3RSTlMAEBMUu7zLz9D8/dIXnJwAAAABYktHRBXl2PmjAAAAxklEQVRIx+3WwRKDIBAD0JWqVEOtWv7/W3twOqKwELzW3N9wYhORMMYiztgZUZMUAKxqmh5Kno/MG256nzI59Z2mB+BWH+XzUt5RhWoyQjFZkTQFkTBFERlCnAwlDoYUgaHFblpaeL86AK0MvNjMIABmT2cGIAAWniw3ucm/k9ovduEjXzgXtUfJmtrTt9VZzYH9FSB/xvfKZMsiLFmuko61zBTfucjL9RpXf6nEU2MhPxXS86J+kORmjz6V6seViOnG8oT7ApMcjsYZwhXCAAAAAElFTkSuQmCC"}}},{opcode:"MoreEventsforever",blockType:e.BlockType.EVENT,text:"forever",isEdgeActivated:!1},{opcode:"MoreEventswhenTrueFalse",blockType:e.BlockType.HAT,text:"when [CONDITION] becomes [STATE]",isEdgeActivated:!0,arguments:{CONDITION:{type:e.ArgumentType.BOOLEAN},STATE:{type:e.ArgumentType.STRING,menu:"boolean"}}},{opcode:"MoreEventswhileTrueFalse",blockType:e.BlockType.HAT,text:"while [CONDITION] is [STATE]",isEdgeActivated:!1,arguments:{CONDITION:{type:e.ArgumentType.BOOLEAN},STATE:{type:e.ArgumentType.STRING,menu:"boolean"}}},{opcode:"MoreEventswhenValueChanged",blockType:e.BlockType.HAT,text:"when [INPUT] is changed",isEdgeActivated:!1,arguments:{INPUT:{type:null}}},{opcode:"MoreEventseveryDuration",blockType:e.BlockType.HAT,text:"every [DURATION] frames",isEdgeActivated:!1,arguments:{DURATION:{type:e.ArgumentType.NUMBER,defaultValue:3}}},{opcode:"MoreEventswhenKeyAction",blockType:e.BlockType.HAT,text:"when [KEY_OPTION] key [ACTION]",isEdgeActivated:!0,arguments:{KEY_OPTION:{type:e.ArgumentType.STRING,defaultValue:"space",menu:"keyboardButtons"},ACTION:{type:e.ArgumentType.STRING,menu:"action"}}},{opcode:"MoreEventswhileKeyPressed",blockType:e.BlockType.HAT,text:"while [KEY_OPTION] key pressed",isEdgeActivated:!1,arguments:{KEY_OPTION:{type:e.ArgumentType.STRING,defaultValue:"space",menu:"keyboardButtons"}}},{opcode:"MoreEvents_broadcastToTarget",blockType:e.BlockType.COMMAND,text:"broadcast [BROADCAST_OPTION] to [TARGET]",arguments:{BROADCAST_OPTION:{type:null},TARGET:{type:e.ArgumentType.STRING,menu:"targetMenu"}},hideFromPalette:!0},{opcode:"MoreEvents_broadcastToTargetAndWait",blockType:e.BlockType.COMMAND,text:"broadcast [BROADCAST_OPTION] to [TARGET] and wait",arguments:{BROADCAST_OPTION:{type:null},TARGET:{type:e.ArgumentType.STRING,menu:"targetMenu"}},hideFromPalette:!0},{opcode:"MoreEvents_broadcastData",blockType:e.BlockType.COMMAND,text:"broadcast [BROADCAST_OPTION] with data [DATA]",arguments:{BROADCAST_OPTION:{type:null},DATA:{type:e.ArgumentType.STRING}},hideFromPalette:!0},{opcode:"MoreEvents_broadcastDataAndWait",blockType:e.BlockType.COMMAND,text:"broadcast [BROADCAST_OPTION] with data [DATA] and wait",arguments:{BROADCAST_OPTION:{type:null},DATA:{type:e.ArgumentType.STRING}},hideFromPalette:!0},{blockType:e.BlockType.XML,xml:`<block type="${i}_MoreEvents_broadcastToTarget">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="TARGET">
                    <shadow type="${i}_menu_targetMenu"></shadow>
                </value>
            </block>
            <block type="${i}_MoreEvents_broadcastToTargetAndWait">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="TARGET">
                    <shadow type="${i}_menu_targetMenu"></shadow>
                </value>
            </block>
            <sep gap="36"/>
            <block type="${i}_MoreEvents_broadcastData">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="DATA">
                    <shadow type="text"></shadow>
                </value>
            </block>
            <block type="${i}_MoreEvents_broadcastDataAndWait">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="DATA">
                    <shadow type="text"></shadow>
                </value>
            </block>`},{opcode:"MoreEventsreceivedData",blockType:e.BlockType.REPORTER,text:"received data",disableMonitor:!0,allowDropAnywhere:!0},{opcode:"MoreEvents_broadcastDataToTarget",blockType:e.BlockType.COMMAND,text:"broadcast [BROADCAST_OPTION] to [TARGET] with data [DATA]",func:"MoreEvents_broadcastToTarget",arguments:{BROADCAST_OPTION:{type:null},TARGET:{type:e.ArgumentType.STRING,menu:"targetMenu"},DATA:{type:e.ArgumentType.STRING}},hideFromPalette:!0},{opcode:"MoreEvents_broadcastDataToTargetAndWait",blockType:e.BlockType.COMMAND,text:"broadcast [BROADCAST_OPTION] to [TARGET] with data [DATA] and wait",func:"MoreEvents_broadcastToTargetAndWait",arguments:{BROADCAST_OPTION:{type:null},TARGET:{type:e.ArgumentType.STRING,menu:"targetMenu"},DATA:{type:e.ArgumentType.STRING}},hideFromPalette:!0},{blockType:e.BlockType.XML,xml:`<block type="${i}_MoreEvents_broadcastDataToTarget">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="TARGET">
                    <shadow type="${i}_menu_targetMenu"></shadow>
                </value>
                <value name="DATA">
                    <shadow type="text"></shadow>
                </value>
            </block>
            <block type="${i}_MoreEvents_broadcastDataToTargetAndWait">
                <value name="BROADCAST_OPTION">
                    <shadow type="event_broadcast_menu"></shadow>
                </value>
                <value name="TARGET">
                    <shadow type="${i}_menu_targetMenu"></shadow>
                </value>
                <value name="DATA">
                    <shadow type="text"></shadow>
                </value>
            </block>`}],menus:{targetMenu:{acceptReporters:!0,items:"_getTargets"},keyboardButtons:{acceptReporters:!0,items:c},action:{acceptReporters:!1,items:["hit","released"]},boolean:{acceptReporters:!1,items:["true","false"]},state:{acceptReporters:!1,items:["enabled","disabled"]}}}}MoreEventswhenTrueFalse(e){return"true"===e.STATE?e.CONDITION:!e.CONDITION}MoreEventswhileTrueFalse(e){return"true"===e.STATE?e.CONDITION:!e.CONDITION}MoreEventswhenValueChanged(t,a){let o=a.thread.peekStack();return m[o]||(m[o]=e.Cast.toString(t.INPUT)),m[o]!==e.Cast.toString(t.INPUT)&&(m[o]=e.Cast.toString(t.INPUT),!0)}MoreEventseveryDuration(t,a){let o=Math.max(Math.round(e.Cast.toNumber(t.DURATION)),0);return!(E%o!=0)}MoreEventswhenKeyAction(t,a){let o=e.Cast.toString(t.KEY_OPTION).toLowerCase(),l=a.ioQuery("keyboard","getKeyIsDown",[o]);return"released"===t.ACTION?!l:l}MoreEventswhileKeyPressed(t,a){let o=e.Cast.toString(t.KEY_OPTION).toLowerCase();return a.ioQuery("keyboard","getKeyIsDown",[o])}MoreEvents_broadcastToTarget(t,a){let o=e.Cast.toString(t.BROADCAST_OPTION);if(!o)return;let l=e.Cast.toString(t.DATA);console.log(l);let r=this._getTargetFromMenu(t.TARGET).sprite.clones,n=[];for(let s of r)n=[...n,...a.startHats("event_whenbroadcastreceived",{BROADCAST_OPTION:o},s),],l&&n.forEach(e=>e.receivedData=t.DATA)}MoreEvents_broadcastToTargetAndWait(t,a){a.stackFrame.broadcastVar||(a.stackFrame.broadcastVar=e.Cast.toString(t.BROADCAST_OPTION));let o=this._getTargetFromMenu(t.TARGET);if(!o)return;let l=o.sprite.clones,n=e.Cast.toString(t.DATA);if(a.stackFrame.broadcastVar){let s=a.stackFrame.broadcastVar;if(!a.stackFrame.startedThreads){for(let u of(a.stackFrame.startedThreads=[],l))a.stackFrame.startedThreads=[...a.stackFrame.startedThreads,...a.startHats("event_whenbroadcastreceived",{BROADCAST_OPTION:s},u),],n&&a.stackFrame.startedThreads.forEach(e=>e.receivedData=t.DATA);if(0===a.stackFrame.startedThreads.length)return}let i=a.stackFrame.startedThreads.some(e=>-1!==r.threads.indexOf(e));i&&(a.stackFrame.startedThreads.every(e=>r.isWaitingThread(e))?a.yieldTick():a.yield())}}MoreEvents_broadcastData(t,a){let o=e.Cast.toString(t.BROADCAST_OPTION);if(!o)return;let l=e.Cast.toString(t.DATA);a.startHats("event_whenbroadcastreceived",{BROADCAST_OPTION:o}).forEach(e=>e.receivedData=l)}MoreEvents_broadcastDataAndWait(t,a){let o=e.Cast.toString(t.DATA);if(a.stackFrame.broadcastVar||(a.stackFrame.broadcastVar=e.Cast.toString(t.BROADCAST_OPTION)),a.stackFrame.broadcastVar){let l=a.stackFrame.broadcastVar;if(!a.stackFrame.startedThreads){if(a.stackFrame.startedThreads=a.startHats("event_whenbroadcastreceived",{BROADCAST_OPTION:l}),0===a.stackFrame.startedThreads.length)return;a.stackFrame.startedThreads.forEach(e=>e.receivedData=o)}let n=a.stackFrame.startedThreads.some(e=>-1!==r.threads.indexOf(e));n&&(a.stackFrame.startedThreads.every(e=>r.isWaitingThread(e))?a.yieldTick():a.yield())}}MoreEventsreceivedData(e,t){let a=t.thread.receivedData;return a||""}_getTargetFromMenu(t){let a=e.vm.runtime.getSpriteTargetByName(t);return"_stage_"===t&&(a=r.getTargetForStage()),a}_getTargets(){let t=[{text:"Stage",value:"_stage_"}],a=e.vm.runtime.targets;for(let o=1;o<a.length;o++){let l=a[o];if(l.isOriginal){let r=l.getName();t.push({text:r,value:r})}}return t.length>0?t:[{text:"",value:0}]}}),e.extensions.register(new class t{getInfo(){return{id:"control",name:"Control \xf0Ÿ\xaa„",color1:p.control.primary,color2:p.control.secondary,color3:p.control.tertiary,blocks:[{opcode:"clonespluswhenCloneStartsWithVar",blockType:e.BlockType.HAT,text:"when I start as a clone with [INPUTA] set to [INPUTB]",arguments:{INPUTA:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTB:{type:e.ArgumentType.STRING,defaultValue:"1"}}},{opcode:"clonespluscreateCloneWithVar",blockType:e.BlockType.COMMAND,text:"create clone with [INPUTA] set to [INPUTB]",arguments:{INPUTA:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTB:{type:e.ArgumentType.STRING,defaultValue:"1"}}},{opcode:"clonesplustouchingCloneWithVar",blockType:e.BlockType.BOOLEAN,text:"touching clone with [INPUTA] set to [INPUTB]?",arguments:{INPUTA:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTB:{type:e.ArgumentType.STRING,defaultValue:"1"}}},{opcode:"clonesplustouchingMainSprite",blockType:e.BlockType.BOOLEAN,text:"touching main sprite?"},{opcode:"clonesplussetVariableOfClone",blockType:e.BlockType.COMMAND,text:"set variable [INPUTA] to [INPUTB] for clones with [INPUTC] set to [INPUTD]",arguments:{INPUTA:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTB:{type:e.ArgumentType.STRING,defaultValue:"0"},INPUTC:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTD:{type:e.ArgumentType.STRING,defaultValue:"1"}}},{opcode:"clonesplusgetVariableOfClone",blockType:e.BlockType.REPORTER,text:"variable [INPUTA] of clone with [INPUTB] set to [INPUTC]",disableMonitor:!0,arguments:{INPUTA:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTB:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTC:{type:e.ArgumentType.STRING,defaultValue:"1"}}},{opcode:"clonesplussetVariableOfMainSprite",blockType:e.BlockType.COMMAND,text:"set variable [INPUTA] to [INPUTB] for main sprite",arguments:{INPUTA:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTB:{type:e.ArgumentType.STRING,defaultValue:"1"}}},{opcode:"clonesplusgetVariableOfMainSprite",blockType:e.BlockType.REPORTER,text:"variable [INPUT] of main sprite",disableMonitor:!0,arguments:{INPUT:{type:e.ArgumentType.STRING,menu:"variablesMenu"}}},{opcode:"clonespluscloneExists",blockType:e.BlockType.BOOLEAN,text:"clone with [INPUTA] set to [INPUTB] exists?",arguments:{INPUTA:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTB:{type:e.ArgumentType.STRING,defaultValue:"1"}}},{opcode:"clonesplusgetThingOfClone",blockType:e.BlockType.REPORTER,text:"[INPUTA] of clone with [INPUTB] set to [INPUTC]",disableMonitor:!0,arguments:{INPUTA:{type:e.ArgumentType.STRING,defaultValue:"x position",menu:"thingOfMenu"},INPUTB:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTC:{type:e.ArgumentType.STRING,defaultValue:"1"}}},{opcode:"clonesplusgetThingOfMainSprite",blockType:e.BlockType.REPORTER,text:"[INPUT] of main sprite",disableMonitor:!0,arguments:{INPUT:{type:e.ArgumentType.STRING,defaultValue:"x position",menu:"thingOfMenu"}}},{opcode:"clonesplusstopScriptsInSprite",blockType:e.BlockType.COMMAND,text:"stop scripts in [INPUT]",arguments:{INPUT:{type:e.ArgumentType.STRING,menu:"spriteMenu"}}},{opcode:"clonesplusstopScriptsInClone",blockType:e.BlockType.COMMAND,text:"stop scripts in clones with [INPUTA] set to [INPUTB]",arguments:{INPUTA:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTB:{type:e.ArgumentType.STRING,defaultValue:"1"}}},{opcode:"clonesplusstopScriptsInMainSprite",blockType:e.BlockType.COMMAND,text:"stop scripts in main sprite"},{opcode:"clonesplusdeleteClonesInSprite",blockType:e.BlockType.COMMAND,text:"delete clones in [INPUT]",arguments:{INPUT:{type:e.ArgumentType.STRING,menu:"spriteMenu"}}},{opcode:"clonesplusdeleteCloneWithVar",blockType:e.BlockType.COMMAND,text:"delete clones with [INPUTA] set to [INPUTB]",arguments:{INPUTA:{type:e.ArgumentType.STRING,menu:"variablesMenu"},INPUTB:{type:e.ArgumentType.STRING,defaultValue:"1"}}},{opcode:"clonesplusisClone",blockType:e.BlockType.BOOLEAN,text:"is clone?"},{opcode:"clonespluscloneCount",blockType:e.BlockType.REPORTER,text:"clone count"},{opcode:"clonesplusspriteCloneCount",blockType:e.BlockType.REPORTER,text:"clone count of [INPUT]",disableMonitor:!0,arguments:{INPUT:{type:e.ArgumentType.STRING,menu:"spriteMenu"}}}],menus:{spriteMenu:{acceptReporters:!0,items:"getSprites"},variablesMenu:{acceptReporters:!1,items:"getVariables"},thingOfMenu:{acceptReporters:!1,items:[{text:"x position",value:"x position"},{text:"y position",value:"y position"},{text:"direction",value:"direction"},{text:"costume #",value:"costume num"},{text:"costume name",value:"costume name"},{text:"size",value:"size"},{text:"volume",value:"volume"},],variablesMenu2:{acceptReporters:!0,items:"getVariables2"}}}}}clonespluswhenCloneStartsWithVar(t,a){if(a.target.isOriginal)return!1;let o=a.target.lookupVariableById(t.INPUTA),l=t.INPUTB;return!!o&&0===e.Cast.compare(o.value,l)}clonespluscreateCloneWithVar(t,a){e.vm.runtime.ext_scratch3_control._createClone(a.target.sprite.name,a.target);let o=a.target.sprite.clones,l=o.length-1,r=o[l].lookupVariableById(t.INPUTA);r&&(r.value=t.INPUTB)}clonesplustouchingCloneWithVar(t,a){let o=a.target.sprite.clones.filter(a=>{let o=a.lookupVariableById(t.INPUTA);return o&&0===e.Cast.compare(o.value,t.INPUTB)}).map(e=>e.drawableID);return 0!==o.length&&e.vm.renderer.isTouchingDrawables(a.target.drawableID,o)}clonesplustouchingMainSprite(t,a){if(a.target.isOriginal)return!1;let o=a.target.sprite.clones[0],l=[o.drawableID];return e.vm.renderer.isTouchingDrawables(a.target.drawableID,l)}clonesplussetVariableOfClone(t,a){let o=t.INPUTB,l=t.INPUTD,r=a.target.sprite.clones;for(let n=1;n<r.length;n++){let s=r[n].lookupVariableById(t.INPUTC);if(s&&0===e.Cast.compare(s.value,l)){let u=r[n].lookupVariableById(t.INPUTA);u&&(u.value=o)}}}clonesplusgetVariableOfClone(e,t){let a=this.getCloneFromVariable(e.INPUTB,e.INPUTC,t.target.sprite.clones);if(!a)return"";let o=a.lookupVariableById(e.INPUTA);return o.value}clonesplussetVariableOfMainSprite(e,t){let a=t.target.sprite.clones[0],o=a.lookupVariableById(e.INPUTA);o&&(o.value=e.INPUTB)}clonesplusgetVariableOfMainSprite(e,t){let a=t.target.sprite.clones[0],o=a.lookupVariableById(e.INPUT);return o?o.value:""}clonespluscloneExists(e,t){let a=this.getCloneFromVariable(e.INPUTA,e.INPUTB,t.target.sprite.clones);return!!a}clonesplusgetThingOfClone(e,t){let a=this.getCloneFromVariable(e.INPUTB,e.INPUTC,t.target.sprite.clones);return y(a,e.INPUTA)}clonesplusgetThingOfMainSprite(e,t){let a=t.target.sprite.clones[0];return y(a,e.INPUT)}clonesplusstopScriptsInSprite(t){let a=e.vm.runtime.getSpriteTargetByName(t.INPUT);a&&e.vm.runtime.stopForTarget(a)}clonesplusstopScriptsInMainSprite(t,a){e.vm.runtime.stopForTarget(a.target.sprite.clones[0])}clonesplusstopScriptsInClone(t,a){let o=a.target.sprite.clones,l=t.INPUTB;for(let r=1;r<o.length;r++){let n=o[r].lookupVariableById(t.INPUTA);n&&0===e.Cast.compare(n.value,l)&&e.vm.runtime.stopForTarget(o[r])}}clonesplusdeleteClonesInSprite(t,a){let o=e.vm.runtime.getSpriteTargetByName(t.INPUT);if(!o)return;let l=o.sprite.clones;for(let r=l.length-1;r>0;r--)e.vm.runtime.disposeTarget(l[r])}clonesplusdeleteCloneWithVar(t,a){let o=a.target.sprite.clones,l=t.INPUTB;for(let r=o.length-1;r>0;r--){let n=o[r].lookupVariableById(t.INPUTA);n&&0===e.Cast.compare(n.value,l)&&e.vm.runtime.disposeTarget(o[r])}}clonesplusisClone(e,t){return!t.target.isOriginal}clonespluscloneCount(t,a){return e.vm.runtime._cloneCounter}clonesplusspriteCloneCount(t,a){let o=e.vm.runtime.getSpriteTargetByName(t.INPUT);return o?o.sprite.clones.length-1:0}getCloneFromVariable(t,a,o){for(let l=1;l<o.length;l++){let r=o[l].lookupVariableById(t);if(r&&0===e.Cast.compare(r.value,a))return o[l]}return null}getSprites(){let t=[],a=e.vm.runtime.targets,o=e.vm.runtime.getEditingTarget().sprite.name;for(let l=1;l<a.length;l++){let r=a[l].sprite,n=r.name;if(o===r.name&&(n="myself"),a[l].isOriginal){let s={text:n,value:r.name};t.push(s)}}return t.length>0?t:[{text:"",value:0}]}clonesplusgetSpriteObj(t){let a=e.vm.runtime.getSpriteTargetByName(t);return JSON.stringify(a)}getVariables(){let e="undefined"==typeof Blockly?[]:Blockly.getMainWorkspace().getVariableMap().getVariablesOfType("").filter(e=>e.isLocal).map(e=>({text:e.name,value:e.getId()}));return e.length>0?e:[{text:"",value:""}]}getVariables2(){let e=l.runtime.getEditingTarget(),t=e.getAllVariableNamesInScopeByType("","");return t.length>0?t:[]}}),e.extensions.register(new class e{getInfo(){return{id:"sensing",name:"Sensing \xf0Ÿ\xaa„",color1:p.sensing.primary,color2:p.sensing.secondary,color3:p.sensing.tertiary,blocks:[]}}}),e.extensions.register(new class t{getInfo(){return{id:"operators",name:"Operators \xf0Ÿ\xaa„",color1:p.operators.primary,color2:p.operators.secondary,color3:p.operators.tertiary,blocks:[{opcode:"percentof",blockType:e.BlockType.REPORTER,text:"[PERCENT]% of [AMOUNT]?",disableMonitor:!0,arguments:{PERCENT:{type:e.ArgumentType.NUMBER,defaultValue:"10"},AMOUNT:{type:e.ArgumentType.NUMBER,defaultValue:"50"}}},{opcode:"percentis",blockType:e.BlockType.REPORTER,text:"[AMOUNT] is [PERCENT]% of what?",disableMonitor:!0,arguments:{PERCENT:{type:e.ArgumentType.NUMBER,defaultValue:"5"},MAX:{type:e.ArgumentType.NUMBER,defaultValue:"10"}}},{opcode:"percentUD",blockType:e.BlockType.REPORTER,text:"[AMOUNT] [MODE] by [PERCENT]%?",disableMonitor:!0,arguments:{AMOUNT:{type:e.ArgumentType.NUMBER,defaultValue:"45"},MODE:{type:e.ArgumentType.STRING,menu:"percentMode"},PERCENT:{type:e.ArgumentType.NUMBER,defaultValue:"11.11"}}},{opcode:"clamp",blockType:e.BlockType.REPORTER,text:"clamp [NUM] between [MIN] and [MAX]",arguments:{NUM:{type:e.ArgumentType.NUMBER,defaultValue:30},MIN:{type:e.ArgumentType.NUMBER,defaultValue:25},MAX:{type:e.ArgumentType.NUMBER,defaultValue:40}}},{opcode:"egg",blockType:e.BlockType.REPORTER,text:"egg [TEXT]",arguments:{TEXT:{type:e.ArgumentType.NUMBER,defaultValue:"\xf0Ÿ\xa5š"}}},{opcode:"gtEqual",blockType:e.BlockType.BOOLEAN,text:"[OPERAND1] \xe2‰\xa5 [OPERAND2]",arguments:{OPERAND1:{type:e.ArgumentType.NUMBER,defaultValue:""},OPERAND2:{type:e.ArgumentType.NUMBER,defaultValue:"50"}}},{opcode:"ltEqual",blockType:e.BlockType.BOOLEAN,text:"[OPERAND1] \xe2‰\xa4 [OPERAND2]",arguments:{OPERAND1:{type:e.ArgumentType.NUMBER,defaultValue:""},OPERAND2:{type:e.ArgumentType.NUMBER,defaultValue:"50"}}},{opcode:"nor",blockType:e.BlockType.BOOLEAN,text:"[OPERAND1] nor [OPERAND2]",arguments:{OPERAND1:{type:e.ArgumentType.BOOLEAN,defaultValue:""},OPERAND2:{type:e.ArgumentType.BOOLEAN,defaultValue:"50"}}},{opcode:"xor",blockType:e.BlockType.BOOLEAN,text:"[OPERAND1] xor [OPERAND2]",arguments:{OPERAND1:{type:e.ArgumentType.BOOLEAN,defaultValue:""},OPERAND2:{type:e.ArgumentType.BOOLEAN,defaultValue:"50"}}},{opcode:"substring",blockType:e.BlockType.REPORTER,text:"letters [START] to [END] of [STRING]",arguments:{START:{type:e.ArgumentType.NUMBER,defaultValue:"1"},END:{type:e.ArgumentType.NUMBER,defaultValue:"3"},STRING:{type:e.ArgumentType.STRING,defaultValue:"apple"}}},{opcode:"replace",blockType:e.BlockType.REPORTER,text:"replace [INPUT1] with [INPUT2] in [STRING]",arguments:{INPUT1:{type:e.ArgumentType.STRING,defaultValue:"Charged"},INPUT2:{type:e.ArgumentType.STRING,defaultValue:"Warp"},STRING:{type:e.ArgumentType.STRING,defaultValue:"TurboCharged"}}},{opcode:"true_block",blockType:e.BlockType.BOOLEAN,text:"true"},{opcode:"false_block",blockType:e.BlockType.BOOLEAN,text:"false"},{opcode:"bool_coupler",blockType:e.BlockType.BOOLEAN,text:"[TEXT]",arguments:{TEXT:{type:e.ArgumentType.STRING,defaultValue:"true"}}},{opcode:"ifthenelse_reporter",blockType:e.BlockType.REPORTER,text:"if [CONDITION] then [TEXT1] else [TEXT2]",arguments:{CONDITION:{type:e.ArgumentType.BOOLEAN},TEXT1:{type:e.ArgumentType.STRING,defaultValue:"pass"},TEXT2:{type:e.ArgumentType.STRING,defaultValue:"fail"}}},{opcode:"test",blockType:e.BlockType.REPORTER,text:"test click me",callback:"test"},{opcode:"presadd",blockType:e.BlockType.REPORTER,text:"[A] + [B]",arguments:{A:{type:e.ArgumentType.STRING,defaultValue:"0.2"},B:{type:e.ArgumentType.STRING,defaultValue:"0.1"}}},{opcode:"pressubtract",blockType:e.BlockType.REPORTER,text:"[A] - [B]",arguments:{A:{type:e.ArgumentType.STRING,defaultValue:"0.4"},B:{type:e.ArgumentType.STRING,defaultValue:"0.1"}}},{opcode:"presmultiply",blockType:e.BlockType.REPORTER,text:"[A] * [B]",arguments:{A:{type:e.ArgumentType.STRING,defaultValue:"0.3"},B:{type:e.ArgumentType.STRING,defaultValue:"0.1"}}},{opcode:"presdivided",blockType:e.BlockType.REPORTER,text:"[A] / [B] to precision of [PRE]",arguments:{A:{type:e.ArgumentType.STRING,defaultValue:"10"},B:{type:e.ArgumentType.STRING,defaultValue:"3"},PRE:{type:e.ArgumentType.STRING,defaultValue:"10"}}},{opcode:"textplusletters_of",blockType:e.BlockType.REPORTER,text:"letters [LETTER1] to [LETTER2] of [STRING]",arguments:{LETTER1:{type:e.ArgumentType.NUMBER,defaultValue:"2"},LETTER2:{type:e.ArgumentType.NUMBER,defaultValue:"4"},STRING:{type:e.ArgumentType.STRING,defaultValue:"apple"}}},{opcode:"textplussplit",blockType:e.BlockType.REPORTER,text:"item [ITEM] of [STRING] split by [SPLIT]",arguments:{ITEM:{type:e.ArgumentType.NUMBER,defaultValue:"3"},STRING:{type:e.ArgumentType.STRING,defaultValue:"apple"},SPLIT:{type:e.ArgumentType.STRING,defaultValue:"p"}}},{opcode:"textpluscount",blockType:e.BlockType.REPORTER,text:"count [SUBSTRING] in [STRING]",arguments:{SUBSTRING:{type:e.ArgumentType.STRING,defaultValue:"p"},STRING:{type:e.ArgumentType.STRING,defaultValue:"apple"}}},{opcode:"textplusindexof",blockType:e.BlockType.REPORTER,text:"index of [SUBSTRING] in [STRING]",arguments:{SUBSTRING:{type:e.ArgumentType.STRING,defaultValue:"p"},STRING:{type:e.ArgumentType.STRING,defaultValue:"apple"}}},{opcode:"textplusreplace",blockType:e.BlockType.REPORTER,text:"replace [SUBSTRING] in [STRING] with [REPLACE]",arguments:{SUBSTRING:{type:e.ArgumentType.STRING,defaultValue:"world"},STRING:{type:e.ArgumentType.STRING,defaultValue:"Hello world!"},REPLACE:{type:e.ArgumentType.STRING,defaultValue:"fellow Scratchers"}}},{opcode:"textplusrepeat",blockType:e.BlockType.REPORTER,text:"repeat [STRING] [REPEAT] times",arguments:{STRING:{type:e.ArgumentType.STRING,defaultValue:"apple "},REPEAT:{type:e.ArgumentType.NUMBER,defaultValue:"3"}}},{opcode:"textplusunicodeof",blockType:e.BlockType.REPORTER,text:"unicode of [STRING]",arguments:{STRING:{type:e.ArgumentType.STRING,defaultValue:"A"}}},{opcode:"textplusunicodefrom",blockType:e.BlockType.REPORTER,text:"unicode [NUM] as letter",arguments:{NUM:{type:e.ArgumentType.NUMBER,defaultValue:"65"}}},{opcode:"textplusreplaceRegex",blockType:e.BlockType.REPORTER,text:"replace regex /[REGEX]/[FLAGS] in [STRING] with [REPLACE]",arguments:{REGEX:{type:e.ArgumentType.STRING,defaultValue:"."},FLAGS:{type:e.ArgumentType.STRING,defaultValue:"g"},STRING:{type:e.ArgumentType.STRING,defaultValue:"Hello world!"},REPLACE:{type:e.ArgumentType.STRING,defaultValue:"$&$&"}}},{opcode:"textplusmatchRegex",blockType:e.BlockType.REPORTER,text:"item [ITEM] of [STRING] matched by regex /[REGEX]/[FLAGS]",arguments:{ITEM:{type:e.ArgumentType.NUMBER,defaultValue:1},STRING:{type:e.ArgumentType.STRING,defaultValue:"Hello world!"},REGEX:{type:e.ArgumentType.STRING,defaultValue:"(.) (.{2})"},FLAGS:{type:e.ArgumentType.STRING,defaultValue:"g"}}},{opcode:"textpluscountRegex",blockType:e.BlockType.REPORTER,text:"count regex /[REGEX]/[FLAGS] in [STRING]",arguments:{STRING:{type:e.ArgumentType.STRING,defaultValue:"Hello world!"},REGEX:{type:e.ArgumentType.STRING,defaultValue:"[AEIOU]"},FLAGS:{type:e.ArgumentType.STRING,defaultValue:"i"}}},{opcode:"textplustestRegex",blockType:e.BlockType.BOOLEAN,text:"[STRING] matches regex /[REGEX]/[FLAGS]?",arguments:{STRING:{type:e.ArgumentType.STRING,defaultValue:"Hello world!"},REGEX:{type:e.ArgumentType.STRING,defaultValue:"hello"},FLAGS:{type:e.ArgumentType.STRING,defaultValue:"i"}}},{opcode:"textplusidentical",blockType:e.BlockType.BOOLEAN,text:"is [OPERAND1] identical to [OPERAND2]?",arguments:{OPERAND1:{type:e.ArgumentType.STRING,defaultValue:"A"},OPERAND2:{type:e.ArgumentType.STRING,defaultValue:"a"}}},{opcode:"textplusisCase",blockType:e.BlockType.BOOLEAN,text:"is [STRING] [TEXTCASE]?",arguments:{STRING:{type:e.ArgumentType.STRING,defaultValue:"apple"},TEXTCASE:{type:e.ArgumentType.STRING,menu:"textCase",defaultValue:l.TurboCharged.extensionData.textPlus.CaseParam.LOWERCASE}}},{opcode:"textplustoCase",blockType:e.BlockType.REPORTER,text:"convert [STRING] to [TEXTCASE]",arguments:{STRING:{type:e.ArgumentType.STRING,defaultValue:"apple"},TEXTCASE:{type:e.ArgumentType.STRING,menu:"textCase",defaultValue:l.TurboCharged.extensionData.textPlus.CaseParam.UPPERCASE}}},{opcode:"casttoType",blockType:e.BlockType.REPORTER,text:"cast [INPUT] to [TYPE]",allowDropAnywhere:!0,disableMonitor:!0,arguments:{INPUT:{type:e.ArgumentType.STRING,defaultValue:"apple"},TYPE:{type:e.ArgumentType.STRING,menu:"castType"}}},{opcode:"casttypeOf",blockType:e.BlockType.REPORTER,text:"type of [INPUT]",disableMonitor:!0,arguments:{INPUT:{type:e.ArgumentType.STRING,defaultValue:"apple"}}},{opcode:"tweenValue",text:"[MODE] ease [DIRECTION] [START] to [END] by [AMOUNT]%",disableMonitor:!0,blockType:e.BlockType.REPORTER,arguments:{MODE:{type:e.ArgumentType.STRING,menu:"tweenmodes"},DIRECTION:{type:e.ArgumentType.STRING,menu:"tweendirection"},START:{type:e.ArgumentType.NUMBER,defaultValue:0},END:{type:e.ArgumentType.NUMBER,defaultValue:100},AMOUNT:{type:e.ArgumentType.NUMBER,defaultValue:50}}}],menus:{percentMode:{acceptReporters:!0,items:[{text:"increased",value:"increased"},{text:"decreased",value:"decreased"}]},textCase:{acceptReporters:!0,items:[{text:"lowercase",value:l.TurboCharged.extensionData.textPlus.CaseParam.LOWERCASE},{text:"UPPERCASE",value:l.TurboCharged.extensionData.textPlus.CaseParam.UPPERCASE},{text:"Title Case",value:l.TurboCharged.extensionData.textPlus.CaseParam.TITLECASE},{text:"Exactly Title Case",value:l.TurboCharged.extensionData.textPlus.CaseParam.EXACTTITLECASE},{text:"MiXeD CaSe",value:l.TurboCharged.extensionData.textPlus.CaseParam.MIXEDCASE}]},castType:{acceptReporters:!0,items:["number","string","boolean","default"]},tweenmodes:{acceptReporters:!0,items:["linear","sine","quad","cubic","quart","quint","expo","circ","back","elastic","bounce"]},tweendirection:{acceptReporters:!0,items:["in","out","in out"]}}}}clamp(t,a){let o=t.NUM,l=t.MIN,r=t.MAX;return l>r?e.Cast.toNumber(Math.min(Math.max(o,r),l)):e.Cast.toNumber(Math.min(Math.max(o,l),r))}ifthenelse_reporter({CONDITION:e,TEXT1:t,TEXT2:a},o){return e?t:a}egg({TEXT:e},t){return alert(`${e} is\xf0Ÿ\xa5š`),"\xf0Ÿ\xa5š"}gtEqual(e,t){return e.OPERAND1<=e.OPERAND2}ltEqual(e,t){return e.OPERAND1>=e.OPERAND2}nor(e,t){return!(e.OPERAND1||e.OPERAND2)}xor(e,t){return e.OPERAND1!=e.OPERAND1}substring(e,t){let a=e.START,o=e.END,l=e.STRING;return l.slice(Math.max(1,a)-1,Math.min(l.length,o))}replace(e,t){let a=e.INPUT1,o=e.INPUT2,l=e.STRING;return l.toString().replace(RegExp(a,"gi"),o)}true_block(){return!0}false_block(){return!1}bool_coupler({TEXT:t}){return e.Cast.toBoolean(t)}test(){alert(1)}percentof(t){return e.Cast.toNumber(t.AMOUNT)*e.Cast.toNumber(t.PERCENT)/100}percentis(t){return 100*e.Cast.toNumber(t.AMOUNT)/e.Cast.toNumber(t.PERCENT)}percentin(t){return 100*e.Cast.toNumber(t.AMOUNT)/e.Cast.toNumber(t.PERCENT)}percentUD(t){t.AMOUNT=e.Cast.toNumber(t.AMOUNT),t.PERCENT=e.Cast.toNumber(t.PERCENT);var a=t.AMOUNT,o=t.PERCENT;switch(t.MODE){case"increased":default:return a*((100+o)/100);case"decreased":return a*((100-o)/100)}}presadd(t){var a=e.Cast.toString(t.A),o=e.Cast.toString(t.B);let l=!1,r=!1;"-"===a[0]&&(l=!0,a=a.slice(1)),"-"===o[0]&&(r=!0,o=o.slice(1));let[n,s]=a.split("."),[u,i]=o.split(".");s||(s="0"),i||(i="0");let d=Math.max(s.length,i.length);s=s.padEnd(d,"0"),i=i.padEnd(d,"0");let T=(l?"-":"")+n+s,p=(r?"-":"")+u+i,c=BigInt(T)+BigInt(p),m=c.toString();return("."==(m=m.slice(0,-d)+"."+m.slice(-d))[0]&&(m="0"+m),/^[-0.0]*$/.test(m))?"0":m}pressubtract(t){var a=e.Cast.toString(t.A),o=e.Cast.toString(t.B);let l=!1,r=!1;"-"===a[0]&&(l=!0,a=a.slice(1)),"-"===o[0]&&(r=!0,o=o.slice(1));let[n,s]=a.split("."),[u,i]=o.split(".");s||(s="0"),i||(i="0");let d=Math.max(s.length,i.length);s=s.padEnd(d,"0"),i=i.padEnd(d,"0");let T=(l?"-":"")+n+s,p=(r?"-":"")+u+i,c=BigInt(T)-BigInt(p),m=c.toString();return("."==(m=m.slice(0,-d)+"."+m.slice(-d))[0]&&(m="0"+m),/^[-0.0]*$/.test(m))?"0":m}presmultiply(t){var a=e.Cast.toString(t.A),o=e.Cast.toString(t.B);let l=!1,r=!1;"-"===a[0]&&(l=!0,a=a.slice(1)),"-"===o[0]&&(r=!0,o=o.slice(1));let[n,s]=a.split("."),[u,i]=o.split(".");s||(s="0"),i||(i="0");let d=s.length+i.length;n=n.replace(/^0+/,""),u=u.replace(/^0+/,"");let T=BigInt(n)*BigInt(u),p=BigInt(s)*BigInt(i);p=p.toString().padStart(d,"0");let c=(l!==r?"-":"")+T.toString();return(d>0&&(c+="."+p),/^[-0.0]*$/.test(c))?"0":c}presdivided(t){var a=e.Cast.toString(t.A),o=e.Cast.toString(t.B),l=e.Cast.toNumber(t.PRE);let r=parseFloat(a),n=parseFloat(o);if(0===n)return"divisor can't is zero";let s=(r/n).toFixed(l).toString();var u="."+"0".repeat(l);return(s=s.replace(/(\.[0-9]*[1-9])0+$/,"$1")).endsWith(u)?s.split(u)[0]:s}textplusidentical(e,t){return e.OPERAND1===e.OPERAND2}textplusunicodeof(e,t){let a=Array.from(e.STRING.toString());return a.map(e=>e.charCodeAt(0)).join(" ")}textplusunicodefrom(e,t){return String.fromCharCode(Number(e.NUM)||0)}textplusletters_of(e,t){return e.STRING=e.STRING.toString(),e.LETTER1=Number(e.LETTER1)||0,e.LETTER2=Number(e.LETTER2)||0,e.STRING.substring(e.LETTER1-1,e.LETTER2)}_caseInsensitiveRegex(e){return RegExp(e.replaceAll(/[^a-zA-Z0-9]/g,"\\$&"),"gi")}textplussplit(e,t){if(e.STRING=(e.STRING??"").toString(),e.SPLIT=(e.SPLIT??"").toString(),e.ITEM=Number(e.ITEM)||0,!(l.TurboCharged.extensionData.textPlus.splitCache&&l.TurboCharged.extensionData.textPlus.splitCache.string===e.STRING&&l.TurboCharged.extensionData.textPlus.splitCache.split===e.SPLIT)){let a=this._caseInsensitiveRegex(e.SPLIT);l.TurboCharged.extensionData.textPlus.splitCache={string:e.STRING,split:e.SPLIT,arr:e.STRING.split(a)}}return l.TurboCharged.extensionData.textPlus.splitCache.arr[e.ITEM-1]||""}textpluscount(e,t){return this.split({SPLIT:e.SUBSTRING,STRING:e.STRING,ITEM:0},t),l.TurboCharged.extensionData.textPlus.splitCache.arr.length-1||0}textplusreplace(e,t){e.STRING=e.STRING.toString(),e.SUBSTRING=e.SUBSTRING.toString(),e.REPLACE=e.REPLACE.toString();let a=this._caseInsensitiveRegex(e.SUBSTRING);return e.STRING.replace(a,e.REPLACE)}textplusindexof(e,t){e.STRING=(e.STRING??"").toString().toLowerCase(),e.SUBSTRING=(e.SUBSTRING??"").toString().toLowerCase();let a=e.STRING.indexOf(e.SUBSTRING);return a+1}textplusrepeat(e,t){return e.STRING=e.STRING.toString(),e.REPEAT=Number(e.REPEAT)||0,e.STRING.repeat(e.REPEAT)}textplusreplaceRegex(e,t){try{return e.STRING=e.STRING.toString(),e.REPLACE=e.REPLACE.toString(),e.REGEX=e.REGEX.toString(),e.FLAGS=e.FLAGS.toString(),e.STRING.replace(RegExp(e.REGEX,e.FLAGS),e.REPLACE)}catch(a){return console.error(a),""}}textplusmatchRegex(e,t){try{if(e.STRING=(e.STRING??"").toString(),e.REGEX=(e.REGEX??"").toString(),e.FLAGS=(e.FLAGS??"").toString(),e.ITEM=Number(e.ITEM)||0,!(l.TurboCharged.extensionData.textPlus.matchCache&&l.TurboCharged.extensionData.textPlus.matchCache.string===e.STRING&&l.TurboCharged.extensionData.textPlus.matchCache.regex===e.REGEX&&l.TurboCharged.extensionData.textPlus.matchCache.flags===e.FLAGS)){let a=e.FLAGS.includes("g")?e.FLAGS:e.FLAGS+"g",o=RegExp(e.REGEX,a);l.TurboCharged.extensionData.textPlus.matchCache={string:e.STRING,regex:e.REGEX,flags:e.FLAGS,arr:e.STRING.match(o)||[]}}return l.TurboCharged.extensionData.textPlus.matchCache.arr[e.ITEM-1]||""}catch(r){return console.error(r),""}}textpluscountRegex(e,t){return this.matchRegex(e,t),l.TurboCharged.extensionData.textPlus.matchCache.arr.length||0}textplustestRegex(e,t){try{return e.STRING=e.STRING.toString(),e.REGEX=e.REGEX.toString(),e.FLAGS=e.FLAGS.toString(),RegExp(e.REGEX,e.FLAGS).test(e.STRING)}catch(a){return console.error(a),!1}}textplusisCase(e,t){let a=e.STRING.toString(),o=e.TEXTCASE.toString();switch(o){case l.TurboCharged.extensionData.textPlus.CaseParam.LOWERCASE:return a.toLowerCase()===a;case l.TurboCharged.extensionData.textPlus.CaseParam.UPPERCASE:return a.toUpperCase()===a;case l.TurboCharged.extensionData.textPlus.CaseParam.MIXEDCASE:return!(a.toUpperCase()===a||a.toLowerCase()===a);case l.TurboCharged.extensionData.textPlus.CaseParam.TITLECASE:return a.split(/\b/g).every(e=>{if(!e)return!0;let t=e[0].toUpperCase()+e.substring(1);return e===t});case l.TurboCharged.extensionData.textPlus.CaseParam.EXACTTITLECASE:return a.split(/\b/g).every(e=>{if(!e)return!0;let t=e[0].toUpperCase()+e.substring(1).toLowerCase();return e===t});default:return!1}}textplustoCase(e,t){let a=e.STRING.toString(),o=e.TEXTCASE.toString();switch(o){case l.TurboCharged.extensionData.textPlus.CaseParam.LOWERCASE:return a.toLowerCase();case l.TurboCharged.extensionData.textPlus.CaseParam.UPPERCASE:return a.toUpperCase();case l.TurboCharged.extensionData.textPlus.CaseParam.MIXEDCASE:return Array.from(a).map((e,t)=>t%2==0?e.toUpperCase():e.toLowerCase()).join("");case l.TurboCharged.extensionData.textPlus.CaseParam.TITLECASE:return a.split(/\b/g).map(e=>e?e[0].toUpperCase()+e.substring(1):"").join("");case l.TurboCharged.extensionData.textPlus.CaseParam.EXACTTITLECASE:return a.split(/\b/g).map(e=>e?e[0].toUpperCase()+e.substring(1).toLowerCase():"").join("");default:return a}}casttoType(t){let a=t.INPUT;switch(t.TYPE){case"number":return e.Cast.toNumber(a);case"string":return e.Cast.toString(a);case"boolean":return e.Cast.toBoolean(a);default:return a}}casttypeOf(e){let t=e.INPUT;switch(typeof t){case"number":return"number";case"string":return"string";case"boolean":return"boolean";default:return""}}multiplierToNormalNumber(e,t,a){return e*(a-t)+t}tweenValue(t){let a=e.Cast.toString(t.MODE),o=e.Cast.toString(t.DIRECTION),l=e.Cast.toNumber(t.START),r=e.Cast.toNumber(t.END);if(!["linear","sine","quad","cubic","quart","quint","expo","circ","back","elastic","bounce"].includes(a)||!this[a])return l;let n=e.Cast.toNumber(t.AMOUNT)/100,s=this[a](n,o);return this.multiplierToNormalNumber(s,l,r)}linear(e){return e}sine(e,t){switch(t){case"in":return 1-Math.cos(e*Math.PI/2);case"out":return Math.sin(e*Math.PI/2);case"in out":return-(Math.cos(Math.PI*e)-1)/2;default:return 0}}quad(e,t){switch(t){case"in":return e*e;case"out":return 1-(1-e)*(1-e);case"in out":return e<.5?2*e*e:1-Math.pow(-2*e+2,2)/2;default:return 0}}cubic(e,t){switch(t){case"in":return e*e*e;case"out":return 1-Math.pow(1-e,3);case"in out":return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;default:return 0}}quart(e,t){switch(t){case"in":return e*e*e*e;case"out":return 1-Math.pow(1-e,4);case"in out":return e<.5?8*e*e*e*e:1-Math.pow(-2*e+2,4)/2;default:return 0}}quint(e,t){switch(t){case"in":return e*e*e*e*e;case"out":return 1-Math.pow(1-e,5);case"in out":return e<.5?16*e*e*e*e*e:1-Math.pow(-2*e+2,5)/2;default:return 0}}expo(e,t){switch(t){case"in":return 0===e?0:Math.pow(2,10*e-10);case"out":return 1===e?1:1-Math.pow(2,-10*e);case"in out":return 0===e?0:1===e?1:e<.5?Math.pow(2,20*e-10)/2:(2-Math.pow(2,-20*e+10))/2;default:return 0}}circ(e,t){switch(t){case"in":return 1-Math.sqrt(1-Math.pow(e,2));case"out":return Math.sqrt(1-Math.pow(e-1,2));case"in out":return e<.5?(1-Math.sqrt(1-Math.pow(2*e,2)))/2:(Math.sqrt(1-Math.pow(-2*e+2,2))+1)/2;default:return 0}}back(e,t){switch(t){case"in":return 2.70158*e*e*e-1.70158*e*e;case"out":return 1+2.70158*Math.pow(e-1,3)+1.70158*Math.pow(e-1,2);case"in out":return e<.5?Math.pow(2*e,2)*(7.189819*e-2.5949095)/2:(Math.pow(2*e-2,2)*(3.5949095*(2*e-2)+2.5949095)+2)/2;default:return 0}}elastic(e,t){switch(t){case"in":return 0===e?0:1===e?1:-Math.pow(2,10*e-10)*Math.sin((10*e-10.75)*(2*Math.PI/3));case"out":return 0===e?0:1===e?1:Math.pow(2,-10*e)*Math.sin((10*e-.75)*(2*Math.PI/3))+1;case"in out":{let a=2*Math.PI/4.5;return 0===e?0:1===e?1:e<.5?-(Math.pow(2,20*e-10)*Math.sin((20*e-11.125)*a))/2:Math.pow(2,-20*e+10)*Math.sin((20*e-11.125)*a)/2+1}default:return 0}}bounce(e,t){switch(t){case"in":return 1-this.bounce(1-e,"out");case"out":if(e<.36363636363636365)return 7.5625*e*e;if(e<.7272727272727273)return 7.5625*(e-=.5454545454545454)*e+.75;if(e<.9090909090909091)return 7.5625*(e-=.8181818181818182)*e+.9375;else return 7.5625*(e-=.9545454545454546)*e+.984375;case"in out":return e<.5?(1-this.bounce(1-2*e,"out"))/2:(1+this.bounce(2*e-1,"out"))/2;default:return 0}}})}(Scratch);