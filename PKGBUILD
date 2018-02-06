# Contributor: Axper Jan <483ken _at_ gmail _dot_ com
# Contributor: Daniel Kirchner <ekpyron at lavabit dot com>
# Contributor: Emmanuel Gil Peyrot <linkmauve@linkmauve.fr>
# Maintainer: Ricardo Vieira <ricardo.vieira@tecnico.ulisboa.pt>

_pkgbase=glfw
pkgbase="$_pkgbase-git"
pkgname=("$_pkgbase-x11-git" "$_pkgbase-wayland-git")
pkgver=3.2.1.r479.g973bf296
pkgrel=1
arch=('i686' 'x86_64' 'armv7h')
url="http://www.glfw.org/"
license=('custom:ZLIB')
optdepends=('doxygen: build glfw html documentation')
makedepends=('cmake' 'extra-cmake-modules' 'git' 'libxi' 'libxrandr' 'libxinerama' 'libxcursor' 'wayland' 'wayland-protocols' 'libxkbcommon' 'libgl')
conflicts=("$_pkgbase")
provides=("$_pkgbase=3.2")
source=("$_pkgbase::git+https://github.com/glfw/glfw")
md5sums=('SKIP')

pkgver() {
  cd $_pkgbase
  git describe --long | sed -r 's/([^-]*-g)/r\1/;s/-/./g'
}

prepare() {
  mkdir -p $_pkgbase/build-x11
  mkdir -p $_pkgbase/build-wayland
}

build() {
  cd $_pkgbase/build-x11
  cmake \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DBUILD_SHARED_LIBS=ON \
    -DGLFW_BUILD_EXAMPLES=OFF \
    -DGLFW_BUILD_TESTS=OFF \
    -Wno-dev \
    ..
  make

  cd ../build-wayland
  cmake \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DBUILD_SHARED_LIBS=ON \
    -DGLFW_BUILD_EXAMPLES=OFF \
    -DGLFW_BUILD_TESTS=OFF \
    -DGLFW_USE_WAYLAND=ON \
    -Wno-dev \
    ..
  make
}

package_glfw-x11-git() {
  depends=('libxi' 'libxrandr' 'libxinerama' 'libxcursor' 'libgl')
  pkgdesc="A free, open source, portable framework for OpenGL application development. (git, X11 version)"

  cd $_pkgbase/build-x11
  make DESTDIR="$pkgdir" install
  install -Dm644 ../LICENSE.md "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}

package_glfw-wayland-git() {
  depends=('wayland' 'libxkbcommon' 'libgl')
  pkgdesc="A free, open source, portable framework for OpenGL application development. (git, Wayland version)"

  cd $_pkgbase/build-wayland
  make DESTDIR="$pkgdir" install
  install -Dm644 ../LICENSE.md "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}

# vim:set ts=2 sw=2 et:
