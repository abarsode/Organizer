chrome.browserAction.onClicked.addListener(function(tab){
chrome.windows.create(
  {
    url: 'application.html',
    type: "panel",
    width: 250,
    height: 400
  }, appWindowCreated);
});

function appWindowCreated(win){
//console.log('Application pannel is created');
}