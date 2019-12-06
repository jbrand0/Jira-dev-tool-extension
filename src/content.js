const localContentStateMap = {
    'checkBoxValue': false
};

document.addEventListener("DOMContentLoaded", initContentScript);

function initContentScript(event) { 
    console.log('starting main content script...')

    chrome.storage.local.get('checkBoxValue', (entry)=>{
        localContentStateMap['checkBoxValue'] = entry.checkBoxValue;

        fixJiraUrl();
        window.addEventListener('popstate', () => {
            fixJiraUrl();
        });
    });
};

function fixJiraUrl() {
    const jiraIssue = 'atlassian.net/browse/APP'
    let currentUrl = window.location.href;
    const queryParam = '?oldIssueView=true';

    // old issue view query param needs to be root param otherwise infinite loop
    // for now - arbitrarily check for a possible param and don't count it as eligible
    const isEligibleUrl = currentUrl.includes(jiraIssue) && !currentUrl.includes('?');
    if (isEligibleUrl && localContentStateMap['checkBoxValue']){
        window.location.href = `${currentUrl}${queryParam}`;
    }
}