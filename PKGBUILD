# Maintainer: Moritz Schoenherr <moritz.schoenherr[at]gmail[dot]com>
pkgname=crawl
pkgver=0.23.2
pkgrel=1
pkgdesc="Crawl stonesoup, curses version"
url="http://crawl.develz.org/"
arch=('i686' 'x86_64')
license=('GPL2')
depends=('lua51' 'sqlite' 'zlib' 'python-pyaml')
makedepends=('git')
conflicts=()
replaces=()
backup=()
source=("https://github.com/crawl/$pkgname/archive/$pkgver.tar.gz")
md5sums=('dbe75310b7a24bd09a18c28d67dc118f')

prepare() {

  cd "${srcdir}/${pkgname}-${pkgver}/crawl-ref/source"
	
  echo $pkgver > util/release_ver

}

build() {

  cd "${srcdir}/${pkgname}-${pkgver}/crawl-ref/source"
  make \
  prefix=/usr \
  bin_prefix=bin \
  DESTDIR=$pkgdir \
  SAVEDIR='~/.crawl' \
  LUA_PACKAGE=lua51

}

package() {

  cd "${srcdir}/${pkgname}-${pkgver}/crawl-ref/source"
  make install \
  prefix=/usr \
  bin_prefix=bin \
  DESTDIR=$pkgdir \
  SAVEDIR='~/.crawl' \
  LUA_PACKAGE=lua51

}

