# Maintainer: Robin Lange <robin dot langenc at gmail dot com>
# Contributor: Robin Lange <robin dot langenc at gmail dot com>
pkgname=msi-perkeyrgb
pkgver=1.0
pyname=msi-perkeyrgb
pkgrel=1
pkgdesc="Configuration tool for per-key RGB keyboards on MSI laptops"
arch=(any)
url="https://github.com/Askannz/msi-perkeyrgb"
license=(MIT)
depends=(python)
makedepends=(python-setuptools)
source=("msi-perkeyrgb::git+https://github.com/Askannz/msi-perkeyrgb.git#branch=master")
sha256sums=('SKIP')

package() {
  cd "${srcdir}/msi-perkeyrgb/"
  python setup.py install --root="$pkgdir/"
  mkdir -p $pkgdir/etc/udev/rules.d/
  cp 99-msi-rgb.rules $pkgdir/etc/udev/rules.d/
}

