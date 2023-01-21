chrome.runtime.onInstalled.addListener((reason) => {
    if (reason === chrome.runtime.OnInstalledReason.INSTALL) {
      chrome.tabs.create({
        url: "https://www.wikipedia.org/"
      });
    }
  });

chrome.tabs.onUpdated