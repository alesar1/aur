# Maintainer: Benjamin Winger <bmw@disroot.org>

pkgname=portmod
pkgver=2.0_rc11
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
sha512sums=('ae445eda815315e0fc5ec74b33c22973f65956a6cc23c60b4ed37f9d8862fc11f9f63c444b3574a7c336f0ffc85af6a88bf6755401283bf0d3aea2b4486bde20')

build() {
  cd "$srcdir/$pkgname-v$pkgver"
  SETUPTOOLS_SCM_PRETEND_VERSION=$pkgver python setup.py build_rust --inplace --release
}

check() {
  cd "$srcdir/$pkgname-v$pkgver"
  SETUPTOOLS_SCM_PRETEND_VERSION=$pkgver pytest
}

package() {
  cd "$srcdir/$pkgname-v$pkgver"
  SETUPTOOLS_SCM_PRETEND_VERSION=$pkgver python setup.py install --root $pkgdir
}
