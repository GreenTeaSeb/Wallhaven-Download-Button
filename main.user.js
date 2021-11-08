// ==UserScript==
// @name     Wallhaven download full size
// @version  1
// @grant    none
// @description Adds a button to quickly download the full image
// @include https://wallhaven.cc/w/*
// ==/UserScript==

const add_button = async (url) => {
    const download = document.createElement("a");
    const image = document.getElementById("wallpaper").src;
    let blob = await fetch(image).then(b => b.blob());
    download.classList.add("button");
    download.innerText = "Download";
    download.href = URL.createObjectURL(blob);
    download.download = image.replace(/^.*[\\\/]/, '');
    document.getElementById("fav-button").insertAdjacentElement("afterend", download);
}

add_button();
