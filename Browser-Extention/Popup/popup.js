document.addEventListener('DOMContentLoaded', function() {
    console.log("Hi Console");
  });

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('black').addEventListener('click', function() {
        changeBackgroundColor('#212121');
    });

    document.getElementById('white').addEventListener('click', function() {
        changeBackgroundColor('white');
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
