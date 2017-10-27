# Maintainer: Jesus Alonso <doragasu at hotmail dot com>
# NOTE: As I want these packages for Genesis/Megadrive development, they do
# only support the m68000 CPU. If you want to support other m68k variants,
# either modify _target_cpu to suit your needs, or go wild, remove the
# --with-cpu switches and change --disable-multilib with --enable-multilib.
# Be warned that multilib packages will take a lot more time to build, and
# will also require more disk space.

_target=m68k-elf
_target_cpu=m68000
pkgname=${_target}-binutils
pkgver=2.29
pkgrel=1
pkgdesc="A set of programs to assemble and manipulate binary and object files (${_target})"
arch=('i686' 'x86_64')
url="http://www.gnu.org/software/binutils/"
license=('GPL')
depends=('glibc>=2.23' 'zlib')
options=('staticlibs' '!distcc' '!ccache')
source=(http://ftp.gnu.org/gnu/binutils/binutils-${pkgver}.tar.xz)
sha256sums=('0b871e271c4c620444f8264f72143b4d224aa305306d85dd77ab8dce785b1e85')
prepare() {
  cd binutils-${pkgver}

  # hack! - libiberty configure tests for header files using "$CPP $CPPFLAGS"
  sed -i "/ac_cpp=/s/\$CPPFLAGS/\$CPPFLAGS -O2/" libiberty/configure

  mkdir ${srcdir}/binutils-build
}

build() {
  cd binutils-build

  ../binutils-${pkgver}/configure --prefix=/usr \
      --target=${_target} \
	  --disable-multilib \
	  --with-cpu=${_target_cpu} \
      --disable-nls

  make
}

package() {
  cd binutils-build
  make prefix=${pkgdir}/usr install

  # Remove unwanted files
  rm -rf ${pkgdir}/usr/share
}

