# Maintainer: Gustavo alvarez <sl1pkn07@gmail.com>

pkgname=kaudiocreator-git
pkgver=1.3.r886.f21c160
pkgrel=1
pkgdesc="A program for ripping and encoding Audio-CDs, encoding files from disk. (GIT version)"
arch=('x86_64')
url='https://www.kde.org/applications/multimedia/kaudiocreator'
license=('GPL')
depends=('kdelibs4support'
         'knotifyconfig'
         'kcmutils'
         'libdiscid'
         'libkcddb'
         'libkcompactdisc'
         'taglib'
         'hicolor-icon-theme'
         )
makedepends=('git'
             'extra-cmake-modules'
             'kdoctools'
             'doxygen'
             'python'
             )
conflicts=('kaudiocreator')
provides=('kaudiocreator')
source=('git+https://invent.kde.org/unmaintained/kaudiocreator.git')
sha256sums=('SKIP')

pkgver() {
  cd kaudiocreator
  _ver="$(cat main.cpp | grep -m1 KAudioCreator | cut -d '"' -f6)"
  echo "${_ver}.r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

prepare() {
  mkdir -p build
}

build() {
  cd build
  cmake ../kaudiocreator \
    -DCMAKE_BUILD_TYPE=None \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DBUILD_TESTING=OFF

  make
}

package() {
  make -C build DESTDIR="${pkgdir}" install
}
