# Maintainer: Joseph Lansdowne <J49137@gmail.com>
_pkgname=gw2buildutil
pkgname=python-$_pkgname
pkgver=0.4
pkgrel=1
pkgdesc="Python 3 library for working with Guild Wars 2 builds"
arch=(any)
url=http://ikn.org.uk/lib/gw2buildutil
license=(BSD)
makedepends=(python-setuptools)
depends=("python>=3.7")
source=("http://ikn.org.uk/download/lib/$_pkgname/$_pkgname-$pkgver.tar.gz")
sha1sums=('d37804300c0a2a89fdf34f82592cfc1cb5027a14')

build () {
    cd "$srcdir/${_pkgname}-$pkgver"
    make
}

package () {
    cd "$srcdir/${_pkgname}-$pkgver"
    make DESTDIR="$pkgdir" prefix=/usr install
    install -D LICENSE "$pkgdir"/usr/share/licenses/"$_pkgname"/LICENSE
}
