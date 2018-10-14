# Maintainer: Z.Wind.L <zwindl@protonmail.com>

pkgname=breeze-blurred-git
_pkgname=BreezeBlurred
pkgver=33.f73965e
pkgrel=1
pkgdesc='A fork of KDE Breeze window decoration written in Qt C++'
arch=('any')
url='https://github.com/alex47/BreezeBlurred'
license=('GPL2')
depends=('kdecoration' 'qt5-declarative' 'qt5-x11extras' 'kcoreaddons' 'kguiaddons' 'kconfigwidgets' 'kwindowsystem' 'fftw')
makedepends=('cmake' 'extra-cmake-modules' 'git')
source=('git+https://github.com/alex47/BreezeBlurred')
md5sums=('SKIP')

pkgver() {
  cd $_pkgname
  printf "%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd $_pkgname
  mkdir build
  install -d build
}

build() {
  cd $_pkgname/build
  cmake .. -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release -DKDE_INSTALL_LIBDIR=lib -DBUILD_TESTING=OFF -DKDE_INSTALL_USE_QT_SYS_PATHS=ON
}

package() {
  cd $_pkgname/build
  make DESTDIR="$pkgdir" install
}
