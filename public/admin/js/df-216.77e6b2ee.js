(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-216","df-2","df-3"],{9686:function(t,a,e){"use strict";function i(t){return function(a,e){var i=String(a),r=e||{},n=i.match(t.matchPattern);if(!n)return null;var u=n[0],l=i.match(t.parsePattern);if(!l)return null;var d=t.valueCallback?t.valueCallback(l[0]):l[0];return d=r.valueCallback?r.valueCallback(d):d,{value:d,rest:i.slice(u.length)}}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=i,t.exports=a.default},b028:function(t,a,e){"use strict";function i(t){return function(a,e){var i=String(a),u=e||{},l=u.width,d=l&&t.matchPatterns[l]||t.matchPatterns[t.defaultMatchWidth],s=i.match(d);if(!s)return null;var c,f=s[0],o=l&&t.parsePatterns[l]||t.parsePatterns[t.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(o)?n(o,(function(t){return t.test(f)})):r(o,(function(t){return t.test(f)})),c=t.valueCallback?t.valueCallback(c):c,c=u.valueCallback?u.valueCallback(c):c,{value:c,rest:i.slice(f.length)}}}function r(t,a){for(var e in t)if(t.hasOwnProperty(e)&&a(t[e]))return e}function n(t,a){for(var e=0;e<t.length;e++)if(a(t[e]))return e}Object.defineProperty(a,"__esModule",{value:!0}),a.default=i,t.exports=a.default},ee72:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("9686")),r=n(e("b028"));function n(t){return t&&t.__esModule?t:{default:t}}var u=/^(\d+)(-?(ші|шы))?/i,l=/\d+/i,d={narrow:/^((б )?з\.?\s?д\.?)/i,abbreviated:/^((б )?з\.?\s?д\.?)/i,wide:/^(біздің заманымызға дейін|біздің заманымыз|біздің заманымыздан)/i},s={any:[/^б/i,/^з/i]},c={narrow:/^[1234]/i,abbreviated:/^[1234](-?ші)? тоқ.?/i,wide:/^[1234](-?ші)? тоқсан/i},f={any:[/1/i,/2/i,/3/i,/4/i]},o={narrow:/^(қ|а|н|с|м|мау|ш|т|қыр|қаз|қар|ж)/i,abbreviated:/^(қаң|ақп|нау|сәу|мам|мау|шіл|там|қыр|қаз|қар|жел)/i,wide:/^(қаңтар|ақпан|наурыз|сәуір|мамыр|маусым|шілде|тамыз|қыркүйек|қазан|қараша|желтоқсан)/i},h={narrow:[/^қ/i,/^а/i,/^н/i,/^с/i,/^м/i,/^м/i,/^ш/i,/^т/i,/^қ/i,/^қ/i,/^қ/i,/^ж/i],abbreviated:[/^қаң/i,/^ақп/i,/^нау/i,/^сәу/i,/^мам/i,/^мау/i,/^шіл/i,/^там/i,/^қыр/i,/^қаз/i,/^қар/i,/^жел/i],any:[/^қ/i,/^а/i,/^н/i,/^с/i,/^м/i,/^м/i,/^ш/i,/^т/i,/^қ/i,/^қ/i,/^қ/i,/^ж/i]},v={narrow:/^(ж|д|с|с|б|ж|с)/i,short:/^(жс|дс|сс|ср|бс|жм|сб)/i,wide:/^(жексенбі|дүйсенбі|сейсенбі|сәрсенбі|бейсенбі|жұма|сенбі)/i},P={narrow:[/^ж/i,/^д/i,/^с/i,/^с/i,/^б/i,/^ж/i,/^с/i],short:[/^жс/i,/^дс/i,/^сс/i,/^ср/i,/^бс/i,/^жм/i,/^сб/i],any:[/^ж[ек]/i,/^д[үй]/i,/^сe[й]/i,/^сә[р]/i,/^б[ей]/i,/^ж[ұм]/i,/^се[н]/i]},b={narrow:/^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i,wide:/^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i,any:/^Т\.?\s?[ДК]\.?|түн ортасында|((түсте|таңертең|таңда|таңертең|таңмен|таң|күндіз|күн|кеште|кеш|түнде|түн)\.?)/i},p={any:{am:/^ТД/i,pm:/^ТК/i,midnight:/^түн орта/i,noon:/^күндіз/i,morning:/таң/i,afternoon:/түс/i,evening:/кеш/i,night:/түн/i}},w={ordinalNumber:(0,i.default)({matchPattern:u,parsePattern:l,valueCallback:function(t){return parseInt(t,10)}}),era:(0,r.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:f,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:(0,r.default)({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:v,defaultMatchWidth:"wide",parsePatterns:P,defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:b,defaultMatchWidth:"wide",parsePatterns:p,defaultParseWidth:"any"})},y=w;a.default=y,t.exports=a.default}}]);
//# sourceMappingURL=df-216.77e6b2ee.js.map