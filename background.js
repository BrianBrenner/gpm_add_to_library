browser.browserAction.onClicked.addListener(function(activeTab){
    browser.tabs.executeScript(null, {file: "content_scripts/addToLibrary.js"});   
});