# Maintainer: Daniel Bermond < yahoo-com: danielbermond >

# NOTE:
# libmfx defaults to build only the static library.

pkgname=libmfx-git
pkgver=1.23.r8.gb93a3ac
pkgrel=1
pkgdesc='Intel Media SDK dispatcher library (git version)'
arch=('i686' 'x86_64')
url='https://github.com/lu-zero/mfx_dispatch/'
license=('BSD')
makedepends=('git' 'libva')
provides=('libmfx')
conflicts=('libmfx')
source=("$pkgname"::'git+https://github.com/lu-zero/mfx_dispatch.git')
sha256sums=('SKIP')

pkgver() {
    cd "$pkgname"
    
    # git, tags available
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//'
}

build() {
    cd "$pkgname"
    
    autoreconf -i
    
    ./configure \
        --prefix='/usr' \
        --enable-fast-install='yes' \
        --with-libva_drm='yes' \
        --with-libva_x11='yes' \
        --with-pic
}

package() {
    cd "$pkgname"
    
    make DESTDIR="$pkgdir" install
    
    install -D -m644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
