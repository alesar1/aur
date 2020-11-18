# Maintainer:  Dimitris Kiziridis <ragouel at outlook dot com>
# Contributor: Zach Hoffman <zach@zrhoffman.net>

pkgname=docksal
pkgver=1.14.1
pkgrel=1
pkgdesc='Docker powered environments for web development on macOS, Windows and Linux'
arch=('any')
url='https://docksal.io/'
license=('MIT')
depends=('docker' 'docker-compose' )
source=("$pkgname-$pkgver.tar.gz::https://github.com/docksal/docksal/archive/v$pkgver.tar.gz")
sha256sums=('0051a447417d5413efdcb650c387b40cc31b5b4416bdf95e19c6fe0fe3784c9d')

package() {
  install -Dm755 "${srcdir}/${pkgname}-${pkgver}/bin/fin" "$pkgdir/usr/bin/fin"
  install -Dm644 "${srcdir}/${pkgname}-${pkgver}/LICENSE" "$pkgdir/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm644 "${srcdir}/${pkgname}-${pkgver}/scripts/fin-help-generate.sh" -t "$pkgdir/usr/share/doc/${pkgname}/"
  install -Dm644 "${srcdir}/${pkgname}-${pkgver}/stacks"/* -t "$pkgdir/usr/share/doc/${pkgname}/stacks/"
  mv "${srcdir}/${pkgname}-${pkgver}/docs" "$pkgdir/usr/share/doc/${pkgname}/docs/"
}
