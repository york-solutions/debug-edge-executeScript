browser.browserAction.onClicked.addListener(function(tab){
  console.log('browserAction clicked');

  browser.tabs.executeScript(tab.id, {
    code: "document.body.style.backgroundColor = 'red';"
  }, function(){
    console.log('executeScript(tab.id, code) done');
  });

  browser.tabs.executeScript(null, {
    code: "alert('executeScript(null, code)');"
  }, function(){
    console.log('executeScript(null, code) done');
  });

  browser.tabs.executeScript({
    code: "alert('executeScript(code)');"
  }, function(){
    console.log('executeScript(code) done');
  });
});