# Maintainer: Thomas Krug <t.krug@elektronenpumpe.de>
# Contributor: Joe Davison <joedavison.davison@gmail.com>

pkgname=scummvm-git
_pkgname=scummvm
pkgver=r70525.75d1385
pkgrel=1
pkgdesc="A 'virtual machine' for several classic graphical point-and-click adventure games."
arch=('i686' 'x86_64')
url="http://www.scummvm.org"
license=('GPL')
depends=('sdl' 'libmad' 'fluidsynth' 'libgl' 'libtheora' 'faad2')
makedepends=('git')
conflicts=('scummvm')
provides=('scummvm')
source=("$_pkgname"::'git+https://github.com/scummvm/scummvm.git')
md5sums=('SKIP')
install=${_pkgname}.install
 
pkgver() {
  cd "$srcdir/$_pkgname"

  echo r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}
 
build() {
  cd "$srcdir/$_pkgname"
 
  ./configure --backend=sdl \
              --with-flac-prefix=/usr \
              --prefix=/usr \
              --enable-all-engines

  make
}
 
package() {
  cd "$srcdir/$_pkgname"
 
  make DESTDIR="$pkgdir" install

  install -D -m 644 dists/scummvm.desktop "$pkgdir/usr/share/applications/scummvm.desktop"
}

# vim:set ts=2 sw=2 et:
