"use strict";var data=[{title:"Work",timeframes:{daily:{current:5,previous:7},weekly:{current:32,previous:36},monthly:{current:103,previous:128}}},{title:"Play",timeframes:{daily:{current:1,previous:2},weekly:{current:10,previous:8},monthly:{current:23,previous:29}}},{title:"Study",timeframes:{daily:{current:0,previous:1},weekly:{current:4,previous:7},monthly:{current:13,previous:19}}},{title:"Exercise",timeframes:{daily:{current:1,previous:1},weekly:{current:4,previous:5},monthly:{current:11,previous:18}}},{title:"Social",timeframes:{daily:{current:1,previous:3},weekly:{current:5,previous:10},monthly:{current:21,previous:23}}},{title:"Self Care",timeframes:{daily:{current:0,previous:1},weekly:{current:2,previous:2},monthly:{current:7,previous:11}}}],hrTags=document.querySelectorAll(".hr"),lhrTags=document.querySelectorAll(".lhr"),btnTags=document.querySelectorAll(".btn"),looper=function(e,r,t){for(var a=0;a<data.length;a++)data[a].title===e&&(r.textContent="".concat(data[a].timeframes[t].current,"hrs"))},looperTwo=function(e,r,t,a){for(var o=0;o<data.length;o++)data[o].title===e&&(r.textContent="Last ".concat(a," - ").concat(data[o].timeframes[t].previous,"hrs"))},changer=function(e,r,t,a){e.forEach((function(e){switch(e.dataset.title){case"work":r("Work",e,t,a);break;case"play":r("Play",e,t,a);break;case"study":r("Study",e,t,a);break;case"exe":r("Exercise",e,t,a);break;case"social":r("Social",e,t,a);break;case"sc":r("Self Care",e,t,a)}}))};btnTags.forEach((function(e){e.addEventListener("click",(function(){document.querySelector(".active").classList.remove("active"),e.classList.add("active"),"Daily"===e.textContent?(changer(hrTags,looper,"daily"),changer(lhrTags,looperTwo,"daily","Day")):"Weekly"===e.textContent?(changer(hrTags,looper,"weekly"),changer(lhrTags,looperTwo,"weekly","Week")):(changer(hrTags,looper,"monthly"),changer(lhrTags,looperTwo,"monthly","Month"))}))})),document.querySelector(".active").click();
//# sourceMappingURL=script.js.map