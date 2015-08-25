pkgname=node-webkit
pkgver=0.10.5
_srcver="0.10.5"
pkgrel=1
pkgdesc="node-webkit is an app runtime based on Chromium and node.js."
arch=("i686" "x86_64")
url="https://github.com/rogerwang/node-webkit"
license=("MIT")
depends=("alsa-lib" "gconf" "gtk2" "nss" "ttf-font")
optdepends=("nodejs: npm package support"
"nw-gyp: native add-on build tool for node-webkit")

if [ "$CARCH" = "i686" ]; then
  _arch="ia32"
  sha256sums=("3725948466802eeb097109a2f1ef46f5d9a2859f84871a254daa203b35c1b4c7")
fi
if [ "$CARCH" = "x86_64" ]; then
  _arch="x64"
  sha256sums=("cc9baff5338ead8341da1893c39d4e24382e36f9e6bc1538397f97bb4fbdfe91")
fi

source=( "http://dl.node-webkit.org/v${_srcver}/${pkgname}-v${_srcver}-linux-${_arch}.tar.gz" )

package() {
  msg2 "create path and copy files"
  mkdir -p $pkgdir/usr/{lib/${pkgname},bin}
  chmod +rx $srcdir/${pkgname}-v${_srcver}-linux-$_arch/{nw,nwsnapshot,libffmpegsumo.so}
  chmod +r $srcdir/${pkgname}-v${_srcver}-linux-$_arch/{nw.pak,credits.html,icudtl.dat}
  cp -R $srcdir/${pkgname}-v${_srcver}-linux-$_arch/* $pkgdir/usr/lib/node-webkit/

  msg2 "replace string libudev.so.0 to libudev.so.1 in nw binary"
  sed -i 's/\x75\x64\x65\x76\x2E\x73\x6F\x2E\x30/\x75\x64\x65\x76\x2E\x73\x6F\x2E\x31/g' $pkgdir/usr/lib/node-webkit/nw
  
  msg2 "symlink /usr/bin/nw -> /usr/lib/${pkgname}/nw"
  ln -s "/usr/lib/${pkgname}/nw" "$pkgdir/usr/bin/nw"

  msg2 "symlink /usr/bin/nwsnapshot -> /usr/lib/${pkgname}/nwsnapshot"
  ln -s "/usr/lib/${pkgname}/nwsnapshot" "$pkgdir/usr/bin/nwsnapshot"
}
