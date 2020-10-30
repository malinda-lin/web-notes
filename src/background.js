/* eslint-disable no-undef */
// TODO: Upon clicking the extension in the context menu, the options for Web Notes should appear
const showFeatures = (event) => {
  console.log('created note!');

};

chrome.runtime.onInstalled.addListener(() => {
  // These lines add the extension to the context menu
  chrome.contextMenus.onClicked.addListener((event) => showFeatures(event));
  chrome.contextMenus.create({
    id: 'Web Notes',
    title: 'Create Note',
    contexts: ['all'],
  });
});
