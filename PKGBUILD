# Maintainer: Daniel Bermond <dbermond@archlinux.org>

pkgname=vmaf-git
pkgver=1.5.1.r41.g23aa467a
pkgrel=1
pkgdesc='Perceptual video quality assessment algorithm based on multi-method fusion (git version)'
arch=('x86_64')
url='https://github.com/Netflix/vmaf/'
license=('BSD')
depends=('gcc-libs')
makedepends=('git' 'meson')
provides=('vmaf' 'libvmaf-git')
conflicts=('vmaf' 'libvmaf-git')
replaces=('libvmaf-git')
source=('git+https://github.com/Netflix/vmaf.git')
sha256sums=('SKIP')

pkgver() {
    git -C vmaf describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//'
}

build() {
    arch-meson vmaf/libvmaf/build vmaf/libvmaf
    ninja -v -C vmaf/libvmaf/build
}

check() {
    ninja -v -C vmaf/libvmaf/build test
}

package() {
    DESTDIR="$pkgdir" ninja -v -C vmaf/libvmaf/build install
    install -D -m755 vmaf/libvmaf/build/tools/vmaf_{feature,rc} -t "${pkgdir}/usr/bin"
    install -D -m644 vmaf/LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
