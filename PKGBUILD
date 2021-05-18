# Maintainer: Techcable <Techcable at techcable dot net>
pkgname=mathicsscript
pkgver=2.2.0
pkgrel=1
pkgdesc="A more advanced command-line interface to Mathics."
arch=("any")
url="https://github.com/Mathics3/mathicsscript"
license=('GPL3')
groups=()
depends=("mathics>=2.2.0" "mathics<2.3.0"
         "mathics-pygments"
         "readline"
         "python-click" "python-colorama" "python-pygments"
         "python-columnize" "python-networkx"
         "python-pygments" "python-term-background")
checkdepends=("python-pytest")
backup=() # Do we have any config files?
options=()
install=
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/refs/tags/${pkgver}.tar.gz")
sha256sums=('3cdbd59c46a12ff061c078cfbe095f069cb6e546e25ab375beb80b4199560580')
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
