pkgname=cava-gui-git
_pkgname=cava-gui
pkgver=0.2
pkgrel=2
pkgdesc='SDL2 Audio Visualizer for Alsa/Pulseaudio'
arch=('i686' 'x86_64')
url='https://github.com/nikp123/cava-gui'
license=('MIT')
depends=('fftw' 'alsa-lib' 'iniparser' 'sdl2')
makedepends=('git')
source=('git+https://github.com/nikp123/cava-gui.git')
conflicts=($_pkgname)
provides=($_pkgname)
sha1sums=('SKIP')

pkgver() {
  cd $_pkgname
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  chmod +x $_pkgname/autogen.sh
  cd $_pkgname
  ./autogen.sh
  ./configure --prefix=/usr
  make
}

package() {
  cd $_pkgname
  install -Dm755 cava "$pkgdir/usr/bin/$_pkgname"
  install -Dm644 LICENSE "$pkgdir"/usr/share/licenses/$_pkgname/LICENSE
  install -Dm744 example_files/icon.png "$pkgdir/usr/share/$_pkgname/icon.png"
  install -Dm744 example_files/"$_pkgname".desktop "$pkgdir"/usr/share/applications/"$_pkgname".desktop
}
