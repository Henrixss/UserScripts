// ==UserScript==
// @name         Chest Collector
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically collect the bonus chest that give points and appears from time to time
// @author       Henrixss
// @match        https://www.twitch.tv/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitch.tv
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //depois de 10 seg de trocar de "canal" resetar as variaveis
    (function(history){
        var pushState = history.pushState;
        history.pushState = function(state) {
            setTimeout(prepararObservador, 10000)
            //console.log('I am called from pushStateHook');
            return pushState.apply(history, arguments);
        };
    })(window.history);

    setTimeout(prepararObservador, 20000)//esperar 20 seg para dar tempo de carregar o chat

    function prepararObservador(){
        //console.log("Alou Marilene")
        if(document.querySelector(".ScCoreButtonSuccess-sc-ocjdkq-5")){
            document.querySelector(".ScCoreButtonSuccess-sc-ocjdkq-5").click()
        }

        let divPai = document.querySelector(".CDgpA").children[0];

        let observer = new MutationObserver(resgatarBau);

        observer.observe(divPai, {
            childList: true, // observe direct children
            subtree: true, // lower descendants too
        })
    }

    function resgatarBau(){
        console.log("Bau resgatado com sucesso")
        if(document.querySelector(".ScCoreButtonSuccess-sc-ocjdkq-5")){
            document.querySelector(".ScCoreButtonSuccess-sc-ocjdkq-5").click()
        }
    }

})();