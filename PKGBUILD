# Maintainer: m4sk1n <m4sk1n@vivaldi.net>
# Author: Steffen Weber <-boenki-gmx-de->

pkgname=otter-browser-weekly
pkgver=0.9.91.dev184
_filename=0.9.91-dev184
_foldername=weekly184
_productname=otter-browser
pkgrel=1

pkgdesc="Browser aiming to recreate the best aspects of the classic Opera (12.x) UI using Qt5 - weekly."
arch=('i686' 'x86_64')
url="http://otter-browser.org"
license=('GPL3')
depends=( 'qt5-script>=5.4' 'qt5-webkit' 'qt5-multimedia>=5.4' 'qt5-xmlpatterns>=5.4')
makedepends=('cmake' 'qt5-declarative>=5.4')
optdepends=('hunspell>=1.3.0: for spell checking'
            'qt5-webengine: for experimental backend using the Chromium browser project')
conflicts=('otter-browser-git' 'otter-browser')
source=("${_productname}-$pkgver.tar.bz2::http://netcologne.dl.sourceforge.net/project/${_productname}/${_productname}-${_foldername}/${_productname}-${_filename}.tar.bz2")
md5sums=('da6268926acc94e49fca3220ea909ef8')


build() {
  cd ${_productname}-${_filename}
  lrelease resources/translations/*.ts
  cmake -DCMAKE_INSTALL_PREFIX="/usr"
  make
}

package() {
  cd ${_productname}-${_filename}
  make DESTDIR=$pkgdir install
}
