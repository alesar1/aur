# Maintainer: mark.blakeney at bullet-systems dot net
pkgname=docker-machine-add-ssh
pkgver=1.5
pkgrel=2
pkgdesc="Adds docker-machine ssh configuration to your personal ssh
configuration"
url="https://github.com/bulletmark/$pkgname"
license=("GPL3")
arch=("any")
depends=("python>=3.6")
makedepends=("python-pip" "python-wheel")
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
sha1sums=('a14adec38ddfbf72656eab2651da99f2191ef91e')

package() {
  cd "$srcdir/$pkgname-$pkgver"

  PIP_CONFIG_FILE=/dev/null pip install \
    --root="$pkgdir" \
    --isolated \
    --ignore-installed \
    --no-deps \
    --disable-pip-version-check \
    --no-python-version-warning \
    --no-warn-script-location \
    --no-cache-dir \
    --no-compile \
    .

  local pdir=$(python -c "import site; print(site.getsitepackages()[0])")
  local _pkgname=${pkgname//-/_}
  cd "$pkgdir/$pdir"
  rm -f $_pkgname-*.dist-info/direct_url.json
  python -O -m compileall -q .
}

# vim:set ts=2 sw=2 et:
