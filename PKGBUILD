# Maintainer: Alessandro Pazzaglia <jackdroido at gmail dot com>

pkgname=pyinstaller2
_pyname=PyInstaller
pkgver=3.0
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
    "https://github.com/pyinstaller/pyinstaller/releases/download/${pkgver}/${_pyname}-${pkgver}.tar.gz"
)
sha256sums=(
    '8f9f9836ffebe71f9d9ced24001f8b27c0492574ed12a7a97c2c8810fb3fa210'
)
options=('!strip')

package() {
    cd "${srcdir}/${_pyname}-${pkgver}"

    sed -i -e 's_pyi-\(.* = \)_pyi2-\1_g' \
        -e 's_pyinstaller\(.* = \)_pyinstaller2\1_g' setup.py

    python2 setup.py install --root "${pkgdir}"
}
