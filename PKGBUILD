# Maintainer: Ilya Lipnitskiy <ilya.lipnitskiy@gmail.com>

_target=arm-linux-gnueabihf
pkgname=$_target-gdb
pkgver=7.10
pkgrel=1
pkgdesc='The GNU Debugger for the ARM hard float target'
arch=(i686 x86_64)
url='http://www.gnu.org/software/gdb/'
license=(GPL3)
depends=(xz ncurses expat python2 guile)
makedepends=(texinfo)
options=(!emptydirs)
source=(http://ftp.gnu.org/gnu/gdb/gdb-$pkgver.tar.xz)
sha256sums=('7ebdaa44f9786ce0c142da4e36797d2020c55fa091905ac5af1846b5756208a8')

build() {
  cd gdb-$pkgver

  sed -i "/ac_cpp=/s/\$CPPFLAGS/\$CPPFLAGS -O2/" libiberty/configure

  ./configure --target=$_target \
              --prefix=/usr \
              --enable-multilib \
              --enable-interwork \
              --with-system-readline \
              --disable-nls \
              --with-python=/usr/bin/python2 \
              --with-system-gdbinit=/etc/gdb/gdbinit
  make
}

package() {
  cd gdb-$pkgver

  make DESTDIR="$pkgdir" install

  # Following files conflict with 'gdb' package
  rm -r "$pkgdir"/usr/share/info
  # TOTHINK: we remove python module used for debugging. It means arm-*-gdb alone will not be able to debug and 'gdb' package
  # should be installed. File a bug upstream - ask a separate python module folder for cross tools.
  rm -r "$pkgdir"/usr/share/gdb
  rm -r "$pkgdir"/usr/include/gdb
  rm -r "$pkgdir"/usr/share/man/man5
}
