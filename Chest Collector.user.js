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

    setTimeout(prepararObservador, 30000)

    function prepararObservador(){
        //alert("p/30seg")
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

    console.log("testando")

    function resgatarBau(){
        if(document.querySelector(".ScCoreButtonSuccess-sc-ocjdkq-5")){
            document.querySelector(".ScCoreButtonSuccess-sc-ocjdkq-5").click()
            console.log("Bau foi resgatado com sucesso")
        }
    }

})();