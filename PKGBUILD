# Maintainer: tytan652 <tytan652@tytanium.xyz>
_pluginname=spectralizer
pkgname=obs-spectralizer
pkgver=1.3.4
pkgrel=1
pkgdesc="Audio visualization for obs-studio using fftw, based on cli-visualizer"
arch=('x86_64')
url="https://github.com/univrsal/spectralizer"
license=("GPL2")
depends=("obs-studio" "fftw")
makedepends=("cmake")
conflict=('obs-plugin-spectralizer-bin')
source=("$pkgname-$pkgver.tar.gz"::"https://github.com/univrsal/$_pluginname/archive/v$pkgver.tar.gz")
sha256sums=('f257feff9e4da7df9e9c580a99b3c7d6052a641bb5cb1fdabc95c7c0f7db85d6')

build() {
  cd "$_pluginname-$pkgver"
  cmake -B build \
  -DCMAKE_INSTALL_PREFIX='/usr' \
  -DGLOBAL_INSTALLATION=ON
  make -C build
}

package() {
  cd "$_pluginname-$pkgver"
  make -C build DESTDIR="$pkgdir/" install
}
 
