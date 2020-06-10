# Maintainer: Daniel Bermond <dbermond@archlinux.org>

pkgname=cpuid2cpuflags-git
pkgver=10.r0.g12db607
pkgrel=1
pkgdesc='Tool to get the instruction sets supported by your CPU (git version)'
arch=('x86_64')
url='https://github.com/mgorny/cpuid2cpuflags/'
license=('BSD')
depends=('glibc')
makedepends=('git')
provides=('cpuid2cpuflags')
conflicts=('cpuid2cpuflags')
source=('git+https://github.com/mgorny/cpuid2cpuflags.git')
sha256sums=('SKIP')

prepare() {
    cd cpuid2cpuflags
    autoreconf -fi
}

pkgver() {
    git -C cpuid2cpuflags describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//'
}

build() {
    cd cpuid2cpuflags
    ./configure --prefix='/usr'
    make
}

check() {
    make -C cpuid2cpuflags check
}

package() {
    make -C cpuid2cpuflags DESTDIR="$pkgdir" install
    install -D -m644 cpuid2cpuflags/COPYING -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
