# Maintainer: Chih-Hsuan Yen <yan12125@archlinux.org>

pkgname=python-tf2onnx
pkgver=1.7.1
pkgrel=1
pkgdesc='Convert TensorFlow models to ONNX'
arch=(any)
url='https://github.com/onnx/tensorflow-onnx'
license=(MIT)
depends=(python python-tensorflow python-numpy python-onnx python-requests python-six)
makedepends=(python-setuptools)
checkdepends=(python-pytest python-graphviz python-parameterized python-yaml python-onnxruntime)
source=("https://github.com/onnx/tensorflow-onnx/archive/v$pkgver/tf2onnx-v$pkgver.tar.gz")
sha256sums=('40ce968c0f5c80581f1f920426ad42a3e912154563da81e5c4a45e71aa159667')

build() {
  cd tensorflow-onnx-$pkgver
  python setup.py build
}

check() {
  cd tensorflow-onnx-$pkgver
  # The default opset is 8, in which lots of tests are skipped
  PYTHONPATH="$PWD" TF2ONNX_TEST_OPSET=12 pytest -rs -c /dev/null tests
}

package() {
  cd tensorflow-onnx-$pkgver
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
  install -Dm644 LICENSE -t "$pkgdir"/usr/share/licenses/$pkgname
}
