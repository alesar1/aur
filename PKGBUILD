# Maintainer : Daniel Bermond < gmail-com: danielbermond >
# Contributor: Det

pkgname=egl-wayland-git
_srcname=egl-wayland
pkgver=1.1.0.r1.g0eb29d4
pkgrel=2
pkgdesc='EGLStream-based Wayland external platform (git version)'
arch=('i686' 'x86_64')
url='https://github.com/NVIDIA/egl-wayland/'
license=('MIT')
depends=('wayland' 'eglexternalplatform')
makedepends=('git' 'meson')
provides=('egl-wayland')
conflicts=('egl-wayland')
source=('git+https://github.com/NVIDIA/egl-wayland.git'
        '10_nvidia_wayland.json')
sha256sums=('SKIP'
            '5cccf1905a266e8e34d5ad4aad4be85390e60b1a0850a29dd9d64adc641de412')

prepare() {
    cd "$_srcname"
    
    # add missing upstream tag
    # https://github.com/NVIDIA/egl-wayland/commit/1676d1d2bfe646fb3ecbba29a85db529dd399493
    local _tag
    _tag="$(git tag -l 1.1.0)"
    [ "$_tag" != '1.1.0' ] && git tag 1.1.0 1676d1d2bfe646fb3ecbba29a85db529dd399493
}

pkgver() {
    cd "$_srcname"
    
    # git, tags available
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//'
}

build() {
    cd "$_srcname"
    
    arch-meson . build
    
    ninja -C build
}

package() {
    cd "$_srcname"
    
    DESTDIR="$pkgdir" meson install -C build
    
    # headers
    install -d -m755 "${pkgdir}/usr/include"
    install -m755 include/*.h "${pkgdir}/usr/include"
    
    # license
    install -D -m644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    
    # egl loader
    cd "$srcdir"
    install -D -m644 10_nvidia_wayland.json -t "${pkgdir}/usr/share/egl/egl_external_platform.d"
} 
