!function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var e=/(?:^|\s)command-line(?:\s|$)/,t="command-line-prompt",n="".startsWith?function(e,t){return e.startsWith(t)}:function(e,t){return 0===e.indexOf(t)},a="".endsWith?function(e,t){return e.endsWith(t)}:function(e,t){var n=e.length;return e.substring(n-t.length,n)===t};Prism.hooks.add("before-highlight",(function(i){var o=r(i);if(!o.complete&&i.code){var s=i.element.parentElement;if(s&&/pre/i.test(s.nodeName)&&(e.test(s.className)||e.test(i.element.className))){var l=i.element.querySelector("."+t);l&&l.remove();var m=i.code.split("\n");o.numberOfLines=m.length;var u=o.outputLines=[],c=s.getAttribute("data-output"),d=s.getAttribute("data-filter-output");if(null!==c)c.split(",").forEach((function(e){var t=e.split("-"),n=parseInt(t[0],10),a=2===t.length?parseInt(t[1],10):n;if(!isNaN(n)&&!isNaN(a)){n<1&&(n=1),a>m.length&&(a=m.length),a--;for(var r=--n;r<=a;r++)u[r]=m[r],m[r]=""}}));else if(d)for(var p=0;p<m.length;p++)n(m[p],d)&&(u[p]=m[p].slice(d.length),m[p]="");for(var f=o.continuationLineIndicies=new Set,h=s.getAttribute("data-continuation-str"),v=s.getAttribute("data-filter-continuation"),g=0;g<m.length;g++){var b=m[g];b&&(h&&a(b,h)&&f.add(g+1),g>0&&v&&n(b,v)&&(m[g]=b.slice(v.length),f.add(g)))}i.code=m.join("\n")}else o.complete=!0}else o.complete=!0})),Prism.hooks.add("before-insert",(function(e){var t=r(e);if(!t.complete){for(var n=e.highlightedCode.split("\n"),a=t.outputLines||[],i=0,o=n.length;i<o;i++)a.hasOwnProperty(i)?n[i]='<span class="token output">'+Prism.util.encode(a[i])+"</span>":n[i]='<span class="token command">'+n[i]+"</span>";e.highlightedCode=n.join("\n")}})),Prism.hooks.add("complete",(function(n){if(function(e){return"command-line"in(e.vars=e.vars||{})}(n)){var a=r(n);if(!a.complete){var i=n.element.parentElement;e.test(n.element.className)&&(n.element.className=n.element.className.replace(e," ")),e.test(i.className)||(i.className+=" command-line");var o,s="",l=a.numberOfLines||0,m=b("data-prompt","");o=""!==m?'<span data-prompt="'+m+'"></span>':'<span data-user="'+b("data-user","user")+'" data-host="'+b("data-host","localhost")+'"></span>';for(var u=a.continuationLineIndicies||new Set,c='<span data-continuation-prompt="'+b("data-continuation-prompt",">")+'"></span>',d=0;d<l;d++)u.has(d)?s+=c:s+=o;var p=document.createElement("span");p.className=t,p.innerHTML=s;for(var f=a.outputLines||[],h=0,v=f.length;h<v;h++)if(f.hasOwnProperty(h)){var g=p.children[h];g.removeAttribute("data-user"),g.removeAttribute("data-host"),g.removeAttribute("data-prompt")}n.element.insertBefore(p,n.element.firstChild),a.complete=!0}}function b(e,t){return(i.getAttribute(e)||t).replace(/"/g,"&quot")}}))}function r(e){var t=e.vars=e.vars||{};return t["command-line"]=t["command-line"]||{}}}();