const localContentStateMap = {
    'checkBoxValue': false
};

$(document).ready(() => {
    // setup listener for messages from background script in content.js
    console.log('starting main content script...')

    chrome.storage.local.get('checkBoxValue', (entry)=>{
        localContentStateMap['checkBoxValue'] = entry.checkBoxValue;

        fixJiraUrl();
        window.addEventListener('popstate', () => {
            fixJiraUrl();
        });
    });
});

function fixJiraUrl() {
    const jiraIssue = 'atlassian.net/browse/APP'
    let currentUrl = window.location.href;
    const oldJiraViewQueryParam = '?oldIssueView=true';

    const isEligibleUrl = currentUrl.includes(jiraIssue) && !currentUrl.includes(oldJiraViewQueryParam);
    if (isEligibleUrl && localContentStateMap['checkBoxValue']){
        window.location.href = `${currentUrl}${oldJiraViewQueryParam}`;
    }
}