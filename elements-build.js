const concat = require('concat');
const fs = require('fs-extra');

(async function build() {
  const files = [
    './dist/CustomElements/runtime-es2015.js',
    './dist/CustomElements/polyfills-es2015.js',
    './dist/CustomElements/main-es2015.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/myCustomElements.js');
  await fs.copyFile(
    './dist/CustomElements/styles.css',
    'elements/styles.css'
  );
})();
