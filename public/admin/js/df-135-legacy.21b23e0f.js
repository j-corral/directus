(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-135","df-1"],{"5d00":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(i("af039"));function r(e){return e&&e.__esModule?e:{default:e}}var n={narrow:["av. J.-C","ap. J.-C"],abbreviated:["av. J.-C","ap. J.-C"],wide:["avant Jésus-Christ","après Jésus-Christ"]},d={narrow:["T1","T2","T3","T4"],abbreviated:["1er trim.","2ème trim.","3ème trim.","4ème trim."],wide:["1er trimestre","2ème trimestre","3ème trimestre","4ème trimestre"]},u={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."],wide:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},m={narrow:["D","L","M","M","J","V","S"],short:["di","lu","ma","me","je","ve","sa"],abbreviated:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],wide:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},o={narrow:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"soir",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"matin",afternoon:"après-midi",evening:"soir",night:"matin"},wide:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"du matin",afternoon:"de l’après-midi",evening:"du soir",night:"du matin"}};function l(e,t){var i,a=Number(e),r=t||{},n=String(r.unit);return 0===a?a:(i="year"===n||"hour"===n||"week"===n?1===a?"ère":"ème":1===a?"er":"ème",a+i)}var s={ordinalNumber:l,era:(0,a.default)({values:n,defaultWidth:"wide"}),quarter:(0,a.default)({values:d,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,a.default)({values:u,defaultWidth:"wide"}),day:(0,a.default)({values:m,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:o,defaultWidth:"wide"})},f=s;t.default=f,e.exports=t.default},af039:function(e,t,i){"use strict";function a(e){return function(t,i){var a,r=i||{},n=r.context?String(r.context):"standalone";if("formatting"===n&&e.formattingValues){var d=e.defaultFormattingWidth||e.defaultWidth,u=r.width?String(r.width):d;a=e.formattingValues[u]||e.formattingValues[d]}else{var m=e.defaultWidth,o=r.width?String(r.width):e.defaultWidth;a=e.values[o]||e.values[m]}var l=e.argumentCallback?e.argumentCallback(t):t;return a[l]}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a,e.exports=t.default}}]);
//# sourceMappingURL=df-135-legacy.21b23e0f.js.map