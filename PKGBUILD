# Maintainer: Natasha England-Elbro <ashenglandelbro@protonmail.com>

arch=('x86_64')
pkgname="libfprint-goodixtls-git"
pkgdesc="libfprint fork for goodixtls devices. Currently supports 5110. Note you will need to flash your device with [goodix-fp-dump](https://github.com/mpi3d/goodix-fp-dump) to use this"
makedepends=("git" "meson" "opencv")
license=("LGPL2")
provides=("libfprint" "libfprint-2.so=2-64")
conflicts=("libfprint")
source=("${pkgname}::git+https://github.com/0x00002a/libfprint.git")
pkgrel=4
pkgver=r1678.bc539f9
md5sums=('SKIP')

pkgver() {
  cd "$pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
    cd "${srcdir}/${pkgname}"
    mkdir -p build
    git switch '0x2a/dev/goodixtls-sigfm'
}

build() {
    cd "${srcdir}/${pkgname}/build"
    meson ..
    meson configure --buildtype=release --prefix=/usr -D doc=false
    meson build ..
}

package() {
    cd "${srcdir}/${pkgname}/build"
    meson install --destdir="${pkgdir}"
}
