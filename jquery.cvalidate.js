/*
    Masked Input plugin for jQuery
    Copyright (c) 2007-2011 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license) 
    Version: 1.3
*/
(function(a){var b=(a.browser.msie?"paste":"input")+".mask",c=window.orientation!=undefined;a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn"},a.fn.extend({caret:function(a,b){if(this.length!=0){if(typeof a=="number"){b=typeof b=="number"?b:a;return this.each(function(){if(this.setSelectionRange)this.setSelectionRange(a,b);else if(this.createTextRange){var c=this.createTextRange();c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select()}})}if(this[0].setSelectionRange)a=this[0].selectionStart,b=this[0].selectionEnd;else if(document.selection&&document.selection.createRange){var c=document.selection.createRange();a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length}return{begin:a,end:b}}},unmask:function(){return this.trigger("unmask")},mask:function(d,e){if(!d&&this.length>0){var f=a(this[0]);return f.data(a.mask.dataName)()}e=a.extend({placeholder:"_",completed:null},e);var g=a.mask.definitions,h=[],i=d.length,j=null,k=d.length;a.each(d.split(""),function(a,b){b=="?"?(k--,i=a):g[b]?(h.push(new RegExp(g[b])),j==null&&(j=h.length-1)):h.push(null)});return this.trigger("unmask").each(function(){function v(a){var b=f.val(),c=-1;for(var d=0,g=0;d<k;d++)if(h[d]){l[d]=e.placeholder;while(g++<b.length){var m=b.charAt(g-1);if(h[d].test(m)){l[d]=m,c=d;break}}if(g>b.length)break}else l[d]==b.charAt(g)&&d!=i&&(g++,c=d);if(!a&&c+1<i)f.val(""),t(0,k);else if(a||c+1>=i)u(),a||f.val(f.val().substring(0,c+1));return i?d:j}function u(){return f.val(l.join("")).val()}function t(a,b){for(var c=a;c<b&&c<k;c++)h[c]&&(l[c]=e.placeholder)}function s(a){var b=a.which,c=f.caret();if(a.ctrlKey||a.altKey||a.metaKey||b<32)return!0;if(b){c.end-c.begin!=0&&(t(c.begin,c.end),p(c.begin,c.end-1));var d=n(c.begin-1);if(d<k){var g=String.fromCharCode(b);if(h[d].test(g)){q(d),l[d]=g,u();var i=n(d);f.caret(i),e.completed&&i>=k&&e.completed.call(f)}}return!1}}function r(a){var b=a.which;if(b==8||b==46||c&&b==127){var d=f.caret(),e=d.begin,g=d.end;g-e==0&&(e=b!=46?o(e):g=n(e-1),g=b==46?n(g):g),t(e,g),p(e,g-1);return!1}if(b==27){f.val(m),f.caret(0,v());return!1}}function q(a){for(var b=a,c=e.placeholder;b<k;b++)if(h[b]){var d=n(b),f=l[b];l[b]=c;if(d<k&&h[d].test(f))c=f;else break}}function p(a,b){if(!(a<0)){for(var c=a,d=n(b);c<k;c++)if(h[c]){if(d<k&&h[c].test(l[d]))l[c]=l[d],l[d]=e.placeholder;else break;d=n(d)}u(),f.caret(Math.max(j,a))}}function o(a){while(--a>=0&&!h[a]);return a}function n(a){while(++a<=k&&!h[a]);return a}var f=a(this),l=a.map(d.split(""),function(a,b){if(a!="?")return g[a]?e.placeholder:a}),m=f.val();f.data(a.mask.dataName,function(){return a.map(l,function(a,b){return h[b]&&a!=e.placeholder?a:null}).join("")}),f.attr("readonly")||f.one("unmask",function(){f.unbind(".mask").removeData(a.mask.dataName)}).bind("focus.mask",function(){m=f.val();var b=v();u();var c=function(){b==d.length?f.caret(0,b):f.caret(b)};(a.browser.msie?c:function(){setTimeout(c,0)})()}).bind("blur.mask",function(){v(),f.val()!=m&&f.change()}).bind("keydown.mask",r).bind("keypress.mask",s).bind(b,function(){setTimeout(function(){f.caret(v(!0))},0)}),v()})}})})(jQuery);
/*
    jquery.color.js
*/
(function(e,t){function h(e,t,n){var r=u[t.type]||{};if(e==null){return n||!t.def?null:t.def}e=r.floor?~~e:parseFloat(e);if(isNaN(e)){return t.def}if(r.mod){return(e+r.mod)%r.mod}return 0>e?0:r.max<e?r.max:e}function p(t){var n=s(),r=n._rgba=[];t=t.toLowerCase();c(i,function(e,i){var s,u=i.re.exec(t),a=u&&i.parse(u),f=i.space||"rgba";if(a){s=n[f](a);n[o[f].cache]=s[o[f].cache];r=n._rgba=s._rgba;return false}});if(r.length){if(r.join()==="0,0,0,0"){e.extend(r,l.transparent)}return n}return l[t]}function d(e,t,n){n=(n+1)%1;if(n*6<1){return e+(t-e)*n*6}if(n*2<1){return t}if(n*3<2){return e+(t-e)*(2/3-n)*6}return e}var n="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],s=e.Color=function(t,n,r,i){return new e.Color.fn.parse(t,n,r,i)},o={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},a=s.support={},f=e("<p>")[0],l,c=e.each;f.style.cssText="background-color:rgba(1,1,1,.5)";a.rgba=f.style.backgroundColor.indexOf("rgba")>-1;c(o,function(e,t){t.cache="_"+e;t.props.alpha={idx:3,type:"percent",def:1}});s.fn=e.extend(s.prototype,{parse:function(n,r,i,u){if(n===t){this._rgba=[null,null,null,null];return this}if(n.jquery||n.nodeType){n=e(n).css(r);r=t}var a=this,f=e.type(n),d=this._rgba=[];if(r!==t){n=[n,r,i,u];f="array"}if(f==="string"){return this.parse(p(n)||l._default)}if(f==="array"){c(o.rgba.props,function(e,t){d[t.idx]=h(n[t.idx],t)});return this}if(f==="object"){if(n instanceof s){c(o,function(e,t){if(n[t.cache]){a[t.cache]=n[t.cache].slice()}})}else{c(o,function(t,r){var i=r.cache;c(r.props,function(e,t){if(!a[i]&&r.to){if(e==="alpha"||n[e]==null){return}a[i]=r.to(a._rgba)}a[i][t.idx]=h(n[e],t,true)});if(a[i]&&e.inArray(null,a[i].slice(0,3))<0){a[i][3]=1;if(r.from){a._rgba=r.from(a[i])}}})}return this}},is:function(e){var t=s(e),n=true,r=this;c(o,function(e,i){var s,o=t[i.cache];if(o){s=r[i.cache]||i.to&&i.to(r._rgba)||[];c(i.props,function(e,t){if(o[t.idx]!=null){n=o[t.idx]===s[t.idx];return n}})}return n});return n},_space:function(){var e=[],t=this;c(o,function(n,r){if(t[r.cache]){e.push(n)}});return e.pop()},transition:function(e,t){var n=s(e),r=n._space(),i=o[r],a=this.alpha()===0?s("transparent"):this,f=a[i.cache]||i.to(a._rgba),l=f.slice();n=n[i.cache];c(i.props,function(e,r){var i=r.idx,s=f[i],o=n[i],a=u[r.type]||{};if(o===null){return}if(s===null){l[i]=o}else{if(a.mod){if(o-s>a.mod/2){s+=a.mod}else if(s-o>a.mod/2){s-=a.mod}}l[i]=h((o-s)*t+s,r)}});return this[r](l)},blend:function(t){if(this._rgba[3]===1){return this}var n=this._rgba.slice(),r=n.pop(),i=s(t)._rgba;return s(e.map(n,function(e,t){return(1-r)*i[t]+r*e}))},toRgbaString:function(){var t="rgba(",n=e.map(this._rgba,function(e,t){return e==null?t>2?1:0:e});if(n[3]===1){n.pop();t="rgb("}return t+n.join()+")"},toHslaString:function(){var t="hsla(",n=e.map(this.hsla(),function(e,t){if(e==null){e=t>2?1:0}if(t&&t<3){e=Math.round(e*100)+"%"}return e});if(n[3]===1){n.pop();t="hsl("}return t+n.join()+")"},toHexString:function(t){var n=this._rgba.slice(),r=n.pop();if(t){n.push(~~(r*255))}return"#"+e.map(n,function(e){e=(e||0).toString(16);return e.length===1?"0"+e:e}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}});s.fn.parse.prototype=s.fn;o.hsla.to=function(e){if(e[0]==null||e[1]==null||e[2]==null){return[null,null,null,e[3]]}var t=e[0]/255,n=e[1]/255,r=e[2]/255,i=e[3],s=Math.max(t,n,r),o=Math.min(t,n,r),u=s-o,a=s+o,f=a*.5,l,c;if(o===s){l=0}else if(t===s){l=60*(n-r)/u+360}else if(n===s){l=60*(r-t)/u+120}else{l=60*(t-n)/u+240}if(u===0){c=0}else if(f<=.5){c=u/a}else{c=u/(2-a)}return[Math.round(l)%360,c,f,i==null?1:i]};o.hsla.from=function(e){if(e[0]==null||e[1]==null||e[2]==null){return[null,null,null,e[3]]}var t=e[0]/360,n=e[1],r=e[2],i=e[3],s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;return[Math.round(d(o,s,t+1/3)*255),Math.round(d(o,s,t)*255),Math.round(d(o,s,t-1/3)*255),i]};c(o,function(n,i){var o=i.props,u=i.cache,a=i.to,f=i.from;s.fn[n]=function(n){if(a&&!this[u]){this[u]=a(this._rgba)}if(n===t){return this[u].slice()}var r,i=e.type(n),l=i==="array"||i==="object"?n:arguments,p=this[u].slice();c(o,function(e,t){var n=l[i==="object"?e:t.idx];if(n==null){n=p[t.idx]}p[t.idx]=h(n,t)});if(f){r=s(f(p));r[u]=p;return r}else{return s(p)}};c(o,function(t,i){if(s.fn[t]){return}s.fn[t]=function(s){var o=e.type(s),u=t==="alpha"?this._hsla?"hsla":"rgba":n,a=this[u](),f=a[i.idx],l;if(o==="undefined"){return f}if(o==="function"){s=s.call(this,f);o=e.type(s)}if(s==null&&i.empty){return this}if(o==="string"){l=r.exec(s);if(l){s=f+parseFloat(l[2])*(l[1]==="+"?1:-1)}}a[i.idx]=s;return this[u](a)}})});s.hook=function(t){var n=t.split(" ");c(n,function(t,n){e.cssHooks[n]={set:function(t,r){var i,o,u="";if(e.type(r)!=="string"||(i=p(r))){r=s(i||r);if(!a.rgba&&r._rgba[3]!==1){o=n==="backgroundColor"?t.parentNode:t;while((u===""||u==="transparent")&&o&&o.style){try{u=e.css(o,"backgroundColor");o=o.parentNode}catch(f){}}r=r.blend(u&&u!=="transparent"?u:"_default")}r=r.toRgbaString()}try{t.style[n]=r}catch(f){}}};e.fx.step[n]=function(t){if(!t.colorInit){t.start=s(t.elem,n);t.end=s(t.end);t.colorInit=true}e.cssHooks[n].set(t.elem,t.start.transition(t.end,t.pos))}})};s.hook(n);e.cssHooks.borderColor={expand:function(e){var t={};c(["Top","Right","Bottom","Left"],function(n,r){t["border"+r+"Color"]=e});return t}};l=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(jQuery);

(function($){
    $.fn.cvalidate = function(addReqMarker){
        //takes a form and gets its fields.
        addReqMarker = typeof addReqMarker !== 'undefined' ? addReqMarker : false;
        
        var req = [];
        var ph = [];
        var cond = [];

        function reverseArray(arr){
            var temp = []
            for (var i = arr.length -1; i >= 0; i--){
                temp.push(arr[i]);
            }
            return temp;
        }

        function validateCond(field, value, cnd){
            var out = {passed: true};
            if (value === '!any'){
                var item = $('input[name='+field+']');
                if(item.val().length > 0){
                    if (cnd.val().length <= 0){
                        out.passed = false;
                        out.cnd = cnd;
                        out.item = item;
                    }
                }
            } else {
                var item = $('input[name='+field+'][value='+value+']');
                if (item.is(':checked')){
                    if (cnd.val() === ''){
                        out.passed = false;
                        out.cnd = cnd;
                        out.item = item;
                    }
                }   
            }
            return out;
        }

        function addCond(fieldName, value, cndName){
            cond.push(
                {
                    field: fieldName,
                    value: value,
                    cnd: $('#'+cndName)
                }
            );
            var check = $('input[name="'+fieldName+'"]');
            var func = null;
            var cLabelSelector = 'label[for='+cndName+']';
            var cLabel = $(cLabelSelector);
            if (value === '!any'){
                var item = $('input[name='+fieldName+']');
                func = function(){
                    var cLabelSpan = cLabel.children('span');
                    if (item.val().length > 0){
                        if(cLabelSpan.length < 1){
                            // Doesn't have one. ADD EET!
                            cLabel.html('<span class="required">*</span>'+cLabel.html());
                        }
                    } else {
                        if(cLabelSpan.length > 0){
                            cLabelSpan.remove();
                        }
                    }
                };
                check.change(func);
            } else {
                var item = $('input[name='+fieldName+'][value="'+value+'"]');
                func = function(){
                    // add * to required field if it's not there already!
                    var cLabelSpan = cLabel.children('span');
                    if (item.is(':checked')){
                        // Check to see if the label has a span in it
                        if(cLabelSpan.length < 1){
                            // Doesn't have one. ADD EET!
                            cLabel.html('<span class="required">*</span>'+cLabel.html());
                        }
                    } else {
                        // check to see if the label has a span in it
                        if(cLabelSpan.length > 0){
                            cLabelSpan.remove();
                        }
                    }
                };
                check.each(function(){$(this).click(func);
                });
            }
            return cond;
        }

        this.find('input').each(function(){
            var name = $(this).attr('name');
            if ($(this).attr('required')){
                if (addReqMarker){
                    var label = $('label[for="'+name+'"]');
                    if (label.children('span').length <= 0){
                        label.html('<span class="required">*</span>'+label.html());
                    }
                }
                req.push($(this));  
            }

            if (name) {
                if (name.indexOf('phone') >= 0 || name.indexOf('Phone') >= 0 || $(this).attr('type')==='tel'){
                    ph.push($(this));
                    $(this).mask('(999) 999-9999');
                }
            }
            if($(this).attr('data-cond-trigger')){
                var fieldName = $(this).attr('name');
                var value = $(this).attr('data-cond-value');
                var cndName = $(this).attr('data-cond-target');
                var condArr = cndName.split(' ');
                condArr = reverseArray(condArr);
                for (var i = condArr.length - 1; i >= 0; i--) {
                    addCond(fieldName, value, condArr[i]);
                }
            }
        });

        this.find('select').each(function(){
            var name = $(this).attr('name');
            if ($(this).attr('required')){
                if(addReqMarker){
                    var label = $('label[for='+name+']');
                    if (label.children('span').length <=0){
                        label.html('<span class="required">*</span>'+label.html());
                    }
                }
                req.push($(this));
            }
            if($(this).attr('data-cond-trigger')){
                var fieldName = $(this).attr('name');
                var value = $(this).attr('data-cond-value');
                var cndName = $(this).attr('data-cond-target');
                addCond(fieldName, value, cndName);
            }
        });

        this.find('textarea').each(function(){
            var name = $(this).attr('name');
            if ($(this).attr('required')){
                if(addReqMarker){
                    var label = $('label[for='+name+']');
                    label.html('<span class="required">*</span>'+label.html());
                }
                req.push($(this));
            }
            if($(this).attr('data-cond-trigger')){
                var fieldName = $(this).attr('name');
                var value = $(this).attr('data-cond-value');
                var cndName = $(this).attr('data-cond-target');
                addCond(fieldName, value, cndName);
            }
        });

        req = reverseArray(req);
        cond = reverseArray(cond);

        this.submit(function(e){
            var firstInvalid = null;
            var firstCondInvalid = null;
            for (var i = req.length - 1; i >=0; i--){
                //check required
                var item = req[i];
                if (item.val().length <1){
                    if (!firstInvalid){
                        firstInvalid = item;
                    }
                }
            }
            for (var i = cond.length - 1; i>= 0; i--){
                var item = cond[i];
                var result = validateCond(item.field, item.value, item.cnd);
                if (!result.passed && !firstInvalid){
                    isCondInvalid = true;
                    firstInvalid = result.cnd;
                    firstCondInvalid = result.item;
                }
            }
            if (!firstInvalid){
                //Move along. Nothing to see here.
            } else {
                // HANDLE EET!
                var bgColor = firstInvalid.css('background-color');
                if (!bgColor) {
                    bgColor = "#FFFFFF";
                }
                $('html, body').animate({
                     scrollTop: firstInvalid.offset().top - 75
                     }, 
                     {
                        duration: 1000, 
                        complete: function(){
                            firstInvalid.animate({backgroundColor: jQuery.Color('#ff9999')},{
                                duration: 450,
                                complete: function(){
                                    firstInvalid.animate({backgroundColor: jQuery.Color(bgColor)},450);
                                }
                            });
                            if (firstCondInvalid !== null){
                                var ciBgColor = firstCondInvalid.css('background-color');
                                firstCondInvalid.animate({backgroundColor: jQuery.Color('#ff9999')},{
                                    duration: 450,
                                    complete: function(){
                                        firstCondInvalid.animate({backgroundColor: jQuery.Color(ciBgColor)},450);
                                    }
                                });
                            }
                            firstInvalid.focus();
                        }
                });
                e.preventDefault();
            }

        });
    }
})(jQuery);
