# Maintaner: Francesco Masala <mail@francescomasala.me>
# Contributor:  Francesco Masala <mail@francescomasala.me>

pkgname=bottles
pkgver=2021.8.28
pkgrel=1
pkgdesc='Easily manage wine and proton prefix'
arch=('x86_64')
url="https://github.com/bottlesdevs/Bottles"
license=('GPL3')
depends=(
  'hicolor-icon-theme' 
  'dconf' 
  'python' 
  'libhandy' 
  'gtk3' 
  'patool' 
  'p7zip' 
  'python-gobject' 
  'python-requests' 
  'python-yaml' 
  'wine' 
  'cabextract')
optdepends=(
  'gvfs' 
  'vkd3d' 
  'lib32-vkd3d' 
  'lib32-vulkan-icd-loader' 
  'vulkan-icd-loader'
  'gamemode')
makedepends=('meson' 'ninja')
source=("${pkgname}-${pkgver}-treviso-1.tar.gz::https://github.com/bottlesdevs/Bottles/archive/${pkgver}-treviso-1.tar.gz")
sha256sums=('2671ee07a32cc801937c055b73b5c1c8ac26eb6be99649e9c27454ce974f7e53')

build() {
  cd "Bottles-${pkgver}-treviso"
  meson --prefix='/usr' build
  ninja -C build
}

package() {
  cd "Bottles-${pkgver}-treviso"
  DESTDIR="${pkgdir}" ninja -C build install
}
