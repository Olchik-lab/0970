// ==UserScript==
// @name         Yandex_Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       TsapovaOlga
// @match        https://ya.ru/*
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==

let keywords = ["как звучит флейта","кларнет"];
let btn = document.getElementsByClassName("button mini-suggest__button button_theme_search")[0];
let links = document.links;
let keyword = keywords[getRandom(0,keywords.length)];
document.getElementsByName("text")[0].value = keyword;


if (btn !==undefined) {
    btn.click();
}else {
    for (let i=0; i<links.length; i++){
        if (links[i].href.includes('https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/')){
            let link = links[i];
            link.click();
            console.log("Нашел строку"+links[i]);
            break;
        }
    }
}
function getRandom(min,max){
return Math.floor(Math.random()*(max-min)+min)
}
