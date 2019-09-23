# Maintainer: David P. <megver83@parabola.nu>

_target=xtensa-elf
pkgname=$_target-gcc
_pkgver=9.2.0
#_snapshot=8-20180824
pkgver=$_pkgver${_snapshot/*-/+}
_islver=0.21
pkgrel=1
pkgdesc='The GNU Compiler Collection - cross compiler for Xtensa target'
arch=(x86_64 i686 armv7h)
url='http://gcc.gnu.org/'
license=(GPL LGPL FDL)
depends=($_target-binutils libmpc zlib)
makedepends=(gmp mpfr)
options=(!emptydirs !strip)
source=(https://gcc.gnu.org/pub/gcc/releases/gcc-$_pkgver/gcc-$_pkgver.tar.xz{,.sig}
        #https://gcc.gnu.org/pub/gcc/snapshots/$_snapshot/gcc-$_snapshot.tar.xz
        http://isl.gforge.inria.fr/isl-$_islver.tar.bz2
        https://raw.githubusercontent.com/qca/open-ath9k-htc-firmware/master/local/patches/gcc.patch)
sha512sums=('a12dff52af876aee0fd89a8d09cdc455f35ec46845e154023202392adc164848faf8ee881b59b681b696e27c69fd143a214014db4214db62f9891a1c8365c040'
            'SKIP'
            '48f3b8d90550e8ab28837b5757f87bf99cddec67769877e04942abef69bbe526ef4c863951d55dd89a6027dc09df48988c8df6029782f990aa4d5b67e65f6d53'
            '7637408259cef4b14a2f41690bbc769ad0dc6cf4d1c782405526aeb58f68193269af6882b23fb57c3521174e45709ed2d54f0af1f835646e70a3bfd9f626aad9')
validpgpkeys=(33C235A34C46AA3FFB293709A328C3A2C3C45C06) # Jakub Jelinek <jakub@redhat.com>

if [ -n "$_snapshot" ]; then
  _basedir=gcc-$_snapshot
else
  _basedir=gcc-$_pkgver
fi

prepare() {
  cd $_basedir

  # link isl for in-tree builds
  ln -sf ../isl-$_islver isl

  echo $_pkgver > gcc/BASE-VER

  # hack! - some configure tests for header files using "$CPP $CPPFLAGS"
  sed -i "/ac_cpp=/s/\$CPPFLAGS/\$CPPFLAGS -O2/" "$srcdir"/$_basedir/{libiberty,gcc}/configure
  
  patch -p1 -i ../gcc.patch

  mkdir $srcdir/gcc-build
}

build() {
  cd gcc-build

  # using -pipe causes spurious test-suite failures
  # http://gcc.gnu.org/bugzilla/show_bug.cgi?id=48565
  CFLAGS=${CFLAGS/-pipe/}
  CXXFLAGS=${CXXFLAGS/-pipe/}

  $srcdir/$_basedir/configure \
    --target=$_target \
    --prefix=/usr \
    --libexecdir=/usr/lib \
    --enable-languages=c,c++ \
    --enable-plugins \
    --enable-shared \
    --disable-decimal-float \
    --disable-libffi \
    --disable-libgomp \
    --disable-libmudflap \
    --disable-libquadmath \
    --disable-libssp \
    --disable-libstdcxx-pch \
    --disable-nls \
    --disable-threads \
    --disable-tls \
    --disable-multilib \
    --with-gnu-as \
    --with-gnu-ld \
    --with-system-zlib \
    --with-gmp \
    --with-mpfr \
    --with-mpc \
    --with-isl \
    --with-libelf \
    --enable-gnu-indirect-function

  make $MAKEFLAGS all-gcc
}

package() {
  cd gcc-build

  make DESTDIR="$pkgdir" install-gcc

  # strip target binaries
  find "$pkgdir"/usr/lib/gcc/$_target/ -type f -and \( -name \*.a -or -name \*.o \) -exec $_target-objcopy -R .comment -R .note -R .debug_info -R .debug_aranges -R .debug_pubnames -R .debug_pubtypes -R .debug_abbrev -R .debug_line -R .debug_str -R .debug_ranges -R .debug_loc '{}' \;

  # strip host binaries
  find "$pkgdir"/usr/bin/ "$pkgdir"/usr/lib/gcc/$_target/ -type f -and \( -executable \) -exec strip '{}' \;

  # Remove files that conflict with host gcc package
  rm -r "$pkgdir"/usr/share/man/man7
  rm -r "$pkgdir"/usr/share/info
}
