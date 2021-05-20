# Maintainer: Hans-Nikolai Viessmann <hans AT viess.mn>

pkgname=xmrig-cuda
pkgver=6.12.0
pkgrel=2
pkgdesc='NVIDIA CUDA plugin for XMRig miner.'
arch=('x86_64')
url='https://github.com/xmrig/xmrig-cuda'
depends=('xmrig>=5.11.0' 'cuda>=11.1.0-1')
optdepends=('monero: wallet')
# We unfortunately need to be hard on which version of CUDA we use
makedepends=('cmake' 'openssl' 'cuda>=11.1.0-1')
license=('GPL')
source=("${url}/archive/v${pkgver}.tar.gz")
sha256sums=('992e780c3022388d52ae9c63d2d154ed5f84066ed3254e5e5335bbb5dfe9fe5a')

prepare() {
  cd "${pkgname}-${pkgver}"

  # create build dir
  [ -d build ] || mkdir build
}

build() {
  cd "${pkgname}-${pkgver}/build"

  cmake -DCMAKE_C_COMPILER=/opt/cuda/bin/gcc -DCMAKE_CXX_COMPILER=/opt/cuda/bin/g++ ..
  make
}

package() {
  cd "${pkgname}-${pkgver}"
  install -Dm644 "build/libxmrig-cuda.so" "${pkgdir}/usr/lib/libxmrig-cuda.so"
  install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
}
