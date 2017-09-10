"use strict";function setObj(t,e){return Storage.prototype.setObject=function(t,e){this.setItem(t,JSON.stringify(e))},localStorage.setObject(t,e)}function getObj(t){return Storage.prototype.getObject=function(t){var e=this.getItem(t);return e&&JSON.parse(e)},localStorage.getObject(t)}function runLogo(t){var e=null===getObj("mattiasLogo")?t.data.logo:getObj("mattiasLogo");null===getObj("mattiasLogo")&&setObj("mattiasLogo",e);var a=SVG("logo");a.viewbox("0 0 616 374").size("100%","100%");var i={base:"#fe5f55",white:"#eef5db",complementary:"#f96"},n=a.path(e.base),o=a.path(e.curlyLeft),r=a.path(e.curlyRight),c=a.path(e.symbol),s=a.pattern(4,4,function(t){t.rect(4,4).fill(i.base),t.path("M1 3h1v1H1V3zm2-2h1v1H3V1z").fill(i.complementary)});n.fill(s).stroke({width:1,color:i.white,opacity:.9}).scale(-.05).rotate(-5).addClass("base"),o.back().dx(100).addClass("curly"),r.back().dx(-100).addClass("curly"),c.scale(.1).addClass("symbol");var l=a.group().dmove(52,70).addClass("text"),m=a.group().dmove(-52,-70).addClass("text"),h=a.group().dmove(52,-70).addClass("text"),d=a.group().dmove(-52,70).addClass("text");a.each(function(){this.opacity(0),"path"!==this.type&&"g"!==this.type||this.hasClass("base")||this.style({fill:i.white}),this.hasClass("curly")&&this.on("mouseover",mouseOverSqueeze).on("mouseout",mouseOutSqueeze),this.hasClass("symbol")&&this.on("mousedown",function(){l.animate(300,animationTiming.swingTo,0).dmove(7,7),m.animate(300,animationTiming.swingTo,0).dmove(-7,-7),h.animate(300,animationTiming.swingTo,0).dmove(3.5,-3.5),d.animate(300,animationTiming.swingTo,0).dmove(-3.5,3.5)}).on("mouseup",function(){l.animate(300,animationTiming.swingTo,0).dmove(-7,-7),m.animate(300,animationTiming.swingTo,0).dmove(7,7),h.animate(300,animationTiming.swingTo,0).dmove(-3.5,3.5),d.animate(300,animationTiming.swingTo,0).dmove(3.5,-3.5)})});var p=[e.fNameLetter0,e.fNameLetter1,e.fNameLetter2,e.fNameLetter3,e.fNameLetter4,e.fNameLetter5,e.fNameLetter6],u=[e.lNameLetter0,e.lNameLetter1,e.lNameLetter2,e.lNameLetter3,e.lNameLetter4,e.lNameLetter5,e.lNameLetter6],f=[e.prefixLetter0,e.prefixLetter1,e.prefixLetter2,e.prefixLetter3,e.prefixLetter4,e.prefixLetter5,e.prefixLetter6,e.prefixLetter7],g=[e.suffixLetter0,e.suffixLetter1,e.suffixLetter2,e.suffixLetter3,e.suffixLetter4,e.suffixLetter5,e.suffixLetter6,e.suffixLetter7,e.suffixLetter8];p.map(function(t){t=a.path(t),l.add(t)}),u.map(function(t){t=a.path(t),m.add(t)}),f.map(function(t){t=a.path(t),h.add(t)}),g.map(function(t){t=a.path(t),d.add(t)});var y="Wat"+window.innerWidth>screen.mobile,b=window.innerWidth>screen.mobile,v=window.matchMedia("(orientation: landscape)").matches;switch(b||v){case!0:n.animate(600,animationTiming.bounceOut,200).rotate(0).scale(1).opacity(1).delay(9e3).animate(3e3,animationTiming.elastic,3e3).rotate(-.05).scale(.99).scale(1.01).rotate(.05).scale(1).rotate(0).loop();break;case!1:n.animate(600,animationTiming.bounceOut,200).cx(150).rotate(-90).scale(1).opacity(1).delay(9e3).animate(3e3,animationTiming.elastic,3e3).scale(.99).scale(1.01).scale(1).loop();break;default:console.error(y)}switch(b||v){case!0:o.animate(1e3,animationTiming.elastic,1e3).dx(-100).opacity(1),r.animate(1e3,animationTiming.elastic,1e3).dx(100).opacity(1),c.animate(800,animationTiming.elastic,1e3).opacity(1).scale(1);break;case!1:o.rotate(-90).dy(35).animate(1e3,animationTiming.elastic,1e3).dx(-308).opacity(1),r.rotate(-90).dy(-35).dx(-154).animate(1e3,animationTiming.elastic,1e3).dx(150).opacity(1),c.dy(1540).animate(800,animationTiming.elastic,1e3).opacity(1).scale(1);break;default:console.error(y)}switch(b||v){case!0:l.animate(400,animationTiming.swingTo,1800).dmove(-52,-70).opacity(1);break;case!1:l.dy(154).rotate(-10).animate(400,animationTiming.swingTo,1800).dmove(-52,-70).opacity(1);break;default:console.error(y)}switch(b||v){case!0:m.animate(400,animationTiming.swingTo,2100).dmove(52,70).opacity(1);break;case!1:m.dy(154).rotate(-10).animate(400,animationTiming.swingTo,2100).dmove(52,70).opacity(1);break;default:console.error(y)}switch(b||v){case!0:h.animate(400,animationTiming.swingTo,3e3).dmove(-52,70).opacity(1);break;case!1:h.dy(154).rotate(9).animate(400,animationTiming.swingTo,3e3).dmove(-52,70).opacity(1);break;default:console.error(y)}switch(b||v){case!0:d.animate(400,animationTiming.swingTo,3300).dmove(52,-70).opacity(1);break;case!1:d.dy(154).rotate(9).animate(400,animationTiming.swingTo,3300).dmove(52,-70).opacity(1);break;default:console.error(y)}}!function(){var t=void 0,e=function(){t||(t=setTimeout(function(){t=null,i()},900))},a={width:window.innerWidth,height:window.innerHeight,variance:"1",x_colors:"YlOrRd",y_colors:"random"},i=function(){for(var t=Trianglify(a),e=document.getElementsByTagName("canvas"),i=e.length-1;0<=i;i--)e[i].remove();document.body.appendChild(t.canvas())};document.body.appendChild(Trianglify(a).canvas()),window.addEventListener("resize",e,!1),window.addEventListener("orientationchange",e,!1)}();var renderExperience=function(){function t(t){var e=document.getElementById("experience");t.map(function(t){var a=document.createDocumentFragment(),i="<h3>"+t.title+"</h3>\n            <h4>"+t.position+"</h4>\n            <time>"+t.dateFrom+" - "+t.dateTo+"</time>",n=t.url&&'<a href="https://'+t.url+'">'+t.url+"</a>",o=document.createElement("li");o.innerHTML=n?i+n:i,a.appendChild(o),e.appendChild(a)})}var e=getObj("mattiasExperience");null===e?axios.get("/src/experience.json").then(function(a){var i=a.data.items;setObj("mattiasExperience",i),t(i),e=getObj("mattiasExperience")}):t(e)};renderExperience();var renderFriends=function t(e){var a=e.data.friend,i=SVG("friend");i.viewbox("0 -1 52 62"),i.path(a).fill({opacity:0}).stroke({color:"#fe5f55",opacity:1,width:1}),new Vivus(i.node,{type:"delayed",duration:1200});var n=document.querySelector("#friend svg");n.onclick=function(){for(var e=n;e.parentNode;)e.parentNode.removeChild(e);null===getObj("mattiasIcons")?axios.get("/src/icons.json").then(function(e){return t(e)}):t(getObj("mattiasIcons"))}},renderSkills=function t(e){var a=e.data.skills,i=SVG("skills");i.viewbox("0 0 512 512");var n=[i.path(a.desktopBackground),a.desktopFrame.map(function(t){return i.path(t)}),i.path(a.desktopScreenBackground),a.desktopCode.map(function(t){return i.path(t)})],o=n[0],r=n[1],c=n[2],s=n[3];o.fill(a.colors[0]),r.forEach(function(t,e){t.fill(a.colors[e+1])}),c.fill(a.colors[4]),s.forEach(function(t,e){var i=t.width(),n=[5,2,6,7],o=Math.floor(Math.random()*n.length);t.fill(a.colors[n[o]]),t.width(n[o]).opacity(0),t.animate(400,">",100*(e+1)).opacity(1).width(i).afterAll(function(){19===++e&&v()})});var l=i.path(a.tabletBase),m=i.path(a.tabletScreen),h=i.circle().attr({cx:428.2,cy:173.2,r:2.5});l.fill(a.colors[0]),[m,h].map(function(t){t.fill(a.colors[1])}),m.opacity(.5);var d=[i.path(a.articleTabletPanel1),i.path(a.articleTabletHeadline1),i.path(a.articleTabletPanel2),i.path(a.articleTabletParagraph),i.path(a.articleTabletHeadline2),i.path(a.articleTabletHeader)],p=d[0],u=d[1],f=d[2],g=d[3],y=d[4],b=d[5];[p,f].map(function(t){t.fill(a.colors[4]).opacity(0)}),[u,y].map(function(t){t.fill(a.colors[0]).opacity(0)}),g.fill(a.colors[1]).opacity(0),b.fill(a.colors[5]).opacity(0);var v=function(){m.animate(400,">").opacity(1).after(function(){var t=b.width(),e=p.height(),a=f.height(),i=u.width(),n=y.width(),o=g.height();b.width(1).animate(400,"<>").width(t).opacity(1).after(function(){V(),f.height(1).animate(400,">",400).height(a).opacity(1).after(function(){y.width(1).animate(400,">").width(n).opacity(1),p.height(1).animate(400,">").height(e).opacity(1).after(function(){g.height(1).animate(400,">").height(o).opacity(1),u.width(1).animate(400,">").width(i).opacity(1)})})})})},w=i.path(a.phoneBase),x=i.path(a.phoneScreen),T=i.path(a.phoneSpeaker),j=i.path(a.phoneHomeBtn),k=i.circle().attr({cx:247.2,cy:423.7,r:1.8});w.fill(a.colors[0]),[x,T,j,k].map(function(t){t.fill(a.colors[1])}),x.opacity(.5);var L=[i.path(a.articlePhonePanel1),i.path(a.articlePhoneParagraph1),i.path(a.articlePhoneHeadline1),i.path(a.articlePhonePanel2),i.path(a.articlePhoneParagraph2),i.path(a.articlePhoneHeadline2),i.path(a.articlePhoneHeader)],O=L[0],S=L[1],C=L[2],N=L[3],E=L[4],I=L[5],P=L[6];[O,N].map(function(t){t.fill(a.colors[4]).opacity(0)}),[S,E].map(function(t){t.fill(a.colors[1]).opacity(0)}),[C,I].map(function(t){t.fill(a.colors[0]).opacity(0)}),P.fill(a.colors[5]).opacity(0);var V=function(){x.animate(400,">").opacity(1).after(function(){var t=P.width(),e=O.height(),a=N.height(),i=C.width(),n=I.width(),o=S.height(),r=E.height();P.width(1).animate(400,"<>").width(t).opacity(1).after(function(){N.height(1).animate(400,">",400).height(a).opacity(1).after(function(){I.width(1).animate(400,">").width(n).opacity(1),O.height(1).animate(400,">").height(e).opacity(1).after(function(){E.height(1).animate(400,">").height(r).opacity(1),C.width(1).animate(400,">").width(i).opacity(1),S.height(1).animate(400,">").height(o).opacity(1)})})})})},B=document.querySelector("#skills svg");B.onclick=function(){for(var e=B;e.parentNode;)e.parentNode.removeChild(e);null===getObj("mattiasIcons")?axios.get("/src/icons.json").then(function(e){return t(e)}):t(getObj("mattiasIcons"))}},renderWork=function t(e){var a=e.data.work,i=SVG("jobs");i.viewbox("0 0 512 512");var n=i.path(a.base).opacity(0),o=i.path(a.headline).opacity(0),r=i.path(a.paragraph).opacity(0),c=i.path(a.redBg).opacity(0),s=i.path(a.topHeadline).opacity(0),l=i.circle().attr({cx:256,cy:176.64,r:40.4}).opacity(0),m=i.path(a.body).opacity(0);n.fill(a.colors[0]),o.fill(a.colors[1]),c.fill(a.colors[3]),[r,s].map(function(t){t.fill(a.colors[2])}),[l,m].map(function(t){t.fill(a.colors[4])});var h=n.height(),d=c.width(),p=s.width(),u=o.width(),f=r.height(),g=l.attr("r"),y=m.height();n.height(1).animate(400,"<>").height(h).opacity(1).after(function(){c.width(1).animate(400,"<").width(d).opacity(1).after(function(){s.width(1).animate(200,">").width(p).opacity(1).after(function(){o.width(1).animate(400,"<>").width(u).opacity(1),r.height(1).animate(400,"<>").height(f).opacity(1).after(function(){l.attr("r",0).animate(200,"<>").attr("r",g+10).opacity(1).after(function(){m.height(1).animate(200).height(y).opacity(1)}).animate(200,"<>").attr("r",g)})})})});var b=document.querySelector("#work svg");b.onclick=function(){for(var e=b;e.parentNode;)e.parentNode.removeChild(e);null===getObj("mattiasIcons")?axios.get("/src/icons.json").then(function(e){return t(e)}):t(getObj("mattiasIcons"))}},renderContact=function t(e){var a=e.data.contact,i=SVG("message");i.viewbox("0 0 512 512");var n=i.polygon(a.poly).fill(a.colors[0]).opacity(0),o=i.path(a.path).fill(a.colors[1]).opacity(0),r=75;[0,1,2,3,4].forEach(function(t,e){i.rect().attr({x:e%2?256:122,y:0===e?r:r+=50,fill:a.colors[2],width:e%2?133:266,height:16}).opacity(0).delay(800).animate(400,"<>").opacity(1)});var c=n.height(),s=o.width();o.width(1).animate(400,"<>").width(s).opacity(1).after(function(){n.height(1).animate(400,">").height(c).opacity(1)});var l=document.querySelector("#contact svg");l.onclick=function(){for(var e=l;e.parentNode;)e.parentNode.removeChild(e);null===getObj("mattiasIcons")?axios.get("/src/icons.json").then(function(e){return t(e)}):t(getObj("mattiasIcons"))}},renderSocial=function(t){var e=t.data.social,a=SVG("untappd"),i=SVG("dribbble"),n=SVG("github"),o=SVG("lastfm"),r=SVG("linkedin"),c=SVG("quora"),s=SVG("twitter");a.viewbox("0 0 296 246"),a.path(e.untappd[0]),a.path(e.untappd[1]),a.path(e.untappd[2]),a.fill("#ffc000"),i.viewbox("0 0 430 430"),i.path(e.dribbble),i.fill("#ea4c89"),n.viewbox("0 0 90 90"),n.path(e.github),n.fill("#171515"),o.viewbox("0 0 430 430"),o.path(e.lastfm),o.fill("#b80610"),r.viewbox("0 0 430 430"),r.path(e.linkedin),r.fill("#007bb5"),c.viewbox("0 0 430 430"),c.path(e.quora),c.fill("#a82400"),s.viewbox("0 0 430 430"),s.path(e.twitter),s.fill("#55acee")};axios.get("/src/icons.json").then(function(t){null===getObj("mattiasIcons")&&setObj("mattiasIcons",t),t=null===getObj("mattiasIcons")?t:getObj("mattiasIcons"),renderSkills(t),renderFriends(t),renderContact(t),renderSocial(t),renderWork(t)});var animationTiming={elastic:function(t){return t==!!t?t:Math.pow(2,-10*t)*Math.sin((t-.075)*(2*Math.PI)/.3)+1},swingTo:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},bounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},mouseOverSqueeze=function(){this.animate(200,animationTiming.swingTo,0).scale(.95)},mouseOutSqueeze=function(){this.animate(200,animationTiming.swingTo,0).scale(1).finish()},screen={mobile:768};!function(){var t=void 0,e=function(){t||(t=setTimeout(function(){t=null,a()},900))},a=function(){for(var t=document.getElementById("logo");t.firstChild;)t.removeChild(t.firstChild);null===getObj("mattiasLogo")?axios.get("/src/logo.json").then(function(t){return runLogo(t)}):runLogo()};document.onreadystatechange=function(){"complete"===document.readyState&&axios.get("/src/logo.json").then(function(t){return runLogo(t)})},window.addEventListener("resize",e,!1),window.addEventListener("orientationchange",e,!1)}(),function(){function t(t){var e=t.data.profile;null===getObj("mattiasProfile")&&setObj("mattiasProfile",t);var a=SVG("profile");a.viewbox("0 0 567 757").size("260px","400px");var i=a.path(e.main),n=a.path(e.eyeLeft),o=a.path(e.eyeRight),r=a.path(e.shoulder),c=a.group(),s=[i,n,o,r];s.map(function(t){c.add(t)}),c.fill({color:"#553E48",opacity:.95}).stroke({color:"#553E48",opacity:.5,width:"50px"}).scale(.1,-.1).translate(0,867).attr("stroke-linejoin","round"),s.map(function(t){t.opacity(0).translate(400,-400),t.animate(600,function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},1200).opacity(1).translate(0,0)})}null===getObj("mattiasProfile")?axios.get("/src/profile.json").then(function(e){return t(e)}):t(getObj("mattiasProfile"))}();var renderUntappd=function(){function t(t){var e=t.brewery_name,a=t.beer_name,i=t.checkin_url;["#brewery","#beer"].map(function(t,i){document.querySelector(t).innerText=0===i?e:a}),document.getElementById("untappd-url").setAttribute("href",i)}var e=getObj("mattiasBeers");null===e?axios.get("https://dl.dropboxusercontent.com/s/f7ustvn6xp1bo6h/Untappd.json").then(function(a){var i=a.data.slice(-1)[0];setObj("mattiasBeers",i),t(i),e=getObj("mattiasBeers")}):t(e)},renderMusic=function(){function t(t){var e=t.artist["#text"],a=t.name,i=t.url;["#lastfm-artist","#lastfm-track"].map(function(t,i){document.querySelector(t).innerText=0===i?e:a}),document.getElementById("lastfm-url").setAttribute("href",i)}axios.get("https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=pestbarn&api_key=9ab0d2d4d5ec7e287ea35022d52d09e4&limit=2&format=json").then(function(e){t(e.data.recenttracks.track.slice(-1)[0])})},renderGithub=function(){function t(t){var e=t;document.getElementById("github-commits").innerText="this project: "+e}axios.get("https://api.github.com/repos/pestbarn/pestbarn.github.io/stats/commit_activity").then(function(e){var a=e.data,i=a.map(function(t){return t.total}).reduce(function(t,e){return t+e})/Object.keys(a).length;t(i=Math.round(10*i)/10)})};renderUntappd(),renderMusic(),renderGithub();
//# sourceMappingURL=index.js.map
