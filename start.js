var s = document.createElement('script');
s.src = chrome.runtime.getURL('analyser.js');
s.onload = function() {
  this.remove();
};
document.body.appendChild(s);