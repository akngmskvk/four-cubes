var loadingBarContainer = document.getElementById('loadingBarContainer');

var size = loadingBarContainer.getAttribute('size');
var rate = parseInt(size) / 550;
loadingBarContainer.style.transform = 'scale(' + rate + ',' + rate + ')';
