# Maintainer: Reberti Carvalho Soares <6reberti6@gmail.com>
pkgname=rshell-git
provides=('rshell')
pkgdesc="KisuYami own shell."
pkgrel=1
pkgver=2.1.3e1221e51f
options=()
md5sums=('SKIP')
license=('GPLv2')
arch=('i686' 'x86_64')
groups=('shell' 'suckless')
depends=('ncurses' 'readline')
makedepends=('ncurses' 'readline')
url='www.github.com/KisuYami/RShell'
source=('git://github.com/KisuYami/RShell')

build() {
  cd rshell
  make
}

package() {
  cd rshell

  mkdir -p "$pkgdir"/usr/bin/
  mkdir -p "$pkgdir"/usr/share/man/man1/
  mkdir -p "$pkgdir"/usr/share/man/pt_BR/man1/

  make DESTDIR="$pkgdir" install
}

# vim:set ts=2 sw=2 et:
