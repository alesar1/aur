# Maintainer:  Peter Mattern <pmattern at arcor dot de>

_pkgname=qps
pkgname=$_pkgname-git
pkgver=r14.3ad194f
pkgrel=1
pkgdesc="Qt process manager"
arch=("i686" "x86_64")
url="https://github.com/QtDesktop/qps"
license=("unknown")
depends=("qt5-x11extras" "libxkbcommon-x11")
makedepends=("git" "cmake")
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("git+https://github.com/QtDesktop/qps.git")
sha256sums=("SKIP")

pkgver() {
    cd $_pkgname
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    mkdir build ; cd build
    cmake ../$_pkgname -DCMAKE_INSTALL_PREFIX=/usr
    make
}

package() {
    cd build
    make DESTDIR=$pkgdir install
}
