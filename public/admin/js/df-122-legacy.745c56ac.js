(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["df-122","df-1"],{"1b99":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t("af039"));function i(e){return e&&e.__esModule?e:{default:e}}var r={narrow:["ق","ب"],abbreviated:["ق.م.","ب.م."],wide:["قبل از میلاد","بعد از میلاد"]},d={narrow:["1","2","3","4"],abbreviated:["س‌م1","س‌م2","س‌م3","س‌م4"],wide:["سه‌ماهه 1","سه‌ماهه 2","سه‌ماهه 3","سه‌ماهه 4"]},o={narrow:["ژ","ف","م","آ","م","ج","ج","آ","س","ا","ن","د"],abbreviated:["ژانـ","فور","مارس","آپر","می","جون","جولـ","آگو","سپتـ","اکتـ","نوامـ","دسامـ"],wide:["ژانویه","فوریه","مارس","آپریل","می","جون","جولای","آگوست","سپتامبر","اکتبر","نوامبر","دسامبر"]},u={narrow:["ی","د","س","چ","پ","ج","ش"],short:["1ش","2ش","3ش","4ش","5ش","ج","ش"],abbreviated:["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],wide:["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"]},f={narrow:{am:"ق",pm:"ب",midnight:"ن",noon:"ظ",morning:"ص",afternoon:"ب.ظ.",evening:"ع",night:"ش"},abbreviated:{am:"ق.ظ.",pm:"ب.ظ.",midnight:"نیمه‌شب",noon:"ظهر",morning:"صبح",afternoon:"بعدازظهر",evening:"عصر",night:"شب"},wide:{am:"قبل‌ازظهر",pm:"بعدازظهر",midnight:"نیمه‌شب",noon:"ظهر",morning:"صبح",afternoon:"بعدازظهر",evening:"عصر",night:"شب"}},l={narrow:{am:"ق",pm:"ب",midnight:"ن",noon:"ظ",morning:"ص",afternoon:"ب.ظ.",evening:"ع",night:"ش"},abbreviated:{am:"ق.ظ.",pm:"ب.ظ.",midnight:"نیمه‌شب",noon:"ظهر",morning:"صبح",afternoon:"بعدازظهر",evening:"عصر",night:"شب"},wide:{am:"قبل‌ازظهر",pm:"بعدازظهر",midnight:"نیمه‌شب",noon:"ظهر",morning:"صبح",afternoon:"بعدازظهر",evening:"عصر",night:"شب"}};function g(e){return String(e)}var m={ordinalNumber:g,era:(0,a.default)({values:r,defaultWidth:"wide"}),quarter:(0,a.default)({values:d,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,a.default)({values:o,defaultWidth:"wide"}),day:(0,a.default)({values:u,defaultWidth:"wide"}),dayPeriod:(0,a.default)({values:f,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"})},h=m;n.default=h,e.exports=n.default},af039:function(e,n,t){"use strict";function a(e){return function(n,t){var a,i=t||{},r=i.context?String(i.context):"standalone";if("formatting"===r&&e.formattingValues){var d=e.defaultFormattingWidth||e.defaultWidth,o=i.width?String(i.width):d;a=e.formattingValues[o]||e.formattingValues[d]}else{var u=e.defaultWidth,f=i.width?String(i.width):e.defaultWidth;a=e.values[f]||e.values[u]}var l=e.argumentCallback?e.argumentCallback(n):n;return a[l]}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=a,e.exports=n.default}}]);
//# sourceMappingURL=df-122-legacy.745c56ac.js.map