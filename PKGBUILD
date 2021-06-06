# Maintainer: Nico <d3sox at protonmail dot com>
# Contributor: Sefa Eyeoglu <contact@scrumplex.net>
pkgname=lightly-git
_gitname=Lightly
pkgver=r2120.be20234d
pkgrel=1
pkgdesc="A modern style for qt applications"
arch=('x86_64' 'aarch64')
url="https://github.com/Luwx/$_gitname"
license=("GPL2")
depends=("frameworkintegration" "kdecoration" "breeze-icons" "kwayland" "hicolor-icon-theme")
makedepends=("git" "cmake" "extra-cmake-modules" "kcmutils" "kdecoration" "qt5-declarative" "qt5-x11extras")
provides=("lightly-qt")
conflicts=("lightly-qt")
source=("git+$url")
sha512sums=('SKIP')

pkgver() {
  cd "$srcdir/$_gitname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/$_gitname"
  mkdir -p build && cd build
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_INSTALL_LIBDIR=lib -DBUILD_TESTING=OFF ..
  make
}

package() {
  cd "$srcdir/$_gitname/build"
  make DESTDIR="$pkgdir" install
  install -Dm 644 -t "${pkgdir}/usr/share/licenses/${pkgname}" "$srcdir/$_gitname/COPYING"
}
