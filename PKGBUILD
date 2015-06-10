# Maintainer: Alexander R�dseth <rodseth@gmail.com>

pkgname=libcss-svn
pkgver=13772
pkgrel=1
pkgdesc="CSS parser and selection engine"
arch=('any')
url="http://www.netsurf-browser.org/projects/libcss/"
license=('MIT')
depends=('libparserutils>=0.1.0' 'libwapcaplet-svn>=13777')
makedepends=('subversion')
provides=('libcss=0.0.3')
conflicts=('libcss')
_svntrunk=svn://svn.netsurf-browser.org/trunk/libcss
_svnmod=libcss

build() {
  cd "$srcdir"

  if [ -d $_svnmod/.svn ]; then
    (cd $_svnmod && svn up -r $pkgver)
  else
    svn co $_svntrunk --config-dir ./ -r $pkgver $_svnmod
  fi
  msg "SVN checkout done or server timeout"
  cd "$_svnmod"

  msg2 "Compiling..."
  export CFLAGS="-Wno-unused-but-set-variable"
  make
}

package() {
  cd "$srcdir/$_svnmod"

  make PREFIX="/usr" DESTDIR="$pkgdir/" install
  msg2 "Packaging license..."
  install -Dm644 COPYING "$pkgdir/usr/share/licenses/$pkgname/COPYING"
}

# vim:set ts=2 sw=2 et:
