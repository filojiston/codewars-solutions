function getCommonDirectoryPath(pathes) {
  pathes = pathes.map((path) => path.split('/'));

  let commonDirectoryPath = [];
  let done = false;
  let idx = 0;
  while (!done) {
    const current = pathes[0][idx];
    for (let i = 1; i < pathes.length; i++) {
      if (pathes[i][idx] !== current) done = true;
    }
    if (!done) {
      commonDirectoryPath.push(current);
      idx++;
    }
  }
  commonDirectoryPath = commonDirectoryPath.map((directory, idx) => {
    if (directory == '') {
      return '/';
    } else {
      return directory + '/';
    }
  });

  return commonDirectoryPath.join('');
}

console.log(
  getCommonDirectoryPath(['/web/images/image1.png', '/web/images/image2.png']),
  '/web/images/'
);
console.log(
  getCommonDirectoryPath([
    '/web/assets/style.css',
    '/web/scripts/app.js',
    'home/setting.conf',
  ]),
  ''
);
console.log(
  getCommonDirectoryPath(['/web/assets/style.css', '/.bin/mocha', '/read.me']),
  '/'
);
console.log(
  getCommonDirectoryPath([
    '/web/favicon.ico',
    '/web-scripts/dump',
    '/webalizer/logs',
  ]),
  '/'
);
