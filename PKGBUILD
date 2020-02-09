# Maintainer: peippo <christoph.fink@gmail.com>

pkgname="python-av"
_name=${pkgname#python-}
pkgdesc="Pythonic bindings for FFmpeg"
url="https://docs.mikeboers.com/pyav/"

pkgver=7.0.1
pkgrel=0

arch=("x86_64" "i686")
license=("BSD")

makedepends=(
    "python-setuptools"
    "cython"
)
depends=(
    "python"
    "ffmpeg"
)

source=("https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz")
sha256sums=("fb13afa8967d112f3f78ee6ded1082546c32462dfdfa8dac81c9539f5bda0a83")

build() {
    cd "${srcdir}"/${_name}-${pkgver}
    python setup.py build
}

package() {
    cd "${srcdir}/${_name}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1

    install -Dm644 LICENSE.txt "${pkgdir}/usr/share/licenses/python-av/LICENSE"
}
