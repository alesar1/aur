# Maintainer: Andrew Sun <adsun701@gmail.com>

_basename=egl-wayland
pkgname="lib32-$_basename"
pkgver=1.1.1
pkgrel=1
pkgdesc="EGLStream-based Wayland external platform (32-bit)"
arch=(x86_64)
url=https://github.com/NVIDIA/egl-wayland
license=(MIT)
depends=('lib32-wayland' 'eglexternalplatform' "$_basename")
makedepends=('meson' 'git')
options=(!emptydirs)
_commit=59ff78fcf874c28a11361acc9d07a3d5e17e1664  # tags/1.1.1
source=("git+$url#commit=$_commit")
sha256sums=('SKIP')

pkgver() {
  cd $_basename
  git describe --tags | sed 's/-/+/g'
}

prepare() {
  cd $_basename
  git tag -f 1.1.0 1676d1d2bfe646fb3ecbba29a85db529dd399493  # Fixup missing tag
}

build() {
  export CC="gcc -m32"
  export CXX="g++ -m32"
  export PKG_CONFIG_PATH="/usr/lib32/pkgconfig"

  arch-meson ${_basename} build --libdir=/usr/lib32
  ninja -C build
}

package() {
  DESTDIR="$pkgdir" meson install -C build
  rm -rf "$pkgdir"/usr/{include,share,bin}
}
