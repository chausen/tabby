chrome.commands.onCommand.addListener((command) => {
    chrome.tabs.query({currentWindow: true}, (tabs) => {
        let urls = tabs.map(tab => tab.url);        
        chrome.tabs.query({active: true, currentWindow: true}, (filteredTabs) => {
            chrome.tabs.sendMessage(filteredTabs[0].id,
                {
                    message: "copyText",
                    textToCopy: urls
                });
        });        
    });
  });