# Maintainer: GrayJack <gr41.j4ck@gmail.com>

_pkgname=janet
pkgname=janet-lang
pkgver=1.16.1
pkgrel=1
pkgdesc="A dynamic Lisp dialect and bytecode vm"
arch=('arm' 'armv6h' 'armv7h' 'i686' 'x86_64' 'aarch64')
url="https://janet-lang.org/"
license=('MIT')
provides=('janet')
conflicts=('janet-lang-git')
source=("$pkgname-$pkgver.tar.gz::https://github.com/janet-lang/janet/archive/v${pkgver}.tar.gz")
sha256sums=('ed9350ad7f0270e67f18a78dae4910b9534f19cd3f20f7183b757171e8cc79a5')
options=('staticlibs')

build() {
    cd $_pkgname-$pkgver
    CFLAGS+=" -fPIC"
    LDFLAGS+=" -rdynamic"
    make PREFIX="/usr" $janet_build
    make PREFIX="/usr" build/janet.pc
    make PREFIX="/usr" docs
}

package() {
    cd $_pkgname-$pkgver

    install -Dt       "${pkgdir}"/usr/bin build/janet jpm
    install -Dm644 -t "${pkgdir}"/usr/include/janet build/janet.h

    install -Dm644 -t "${pkgdir}"/usr/lib build/libjanet.a build/libjanet.so
    ln -s libjanet.so "${pkgdir}"/usr/lib/libjanet.so.$pkgver

    install -Dm644 "build/janet.pc" "${pkgdir}"/usr/lib/pkgconfig/janet.pc

    install -Dm644 -t "${pkgdir}"/usr/share/man janet.1 jpm.1

    install -dm755 "${pkgdir}"/usr/share/janet
    cp -a examples "${pkgdir}"/usr/share/janet

    # install -Dm644 build/doc.html "${pkgdir}"/usr/share/doc/janet/doc.html
    install -Dm644 -t "${pkgdir}"/usr/lib/janet tools/.keep
}
