(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))L(p);new MutationObserver(p=>{for(const v of p)if(v.type==="childList")for(const x of v.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&L(x)}).observe(document,{childList:!0,subtree:!0});function m(p){const v={};return p.integrity&&(v.integrity=p.integrity),p.referrerPolicy&&(v.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?v.credentials="include":p.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function L(p){if(p.ep)return;p.ep=!0;const v=m(p);fetch(p.href,v)}})();const b=(w,a,m)=>{const L=w.sort(()=>Math.random()-.5),p=[];for(const v of L)p.push({groupName:a,groupDescription:m,secret:v});return p};var M={exports:{}},k;function O(){return k||(k=1,(function(w){var a=(function(){var m=String.fromCharCode,L="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",v={};function x(t,n){if(!v[t]){v[t]={};for(var c=0;c<t.length;c++)v[t][t.charAt(c)]=c}return v[t][n]}var f={compressToBase64:function(t){if(t==null)return"";var n=f._compress(t,6,function(c){return L.charAt(c)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(t){return t==null?"":t==""?null:f._decompress(t.length,32,function(n){return x(L,t.charAt(n))})},compressToUTF16:function(t){return t==null?"":f._compress(t,15,function(n){return m(n+32)})+" "},decompressFromUTF16:function(t){return t==null?"":t==""?null:f._decompress(t.length,16384,function(n){return t.charCodeAt(n)-32})},compressToUint8Array:function(t){for(var n=f.compress(t),c=new Uint8Array(n.length*2),r=0,i=n.length;r<i;r++){var g=n.charCodeAt(r);c[r*2]=g>>>8,c[r*2+1]=g%256}return c},decompressFromUint8Array:function(t){if(t==null)return f.decompress(t);for(var n=new Array(t.length/2),c=0,r=n.length;c<r;c++)n[c]=t[c*2]*256+t[c*2+1];var i=[];return n.forEach(function(g){i.push(m(g))}),f.decompress(i.join(""))},compressToEncodedURIComponent:function(t){return t==null?"":f._compress(t,6,function(n){return p.charAt(n)})},decompressFromEncodedURIComponent:function(t){return t==null?"":t==""?null:(t=t.replace(/ /g,"+"),f._decompress(t.length,32,function(n){return x(p,t.charAt(n))}))},compress:function(t){return f._compress(t,16,function(n){return m(n)})},_compress:function(t,n,c){if(t==null)return"";var r,i,g={},A={},S="",E="",d="",y=2,h=3,u=2,l=[],e=0,s=0,o;for(o=0;o<t.length;o+=1)if(S=t.charAt(o),Object.prototype.hasOwnProperty.call(g,S)||(g[S]=h++,A[S]=!0),E=d+S,Object.prototype.hasOwnProperty.call(g,E))d=E;else{if(Object.prototype.hasOwnProperty.call(A,d)){if(d.charCodeAt(0)<256){for(r=0;r<u;r++)e=e<<1,s==n-1?(s=0,l.push(c(e)),e=0):s++;for(i=d.charCodeAt(0),r=0;r<8;r++)e=e<<1|i&1,s==n-1?(s=0,l.push(c(e)),e=0):s++,i=i>>1}else{for(i=1,r=0;r<u;r++)e=e<<1|i,s==n-1?(s=0,l.push(c(e)),e=0):s++,i=0;for(i=d.charCodeAt(0),r=0;r<16;r++)e=e<<1|i&1,s==n-1?(s=0,l.push(c(e)),e=0):s++,i=i>>1}y--,y==0&&(y=Math.pow(2,u),u++),delete A[d]}else for(i=g[d],r=0;r<u;r++)e=e<<1|i&1,s==n-1?(s=0,l.push(c(e)),e=0):s++,i=i>>1;y--,y==0&&(y=Math.pow(2,u),u++),g[E]=h++,d=String(S)}if(d!==""){if(Object.prototype.hasOwnProperty.call(A,d)){if(d.charCodeAt(0)<256){for(r=0;r<u;r++)e=e<<1,s==n-1?(s=0,l.push(c(e)),e=0):s++;for(i=d.charCodeAt(0),r=0;r<8;r++)e=e<<1|i&1,s==n-1?(s=0,l.push(c(e)),e=0):s++,i=i>>1}else{for(i=1,r=0;r<u;r++)e=e<<1|i,s==n-1?(s=0,l.push(c(e)),e=0):s++,i=0;for(i=d.charCodeAt(0),r=0;r<16;r++)e=e<<1|i&1,s==n-1?(s=0,l.push(c(e)),e=0):s++,i=i>>1}y--,y==0&&(y=Math.pow(2,u),u++),delete A[d]}else for(i=g[d],r=0;r<u;r++)e=e<<1|i&1,s==n-1?(s=0,l.push(c(e)),e=0):s++,i=i>>1;y--,y==0&&(y=Math.pow(2,u),u++)}for(i=2,r=0;r<u;r++)e=e<<1|i&1,s==n-1?(s=0,l.push(c(e)),e=0):s++,i=i>>1;for(;;)if(e=e<<1,s==n-1){l.push(c(e));break}else s++;return l.join("")},decompress:function(t){return t==null?"":t==""?null:f._decompress(t.length,32768,function(n){return t.charCodeAt(n)})},_decompress:function(t,n,c){var r=[],i=4,g=4,A=3,S="",E=[],d,y,h,u,l,e,s,o={val:c(0),position:n,index:1};for(d=0;d<3;d+=1)r[d]=d;for(h=0,l=Math.pow(2,2),e=1;e!=l;)u=o.val&o.position,o.position>>=1,o.position==0&&(o.position=n,o.val=c(o.index++)),h|=(u>0?1:0)*e,e<<=1;switch(h){case 0:for(h=0,l=Math.pow(2,8),e=1;e!=l;)u=o.val&o.position,o.position>>=1,o.position==0&&(o.position=n,o.val=c(o.index++)),h|=(u>0?1:0)*e,e<<=1;s=m(h);break;case 1:for(h=0,l=Math.pow(2,16),e=1;e!=l;)u=o.val&o.position,o.position>>=1,o.position==0&&(o.position=n,o.val=c(o.index++)),h|=(u>0?1:0)*e,e<<=1;s=m(h);break;case 2:return""}for(r[3]=s,y=s,E.push(s);;){if(o.index>t)return"";for(h=0,l=Math.pow(2,A),e=1;e!=l;)u=o.val&o.position,o.position>>=1,o.position==0&&(o.position=n,o.val=c(o.index++)),h|=(u>0?1:0)*e,e<<=1;switch(s=h){case 0:for(h=0,l=Math.pow(2,8),e=1;e!=l;)u=o.val&o.position,o.position>>=1,o.position==0&&(o.position=n,o.val=c(o.index++)),h|=(u>0?1:0)*e,e<<=1;r[g++]=m(h),s=g-1,i--;break;case 1:for(h=0,l=Math.pow(2,16),e=1;e!=l;)u=o.val&o.position,o.position>>=1,o.position==0&&(o.position=n,o.val=c(o.index++)),h|=(u>0?1:0)*e,e<<=1;r[g++]=m(h),s=g-1,i--;break;case 2:return E.join("")}if(i==0&&(i=Math.pow(2,A),A++),r[s])S=r[s];else if(s===g)S=y+y.charAt(0);else return null;E.push(S),r[g++]=y+S.charAt(0),i--,y=S,i==0&&(i=Math.pow(2,A),A++)}}};return f})();w!=null?w.exports=a:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return a})})(M)),M.exports}var _=O();const T=w=>{const a=w.split("#");if(!(a.length<2))try{const m=_.decompressFromEncodedURIComponent(a[1]);return m?JSON.parse(m):void 0}catch{return}},B=(w,a)=>{const m=JSON.stringify(a),L=_.compressToEncodedURIComponent(m);return`${w}#${L}`};document.querySelector("#app").innerHTML=`
    <h1>Secret Assigner</h1>
    <h2>Create your secret group!</h2>
    <div>
        <p>Group Name:</p>
        <input type="text" id="name"></input>
    </div>
    <div>
        <p>Group Description (optional):</p>
        <textarea id="description" cols="30" rows="4"></textarea>
    </div>
    <div id="secrets">
        <p>Secrets:</p>
        <ul>
            <li>
                <input type="text" class="secret-input"></input>
            </li>
        </ul>
    </div>
    <button id="learn-more">Learn More</button>
    <button id="add-secret">Add Secret</button>
    <button id="generate-links">Generate Links</button>
    <div id="links"></div>
`;document.addEventListener("DOMContentLoaded",()=>{const w=window.location.href,a=T(w);a&&(document.querySelector("#app").innerHTML=`
            <h1>${a.groupName}</h1>
        `,a.groupDescription&&(document.querySelector("#app").innerHTML+=`
                <p>${a.groupDescription}</p>
            `),document.querySelector("#app").innerHTML+=`
            <h2>Your Secret:</h2>
            <p>${a.secret}</p>
        `)});const U=()=>{const w=document.getElementById("name").value,a=document.getElementById("description").value,m=document.getElementsByClassName("secret-input"),L=[];for(let f=0;f<m.length;f++){const t=m[f].value;t&&L.push(t)}const p=b(L,w,a),v=window.location.href.split("#")[0];let x="";for(let f=0;f<p.length;f++){const t=B(v,p[f]);x+=`
            <li><a href="${t}" target="_blank">Link ${f+1}</a></li>
        `}document.querySelector("#links").innerHTML=`
        <h2>Generated Links:</h2>
        <ul>
            ${x}
        </ul>
    `},q=()=>{const w=document.createElement("li"),a=document.createElement("input");a.type="text",a.className="secret-input",w.appendChild(a),document.getElementById("secrets").querySelector("ul").appendChild(w)},I=()=>{document.querySelector("#app").innerHTML=`
        <h1>About Secret Assigner</h1>
        <div>
            <p class="about-description">This application allows you to create groups with secret assignments. Each group member receives a unique link containing their assigned secret, the group name, and group description. </p>
            <p class="about-description">You don't need an account and there are no ads. All you need is the links generated. To learn more about this project, please visit https://github.com/f1nn3g4n/secret-assigner#.</p>
        </div>
        <button id="back-button">Back</button>
    `,document.getElementById("back-button").addEventListener("click",()=>{window.location.reload()})};document.getElementById("learn-more").addEventListener("click",I);document.getElementById("add-secret").addEventListener("click",q);document.getElementById("generate-links").addEventListener("click",U);
