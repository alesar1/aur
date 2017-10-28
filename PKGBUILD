# Maintainer: Kazutoshi Noguchi <noguchi.kazutosi+lGlcOenS [at] gmail [dot] com>
# Contributor: Marco Kundt <mrckndt [at] gmail [dot] com>

pkgname=lib32-libgtk3-nocsd-git
pkgver=r55.82ff5a0
pkgrel=5
pkgdesc='A hack to disable gtk+ 3 client side decoration (32-bit library)'
arch=('x86_64')
url='https://github.com/PCMan/gtk3-nocsd'
license=('LGPL')
depends=('gtk3-nocsd-git')
makedepends=('git' 'gobject-introspection' 'gcc-multilib' 'lib32-glib2')
source=(git+https://github.com/PCMan/gtk3-nocsd)

sha256sums=('SKIP')

_gitname='gtk3-nocsd'

pkgver() {
  cd "$srcdir/$_gitname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/$_gitname"

  export CFLAGS="-m32 ${CFLAGS}"
  export CXXFLAGS="-m32 ${CXXFLAGS}"
  export LDFLAGS="-m32 ${LDFLAGS}"
  export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'
  make
}

package() {
  cd "$srcdir/$_gitname"
  install -D -m 0644 libgtk3-nocsd.so.0 "${pkgdir}"/usr/lib32/libgtk3-nocsd.so.0
}
