# Maintainer: peippo <christoph.fink@gmail.com>

pkgname="python-dunamai"
_name=${pkgname#python-}
pkgdesc="Produce dynamic, standards-compliant version strings"
url="https://github.com/mtkennerly/dunamai"

pkgver=1.13.0
pkgrel=1

arch=("any")
license=("MIT")

makedepends=(
    "python-importlib-metadata"
    "python-setuptools"
    "python-packaging"
)
depends=(
    "python"
)

source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
b2sums=("5ed6a29256c48360411f613b862a3810f477212e019e79c0deae7d6e52a0e3727419c1324c3f0b4deeba2b08de4207572bff65bcfa90321342d5b403eaf3f0e9")

build() {
    cd "${srcdir}"/${_name}-${pkgver}
    python setup.py build
}

package() {
    cd "${srcdir}/${_name}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1

    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
