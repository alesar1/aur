# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Co-Maintainer: Corax <cor dot ax26 at gmail dot com>
pkgname=caja-mediainfo-tab
pkgver=1.0.4
pkgrel=1
pkgdesc="View media information from the properties tab"
arch=('any')
url="https://github.com/linux-man/caja-mediainfo-tab"
license=('GPL3')
depends=('python-mediainfodll' 'python-caja')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('90363870c2f1c1981b546212553ded2720b284fb7c59a7435a6568003d8b3336')

prepare() {
  cd "$pkgname-$pkgver"
  sed -i 's/MediaInfoDLL3/MediaInfoDLL/g' "caja-extension/$pkgname.py"
}

package() {
  cd "$pkgname-$pkgver"
  install -d "$pkgdir/usr/share/caja-python/extensions/$pkgname"
  cp -a "caja-extension/$pkgname/locale/." \
    "$pkgdir/usr/share/caja-python/extensions/$pkgname/locale"

  install -Dm644 "caja-extension/$pkgname.py" -t \
    "$pkgdir/usr/share/caja-python/extensions"
}
