# Maintainer: bkacjios < blackops7799 at gmail dot com >

pkgname=inav-configurator
pkgver=1.9.3
pkgrel=1
pkgdesc="Crossplatform configuration tool for the INAV flight control system"
arch=('x86_64')
url="https://github.com/iNavFlight/inav-configurator"
source=(https://github.com/iNavFlight/inav-configurator/releases/download/1.9.3/INAV-Configurator_linux64_1.9.3.zip
inav-configurator.desktop
inav_icon_128.png)
md5sums=('f157e2e1e237b08598f06b22ee1d43ce'
'a84590640d45f59f9710480a9ac78a84'
'1c292498ddc3fa880c937a758a036857')
options=(!strip)
license=('custom')
provides=("$pkgname")

package() {
  mkdir -p "$pkgdir/opt/inav"
  mkdir -p "$pkgdir/usr/bin"
  install -Dm644 "$srcdir/$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
  cp -r --preserve=all "$srcdir/INAV Configurator" "$pkgdir/opt/inav/inav-configurator"
  install -Dm644 "$srcdir/inav_icon_128.png" "$pkgdir/opt/inav/inav-configurator/icon/inav_icon_128.png"
  chmod +x "$pkgdir/opt/inav/inav-configurator/$pkgname"
  ln -s "$pkgdir/opt/inav/inav-configurator/$pkgname" "$pkgdir/usr/bin/$pkgname"
}