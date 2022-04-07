// ==UserScript==
// @name         USA Flag Collab
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  USA Outline!
// @author       cover - script, cover - image
// @match        https://rplace.tk/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementById("canvparent2").appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://i.imgur.com/wALkAOl.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            console.log(i);
            return i;
        })())

    }, false);

}
