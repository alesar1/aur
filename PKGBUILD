# Maintainer: mathieui <mathieui[at]mathieui.net>
# Maintainer: Emmanuel Gil Peyrot <linkmauve@linkmauve.fr>

pkgname=python-slixmpp-git
pkgver=r2535.370abb1d
pkgrel=1
pkgdesc="An XMPP library written for Python 3.7+ (SleekXMPP asyncio fork)"
arch=(any)
url="https://dev.louiz.org/projects/slixmpp"
license=('MIT')
depends=('python>=3.7' 'python-aiodns' 'libidn' 'python-pyasn1' 'python-pyasn1-modules' 'python-aiohttp' 'python-typing_extensions')
provides=('python-slixmpp')
conflicts=('python-slixmpp')
makedepends=('git' 'cython')
options=(!emptydirs)

source=("git+https://lab.louiz.org/poezio/slixmpp.git")
md5sums=('SKIP')

pkgver() {
    cd slixmpp
    echo "r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

build() {
    cd slixmpp
    python setup.py build
}

package() {
    cd slixmpp
    python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}
