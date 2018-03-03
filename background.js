'use strict';

// Finds the tab containing google play and 
function getPlayTab(){
    const playTabPromise = browser.tabs.query({url: "*://play.google.com/music/*"});;
    return playTabPromise;
}

// Listens for user to click on the icon, then executes script in the chrome tab
browser.browserAction.onClicked.addListener(function(activeTab){
    const playTabPromise = getPlayTab();
    playTabPromise.
        then(output => {
            if (output.length == 0){
                throw "ERROR: No Google Play Tab Found"
            }
            else{
                // execute in the first google play tab if multiple found
                browser.tabs.executeScript(output[0].id, {file: "content_scripts/addToLibrary.js"});   
            }
    })
        .catch(error => console.log(error));
});