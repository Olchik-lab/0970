// ==UserScript==
// @name         Yandex_Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       TsapovaOlga
// @match        https://ya.ru/*
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @grant        none
// ==/UserScript==

let keywords = ["как звучит флейта","кларнет"];
let btn = document.getElementsByClassName("button mini-suggest__button button_theme_search")[0];
let nextBtn = document.getElementsByClassName("link link_theme_none lin…xt i-bem link_js_inited")[0];
let yandexInput = document.getElementsByName("text")[0];
let links = document.links;
let keyword = keywords[getRandom(0,keywords.length)];



if (btn !==undefined) {
    let i = 0;
    let timerId = setInterval(()=>{
        yandexInput.value += keyword[i];
        i++;
        if (i == keyword.length) {
            clearInterval(timerId);
            btn.click();
        }
    },500);

}else if(location.hostname == 'xn----7sbab5aqcbiddtdj1e1g.xn--p1ai'){
    //console.log("Мы на сайте");
    setInterval(()=>{
        let index = getRandom(0, links.length);
        if(getRandom(0,101) >= 80) {
            location.href = "https://yandex.ru";
        }
        if (links[index].href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") !== -1);
            links[index].click();}, getRandom(1000, 5000));
}else {
    let nextYandexPage = true;
    for (let i=0; i<links.length; i++){
        if (links[i].href.includes('https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/')){
            let link = links[i];
            let nextYandexPage = false;
            setTimeout(()=>{link.click();},getRandom(3000,7000));
            console.log("Нашел строку"+links[i]);
            break;
        }
    }
    if (document.querySelector('.pager__item pager__item_current_yes pager__item_kind_page').innerText == 5) {
        let nextYandexPage = false;
        location.href = "https://ya.ru";
}
    if (nextYandexPage) {
        setTimeout(()=>{nextBtn.click();},getRandom(2000,6000));
    }
}
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min)+min)
}
