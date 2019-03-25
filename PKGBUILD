# Maintainer: Jose Riha <jose1711 gmail com>

pkgname=lessmsi
pkgver=1.6.3
pkgrel=1
pkgdesc='An utility to view and extract the contents of an MSI file'
arch=('i686' 'x86_64')
url='http://lessmsi.activescott.com'
depends=(mono)
makedepends=(gendesk icoutils)
source=(https://github.com/activescott/lessmsi/archive/v${pkgver}.zip
        lessmsi
        lessmsi-gui)
sha1sums=('be8632ddac371343facfa0b564e9f861ee82a179'
          'cfdc4a43e4d7d120cd58d00f036bffa932063db2'
          '82e589e14fda5c2cb4d83844b4d8ea0e2915db1a')

prepare() {
  cd $srcdir
  gendesk -f -n --pkgname "$pkgname" --exec "lessmsi-gui" --pkgdesc "$pkgdesc" --categories 'Utility'
}

build() {
  cd $srcdir/$pkgname-$pkgver/src
  ./build.sh
}

package() {
  cd $srcdir
  install -d $pkgdir/usr/share/$pkgname
  install -Dm644 $srcdir/$pkgname-$pkgver/src/LessMsi.Gui/bin/Release/* $pkgdir/usr/share/$pkgname
  install -Dm644 $srcdir/$pkgname-$pkgver/src/LessMsi.Cli/bin/Release/* $pkgdir/usr/share/$pkgname

  install -Dm755 lessmsi $pkgdir/usr/bin/lessmsi
  install -Dm755 lessmsi-gui $pkgdir/usr/bin/lessmsi-gui
  install -Dm644 lessmsi.desktop $pkgdir/usr/share/applications/lessmsi.desktop
}

