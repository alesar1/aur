# Maintainer: CrocoDuck <crocoduck dot oducks at gmail dot com>
# Contributor: Haskellfant <moritz.kiefer@purelyfunctional.org

pkgname=zam-plugins-git
pkgver=3.10.r10.g7232969
pkgrel=1
pkgdesc="Collection of LV2/LADSPA/VST audio plugins for high quality processing."
arch=('i686' 'x86_64')
url="https://github.com/zamaudio/zam-plugins"
license=('GPL2')
provides=(${pkgname%-*})
conflicts=(${pkgname%-*} 'zamplugins')
depends=('jack2' 'libglvnd' 'fftw' 'libsamplerate')
makedepends=('git' 'pkg-config' 'libx11' 'libgl' 'liblo' 'jack' 'ladspa')
source=("${pkgname%-*}"::'git://github.com/zamaudio/zam-plugins.git')
md5sums=('SKIP')

pkgver() {
  cd "${pkgname%-*}"
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd "${pkgname%-*}"
  git submodule update --init
}

build() {
  cd "${pkgname%-*}"
  make
}

package() {
  cd "${pkgname%-*}"
  make DESTDIR="$pkgdir/" PREFIX=/usr install
}
