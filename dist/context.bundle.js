(()=>{"use strict";var e,t,n,i,c,o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=e,c=t,o={};o[i]=c,chrome.storage.sync.set(o,n)},l=0,a=(e=document.createElement("div"),t=document.createElement("button"),n=document.createElement("button"),i=document.createElement("img"),c=document.createElement("img"),e.id="features-container",t.id="highlight-feat",n.id="notes-feat",i.src="https://img.icons8.com/fluent-systems-regular/48/000000/chisel-tip-marker.png",c.src="https://img.icons8.com/dotty/80/000000/notepad.png",t.className="feature-button",n.className="feature-button",i.className="icon",c.className="icon",e.appendChild(t),e.appendChild(n),t.appendChild(i),n.appendChild(c),t.addEventListener("click",(function(){(function(e,t){try{return chrome.storage.sync.get(["selection"],void 0)}catch(e){return null}})()||alert("!warn: highlight something with your mouse first")})),n.addEventListener("click",(function(e){var t,n,i,c,o,a,s,d,m,r,u;t=e.pageX,n=e.pageY,i=document.querySelector("body"),c=document.createElement("div"),o=document.createElement("textarea"),a=document.createElement("button"),s=document.createElement("img"),d=document.createElement("button"),m=document.createElement("img"),r=document.createElement("button"),u=document.createElement("img"),c.id="note-".concat(l+=1),c.className="sticky-notes",o.className="note-textarea",a.className="edit-icon-container",s.className="edit-icon",d.className="edit-icon-container",m.className="edit-icon",r.className="note-icon-container",u.className="note-icon",i.appendChild(c),c.appendChild(o),c.appendChild(a),c.appendChild(d),a.appendChild(s),d.appendChild(m),i.appendChild(r),r.appendChild(u),s.src="https://img.icons8.com/fluent-systems-regular/24/000000/close-window.png",m.src="https://img.icons8.com/fluent-systems-filled/24/000000/trash.png",u.src="https://img.icons8.com/wired/64/000000/note.png",a.addEventListener("click",(function(){!function(e,t){e.style.visibility="hidden",t.style.visibility="visible"}(c,r)})),d.addEventListener("click",(function(){!function(e,t,n){e.removeChild(t),e.removeChild(n)}(i,c,r)})),r.addEventListener("click",(function(){!function(e,t){e.style.visibility="visible",t.style.visibility="hidden"}(c,r)})),c.style.left="".concat(t,"px"),c.style.top="".concat(n,"px"),r.style.left="".concat(t,"px"),r.style.top="".concat(n,"px")})),e);document.getElementsByTagName("body")[0].appendChild(a);var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(t){var n=t.getRangeAt(0).getBoundingClientRect(),i=n.right,c=n.top,o=document.documentElement.scrollLeft,l=document.documentElement.scrollTop;a.style.left="".concat(i+o-1,"px"),a.style.top="".concat(c+l-a.offsetHeight-3,"px")}else a.style.left="".concat(e.pageX+1,"px"),a.style.top="".concat(e.pageY-a.offsetHeight-5,"px");a.style.visibility="visible"};window.addEventListener("click",(function(e){var t=function(){var e=null;console.log("active element:",document.activeElement.tagName);var t=document.activeElement.tagName;if("INPUT"===t||"TEXTAREA"===t)return null;if(window.getSelection?e=window.getSelection():document.getSelection?e=document.getSelection():document.selection&&(e=document.selection.createRange()),"Range"!==e.type&&(e=null),e){var n=e.text?e.text:e.toString();o("selectionText",n)}return o("selection",e),e}();t?s(e,t):a.style.visibility="hidden"})),window.addEventListener("contextmenu",(function(e){s(e)}))})();