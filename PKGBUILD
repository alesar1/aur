# Maintainer: Benjamin Winger <bmw@disroot.org>

pkgname=portmod
pkgver=2.0.2
pkgrel=1
pkgdesc="A cli tool to manage mods for OpenMW"
provides=('portmod')
conflicts=('portmod')
replaces=('openmmm')
arch=(any)
url="https://gitlab.com/portmod/portmod"
license=(GPL3)
depends=("python" "patool" "python-setuptools" "python-colorama" "python-appdirs" "python-gitpython"
         "python-progressbar" "python-restrictedpython" "bubblewrap" "python-redbaron"
         "python-python-sat" "python-requests" "python-chardet" "python-fasteners-git")
makedepends=("python" "python-setuptools" "python-setuptools-scm" "rust" "python-setuptools-rust" "python-packaging")
checkdepends=("python-pytest")
optdepends=("omwllf" "tes3cmd" "tr-patcher" "python-argcomplete")
source=("https://gitlab.com/portmod/portmod/-/archive/v$pkgver/$pkgname-v$pkgver.tar.gz")
sha512sums=('2a986667c20407cbb4b912d8cc7c102e2d4199988d8a486590048585909c88ecfea3d6c96a059de5d7a57425499298522c3bd33e9a1538d043128a55a86f6c41')

build() {
  cd "$srcdir/$pkgname-v$pkgver"
  SETUPTOOLS_SCM_PRETEND_VERSION=$pkgver python setup.py build
}

# check() {
#   cd "$srcdir/$pkgname-v$pkgver"
#   SETUPTOOLS_SCM_PRETEND_VERSION=$pkgver pytest
# }

package() {
  cd "$srcdir/$pkgname-v$pkgver"
  SETUPTOOLS_SCM_PRETEND_VERSION=$pkgver python setup.py install --root $pkgdir
}
