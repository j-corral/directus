(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-389","df-1"],{af039:function(t,e,n){"use strict";function a(t){return function(e,n){var a,i=n||{},r=i.context?String(i.context):"standalone";if("formatting"===r&&t.formattingValues){var d=t.defaultFormattingWidth||t.defaultWidth,o=i.width?String(i.width):d;a=t.formattingValues[o]||t.formattingValues[d]}else{var u=t.defaultWidth,f=i.width?String(i.width):t.defaultWidth;a=t.values[f]||t.values[u]}var l=t.argumentCallback?t.argumentCallback(e):e;return a[l]}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a,t.exports=e.default},bcfb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("af039"));function i(t){return t&&t.__esModule?t:{default:t}}var r={narrow:["前","公元"],abbreviated:["前","公元"],wide:["公元前","公元"]},d={narrow:["1","2","3","4"],abbreviated:["第一刻","第二刻","第三刻","第四刻"],wide:["第一刻钟","第二刻钟","第三刻钟","第四刻钟"]},o={narrow:["一","二","三","四","五","六","七","八","九","十","十一","十二"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},u={narrow:["日","一","二","三","四","五","六"],short:["日","一","二","三","四","五","六"],abbreviated:["周日","周一","周二","周三","周四","周五","周六"],wide:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},f={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"}},l={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"}};function g(t,e){var n=Number(t),a=e||{},i=String(a.unit);switch(i){case"date":return n.toString()+"日";case"hour":return n.toString()+"时";case"minute":return n.toString()+"分";case"second":return n.toString()+"秒";default:return"第 "+n.toString()}}var m={ordinalNumber:g,era:(0,a.default)({values:r,defaultWidth:"wide"}),quarter:(0,a.default)({values:d,defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:(0,a.default)({values:o,defaultWidth:"wide"}),day:(0,a.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:f,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"})},s=m;e.default=s,t.exports=e.default}}]);
//# sourceMappingURL=df-389-legacy.3a34faab.js.map