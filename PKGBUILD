# Maintainer: graysky <graysky AT archlinux DOT us>

pkgname=kodi-addon-screensaver-apple-aerial
_pkgname=screensaver.atv4
pkgver=1.4.1
pkgrel=1
pkgdesc="The Apple TV4 aerial screensaver for kodi"
arch=('any')
url='https://github.com/enen92/screensaver.atv4'
license=('GPL')
depends=('kodi')
source=("https://github.com/enen92/$_pkgname/archive/screensaver.atv4-$pkgver.tar.gz")
sha256sums=('2a68613b687289b01bd12c951fc3cf102fc3ceb47fd4dca9864c6a2f1c98408c')
install=readme.install

package() {
  install -dm755 "$pkgdir/usr/share/kodi/addons"
  install -dm755 "$pkgdir/usr/share/licenses/$_pkgname"
  cp -a "$srcdir/$_pkgname-$pkgver" "$pkgdir/usr/share/kodi/addons/$_pkgname"

  # clean up
  rm -rf "$pkgdir/usr/share/kodi/addons/$_pkgname/.git"
  rm -f "$pkgdir/usr/share/kodi/addons/$_pkgname/resources/.DS_Store"
  rm -f "$pkgdir/usr/share/kodi/addons/$_pkgname/README.md"
  mv "$pkgdir/usr/share/kodi/addons/$_pkgname/LICENSE" "$pkgdir/usr/share/licenses/$_pkgname"

  # set permissions to 644 as nothing needs to be executable
  find "$pkgdir" -type f -print0 | xargs -0 chmod 644
}

# vim:set ts=2 sw=2 et:
