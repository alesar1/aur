# Maintainer: Konstantin Gizdov <arch at kge dot pw>

pkgname=python2-awkward
_pkgname=awkward-array
pkgver=0.12.9
pkgrel=1
pkgdesc="Manipulate jagged, chunky, and/or bitmasked arrays as easily as Numpy"
arch=('any')
url="https://github.com/scikit-hep/awkward-array"
license=('BSD')
depends=('python2-numpy')
makedepends=('python2-pytest-runner' 'python2-setuptools')
checkdepends=('python2-h5py')
source=("${url}/archive/${pkgver}.zip")
sha256sums=('0f2bcc09be59a849a95a4449fd2137403e6e53b546cc271bce0eed06cdadbfb2')

prepare() {
    cd "${srcdir}/${_pkgname}-${pkgver}"

    find . -name '*.py' -type f -exec \
        sed -e "s|#![ ]*/usr/bin/python$|#!/usr/bin/python2|" \
            -e "s|#![ ]*/usr/bin/env python$|#!/usr/bin/env python2|" \
            -e "s|#![ ]*/bin/env python$|#!/usr/bin/env python2|" \
            -i '{}' \; -print
}

build() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    python2 setup.py build
}

check() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    python2 setup.py pytest
}

package() {
    cd "${srcdir}/${_pkgname}-${pkgver}"

    python2 setup.py install --root="${pkgdir}/" --optimize=1

    install -D LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

    install -D README.rst "${pkgdir}/usr/share/${pkgname}/README.rst"

    install -d "${pkgdir}/usr/share/doc/${pkgname}"
    cp -r docs "${pkgdir}/usr/share/doc/${pkgname}/"
}
