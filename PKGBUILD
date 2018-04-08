# Maintainer: Fredy García <frealgagu at gmail dot com>
# Contributor: Antonio Rojas <arojas@archlinux.org>

pkgname=kholidays-git
pkgver=17.11.90.r39.4f773c6
pkgrel=1
pkgdesc="KDE library to assist determining when holidays occur"
arch=("armv6h" "armv7h" "i686" "x86_64")
url="https://projects.kde.org/projects/kde/pim/${gitname%-git}"
license=("LGPL")
depends=("kdelibs4support")
makedepends=("extra-cmake-modules-git" "git" "python")
conflicts=("${pkgname%-git}")
provides=("${pkgname%-git}")
source=("${pkgname%-git}::git://anongit.kde.org/${pkgname%-git}.git")
sha256sums=("SKIP")

pkgver() {
  cd "${srcdir}/${pkgname%-git}"
  (
    set -o pipefail
    git describe --long --tags 2> /dev/null | sed "s/^[a-Z\.\-]*//;s/\([^-]*-\)g/r\1/;s/-/./g" || 
    printf "r%s.%s\n" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)" 
  )
}

prepare() {
  mkdir -p "${srcdir}/${pkgname%-git}/build"
}

build() {
  cd "${srcdir}/${pkgname%-git}/build"
  cmake .. \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DKDE_INSTALL_USE_QT_SYS_PATHS=ON
  make
}

package() {
  cd "${srcdir}/${pkgname%-git}/build"
  make DESTDIR="${pkgdir}" install
}
