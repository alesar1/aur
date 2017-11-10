pkgname=tsung
pkgver=1.7.0
pkgrel=1
pkgdesc="Erlang-based open-source multi-protocol distributed load testing tool"
arch=('i686' 'x86_64')
url="http://tsung.erlang-projects.org"
license=('GPL')
depends=('erlang' 'gnuplot' 'perl' 'perl-template-toolkit')
source=("http://tsung.erlang-projects.org/dist/$pkgname-$pkgver.tar.gz")
sha1sums=('934dfb684382583fa30fadc20638d9dd09fd1fe0')

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    ./configure --prefix=/usr

}
package() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    make
    make DESTDIR="${pkgdir}" install
}
