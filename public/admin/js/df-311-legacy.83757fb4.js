(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-311","df-1"],{af039:function(e,n,a){"use strict";function o(e){return function(n,a){var o,t=a||{},r=t.context?String(t.context):"standalone";if("formatting"===r&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,d=t.width?String(t.width):i;o=e.formattingValues[d]||e.formattingValues[i]}else{var u=e.defaultWidth,l=t.width?String(t.width):e.defaultWidth;o=e.values[l]||e.values[u]}var p=e.argumentCallback?e.argumentCallback(n):n;return o[p]}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=o,e.exports=n.default},e7c1:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t(a("af039"));function t(e){return e&&e.__esModule?e:{default:e}}var r={narrow:["pred Kr.","po Kr."],abbreviated:["pred Kr.","po Kr."],wide:["pred Kristom","po Kristovi"]},i={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. štvrťrok","2. štvrťrok","3. štvrťrok","4. štvrťrok"]},d={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],wide:["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december"]},u={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","feb","mar","apr","máj","jún","júl","aug","sep","okt","nov","dec"],wide:["januára","februára","marca","apríla","mája","júna","júla","augusta","septembra","októbra","novembra","decembra"]},l={narrow:["n","p","u","s","š","p","s"],short:["ne","po","ut","st","št","pi","so"],abbreviated:["ne","po","ut","st","št","pi","so"],wide:["nedeľa","pondelok","utorok","streda","štvrtok","piatok","sobota"]},p={narrow:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"ráno",afternoon:"pop.",evening:"več.",night:"noc"},abbreviated:{am:"AM",pm:"PM",midnight:"poln.",noon:"pol.",morning:"ráno",afternoon:"popol.",evening:"večer",night:"noc"},wide:{am:"AM",pm:"PM",midnight:"polnoc",noon:"poludnie",morning:"ráno",afternoon:"popoludnie",evening:"večer",night:"noc"}},m={narrow:{am:"AM",pm:"PM",midnight:"o poln.",noon:"nap.",morning:"ráno",afternoon:"pop.",evening:"več.",night:"v n."},abbreviated:{am:"AM",pm:"PM",midnight:"o poln.",noon:"napol.",morning:"ráno",afternoon:"popol.",evening:"večer",night:"v noci"},wide:{am:"AM",pm:"PM",midnight:"o polnoci",noon:"napoludnie",morning:"ráno",afternoon:"popoludní",evening:"večer",night:"v noci"}};function f(e,n){var a=Number(e);return a+"."}var v={ordinalNumber:f,era:(0,o.default)({values:r}),quarter:(0,o.default)({values:i,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,o.default)({values:d,defaultWidth:"wide",formattingValues:u,defaultFormattingWidth:"wide"}),day:(0,o.default)({values:l,defaultWidth:"wide"}),dayPeriod:(0,o.default)({values:p,defaultWidth:"wide",formattingValues:m,defaultFormattingWidth:"wide"})},s=v;n.default=s,e.exports=n.default}}]);
//# sourceMappingURL=df-311-legacy.83757fb4.js.map