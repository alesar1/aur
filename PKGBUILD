# Maintainer: Benoit Pierre <benoit.pierre@gmail.com>

pkgname=python-plover_stroke
pkgdesc="Helper class for working with steno strokes."
pkgver=1.0.0
pkgrel=2
arch=('any')
license=('GPL2')
depends=('python')
makedepends=(
  'python-build'
  'python-install'
  'python-pytest'
  'python-setuptools'
  'python-wheel'
)
url="https://github.com/benoit-pierre/plover_stroke"
source=("$pkgname-$pkgver.tar.gz::https://github.com/benoit-pierre/plover_stroke/archive/refs/tags/$pkgver.tar.gz")
sha256sums=(350919399c4d29098b6147d10d175755d75d082e9ecd85fd48af70c4170269b0)

build() {
  cd "plover_stroke-$pkgver"
  pyproject-build --no-isolation --skip-dependency-check --wheel
}

check() {
  cd "plover_stroke-$pkgver"
  PYTHONPATH="$PWD/build/lib.linux-$CARCH-$(python -c 'import sys; print(".".join(map(str, sys.version_info[:2])))')" pytest test
}

package() {
  cd "plover_stroke-$pkgver"
  python -m install --destdir="$pkgdir" --optimize=1 dist/*.whl
  chmod og+rX -R "$pkgdir"
}

# vim:set sw=2 sts=2 et:
