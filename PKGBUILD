# Maintainer:  Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Allan McRae <allan@archlinux.org>
# Contributor: judd <jvinet@zeroflux.org>

# Before you complain about unverifiable signature, please read Allan's post:
# http://allanmcrae.com/2015/01/two-pgp-keyrings-for-package-management-in-arch-linux/
# TLDR: gpg --keyserver pgp.mit.edu --recv-keys C52048C0C0748FEE227D47A2702353E0F7E48EDB 

pkgname=ncurses5-compat-libs
_pkgname=ncurses
pkgver=6.0
pkgrel=2
pkgdesc='System V Release 4.0 curses emulation library, ABI 5'
arch=('i686' 'x86_64')
url='http://invisible-island.net/ncurses/ncurses.html'
license=('MIT')
depends=('glibc' 'gcc-libs' 'sh')
source=(http://invisible-mirror.net/archives/ncurses/ncurses-${pkgver/_/-}.tar.gz{,.asc})
md5sums=('ee13d052e1ead260d7c28071f46eefb1'
         'SKIP')
validpgpkeys=('C52048C0C0748FEE227D47A2702353E0F7E48EDB')  # Thomas Dickey

build() {
  cd $_pkgname-${pkgver/_/-}

  ./configure --prefix=/usr --mandir=/usr/share/man \
    --with-pkg-config-libdir=/usr/share --with-shared --with-normal \
    --without-debug --without-ada --enable-widec --enable-pc-files \
    --with-cxx-binding --with-cxx-shared --with-abi-version=5
  make
}

package() {
  cd $_pkgname-${pkgver/_/-}
  make DESTDIR="$pkgdir" install.libs
  rm -rf "$pkgdir"/usr/include/ "$pkgdir"/usr/lib/pkgconfig "$pkgdir"/usr/lib/*.so

  # fool packages looking to link to non-wide-character ncurses libraries
  for lib in ncurses ncurses++ form panel menu; do
    ln -s /usr/lib/lib${lib}w.so.5 "$pkgdir"/usr/lib/lib${lib}.so.5
  done

  # install license, rip it from the readme
  install -d "$pkgdir"/usr/share/licenses/$pkgname
  grep -B 100 '$Id' README > "$pkgdir"/usr/share/licenses/$pkgname/LICENSE
}
