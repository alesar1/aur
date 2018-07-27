# Maintainer: Andris Pavenis <andris.pavenis iki fi>
# Maintainer: carstene1ns <arch carsten-teibes de>
# Contributor: felix <base64 -d <<< ZmVsaXgudm9uLnNAcG9zdGVvLmRlCg==>

pkgname=djgpp-gcc
pkgver=8.2.0
_target="i686-pc-msdosdjgpp"
_islver=0.18
_djver=2.05
pkgrel=1
pkgdesc="GCC for the djgpp cross-compiler"
arch=('i686' 'x86_64')
url="http://gcc.gnu.org"
license=('GPL3' 'LGPL3')
groups=('djgpp')
depends=('zlib' 'libmpc' 'djgpp-binutils>=2.30' 'djgpp-djcrx')
makedepends=('unzip' 'gcc-ada>=8.1.0')
optdepends=('djgpp-djcrx: headers and utilities')
options=('!strip' 'staticlibs' '!emptydirs')
source=("https://ftp.gnu.org/gnu/gcc/gcc-$pkgver/gcc-$pkgver.tar.xz"
        "http://isl.gforge.inria.fr/isl-${_islver}.tar.bz2"
        "lto.patch"
	"gcc-djgpp.diff")
sha256sums=('196c3c04ba2613f893283977e6011b2345d1cd1af9abeac58e916b1aab3e0080'
            '6b8b0fd7f81d0a957beb3679c81bbb34ccc7568d5682844d8924424a0dadcb1b'
            'c03dbd61274e1ce14f84366abf348d75779bbd6e0bc32b9f4fd74f1ce54a5ef0'
            'b7a0dece2451a4b9c0abf4b3828ebc06b580487eb9724a2bc298c0f3421a3dda')

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
  mkdir gcc-build-$_target
  cd gcc-build-$_target
  export CPPFLAGS="$CPPFLAGS -O2"
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
