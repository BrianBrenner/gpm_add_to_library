'use strict';
// Content script to add current playing song to your library
(function addToLibrary(){
    console.log('clicked');
    // the 3 dots near the play button
    const menuButton = document.querySelector('[data-id=now-playing-menu]');
    // have to click the button because it changes some of the html
    menuButton.click();
    // the menu that pops up when click the 3 buttons
    const menu = document.querySelector('.song-menu');
    // this is the html attribute that changes depending the element you are hovering over
    menu.setAttribute('aria-activedescendant', ':a');
    // this is the specific table element for add to library
    const libraryElement = document.querySelector('#\\:a');

    const down = new MouseEvent('mousedown',{bubbles:true, cancelable: true, view: window});
    const up = new MouseEvent('mouseup',{bubbles:true, cancelable: true, view: window});
    // click the element, event listens for mouse up and down, not click for some reason
    libraryElement.dispatchEvent(down);libraryElement.dispatchEvent(up);
})();

