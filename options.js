document.getElementById("save").addEventListener('click', saveUrl);

function saveUrl() {
    var url = document.getElementById('protocol').value + document.getElementById('protocolUrl').value;
    chrome.storage.sync.set({protocolUrl: url}, function() {
    });
    var status = document.getElementById('status');
    status.textContent = 'Server-Adresse gespeichert.';
    setTimeout(function() {
        status.textContent = '';
    }, 750);
}
