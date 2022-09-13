# Contributor: Rob McCathie <archaur at rmcc dot com dot au>
# Contributor: Renato Garcia <fgar.renato@gmail.com>
# Contributor: dale <dale@archlinux.org>
# Contributor: Tom Newsom <Jeepster@gmx.co.uk>
# Contributor: Jorge Barroso <jorge.barroso.11 at gmail dot com>
# Maintainer:  Vladimir LAVALLADE<erus.iluvatar+archlinux@gmail.com>

pkgname=pinball
pkgver=0.3.20201218
pkgrel=1
pkgdesc="The Emilia Pinball Project strives to fulfil your needs for a great pinball game in Linux"
arch=('x86_64')
url="http://pinball.sourceforge.net/"
license=('GPL2')
depends=('sdl_mixer' 'sdl_image' 'mesa' 'libtool')
options=('!makeflags' 'libtool')
install=pinball.install
source=("https://github.com/adoptware/pinball/archive/refs/tags/${pkgver}.tar.gz")
sha256sums=('61981c192630f3c99865dc3b3d095df94e97ede9d7df0e8d8601eb39eef54c6d')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  libtoolize -c
  aclocal
  autoheader
  autoconf
  automake --add-missing
  ./configure --prefix=/usr
  sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
}
