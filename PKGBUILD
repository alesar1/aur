# Maintainer: Maurice Zhou <ja at apvc punkt uk>

pkgname=bieaz
pkgver=0.0.5
pkgrel=1
pkgdesc="Pure shell script Root on ZFS boot environment manager with GRUB integration for Linux"
arch=(any)
url="https://gitlab.com/m_zhou/bieaz"
license=('GPL')
depends=('coreutils' 'util-linux' 'zfs')
optdepends=('grub: select boot environment at boot')
source=("${url}/-/archive/${pkgver}/${pkgname}-${pkgver}.tar.gz")

package() {
	cd "$pkgname-$pkgver"
	make DESTDIR="$pkgdir/" install
}
md5sums=('2f79f6fb940a4ac8c938259408a24a76')
