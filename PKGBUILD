# Maintainer: Benjamin Winger <winger.benjamin@gmail.com>

pkgname=openmmm
pkgver=1.0.1
pkgrel=1
pkgdesc="A cli tool to manage mods for OpenMW"
provides=('openmmm')
conflicts=('openmmm')
arch=(any)
url="https://gitlab.com/bmwinger/openMMM"
license=(GPL3)
depends=("python" "patool")
makedepends=("python")
optdepends=("mlox" "omwllf")
source=("https://gitlab.com/portmod/portmod/-/archive/v$pkgver/portmod-v$pkgver.tar.gz")
sha512sums=('211ce62b2312a1504de6712bc4e5d1a51182d434c821845c7ab9d55c6ac4f5f4976a395fb8a7ca59f28241ed047e86df997e2282643d1da2f6d491c1bcba7388')

package() {
  cd "$srcdir/portmod-v$pkgver"
  python setup.py install --root $pkgdir
}
