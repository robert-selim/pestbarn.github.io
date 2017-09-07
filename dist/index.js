"use strict";function setObj(t,a){return Storage.prototype.setObject=function(t,a){this.setItem(t,JSON.stringify(a))},localStorage.setObject(t,a)}function getObj(t){return Storage.prototype.getObject=function(t){var a=this.getItem(t);return a&&JSON.parse(a)},localStorage.getObject(t)}function runLogo(t){var a=null===getObj("mattiasLogo")?t.data.logo:getObj("mattiasLogo");null===getObj("mattiasLogo")&&setObj("mattiasLogo",a);var e=SVG("logo");e.viewbox("0 0 616 374").size("100%","100%");var i={base:"#fe5f55",white:"#eef5db",complementary:"#f96"},o=e.path(a.base),n=e.path(a.curlyLeft),r=e.path(a.curlyRight),c=e.path(a.symbol),l=e.pattern(4,4,function(t){t.rect(4,4).fill(i.base),t.path("M1 3h1v1H1V3zm2-2h1v1H3V1z").fill(i.complementary)});o.fill(l).stroke({width:1,color:i.white,opacity:.9}).scale(-.05).rotate(-5).addClass("base"),n.back().dx(100).addClass("curly"),r.back().dx(-100).addClass("curly"),c.scale(.1).addClass("symbol");var s=e.group().dmove(52,70).addClass("text"),h=e.group().dmove(-52,-70).addClass("text"),m=e.group().dmove(52,-70).addClass("text"),d=e.group().dmove(-52,70).addClass("text");e.each(function(){this.opacity(0),"path"!==this.type&&"g"!==this.type||this.hasClass("base")||this.style({fill:i.white}),this.hasClass("curly")&&this.on("mouseover",mouseOverSqueeze).on("mouseout",mouseOutSqueeze),this.hasClass("symbol")&&this.on("mousedown",function(){s.animate(300,animationTiming.swingTo,0).dmove(7,7),h.animate(300,animationTiming.swingTo,0).dmove(-7,-7),m.animate(300,animationTiming.swingTo,0).dmove(3.5,-3.5),d.animate(300,animationTiming.swingTo,0).dmove(-3.5,3.5)}).on("mouseup",function(){s.animate(300,animationTiming.swingTo,0).dmove(-7,-7),h.animate(300,animationTiming.swingTo,0).dmove(7,7),m.animate(300,animationTiming.swingTo,0).dmove(-3.5,3.5),d.animate(300,animationTiming.swingTo,0).dmove(3.5,-3.5)})});var p=[a.fNameLetter0,a.fNameLetter1,a.fNameLetter2,a.fNameLetter3,a.fNameLetter4,a.fNameLetter5,a.fNameLetter6],f=[a.lNameLetter0,a.lNameLetter1,a.lNameLetter2,a.lNameLetter3,a.lNameLetter4,a.lNameLetter5,a.lNameLetter6],u=[a.prefixLetter0,a.prefixLetter1,a.prefixLetter2,a.prefixLetter3,a.prefixLetter4,a.prefixLetter5,a.prefixLetter6,a.prefixLetter7],g=[a.suffixLetter0,a.suffixLetter1,a.suffixLetter2,a.suffixLetter3,a.suffixLetter4,a.suffixLetter5,a.suffixLetter6,a.suffixLetter7,a.suffixLetter8];p.map(function(t){t=e.path(t),s.add(t)}),f.map(function(t){t=e.path(t),h.add(t)}),u.map(function(t){t=e.path(t),m.add(t)}),g.map(function(t){t=e.path(t),d.add(t)});var y="Wat"+window.innerWidth>screen.mobile,w=window.innerWidth>screen.mobile,v=window.matchMedia("(orientation: landscape)").matches;switch(w||v){case!0:o.animate(600,animationTiming.bounceOut,200).rotate(0).scale(1).opacity(1).delay(9e3).animate(3e3,animationTiming.elastic,3e3).rotate(-.05).scale(.99).scale(1.01).rotate(.05).scale(1).rotate(0).loop();break;case!1:o.animate(600,animationTiming.bounceOut,200).cx(150).rotate(-90).scale(1).opacity(1).delay(9e3).animate(3e3,animationTiming.elastic,3e3).scale(.99).scale(1.01).scale(1).loop();break;default:console.error(y)}switch(w||v){case!0:n.animate(1e3,animationTiming.elastic,1e3).dx(-100).opacity(1),r.animate(1e3,animationTiming.elastic,1e3).dx(100).opacity(1),c.animate(800,animationTiming.elastic,1e3).opacity(1).scale(1);break;case!1:n.rotate(-90).dy(35).animate(1e3,animationTiming.elastic,1e3).dx(-308).opacity(1),r.rotate(-90).dy(-35).dx(-154).animate(1e3,animationTiming.elastic,1e3).dx(150).opacity(1),c.dy(1540).animate(800,animationTiming.elastic,1e3).opacity(1).scale(1);break;default:console.error(y)}switch(w||v){case!0:s.animate(400,animationTiming.swingTo,1800).dmove(-52,-70).opacity(1);break;case!1:s.dy(154).rotate(-10).animate(400,animationTiming.swingTo,1800).dmove(-52,-70).opacity(1);break;default:console.error(y)}switch(w||v){case!0:h.animate(400,animationTiming.swingTo,2100).dmove(52,70).opacity(1);break;case!1:h.dy(154).rotate(-10).animate(400,animationTiming.swingTo,2100).dmove(52,70).opacity(1);break;default:console.error(y)}switch(w||v){case!0:m.animate(400,animationTiming.swingTo,3e3).dmove(-52,70).opacity(1);break;case!1:m.dy(154).rotate(9).animate(400,animationTiming.swingTo,3e3).dmove(-52,70).opacity(1);break;default:console.error(y)}switch(w||v){case!0:d.animate(400,animationTiming.swingTo,3300).dmove(52,-70).opacity(1);break;case!1:d.dy(154).rotate(9).animate(400,animationTiming.swingTo,3300).dmove(52,-70).opacity(1);break;default:console.error(y)}}!function(){var t=void 0,a=function(){t||(t=setTimeout(function(){t=null,i()},900))},e={width:window.innerWidth,height:window.innerHeight,variance:"1",x_colors:"YlOrRd",y_colors:"random"},i=function(){for(var t=Trianglify(e),a=document.getElementsByTagName("canvas"),i=a.length-1;0<=i;i--)a[i].remove();document.body.appendChild(t.canvas())};document.body.appendChild(Trianglify(e).canvas()),window.addEventListener("resize",a,!1),window.addEventListener("orientationchange",a,!1)}();var renderFriends=function t(a){var e=a.data.friend,i=SVG("friend");i.viewbox("0 -1 52 62"),i.path(e).fill({opacity:0}).stroke({color:"#fe5f55",opacity:1,width:1}),new Vivus(i.node,{type:"delayed",duration:1200});var o=document.querySelector("#friend svg");o.onclick=function(){for(var a=o;a.parentNode;)a.parentNode.removeChild(a);null===getObj("mattiasIcons")?axios.get("/src/icons.json").then(function(a){return t(a)}):t(getObj("mattiasIcons"))}},renderSkills=function t(a){var e=a.data.skills,i=SVG("skills");i.viewbox("0 0 512 512");var o=[i.path(e.desktopBackground),e.desktopFrame.map(function(t){return i.path(t)}),i.path(e.desktopScreenBackground),e.desktopCode.map(function(t){return i.path(t)})],n=o[0],r=o[1],c=o[2],l=o[3];n.fill(e.colors[0]),r.forEach(function(t,a){t.fill(e.colors[a+1])}),c.fill(e.colors[4]),l.forEach(function(t,a){var i=t.width(),o=[5,2,6,7],n=Math.floor(Math.random()*o.length);t.fill(e.colors[o[n]]),t.width(o[n]).opacity(0),t.animate(400,">",100*(a+1)).opacity(1).width(i).afterAll(function(){19===++a&&v()})});var s=i.path(e.tabletBase),h=i.path(e.tabletScreen),m=i.circle().attr({cx:428.2,cy:173.2,r:2.5});s.fill(e.colors[0]),[h,m].map(function(t){t.fill(e.colors[1])}),h.opacity(.5);var d=[i.path(e.articleTabletPanel1),i.path(e.articleTabletHeadline1),i.path(e.articleTabletPanel2),i.path(e.articleTabletParagraph),i.path(e.articleTabletHeadline2),i.path(e.articleTabletHeader)],p=d[0],f=d[1],u=d[2],g=d[3],y=d[4],w=d[5];[p,u].map(function(t){t.fill(e.colors[4]).opacity(0)}),[f,y].map(function(t){t.fill(e.colors[0]).opacity(0)}),g.fill(e.colors[1]).opacity(0),w.fill(e.colors[5]).opacity(0);var v=function(){h.animate(400,">").opacity(1).after(function(){var t=w.width(),a=p.height(),e=u.height(),i=f.width(),o=y.width(),n=g.height();w.width(1).animate(400,"<>").width(t).opacity(1).after(function(){G(),u.height(1).animate(400,">",400).height(e).opacity(1).after(function(){y.width(1).animate(400,">").width(o).opacity(1),p.height(1).animate(400,">").height(a).opacity(1).after(function(){g.height(1).animate(400,">").height(n).opacity(1),f.width(1).animate(400,">").width(i).opacity(1)})})})})},b=i.path(e.phoneBase),T=i.path(e.phoneScreen),x=i.path(e.phoneSpeaker),L=i.path(e.phoneHomeBtn),k=i.circle().attr({cx:247.2,cy:423.7,r:1.8});b.fill(e.colors[0]),[T,x,L,k].map(function(t){t.fill(e.colors[1])}),T.opacity(.5);var j=[i.path(e.articlePhonePanel1),i.path(e.articlePhoneParagraph1),i.path(e.articlePhoneHeadline1),i.path(e.articlePhonePanel2),i.path(e.articlePhoneParagraph2),i.path(e.articlePhoneHeadline2),i.path(e.articlePhoneHeader)],O=j[0],S=j[1],N=j[2],C=j[3],P=j[4],I=j[5],V=j[6];[O,C].map(function(t){t.fill(e.colors[4]).opacity(0)}),[S,P].map(function(t){t.fill(e.colors[1]).opacity(0)}),[N,I].map(function(t){t.fill(e.colors[0]).opacity(0)}),V.fill(e.colors[5]).opacity(0);var G=function(){T.animate(400,">").opacity(1).after(function(){var t=V.width(),a=O.height(),e=C.height(),i=N.width(),o=I.width(),n=S.height(),r=P.height();V.width(1).animate(400,"<>").width(t).opacity(1).after(function(){C.height(1).animate(400,">",400).height(e).opacity(1).after(function(){I.width(1).animate(400,">").width(o).opacity(1),O.height(1).animate(400,">").height(a).opacity(1).after(function(){P.height(1).animate(400,">").height(r).opacity(1),N.width(1).animate(400,">").width(i).opacity(1),S.height(1).animate(400,">").height(n).opacity(1)})})})})},E=document.querySelector("#skills svg");E.onclick=function(){for(var a=E;a.parentNode;)a.parentNode.removeChild(a);null===getObj("mattiasIcons")?axios.get("/src/icons.json").then(function(a){return t(a)}):t(getObj("mattiasIcons"))}},renderWork=function t(a){var e=a.data.work,i=SVG("jobs");i.viewbox("0 0 512 512");var o=i.path(e.base).opacity(0),n=i.path(e.headline).opacity(0),r=i.path(e.paragraph).opacity(0),c=i.path(e.redBg).opacity(0),l=i.path(e.topHeadline).opacity(0),s=i.circle().attr({cx:256,cy:176.64,r:40.4}).opacity(0),h=i.path(e.body).opacity(0);o.fill(e.colors[0]),n.fill(e.colors[1]),c.fill(e.colors[3]),[r,l].map(function(t){t.fill(e.colors[2])}),[s,h].map(function(t){t.fill(e.colors[4])});var m=o.height(),d=c.width(),p=l.width(),f=n.width(),u=r.height(),g=s.attr("r"),y=h.height();o.height(1).animate(400,"<>").height(m).opacity(1).after(function(){c.width(1).animate(400,"<").width(d).opacity(1).after(function(){l.width(1).animate(200,">").width(p).opacity(1).after(function(){n.width(1).animate(400,"<>").width(f).opacity(1),r.height(1).animate(400,"<>").height(u).opacity(1).after(function(){s.attr("r",0).animate(200,"<>").attr("r",g+10).opacity(1).after(function(){h.height(1).animate(200).height(y).opacity(1)}).animate(200,"<>").attr("r",g)})})})});var w=document.querySelector("#work svg");w.onclick=function(){for(var a=w;a.parentNode;)a.parentNode.removeChild(a);null===getObj("mattiasIcons")?axios.get("/src/icons.json").then(function(a){return t(a)}):t(getObj("mattiasIcons"))}},renderContact=function t(a){var e=a.data.contact,i=SVG("message");i.viewbox("0 0 512 512");var o=i.polygon(e.poly).fill(e.colors[0]).opacity(0),n=i.path(e.path).fill(e.colors[1]).opacity(0),r=75;[0,1,2,3,4].forEach(function(t,a){i.rect().attr({x:a%2?256:122,y:0===a?r:r+=50,fill:e.colors[2],width:a%2?133:266,height:16}).opacity(0).delay(800).animate(400,"<>").opacity(1)});var c=o.height(),l=n.width();n.width(1).animate(400,"<>").width(l).opacity(1).after(function(){o.height(1).animate(400,">").height(c).opacity(1)});var s=document.querySelector("#contact svg");s.onclick=function(){for(var a=s;a.parentNode;)a.parentNode.removeChild(a);null===getObj("mattiasIcons")?axios.get("/src/icons.json").then(function(a){return t(a)}):t(getObj("mattiasIcons"))}},renderSocial=function(t){var a=t.data.social,e=SVG("untappd"),i=SVG("dribbble"),o=SVG("github"),n=SVG("lastfm"),r=SVG("linkedin"),c=SVG("quora"),l=SVG("twitter");e.viewbox("0 0 296 246"),e.path(a.untappd[0]),e.path(a.untappd[1]),e.path(a.untappd[2]),e.fill("#ffc000"),i.viewbox("0 0 430 430"),i.path(a.dribbble),i.fill("#ea4c89"),o.viewbox("0 0 90 90"),o.path(a.github),o.fill("#171515"),n.viewbox("0 0 430 430"),n.path(a.lastfm),n.fill("#b80610"),r.viewbox("0 0 430 430"),r.path(a.linkedin),r.fill("#007bb5"),c.viewbox("0 0 430 430"),c.path(a.quora),c.fill("#a82400"),l.viewbox("0 0 430 430"),l.path(a.twitter),l.fill("#55acee")};axios.get("/src/icons.json").then(function(t){null===getObj("mattiasIcons")&&setObj("mattiasIcons",t),t=null===getObj("mattiasIcons")?t:getObj("mattiasIcons"),renderSkills(t),renderFriends(t),renderContact(t),renderSocial(t),renderWork(t)});var animationTiming={elastic:function(t){return t==!!t?t:Math.pow(2,-10*t)*Math.sin((t-.075)*(2*Math.PI)/.3)+1},swingTo:function(t){var a=1.70158;return(t-=1)*t*((a+1)*t+a)+1},bounceOut:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},mouseOverSqueeze=function(){this.animate(200,animationTiming.swingTo,0).scale(.95)},mouseOutSqueeze=function(){this.animate(200,animationTiming.swingTo,0).scale(1).finish()},screen={mobile:768};!function(){var t=void 0,a=function(){t||(t=setTimeout(function(){t=null,e()},900))},e=function(){for(var t=document.getElementById("logo");t.firstChild;)t.removeChild(t.firstChild);null===getObj("mattiasLogo")?axios.get("/src/logo.json").then(function(t){return runLogo(t)}):runLogo()};document.onreadystatechange=function(){"complete"===document.readyState&&axios.get("/src/logo.json").then(function(t){return runLogo(t)})},window.addEventListener("resize",a,!1),window.addEventListener("orientationchange",a,!1)}(),function(){function t(t){var a=t.data.profile;null===getObj("mattiasProfile")&&setObj("mattiasProfile",t);var e=SVG("profile");e.viewbox("0 0 567 757").size("260px","400px");var i=e.path(a.main),o=e.path(a.eyeLeft),n=e.path(a.eyeRight),r=e.path(a.shoulder),c=e.group(),l=[i,o,n,r];l.map(function(t){c.add(t)}),c.fill({color:"#553E48",opacity:.95}).stroke({color:"#553E48",opacity:.5,width:"50px"}).scale(.1,-.1).translate(0,867).attr("stroke-linejoin","round"),l.map(function(t){t.opacity(0).translate(400,-400),t.animate(600,function(t){var a=1.70158;return(t-=1)*t*((a+1)*t+a)+1},1200).opacity(1).translate(0,0)})}null===getObj("mattiasProfile")?axios.get("/src/profile.json").then(function(a){return t(a)}):t(getObj("mattiasProfile"))}();
//# sourceMappingURL=index.js.map
