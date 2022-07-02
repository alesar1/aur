# Maintainer: BrainDamage

pkgname=python-untangle
pkgver=1.2.0
pkgrel=1
pkgdesc="Converts XML to a Python object"
arch=('any')
url="https://github.com/stchris/untangle"
license=('MIT')
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/${pkgver}.tar.gz")
sha256sums=('cd3c6d544a19c1207c6213021578d6c35fac57973e9ddf1d19165d17b284c7d9')


# template start; name=tarball; version=1;
_dirname="${pkgname}-${pkgver}"
_basename="${pkgname}"
# template end;
# template start; name=python; version=1;
depends+=('python')
makedepends+=('python-setuptools')
# strip the python- prefix from names if present
_dirname="${_dirname#python-}"
_basename="${_basename#python-}"

build() {
  cd "${srcdir}/${_dirname}"
  python setup.py build
}

package() {
  cd "${srcdir}/${_dirname}"
  python setup.py install --optimize=1 --skip-build --root="${pkgdir}/" --prefix="/usr"
	# not necessary for every package, but for those who it is, it'd generate conflict with others otherwise
  rm -rf "${pkgdir}/$(python -c 'import site; print(site.getsitepackages()[0])')/tests/"
}
# template end;
