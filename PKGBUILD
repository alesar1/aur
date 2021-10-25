# Maintainer: Giovanni Harting

pkgname=zwavejs2mqtt
pkgver=5.10.0
pkgrel=2
pkgdesc="Zwave to Mqtt gateway and Control Panel Web UI."
arch=('any')
url="https://github.com/zwave-js/zwavejs2mqtt"
license=('MIT')
depends=(nodejs)
makedepends=(yarn node-gyp)
backup=("etc/zwavejs2mqtt/app.ts")
source=("https://github.com/zwave-js/$pkgname/archive/refs/tags/v$pkgver.tar.gz"
	"$pkgname.sysusers"
	"$pkgname.tmpfiles"
	"$pkgname.service")
b2sums=('68120fa5aa0a59678c9f9b888cc736a2d9bde87f4ae06a69ed8a7ec0ab0607cb5dcdb890f65dd4aaff296e25827fb654d99ecf48daf0aae1827032b84c1f68b9'
        'd4a834bd7c8e4c832128f9f9c0ffb9d4409424402ba9c28a430a2d41d19cf780ba606c27b5f3b71f7640caa9883724647f2779cfa3cf2714564eb5e58b6144e2'
        '2324c50252e1005b1ec06bf73e9d05937472397f5fc533e7ab468d416bcb6b5d01b87055a41d3b3a5b44b24e02ca45fafb5f79085833988ec458ee72c1d8c31b'
        '0e7238f3858a9ce4b21e2c3493079648adbe1885ed32d1ae666b8a79f5b4c6c0d59c572a81159fc75c8db6a2a8f716b221a7ea857866462bb2d2a4b537c93ae7')

build() {
  cd "$pkgname-$pkgver"
  yarn install
  yarn run build
}

package() {
  cd "$pkgname-$pkgver"

  # taken from hedagedoc in [community], thanks Mr. van der Waa :)
  # removing unneeded files and directories
  find node_modules -type f \
          \( \
         -iname '*Makefile*' -o \
         -iname '*.cache' -o \
         -iname '*Makefile*' -o \
         -iname '*appveyor.yml' -o \
         -iname '*.babelrc' -o \
         -iname '*.bak' -o \
         -iname '*bower.json' -o \
         -iname '*.c' -o \
         -iname '*.cc' -o \
         -iname '*.cpp' -o \
         -iname '*.md' -o \
         -iname '*.markdown' -o \
         -iname '*.rst' -o \
         -iname '*.nycrc' -o \
         -iname '*.npmignore' -o \
         -iname '*.editorconfig' -o \
         -iname '*.el' -o \
         -iname '*.eslintignore' -o \
         -iname '*.eslintrc*' -o \
         -iname '*.fimbullinter.yaml' -o \
         -iname '*.gitattributes' -o \
         -iname '*.gitmodules' -o \
         -iname '*.h' -o \
         -iname '*.html' -o \
         -iname '*.jshintrc' -o \
         -iname '*.jscs.json' -o \
         -iname '*.log' -o \
         -iname '*logo.svg' -o \
         -iname '*.nvmrc' -o \
         -iname '*.o' -o \
         -iname '*package-lock.json' -o \
         -iname '*.travis.yml' -o \
         -iname '*.prettierrc' -o \
         -iname '*.sh' -o \
         -iname '*.tags*' -o \
         -iname '*.Dockerfile*' -o \
         -iname '*.tm_properties' -o \
         -iname '*.wotanrc.yaml' -o \
         -iname '*tsconfig.json' -o \
         -iname '*.py' -o \
         -iname '*yarn.lock' \
         \) \
         -delete

  find node_modules -type d \
          \( \
         -iwholename '*.github' -o \
         -iwholename '*.tscache' -o \
         -iwholename '*/man' -o \
         -iwholename '*/test' -o \
         -iwholename '*/scripts' -o \
         -iwholename '*/git-hooks' -o \
         -iwholename '*/win32-ia32' -o \
         -iwholename '*/win32-x64' -o \
         -iwholename '*/__pycache__' -o \
         -iwholename '*/darwin-x64' \
         \) \
         -exec rm -rvf {} +

  install -d "$pkgdir"/usr/share/webapps/$pkgname/dist/static "$pkgdir"/etc/$pkgname/
  cp -r {node_modules,bin,lib,server,app.ts,views} "$pkgdir"/usr/share/webapps/$pkgname
  cp -r dist/static/* "$pkgdir"/usr/share/webapps/$pkgname/dist/static
  cp -r config/* "$pkgdir"/etc/$pkgname/
  ln -s /etc/$pkgname/ "$pkgdir"/usr/share/webapps/$pkgname/config
  ln -s /var/lib/$pkgname "$pkgdir"/usr/share/webapps/$pkgname/store
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
  install -Dm644 "${srcdir}"/$pkgname.sysusers "${pkgdir}"/usr/lib/sysusers.d/$pkgname.conf
  install -Dm644 "${srcdir}"/$pkgname.tmpfiles "${pkgdir}"/usr/lib/tmpfiles.d/$pkgname.conf
  install -Dm644 "${srcdir}"/$pkgname.service -t "$pkgdir"/usr/lib/systemd/system/
}
