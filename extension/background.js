chrome.storage.local.set({
    "filter":[
        "youtube",
        "netflix",
        "stackoverflow"], 
    "logs":[]})


// chrome.storage.local.get(["filter"], function(result){
//     console.log(result.filter[0])
// })

chrome.tabs.onActivated.addListener(
    function(activeInfo){
        chrome.tabs.get(activeInfo.tabId, function(tab){
            // if (isValid(tab.url)){
                chrome.storage.local.get(["logs"], function(result){
                    let date = new Date();
                    let updated = [[tab.url,date.getTime()]].concat(result.logs);
                    console.log(updated)
                    chrome.storage.local.set({logs: updated})
                })
            // }
        })
    }
);

chrome.storage.onChanged.addListener(
    function(changes, areaName){
        if (changes.logs.oldValue.length != 0 &&  changes.logs.newValue.length != 0) {
            const timeSpent = Math.floor((changes.logs.newValue[0][1]-changes.logs.oldValue[0][1])/1000)
            // if 
}
})

function isValid(tab){
    let status = false;
    chrome.storage.local.get(["filter"],
    function(result){
    const filter = result.filter;
    for (x in filter){
        if (tab.indexOf(filter[x]) != -1){
            status = true;
        }
        return status}})
}