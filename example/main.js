var fileInput = document.getElementById('file');
var output = document.getElementById('output');

fileInput.onchange = function(e) {
  var file = e.currentTarget.files[0];

  fileToBase64(file, function(base64) {
    console.log(base64); // iVBORw0KGgoAAAANSUhEUgAAADY...

    output.src = ['data:image/png;base64,', base64].join('');
  });

};
