# Maintainer: Filipe Verri <filipeverri@gmail.com>

pkgname=build2
pkgver=0.6.0
pkgrel=1
pkgdesc="build2 build system"
arch=(i686 x86_64)
url="https://build2.org/"
license=('MIT')
depends=('libbutl=0.6.0')
makedepends=('gcc>=4.9')
source=("https://download.build2.org/0.6.0/build2-toolchain-0.6.0.tar.gz")
sha256sums=('7c1749abdd145254fadfe3684567767a785e3f78b094a5850d2c3d152e32a264')

build() {
  cd build2-toolchain-0.6.0

  if test -z "$(command -v b && b --version | grep '^build2 0.6.0')"
  then
    cd build2
    if ! test -x build2/b-boot; then
      ./bootstrap.sh g++
    fi
    cd ..
    export BCMD="$(pwd)/build2/build2/b-boot"
  else
    export BCMD=b
  fi

  cd build2

  $BCMD configure                      \
    config.cxx=g++                     \
    config.cc.coptions=-O3             \
    config.bin.lib=shared              \
    config.install.root="$pkgdir/usr"  \
    config.import.libbutl=''

  $BCMD 'update(build2/)'
}

package() {
  cd build2-toolchain-0.6.0

  if test -z "$(command -v b && b --version | grep '^build2 0.6.0')"
  then
    export BCMD="$(pwd)/build2/build2/b-boot"
  else
    export BCMD=b
  fi

  cd build2
  $BCMD install

  mkdir -p "$pkgdir/usr/share/licenses/$pkgname/"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
