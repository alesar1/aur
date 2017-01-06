# Maintainer: Tyler Veness <calcmogul at gmail dot com>

_target=arm-frc-linux-gnueabi
pkgname=$_target-gdb
pkgver=7.12
pkgrel=2
pkgdesc="The GNU Debugger (${_target})"
arch=(i686 x86_64)
url='http://www.gnu.org/software/gdb/'
license=(GPL3)
groups=('frc-2017')
depends=(xz ncurses expat python2 guile)
makedepends=(texinfo)
optdepends=('openocd: for debugging JTAG targets'
            'stlink: for debugging over STLINK')
options=(!emptydirs)
source=(ftp://ftp.gnu.org/gnu/gdb/gdb-$pkgver.tar.xz)
sha256sums=('834ff3c5948b30718343ea57b11cbc3235d7995c6a4f3a5cecec8c8114164f94')

build() {
  cd gdb-$pkgver

  sed -i "/ac_cpp=/s/\$CPPFLAGS/\$CPPFLAGS -O2/" libiberty/configure

  ./configure --target=${_target} \
              --prefix=/usr \
              --with-pkgversion='GDB for FRC' \
              --disable-nls \
              --with-libexpat \
              --datadir=/usr/share/frc \
              --with-system-gdbinit=/usr/share/frc/gdb/gdbinit \
              --with-sysroot=/usr/${_target} \
              --enable-lto
  make
}

package() {
  cd gdb-$pkgver

  make DESTDIR="$pkgdir" install

  # Following files conflict with 'gdb' package
  rm -r "$pkgdir"/usr/share/info
  # TOTHINK: we remove python module used for debugging. It means arm-*-gdb alone will not be able to debug and 'gdb' package
  # should be installed. File a bug upstream - ask a separate python module folder for cross tools.
  rm -r "$pkgdir"/usr/include/gdb
}
