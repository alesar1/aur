# Maintainer: acxz <akashpatel2008 at yahoo dot com>
pkgname=atmi
pkgver=3.10.0
pkgrel=1
pkgdesc='Task graph framework for heterogeneous CPU-GPU systems.'
arch=('x86_64')
url="https://github.com/RadeonOpenCompute/atmi"
license=('MIT')
depends=('hsa-rocr' 'comgr')
makedepends=('cmake' 'rsync')
source=("$pkgname-$pkgver.tar.gz::https://github.com/RadeonOpenCompute/atmi/archive/rocm-$pkgver.tar.gz")
sha256sums=('387e87c622ec334d3ba7a2f4f015ea9a219712722f4c56c1ef572203d0d072ea')
_dirname="$(basename "$url")-$(basename "${source[0]}" .tar.gz)"

build() {
  cmake -B build -Wno-dev \
        -DCMAKE_INSTALL_PREFIX=/opt/rocm/atmi \
        -DROCM_VERSION="$pkgver" \
        "$_dirname/src"
  make -C build
}

package() {
  DESTDIR="$pkgdir" make -C build install

  install -Dm644 "$_dirname/LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
