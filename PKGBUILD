# Maintainer: Luis Marques <luigoalma@gmail.com>
# Taken and modified glfw package for lib32, original maintainers and contributors:
# Maintainer: Sven-Hendrik Haase <svenstaro@gmail.com>
# Contributor: philefou <tuxication AT gmail DOT com>
# Contributor: lindquist <tomas@famolsen.dk>
# Contributor: Christoph Siegenthaler <csi@gmx.ch>
# Contributor: Mihai Militaru <mihai.militaru@ephemeros.org>
# Contributor: SpepS <dreamspepser at yahoo dot it>

pkgbase=lib32-glfw
pkgname=('lib32-glfw-x11' 'lib32-glfw-wayland')
pkgver=3.3.6
pkgrel=1
arch=('x86_64')
url="https://www.glfw.org/"
license=('custom:ZLIB')
makedepends=('lib32-mesa' 'cmake' 'vulkan-headers' 'lib32-vulkan-icd-loader'
             'extra-cmake-modules' 'wayland-protocols' 'lib32-libxi' 'lib32-libxrandr'
             'lib32-libxcursor' 'lib32-libxkbcommon' 'lib32-libxinerama')
source=("glfw-${pkgver}.tar.gz"::"https://github.com/glfw/glfw/archive/${pkgver}.tar.gz")
sha512sums=('4c295c5f4c02f6ede125fce67c52a97450f552f3985b664745bd8a836c1d6d69c04727c956fd26ec61f1e5fd9c074a28dcf6b1d1800f118444eef066f048b201')

prepare() {
  cd "$srcdir/glfw-$pkgver"
  mkdir build-x11 build-wayland
}

build() {
  export CC='gcc -m32'
  export CXX='g++ -m32'
  export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'

  cd "$srcdir/glfw-$pkgver/build-x11"

  cmake .. \
      -DCMAKE_INSTALL_PREFIX=/usr \
      -DCMAKE_INSTALL_LIBDIR=lib32 \
      -DBUILD_SHARED_LIBS=ON \
      -DGLFW_BUILD_DOCS=OFF \
      -DGLFW_BUILD_EXAMPLES=OFF \
      -DGLFW_BUILD_TESTS=OFF

  cd ../build-wayland

  cmake .. \
      -DCMAKE_INSTALL_PREFIX=/usr \
      -DCMAKE_INSTALL_LIBDIR=lib32 \
      -DBUILD_SHARED_LIBS=ON \
      -DGLFW_BUILD_DOCS=OFF \
      -DGLFW_BUILD_EXAMPLES=OFF \
      -DGLFW_BUILD_TESTS=OFF \
      -DGLFW_USE_WAYLAND=ON
}

package_lib32-glfw-x11() {
  pkgdesc="A free, open source, portable framework for graphical application development (x11) (32-bit)"
  depends=('lib32-libxi' 'lib32-libxrandr' 'lib32-libxinerama' 'lib32-libxcursor' 'lib32-libgl')
  replaces=('lib32-glfw')
  conflicts=('lib32-glfw')
  provides=("lib32-glfw=$pkgver")

  cd "$srcdir/glfw-$pkgver"/build-x11

  make DESTDIR=$pkgdir install

  cd ..

  rm -rf "${pkgdir}"/usr/{bin,include,share}

  install -Dm644 LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"
}

package_lib32-glfw-wayland() {
  pkgdesc="A free, open source, portable framework for graphical application development (wayland) (32-bit)"
  depends=('lib32-wayland' 'lib32-libxkbcommon' 'lib32-libgl')
  conflicts=('lib32-glfw')
  provides=("lib32-glfw=$pkgver")

  cd "$srcdir/glfw-$pkgver"/build-wayland

  make DESTDIR=$pkgdir install

  cd ..

  rm -rf "${pkgdir}"/usr/{bin,include,share}

  install -Dm644 LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"
}

