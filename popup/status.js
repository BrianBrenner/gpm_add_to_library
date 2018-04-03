'use strict';

// Sends query to find tabs with google play url and returns a promise
function getPlayTab(){
    const playTabPromise = browser.tabs.query({url: "*://play.google.com/music/*"});;
    return playTabPromise;
}


function displayResult(msg, color) {
    console.log('popup');
    const popup = browser.extension.getViews({
        type: "popup"
    })[0];
    console.log(popup);
    popup.document.getElementById('loading').style.display = 'none';
    popup.document.getElementById('display-message').innerHTML= msg;
    popup.document.getElementById('display-message').style.color = color;
    popup.document.getElementById('display-content').style.display = 'block';
        
}

// Executes when user clicks on the button, then executes script in the firsttab with google play a url
(function () {
    const playTabPromise = getPlayTab();
    playTabPromise.
        then(output => {
            if (output.length == 0){
                displayResult('ERROR: No Google Play Tab Found', 'red');
                throw "ERROR: No Google Play Tab Found"
            }
            else{
                // execute in the first google play tab if multiple found
                browser.tabs.executeScript(output[0].id, {file: "../content_scripts/addToLibrary.js"});   
                displayResult('Successfully Added Song', 'black');
            }
    })
        .catch(error => console.log(error));
})();
