# File to Base64

Takes in a File object and returns a base64 string with the help of the [`FileReader`](https://developer.mozilla.org/en-US/docs/Web/API/FileReader) API.

# Demo

[https://lab.miguelmota.com/filetobase64](https://lab.miguelmota.com/filetobase64)

# Install

```bash
bower install filetobase64
```

```bash
npm install filetobase64
```

# Usage

```html
<input type="file" id="file" accept="image/*">

<img id="output">

<script src="filetobase64.js"></script>
```

```javascript
var fileInput = document.getElementById('file');
var output = document.getElementById('output');

fileInput.addEventListener('change', function(e) {
  var file = e.currentTarget.files[0];

  fileToBase64(file, function(base64) {
    console.log(base64); // iVBORw0KGgoAAAANSUhEUgAAADY...

    output.src = 'data:' + file.type + ';base64,' + base64;
  });

}, false);
```

# License

MIT
