# Maintainer: Guillaume Horel <guillaume.horel@gmail.com>
pkgname='python-ufonormalizer'
_pkgname='ufonormalizer'
pkgver='0.4.0'
pkgrel=1
pkgdesc="A tool that will normalize XML and other data inside of a UFO."
url="https://github.com/unified-font-object/ufoNormalizer"
checkdepends=()
depends=('python')
makedepends=('python-setuptools')
optdepends=()
license=('BSD')
arch=('any')
source=("https://pypi.org/packages/source/${_pkgname:0:1}/$_pkgname/$_pkgname-$pkgver.zip")
sha256sums=('457dff74dfde2a9733b4e90fa7f012990bee1b39d5b76ffe99fe29e222a3a13b')

prepare() {
    cd "$srcdir/$_pkgname-$pkgver"
    rm -rf src/ufonormalizer.egg-info
}

check() {
    cd "$srcdir/$_pkgname-$pkgver"
    python setup.py test
}

package() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1
    install -D -m644 LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.txt"
}
