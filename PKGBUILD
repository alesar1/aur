# Maintainer: Aaron Fischer <mail@aaron-fischer.net>
# Contributor: J. W. Birdsong <jwbirdsong AT gmail DOT com>
# Contributor: Kevin Piche <kevin@archlinux.org>

pkgname=worker
pkgver=3.15.0
pkgrel=1
pkgdesc="A file manager for the X Window System"
arch=('i686' 'x86_64')
license=('GPL')
url="http://www.boomerangsworld.de/worker"
depends=('avfs' 'gcc-libs' 'libx11' 'file')
makedepends=('libxt')
source=(http://www.boomerangsworld.de/cms/${pkgname}/downloads/${pkgname}-${pkgver}.tar.bz2
        http://www.boomerangsworld.de/cms/${pkgname}/downloads/${pkgname}-${pkgver}.tar.bz2.asc)
sha256sums=('04fcf5fda0a338aedc92092aafc8f0bdd30b65c1d62ffd52ef0a2ea590005751'
            '70a5e9fab108033f6f34cd12ad37e1a320fdf3b23161e293add2788252cdeafd')
validpgpkeys=('F9299EE90A729029E71AF26B667132D0FBC52B37') # Ralf Hoffmann

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  # We need to disable the optimizations because of a bug in gcc
  # (see https://gcc.gnu.org/bugzilla/show_bug.cgi?id=63140 for details)
  # Ralf added a gcc constraint check to avoid compiling bad optimized code.
  # Because we run a recent version of gcc, we disable the check, and
  # disable also the compiler optimizations completely. Because the code
  # uses some C++11 features, we need to set this explicitly.
  #
  # To bypass the pthread bug, the LDFLAGS is set here explicit until
  # the bug is solved. See here for more detail and progress:
  # https://sourceforge.net/p/workerfm/mailman/message/34136485/
  CPPFLAGS="-O0 -std=gnu++11" LDFLAGS=-pthread ./configure --enable-xft --prefix=/usr --disable-cxx-check

  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
}
