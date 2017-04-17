# Maintainer : Frederic Bezies <fredbezies at gmail dot com> 

# This PKGBUILD is based on work stone-soup-tiles stable PKGBUILD
# For curious players only ;)

pkgname=stone-soup-tiles-git
_pkgname=crawl
pkgver=0.20.a0.r1018.ge435b50518
pkgrel=2
pkgdesc="Community maintained variant of Linley's Dungeon Crawl (tiles) - git version"
arch=('i686' 'x86_64')
url="http://crawl.develz.org"
depends=(lua libpng libx11 ncurses sdl2_image)
makedepends=(pngcrush git)
license=('GPL2')
conflicts=('crawl' 'stone-soup-tiles')
source=(git://github.com/crawl/crawl.git
stone-soup-tiles-git.desktop)
sha1sums=('SKIP'
          'e0f7ff16e55f7f038d2d3c7641d8c90195b2ce20')

prepare() {
	cd "${srcdir}/${_pkgname}"
  	git submodule update --init
}

pkgver() {
  cd "${srcdir}/${_pkgname}"
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "${srcdir}/${_pkgname}/crawl-ref/source"
  make prefix="${pkgdir}/usr" TILES=y SAVEDIR='~/.stone-soup'
}

package() {
  cd "${srcdir}/${_pkgname}/crawl-ref/source"
  make install prefix="${pkgdir}/usr" TILES=y SAVEDIR='~/.stone-soup'
  mkdir -p $pkgdir/usr/share/applications
  mkdir -p $pkgdir/usr/share/pixmaps
  cp ${srcdir}/${_pkgname}/crawl-ref/source/dat/tiles/stone_soup_icon-32x32.png $pkgdir/usr/share/pixmaps/$pkgname.png
  cp $srcdir/$pkgname.desktop $pkgdir/usr/share/applications/
 
}


