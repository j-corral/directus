(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-191","df-1"],{6023:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("af039"));function r(e){return e&&e.__esModule?e:{default:e}}var a={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["fyrir Krist","eftir Krist"]},d={narrow:["1","2","3","4"],abbreviated:["1F","2F","3F","4F"],wide:["1. fjórðungur","2. fjórðungur","3. fjórðungur","4. fjórðungur"]},u={narrow:["J","F","M","A","M","J","J","Á","S","Ó","N","D"],abbreviated:["jan.","feb.","mars","apríl","maí","júní","júlí","ágúst","sept.","okt.","nóv.","des."],wide:["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember"]},o={narrow:["S","M","Þ","M","F","F","L"],short:["Su","Má","Þr","Mi","Fi","Fö","La"],abbreviated:["sun.","mán.","þri.","mið.","fim.","fös.","lau"],wide:["sunnudagur","mánudagur","þriðjudagur","miðvikudagur","fimmtudagur","föstudagur","laugardagur"]},g={narrow:{am:"f",pm:"e",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"},abbreviated:{am:"f.h.",pm:"e.h.",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"},wide:{am:"fyrir hádegi",pm:"eftir hádegi",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"}},m={narrow:{am:"f",pm:"e",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"},abbreviated:{am:"f.h.",pm:"e.h.",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"},wide:{am:"fyrir hádegi",pm:"eftir hádegi",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"}};function f(e,n){var t=Number(e);return t+"."}var l={ordinalNumber:f,era:(0,i.default)({values:a,defaultWidth:"wide"}),quarter:(0,i.default)({values:d,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,i.default)({values:u,defaultWidth:"wide"}),day:(0,i.default)({values:o,defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:g,defaultWidth:"wide",formattingValues:m,defaultFormattingWidth:"wide"})},s=l;n.default=s,e.exports=n.default},af039:function(e,n,t){"use strict";function i(e){return function(n,t){var i,r=t||{},a=r.context?String(r.context):"standalone";if("formatting"===a&&e.formattingValues){var d=e.defaultFormattingWidth||e.defaultWidth,u=r.width?String(r.width):d;i=e.formattingValues[u]||e.formattingValues[d]}else{var o=e.defaultWidth,g=r.width?String(r.width):e.defaultWidth;i=e.values[g]||e.values[o]}var m=e.argumentCallback?e.argumentCallback(n):n;return i[m]}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=i,e.exports=n.default}}]);
//# sourceMappingURL=df-191-legacy.f1f38639.js.map