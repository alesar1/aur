# Maintainer: Techcable <Techcable at techcable dot net>
pkgname=mathicsscript
pkgver=3.3.1
pkgrel=1
pkgdesc="A more advanced command-line interface to Mathics."
arch=("any")
url="https://github.com/Mathics3/mathicsscript"
license=('GPL3')
groups=()
depends=("mathics>=3.1.0" "mathics<3.2.0"
         "mathics-pygments>=1.0.2"
         "mathics-scanner>=1.2.2"
         "readline"
         "python-click" "python-colorama" "python-pygments"
         "python-columnize" "python-networkx"
         "python-prompt_toolkit>=3.0.18"
         "python-pygments>=2.9.0"
         "python-term-background>=1.0.1")
checkdepends=("python-pytest")
optdepends=(
    "python-matplotlib: For rending plots and graphs"
    "python-cariosvg: For rendering plots and graphs as SVGs via matplotlib"
    "python-pyqt5: For interactive display of graphs via matplotlib"
    "asymptote: 3D Graphics"
)
backup=() # Do we have any config files?
options=()
install=
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/refs/tags/${pkgver}.tar.gz")
sha256sums=('570b2c27a8869253b87cefbea7d41cc58d98d400cb1a61b3d0ce0997777b295c')
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
