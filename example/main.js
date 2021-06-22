var $ = document;

var fileInput = $.getElementById('file');
var output = $.getElementById('output');
var text = $.getElementById('text');
var includeMime = $.getElementById('includeMime');

fileInput.value = '';
text.value = '';

var base64;
var file;

function update() {
  if (!file) return;
  if (!base64) return;
  var prefixed = 'data:' + file.type + ';base64,' + base64;
  text.value = includeMime.checked ? prefixed : base64;
  text.style.display = 'block';
  output.src = prefixed;
}

text.onfocus = function(event) {
  text.select();
}

includeMime.onchange = function(event) {
  update();
}

fileInput.onchange = function(event) {
  file = event.currentTarget.files[0];

  fileToBase64(file, function(_base64) {
    base64 = _base64
    console.log(base64);
    update();
  });
};
