# Maintainer: Philippe Proulx <pproulx@efficios.com>
# Contributor: Manuel Mendez <mmendez534 at gmail dot com>

pkgname=lttng-tools
pkgver=2.8.2
pkgrel=1
pkgdesc="LTTng tracing control tools"
arch=('i686' 'x86_64')
url="http://lttng.org/"
license=('GPL2' 'LGPL2.1')
provides=('lttng')
source=(http://lttng.org/files/$pkgname/$pkgname-$pkgver.tar.bz2)
makedepends=('asciidoc' 'xmlto')
depends=(
    'popt'
    'liburcu>=0.7.2'
    'lttng-ust>=2.8.0'
    'linux>=2.6.27'
    'libxml2>=2.7.6'
)
optdepends=(
    'lttng-modules: kernel tracing support'
    'babeltrace: view traces with `lttng view` command'
    'man-db: view man pages with the `lttng help` command'
)
sha1sums=('870874ba9644691de8e564a1fa1459aa5fef42ba')

build()
{
    cd ${srcdir}/${pkgname}-${pkgver}
    ./configure --prefix=/usr --enable-man-pages
    make
}

package()
{
    cd ${srcdir}/${pkgname}-${pkgver}
    make install DESTDIR=${pkgdir}
}
