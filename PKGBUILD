# Maintainer: EHfive <eh5@sokka.cn>

pkgname=libldac-git
pkgver=2.0.2.r5.2ad4bf1
pkgrel=1
pkgdesc="AOSP libldac dispatcher "
arch=("i686" "x86_64" "arm" "armv6h" "armv7h" "aarch64")
url="https://github.com/EHfive/ldacBT"
license=('Apache 2.0')
depends=()
makedepends=("cmake>=3.0" "make")
optdepends=()
provides=("libldac=2.0.2" "ldacBT=2.0.2" "ldacBT_enc.so=2.0.2" "ldacBT_abr.so=2.0.2")
source=("git+https://github.com/EHfive/ldacBT.git"
        "git+https://gitlab.com/eh5/libldac.git")

md5sums=('SKIP' 'SKIP')

pkgver() {
    cd "$srcdir/ldacBT"
    printf "2.0.2.r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    cd "$srcdir/ldacBT"
    rm -r libldac
    ln -sf -T "../libldac" "libldac"
}

build() {
    cd "$srcdir/ldacBT"
    cmake \
        -DCMAKE_BUILD_TYPE=Release \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DINSTALL_LIBDIR=/usr/lib \
        -DLDAC_SOFT_FLOAT=OFF \
        .
    make
}

package() {
    cd "$srcdir/ldacBT"
    make DESTDIR="$pkgdir" install
}
