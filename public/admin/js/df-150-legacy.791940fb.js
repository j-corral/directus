(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-150","df-2","df-3"],{"7c733":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("9686")),r=n(e("b028"));function n(t){return t&&t.__esModule?t:{default:t}}var u=/^(\d+)(લ|જ|થ|ઠ્ઠ|મ)?/i,l=/\d+/i,d={narrow:/^(ઈસપૂ|ઈસ)/i,abbreviated:/^(ઈ\.સ\.પૂર્વે|ઈ\.સ\.)/i,wide:/^(ઈસવીસન\sપૂર્વે|ઈસવીસન)/i},c={any:[/^(ઈસપૂ|ઈસ)/i,/^(ઈ\.સ\.પૂર્વે|ઈ\.સ\.)/i,/^(ઈસવીસન\sપૂર્વે|ઈસવીસન)/i]},s={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](લો|જો|થો)? ત્રિમાસ/i},f={any:[/1/i,/2/i,/3/i,/4/i]},o={narrow:/^[જાફેમાએમેજૂજુઓસઓનડિ]/i,abbreviated:/^(જાન્યુ|ફેબ્રુ|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઈ|ઑગસ્ટ|સપ્ટે|ઓક્ટો|નવે|ડિસે)/i,wide:/^(જાન્યુઆરી|ફેબ્રુઆરી|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઇ|ઓગસ્ટ|સપ્ટેમ્બર|ઓક્ટોબર|નવેમ્બર|ડિસેમ્બર)/i},h={narrow:[/^જા/i,/^ફે/i,/^મા/i,/^એ/i,/^મે/i,/^જૂ/i,/^જુ/i,/^ઑગ/i,/^સ/i,/^ઓક્ટો/i,/^ન/i,/^ડિ/i],any:[/^જા/i,/^ફે/i,/^મા/i,/^એ/i,/^મે/i,/^જૂ/i,/^જુ/i,/^ઑગ/i,/^સ/i,/^ઓક્ટો/i,/^ન/i,/^ડિ/i]},v={narrow:/^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,short:/^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,abbreviated:/^(રવિ|સોમ|મંગળ|બુધ|ગુરુ|શુક્ર|શનિ)/i,wide:/^(રવિવાર|સોમવાર|મંગળવાર|બુધવાર|ગુરુવાર|શુક્રવાર|શનિવાર)/i},P={narrow:[/^ર/i,/^સો/i,/^મં/i,/^બુ/i,/^ગુ/i,/^શુ/i,/^શ/i],any:[/^ર/i,/^સો/i,/^મં/i,/^બુ/i,/^ગુ/i,/^શુ/i,/^શ/i]},b={narrow:/^(a|p|મ\.?|સ|બ|સાં|રા)/i,any:/^(a|p|મ\.?|સ|બ|સાં|રા)/i},p={any:{am:/^a/i,pm:/^p/i,midnight:/^મ\.?/i,noon:/^બ/i,morning:/સ/i,afternoon:/બ/i,evening:/સાં/i,night:/રા/i}},w={ordinalNumber:(0,i.default)({matchPattern:u,parsePattern:l,valueCallback:function(t){return parseInt(t,10)}}),era:(0,r.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,r.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:v,defaultMatchWidth:"wide",parsePatterns:P,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:b,defaultMatchWidth:"any",parsePatterns:p,defaultParseWidth:"any"})},y=w;a.default=y,t.exports=a.default},9686:function(t,a,e){"use strict";function i(t){return function(a,e){var i=String(a),r=e||{},n=i.match(t.matchPattern);if(!n)return null;var u=n[0],l=i.match(t.parsePattern);if(!l)return null;var d=t.valueCallback?t.valueCallback(l[0]):l[0];return d=r.valueCallback?r.valueCallback(d):d,{value:d,rest:i.slice(u.length)}}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=i,t.exports=a.default},b028:function(t,a,e){"use strict";function i(t){return function(a,e){var i=String(a),u=e||{},l=u.width,d=l&&t.matchPatterns[l]||t.matchPatterns[t.defaultMatchWidth],c=i.match(d);if(!c)return null;var s,f=c[0],o=l&&t.parsePatterns[l]||t.parsePatterns[t.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(o)?n(o,(function(t){return t.test(f)})):r(o,(function(t){return t.test(f)})),s=t.valueCallback?t.valueCallback(s):s,s=u.valueCallback?u.valueCallback(s):s,{value:s,rest:i.slice(f.length)}}}function r(t,a){for(var e in t)if(t.hasOwnProperty(e)&&a(t[e]))return e}function n(t,a){for(var e=0;e<t.length;e++)if(a(t[e]))return e}Object.defineProperty(a,"__esModule",{value:!0}),a.default=i,t.exports=a.default}}]);
//# sourceMappingURL=df-150-legacy.791940fb.js.map