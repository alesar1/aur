# Maintainer: Johnny Halfmoon <jhalfmoon@milksnot.com>
# Latest sources are at http://snapshots.linaro.org/components/toolchain/gcc-linaro/

pkgname=arm-none-eabi-gcc60-linaro
_relver=snapshot-6.2
_relshortdate=16.09
_reldate=20${_relshortdate}
_relverdate=${_relver}-${_reldate}
# This is how I want to define the pkgver, but the AUR doesn't understand it, because multiple _ characters are not allowed
#pkgver=${_relver}_${_reldate//-/_}
pkgver=6.2_2016.09
_pkgver=6.2-2016.09
pkgrel=1
pkgdesc="The GNU Compiler Collection - cross compiler for ARM EABI (bare-metal) target."
arch=(i686 x86_64)
url="https://releases.linaro.org/"
license=('GPL' 'LGPL')
groups=('arm-none-eabi-toolchain')
depends=('arm-none-eabi-binutils>=2.26-1' 'gmp' 'cloog-git' 'arm-none-eabi-newlib' 'mpfr' 'libmpc')
makedepends=('flex' 'bison')
provides=('arm-none-eabi-gcc')
conflicts=('arm-none-eabi-gcc' 'cross-arm-none-eabi-gcc')
options=(staticlibs !libtool !emptydirs !strip zipman docs)
source=(http://snapshots.linaro.org/components/toolchain/gcc-linaro/${_pkgver}/gcc-linaro-${_relverdate}.tar.xz
        0200-gcc-no-exceptions.patch
        0300-gcc-multilib2.patch
        1039-libcc1-fix-libcc1-s-install-path-and-rpath.patch)
_basedir=gcc-linaro-${_relverdate}

build() {
  cd ${srcdir}

cd ${srcdir}/${_basedir}
  find ${srcdir}/*.patch | while read PATCH ; do
    patch -Np1 -i $PATCH
  done
  mkdir build
  cd build

  export CFLAGS="-O2"
  export CXXFLAGS="-O2"
  unset CPPFLAGS
  ../configure --with-pkgversion="Arch User Repository" \
               --with-bugurl="https://aur.archlinux.org/packages/arm-none-eabi-gcc-linaro" \
               --target=arm-none-eabi\
               --prefix=/usr \
               --libexecdir=/usr/lib \
               --datarootdir=/usr/share/arm-none-eabi-gcc \
               --enable-multilib \
               --enable-languages=c,c++ \
               --enable-interwork \
               --with-newlib \
               --with-gnu-as \
               --with-gnu-ld \
               --with-system-zlib \
               --disable-nls \
	       --disable-isl-version-check \
               --disable-shared \
               --enable-threads \
	       --enable-lto \
               --disable-libssp \
               --disable-libstdcxx-pch \
	       --disable-libstdc__-v3 \
               --enable-silent-rules 
  make
}
#               --disable-libmudflap \
#               --disable-libgomp \
package() {
  cd ${srcdir}/${_basedir}/build
  make -j1 DESTDIR=${pkgdir} install

  # libiberty.a conflicts with host version
  rm -f  $pkgdir/usr/lib/libiberty.a
}

# vim: set ts=2 sw=2 ft=sh et:

sha256sums=('7d3e0508248ac491f0d9fb0772ae06862d4cc88405b06d19ceed8a4fc963b688'
            '76eab14830216c774291d2ac35d4b4690f3273aa8c630a2c1546f02538847d8a'
            'c9b6bc1dd53f9b4b80f5fdacdef94c9fce0e516c16fb78063107b66ba2e9fdd1'
	    'fa08269d6a748631b07b55a5fe00fa518b2f6e04356a3d6634c60f3c3ece3b07')
