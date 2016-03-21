function getSelection(info, tab) {
    chrome.tabs.create({
        url: "http://www.iciba.com/" + info.selectionText
    });
}
chrome.contextMenus.create({
    title: "词霸: %s",
    contexts: ["selection"],
    onclick: getSelection
});
//# sourceMappingURL=bk.js.map