# Maintainer: Klaus Alexander Seistrup <klaus@seistrup.dk>
# -*- sh -*-

pkgname='python-pagegen'
_pkgname="${pkgname#python-}"
pkgver=3.1.0
pkgrel=1
pkgdesc='Python static site generator with reStructuredText markup'
arch=('any')
license=('GPL')
url='http://pagegen.phnd.net/'
wheel="${_pkgname}-$pkgver-py3-none-any.whl"
source=(
  "https://files.pythonhosted.org/packages/py3/${_pkgname::1}/$_pkgname/$wheel"
)
depends=(
  'python-docutils'
  'python-lxml'
  'python-rcssmin'
  'python-htmlmin'
  'python-jsmin'
)
makedepends=(
  'python-pip'
)
sha256sums=(
  '23421103f92589cef029fe550a8c948f14e83093e44bd6ddb2b4f7457814302c'
)
sha512sums=(
  '2c98bd3d6d91333a94f875a6f9805f8a19ff1b9a438e42096e7a6b25e388fced8e70eb6316237f2655a1a88401734b74468ef5d42c7929c3c7dd4b645b770f3c'
)
b2sums=(
  '756dcdef8dc62cd58c904b3a634f36fdd6981e39921b178651a5141c67fed60724ceab13374227996de2fc01e0ff17309c113dafc845aa9b9943b71296743751'
)

package() {
  umask 0022
  pip install \
    --force-reinstall \
    --ignore-installed \
    --no-warn-script-location \
    --no-deps \
    --compile \
    --root="$pkgdir" \
    --prefix='/usr' \
      "$srcdir/$wheel"
}

# eof
