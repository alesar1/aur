# Maintainer: Benjamin Klettbach <b.klettbach@gmail.com>

pkgname=obs-studio
pkgver=0.13.0
pkgrel=1
pkgdesc="Free and open source software for video recording and live streaming."
arch=('i686' 'x86_64')
url="https://github.com/jp9000/obs-studio"
license=('GPL2')
depends=('ffmpeg' 'jansson' 'libxinerama' 'libxkbcommon-x11' 'qt5-x11extras')
makedepends=('cmake' 'libfdk-aac' 'libxcomposite' 'x264')
optdepends=('libfdk-aac: FDK AAC codec support'
            'libxcomposite: XComposite capture support')
provides=('obs-studio')
conflicts=('obs-studio-git')
source=("https://github.com/jp9000/obs-studio/archive/$pkgver.tar.gz")
sha256sums=('ff47a168b5d00d7a739be703afa92f4e535ce677da95211752444a8e99f365e6')

build() {
  cd "obs-studio-$pkgver"
  mkdir -p "build"
  cd "build"
  cmake -DCMAKE_INSTALL_PREFIX="/usr" -DOBS_VERSION_OVERRIDE="$pkgver-$pkgrel" ..
  make
}

package() {
  cd "obs-studio-$pkgver/build"
  make install DESTDIR="$pkgdir"
}

