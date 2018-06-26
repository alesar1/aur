# Maintainer: Chih-Hsuan Yen <yan12125@gmail.com>

_pkgname=lxqt-archiver
pkgname=$_pkgname-git
pkgver=r4.ef82069
pkgrel=1
pkgdesc=" A simple & lightweight desktop-agnostic Qt file archiver"
arch=("i686" "x86_64")
url="https://lxqt.org"
license=("GPL2")
depends=("libfm-qt-git" "qt5-x11extras" "glib2" "json-glib")
makedepends=("git" "cmake" "qt5-tools" "lxqt-build-tools-git")
provides=("$_pkgname=$pkgver")
conflicts=("$_pkgname")
source=("git+https://github.com/lxqt/$_pkgname.git")
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgname"
  ( set -o pipefail
    git describe --long --tag 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

build() {
    mkdir -p build
    cd build
    cmake "$srcdir/$_pkgname" \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_INSTALL_LIBEXECDIR=lib
    make
}

package() {
    cd build
    make DESTDIR="$pkgdir" install
}
