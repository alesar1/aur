# Maintainer: Alessandro Pazzaglia <jackdroido at gmail dot com>

pkgname=pyinstaller2
_pyname=PyInstaller
pkgver=3.1.1
pkgrel=1
pkgdesc="An application to convert python scripts into stand-alone binaries"
arch=('i686' 'x86_64')
url="http://www.pyinstaller.org"
license=('GPL')
depends=('python2')
makedepends=('python2-setuptools')
optdepends=(
    'python2-crypto: executable encryption support'
    'upx: executable compression support'
)
source=(
    "https://github.com/pyinstaller/pyinstaller/releases/download/v${pkgver}/${_pyname}-${pkgver}.tar.gz"
)
sha256sums=(
    'b111d35d836237bf954e9b47dcb338da48a40210c318b2b0bc163dba8ca8e096'
)
options=('!strip')

package() {
    cd "${srcdir}/${_pyname}-${pkgver}"

    sed -i -e 's_pyi-\(.* = \)_pyi2-\1_g' \
        -e 's_pyinstaller\(.* = \)_pyinstaller2\1_g' setup.py

    python2 setup.py install --root "${pkgdir}"
}
