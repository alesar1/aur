# Maintainer: zapp-brannigan <fuerst.reinje@web.de>
#             danhyal <danhyal@gmail.com>
_pkgname=kvdo
pkgname=kvdo-dkms
pkgrel=1
pkgver=6.2.2.117
pkgdesc='A pair of kernel modules which provide pools of deduplicated and/or compressed block storage'
arch=('x86_64')
url="https://github.com/dm-vdo/kvdo"
license=('GPL2')
provides=('kvdo')
source=("$_pkgname-$pkgver.tar.gz::https://github.com/dm-vdo/kvdo/archive/$pkgver.tar.gz"
        "dkms.conf"
	"vla-warning.patch")
sha256sums=('95cc869efc057acc1a99bc723e66b5522c571a643193be733baa20793d7ccd35'
            '516f60bdb28f7a0cb6c8f1f84c656ee7c6aec8feb393538f227ed515372ac88a'
	    'a6b9a42ef6c0933ff02fe304f9ab627f045f83abc8ed33cf0b91522096cade0f')

package() {
  mkdir -p "$pkgdir"/usr/src
  cp -r "$_pkgname-$pkgver" "$pkgdir"/usr/src/"$_pkgname-$pkgver"
  cd "$pkgdir"/usr/src/kvdo-"$pkgver"
  patch  --forward --strip=1 -i "$srcdir"/vla-warning.patch
  cd "$srcdir"
  sed -e "s/@PKGVER@/${pkgver}/" dkms.conf > "$pkgdir"/usr/src/"$_pkgname-$pkgver"/dkms.conf
}
