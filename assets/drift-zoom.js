/* START DRIFT FUNCTION */

  (function(__wpcc){__wpcc.d=__wpcc.d||{};__wpcc.d.scope={};__wpcc.d.createTemplateTagFirstArg=function(a){return a.raw=a};__wpcc.d.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};__wpcc.d.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};__wpcc.d.global=__wpcc.d.getGlobal(this);var g;
  "undefined"===typeof g&&(g=function(){});g.p="";}).call(this || window, (window.__wpcc = window.__wpcc || {}));

  (function(__wpcc){var r=function(a){return h?a instanceof HTMLElement:a&&"object"===typeof a&&null!==a&&1===a.nodeType&&"string"===typeof a.nodeName},t=function(a,b){b.forEach(function(c){a.classList.add(c)})},u=function(a,b){b.forEach(function(c){a.classList.remove(c)})},x=function(){throw Error("Missing parameter");},y=function(a){this.isShowing=!1;var b=void 0===a.namespace?null:a.namespace,c=void 0===a.zoomFactor?x():a.zoomFactor;a=void 0===a.containerEl?x():a.containerEl;this.settings={namespace:b,zoomFactor:c,
  containerEl:a};this.openClasses=this._buildClasses("open");this._buildElement()},z=function(a){a=void 0===a?{}:a;this._show=this._show.bind(this);this._hide=this._hide.bind(this);this._handleEntry=this._handleEntry.bind(this);this._handleMovement=this._handleMovement.bind(this);var b=a;a=void 0===b.el?x():b.el;var c=void 0===b.zoomPane?x():b.zoomPane,e=void 0===b.sourceAttribute?x():b.sourceAttribute,f=void 0===b.handleTouch?x():b.handleTouch,q=void 0===b.onShow?null:b.onShow,k=void 0===b.onHide?
  null:b.onHide,v=void 0===b.hoverDelay?0:b.hoverDelay,w=void 0===b.touchDelay?0:b.touchDelay,l=void 0===b.hoverBoundingBox?x():b.hoverBoundingBox,m=void 0===b.touchBoundingBox?x():b.touchBoundingBox,n=void 0===b.namespace?null:b.namespace,p=void 0===b.zoomFactor?x():b.zoomFactor;b=void 0===b.boundingBoxContainer?x():b.boundingBoxContainer;this.settings={el:a,zoomPane:c,sourceAttribute:e,handleTouch:f,onShow:q,onHide:k,hoverDelay:v,touchDelay:w,hoverBoundingBox:l,touchBoundingBox:m,namespace:n,zoomFactor:p,
  boundingBoxContainer:b};if(this.settings.hoverBoundingBox||this.settings.touchBoundingBox)this.boundingBox=new y({namespace:this.settings.namespace,zoomFactor:this.settings.zoomFactor,containerEl:this.settings.boundingBoxContainer});this.enabled=!0;this._bindEvents()},A=function(a){a=void 0===a?{}:a;this._completeShow=this._completeShow.bind(this);this._completeHide=this._completeHide.bind(this);this._handleLoad=this._handleLoad.bind(this);this.isShowing=!1;var b=void 0===a.container?null:a.container,
  c=void 0===a.zoomFactor?x():a.zoomFactor,e=void 0===a.inline?x():a.inline,f=void 0===a.namespace?null:a.namespace,q=void 0===a.showWhitespaceAtEdges?x():a.showWhitespaceAtEdges,k=void 0===a.containInline?x():a.containInline;this.settings={container:b,zoomFactor:c,inline:e,namespace:f,showWhitespaceAtEdges:q,containInline:k,inlineOffsetX:void 0===a.inlineOffsetX?0:a.inlineOffsetX,inlineOffsetY:void 0===a.inlineOffsetY?0:a.inlineOffsetY,inlineContainer:void 0===a.inlineContainer?document.body:a.inlineContainer};
  this.openClasses=this._buildClasses("open");this.openingClasses=this._buildClasses("opening");this.closingClasses=this._buildClasses("closing");this.inlineClasses=this._buildClasses("inline");this.loadingClasses=this._buildClasses("loading");this._buildElement()},B=function(a,b){b=void 0===b?{}:b;this.VERSION="1.4.3";this.triggerEl=a;this.destroy=this.destroy.bind(this);if(!r(this.triggerEl))throw new TypeError("`new Drift` requires a DOM element as its first argument.");a=b.namespace||null;var c=
  b.showWhitespaceAtEdges||!1,e=b.containInline||!1,f=b.inlineOffsetX||0,q=b.inlineOffsetY||0,k=b.inlineContainer||document.body,v=b.sourceAttribute||"data-zoom",w=b.zoomFactor||3,l=void 0===b.paneContainer?document.body:b.paneContainer,m=b.inlinePane||375,n="handleTouch"in b?!!b.handleTouch:!0,p=b.onShow||null,E=b.onHide||null,F="injectBaseStyles"in b?!!b.injectBaseStyles:!0,G=b.hoverDelay||0,H=b.touchDelay||0,I=b.hoverBoundingBox||!1,J=b.touchBoundingBox||!1;b=b.boundingBoxContainer||document.body;
  if(!0!==m&&!r(l))throw new TypeError("`paneContainer` must be a DOM element when `inlinePane !== true`");if(!r(k))throw new TypeError("`inlineContainer` must be a DOM element");this.settings={namespace:a,showWhitespaceAtEdges:c,containInline:e,inlineOffsetX:f,inlineOffsetY:q,inlineContainer:k,sourceAttribute:v,zoomFactor:w,paneContainer:l,inlinePane:m,handleTouch:n,onShow:p,onHide:E,injectBaseStyles:F,hoverDelay:G,touchDelay:H,hoverBoundingBox:I,touchBoundingBox:J,boundingBoxContainer:b};this.settings.injectBaseStyles&&
  !document.querySelector(".drift-base-styles")&&(b=document.createElement("style"),b.type="text/css",b.classList.add("drift-base-styles"),b.appendChild(document.createTextNode(".drift-bounding-box,.drift-zoom-pane{position:absolute;pointer-events:none}@keyframes noop{0%{zoom:1}}@-webkit-keyframes noop{0%{zoom:1}}.drift-zoom-pane.drift-open{display:block}.drift-zoom-pane.drift-closing,.drift-zoom-pane.drift-opening{animation:noop 1ms;-webkit-animation:noop 1ms}.drift-zoom-pane{overflow:hidden;width:100%;height:100%;top:0;left:0}.drift-zoom-pane-loader{display:none}.drift-zoom-pane img{position:absolute;display:block;max-width:none;max-height:none}")),
  a=document.head,a.insertBefore(b,a.firstChild));this._buildZoomPane();this._buildTrigger()},h="object"===typeof HTMLElement;y.prototype._buildClasses=function(a){var b=["drift-"+a],c=this.settings.namespace;c&&b.push(c+"-"+a);return b};y.prototype._buildElement=function(){this.el=document.createElement("div");t(this.el,this._buildClasses("bounding-box"))};y.prototype.show=function(a,b){this.isShowing=!0;this.settings.containerEl.appendChild(this.el);var c=this.el.style;c.width=Math.round(a/this.settings.zoomFactor)+"px";c.height=Math.round(b/this.settings.zoomFactor)+"px";t(this.el,this.openClasses)};
  y.prototype.hide=function(){this.isShowing&&this.settings.containerEl.removeChild(this.el);this.isShowing=!1;u(this.el,this.openClasses)};
  y.prototype.setPosition=function(a,b,c){var e=window.pageXOffset,f=window.pageYOffset;a=c.left+a*c.width-this.el.clientWidth/2+e;b=c.top+b*c.height-this.el.clientHeight/2+f;a<c.left+e?a=c.left+e:a+this.el.clientWidth>c.left+c.width+e&&(a=c.left+c.width-this.el.clientWidth+e);b<c.top+f?b=c.top+f:b+this.el.clientHeight>c.top+c.height+f&&(b=c.top+c.height-this.el.clientHeight+f);this.el.style.left=a+"px";this.el.style.top=b+"px"};z.prototype._preventDefault=function(a){a.preventDefault()};z.prototype._preventDefaultAllowTouchScroll=function(a){this.settings.touchDelay&&this._isTouchEvent(a)&&!this.isShowing||a.preventDefault()};z.prototype._isTouchEvent=function(a){return!!a.touches};
  z.prototype._bindEvents=function(){this.settings.el.addEventListener("mouseenter",this._handleEntry,!1);this.settings.el.addEventListener("mouseleave",this._hide,!1);this.settings.el.addEventListener("mousemove",this._handleMovement,!1);this.settings.handleTouch?(this.settings.el.addEventListener("touchstart",this._handleEntry,!1),this.settings.el.addEventListener("touchend",this._hide,!1),this.settings.el.addEventListener("touchmove",this._handleMovement,!1)):(this.settings.el.addEventListener("touchstart",
  this._preventDefault,!1),this.settings.el.addEventListener("touchend",this._preventDefault,!1),this.settings.el.addEventListener("touchmove",this._preventDefault,!1))};
  z.prototype._unbindEvents=function(){this.settings.el.removeEventListener("mouseenter",this._handleEntry,!1);this.settings.el.removeEventListener("mouseleave",this._hide,!1);this.settings.el.removeEventListener("mousemove",this._handleMovement,!1);this.settings.handleTouch?(this.settings.el.removeEventListener("touchstart",this._handleEntry,!1),this.settings.el.removeEventListener("touchend",this._hide,!1),this.settings.el.removeEventListener("touchmove",this._handleMovement,!1)):(this.settings.el.removeEventListener("touchstart",
  this._preventDefault,!1),this.settings.el.removeEventListener("touchend",this._preventDefault,!1),this.settings.el.removeEventListener("touchmove",this._preventDefault,!1))};z.prototype._handleEntry=function(a){this._preventDefaultAllowTouchScroll(a);this._lastMovement=a;"mouseenter"==a.type&&this.settings.hoverDelay?this.entryTimeout=setTimeout(this._show,this.settings.hoverDelay):this.settings.touchDelay?this.entryTimeout=setTimeout(this._show,this.settings.touchDelay):this._show()};
  z.prototype._show=function(){if(this.enabled){var a=this.settings.onShow;a&&"function"===typeof a&&a();this.settings.zoomPane.show(this.settings.el.getAttribute(this.settings.sourceAttribute),this.settings.el.clientWidth,this.settings.el.clientHeight);this._lastMovement&&((a=this._lastMovement.touches)&&this.settings.touchBoundingBox||!a&&this.settings.hoverBoundingBox)&&this.boundingBox.show(this.settings.zoomPane.el.clientWidth,this.settings.zoomPane.el.clientHeight);this._handleMovement()}};
  z.prototype._hide=function(a){a&&this._preventDefaultAllowTouchScroll(a);this._lastMovement=null;this.entryTimeout&&clearTimeout(this.entryTimeout);this.boundingBox&&this.boundingBox.hide();(a=this.settings.onHide)&&"function"===typeof a&&a();this.settings.zoomPane.hide()};
  z.prototype._handleMovement=function(a){if(a)this._preventDefaultAllowTouchScroll(a),this._lastMovement=a;else if(this._lastMovement)a=this._lastMovement;else return;if(a.touches){a=a.touches[0];var b=a.clientX;var c=a.clientY}else b=a.clientX,c=a.clientY;a=this.settings.el.getBoundingClientRect();b=(b-a.left)/this.settings.el.clientWidth;c=(c-a.top)/this.settings.el.clientHeight;this.boundingBox&&this.boundingBox.setPosition(b,c,a);this.settings.zoomPane.setPosition(b,c,a)};
  __wpcc.d.global.Object.defineProperties(z.prototype,{isShowing:{configurable:!0,enumerable:!0,get:function(){return this.settings.zoomPane.isShowing}}});var C=document.createElement("div").style,D="undefined"===typeof document?!1:"animation"in C||"webkitAnimation"in C;A.prototype._buildClasses=function(a){var b=["drift-"+a],c=this.settings.namespace;c&&b.push(c+"-"+a);return b};A.prototype._buildElement=function(){this.el=document.createElement("div");t(this.el,this._buildClasses("zoom-pane"));var a=document.createElement("div");t(a,this._buildClasses("zoom-pane-loader"));this.el.appendChild(a);this.imgEl=document.createElement("img");this.el.appendChild(this.imgEl)};
  A.prototype._setImageURL=function(a){this.imgEl.setAttribute("src",a)};A.prototype._setImageSize=function(a,b){this.imgEl.style.width=a*this.settings.zoomFactor+"px";this.imgEl.style.height=b*this.settings.zoomFactor+"px"};
  A.prototype.setPosition=function(a,b,c){var e=this.imgEl.offsetWidth,f=this.imgEl.offsetHeight,q=this.el.offsetWidth,k=this.el.offsetHeight,v=q/2-e*a,w=k/2-f*b,l=q-e,m=k-f,n=0<l,p=0<m;f=n?l/2:0;e=p?m/2:0;l=n?l/2:l;m=p?m/2:m;this.el.parentElement===this.settings.inlineContainer&&(p=window.pageXOffset,n=window.pageYOffset,a=c.left+a*c.width-q/2+this.settings.inlineOffsetX+p,b=c.top+b*c.height-k/2+this.settings.inlineOffsetY+n,this.settings.containInline&&(a<c.left+p?a=c.left+p:a+q>c.left+c.width+p&&
  (a=c.left+c.width-q+p),b<c.top+n?b=c.top+n:b+k>c.top+c.height+n&&(b=c.top+c.height-k+n)),this.el.style.left=a+"px",this.el.style.top=b+"px");this.settings.showWhitespaceAtEdges||(v>f?v=f:v<l&&(v=l),w>e?w=e:w<m&&(w=m));this.imgEl.style.transform="translate("+v+"px, "+w+"px)";this.imgEl.style.webkitTransform="translate("+v+"px, "+w+"px)"};
  A.prototype._removeListenersAndResetClasses=function(){this.el.removeEventListener("animationend",this._completeShow,!1);this.el.removeEventListener("animationend",this._completeHide,!1);this.el.removeEventListener("webkitAnimationEnd",this._completeShow,!1);this.el.removeEventListener("webkitAnimationEnd",this._completeHide,!1);u(this.el,this.openClasses);u(this.el,this.closingClasses)};
  A.prototype.show=function(a,b,c){this._removeListenersAndResetClasses();this.isShowing=!0;t(this.el,this.openClasses);this.imgEl.getAttribute("src")!=a&&(t(this.el,this.loadingClasses),this.imgEl.addEventListener("load",this._handleLoad,!1),this._setImageURL(a));this._setImageSize(b,c);this._isInline?this._showInline():this._showInContainer();D&&(this.el.addEventListener("animationend",this._completeShow,!1),this.el.addEventListener("webkitAnimationEnd",this._completeShow,!1),t(this.el,this.openingClasses))};
  A.prototype._showInline=function(){this.settings.inlineContainer.appendChild(this.el);t(this.el,this.inlineClasses)};A.prototype._showInContainer=function(){this.settings.container.appendChild(this.el)};A.prototype.hide=function(){this._removeListenersAndResetClasses();this.isShowing=!1;D?(this.el.addEventListener("animationend",this._completeHide,!1),this.el.addEventListener("webkitAnimationEnd",this._completeHide,!1),t(this.el,this.closingClasses)):(u(this.el,this.openClasses),u(this.el,this.inlineClasses))};
  A.prototype._completeShow=function(){this.el.removeEventListener("animationend",this._completeShow,!1);this.el.removeEventListener("webkitAnimationEnd",this._completeShow,!1);u(this.el,this.openingClasses)};
  A.prototype._completeHide=function(){this.el.removeEventListener("animationend",this._completeHide,!1);this.el.removeEventListener("webkitAnimationEnd",this._completeHide,!1);u(this.el,this.openClasses);u(this.el,this.closingClasses);u(this.el,this.inlineClasses);this.el.style="";this.el.parentElement===this.settings.container?this.settings.container.removeChild(this.el):this.el.parentElement===this.settings.inlineContainer&&this.settings.inlineContainer.removeChild(this.el)};
  A.prototype._handleLoad=function(){this.imgEl.removeEventListener("load",this._handleLoad,!1);u(this.el,this.loadingClasses)};__wpcc.d.global.Object.defineProperties(A.prototype,{_isInline:{configurable:!0,enumerable:!0,get:function(){var a=this.settings.inline;return!0===a||"number"===typeof a&&window.innerWidth<=a}}});B.prototype._buildZoomPane=function(){this.zoomPane=new A({container:this.settings.paneContainer,zoomFactor:this.settings.zoomFactor,showWhitespaceAtEdges:this.settings.showWhitespaceAtEdges,containInline:this.settings.containInline,inline:this.settings.inlinePane,namespace:this.settings.namespace,inlineOffsetX:this.settings.inlineOffsetX,inlineOffsetY:this.settings.inlineOffsetY,inlineContainer:this.settings.inlineContainer})};
  B.prototype._buildTrigger=function(){this.trigger=new z({el:this.triggerEl,zoomPane:this.zoomPane,handleTouch:this.settings.handleTouch,onShow:this.settings.onShow,onHide:this.settings.onHide,sourceAttribute:this.settings.sourceAttribute,hoverDelay:this.settings.hoverDelay,touchDelay:this.settings.touchDelay,hoverBoundingBox:this.settings.hoverBoundingBox,touchBoundingBox:this.settings.touchBoundingBox,namespace:this.settings.namespace,zoomFactor:this.settings.zoomFactor,boundingBoxContainer:this.settings.boundingBoxContainer})};
  B.prototype.setZoomImageURL=function(a){this.zoomPane._setImageURL(a)};B.prototype.disable=function(){this.trigger.enabled=!1};B.prototype.enable=function(){this.trigger.enabled=!0};B.prototype.destroy=function(){this.trigger._hide();this.trigger._unbindEvents()};
  __wpcc.d.global.Object.defineProperties(B.prototype,{isShowing:{configurable:!0,enumerable:!0,get:function(){return this.zoomPane.isShowing}},zoomFactor:{configurable:!0,enumerable:!0,get:function(){return this.settings.zoomFactor},set:function(a){this.settings.zoomFactor=a;this.zoomPane.settings.zoomFactor=a;this.trigger.settings.zoomFactor=a;this.boundingBox.settings.zoomFactor=a}}});Object.defineProperty(B.prototype,"isShowing",{get:function(){return this.isShowing}});
  Object.defineProperty(B.prototype,"zoomFactor",{get:function(){return this.zoomFactor},set:function(a){this.zoomFactor=a}});B.prototype.setZoomImageURL=B.prototype.setZoomImageURL;B.prototype.disable=B.prototype.disable;B.prototype.enable=B.prototype.enable;B.prototype.destroy=B.prototype.destroy;window.Drift=B;}).call(this || window, (window.__wpcc = window.__wpcc || {}));

  //# sourceMappingURL=Drift.min.js.map

/* END DRIFT FUNCTION */




/* START DIRECTIVE FUNCTION */

  "use strict";

  /* @->zoom */

  if($(window).width() < 1100){
      zoom();
  }

  /* @-<zoom ********************************************************************/
  /******************************************************************************/
  function zoom(classNames, settings) {
      /* Settings */
      classNames = (typeof(classNames) !== 'undefined' && Object.keys(classNames).length ? classNames : {});
      settings = (typeof(settings) !== 'undefined' && Object.keys(settings).length ? settings : {});

      var C_scaleDefault = settings["scaleDefault"] || 2; // Used on doubleclick, doubletap and resize
      var C_scaleDifference = settings["scaleDifference"] || 0.5; // Used on wheel zoom
      var C_scaleMax = settings["scaleMax"] || 10;
      var C_scaleMin = settings["scaleMin"] || 1;

      /* Selectors */
      var _active = classNames["active"] || "active";
      var _dataScale = "data-scale";
      var _dataTranslateX = "data-translate-x";
      var _dataTranslateY = "data-translate-y";
      var _transition = classNames["transition"] || "transition";
      var _visible = classNames["visible"] || "visible";
      var $container;
      var $element;
      var $zoom = document.getElementsByClassName(classNames["zoom"] || "zoom");

      /* Helpers */
      var capture = false;
      var doubleClickMonitor = [null];
      var containerHeight;
      var containerWidth;
      var containerOffsetX;
      var containerOffsetY;
      var initialScale;
      var elementHeight;
      var elementWidth;
      var heightDifference;
      var initialOffsetX;
      var initialOffsetY;
      var initialPinchDistance;
      var initialPointerOffsetX;
      var initialPointerOffsetX2;
      var initialPointerOffsetY;
      var initialPointerOffsetY2;
      var limitOffsetX;
      var limitOffsetY;
      var mousemoveCount = 0;
      var offset;
      var pinchOffsetX;
      var pinchOffsetY;
      var pointerOffsetX;
      var pointerOffsetX2;
      var pointerOffsetY;
      var pointerOffsetY2;
      var scaleDirection;
      var scaleDifference;
      var targetOffsetX;
      var targetOffsetY;
      var targetPinchDistance;
      var targetScale;
      var touchable = false;
      var touchCount;
      var touchmoveCount = 0;
      var doubleTapMonitor = [null];
      var widthDifference;

      /* EVENT - DOM ready ********************************************************/
      /****************************************************************************/
      for (var i = 0; i < $zoom.length; i++) {
          /* Initialize selectors */
          $container = $zoom[i];
          $element = $container.children[0];

          /* Set attributes */
          $element.setAttribute(_dataScale, 1);
          $element.setAttribute(_dataTranslateX, 0);
          $element.setAttribute(_dataTranslateY, 0);
      }

      /* EVENT - load - window ****************************************************/
      /****************************************************************************/
      window.addEventListener("load", function() {
          /* Wait for images to be loaded */
          for (var i = 0; i < $zoom.length; i++) {
              /* Initialize selectors */
              $container = $zoom[i];
              $element = $container.children[0];

              addClass($element, _visible);
          }

          /* EVENT - resize - window ************************************************/
          /**************************************************************************/
          window.addEventListener("resize", function() {
              for (var i = 0; i < $zoom.length; i++) {
                  /* Initialize selectors */
                  $container = $zoom[i];
                  $element = $container.children[0];

                  if (hasClass($container, _active) === false) {
                      continue;
                  }

                  /* Initialize helpers */
                  containerHeight = $container.clientHeight;
                  containerWidth = $container.clientWidth;
                  elementHeight = $element.clientHeight;
                  elementWidth = $element.clientWidth;
                  initialOffsetX = parseFloat($element.getAttribute(_dataTranslateX));
                  initialOffsetY = parseFloat($element.getAttribute(_dataTranslateY));
                  targetScale = C_scaleDefault;
                  limitOffsetX = ((elementWidth * targetScale) - containerWidth) / 2;
                  limitOffsetY = ((elementHeight * targetScale) - containerHeight) / 2;
                  targetOffsetX = (elementWidth * targetScale) > containerWidth ? minMax(initialOffsetX, limitOffsetX * (-1), limitOffsetX) : 0;
                  targetOffsetY = (elementHeight * targetScale) > containerHeight ? minMax(initialOffsetY, limitOffsetY * (-1), limitOffsetY) : 0;

                  if (targetScale === 1) {
                      removeClass($container, _active);
                  }

                  /* Set attributes */
                  $element.setAttribute(_dataScale, targetScale);
                  $element.setAttribute(_dataTranslateX, targetOffsetX);
                  $element.setAttribute(_dataTranslateY, targetOffsetY);

                  /* @->moveScaleElement */
                  moveScaleElement($element, targetOffsetX + "px", targetOffsetY + "px", targetScale);
              }
          });
      });

      /* EVENT - mousedown - $zoom ************************************************/
      /* **************************************************************************/
      massAddEventListener($zoom, "mousedown", mouseDown);

      /* EVENT - mouseenter - $zoom ***********************************************/
      /* **************************************************************************/
      massAddEventListener($zoom, "mouseenter", mouseEnter);

      /* EVENT - mouseleave - $zoom ***********************************************/
      /* **************************************************************************/
      massAddEventListener($zoom, "mouseleave", mouseLeave);

      /* EVENT - mousemove - document *********************************************/
      /****************************************************************************/
      document.addEventListener("mousemove", mouseMove);

      /* EVENT - mouseup - document ***********************************************/
      /****************************************************************************/
      document.addEventListener("mouseup", mouseUp);

      /* EVENT - touchstart - document ********************************************/
      /****************************************************************************/
      document.addEventListener("touchstart", function() {
          touchable = true;
      });

      /* EVENT - touchstart - $zoom ***********************************************/
      /* **************************************************************************/
      massAddEventListener($zoom, "touchstart", touchStart);

      /* EVENT - touchmove - document *********************************************/
      /****************************************************************************/
      document.addEventListener("touchmove", touchMove);

      /* EVENT - touchend - document **********************************************/
      /****************************************************************************/
      document.addEventListener("touchend", touchEnd);

      /* EVENT - wheel - $zoom ****************************************************/
      /****************************************************************************/
      massAddEventListener($zoom, "wheel", wheel);

      /* @-<mouseEnter ************************************************************/
      /****************************************************************************/
      function mouseEnter() {
          disableScroll();
      }

      /* @-<mouseLeave ************************************************************/
      /****************************************************************************/
      function mouseLeave() {
          enableScroll();
      }

      /* @-<mouseDown *************************************************************/
      /****************************************************************************/
      function mouseDown(e) {
          e.preventDefault();

          if (touchable === true || e.which !== 1) {
              return false;
          }

          /* Initialize selectors */
          $container = this;
          $element = this.children[0];

          /* Initialize helpers */
          initialPointerOffsetX = e.clientX;
          initialPointerOffsetY = e.clientY;

          /* Doubleclick */
          if (doubleClickMonitor[0] === null) {
              doubleClickMonitor[0] = e.target;
              doubleClickMonitor[1] = initialPointerOffsetX;
              doubleClickMonitor[2] = initialPointerOffsetY;

              setTimeout(function() {
                  doubleClickMonitor = [null];
              }, 300);
          } else if (doubleClickMonitor[0] === e.target && mousemoveCount <= 5 && isWithinRange(initialPointerOffsetX, doubleClickMonitor[1] - 10, doubleClickMonitor[1] + 10) === true && isWithinRange(initialPointerOffsetY, doubleClickMonitor[2] - 10, doubleClickMonitor[2] + 10) === true) {
              addClass($element, _transition);

              if (hasClass($container, _active) === true) {
                  /* Set attributes */
                  $element.setAttribute(_dataScale, 1);
                  $element.setAttribute(_dataTranslateX, 0);
                  $element.setAttribute(_dataTranslateY, 0);

                  removeClass($container, _active);

                  /* @->moveScaleElement */
                  moveScaleElement($element, 0, 0, 1);
              } else {
                  /* Set attributes */
                  $element.setAttribute(_dataScale, C_scaleDefault);
                  $element.setAttribute(_dataTranslateX, 0);
                  $element.setAttribute(_dataTranslateY, 0);

                  addClass($container, _active);

                  /* @->moveScaleElement */
                  moveScaleElement($element, 0, 0, C_scaleDefault);
              }

              setTimeout(function()
              {
                  removeClass($element, _transition);
              }, 200);

              doubleClickMonitor = [null];
              return false;
          }

          /* Initialize helpers */
          offset = $container.getBoundingClientRect();
          containerOffsetX = offset.left;
          containerOffsetY = offset.top;
          containerHeight = $container.clientHeight;
          containerWidth = $container.clientWidth
          elementHeight = $element.clientHeight;
          elementWidth = $element.clientWidth;
          initialOffsetX = parseFloat($element.getAttribute(_dataTranslateX));
          initialOffsetY = parseFloat($element.getAttribute(_dataTranslateY));
          initialScale = minMax(parseFloat($element.getAttribute(_dataScale)), C_scaleMin, C_scaleMax);

          mousemoveCount = 0;

          /* Set capture */
          capture = true;
      }

      /* @-<mouseMove *************************************************************/
      /****************************************************************************/
      function mouseMove(e) {
          if (touchable === true || capture === false) {
              return false;
          }

          /* Initialize helpers */
          pointerOffsetX = e.clientX;
          pointerOffsetY = e.clientY;
          targetScale = initialScale;
          limitOffsetX = ((elementWidth * targetScale) - containerWidth) / 2;
          limitOffsetY = ((elementHeight * targetScale) - containerHeight) / 2;
          targetOffsetX = (elementWidth * targetScale) <= containerWidth ? 0 : minMax(pointerOffsetX - (initialPointerOffsetX - initialOffsetX), limitOffsetX * (-1), limitOffsetX);
          targetOffsetY = (elementHeight * targetScale) <= containerHeight ? 0 : minMax(pointerOffsetY - (initialPointerOffsetY - initialOffsetY), limitOffsetY * (-1), limitOffsetY);
          mousemoveCount++;

          if (Math.abs(targetOffsetX) === Math.abs(limitOffsetX)) {
              initialOffsetX = targetOffsetX;
              initialPointerOffsetX = pointerOffsetX;
          }

          if (Math.abs(targetOffsetY) === Math.abs(limitOffsetY)) {
              initialOffsetY = targetOffsetY;
              initialPointerOffsetY = pointerOffsetY;
          }

          /* Set attributes */
          $element.setAttribute(_dataScale, targetScale);
          $element.setAttribute(_dataTranslateX, targetOffsetX);
          $element.setAttribute(_dataTranslateY, targetOffsetY);

          /* @->moveScaleElement */
          moveScaleElement($element, targetOffsetX + "px", targetOffsetY + "px", targetScale);
      }

      /* @-<mouseUp ***************************************************************/
      /****************************************************************************/
      function mouseUp() {
          if (touchable === true || capture === false) {
              return false;
          }

          /* Unset capture */
          capture = false;
      }

      /* @-<touchStart ************************************************************/
      /****************************************************************************/
      function touchStart(e) {
          //e.preventDefault();

          if (e.touches.length > 2) {
              return false;
          }

          /* Initialize selectors */
          $container = this;
          $element = this.children[0];

          /* Initialize helpers */
          offset = $container.getBoundingClientRect();
          containerOffsetX = offset.left;
          containerOffsetY = offset.top;
          containerHeight = $container.clientHeight;
          containerWidth = $container.clientWidth;
          elementHeight = $element.clientHeight;
          elementWidth = $element.clientWidth;
          initialPointerOffsetX = e.touches[0].clientX;
          initialPointerOffsetY = e.touches[0].clientY;
          initialScale = minMax(parseFloat($element.getAttribute(_dataScale)), C_scaleMin, C_scaleMax);
          touchCount = e.touches.length;

          if (touchCount === 1) /* Single touch */ {
              /* Doubletap */
              if (doubleTapMonitor[0] === null) {
                  doubleTapMonitor[0] = e.target;
                  doubleTapMonitor[1] = initialPointerOffsetX;
                  doubleTapMonitor[2] = initialPointerOffsetY;

                  setTimeout(function() {
                      doubleTapMonitor = [null];
                  }, 300);
              } else if (doubleTapMonitor[0] === e.target && touchmoveCount <= 1 && isWithinRange(initialPointerOffsetX, doubleTapMonitor[1] - 10, doubleTapMonitor[1] + 10) === true && isWithinRange(initialPointerOffsetY, doubleTapMonitor[2] - 10, doubleTapMonitor[2] + 10) === true) {
                  addClass($element, _transition);

                  if (hasClass($container, _active) === true) {
                      /* Set attributes */
                      $element.setAttribute(_dataScale, 1);
                      $element.setAttribute(_dataTranslateX, 0);
                      $element.setAttribute(_dataTranslateY, 0);

                      removeClass($container, _active);

                      /* @->moveScaleElement */
                      moveScaleElement($element, 0, 0, 1);
                  } else {
                      /* Set attributes */
                      $element.setAttribute(_dataScale, C_scaleDefault);
                      $element.setAttribute(_dataTranslateX, 0);
                      $element.setAttribute(_dataTranslateY, 0);

                      addClass($container, _active);

                      /* @->moveScaleElement */
                      moveScaleElement($element, 0, 0, C_scaleDefault);
                  }

                  setTimeout(function()
                  {
                      removeClass($element, _transition);
                  }, 200);

                  doubleTapMonitor = [null];
                  return false;
              }

              /* Initialize helpers */
              initialOffsetX = parseFloat($element.getAttribute(_dataTranslateX));
              initialOffsetY = parseFloat($element.getAttribute(_dataTranslateY));
          } else if (touchCount === 2) /* Pinch */ {
              /* Initialize helpers */
              initialOffsetX = parseFloat($element.getAttribute(_dataTranslateX));
              initialOffsetY = parseFloat($element.getAttribute(_dataTranslateY));
              initialPointerOffsetX2 = e.touches[1].clientX;
              initialPointerOffsetY2 = e.touches[1].clientY;
              pinchOffsetX = (initialPointerOffsetX + initialPointerOffsetX2) / 2;
              pinchOffsetY = (initialPointerOffsetY + initialPointerOffsetY2) / 2;
              initialPinchDistance = Math.sqrt(((initialPointerOffsetX - initialPointerOffsetX2) * (initialPointerOffsetX - initialPointerOffsetX2)) + ((initialPointerOffsetY - initialPointerOffsetY2) * (initialPointerOffsetY - initialPointerOffsetY2)));
          }

          touchmoveCount = 0;

          /* Set capture */
          capture = true;
      }

      /* @-<touchMove *************************************************************/
      /****************************************************************************/
      function touchMove(e) {
          e.preventDefault();

          if (capture === false) {
              return false;
          }

          /* Initialize helpers */
          pointerOffsetX = e.touches[0].clientX;
          pointerOffsetY = e.touches[0].clientY;
          touchCount = e.touches.length;
          touchmoveCount++;

          if (touchCount > 1) /* Pinch */ {
              pointerOffsetX2 = e.touches[1].clientX;
              pointerOffsetY2 = e.touches[1].clientY;
              targetPinchDistance = Math.sqrt(((pointerOffsetX - pointerOffsetX2) * (pointerOffsetX - pointerOffsetX2)) + ((pointerOffsetY - pointerOffsetY2) * (pointerOffsetY - pointerOffsetY2)));

              if (initialPinchDistance === null) {
                  initialPinchDistance = targetPinchDistance;
              }

              if (Math.abs(initialPinchDistance - targetPinchDistance) >= 1) {
                  /* Initialize helpers */
                  targetScale = minMax(targetPinchDistance / initialPinchDistance * initialScale, C_scaleMin, C_scaleMax);
                  limitOffsetX = ((elementWidth * targetScale) - containerWidth) / 2;
                  limitOffsetY = ((elementHeight * targetScale) - containerHeight) / 2;
                  scaleDifference = targetScale - initialScale;
                  targetOffsetX = (elementWidth * targetScale) <= containerWidth ? 0 : minMax(initialOffsetX - ((((((pinchOffsetX - containerOffsetX) - (containerWidth / 2)) - initialOffsetX) / (targetScale - scaleDifference))) * scaleDifference), limitOffsetX * (-1), limitOffsetX);
                  targetOffsetY = (elementHeight * targetScale) <= containerHeight ? 0 : minMax(initialOffsetY - ((((((pinchOffsetY - containerOffsetY) - (containerHeight / 2)) - initialOffsetY) / (targetScale - scaleDifference))) * scaleDifference), limitOffsetY * (-1), limitOffsetY);

                  if (targetScale > 1) {
                      addClass($container, _active);
                  } else {
                      removeClass($container, _active);
                  }

                  /* @->moveScaleElement */
                  moveScaleElement($element, targetOffsetX + "px", targetOffsetY + "px", targetScale);

                  /* Initialize helpers */
                  initialPinchDistance = targetPinchDistance;
                  initialScale = targetScale;
                  initialOffsetX = targetOffsetX;
                  initialOffsetY = targetOffsetY;
              }
          } else /* Single touch */ {
              /* Initialize helpers */
              targetScale = initialScale;
              limitOffsetX = ((elementWidth * targetScale) - containerWidth) / 2;
              limitOffsetY = ((elementHeight * targetScale) - containerHeight) / 2;
              targetOffsetX = (elementWidth * targetScale) <= containerWidth ? 0 : minMax(pointerOffsetX - (initialPointerOffsetX - initialOffsetX), limitOffsetX * (-1), limitOffsetX);
              targetOffsetY = (elementHeight * targetScale) <= containerHeight ? 0 : minMax(pointerOffsetY - (initialPointerOffsetY - initialOffsetY), limitOffsetY * (-1), limitOffsetY);

              if (Math.abs(targetOffsetX) === Math.abs(limitOffsetX)) {
                  initialOffsetX = targetOffsetX;
                  initialPointerOffsetX = pointerOffsetX;
              }

              if (Math.abs(targetOffsetY) === Math.abs(limitOffsetY)) {
                  initialOffsetY = targetOffsetY;
                  initialPointerOffsetY = pointerOffsetY;
              }

              /* Set attributes */
              $element.setAttribute(_dataScale, initialScale);
              $element.setAttribute(_dataTranslateX, targetOffsetX);
              $element.setAttribute(_dataTranslateY, targetOffsetY);

              /* @->moveScaleElement */
              moveScaleElement($element, targetOffsetX + "px", targetOffsetY + "px", targetScale);
          }
      }

      /* @-<touchEnd **************************************************************/
      /****************************************************************************/
      function touchEnd(e) {
          touchCount = e.touches.length;

          if (capture === false) {
              return false;
          }

          if (touchCount === 0) /* No touch */ {
              /* Set attributes */
              $element.setAttribute(_dataScale, initialScale);
              $element.setAttribute(_dataTranslateX, targetOffsetX);
              $element.setAttribute(_dataTranslateY, targetOffsetY);

              initialPinchDistance = null;
              capture = false;
          } else if (touchCount === 1) /* Single touch */ {
              initialPointerOffsetX = e.touches[0].clientX;
              initialPointerOffsetY = e.touches[0].clientY;
          } else if (touchCount > 1) /* Pinch */ {
              initialPinchDistance = null;
          }
      }

      /* @-<wheel *****************************************************************/
      /****************************************************************************/
      function wheel(e) {
          /* Initialize selectors */
          $container = this;
          $element = this.children[0];

          /* Initialize helpers */
          offset = $container.getBoundingClientRect();
          containerHeight = $container.clientHeight;
          containerWidth = $container.clientWidth;
          elementHeight = $element.clientHeight;
          elementWidth = $element.clientWidth;
          containerOffsetX = offset.left;
          containerOffsetY = offset.top;
          initialScale = minMax(parseFloat($element.getAttribute(_dataScale), C_scaleMin, C_scaleMax));
          initialOffsetX = parseFloat($element.getAttribute(_dataTranslateX));
          initialOffsetY = parseFloat($element.getAttribute(_dataTranslateY));
          pointerOffsetX = e.clientX;
          pointerOffsetY = e.clientY;
          scaleDirection = e.deltaY < 0 ? 1 : -1;
          scaleDifference = C_scaleDifference * scaleDirection;
          targetScale = initialScale + scaleDifference;

          /* Prevent scale overflow */
          if (targetScale < C_scaleMin || targetScale > C_scaleMax) {
              return false;
          }

          /* Set offset limits */
          limitOffsetX = ((elementWidth * targetScale) - containerWidth) / 2;
          limitOffsetY = ((elementHeight * targetScale) - containerHeight) / 2;

          if (targetScale <= 1) {
              targetOffsetX = 0;
              targetOffsetY = 0;
          } else {
              /* Set target offsets */
              targetOffsetX = (elementWidth * targetScale) <= containerWidth ? 0 : minMax(initialOffsetX - ((((((pointerOffsetX - containerOffsetX) - (containerWidth / 2)) - initialOffsetX) / (targetScale - scaleDifference))) * scaleDifference), limitOffsetX * (-1), limitOffsetX);
              targetOffsetY = (elementHeight * targetScale) <= containerHeight ? 0 : minMax(initialOffsetY - ((((((pointerOffsetY - containerOffsetY) - (containerHeight / 2)) - initialOffsetY) / (targetScale - scaleDifference))) * scaleDifference), limitOffsetY * (-1), limitOffsetY);
          }

          if (targetScale > 1) {
              addClass($container, _active);
          } else {
              removeClass($container, _active);
          }

          /* Set attributes */
          $element.setAttribute(_dataScale, targetScale);
          $element.setAttribute(_dataTranslateX, targetOffsetX);
          $element.setAttribute(_dataTranslateY, targetOffsetY);

          /* @->moveScaleElement */
          moveScaleElement($element, targetOffsetX + "px", targetOffsetY + "px", targetScale);
      }
  }

  /* Library ********************************************************************/
  /******************************************************************************/

  /* @-<addClass ****************************************************************/
  /******************************************************************************/
  function addClass($element, targetClass) {
      if (hasClass($element, targetClass) === false) {
          $element.className += " " + targetClass;
      }
  }

  /* @-<disableScroll ***********************************************************/
  /******************************************************************************/
  function disableScroll() {
      if (window.addEventListener) // older FF
      {
          window.addEventListener('DOMMouseScroll', preventDefault, false);
      }

      window.onwheel = preventDefault; // modern standard
      window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
      window.ontouchmove = preventDefault; // mobile
      document.onkeydown = preventDefaultForScrollKeys;
  }

  /* @-<enableScroll ************************************************************/
  /******************************************************************************/
  function enableScroll() {
      if (window.removeEventListener) {
          window.removeEventListener('DOMMouseScroll', preventDefault, false);
      }

      window.onmousewheel = document.onmousewheel = null;
      window.onwheel = null;
      window.ontouchmove = null;
      document.onkeydown = null;
  }

  /* @isWithinRange *************************************************************/
  /******************************************************************************/
  function isWithinRange(value, min, max) {
      if (value >= min && value <= max) {
          return true;
      } else {
          return false;
      }
  }

  /* @hasClass ******************************************************************/
  /******************************************************************************/
  function hasClass($element, targetClass) {
      var rgx = new RegExp("(?:^|\\s)" + targetClass + "(?!\\S)", "g");

      if ($element.className.match(rgx)) {
          return true;
      } else {
          return false;
      }
  }

  /* @-<massAddEventListener ****************************************************/
  /******************************************************************************/
  function massAddEventListener($elements, event, customFunction, useCapture) {
      var useCapture = useCapture || false;

      for (var i = 0; i < $elements.length; i++) {
          $elements[i].addEventListener(event, customFunction, useCapture);
      }
  }

  /* @-<minMax ******************************************************************/
  /******************************************************************************/
  function minMax(value, min, max) {
      if (value < min) {
          value = min;
      } else if (value > max) {
          value = max;
      }

      return value;
  }

  /* @-<moveScaleElement ********************************************************/
  /******************************************************************************/
  function moveScaleElement($element, targetOffsetX, targetOffsetY, targetScale) {
      $element.style.cssText = "-moz-transform : translate(" + targetOffsetX + ", " + targetOffsetY + ") scale(" + targetScale + "); -ms-transform : translate(" + targetOffsetX + ", " + targetOffsetY + ") scale(" + targetScale + "); -o-transform : translate(" + targetOffsetX + ", " + targetOffsetY + ") scale(" + targetScale + "); -webkit-transform : translate(" + targetOffsetX + ", " + targetOffsetY + ") scale(" + targetScale + "); transform : translate3d(" + targetOffsetX + ", " + targetOffsetY + ", 0) scale3d(" + targetScale + ", " + targetScale + ", 1);";
  }

  /* @-<preventDefault **********************************************************/
  /******************************************************************************/
  function preventDefault(e) {
      e = e || window.event;

      if (e.preventDefault) {
          e.preventDefault();
      }

      e.returnValue = false;
  }

  /* @preventDefaultForScrollKeys ***********************************************/
  /******************************************************************************/
  function preventDefaultForScrollKeys(e) {
      var keys = {
          37: 1,
          38: 1,
          39: 1,
          40: 1
      };

      if (keys[e.keyCode]) {
          preventDefault(e);
          return false;
      }
  }

  /* @removeClass ***************************************************************/
  /******************************************************************************/
  function removeClass($element, targetClass) {
      var rgx = new RegExp("(?:^|\\s)" + targetClass + "(?!\\S)", "g");

      $element.className = $element.className.replace(rgx, "");
  }

/* END DIRECTIVE FUNCTION */
