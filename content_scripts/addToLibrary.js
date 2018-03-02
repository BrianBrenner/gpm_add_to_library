'use strict';
// Content script to add current playing song to your library
(function addToLibrary(){
    console.log('clicked');
    const menuButton = document.querySelector('[data-id=now-playing-menu]');
    console.log('about to click');
    menuButton.click();
    const menu = document.querySelector('.song-menu');
    menu.setAttribute('aria-activedescendant', ':a');
    const libraryElement = document.querySelector('#\\:a');

    const down = new MouseEvent('mousedown',{bubbles:true, cancelable: true, view: window});
    const up = new MouseEvent('mouseup',{bubbles:true, cancelable: true, view: window});
    libraryElement.dispatchEvent(down);libraryElement.dispatchEvent(up);
})();

