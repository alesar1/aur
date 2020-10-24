# Maintainer: Martin

_module=kuickshow
pkgname=kde1-${_module}-git
pkgver=0.2.1.r6.ca926a2
pkgrel=1
pkgdesc="Historical copy of $_module for KDE 1, adapted to compile on modern systems"
arch=(i686 x86_64)
url="https://github.com/sandsmark/kde1-${_module}/"
license=("GPL2")
groups=(kde1)
depends=(kde1-kdelibs)
makedepends=(cmake git)
provides=(kde1-kde${_module})
conflicts=(kde1-kde${_module})

# Mirror
source=("git+https://github.com/sandsmark/kde1-${_module}.git")

md5sums=('SKIP')

pkgver() {
  cd kde1-${_module}
  printf "0.2.1.r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  if [[ -d build ]]; then
    rm -rf build && mkdir build
  else
    mkdir build
  fi
}

build() {
  cd build
  cmake "$srcdir"/kde1-${_module} -DCMAKE_INSTALL_PREFIX=/usr
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir/" install
  cd "$srcdir"/kde1-${_module}
  install -Dm644 COPYING $pkgdir/usr/share/licenses/$pkgname/COPYING
}
