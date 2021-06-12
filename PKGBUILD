# Maintainer: Guilhem Saurel <saurel@laas.fr>

pkgorg='stack-of-tasks'
_pkgname='pinocchio'
pkgname=("$_pkgname" "$_pkgname-docs")
pkgver=2.6.1
pkgrel=2
pkgdesc="Dynamic computations using Spatial Algebra"
arch=('i686' 'x86_64')
url="https://github.com/$pkgorg/$pkgname"
license=('BSD')
depends=('hpp-fcl' 'eigenpy' 'urdfdom')
optdepends=('doxygen' 'lua52' 'cppad' 'cppadcodegen')
makedepends=('cmake' 'eigen')
source=($url/releases/download/v$pkgver/$pkgname-$pkgver.tar.gz{,.sig} "$url/pull/1459.patch")
sha256sums=('SKIP' 'SKIP' 'f17244b8cb3921fc2b76cd0da38cf2ed997ce7758af463268b888eb67962e517')
validpgpkeys=('A031AD35058955293D54DECEC45D22EF408328AD')

prepare() {
    cd "$pkgbase-$pkgver"
    patch -p1 -i "$srcdir/1459.patch"
}

build() {
    mkdir -p "$pkgbase-$pkgver/build"
    cd "$pkgbase-$pkgver/build"

    cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_INSTALL_LIBDIR=lib \
        -DBUILD_WITH_COLLISION_SUPPORT=ON -DBUILD_UTILS=ON -DPYTHON_EXECUTABLE=/usr/bin/python \
        -DBUILD_WITH_AUTODIFF_SUPPORT="$(pacman -Qs cppad > /dev/null && echo -n ON || echo -n OFF)" \
        -DBUILD_WITH_CODEGEN_SUPPORT="$(pacman -Qs cppadcodegen > /dev/null && echo -n ON || echo -n OFF)" \
        ..
    make
}

check() {
    cd "$pkgbase-$pkgver/build"
    make test
}

package_pinocchio() {
    cd "$pkgbase-$pkgver/build"
    make DESTDIR="$pkgdir/" install
    rm -rf $pkgdir/usr/share/doc
    sed -i 's=;/usr/\.\./include/include==' "$pkgdir/usr/lib/cmake/pinocchio/pinocchioTargets.cmake"
    install -Dm644 ../COPYING.LESSER "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

package_pinocchio-docs() {
    cd "$pkgbase-$pkgver/build"
    make DESTDIR="$pkgdir/" install
    rm -rf $pkgdir/usr/{lib,include,bin,"share/$_pkgname"}
    install -Dm644 ../COPYING.LESSER "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
