(function(global) {

  var version = '@2.2.3';
  var map = {
    'app': 'src',
    'rxjs': 'https://unpkg.com/rxjs@5.0.0-beta.12'
  };

  var packages = {
    'src': { main: 'main.ts',  defaultExtension: 'ts' },
    'rxjs': { defaultExtension: 'js' }
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic'
  ];

  packageNames.forEach(function(pkgName) {
    map[pkgName] = 'https://unpkg.com/' + pkgName + version;
  });

  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    transpiler: 'typescript',
    typescriptOptions: {
      emitDecoratorMetadata: true
    },
    map: map,
    packages: packages
  };
  System.config(config);

})(this);
