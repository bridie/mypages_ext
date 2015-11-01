chrome.browserAction.onClicked.addListener(function (tab) {
	$.ajax({
  		type: 'post',
  		url: 'http://localhost:3000/pages',
  		data: { url: tab.url },
  		dataType: 'json',
  		success: function(res) {
  		}
	})
});