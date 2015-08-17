# Maintainer: Aaron Abbott <aabmass at gmail dot com>
pkgname=python-mycli
_pkgname=mycli
pkgver=1.3.0
pkgrel=1
pkgdesc='CLI for MySQL Database. With auto-completion and syntax highlighting.'
arch=('any')
url="https://pypi.python.org/pypi/${_pkgname}"
license=('BSD')
groups=()
# these dependencies are pulled from this package's setup.py
depends=('python' 'python-click' 'python-pygments' 'python-prompt_toolkit' 'python-pymysql' 'python-sqlparse' 'python-configobj')
makedepends=()
provides=()
# conflict the old package
conflicts=('mycli' 'python2-mycli')
replaces=()
backup=()
options=(!emptydirs)

source=("https://pypi.python.org/packages/source/m/${_pkgname}/${_pkgname}-${pkgver}.tar.gz")
md5sums=('c05dfe3c3b676b0e75fbca5ea89869b4')

build() {
    cd "$srcdir/${_pkgname}-${pkgver}"
    python setup.py build
}

package() {
    cd "$srcdir/${_pkgname}-${pkgver}"
    install -D -m644 LICENSE.txt "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
    python setup.py install --root="${pkgdir}" --optimize=1
}
