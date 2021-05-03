# Maintainer: Jah Way <jahway603 at protonmail dot com>

pkgname=silentdragonlite
pkgver=1.5.0
pkgrel=1
pkgdesc='HUSH Lite wallet that supports z-addresses'
url='http://git.hush.is/hush/SilentDragonLite'
arch=('x86_64')
license=('GPL3')
depends=('libsodium' 'qt5-websockets' 'qt5-base' 'qt5-tools')
makedepends=('qtcreator' 'rust')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz"
        'silentdragonlite.png'
        'silentdragonlite.desktop')
sha256sums=('3556e49f33c6583bf8152a49ad88dba3723fc50126d12432f358d8cbcae4245b'
            'c3c7acc348f662f6b57594a300f1151a95c8369ea140c220d211fa362126d915'
            '6f5c84eed3eb718a1480df7f9b6ace15757bfcfded41c2d369da4b3175ec4c76')

build() {
  cd "$pkgname"
  ./build.sh linguist
  ./build.sh
}

package() {
  install -Dm755 "${srcdir}/$pkgname/SilentDragonLite" "${pkgdir}/opt/$pkgname/$pkgname"
  install -Dm644 "${srcdir}/$pkgname/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm644 "${srcdir}/$pkgname.desktop" "${pkgdir}/usr/share/applications/$pkgname.desktop"
  install -Dm644 "${srcdir}/$pkgname.png" "${pkgdir}/opt/$pkgname/$pkgname.png"

  # links to /usr/bin
  install -d "${pkgdir}/usr/bin"
  ln -s /opt/${pkgname}/silentdragonlite "${pkgdir}/usr/bin"
}
