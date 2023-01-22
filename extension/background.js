const filterWork = [
    "wikipedia.",
    "notion.",
    "canvas.",
    "ubc.ca"]

const filterSocial = [
    "facebook.",
    "instagram.",
    "discord."]

const filterMedia = [
    "youtube.",
    "netflix.",
    "stackoverflow."];



chrome.storage.local.set({
    "logs": [],
    "workTime": 0,
    "socialTime": 0,
    "mediaTime": 0
})


// chrome.storage.local.get(["filter"], function(result){
//     console.log(result.filter[0])
// })

chrome.tabs.onActivated.addListener(
    function (activeInfo) {
        chrome.tabs.get(activeInfo.tabId, function (tab) {
            chrome.storage.local.get(["logs"], function (result) {
                let date = new Date();
                let updated = [[tab.url, date.getTime()]].concat(result.logs);
                // console.log(updated)
                chrome.storage.local.set({ logs: updated })
            })
        }
        )
    });

chrome.webNavigation.onCompleted.addListener(
    function(activeInfo){
        chrome.tabs.get(activeInfo.tabId, function (tab) {
            chrome.storage.local.get(["logs"], function (result) {
                let date = new Date();
                let updated = [[tab.url, date.getTime()]].concat(result.logs);
                // console.log(updated)
                chrome.storage.local.set({ logs: updated })
            })
        }
        )
    }
)

chrome.storage.onChanged.addListener(
    function (changes, areaName) {
        if (changes.logs != undefined && changes.logs.oldValue.length != 0 && changes.logs.newValue.length != 0) {
            const timeSpent = Math.floor((changes.logs.newValue[0][1] - changes.logs.oldValue[0][1]) / 1000)
            if (isValid(changes.logs.oldValue[0][0], filterWork)) {
                chrome.storage.local.get(["workTime"], function (result) {
                    chrome.storage.local.set({ workTime: result.workTime + timeSpent },
                        function () {
                            console.log("added work: " + result.workTime + " + " + timeSpent)
                        })
                })
            } else {
                if (isValid(changes.logs.oldValue[0][0], filterSocial)) {
                    chrome.storage.local.get(["socialTime"], function (result) {
                        chrome.storage.local.set({ socialTime: result.socialTime + timeSpent },
                            function () {
                                console.log("added social: " + result.socialTime + " + " + timeSpent)
                            })
                    })
                } else {
                    if (isValid(changes.logs.oldValue[0][0], filterMedia)) {
                        chrome.storage.local.get(["mediaTime"], function (result) {
                            chrome.storage.local.set({ mediaTime: result.mediaTime + timeSpent },
                                function () {
                                    console.log("added media: " + result.mediaTime + " + " + timeSpent)
                                })
                        })
                    }
                }
            }
        }

    })

function isValid(url, filter) {
    let status = false;
    for (x in filter) {
        if (url.indexOf(filter[x]) != -1) {
            status = true;
        }
    }
    return status
}