# Maintainer: Tuyen Pham <tuyenpm9@gmail.com>
# Contributor: Christopher Arndt <aur -at- chrisarndt -dot- de>
# Contributor: Lex Black <autumn-wind@web.de>
# Contributor: Simon Thorpe <simon@hivetechnology.com.au>
# Contributor: kess <joe@macmahon.eu>
# Contributor: damir <damir@archlinux.org>
# Contributor: Luis Pablo Gasparotto <lpgasparotto(at)gmail(dot)com>

pkgname=abcm2ps
pkgver=8.14.5
pkgrel=1
pkgdesc="Convert ABC music notation files to PostScript from the commandline"
arch=('i686' 'x86_64')
url="http://moinejf.free.fr/"
license=('GPL3')
depends=('pango' 'freetype2')
makedepends=('python-docutils')
conflicts=('abcm2ps-devel')
groups=(abc)
source=(${pkgname}-${pkgver}.tar.gz::https://github.com/leesavide/${pkgname}/archive/v${pkgver}.tar.gz)
sha256sums=('09bc9d6df221521ae4ad70a5721552a6d443ab1df29193c732f45854f88ad7c0')

build() {
  cd "${pkgname}-${pkgver}"
  ./configure --prefix=/usr
  make
}

package() {
  cd "${pkgname}-${pkgver}"
  make prefix="$pkgdir/usr" docdir=$pkgdir/usr/share/doc install
}
