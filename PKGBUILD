# Maintainer: Michael Herzberg <{firstname}@{firstinitial}{lastname}.de>
# Contributor: SoftwareRat <jaguar5018@gmail.com>

pkgname=moonlight-qt-git
pkgver=r1636.71a6ef6
pkgrel=1
pkgdesc='GameStream client for PCs (Windows, Mac, and Linux) (master branch)'
arch=('x86_64')
license=('GPL')
url='https://moonlight-stream.org'
depends=('qt5-base' 'qt5-quickcontrols2' 'qt5-svg' 'ffmpeg' 'sdl2_ttf' 'discord-rpc-api')
makedepends=('git' 'pkg-config')
optdepends=('libva-intel-driver: hardware acceleration for Intel GPUs')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=($pkgname::"git+https://github.com/moonlight-stream/${pkgname%-git}.git")
md5sums=('SKIP')

pkgver() {
  cd "$pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cd "$pkgname"
  git submodule update --init --recursive
  qmake PREFIX="$pkgdir/usr" "CONFIG+=discord-rpc" moonlight-qt.pro
}

build() {
  cd "$pkgname"
  make
}

package() {
  cd "$pkgname"
  make install
}
