# Maintainer: Andris Pavenis <andris.pavenis iki fi>
# Maintainer: carstene1ns <arch carsten-teibes de>
# Contributor: felix <base64 -d <<< ZmVsaXgudm9uLnNAcG9zdGVvLmRlCg==>

pkgname=djgpp-gcc
pkgver=10.1.0
_target="i686-pc-msdosdjgpp"
_islver=0.20
_djver=2.05
pkgrel=2
pkgdesc="GCC for the djgpp cross-compiler"
arch=('i686' 'x86_64')
url="http://gcc.gnu.org"
license=('GPL3' 'LGPL3')
groups=('djgpp')
depends=('zlib' 'libmpc' 'djgpp-binutils>=2.30' 'djgpp-djcrx' 'gcc-ada')
makedepends=('unzip')
optdepends=('djgpp-djcrx: headers and utilities')
optdepends+=('djgpp-djcrx-bootstrap: first build of djgpp-gcc before djgpp-djcrx is built')
options=('!strip' 'staticlibs' '!emptydirs')
source=("https://ftp.gnu.org/gnu/gcc/gcc-$pkgver/gcc-$pkgver.tar.xz"
        "http://isl.gforge.inria.fr/isl-${_islver}.tar.bz2"
        "lto.patch"
	"gcc-djgpp.diff")
sha256sums=('b6898a23844b656f1b68691c5c012036c2e694ac4b53a8918d4712ad876e7ea2'
            'b587e083eb65a8b394e833dea1744f21af3f0e413a448c17536b5549ae42a4c2'
            'c03dbd61274e1ce14f84366abf348d75779bbd6e0bc32b9f4fd74f1ce54a5ef0'
            'ff8038e8feef213b9a79dfc604c37a267dbdd0c66f333547909f2af17c6d7a9d')

prepare() {
  cd gcc-$pkgver

  # link isl for in-tree build
  ln -fs "../isl-${_islver}" isl

  # build the lto plugin
  patch -Np0 < ../lto.patch

  # Other DJGPP related changes
  patch -Np1 < ../gcc-djgpp.diff
}

build() {
  export CPPFLAGS="$CPPFLAGS -O2"
  if [ "$(gcc -dumpversion | sed -e 's:\..*::')" != "$(echo $pkgver | sed -e 's:\..*::')" ] ; then
     echo "Different GCC major version: building native compiler at first"
     mkdir gcc-build-native
     _tmpinst=$(pwd)/gcc-install-native
     mkdir ${_tmpinst}
     cd gcc-build-native
     ../gcc-$pkgver/configure --prefix=${_tmpinst} --enable-languages=c,c++,ada --disable-multilib --enable-__cxa_atexit --disable-plugin --disable-libsanitizer
     make bootstrap
     make install
     cd ..
     export PATH=${_tmpinst}/bin:$PATH
  fi
  mkdir gcc-build-$_target
  test "$(gcc -dumpversion | sed -e 's:\..*::')" == "$(echo $pkgver | sed -e 's:\..*::')" || exit 1
  cd gcc-build-$_target
  ../gcc-$pkgver/configure --prefix=/usr --libexecdir=/usr/lib \
    --target="$_target" \
    --enable-languages=c,c++,ada,fortran,objc,obj-c++ \
    --enable-shared --enable-static \
    --enable-threads=no --with-system-zlib --with-isl \
    --enable-lto --disable-libgomp \
    --disable-multilib --enable-checking=release \
    --disable-libstdcxx-pch \
    --enable-libstdcxx-filesystem-ts \
    --disable-install-libiberty
  make all
}

package_djgpp-gcc() {
  make -C gcc-build-$_target DESTDIR="$pkgdir/" install

  # strip manually, djgpp libs spew errors otherwise
  strip "$pkgdir"/usr/bin/$_target-*
  strip "$pkgdir"/usr/lib/gcc/$_target/$pkgver/{cc1*,collect2,lto*,f951,gnat1}

  # for compatibility
  ln -s $_target-gcc "$pkgdir"/usr/bin/$_target-cc

  # remove unnecessary files
  rm -rf "$pkgdir"/usr/share/{man/man7,info,locale}
  rm -rf "$pkgdir"/usr/share/gcc-$pkgver/python
  rm -rf "$pkgdir"/usr/lib/gcc/$_target/$pkgver/include-fixed
  rm -f "$pkgdir"/usr/lib*/libcc1.*
}
