# Maintainer:  twa022 <twa022 at gmail dot com>
# Contributor: D. Can Celasun <dcelasun[at]gmail[dot]com>
# Contributor: Dmitry Batenkov <dima dot batenkov at gmail dot com>

pkgbase=thunarx-python
pkgname=('python2-thunarx' 'python-thunarx')
epoch=1
pkgver=0.5.1
pkgrel=1
pkgdesc="Thunarx Python Bindings"
arch=('i686' 'x86_64')
url='http://goodies.xfce.org/projects/bindings/thunarx-python'
makedepends=('thunar>=1.7.0' 'python2-gobject' 'python-gobject')
license=('GPL')
sha256sums=('721fd6c305354d904d601be106ead60605a9d611b3a68965ed7b51d0216b1339')
source=("https://archive.xfce.org/src/bindings/${pkgbase}/${pkgver%.*}/${pkgbase}-${pkgver}.tar.bz2")

prepare() {
  [ -d "${pkgbase}-${pkgver}"-py2 ] && rm -fr "${pkgbase}-${pkgver}"-py2
  cp -r "${pkgbase}-${pkgver}" "${pkgbase}-${pkgver}"-py2
}

build() {
  cd "${srcdir}/${pkgbase}-${pkgver}"
  PYTHON=python ./configure --prefix=/usr
  make

  cd "${srcdir}/${pkgbase}-${pkgver}"-py2
  PYTHON=python2 ./configure --prefix=/usr
  make
}

package_python2-thunarx() {
  pkgdesc="${pkgdesc/Python/Python 2}"
  depends=('thunar>=1.7.0' 'python2-gobject')
  provides=("${pkgbase}=${pkgver}")
  conflicts=("${pkgbase}")
  replaces=("${pkgbase}")

  cd "${pkgbase}-${pkgver}"-py2
  make DESTDIR="${pkgdir}" install
}

package_python-thunarx() {
  depends=('thunar>=1.7.0' 'python-gobject')
  provides=("${pkgbase}=${pkgver}")
  conflicts=("${pkgbase}")

  cd "${pkgbase}-${pkgver}"
  make DESTDIR="${pkgdir}" install
}

