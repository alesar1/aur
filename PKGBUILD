# Maintainer: Donald Webster <fryfrog@gmail.com>

pkgname=lazylibrarian
pkgver=1.2.2
pkgrel=1
pkgdesc="Automatic Book Downloading via NZBs & Torrent"
arch=('any')
url="https://github.com/DobyTang/LazyLibrarian"
license=('GPL3')
depends=('python2')
install='lazylibrarian.install'
conflicts=('lazylibrarian-git')
provides=('lazylibrarian')

source=("${pkgname}-${pkgver}.tar.gz::https://github.com/DobyTang/LazyLibrarian/archive/${pkgver}.tar.gz"
        'lazylibrarian.service'
        'lazylibrarian.sysusers')

sha256sums=('718bfa8810b79fbadea37048310ffba4a3a311a7ece417bdabc394cb0a3a9417'
            'ad571025028f86c6fbd867ea32e7d7b78d51f604f0bc3b1e373df642fe6c177c'
            '1e5ee6265af4e4d8beea3cec49cbdba6624a6169edee081aa03de32965d4729d')

package() {
  install -d -m 755 "${pkgdir}/usr/lib/lazylibrarian"
  cp -dpr --no-preserve=ownership "$srcdir/LazyLibrarian-${pkgver}"/* "${pkgdir}/usr/lib/lazylibrarian"

  install -d -m 755 "${pkgdir}/var/lib/lazylibrarian"

  install -d -m 755 "${pkgdir}/etc/lazylibrarian"

  install -Dm644 "${srcdir}/lazylibrarian.service" "${pkgdir}/usr/lib/systemd/system/lazylibrarian.service"
  install -Dm644 "${srcdir}/lazylibrarian.sysusers" "${pkgdir}/usr/lib/sysusers.d/lazylibrarian.conf"
}
