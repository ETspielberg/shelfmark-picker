chrome.contextMenus.create({
    title: "zum Ausleihprotokoll",
    contexts:["selection"],
    onclick: function(word){
        chrome.storage.sync.get(['protocolUrl'], function(result) {
            chrome.tabs.create({url: result.protocolUrl + "/protokoll?shelfmark=" + word.selectionText.trim().replace(" ", "")});
        });
    }
});
