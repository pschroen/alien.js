//   _  /._  _  r2.about 2017-05-25 9:56pm
//  /_|///_'/ /
var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t};window.Events||(window.Events={BROWSER_FOCUS:"browser_focus",COMPLETE:"complete",PROGRESS:"progress",UPDATE:"update",LOADED:"loaded",ERROR:"error",RESIZE:"resize",HOVER:"hover",CLICK:"click"});var EventManager=function e(){classCallCheck(this,e);var t=[];this.add=function(e,n){t.push({event:e,callback:n})},this.remove=function(e,n){for(var i=t.length-1;i>-1;i--)t[i].event===e&&t[i].callback===n&&t.splice(i,1)},this.fire=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=0;i<t.length;i++)t[i].event===e&&t[i].callback(n)}};window.events||(window.events=new EventManager),window.requestAnimationFrame||(window.requestAnimationFrame=function(){return window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){Delayed(e,1e3/60)}}());var Render=function e(){var t=this;classCallCheck(this,e),this.TIME=Date.now(),this.TARGET_FPS=60;var n=void 0,i=[],r=Date.now(),a=0,o=!1,s=function(e){"focus"===e.type&&(n=Date.now())},u=function e(){var u=Date.now(),c=u-r,l=0,h=60;n&&(h=1e3/(l=u-n)),n=u,t.FPS=h,t.TIME=u,t.DELTA=l,t.TSL=c;for(var f=i.length-1;f>-1;f--){var v=i[f];if(v){if(v.fps){if((a+=l>200?0:l)<1e3/v.fps)continue;a-=1e3/v.fps}v(u,c,l,h,v.frameCount++)}}i.length?window.requestAnimationFrame(e):(o=!1,window.events.remove(Events.BROWSER_FOCUS,s))};this.start=function(e,n){t.TARGET_FPS<60&&(n=t.TARGET_FPS),"number"==typeof n&&(e.fps=n),e.frameCount=0,-1===i.indexOf(e)&&i.push(e),i.length&&!o&&(o=!0,window.requestAnimationFrame(u),window.events.add(Events.BROWSER_FOCUS,s))},this.stop=function(e){var t=i.indexOf(e);t>-1&&i.splice(t,1)}},Device=function(){function e(){var t=this;classCallCheck(this,e),this.agent=navigator.userAgent.toLowerCase(),this.prefix=function(){var e="",n="",i=window.getComputedStyle(document.documentElement,"");e=(Array.prototype.slice.call(i).join("").match(/-(moz|webkit|ms)-/)||""===i.OLink&&["","o"])[1],n="WebKit|Moz|MS|O".match(new RegExp("("+e+")","i"))[1];var r=t.detect("trident");return{unprefixed:r&&!t.detect("msie 9"),dom:n,lowercase:e,css:"-"+e+"-",js:(r?e[0]:e[0].toUpperCase())+e.substr(1)}}(),this.transformProperty=function(){var e=void 0;switch(t.prefix.lowercase){case"webkit":e="-webkit-transform";break;case"moz":e="-moz-transform";break;case"o":e="-o-transform";break;case"ms":e="-ms-transform";break;default:e="transform"}return e}(),this.system={},this.system.retina=window.devicePixelRatio>1}return createClass(e,[{key:"detect",value:function(e){"string"==typeof e&&(e=[e]);for(var t=0;t<e.length;t++)if(this.agent.indexOf(e[t])>-1)return!0;return!1}},{key:"vendor",value:function(e){return this.prefix.js+e}}]),e}(),Interpolation=function e(){var t=this;classCallCheck(this,e),this.convertEase=function(e){return function(){var n=void 0;switch(e){case"easeInQuad":n=t.Quad.In;break;case"easeInCubic":n=t.Cubic.In;break;case"easeInQuart":n=t.Quart.In;break;case"easeInQuint":n=t.Quint.In;break;case"easeInSine":n=t.Sine.In;break;case"easeInExpo":n=t.Expo.In;break;case"easeInCirc":n=t.Circ.In;break;case"easeInElastic":n=t.Elastic.In;break;case"easeInBack":n=t.Back.In;break;case"easeInBounce":n=t.Bounce.In;break;case"easeOutQuad":n=t.Quad.Out;break;case"easeOutCubic":n=t.Cubic.Out;break;case"easeOutQuart":n=t.Quart.Out;break;case"easeOutQuint":n=t.Quint.Out;break;case"easeOutSine":n=t.Sine.Out;break;case"easeOutExpo":n=t.Expo.Out;break;case"easeOutCirc":n=t.Circ.Out;break;case"easeOutElastic":n=t.Elastic.Out;break;case"easeOutBack":n=t.Back.Out;break;case"easeOutBounce":n=t.Bounce.Out;break;case"easeInOutQuad":n=t.Quad.InOut;break;case"easeInOutCubic":n=t.Cubic.InOut;break;case"easeInOutQuart":n=t.Quart.InOut;break;case"easeInOutQuint":n=t.Quint.InOut;break;case"easeInOutSine":n=t.Sine.InOut;break;case"easeInOutExpo":n=t.Expo.InOut;break;case"easeInOutCirc":n=t.Circ.InOut;break;case"easeInOutElastic":n=t.Elastic.InOut;break;case"easeInOutBack":n=t.Back.InOut;break;case"easeInOutBounce":n=t.Bounce.InOut;break;case"linear":n=t.Linear.None}return n}()||t.Cubic.Out},this.Linear={None:function(e){return e}},this.Quad={In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}},this.Cubic={In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}},this.Quart={In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}},this.Quint={In:function(e){return e*e*e*e*e},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}},this.Sine={In:function(e){return 1-Math.cos(e*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return.5*(1-Math.cos(Math.PI*e))}},this.Expo={In:function(e){return 0===e?0:Math.pow(1024,e-1)},Out:function(e){return 1===e?1:1-Math.pow(2,-10*e)},InOut:function(e){return 0===e?0:1===e?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(2-Math.pow(2,-10*(e-1)))}},this.Circ={In:function(e){return 1-Math.sqrt(1-e*e)},Out:function(e){return Math.sqrt(1- --e*e)},InOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}},this.Elastic={In:function(e){var t=void 0,n=.1;return 0===e?0:1===e?1:(!n||n<1?(n=1,t=.1):t=.4*Math.asin(1/n)/(2*Math.PI),-n*Math.pow(2,10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/.4))},Out:function(e){var t=void 0,n=.1;return 0===e?0:1===e?1:(!n||n<1?(n=1,t=.1):t=.4*Math.asin(1/n)/(2*Math.PI),n*Math.pow(2,-10*e)*Math.sin((e-t)*(2*Math.PI)/.4)+1)},InOut:function(e){var t=void 0,n=.1;return 0===e?0:1===e?1:(!n||n<1?(n=1,t=.1):t=.4*Math.asin(1/n)/(2*Math.PI),(e*=2)<1?n*Math.pow(2,10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/.4)*-.5:n*Math.pow(2,-10*(e-=1))*Math.sin((e-t)*(2*Math.PI)/.4)*.5+1)}},this.Back={In:function(e){var t=1.70158;return e*e*((t+1)*e-t)},Out:function(e){var t=1.70158;return--e*e*((t+1)*e+t)+1},InOut:function(e){var t=2.5949095;return(e*=2)<1?e*e*((t+1)*e-t)*.5:.5*((e-=2)*e*((t+1)*e+t)+2)}},this.Bounce={In:function(e){return 1-t.Bounce.Out(1-e)},Out:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},InOut:function(e){return e<.5?.5*t.Bounce.In(2*e):.5*t.Bounce.Out(2*e-1)+.5}}},MathTween=function e(t,n,i,r,a,o){function s(e){if(t.mathTween=null,!e)for(var n in h)"number"==typeof h[n]&&(t[n]=h[n]);TweenManager.removeMathTween(u)}classCallCheck(this,e);var u=this,c=void 0,l=void 0,h=void 0,f=void 0,v=void 0;!function(){TweenManager.clearTween(t),TweenManager.addMathTween(u),t.mathTween=u,r=Interpolation.convertEase(r),c=Date.now(),c+=a,h=n,l={};for(var e in h)"number"==typeof t[e]&&(l[e]=t[e])}(),this.update=function(e){if(!(f||e<c)){var n=r(v=(v=(e-c)/i)>1?1:v);for(var a in l)if("number"==typeof l[a]){var u=l[a],d=h[a];t[a]=u+(d-u)*n}1===v&&(s(),o&&o())}},this.pause=function(){f=!0},this.resume=function(){f=!1,c=Date.now()-v*i},this.stop=function(){return s(!0)}},SpringTween=function e(t,n,i,r,a,o){function s(e){if(t.mathTween=null,!e)for(var n in h)"number"==typeof h[n]&&(t[n]=h[n]);TweenManager.removeMathTween(u)}classCallCheck(this,e);var u=this,c=void 0,l=void 0,h=void 0,f=void 0,v=void 0,d=void 0,p=void 0;!function(){TweenManager.clearTween(t),TweenManager.addMathTween(u),t.mathTween=u,c=Date.now(),c+=a,h={},f={},l={},(n.x||n.y||n.z)&&(void 0===n.x&&(n.x=t.x),void 0===n.y&&(n.y=t.y),void 0===n.z&&(n.z=t.z)),d=0,v=n.damping||.1,delete n.damping;for(var e in n)"number"==typeof n[e]&&(l[e]=0,h[e]=n[e]);for(var i in n)"number"==typeof t[i]&&(f[i]=t[i]||0,n[i]=f[i])}(),this.update=function(e){if(!(p||e<c)){var r=void 0;for(var a in f)if("number"==typeof f[a]){var u=(h[a]-n[a])*v;l[a]+=u,l[a]*=i,n[a]+=l[a],t[a]=n[a],r=l[a]}Math.abs(r)<.001&&++d>30&&(s(),o&&o())}},this.pause=function(){p=!0},this.stop=function(){return s(!0)}},TweenManager=function(){function e(){classCallCheck(this,e),this.TRANSFORMS=["x","y","z","scale","scaleX","scaleY","rotation","rotationX","rotationY","rotationZ","skewX","skewY","perspective"],this.CSS_EASES={easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",easeOutQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",easeOutQuart:"cubic-bezier(0.165, 0.840, 0.440, 1.000)",easeOutQuint:"cubic-bezier(0.230, 1.000, 0.320, 1.000)",easeOutSine:"cubic-bezier(0.390, 0.575, 0.565, 1.000)",easeOutExpo:"cubic-bezier(0.190, 1.000, 0.220, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.320, 1.275)",easeInCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",easeInQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",easeInQuart:"cubic-bezier(0.895, 0.030, 0.685, 0.220)",easeInQuint:"cubic-bezier(0.755, 0.050, 0.855, 0.060)",easeInSine:"cubic-bezier(0.470, 0.000, 0.745, 0.715)",easeInCirc:"cubic-bezier(0.600, 0.040, 0.980, 0.335)",easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",easeInOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeInOutQuint:"cubic-bezier(0.860, 0.000, 0.070, 1.000)",easeInOutSine:"cubic-bezier(0.445, 0.050, 0.550, 0.950)",easeInOutExpo:"cubic-bezier(1.000, 0.000, 0.000, 1.000)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.150, 0.860)",easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)",easeInOut:"cubic-bezier(0.420, 0.000, 0.580, 1.000)",linear:"linear"};var t=[],n=!1,i=function e(i){if(t.length)for(var r=0;r<t.length;r++)t[r].update(i);else n=!1,Render.stop(e)};this.addMathTween=function(e){t.push(e),n||(n=!0,Render.start(i))},this.removeMathTween=function(e){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}return createClass(e,[{key:"tween",value:function(e,t,n,i,r,a){"number"!=typeof r&&(a=r,r=0);var o=null;"undefined"!=typeof Promise&&(o=Promise.create(),a&&o.then(a),a=o.resolve);var s="spring"===i?new SpringTween(e,t,n,i,r,a):new MathTween(e,t,n,i,r,a);return o||s}},{key:"clearTween",value:function(e){e.mathTween&&e.mathTween.stop()}},{key:"clearCSSTween",value:function(e){e.cssTween&&e.cssTween.stop()}},{key:"checkTransform",value:function(e){return this.TRANSFORMS.indexOf(e)>-1}},{key:"getEase",value:function(e){var t=this.CSS_EASES;return t[e]||t.easeOutCubic}},{key:"getAllTransforms",value:function(e){for(var t={},n=this.TRANSFORMS.length-1;n>-1;n--){var i=this.TRANSFORMS[n],r=e[i];0!==r&&"number"==typeof r&&(t[i]=r)}return t}},{key:"parseTransform",value:function(e){var t="";if(void 0!==e.x||void 0!==e.y||void 0!==e.z){var n="";n+=(e.x||0)+"px, ",n+=(e.y||0)+"px, ",t+="translate3d("+(n+=(e.z||0)+"px")+")"}return void 0!==e.scale?t+="scale("+e.scale+")":(void 0!==e.scaleX&&(t+="scaleX("+e.scaleX+")"),void 0!==e.scaleY&&(t+="scaleY("+e.scaleY+")")),void 0!==e.rotation&&(t+="rotate("+e.rotation+"deg)"),void 0!==e.rotationX&&(t+="rotateX("+e.rotationX+"deg)"),void 0!==e.rotationY&&(t+="rotateY("+e.rotationY+"deg)"),void 0!==e.rotationZ&&(t+="rotateZ("+e.rotationZ+"deg)"),void 0!==e.skewX&&(t+="skewX("+e.skewX+"deg)"),void 0!==e.skewY&&(t+="skewY("+e.skewY+"deg)"),void 0!==e.perspective&&(t+="perspective("+e.perspective+"px)"),t}}]),e}(),CSSTransition=function e(t,n,i,r,a,o){function s(){t.element.style[Device.vendor("Transition")]="",t.cssTween=null}classCallCheck(this,e);var u=this,c=TweenManager.getAllTransforms(t),l=[];!function(){for(var e in n)TweenManager.checkTransform(e)?(c.use=!0,c[e]=n[e],delete n[e]):("number"==typeof n[e]||e.indexOf("-")>-1)&&l.push(e);c.use&&l.push(Device.transformProperty),delete c.use}(),function(){TweenManager.clearCSSTween(t),t.cssTween=u;for(var e="",h=0;h<l.length;h++)e+=(e.length?", ":"")+l[h]+" "+i+"ms "+TweenManager.getEase(r)+" "+a+"ms";Delayed(function(){t.element.style[Device.vendor("Transition")]=e,t.css(n),t.transform(c),Delayed(function(){s(),o&&o()},i+a)},50)}(),this.stop=function(){return s()}},Interface=function(){function e(t,n){classCallCheck(this,e),this.events=new EventManager;var i=window.Alien&&window.Alien.Stage?window.Alien.Stage:document.body,r=n||document.createElement("div");"."===t[0]?r.className=t.substr(1):r.id=t,r.style.position="absolute",i.appendChild(r),this.element=r,this.name=t}return createClass(e,[{key:"initClass",value:function(e,t){var n=new e(t);return n.element&&this.element.appendChild(n.element),n.parent=this,n}},{key:"create",value:function(t,n){var i=new e(t,n);return this.element.appendChild(i.element),i.parent=this,i}},{key:"destroy",value:function(){return this.loop&&Render.stop(this.loop),this.element.parentNode.removeChild(this.element),null}},{key:"empty",value:function(){return this.element.innerHTML="",this}},{key:"text",value:function(e){return void 0!==e?(this.element.textContent=e,this):this.element.textContent}},{key:"html",value:function(e){return void 0!==e?(this.element.innerHTML=e,this):this.element.innerHTML}},{key:"hide",value:function(){return this.element.style.display="none",this}},{key:"show",value:function(){return this.element.style.display="",this}},{key:"visible",value:function(){return this.element.style.visibility="visible",this}},{key:"invisible",value:function(){return this.element.style.visibility="hidden",this}},{key:"setZ",value:function(e){return this.element.style.zIndex=e,this}},{key:"clearAlpha",value:function(){return this.element.style.opacity="",this}},{key:"size",value:function(e,t){return void 0!==e&&(void 0===t&&(t=e),"string"==typeof e?("string"!=typeof t&&(t+="px"),this.element.style.width=e,this.element.style.height=t):(this.element.style.width=e+"px",this.element.style.height=t+"px",this.element.style.backgroundSize=e+"px "+t+"px")),this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this}},{key:"enablePointer",value:function(e){return this.element.style.pointerEvents=e?"auto":"none",this}},{key:"fontStyle",value:function(e,t,n,i){return this.css({fontFamily:e,fontSize:t,color:n,fontStyle:i}),this}},{key:"bg",value:function(e,t,n,i){return-1===e.indexOf(".")?this.element.style.backgroundColor=e:this.element.style.backgroundImage="url("+e+")",void 0!==t&&(t="number"==typeof t?t+"px":t,n="number"==typeof n?n+"px":n,this.element.style.backgroundPosition=t+" "+n),i&&(this.element.style.backgroundSize="",this.element.style.backgroundRepeat=i),"cover"!==t&&"contain"!==t||(this.element.style.backgroundSize=t,this.element.style.backgroundRepeat="no-repeat",this.element.style.backgroundPosition=void 0!==n?n+" "+i:"center"),this}},{key:"center",value:function(e,t,n){var i={};return void 0===e?(i.left="50%",i.top="50%",i.marginLeft=-this.width/2,i.marginTop=-this.height/2):(e&&(i.left="50%",i.marginLeft=-this.width/2),t&&(i.top="50%",i.marginTop=-this.height/2)),n&&(delete i.left,delete i.top),this.css(i),this}},{key:"mask",value:function(e){return this.element.style[Device.vendor("Mask")]=(e.indexOf(".")>-1?"url("+e+")":e)+" no-repeat",this.element.style[Device.vendor("MaskSize")]="contain",this}},{key:"blendMode",value:function(e,t){return this.element.style[t?"background-blend-mode":"mix-blend-mode"]=e,this}},{key:"css",value:function(e,t){if("object"!==(void 0===e?"undefined":_typeof(e))){if(t)return this.element.style[e]=t,this;var n=this.element.style[e];return"number"!=typeof n&&(n.indexOf("px")>-1&&(n=Number(n.slice(0,-2))),"opacity"===e&&(n=isNaN(Number(this.element.style.opacity))?1:Number(this.element.style.opacity))),n||(n=0),n}for(var i in e){var r=e[i];"string"!=typeof r&&"number"!=typeof r||("string"!=typeof r&&"opacity"!==i&&"zIndex"!==i&&(r+="px"),this.element.style[i]=r)}return this}},{key:"transform",value:function(e){if(e)for(var t in e)"number"==typeof e[t]&&(this[t]=e[t]);else e=this;return this.element.style[Device.vendor("Transform")]=TweenManager.parseTransform(e),this}},{key:"enable3D",value:function(e,t,n){return this.element.style[Device.vendor("TransformStyle")]="preserve-3d",e&&(this.element.style[Device.vendor("Perspective")]=e+"px"),void 0!==t&&(t="number"==typeof t?t+"px":t,n="number"==typeof n?n+"px":n,this.element.style[Device.vendor("PerspectiveOrigin")]=t+" "+n),this}},{key:"disable3D",value:function(){return this.element.style[Device.vendor("TransformStyle")]="",this.element.style[Device.vendor("Perspective")]="",this}},{key:"transformPoint",value:function(e,t,n){var i="";return void 0!==e&&(i+="number"==typeof e?e+"px ":e+" "),void 0!==t&&(i+="number"==typeof t?t+"px ":t+" "),void 0!==n&&(i+="number"==typeof n?n+"px":n),this.element.style[Device.vendor("TransformOrigin")]=i,this}},{key:"tween",value:function(e,t,n,i,r){"number"!=typeof i&&(r=i,i=0);var a=null;"undefined"!=typeof Promise&&(a=Promise.create(),r&&a.then(r),r=a.resolve);var o=new CSSTransition(this,e,t,n,i,r);return a||o}},{key:"clearTransform",value:function(){return"number"==typeof this.x&&(this.x=0),"number"==typeof this.y&&(this.y=0),"number"==typeof this.z&&(this.z=0),"number"==typeof this.scale&&(this.scale=1),"number"==typeof this.scaleX&&(this.scaleX=1),"number"==typeof this.scaleY&&(this.scaleY=1),"number"==typeof this.rotation&&(this.rotation=0),"number"==typeof this.rotationX&&(this.rotationX=0),"number"==typeof this.rotationY&&(this.rotationY=0),"number"==typeof this.rotationZ&&(this.rotationZ=0),"number"==typeof this.skewX&&(this.skewX=0),"number"==typeof this.skewY&&(this.skewY=0),this.element.style[Device.transformProperty]="",this}},{key:"stopTween",value:function(){return this.cssTween&&this.cssTween.stop(),this.mathTween&&this.mathTween.stop(),this}},{key:"attr",value:function(e,t){if(e&&t)""===t?this.element.removeAttribute(e):this.element.setAttribute(e,t);else if(e)return this.element.getAttribute(e);return this}},{key:"startRender",value:function(e){this.loop=e,Render.start(e)}},{key:"stopRender",value:function(e){this.loop=null,Render.stop(e)}},{key:"click",value:function(e){var t=this;return this.element.addEventListener("click",function(n){n.object="hit"===t.element.className?t.parent:t,n.action="click",n.pageX||(n.pageX=n.clientX,n.pageY=n.clientY),e&&e(n)},!1),this.element.style.cursor="pointer",this}},{key:"hover",value:function(e){var t=this;return this.element.addEventListener("mouseover",function(n){n.object="hit"===t.element.className?t.parent:t,n.action="over",e&&e(n)},!1),this.element.addEventListener("mouseout",function(n){n.object="hit"===t.element.className?t.parent:t,n.action="out",e&&e(n)},!1),this}},{key:"interact",value:function(e,t){this.hit=this.create(".hit").css({position:"absolute",left:0,top:0,width:"100%",height:"100%",zIndex:99999}).enablePointer(!0).hover(e).click(t)}},{key:"split",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t={position:"relative",display:"block",width:"auto",height:"auto",margin:0,padding:0,cssFloat:"left"},n=[],i=this.text().split(e);this.empty();for(var r=0;r<i.length;r++)" "===i[r]&&(i[r]="&nbsp;"),n.push(this.create(".t",document.createElement("span")).html(i[r]).css(t)),""!==e&&r<i.length-1&&n.push(this.create(".t",document.createElement("span")).html(e).css(t));return n}}]),e}(),Canvas=function(e){function t(e,n,i){classCallCheck(this,t);var r=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,document.createElement("canvas")));r.context=r.element.getContext("2d");var a=Device.system.retina?2:1;return r.element.width=n*a,r.element.height=i*a,r.size(n,i),r.context.scale(a,a),r}return inherits(t,e),createClass(t,[{key:"toDataURL",value:function(e,t){return this.element.toDataURL(e,t)}},{key:"getImageData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.width,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.height;return this.imageData=this.context.getImageData(e,t,n,i),this.imageData}},{key:"getPixel",value:function(e,t,n){this.imageData&&!n||this.getImageData(0,0,this.width,this.height);var i={},r=4*(e+t*this.width),a=this.imageData.data;return i.r=a[r],i.g=a[r+1],i.b=a[r+2],i.a=a[r+3],i}}]),t}(Interface),DynamicObject=function e(t){var n=this;classCallCheck(this,e);for(var i in t)this[i]=t[i];this.lerp=function(e,i){for(var r in t)n[r]+=(e[r]-n[r])*i;return n}},Utils=function(){function e(){classCallCheck(this,e)}return createClass(e,[{key:"rand",value:function(e,t){return new DynamicObject({v:e}).lerp({v:t},Math.random()).v}},{key:"doRandom",value:function(e,t,n){if("number"==typeof n){var i=Math.pow(10,n);return Math.round(this.rand(e,t)*i)/i}return Math.round(this.rand(e-.5,t+.5))}},{key:"headsTails",value:function(e,t){return this.doRandom(0,1)?t:e}},{key:"toDegrees",value:function(e){return e*(180/Math.PI)}},{key:"toRadians",value:function(e){return e*(Math.PI/180)}},{key:"findDistance",value:function(e,t){var n=t.x-e.x,i=t.y-e.y;return Math.sqrt(n*n+i*i)}},{key:"timestamp",value:function(){return(Date.now()+this.doRandom(0,99999)).toString()}},{key:"clamp",value:function(e,t,n){return Math.min(Math.max(e,t),n)}},{key:"constrain",value:function(e,t,n){return Math.min(Math.max(e,Math.min(t,n)),Math.max(t,n))}},{key:"convertRange",value:function(e,t,n,i,r,a){var o=(e-t)*(r-i)/(n-t)+i;return a?this.constrain(o,i,r):o}},{key:"cloneObject",value:function(e){return JSON.parse(JSON.stringify(e))}},{key:"mergeObject",value:function(){for(var e={},t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];var r=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(r=(s=u.next()).done);r=!0){var c=s.value;for(var l in c)e[l]=c[l]}}catch(e){a=!0,o=e}finally{try{!r&&u.return&&u.return()}finally{if(a)throw o}}return e}},{key:"queryString",value:function(e){return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURI(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}}]),e}(),Mouse=function e(){var t=this;classCallCheck(this,e),this.x=0,this.y=0;var n=function(e){t.x=e.x,t.y=e.y};this.capture=function(){t.x=0,t.y=0,window.addEventListener("mousemove",n,!1)},this.stop=function(){t.x=0,t.y=0,window.removeEventListener("mousemove",n,!1)}},Stage=function(e){function t(){function e(){i.size()}classCallCheck(this,t);var n=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"Stage")),i=n,r=void 0;return function(){i.css({overflow:"hidden"})}(),function(){window.addEventListener("focus",function(){"focus"!==r&&(r="focus",window.events.fire(Events.BROWSER_FOCUS,{type:"focus"}))},!1),window.addEventListener("blur",function(){"blur"!==r&&(r="blur",window.events.fire(Events.BROWSER_FOCUS,{type:"blur"}))},!1),window.addEventListener("resize",function(){window.events.fire(Events.RESIZE)},!1),window.events.add(Events.RESIZE,e)}(),e(),n}return inherits(t,e),t}(Interface);"undefined"==typeof Promise||Promise.create||(Promise.create=function(){var e=void 0,t=void 0,n=new Promise(function(n,i){e=n,t=i});return n.resolve=e,n.reject=t,n}),window.getURL||(window.getURL=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_blank";return window.open(e,t)}),window.Delayed||(window.Delayed=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments[2];return window.setTimeout(function(){e&&e(n)},t)}),window.Global||(window.Global={}),window.Config||(window.Config={}),Function(function(){var e="";return["Render","Utils","Device","Mouse","TweenManager","Interpolation","XHR","Stage"].forEach(function(t){e+="try {"+t+" = new "+t+"();} catch(e) {}"}),e}())(),Config.UI_COLOR="white",Config.UI_OFFSET=15,Config.ABOUT_COPY=['A lightweight web framework abducted from Active Theory’s <a href="https://medium.com/@activetheory/mira-exploring-the-potential-of-the-future-web-e1f7f326d58e" target="_blank">Hydra</a> and ported to an ES6 module bundler.'],Config.ABOUT_DOWNLOAD_URL="https://raw.github.com/pschroen/alien.js/master/build/alien.min.js",Config.ABOUT_GITHUB_URL="https://github.com/pschroen/alien.js",Config.ABOUT_TWITTER_URL="https://twitter.com/pschroen",Events.OPEN_ABOUT="open_about",Events.CLOSE_ABOUT="close_about";var UIAboutIcons=function(e){function t(){function e(e){"over"===e.action?e.object.tween({opacity:.5},100,"easeOutSine"):e.object.tween({opacity:1},300,"easeOutSine")}function n(e){getURL(e.object.url)}classCallCheck(this,t);var i=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"UIAboutIcons")),r=i,a=void 0,o=void 0,s=48;return function(){r.size("100%",s).transform({z:-200}).enable3D(),r.fontStyle("icomoon",s,Config.UI_COLOR),r.css({position:"relative",display:"block",marginTop:20,fontWeight:"normal",lineHeight:s,textShadow:"0 1px 1px rgba(0, 0, 0, 0.8)",opacity:0})}(),function(){(a=r.create(".icon-github")).url=Config.ABOUT_GITHUB_URL,a.interact(e,n)}(),function(){(o=r.create(".icon-twitter").css({left:s+20})).url=Config.ABOUT_TWITTER_URL,o.interact(e,n)}(),i.animateIn=function(){i.tween({z:-50,x:-10,scale:1,opacity:1},2e3,"easeOutCubic")},i.animateOut=function(){i.tween({z:-100,scale:.9,opacity:0},300,"easeOutCubic")},i}return inherits(t,e),t}(Interface),UIAboutCopy=function(e){function t(){classCallCheck(this,t);var e=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"UIAboutCopy")),n=e,i=Config.ABOUT_COPY,r=[];return function(){n.invisible().enable3D(),n.css({position:"relative",display:"block",width:"100%",marginTop:20})}(),function(){for(var e=0;e<i.length;e++){var t=n.create(".text");t.fontStyle("Lato",27,Config.UI_COLOR),t.css({position:"relative",display:"block",width:"100%",marginBottom:20,fontWeight:"400",textAlign:"left",lineHeight:"1.45",textShadow:"0 1px 1px rgba(0, 0, 0, 0.8)"}),t.html(i[e]),r.push(t)}}(),e.animateIn=function(){e.visible();for(var t=0;t<r.length;t++)r[t].css({opacity:0}).transform({z:-150}).tween({z:-50,x:-10,opacity:1},2e3,"easeOutCubic",200*t)},e.animateOut=function(){for(var e=0;e<r.length;e++)r[e].tween({z:-100,opacity:0},300,"easeOutCubic",100*e)},e}return inherits(t,e),t}(Interface),UIAboutTitle=function(e){function t(){classCallCheck(this,t);var e=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"UIAboutTitle")),n=e,i=160,r=void 0;return function(){n.invisible().enable3D(),n.fontStyle("Titillium Web",i,Config.UI_COLOR),n.css({position:"relative",display:"block",height:i,fontWeight:"700",textAlign:"left",letterSpacing:-4,lineHeight:i,textShadow:"0 1px 1px rgba(0, 0, 0, 0.8)"}),n.text("Alien.js"),r=n.split(".")}(),e.animateIn=function(){e.visible();for(var t=0;t<r.length;t++)r[t].transform({z:-100}).css({opacity:0}).tween({z:100-50*t,opacity:1},4e3,"easeOutBack",200*t)},e.animateOut=function(){for(var e=0;e<r.length;e++)r[e].tween({z:-50-50*e,opacity:0},700,"easeOutCubic",100*e)},e}return inherits(t,e),t}(Interface),UIAbout=function(e){function t(){function e(){l.lerp(Mouse,.05),o.rotationY=Utils.convertRange(l.x,0,Stage.width,8,-8),o.rotationX=Utils.convertRange(l.y,0,Stage.height,-4,4),o.transform()}function n(){Stage.events.fire(Events.CLOSE_ABOUT)}function i(){var e=Utils.convertRange(Stage.width,0,1700,0,1.1,!0),t=Utils.convertRange(Stage.height,0,1500,0,1.1,!0);o.scale=Math.min(e,t),o.transform()}classCallCheck(this,t);var r=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,"UIAbout")),a=r,o=void 0,s=void 0,u=void 0,c=void 0,l=new DynamicObject({x:Mouse.x,y:Mouse.y});return function(){a.size("100%").enable3D(2e3),a.click(n),(o=a.create(".wrapper")).size(800,650).center().enable3D(),s=o.initClass(UIAboutTitle),u=o.initClass(UIAboutCopy),c=o.initClass(UIAboutIcons)}(),function(){window.events.add(Events.RESIZE,i)}(),i(),r.startRender(e),Delayed(function(){return r.animateIn()},300),r.animateIn=function(){Delayed(s.animateIn,200),Delayed(u.animateIn,800),Delayed(c.animateIn,1200),o.z=-300,TweenManager.tween(o,{z:0},7e3,"easeOutCubic")},r.animateOut=function(e){s.animateOut(),u.animateOut(),c.animateOut(),Delayed(e,1e3)},r}return inherits(t,e),t}(Interface),Main=function e(){function t(){}function n(){Stage.events.fire(Events.OPEN_ABOUT)}function i(){Stage.hit.hide(),a=Stage.initClass(UIAbout)}function r(){Stage.hit.show(),a&&a.animateOut(function(){a&&(a=a.destroy())})}classCallCheck(this,e);var a=void 0;!function(){Stage.size("100%"),Stage.interact(t,n),Mouse.capture(),Mouse.x=Stage.width/2,Mouse.y=Stage.height/2}(),function(){Stage.events.add(Events.OPEN_ABOUT,i),Stage.events.add(Events.CLOSE_ABOUT,r)}(),i()};new Main;
