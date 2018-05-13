# Maintainer: Adria Arrufat <adria.arrufat+AUR AT protonmail DOT ch>
# Contributor: Jaroslav Lichtblau <svetlemodry@archlinux.org>
# Contributor: Alois Nespor <alois.nespor@gmail.com>

pkgname=kid3-cli
pkgver=3.6.1
pkgrel=2
pkgdesc="An MP3, Ogg/Vorbis and FLAC tag editor, CLI version"
arch=(i686 x86_64)
url="http://kid3.sourceforge.net/"
license=(GPL)
depends=(chromaprint id3lib taglib libmp4v2 qt5-multimedia)
makedepends=(ninja chromaprint id3lib taglib libmp4v2 qt5-tools
             hicolor-icon-theme docbook-xsl extra-cmake-modules python)
conflicts=(kid3-kde kid3-qt)
provides=(kid3)
source=(http://downloads.sourceforge.net/${pkgname/-cli/}/${pkgname/-cli/}-$pkgver.tar.gz)
sha256sums=('4644b2955265920d78c0d689545603a59e5020e98319be74c5b141f5a46976ad')

prepare() {
  [ -d ${srcdir}/build ] && rm -rf build
  mkdir -p ${srcdir}/build
  cd "${srcdir}"/build
  cmake -GNinja \
    ../${pkgname/-cli/}-${pkgver} \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release \
    -DWITH_APPS="CLI" \
    -DWITH_QML=OFF \
    -DWITH_MP4V2=ON \
    -DWITH_FFMPEG=ON \
    -DWITH_GSTREAMER=OFF \
    -DWITH_QT4=OFF \
    -DWITH_PHONON=OFF
}

build() {
  ninja -C build
}

package() {
  DESTDIR="${pkgdir}" ninja -C build install
}
