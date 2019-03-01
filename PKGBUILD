# Maintainer: Sven-Hendrik Haase <sh@lutzhaase.com>
# Contributor: Peter Hatina <phatina AT gmail.com>
pkgname=glm-git
pkgver=r1920.477e803f
pkgrel=1
pkgdesc="C++ mathematics library for 3D software based on the OpenGL Shading Language (GLSL) specification"
arch=('any')
license=('MIT')
url="http://glm.g-truc.net"
makedepends=('cmake')
conflicts=('glm')
provides=('glm')
source=("git+https://github.com/g-truc/glm.git")
sha512sums=('SKIP')
pkgver() {
    cd "${srcdir}/glm"
    printf "r%s.%s" "$(git rev-list HEAD --count --first-parent)" "$(git rev-parse --short HEAD)"
}
package() {
    cd "${srcdir}/glm"

    mkdir -p  build
    cd build

    cmake .. \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_INSTALL_LIBDIR=lib
    make DESTDIR=$pkgdir install

    cd ..

    mkdir -p $pkgdir/usr/share/doc
    cp -r doc $pkgdir/usr/share/doc/glm

    find $pkgdir -type f -exec chmod 644 {} \;
    find $pkgdir -type d -exec chmod 755 {} \;

}
