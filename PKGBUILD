# Maintainer: Finlay Maroney <finman292004@protonmail.com>

_target=i686-elf
pkgname=$_target-binutils
pkgver=2.36.1
pkgrel=2
pkgdesc='A set of programs to assemble and manipulate binary and object files for the i686-elf target'
arch=(i686 x86_64)
url='http://www.gnu.org/software/binutils/'
license=(GPL)
depends=(zlib libelf)
options=(!emptydirs !docs)
source=("http://mirrors.kernel.org/gnu/binutils/binutils-$pkgver.tar.xz"
        "https://mirrors.kernel.org/gnu/binutils/binutils-$pkgver.tar.xz.sig"
        "libiberty-ignore-cflags.patch")
_basedir=binutils-$pkgver
sha256sums=('e81d9edf373f193af428a0f256674aea62a9d74dfe93f65192d4eae030b0f3b0'
            'SKIP'
            '8b2aea00e98f7c311b1d0fb14e4b435a03c65fde32bc992c924edb6fa7b83c9c')
validpgpkeys=("3A24BC1E8FB409FA9F14371813FCEF89DD9E3C4F")
prepare() {
  cd $_basedir

  patch -p1 -i $srcdir/libiberty-ignore-cflags.patch

  mkdir $srcdir/binutils-build
}

build() {
  cd binutils-build

  $srcdir/$_basedir/configure \
    --target=$_target \
    --with-sysroot \
    --prefix=/usr \
    --bindir=/usr/bin \
	--libdir=/usr/lib/i686-elf/ \
    --disable-nls \
    --disable-werror

  make
}

check() {
  cd binutils-build
  
  # do not abort on errors - manually check log files
  make -k check
}

package() {
  cd binutils-build

  make DESTDIR="$pkgdir" install

  rm -r ${pkgdir}/usr/share/{info,man}
}

