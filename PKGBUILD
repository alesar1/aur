# Maintainer: Techcable <Techcable at techcable dot net>
pkgname=mathicsscript
pkgver=2.1.2
pkgrel=1
pkgdesc="A more advanced command-line interface to Mathics."
arch=("any")
url="https://github.com/Mathics3/mathicsscript"
# No license is explicitly stated, however since Mathics is
# GPLv3 we can assume it's implicitly GPL-compatible
license=('custom')
groups=()
depends=("mathics>=2.1.0" "mathics<2.2.0"
         "readline"
         "python-click" "python-colorama" "python-pygments"
         "python-columnize" "python-networkx"
         "python-pygments" "python-term-background")
checkdepends=("python-pytest")
backup=() # Do we have any config files?
options=()
install=
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/refs/tags/${pkgver}.tar.gz")
sha256sums=('e5f3d2bde12c0843dede253f4e44e2844f6e48f44154912747cd27ca9215e319')
validpgpkeys=()

prepare() {
    # We prepare a 'hack bin' for the tests
    cd "$pkgname-$pkgver"
    mkdir -p "hack-bin"
    echo -e '#!/bin/bash\npython3 -m mathicsscript "$@"' > "hack-bin/${pkgname}"
    chmod +x "hack-bin/${pkgname}"
}

build() {
    cd "$pkgname-$pkgver"
    python setup.py build
}

check() {
    cd "$pkgname-$pkgver"
    # Test environment needs this -_-
    # Essentially they assume we've already been installed
    export PYTHONPATH="."
    # NOTE: This includes a 'mathicsscript' executable
    export PATH="$PATH:$(pwd)/hack-bin"
    pytest test
}

package() {
    cd "$pkgname-$pkgver"
    python setup.py install --root="${pkgdir}/" --prefix="usr/"
    # For some reason, setuptools seems to like including these
    # test files....
    rm -r "${pkgdir}"/usr/lib/python*/site-packages/test
}
