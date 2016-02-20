# Maintainer: Johan Förberg <johan@forberg.se>
pkgname=zstd-git
_pkgname=zstd
pkgver=v0.5.1.r0.gc580b75
pkgrel=1
pkgdesc='A fast and efficient compression algorithm.'
arch=('i686' 'x86_64')
url='https://github.com/Cyan4973/zstd'
license=('BSD' 'GPL2')
groups=()
depends=('glibc')
makedepends=('git')
conflicts=('zstd')
provides=('zstd')
source=('git://github.com/Cyan4973/zstd.git')
noextract=()
md5sums=('SKIP')

pkgver() {
    cd "$srcdir/$_pkgname"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd "$srcdir/$_pkgname"
    # Unsure why this is needed. A bug in the makefile?
    LDFLAGS='-I ../lib' make
}

package() {
    cd "$srcdir/$_pkgname"
    make PREFIX="/usr" DESTDIR="$pkgdir/" install
    install -D -m644 lib/LICENSE "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
}

