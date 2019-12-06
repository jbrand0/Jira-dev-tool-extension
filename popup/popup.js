document.addEventListener('DOMContentLoaded', init);

const localStateMap = {
    'checkBoxValue': false
}

function init() {
    console.log('running popup code');
    // attach initial listeners
    const resultsButton = document.getElementById("activate");
    resultsButton.addEventListener('click', toggleCheckBox);

    // fetch checkbox value from chrome storage & handle setting
    chrome.storage.local.get('checkBoxValue', (entry)=>{
        localStateMap['checkBoxValue'] = entry.checkBoxValue;
        if(!localStateMap['checkBoxValue']) {
            localStateMap['checkBoxValue'] = false;
            chrome.storage.local.set({'checkBoxValue': false}, ()=>{});
        }
    
        updateCheckbox(localStateMap['checkBoxValue']);
    });
}

function toggleCheckBox(event) {
    chrome.storage.local.set({'checkBoxValue': event.target.checked}, ()=>{});
}

function updateCheckbox(value) {
    const resultsButton = document.getElementById("activate");
    resultsButton.checked = value;
}