const filter = [
    "youtube",
    "netflix",
    "stackoverflow"];


let tabList = [];
chrome.tabs.onActivated.addListener(
    function(activeInfo){
        chrome.tabs.get(activeInfo.tabId, function(tab){
            if (isValid(tab.url)){
                tabList.unshift(tab.url);
            }
        })
    }
);

function isValid(tab){
    let status = false;
    for (x in filter){
        if (tab.indexOf(filter[x]) != -1){
            status = true;
        }
        console.log(filter[x]);
    }
    return status
}