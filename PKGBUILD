# Maintainer: mark.blakeney at bullet-systems dot net
pkgname=edir
pkgver=2.10.1
pkgrel=1
pkgdesc="Program to rename and remove files and directories using your editor"
url="https://github.com/bulletmark/$pkgname"
license=("GPL3")
arch=("any")
depends=("python>=3.5" "python-rich")
makedepends=("python-pip" "python-wheel")
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
sha1sums=('06ea1bbeb550d4ef9594ea51bf604482cf3bacb1')

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
    --progress-bar=off \
    .

  local pdir=$(python -c "import site; print(site.getsitepackages()[0])")
  local _pkgname="${pkgname//-/_}"
  cd "$pkgdir/$pdir"
  rm -f $_pkgname-*.dist-info/direct_url.json
  sed -i "/\/direct_url.json,/d" $_pkgname-*.dist-info/RECORD
  python -O -m compileall -q .
}

# vim:set ts=2 sw=2 et:
