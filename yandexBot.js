// ==UserScript==
// @name         Yandex_Bot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       TsapovaOlga
// @match        https://ya.ru/*
// @match        https://yandex.ru/*
// @match        https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @match        https://psyholog.me/*
// @match        https://motoreforma.com/*
// @grant        none
// ==/UserScript==


let sites = {
"https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/":["как звучит флейта","кларнет"],
"psyholog.me":["центр здоровых отношений", "Услуги центра здоровых отношений", "Чекалина Елена психолог"],
"motoreforma.com":["мотореформа", "прошивки для CAN-AM", "тюнинг Maverikc X3", "тюнинг для квадроциклов CAN-AM", "вариатор CV-Tech для Can-Am"]
}
let site = Object.keys(sites)[getRandom(0,Object.keys(sites).length)];
let keywords = sites[site];

//let keywords = ["кофе машина","как звучит флейта","кларнет"];

let btn = document.getElementsByClassName("button mini-suggest__button button_theme_search")[0];
let nextBtn = document.getElementsByClassName("pager__item_kind_next")[0];
let yandexInput = document.getElementsByName("text")[0];
let links = document.links;
let keyword = keywords[getRandom(0,keywords.length)];

if (btn !== undefined) {
    document.cookie = `site = ${site}`;
}else if (location.hostname = "www.yandex.ru"){
site = getCookie("site");
}else {
site = location.hostname;
}

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

}else if(location.hostname == site){
    //console.log("Мы на сайте");
    setInterval(()=>{
        let index = getRandom(0, links.length);
        if(getRandom(0,101) >= 80) {
            location.href = "https://yandex.ru";
        }
        if (links[index].href.indexOf(site) !== -1);
            links[index].click();}, getRandom(1000, 5000));
}else {
    let nextYandexPage = true;
    for (let i=0; i<links.length; i++){
        if (links[i].href.includes(site)){
            let link = links[i];
            let nextYandexPage = false;
            setTimeout(()=>{link.click();},getRandom(3000,7000));
            console.log("Нашел строку"+links[i]);
            break;
        }
    }
    if (document.querySelector('[aria-label="Текущая страница 3"]')) {
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
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
