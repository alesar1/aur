# Maintainer: bazzletoe <barry.keegan at gmail.com>
_pkgname=nwjs-sdk
pkgname=$_pkgname
pkgver=0.17.3
pkgrel=1
pkgdesc="node-webkit is an app runtime based on Chromium and node.js. SDK version includes dev tools."
arch=("i686" "x86_64")
url="https://nwjs.io/"
license=("MIT")
depends=("alsa-lib" "gconf" "gtk2" "nss" "ttf-font" "libxtst" "libxss")
optdepends=(
    "nodejs: npm package support"
    "nw-gyp: native add-on build tool for node-webkit"
)
provides=("node-webkit" "nwjs")
replaces=("node-webkit")
conflicts=("node-webkit" "nwjs")

if [ "$CARCH" = "i686" ]; then
  _arch="ia32"
fi
if [ "$CARCH" = "x86_64" ]; then
  _arch="x64"
fi
source_common="https://dl.nwjs.io/v$pkgver/$_pkgname-v$pkgver-linux"
source_i686=("$source_common-ia32.tar.gz")
source_x86_64=("$source_common-x64.tar.gz")
sha256sums_i686=("e16a9b35d8207aee63be274e1374c861081533e6f380ead6a8fa406fc2f97712")
sha256sums_x86_64=("0a75f083ccc312024b6d257823a8cbe8b87cb7e47a3b2c623654849e71e77955")

package() {
  cd "$srcdir/$_pkgname-v$pkgver-linux-$_arch"
  install -Ddm755 "$pkgdir/opt/$_pkgname"
  install -Ddm755 "$pkgdir/usr/bin"
  chmod -R +r *
  chmod +x nw lib lib/lib{ffmpeg,node,nw}.so locales
  cp -r * "$pkgdir/opt/$_pkgname"
  ln -s "/opt/$_pkgname/nw" "$pkgdir/usr/bin/nw"
}
