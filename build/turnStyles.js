!function(){var t,e,n=(t=function(t,e){t.exports={version:"5.5.0"}},function(n){return e||t(e={exports:{},parent:n},e.exports),e.exports});const s=t=>`\n  <div id="ts_wrap">\n    <div id="turnStyles">\n      ${i}\n      ${o(t)}\n\n      ${a(t)}\n      ${l(t)}\n      ${d(t)}\n\n      ${c(t)}\n    </div>\n  </div>\n`,i='\n  <h3 id="ts_menu">tS</h3>\n\n  <div id="ts_tabs">\n    <div class="tab_opts active">Options</div>\n    <div class="tab_ding">Notifications</div>\n    <div class="tab_css">Custom Css</div>\n  </div>\n',o=t=>`\n  <div id="ts_quick">\n    ${h(t,"autobop","Autobop")}\n    ${h(t,"nextdj","Next DJ Spot")}\n    ${h(t,"pingdj","Wait For Ping")}\n  </div>\n`,a=t=>`\n  <div class="ts_tab tab_opts active">\n    <h4>General Features</h4>\n    ${h(t,"autobop","Autobop")}\n    ${h(t,"has_vol","Control Volume")}\n    <br>\n    ${h(t,"nextdj","Next DJ Spot")}\n    ${h(t,"pingdj","Wait For Ping")}\n    <br>\n    <h4>Visual Options</h4>\n    ${r(t,"theme")}\n    ${r(t,"style")}\n    <br>\n    ${h(t,"no_aud","Hide Audience")}\n    ${h(t,"no_vid","Hide Player")}\n    <br>\n    ${h(t,"no_bub","Hide Chat Bubbles")}\n  </div>\n`,l=t=>`\n  <div class="ts_tab tab_ding">\n    <h4>Messages In Chat</h4>\n    ${h(t,"chat_song","Last Song Stats")}\n    ${h(t,"chat_spun","Dropped DJ Stats")}\n    <br>\n    ${h(t,"chat_snag","User Snags")}\n    ${h(t,"chat_join","User Joins")}\n    ${h(t,"chat_left","User Leaves")}\n    <br>\n    <h4>Desktop Notifications</h4>\n    ${h(t,"ping_pm","On DMs")}\n    ${h(t,"ping_chat","On Mentions")}\n    ${h(t,"ping_song","On New Songs")}\n  </div>\n`,d=t=>`\n  <div class="ts_tab tab_css">\n    <h4>Custom CSS</h4>\n    <textarea id="ts_user_css" class="ts_inputs" cols="60" rows="10">${t.config.user_css||""}</textarea>\n    <h4 id="ts_apply">Save And Apply Styles</h4>\n  </div>\n`,h=(t,e,n)=>`\n  <label class="ts_toggle">\n    <input id="ts_${e}" class="ts_option" type="checkbox"\n      ${t.config[e]?"checked":""}>\n    </input>\n    ${n}\n  </label>\n`,r=(t,e)=>`\n  <select id="ts_${e}" class="ts_option ts_inputs">\n    <option value="">No ${e[0].toUpperCase()+e.substring(1)}</option>\n    ${Object.keys(t.options[e]).map(n=>`\n      <option value="${n}" ${t.config[e]==n?"selected":""}>\n        ${t.options[e][n]}\n      </option>\n    `).join("")}\n  </select>\n`,c=t=>`\n  <div class="ts_credits">\n    <small id="ts_close">\u2714\ufe0e CLOSE</small>\n    <small>v${t.config.version}</small>\n    <small>\n      <a href="https://discord.gg/jnRs4WnPjM" target="_blank">\n        Join me on the TT Discord\n      </a>\n    </small>\n  </div>\n`;const u=t=>{let e=document.createElement("style");e.classList.add("tScss"),e.type="text/css",e.innerHTML=t,$("style.tScss").remove(),document.head.append(e)},g=(t,e,n)=>`${n?`${t}/${n}`:""+t}/${e}.css`,p=(t,e,n)=>{let s=document.createElement("link");s.classList.add("tS-"+(n||"core")),s.type="text/css",s.rel="stylesheet",s.href=g(t,e,n),document.head.append(s)},m=(t,e,n)=>{let s=$("link.tS-"+n);if(!e)return!!s.length&&s.remove();s.length?s.attr("href",g(t,e,n)):p(t,e,n)};const f="DOMSubtreeModified",_=()=>{let t=window.turntable.playlist;t.isFiltering&&t.clearSearchBar(),$("#queue-header").removeClass("normal").addClass("edit"),t.queue.batchEditMode()},b=()=>{let t=$("#playlist-header .text")[0],e=window.turntable.playlist.fileids.length,n=t.innerHTML.split("<em>")[0];t.innerHTML=`${n} <em>${e}</em>`},v=()=>{if($(".profile.modal .statslink").length)return;let t=$(".profile.modal .userid"),e=t.length?t[0].innerHTML:"";24==e.length&&($(".profile.modal .section.web-links").show(),$(".profile.modal .website").append(w(e)))},w=t=>`\n  <a class="statslink" href="https://ttstats.info/user/${t}" \n    target="_blank" onclick="$('.modal .close-x')[0].click()">\n    ttStats Profile\n  </a>\n`;const y=t=>Math.log(t/100)/Math.LN2+4,j=t=>{let e=t||window.util.getSetting("volume");return 100*Math.pow(2,e-4)},k=`\n  <div id="ts_volume">\n    <span id="ts_mute"></span>\n    <input id="ts_slider" type="range" \n      min="0" max="100" value="${j()}">\n    </input>\n    <em id="ts_muted">Muted For One Song</em>\n  </div>\n`;const S=()=>{$(window).focus();let t={bubbles:!0,cancelable:!0,view:window},e=document.querySelectorAll(".awesome-button")[0],n=new MouseEvent("click",t);return!e.dispatchEvent(n)};const x=(t,e,n="")=>`\n  <div class="message ${n}">\n    <em>\n      <span class="subject">${t}</span>\n      <span class="text">${e}</span>\n    </em>\n  </div>\n`;const C={};(t=>{t.Log=t=>console.info("turnStyles :: "+t),t.user=()=>window.turntable.user,t.view=()=>window.turntable.topViewController,t.icon=()=>this.__base+"/images/icon128.png",t.userName=e=>{let n=t.view().userMap[e];return n?n.attributes.name:"Someone"},t.buddyName=t=>{let e=window.turntable.buddyList.pmWindows[t];return!!e&&e.otherUser.attributes.name},t.pinged=e=>{let n="@"+t.user().attributes.name.toLowerCase();return e.toLowerCase().indexOf(n)>-1},t.toggleClass=(t,e)=>{let n=$("body").hasClass(t);e&&!n&&$("body").addClass(t),n&&!e&&$("body").removeClass(t)},t.holding={},t.suspend=function(t,e,n){this.holding[n]?clearTimeout(this.holding[n]):t&&t();let s=1e3*e;this.holding[n]=setTimeout((()=>{delete this.holding[n]}).bind(this),s)}})(C),(t=>{t.on=function(t,e){this.events[t]||(this.events[t]=[]),this.events[t].push(e.bind(this))},t.emit=function(t,e,n){let s=this.events[t];if(s)for(let i of s)i(e,n)},t.handle=function(t){t.command&&this.emit(t.command,t)},t.events={}})(C),(t=>{t.default={theme:"dark",style:"",autobop:!0,nextdj:!1,pingdj:!1,has_vol:!1,no_aud:!1,no_vid:!1,no_bub:!1,ping_pm:!1,ping_song:!1,ping_chat:!1,chat_song:!1,chat_spun:!1,chat_snag:!1,chat_join:!1,chat_left:!1,user_css:""},t.options={theme:{dark:"Dark Mode",night:"Night Mode",forest:"Forest",cosmic:"Cosmic",midnight:"Midnight"},style:{pink:"Pink",blue:"Blue",teal:"Teal",green:"Green",purple:"Purple"}},t.saveConfig=function(t){let e="checkbox"==t.target.type,n=t.target.id.split("ts_").join(""),s=e?t.target.checked:t.target.value;"apply"==n&&(n="user_css",s=$("#ts_user_css").val()),this.config[n]=s;let i=JSON.stringify(this.config);window.localStorage.setItem("tsdb",i),this.Log("saved config");let o="style"==n||"theme"==n||"user_css"==n;this.lobby?o&&this.updateThemes(n,s):this.emit("update",n,s)}})(C),(t=>{t.last_played={},t.now_playing={},t.current_djs={},t.buildCache=function(t){for(let e of t.djids)this.cacheNewDJ(e);this.cacheTrack(t.currentSong)},t.cacheTrack=function(t){let e=t&&t.room?t.room.metadata.current_song:t,n=t&&t.upvoters?t.upvoters.length:0,s=!!e&&e.djid,i={...this.now_playing},o={love:n,hate:0,snag:0,dj:s};this.last_played=i,this.now_playing=e?{...e.metadata,...o}:{},i.song&&this.current_djs[i.dj]?(this.current_djs[i.dj].spun+=1,this.current_djs[i.dj].love+=i.love,this.current_djs[i.dj].hate+=i.hate,this.current_djs[i.dj].snag+=i.snag):i.song&&this.cacheNewDJ(i.dj,i);let a=!1;i.song&&(a=`${i.love}\u2764\ufe0f${i.hate}\ud83d\udc94${i.snag}\ud83d\udc96`),this.emit("tracked",a),this.Log("cached track: "+(this.now_playing.song||"nosong"))},t.cacheNewDJ=function(t,e){let n=t.user?t.user[0].userid:t;this.current_djs[n]||(this.current_djs[n]={spun:e&&e.spun?e.spun:0,love:e&&e.love?e.love:0,hate:e&&e.hate?e.hate:0,snag:e&&e.snag?e.snag:0}),this.Log("cached new DJ: "+n)},t.cacheSnags=function(){this.now_playing.snag+=1},t.cacheVotes=function(t){this.now_playing.love=t.room.metadata.upvotes,this.now_playing.hate=t.room.metadata.downvotes},t.clearOldDJ=function(t){let e=t.user[0].name,n=t.user[0].userid;if(!this.current_djs[n])return;let s={...this.current_djs[n]},i=`${s.love}\u2764\ufe0f${s.hate}\ud83d\udc94${s.snag}\ud83d\udc96${s.spun}\u25b6\ufe0f`;delete this.current_djs[n],this.emit("dropped",e,i)},t.on("attach",t.buildCache),t.on("add_dj",t.cacheNewDJ),t.on("rem_dj",t.clearOldDJ),t.on("nosong",t.cacheTrack),t.on("newsong",t.cacheTrack),t.on("snagged",t.cacheSnags),t.on("update_votes",t.cacheVotes)})(C),(t=>{t.init=function(){if(this.__base)return;this.chrome=!!window.tsBase,this.__base=window.tsBase||"https://ts.pixelcrisis.co/build";let t=window.localStorage.getItem("tsdb"),e=t?JSON.parse(t):{},s=n({}).version;this.config={...this.default,...e,version:s},this.emit("loaded",this.config),this.attach()},t.attach=function(){let n=window.turntable;if(!n)return this.Log("no room");if(this.lobby=$("#turntable #topBG").length,this.lobby)return this.buildWindow();let s=()=>setTimeout(t.attach.bind(this),150);if(!n.user)return s();let i=e(n,"roomId");return i&&e(i,"roomData")?(this.realVolume=window.turntablePlayer.realVolume,n.addEventListener("message",this.handle.bind(this)),this.emit("attach",i),void this.Log("loaded room")):s()};const e=function(t,e){for(let n in t){let s=t[n];if(null!=s&&s[e])return s}}})(C),(t=>{t.buildWindow=function(){$(".header-bar").append(s(this)),$("#ts_menu, #ts_close").on("click",()=>{$("#turnStyles").toggleClass("active")}),$("#ts_tabs div").on("click",t=>{$("#ts_tabs div, .ts_tab").removeClass("active"),$("."+t.currentTarget.className).addClass("active")}),$("#ts_apply").on("click",t.saveConfig.bind(this)),$(".ts_option").on("change",t.saveConfig.bind(this))},t.on("attach",t.buildWindow)})(C),(t=>{t.loadThemes=function(t){p(this.__base,"turnStyles"),this.updateThemes("theme",t.theme),this.updateThemes("style",t.style),u(t.user_css)},t.updateThemes=function(t,e){"theme"==t&&m(this.__base,e,"themes"),"style"==t&&m(this.__base,e,"styles"),"user_css"==t&&u(e)},t.on("loaded",t.loadThemes),t.on("update",t.updateThemes)})(C),(t=>{t.modify=function(){$("#songs-wrapper").on(f,"#songs",b),b(),$("#maindiv").on(f,".overlay .profile",v),this.hidden("no_vid",this.config.no_vid),this.hidden("no_aud",this.config.no_aud),this.hidden("no_bub",this.config.no_bub),$("#upload-button").after('<div id="ts_upload"></div>'),$("#ts_upload").on("click",_)},t.hidden=function(t,e){"no_vid"==t&&this.toggleClass("ts_hide_videos",e),"no_aud"==t&&this.toggleClass("ts_hide_audience",e),"no_bub"==t&&this.toggleClass("ts_hide_bubbles",e)},t.on("attach",t.modify),t.on("update",t.hidden)})(C),(t=>{t.loadVolume=function(){let t=this.config.has_vol,e=$("body").hasClass("has-volume");this.toggleClass("has-volume",t),e&&!t&&this.remVolume(),t&&!e&&this.addVolume()},t.addVolume=function(){$(".header-content").append(k),$("#ts_mute").on("click",this.toggleMute.bind(this)),$("#ts_slider").on("input",this.saveVolume.bind(this)),$("#ts_slider").on("DOMMouseScroll mousewheel",this.onVolWheel.bind(this))},t.remVolume=function(){$("#ts_volume").remove(),window.turntablePlayer.realVolume=this.realVolume},t.saveVolume=function(t){let e=(t=t.target?t.target.value:t)>0?y(t):-3;window.turntablePlayer.realVolume=e>6?this.realVolume:j,window.turntablePlayer.setVolume(e),window.util.setSetting("volume",e)},t.onVolWheel=function(t){const e=j();let n=t.originalEvent.shiftKey?1:5,s=t.originalEvent.deltaY>0?e-n:e+n;return s=s<0?0:s>100?100:s,$("#ts_slider")[0].value=s,this.saveVolume(s),!1},t.checkMuted=function(){this.mute&&this.toggleMute()},t.toggleMute=function(){this.mute=!this.mute,$("#ts_volume").toggleClass("muted",this.mute);let t=this.mute?-3:y(j());window.turntablePlayer.setVolume(t),this.Log("turned mute "+(this.mute?"on":"off"))},t.on("attach",t.loadVolume),t.on("update",t.loadVolume),t.on("nosong",t.checkMuted),t.on("newsong",t.checkMuted)})(C),(t=>{t.autoBop=function(){if(this.bopping&&clearTimeout(this.bopping),!this.config.autobop)return;let t=7*Math.random()*100;this.bopping=setTimeout(S,t)},t.on("attach",t.autoBop),t.on("newsong",t.autoBop)})(C),(t=>{t.checkDecks=function(){this.config.nextdj&&(this.config.pingdj?this.suspend(null,2,"nextdj"):this.tryJumping())},t.tryJumping=function(){if(!$(".become-dj").length)return this.Log("nextdj: no spot");this.Log("nextdj: taking spot"),this.view().becomeDj()},t.isSpinning=function(t){if(!this.config.nextdj)return;if(this.user().id!=t.user[0].userid)return;this.config.nextdj=!1,$("#ts_hotbar #ts_nextdj").prop("checked",!1),$("#ts_hotbar #ts_nextdj").trigger("change");let e="You've Hopped On Deck!",n="NextDJ is now disabled.";this.sendNotify({head:e,text:n}),this.postToChat(e,n)},t.nextOnPing=function(t){this.pinged(t.text)&&this.holding.nextdj&&this.tryJumping()},t.on("attach",t.checkDecks),t.on("update",t.checkDecks),t.on("rem_dj",t.checkDecks),t.on("add_dj",t.isSpinning),t.on("speak",t.nextOnPing)})(C),(t=>{t.notifyAuth=function(){let t=this.config;return!(!(t.ping_chat||t.ping_pm||t.ping_song)||this.chrome||!("Notification"in window)||"denied"===Notification.permission||"default"===Notification.permission&&(this.Log("requesting notifcation permission"),Notification.requestPermission(),1))},t.stopNotify=function(){return!!document.hasFocus()||!this.chrome&&!this.notifyAuth()},t.sendNotify=function(t,e){if(this.stopNotify())return;let n=this.notifyType(t);return e?this.suspend(n,5,e):n()},t.notifyType=function(t){let e={type:"tsNotify",notification:t},n={icon:this.icon(),body:t.text};return this.chrome?()=>window.postMessage(e):()=>{let e=new Notification(t.head,n);e.onclick=()=>{window.focus(),e.close()}}},t.postToChat=function(t,e,n){$(".chat .messages").append(x(t,e,n)),this.view().updateChatScroll()},t.on("attach",t.notifyAuth),t.on("update",t.notifyAuth)})(C),(t=>{t.alertSong=function(t){let e=this.now_playing.song;if(e&&this.config.ping_song){let n="Now Playing: "+e,s=t||"By: "+this.now_playing.artist;this.sendNotify({head:n,text:s})}if(t&&this.config.chat_song){let e=this.last_played,n=`${e.song} by ${e.artist}`;this.postToChat(t,n,"stat")}},t.alertDrop=function(t,e){if(this.config.chat_spun){let n=`${t} - ${e}`,s="- is done spining!";this.postToChat(n,s,"stat")}},t.alertPm=function(t){if(this.config.ping_pm){let e=this.buddyName(t.senderid),n=e?"New PM from: "+e:"New PM";this.sendNotify({head:n,text:t.text},"ping_pm")}},t.alertPing=function(t){if(this.pinged(t.text)&&this.config.ping_chat){let e=`[${this.view().roomData.name}] @${t.name}`;this.sendNotify({head:e,text:t.text},"ping_chat")}},t.alertSnag=function(t){if(this.config.chat_snag){let e=this.userName(t.userid),n="has snagged this track!";this.postToChat(e,n,"snag")}},t.alertJoin=function(t){if(this.Log(`user joined: ${name} (${t.user[0].userid})`),this.config.chat_join){let e=t.user[0].name;this.postToChat(e,"joined.","join")}},t.alertLeft=function(t){if(this.Log(`user left: ${name} (${t.user[0].userid})`),this.config.chat_left){let e=t.user[0].name;this.postToChat(e,"left.","left")}},t.on("pmmed",t.alertPm),t.on("speak",t.alertPing),t.on("snagged",t.alertSnag),t.on("tracked",t.alertSong),t.on("dropped",t.alertDrop),t.on("registered",t.alertJoin),t.on("deregistered",t.alertLeft)})(C),window.$tS=C,window.$tS.init()}();