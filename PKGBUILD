# Maintainer: Chih-Hsuan Yen <yan12125@archlinux.org>

pkgname=netron-cli
pkgver=5.9.5
pkgrel=1
pkgdesc='Visualizer for neural network, deep learning, and machine learning models (CLI only)'
url='https://netron.app/'
arch=(any)
license=(MIT)
depends=(python)
makedepends=(python-setuptools python-build python-installer python-wheel)
optdepends=(
  'python-onnx: serializing ONNX models'
  'python-pytorch: serializing PyTorch models'
)
source=(https://github.com/lutzroeder/netron/archive/v$pkgver/netron-$pkgver.tar.gz)
sha256sums=('d58b72c08aa6a14191b9c15b334488509db9a22123c8ff34cc961d88bb703f0c')

prepare() {
  cd netron-$pkgver
  # Use dependencies from Arch
  sed -i '/python -m pip/d' Makefile
  # We don't need node_modules...trick Makefile
  mkdir node_modules
}

build() {
  cd netron-$pkgver
  make build_python
}

package() {
  cd netron-$pkgver
  python -m installer --destdir="$pkgdir" dist/pypi/*.whl
  install -Dm644 LICENSE -t "$pkgdir"/usr/share/licenses/$pkgname
}
