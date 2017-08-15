browser.browserAction.onClicked.addListener(function(tab){
  console.log('browserAction clicked');
  browser.tabs.executeScript(tab.id, {
    code: "alert('foobar');"
  }, function(){
    console.log('executeScript done');
  });
});