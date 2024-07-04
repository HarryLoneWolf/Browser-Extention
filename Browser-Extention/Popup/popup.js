document.addEventListener('DOMContentLoaded', function() {
    console.log("Hi Console");
  });

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('blue').addEventListener('click', function() {
        changeBackgroundColor('lightblue');
    });

    document.getElementById('green').addEventListener('click', function() {
        changeBackgroundColor('lightgreen');
    });

    document.getElementById('coral').addEventListener('click', function() {
        changeBackgroundColor('lightcoral');
    });

    function changeBackgroundColor(color) {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                { code: 'document.body.style.backgroundColor = "' + color + '";' }
            );
        });
    }
});
