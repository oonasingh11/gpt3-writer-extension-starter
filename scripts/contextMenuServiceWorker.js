const generateCompletionAction = async (info) => {}
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'context-run',
    title: 'Generate T Swift song',
    contexts: ['selection'],
  });
});
chrome.contextMenus.onClicked.addListener(generateCompletionAction);
