# Maintainer: tytan652 <tytan652@tytanium.xyz>

_reponame=obs-ptz
pkgname=$_reponame-controls
pkgver=0.10.2
pkgrel=1
pkgdesc="Plugin for OBS Studio to add a PTZ Camera control dock"
arch=("i686" "x86_64" "aarch64")
url="https://obsproject.com/forum/resources/ptz-controls.1284/"
license=("GPL2")
depends=("obs-studio" "qt5-gamepad" "qt5-serialport")
makedepends=("cmake")
source=("$_reponame-$pkgver.tar.gz::https://github.com/glikely/$_reponame/archive/v$pkgver.tar.gz")
sha256sums=("d91a9bca9467ae28450bf54646eb982f539348a4d271d4e18ae12e912dec3ee3")

build() {
  cd "$_reponame-$pkgver"

  cmake -B build \
  -DCMAKE_INSTALL_PREFIX='/usr'

  make -C build
}

package() {
  cd "$_reponame-$pkgver"

  make -C build DESTDIR="$pkgdir/" install
}
