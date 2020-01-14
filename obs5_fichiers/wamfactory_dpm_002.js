window.wamf=function(){return{version:"20191030_01",account:function(e){typeof e=="string"&&/^\d+$/.test(e)===!0?this.account=e:this.account=""},querytyp:function(e){typeof e=="string"&&/^\d+$/.test(e)===!0?this.typ=e:this.typ=""},eventkey:function(e){typeof e=="string"?this.ekey=e:this.ekey=""},eventvalue:function(e){typeof e=="string"?this.evalue=e:this.evalue=""},pushWvar:function(z){"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(e){return 10>e?"0"+e:e}function this_value(){return this.valueOf()}function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o,u=gap,a=t[e];switch(a&&"object"==typeof a&&"function"==typeof a.toJSON&&(a=a.toJSON(e)),"function"==typeof rep&&(a=rep.call(t,e,a)),typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";if(gap+=indent,o=[],"[object Array]"===Object.prototype.toString.apply(a)){for(s=a.length,n=0;s>n;n+=1)o[n]=str(n,a)||"null";return i=0===o.length?"[]":gap?"[\n"+gap+o.join(",\n"+gap)+"\n"+u+"]":"["+o.join(",")+"]",gap=u,i}if(rep&&"object"==typeof rep)for(s=rep.length,n=0;s>n;n+=1)"string"==typeof rep[n]&&(r=rep[n],i=str(r,a),i&&o.push(quote(r)+(gap?": ":":")+i));else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&o.push(quote(r)+(gap?": ":":")+i));return i=0===o.length?"{}":gap?"{\n"+gap+o.join(",\n"+gap)+"\n"+u+"}":"{"+o.join(",")+"}",gap=u,i}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,n){var r;if(gap="",indent="","number"==typeof n)for(r=0;n>r;r+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=t,!t||"function"==typeof t||"object"==typeof t&&"number"==typeof t.length)return str("",{"":e});throw new Error("JSON.stringify")}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&"object"==typeof i)for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),void 0!==r?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();if(z.constructor===Array){function unique(e){var t=[],n=e.length;for(var r=0;r<n;r++){for(var i=r+1;i<n;i++)e[r]===e[i]&&(i=++r);t.push(e[r])}return t}if(z[0].match(/(.*):(.*)/)===null){var Wvartmp=[],Wstrtmp="",Wn=0;for(Wn=0;Wn<z.length;Wn++)Wn%2===1?(Wstrtmp+=z[Wn],Wvartmp.push(Wstrtmp)):Wstrtmp=z[Wn]+":";z=Wvartmp}z=unique(z),z.sort();var Wkeys=[],Wkk=[],Wvv=[],Wkeysp="",Wvarstr="",Wvarval="",Wcountval=0,Wi=0,Wj=0;e:for(Wi=0;Wi<z.length;Wi++){Wkk=z[Wi].match(/(.*):/);while(Wkk[1].indexOf(":")>0)Wkktmp=Wkk[1].match(/(.*):/),Wkk[1]=Wkktmp[1];for(var Wj=0;Wj<Wkeys.length;Wj++)if(Wkeys[Wj]==Wkk[1])continue e;Wkeys.push(Wkk[1])}for(Wi=0;Wi<Wkeys.length;Wi++){Wi==0?Wvarstr='{"'+Wkeys[Wi]+'":':Wvarstr+='"'+Wkeys[Wi]+'":',Wkeysp="",Wvarval="",Wcountval=0;for(Wj=0;Wj<z.length;Wj++){Wkk=z[Wj].match(/(.*):/);while(Wkk[1].indexOf(":")>0)Wkktmp=Wkk[1].match(/(.*):/),Wkk[1]=Wkktmp[1];Wvv=z[Wj].match(/:(.*)/),Wkeysp=Wkk[1],Wkeysp==Wkk[1]&&Wkk[1]==Wkeys[Wi]&&(Wvarval==""?Wvarval='"'+Wvv[1]+'"':(Wvarval+=',"'+Wvv[1]+'"',Wcountval++))}Wcountval>0&&(Wvarval="["+Wvarval+"]"),Wi+1==Wkeys.length?Wvarstr+=Wvarval+"}":Wvarstr+=Wvarval+","}this.Wvar=JSON.parse(Wvarstr)}else this.Wvar=z},pageSend:function(){var e,t;typeof this.Wvar!="object"?e={}:e=this.Wvar,this.account!=""&&this.typ!=""&&(e.wamid=this.account,e.typ=this.typ,e.ref=encodeURIComponent(document.referrer),e.url=encodeURIComponent(document.URL),t=new Image,t.src="https://wf.frontend.weborama.fr/stream/?wamid="+this.account+"&Wvar="+encodeURIComponent(JSON.stringify(e))+"&d.r="+(new Date).getTime())},eventSend:function(e,t,n,r){window.wamf.querytyp(e),window.wamf.eventkey(t),window.wamf.eventvalue(n),typeof this.Wvar!="object"?WvarEvent={}:WvarEvent=this.Wvar,this.account!=""&&this.typ!=""&&this.ekey!=""&&this.evalue!=""&&(WvarEvent.wamid=this.account,WvarEvent.typ=this.typ,WvarEvent[this.ekey]=this.evalue,WvarEvent.ref=encodeURIComponent(document.referrer),WvarEvent.url=encodeURIComponent(document.URL),WimEvent=new Image,WimEvent.src="https://wf.frontend.weborama.fr/stream/?wamid="+this.account+"&Wvar="+encodeURIComponent(JSON.stringify(WvarEvent))+"&d.r="+(new Date).getTime())},sync:function(e){if(e!=0){var t=document.createElement("iframe");t.setAttribute("id","Wifrm"),document.body.appendChild(t),t.setAttribute("src","https://cstatic.weborama.fr/iframe/"+(e==2?"external":"external_ids_sync")+".html?d.r="+(new Date).getTime()),t.setAttribute("style","height: 1px; width: 1px; border: 0px none; position: absolute; display: none; left: 0px; top: 0px; z-index: 0;")}},data:[],push:function(e,t){this.data.push(e.toString()),this.data.push(t.toString())},send:function(){window.wamf.pushWvar(this.data),window.wamf.pageSend()},ispresent:function(e,t){if(typeof e=="undefined")var e="";if(e.constructor===Array){for(var n=0;n<e.length;n++)if(e[n]===t)return 1}else if(e===t)return 1},callWAI:function(e,t,n,r,i){WimWAI=new Image,WimWAI.src="https://"+e+".solution.weborama.fr/fcgi-bin/comptage_wreport.fcgi?WRP_ID="+t+"&WRP_SECTION="+n+"&WRP_SUBSECTION="+n+"&WRP_ID_GRP="+r+"&WRP_SECTION_GRP="+i+"&WRP_SUBSECTION_GRP="+i+"&ver=2&ta=1440x900&co=24&da2="+(new Date).getTime()},lemondeWAI:function(){typeof this.Wvar=="object"&&(window.wamf.ispresent(this.Wvar["site"],"Lemonde")==1&&typeof this.Wvar["cat1"]!="undefined"&&this.Wvar["cat1"]!=""&&window.wamf.callWAI("lmfranalytics","485197",this.Wvar.cat1,"485196",this.Wvar.site),window.wamf.ispresent(this.Wvar["site"],"Courrierinternational")==1&&typeof this.Wvar["cat1"]!="undefined"&&this.Wvar["cat1"]!=""&&window.wamf.callWAI("courrierinternationalfranalytics","485198",this.Wvar.cat1,"485196",this.Wvar.site),window.wamf.ispresent(this.Wvar["site"],"telerama")==1&&typeof this.Wvar["cat2"]!="undefined"&&this.Wvar["cat2"]!=""&&window.wamf.callWAI("teleramafranalytics","485200",this.Wvar.cat2,"485196",this.Wvar.site),window.wamf.ispresent(this.Wvar["site"],"huffingtonpostFR")==1&&window.wamf.callWAI("huffingtonfranalytics","485199","Global","485196",this.Wvar.site),window.wamf.ispresent(this.Wvar["site"],"Lobs")==1&&typeof this.Wvar["cat1"]!="undefined"&&this.Wvar["cat1"]!=""&&window.wamf.callWAI("lobsfranalytics","485201",this.Wvar.cat1,"485196",this.Wvar.site),window.wamf.ispresent(this.Wvar["site"],"Challenges")==1&&typeof this.Wvar["cat1"]!="undefined"&&this.Wvar["cat1"]!=""&&window.wamf.callWAI("challengesfranalytics","485202",this.Wvar.cat1,"485196",this.Wvar.site))}}}(),typeof window.wamf_callback=="undefined"&&(typeof wamid=="undefined"&&(wamid=""),typeof typ=="undefined"&&(typ="1"),typeof Wvar=="undefined"&&(Wvar=""),typeof Wsync=="undefined"&&(Wsync=1),window.wamf.account(wamid),window.wamf.querytyp(typ),window.wamf.pushWvar(Wvar),window.wamf.pageSend(),window.wamf.lemondeWAI(),window.wamf.sync(Wsync)),typeof window.wamf_callback=="function"&&(window.wamf_callback(),window.wamf_callback=function(){window.wamf.querytyp("1"),window.wamf.sync(2)});