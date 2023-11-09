// https://github.com/Patashu/break_infinity.js/tree/master 
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).Decimal=n()}(this,(function(){"use strict";var t=function(t,n,e){if(null==t||null==n)return t;var r=String(t),i="number"==typeof n?n:parseInt(n,10);if(isNaN(i)||!isFinite(i))return r;var o=r.length;if(o>=i)return r;var u=null==e?"":String(e);""===u&&(u=" ");for(var s=i-o;u.length<s;)u+=u;return r+(u.length>s?u.substr(0,s):u)},n=9e15,e=function(){for(var t=[],n=-323;n<=308;n++)t.push(Number("1e"+n));return function(n){return t[n+323]}}(),r=function(t){return t instanceof a?t:new a(t)},i=function(t,n){return(new a).fromMantissaExponent(t,n)},o=function(t,n){return(new a).fromMantissaExponent_noNormalize(t,n)};function u(t,n,e,r){var i=n.mul(e.pow(r));return a.floor(t.div(i).mul(e.sub(1)).add(1).log10()/e.log10())}function s(t,n,e,r){return n.mul(e.pow(r)).mul(a.sub(1,e.pow(t))).div(a.sub(1,e))}var a=function(){function a(t){this.mantissa=NaN,this.exponent=NaN,void 0===t?(this.m=0,this.e=0):t instanceof a?this.fromDecimal(t):"number"==typeof t?this.fromNumber(t):this.fromString(t)}return Object.defineProperty(a.prototype,"m",{get:function(){return this.mantissa},set:function(t){this.mantissa=t},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"e",{get:function(){return this.exponent},set:function(t){this.exponent=t},enumerable:!1,configurable:!0}),Object.defineProperty(a.prototype,"s",{get:function(){return this.sign()},set:function(t){if(0===t)return this.e=0,void(this.m=0);this.sgn()!==t&&(this.m=-this.m)},enumerable:!1,configurable:!0}),a.fromMantissaExponent=function(t,n){return(new a).fromMantissaExponent(t,n)},a.fromMantissaExponent_noNormalize=function(t,n){return(new a).fromMantissaExponent_noNormalize(t,n)},a.fromDecimal=function(t){return(new a).fromDecimal(t)},a.fromNumber=function(t){return(new a).fromNumber(t)},a.fromString=function(t){return(new a).fromString(t)},a.fromValue=function(t){return(new a).fromValue(t)},a.fromValue_noAlloc=function(t){return t instanceof a?t:new a(t)},a.abs=function(t){return r(t).abs()},a.neg=function(t){return r(t).neg()},a.negate=function(t){return r(t).neg()},a.negated=function(t){return r(t).neg()},a.sign=function(t){return r(t).sign()},a.sgn=function(t){return r(t).sign()},a.round=function(t){return r(t).round()},a.floor=function(t){return r(t).floor()},a.ceil=function(t){return r(t).ceil()},a.trunc=function(t){return r(t).trunc()},a.add=function(t,n){return r(t).add(n)},a.plus=function(t,n){return r(t).add(n)},a.sub=function(t,n){return r(t).sub(n)},a.subtract=function(t,n){return r(t).sub(n)},a.minus=function(t,n){return r(t).sub(n)},a.mul=function(t,n){return r(t).mul(n)},a.multiply=function(t,n){return r(t).mul(n)},a.times=function(t,n){return r(t).mul(n)},a.div=function(t,n){return r(t).div(n)},a.divide=function(t,n){return r(t).div(n)},a.recip=function(t){return r(t).recip()},a.reciprocal=function(t){return r(t).recip()},a.reciprocate=function(t){return r(t).reciprocate()},a.cmp=function(t,n){return r(t).cmp(n)},a.compare=function(t,n){return r(t).cmp(n)},a.eq=function(t,n){return r(t).eq(n)},a.equals=function(t,n){return r(t).eq(n)},a.neq=function(t,n){return r(t).neq(n)},a.notEquals=function(t,n){return r(t).notEquals(n)},a.lt=function(t,n){return r(t).lt(n)},a.lte=function(t,n){return r(t).lte(n)},a.gt=function(t,n){return r(t).gt(n)},a.gte=function(t,n){return r(t).gte(n)},a.max=function(t,n){return r(t).max(n)},a.min=function(t,n){return r(t).min(n)},a.clamp=function(t,n,e){return r(t).clamp(n,e)},a.clampMin=function(t,n){return r(t).clampMin(n)},a.clampMax=function(t,n){return r(t).clampMax(n)},a.cmp_tolerance=function(t,n,e){return r(t).cmp_tolerance(n,e)},a.compare_tolerance=function(t,n,e){return r(t).cmp_tolerance(n,e)},a.eq_tolerance=function(t,n,e){return r(t).eq_tolerance(n,e)},a.equals_tolerance=function(t,n,e){return r(t).eq_tolerance(n,e)},a.neq_tolerance=function(t,n,e){return r(t).neq_tolerance(n,e)},a.notEquals_tolerance=function(t,n,e){return r(t).notEquals_tolerance(n,e)},a.lt_tolerance=function(t,n,e){return r(t).lt_tolerance(n,e)},a.lte_tolerance=function(t,n,e){return r(t).lte_tolerance(n,e)},a.gt_tolerance=function(t,n,e){return r(t).gt_tolerance(n,e)},a.gte_tolerance=function(t,n,e){return r(t).gte_tolerance(n,e)},a.log10=function(t){return r(t).log10()},a.absLog10=function(t){return r(t).absLog10()},a.pLog10=function(t){return r(t).pLog10()},a.log=function(t,n){return r(t).log(n)},a.log2=function(t){return r(t).log2()},a.ln=function(t){return r(t).ln()},a.logarithm=function(t,n){return r(t).logarithm(n)},a.pow10=function(t){return Number.isInteger(t)?o(1,t):i(Math.pow(10,t%1),Math.trunc(t))},a.pow=function(t,n){return"number"==typeof t&&10===t&&"number"==typeof n&&Number.isInteger(n)?o(1,n):r(t).pow(n)},a.exp=function(t){return r(t).exp()},a.sqr=function(t){return r(t).sqr()},a.sqrt=function(t){return r(t).sqrt()},a.cube=function(t){return r(t).cube()},a.cbrt=function(t){return r(t).cbrt()},a.dp=function(t){return r(t).dp()},a.decimalPlaces=function(t){return r(t).dp()},a.affordGeometricSeries=function(t,n,e,i){return u(r(t),r(n),r(e),i)},a.sumGeometricSeries=function(t,n,e,i){return s(t,r(n),r(e),i)},a.affordArithmeticSeries=function(t,n,e,i){return function(t,n,e,r){var i=n.add(r.mul(e)).sub(e.div(2)),o=i.pow(2);return i.neg().add(o.add(e.mul(t).mul(2)).sqrt()).div(e).floor()}(r(t),r(n),r(e),r(i))},a.sumArithmeticSeries=function(t,n,e,i){return function(t,n,e,r){var i=n.add(r.mul(e));return t.div(2).mul(i.mul(2).plus(t.sub(1).mul(e)))}(r(t),r(n),r(e),r(i))},a.efficiencyOfPurchase=function(t,n,e){return function(t,n,e){return t.div(n).add(t.div(e))}(r(t),r(n),r(e))},a.randomDecimalForTesting=function(t){if(20*Math.random()<1)return o(0,0);var n=10*Math.random();10*Math.random()<1&&(n=Math.round(n)),n*=Math.sign(2*Math.random()-1);var e=Math.floor(Math.random()*t*2)-t;return i(n,e)},a.prototype.normalize=function(){if(this.m>=1&&this.m<10)return this;if(0===this.m)return this.m=0,this.e=0,this;var t=Math.floor(Math.log10(Math.abs(this.m)));return this.m=-324===t?10*this.m/1e-323:this.m/e(t),this.e+=t,this},a.prototype.fromMantissaExponent=function(t,n){return isFinite(t)&&isFinite(n)?(this.m=t,this.e=n,this.normalize(),this):(t=Number.NaN,n=Number.NaN,this)},a.prototype.fromMantissaExponent_noNormalize=function(t,n){return this.m=t,this.e=n,this},a.prototype.fromDecimal=function(t){return this.m=t.m,this.e=t.e,this},a.prototype.fromNumber=function(t){return isNaN(t)?(this.m=Number.NaN,this.e=Number.NaN):t===Number.POSITIVE_INFINITY?(this.m=1,this.e=n):t===Number.NEGATIVE_INFINITY?(this.m=-1,this.e=n):0===t?(this.m=0,this.e=0):(this.e=Math.floor(Math.log10(Math.abs(t))),this.m=-324===this.e?10*t/1e-323:t/e(this.e),this.normalize()),this},a.prototype.fromString=function(t){if(-1!==t.indexOf("e")){var n=t.split("e");this.m=parseFloat(n[0]),this.e=parseFloat(n[1]),this.normalize()}else if("NaN"===t)this.m=Number.NaN,this.e=Number.NaN;else if(this.fromNumber(parseFloat(t)),isNaN(this.m))throw Error("[DecimalError] Invalid argument: "+t);return this},a.prototype.fromValue=function(t){return t instanceof a?this.fromDecimal(t):"number"==typeof t?this.fromNumber(t):"string"==typeof t?this.fromString(t):(this.m=0,this.e=0,this)},a.prototype.toNumber=function(){if(!isFinite(this.e))return Number.NaN;if(this.e>308)return this.m>0?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;if(this.e<-324)return 0;if(-324===this.e)return this.m>0?5e-324:-5e-324;var t=this.m*e(this.e);if(!isFinite(t)||this.e<0)return t;var n=Math.round(t);return Math.abs(n-t)<1e-10?n:t},a.prototype.mantissaWithDecimalPlaces=function(t){if(isNaN(this.m)||isNaN(this.e))return Number.NaN;if(0===this.m)return 0;var n=t+1,e=Math.ceil(Math.log10(Math.abs(this.m))),r=Math.round(this.m*Math.pow(10,n-e))*Math.pow(10,e-n);return parseFloat(r.toFixed(Math.max(n-e,0)))},a.prototype.toString=function(){return isNaN(this.m)||isNaN(this.e)?"NaN":this.e>=n?this.m>0?"Infinity":"-Infinity":this.e<=-n||0===this.m?"0":this.e<21&&this.e>-7?this.toNumber().toString():this.m+"e"+(this.e>=0?"+":"")+this.e},a.prototype.toExponential=function(e){if(isNaN(this.m)||isNaN(this.e))return"NaN";if(this.e>=n)return this.m>0?"Infinity":"-Infinity";if(this.e<=-n||0===this.m)return"0"+(e>0?t(".",e+1,"0"):"")+"e+0";if(this.e>-324&&this.e<308)return this.toNumber().toExponential(e);isFinite(e)||(e=17);var r=e+1,i=Math.max(1,Math.ceil(Math.log10(Math.abs(this.m))));return(Math.round(this.m*Math.pow(10,r-i))*Math.pow(10,i-r)).toFixed(Math.max(r-i,0))+"e"+(this.e>=0?"+":"")+this.e},a.prototype.toFixed=function(e){return isNaN(this.m)||isNaN(this.e)?"NaN":this.e>=n?this.m>0?"Infinity":"-Infinity":this.e<=-n||0===this.m?"0"+(e>0?t(".",e+1,"0"):""):this.e>=17?this.m.toString().replace(".","").padEnd(this.e+1,"0")+(e>0?t(".",e+1,"0"):""):this.toNumber().toFixed(e)},a.prototype.toPrecision=function(t){return this.e<=-7?this.toExponential(t-1):t>this.e?this.toFixed(t-this.e-1):this.toExponential(t-1)},a.prototype.valueOf=function(){return this.toString()},a.prototype.toJSON=function(){return this.toString()},a.prototype.toStringWithDecimalPlaces=function(t){return this.toExponential(t)},a.prototype.abs=function(){return o(Math.abs(this.m),this.e)},a.prototype.neg=function(){return o(-this.m,this.e)},a.prototype.negate=function(){return this.neg()},a.prototype.negated=function(){return this.neg()},a.prototype.sign=function(){return Math.sign(this.m)},a.prototype.sgn=function(){return this.sign()},a.prototype.round=function(){return this.e<-1?new a(0):this.e<17?new a(Math.round(this.toNumber())):this},a.prototype.floor=function(){return this.e<-1?Math.sign(this.m)>=0?new a(0):new a(-1):this.e<17?new a(Math.floor(this.toNumber())):this},a.prototype.ceil=function(){return this.e<-1?Math.sign(this.m)>0?new a(1):new a(0):this.e<17?new a(Math.ceil(this.toNumber())):this},a.prototype.trunc=function(){return this.e<0?new a(0):this.e<17?new a(Math.trunc(this.toNumber())):this},a.prototype.add=function(t){var n,o,u=r(t);if(0===this.m)return u;if(0===u.m)return this;if(this.e>=u.e?(n=this,o=u):(n=u,o=this),n.e-o.e>17)return n;var s=Math.round(1e14*n.m+1e14*o.m*e(o.e-n.e));return i(s,n.e-14)},a.prototype.plus=function(t){return this.add(t)},a.prototype.sub=function(t){return this.add(r(t).neg())},a.prototype.subtract=function(t){return this.sub(t)},a.prototype.minus=function(t){return this.sub(t)},a.prototype.mul=function(t){if("number"==typeof t)return t<1e307&&t>-1e307?i(this.m*t,this.e):i(1e-307*this.m*t,this.e+307);var n="string"==typeof t?new a(t):t;return i(this.m*n.m,this.e+n.e)},a.prototype.multiply=function(t){return this.mul(t)},a.prototype.times=function(t){return this.mul(t)},a.prototype.div=function(t){return this.mul(r(t).recip())},a.prototype.divide=function(t){return this.div(t)},a.prototype.divideBy=function(t){return this.div(t)},a.prototype.dividedBy=function(t){return this.div(t)},a.prototype.recip=function(){return i(1/this.m,-this.e)},a.prototype.reciprocal=function(){return this.recip()},a.prototype.reciprocate=function(){return this.recip()},a.prototype.cmp=function(t){var n=r(t);if(0===this.m){if(0===n.m)return 0;if(n.m<0)return 1;if(n.m>0)return-1}if(0===n.m){if(this.m<0)return-1;if(this.m>0)return 1}if(this.m>0)return n.m<0||this.e>n.e?1:this.e<n.e?-1:this.m>n.m?1:this.m<n.m?-1:0;if(this.m<0)return n.m>0||this.e>n.e?-1:this.e<n.e||this.m>n.m?1:this.m<n.m?-1:0;throw Error("Unreachable code")},a.prototype.compare=function(t){return this.cmp(t)},a.prototype.eq=function(t){var n=r(t);return this.e===n.e&&this.m===n.m},a.prototype.equals=function(t){return this.eq(t)},a.prototype.neq=function(t){return!this.eq(t)},a.prototype.notEquals=function(t){return this.neq(t)},a.prototype.lt=function(t){var n=r(t);return 0===this.m?n.m>0:0===n.m?this.m<=0:this.e===n.e?this.m<n.m:this.m>0?n.m>0&&this.e<n.e:n.m>0||this.e>n.e},a.prototype.lte=function(t){return!this.gt(t)},a.prototype.gt=function(t){var n=r(t);return 0===this.m?n.m<0:0===n.m?this.m>0:this.e===n.e?this.m>n.m:this.m>0?n.m<0||this.e>n.e:n.m<0&&this.e<n.e},a.prototype.gte=function(t){return!this.lt(t)},a.prototype.max=function(t){var n=r(t);return this.lt(n)?n:this},a.prototype.min=function(t){var n=r(t);return this.gt(n)?n:this},a.prototype.clamp=function(t,n){return this.max(t).min(n)},a.prototype.clampMin=function(t){return this.max(t)},a.prototype.clampMax=function(t){return this.min(t)},a.prototype.cmp_tolerance=function(t,n){var e=r(t);return this.eq_tolerance(e,n)?0:this.cmp(e)},a.prototype.compare_tolerance=function(t,n){return this.cmp_tolerance(t,n)},a.prototype.eq_tolerance=function(t,n){var e=r(t);return a.lte(this.sub(e).abs(),a.max(this.abs(),e.abs()).mul(n))},a.prototype.equals_tolerance=function(t,n){return this.eq_tolerance(t,n)},a.prototype.neq_tolerance=function(t,n){return!this.eq_tolerance(t,n)},a.prototype.notEquals_tolerance=function(t,n){return this.neq_tolerance(t,n)},a.prototype.lt_tolerance=function(t,n){var e=r(t);return!this.eq_tolerance(e,n)&&this.lt(e)},a.prototype.lte_tolerance=function(t,n){var e=r(t);return this.eq_tolerance(e,n)||this.lt(e)},a.prototype.gt_tolerance=function(t,n){var e=r(t);return!this.eq_tolerance(e,n)&&this.gt(e)},a.prototype.gte_tolerance=function(t,n){var e=r(t);return this.eq_tolerance(e,n)||this.gt(e)},a.prototype.log10=function(){return this.e+Math.log10(this.m)},a.prototype.absLog10=function(){return this.e+Math.log10(Math.abs(this.m))},a.prototype.pLog10=function(){return this.m<=0||this.e<0?0:this.log10()},a.prototype.log=function(t){return Math.LN10/Math.log(t)*this.log10()},a.prototype.log2=function(){return 3.321928094887362*this.log10()},a.prototype.ln=function(){return 2.302585092994045*this.log10()},a.prototype.logarithm=function(t){return this.log(t)},a.prototype.pow=function(t){var n,e=t instanceof a?t.toNumber():t,r=this.e*e;if(Number.isSafeInteger(r)&&(n=Math.pow(this.m,e),isFinite(n)&&0!==n))return i(n,r);var o=Math.trunc(r),u=r-o;if(n=Math.pow(10,e*Math.log10(this.m)+u),isFinite(n)&&0!==n)return i(n,o);var s=a.pow10(e*this.absLog10());return-1===this.sign()?1===Math.abs(e%2)?s.neg():0===Math.abs(e%2)?s:new a(Number.NaN):s},a.prototype.pow_base=function(t){return r(t).pow(this)},a.prototype.factorial=function(){var t=this.toNumber()+1;return a.pow(t/Math.E*Math.sqrt(t*Math.sinh(1/t)+1/(810*Math.pow(t,6))),t).mul(Math.sqrt(2*Math.PI/t))},a.prototype.exp=function(){var t=this.toNumber();return-706<t&&t<709?a.fromNumber(Math.exp(t)):a.pow(Math.E,t)},a.prototype.sqr=function(){return i(Math.pow(this.m,2),2*this.e)},a.prototype.sqrt=function(){return this.m<0?new a(Number.NaN):this.e%2!=0?i(3.16227766016838*Math.sqrt(this.m),Math.floor(this.e/2)):i(Math.sqrt(this.m),Math.floor(this.e/2))},a.prototype.cube=function(){return i(Math.pow(this.m,3),3*this.e)},a.prototype.cbrt=function(){var t=1,n=this.m;n<0&&(t=-1,n=-n);var e=t*Math.pow(n,1/3),r=this.e%3;return i(1===r||-1===r?2.154434690031883*e:0!==r?4.641588833612778*e:e,Math.floor(this.e/3))},a.prototype.sinh=function(){return this.exp().sub(this.negate().exp()).div(2)},a.prototype.cosh=function(){return this.exp().add(this.negate().exp()).div(2)},a.prototype.tanh=function(){return this.sinh().div(this.cosh())},a.prototype.asinh=function(){return a.ln(this.add(this.sqr().add(1).sqrt()))},a.prototype.acosh=function(){return a.ln(this.add(this.sqr().sub(1).sqrt()))},a.prototype.atanh=function(){return this.abs().gte(1)?Number.NaN:a.ln(this.add(1).div(new a(1).sub(this)))/2},a.prototype.ascensionPenalty=function(t){return 0===t?this:this.pow(Math.pow(10,-t))},a.prototype.egg=function(){return this.add(9)},a.prototype.lessThanOrEqualTo=function(t){return this.cmp(t)<1},a.prototype.lessThan=function(t){return this.cmp(t)<0},a.prototype.greaterThanOrEqualTo=function(t){return this.cmp(t)>-1},a.prototype.greaterThan=function(t){return this.cmp(t)>0},a.prototype.decimalPlaces=function(){return this.dp()},a.prototype.dp=function(){if(!isFinite(this.mantissa))return NaN;if(this.exponent>=17)return 0;for(var t=this.mantissa,n=-this.exponent,e=1;Math.abs(Math.round(t*e)/e-t)>1e-10;)e*=10,n++;return n>0?n:0},Object.defineProperty(a,"MAX_VALUE",{get:function(){return h},enumerable:!1,configurable:!0}),Object.defineProperty(a,"MIN_VALUE",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(a,"NUMBER_MAX_VALUE",{get:function(){return f},enumerable:!1,configurable:!0}),Object.defineProperty(a,"NUMBER_MIN_VALUE",{get:function(){return p},enumerable:!1,configurable:!0}),a}(),h=o(1,n),c=o(1,-n),f=r(Number.MAX_VALUE),p=r(Number.MIN_VALUE);return a}));

const ROUND_FUNCTIONS = {
  'round': Decimal.round, 
  'floor': Decimal.floor,
  'ceil': Decimal.ceil,
  'trunc': Decimal.trunc
};

const MATHS_FUNCTIONS = {
  "abs": Decimal.abs,
  "neg": Decimal.neg,
  "ln": Decimal.ln,
  "e^": Decimal.exp,
   "sqrt": Decimal.sqrt,
}

const root = (rootBase, num) => num.pow(1 / rootBase);
const log = (base, num) => Decimal.ln(num) / Decimal.ln(base);

function toDecimal(value)
{
  try
  {
    return new Decimal(value)
  }
  catch (error)
  {
    return new Decimal(0)
  }
}

class BreakInfinity {
  getInfo() 
  {
    return {
      id: 'Yorenibreakinfinity',
      name: 'Break Infinity',
      color1: '#520359', // pure red
      color2: '#260a33', // pure green
      color3: '#260a33', // pure blue
      blocks: [
        {
          opcode: 'add',
          blockType: Scratch.BlockType.REPORTER,
          text: '[num1] + [num2]',
          arguments: {
            num1: {
              type: Scratch.ArgumentType.STRING
            },
            num2: {
              type: Scratch.ArgumentType.STRING
            }
          }
        },
        {
          opcode: 'sub',
          blockType: Scratch.BlockType.REPORTER,
          text: '[num1] - [num2]',
          arguments: {
            num1: {
              type: Scratch.ArgumentType.STRING
            },
            num2: {
              type: Scratch.ArgumentType.STRING
            }
          }
        },
        {
          opcode: 'mul',
          blockType: Scratch.BlockType.REPORTER,
          text: '[num1] * [num2]',
          arguments: {
            num1: {
              type: Scratch.ArgumentType.STRING
            },
            num2: {
              type: Scratch.ArgumentType.STRING
            }
          }
        },
        {
          opcode: 'div',
          blockType: Scratch.BlockType.REPORTER,
          text: '[num1] / [num2]',
          arguments: {
            num1: {
              type: Scratch.ArgumentType.STRING
            },
            num2: {
              type: Scratch.ArgumentType.STRING
            }
          }
        },
        {
          opcode: 'pow',
          blockType: Scratch.BlockType.REPORTER,
          text: '[num1] ^ [num2]',
          arguments: {
            num1: {
              type: Scratch.ArgumentType.STRING
            },
            num2: {
              type: Scratch.ArgumentType.STRING
            }
          }
        },
        {
          opcode: 'root',
          blockType: Scratch.BlockType.REPORTER,
          text: '[root]root [num]',
          arguments: {
            root: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 2,
            },
            num: {
              type: Scratch.ArgumentType.STRING
            }
          }
        },
        {
          opcode: 'log',
          blockType: Scratch.BlockType.REPORTER,
          text: '[base]log [num]',
          arguments: {
            base: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 10,
            },
            num: {
              type: Scratch.ArgumentType.STRING
            }
          }
        },
        {
          opcode: 'round',
          blockType: Scratch.BlockType.REPORTER,
          text: ' [round] of [num] ',
          arguments: {
            num: {
              type: Scratch.ArgumentType.STRING
            },
            round: {
              type: Scratch.ArgumentType.STRING,
              menu: 'ROUND'
            }
          }
        },
        {
          opcode: 'maths',
          blockType: Scratch.BlockType.REPORTER,
          text: ' [function] of [num] ',
          arguments: {
            num: {
              type: Scratch.ArgumentType.STRING
            },
            function: {
              type: Scratch.ArgumentType.STRING,
              menu: 'MATHS_FUNCTIONS'
            }
          }
        },
        {
          opcode: 'gt',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[num1] > [num2]',
          arguments: {
            num1: {
              type: Scratch.ArgumentType.STRING
            },
            num2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 50,
            },
          }
        },
        {
          opcode: 'gte',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[num1] >= [num2]',
          arguments: {
            num1: {
              type: Scratch.ArgumentType.STRING
            },
            num2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 50,
            },
          }
        },
        {
          opcode: 'lt',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[num1] < [num2]',
          arguments: {
            num1: {
              type: Scratch.ArgumentType.STRING
            },
            num2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 50,
            },
          }
        },
        {
          opcode: 'lte',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[num1] <= [num2]',
          arguments: {
            num1: {
              type: Scratch.ArgumentType.STRING
            },
            num2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 50,
            },
          }
        },
        ,
        {
          opcode: 'eq',
          blockType: Scratch.BlockType.BOOLEAN,
          text: '[num1] = [num2]',
          arguments: {
            num1: {
              type: Scratch.ArgumentType.STRING
            },
            num2: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 50,
            },
          }
        },
      ],
      menus: {
        ROUND: {
          acceptReporters: false,
          items:  Object.keys(ROUND_FUNCTIONS)
        },
        MATHS_FUNCTIONS: {
          acceptReporters: false,
          items: Object.keys(MATHS_FUNCTIONS)
        },
      }
    };
  }

  #proformNumOperation(args, operation) 
  {
    return this.#proformOperation(args, operation).toString();
  }

  #proformOperation(args, operation)
  {
    const num1 = toDecimal(args.num1);
    const num2 = toDecimal(args.num2);
    return operation(num1, num2);
  }

  add(args) 
  {
    return this.#proformNumOperation(args, Decimal.add);
  }

  sub(args) 
  {
    return this.#proformNumOperation(args, Decimal.sub);
  }

  mul(args) 
  {
    return this.#proformNumOperation(args, Decimal.mul);
  }

  div(args) 
  {
    return this.#proformNumOperation(args, Decimal.div);
  }

  pow(args) 
  {
    return this.#proformNumOperation(args, Decimal.pow);
  }


  round(args) 
  {
    const num = toDecimal(args.num);
    const _function = ROUND_FUNCTIONS[args.round];
    return _function(num).toString();
  }

  gt(args)
  {
    return this.#proformOperation(args, Decimal.gt);
  }

  gte(args)
  {
    return this.#proformOperation(args, Decimal.gte);
  }

  lt(args) 
  {
    return this.#proformOperation(args, Decimal.lt);
  }

  lte(args) 
  {
    return this.#proformOperation(args, Decimal.lte);
  }

  eq(args) 
  {
    return this.#proformOperation(args, Decimal.eq);
  }

  maths(args) 
  {
    const num = toDecimal(args.num);
    const _function = MATHS_FUNCTIONS[args.function];
    return _function(num).toString();
  }

  root(args) 
  {
    return this.#proformNumOperation({num1: args.root, num2: args.num}, root);
  }

  log(args) 
  {
    return this.#proformNumOperation({num1: args.base, num2: args.num}, log);
  }
}

Scratch.extensions.register(new BreakInfinity());