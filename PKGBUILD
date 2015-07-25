# Maintainer: David Manouchehri <david@davidmanouchehri.com>
# Contributor: Manuel Hüsers <manuel.huesers@uni-ol.de>
# Contributor: Romanos Skiadas <rom.skiad@gmail.com>
# Contributor: Melik Ludwig Manukyan <melik@archlinux.us>

pkgname=archey
_gitname=$pkgname
_gitbranch=master
_gitauthor=Manouchehri # djmelik
pkgver=r145.bb8d4a3
pkgrel=1
pkgdesc="A script that displays the arch logo and some basic information, written in Python."
url="https://github.com/$_gitauthor/$_gitname"
license=('GPL')
source=("git://github.com/$_gitauthor/$_gitname.git#branch=$_gitbranch")
validpgpkeys=('F0FE029614EA35BC9E4F9768A6ECFD0C40839755') # David Manouchehri
sha512sums=('SKIP')
arch=('any') # arch=('i686' 'x86_64')
depends=('python')
makedepends=('git')
optdepends=('scrot: for taking screenshots of the output' 'lsb-release')
# conflicts=("$_gitname")
provides=("$_gitname")

pkgver() {
  cd "$srcdir/$_gitname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd "$srcdir/$_gitname"
  install -D -m755 archey ${pkgdir}/usr/bin/archey # || return 1
  install -D -m644 COPYING ${pkgdir}/usr/share/licenses/archey/COPYING
}
