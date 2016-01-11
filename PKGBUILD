# Maintainer: Jiachen Yang <farseerfc@gmail.com>
# Contributor: Llumex03
# Maintainer in Chakra: gnastyle
# Contributor in Chakra: FranzMari from Chakra
# Contributor in Chakra: danyf90 <daniele.formihelli@gmail.com>
# Contributor in Chakra: totoloco <totoloco@gmx.com>

pkgname=cutegram-git
pkgver=2.7.0.stable.r19.g7e05390
pkgrel=2
pkgdesc="Telegram client by Aseman Land"
arch=('i686' 'x86_64')
url="http://aseman.co/cutegram"
license=('GPL')
depends=('qt5-base' 'qt5-declarative' 'qt5-multimedia' 'qt5-quick1'
         'qt5-webkit>=5.5' 'qt5-imageformats' 'qt5-graphicaleffects'
         'qt5-quickcontrols' 'telegramqml>=0.9')
optdepends=('gst-plugins-good: for audio and notification support'
            'gst-plugins-bad: for audio support')
makedepends=('git')
source=("${pkgname}"::"git+https://github.com/Aseman-Land/Cutegram.git"
        "asemantools"::"git+https://github.com/Aseman-Land/aseman-qt-tools.git")
md5sums=('SKIP' 'SKIP')

pkgver() {
  cd "${srcdir}/${pkgname}"
  ( set -o pipefail
    git describe --long --tags 2>/dev/null | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

prepare() {
  cd "${srcdir}/${pkgname}"
  git submodule init
  git config submodule.asemantools.url $srcdir/asemantools
  git submodule update
  mkdir -p build 
}

build() {
  cd "${srcdir}/${pkgname}/build"
  qmake-qt5 -r .. PREFIX=/usr
  make
}

package() {
  cd "${srcdir}/${pkgname}/build"
  make INSTALL_ROOT="${pkgdir}" install
}
