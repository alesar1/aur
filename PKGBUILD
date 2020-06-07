# Maintainer: Solomon Choina <shlomochoina@gmail.com>
pkgname=terminus-terminal
_pkgname=terminus
pkgver=1.0.112
pkgrel=1
pkgdesc="A terminal for a more modern age"
arch=('x86_64')
url="https://eugeny.github.io/terminus/"
license=('MIT')
depends=('nodejs' 'fontconfig')
makedepends=('git' 'npm' 'yarn' 'python2')
source=("git+https://github.com/Eugeny/terminus.git#tag=v$pkgver")
sha256sums=('SKIP')

build(){
  cd "$srcdir/$_pkgname/"
  yarn install
  ./scripts/install-deps.js
  yarn run build
  ./scripts/build-native.js
  ./node_modules/.bin/electron-builder --linux deb
}

package() {
  cd "$srcdir/$_pkgname/dist/"
  ar x *.deb
  tar -xf data.tar.xz
  cp -r usr/ "$pkgdir"
  cp -r opt/ "$pkgdir"

 install -Dm755 /dev/stdin "$pkgdir"/usr/bin/"$_pkgname" <<END
  #!/usr/bin/bash
  /opt/Terminus/terminus

END

}
