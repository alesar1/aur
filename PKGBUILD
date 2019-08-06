# Maintainer: Joost Molenaar <jjm@j0057.nl>

pkgname=fluent-bit

pkgmaj=1.2
pkgver=1.2.2
pkgrel=2
epoch=

pkgdesc='Collect data/logs from different sources, unify and send them to multiple destinations.'
arch=(x86_64)
url='https://fluentbit.io/'
license=('Apache')
groups=()

depends=()
makedepends=(cmake)
checkdepends=()
optdepends=()

provides=()
conflicts=()
replaces=()

backup=('etc/fluent-bit/fluent-bit.conf'
        'etc/fluent-bit/parsers.conf')
options=()
install=
changelog=
source=("https://fluentbit.io/releases/$pkgmaj/$pkgname-$pkgver.tar.gz")
noextract=()
validpgpkeys=()

build() {
    cd $pkgname-$pkgver/build
    cmake \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_INSTALL_SYSCONFDIR=/etc \
        -DFLB_TESTS_INTERNAL=Yes \
        -DFLB_TESTS_RUTNIME=Yes \
        ..
    make -j8
}

check() {
    cd $pkgname-$pkgver/build
    make test
}

package() {
    cd $pkgname-$pkgver/build

    make DESTDIR="$pkgdir/" install

    mv $pkgdir/lib/* $pkgdir/usr/lib
    rmdir $pkgdir/lib

    mv $pkgdir/usr/lib64/* $pkgdir/usr/lib
    rmdir $pkgdir/usr/lib64
}

md5sums=('761ca237b4a96491fa157f1dd9d0d09e')
