# Maintainer: Jiachen Yang <farseerfc@gmail.com>
# Contributor: Llumex03
# Maintainer in Chakra: gnastyle
# Contributor in Chakra: FranzMari from Chakra
# Contributor in Chakra: danyf90 <daniele.formihelli@gmail.com>
# Contributor in Chakra: totoloco <totoloco@gmx.com>

pkgname=cutegram-git
pkgver=v2.3.0.stable.r0.ga72f093
pkgrel=1
pkgdesc="Telegram client by Aseman Land"
arch=('i686' 'x86_64')
url="http://aseman.co/cutegram"
license=('GPL')
depends=('qt5-base' 'qt5-declarative' 'qt5-multimedia' 'qt5-quick1'
         'qt5-webengine' 'qt5-imageformats' 'qt5-graphicaleffects' 
         'qt5-quickcontrols' 'libqtelegram-ae-git')
makedepends=('git')
source=("${pkgname}"::"git+https://github.com/Aseman-Land/Cutegram.git")
md5sums=('SKIP')

pkgver() {
  cd "${srcdir}/${pkgname}"
  ( set -o pipefail
    git describe --long --tags 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

prepare() {
  cd "${srcdir}/${pkgname}"
  mkdir -p build 
}

build() {
  cd "${srcdir}/${pkgname}/build"
  qmake-qt5 -r .. PREFIX=/usr DEFINES+=WEBENGINE_ASEMAN_WEBGRABBER
  make
}

package() {
  cd "${srcdir}/${pkgname}/build"
  make INSTALL_ROOT="${pkgdir}" install
}
