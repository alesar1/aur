# Maintainer: Guilhem Saurel <saurel@laas.fr>

pkgorg='humanoid-path-planner'
_pkgname='hpp-fcl'
pkgname=("$_pkgname" "$_pkgname-docs")
pkgver=1.8.0
pkgrel=1
pkgdesc="An extension of the Flexible Collision Library"
arch=('i686' 'x86_64')
url="https://github.com/$pkgorg/$pkgname"
license=('BSD')
depends=('assimp' 'boost-libs' 'eigenpy' 'octomap' 'qhull')
optdepends=('doxygen')
makedepends=('cmake' 'eigen' 'boost')
source=("$url/releases/download/v$pkgver/$pkgname-$pkgver.tar.gz"{,.sig})
sha256sums=('908cf7902f79db7103f8c9fb980e75bb8172d11d121c17899e616145087d1ab1'
            'SKIP')
validpgpkeys=('9B1A79065D2F2B806C8A5A1C7D2ACDAF4653CF28' 'A031AD35058955293D54DECEC45D22EF408328AD')

build() {
    cmake -B "build-$pkgver" -S "$pkgbase-$pkgver" \
        -DCMAKE_CXX_STANDARD=14 \
        -DHPP_FCL_HAS_QHULL=ON \
        -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_INSTALL_LIBDIR=lib
    cmake --build "build-$pkgver"
}

check() {
    cmake --build "build-$pkgver" -t test
}

package_hpp-fcl() {
    DESTDIR="$pkgdir/" cmake --build "build-$pkgver" -t install
    rm -rf "$pkgdir/usr/share/doc"
    sed -i 's=;/usr/\.\./include/include==' "$pkgdir/usr/lib/cmake/hpp-fcl/hpp-fclTargets.cmake"
    sed -i '/Boost COMPONENTS/s/python3//' "$pkgdir/usr/lib/cmake/hpp-fcl/hpp-fclConfig.cmake"
    install -Dm644 "$pkgbase-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

package_hpp-fcl-docs() {
    DESTDIR="$pkgdir/" cmake --build "build-$pkgver" -t install
    rm -rf "$pkgdir"/usr/{lib,include,"share/$_pkgname"}
    install -Dm644 "$pkgbase-$pkgver/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
