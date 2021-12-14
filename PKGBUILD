# Maintainer: Carlos Aznarán <caznaranl@uni.pe>
_base=colorio
pkgname=python-${_base}
pkgdesc="Tools for color research"
pkgver=0.10.0
pkgrel=1
arch=('x86_64')
url="https://github.com/nschloe/${_base}"
license=('GPL3')
depends=('python-matplotlib' 'python-npx')
makedepends=('python-setuptools')
# checkdepends=('python-pytest-codeblocks' 'python-perfplot' 'gmsh' 'python-colorspacious' 'python-colour-science' 'python-pyvista' 'python-optimesh')
optdepends=('python-meshio: for creation mesh'
  'python-meshzoo: for creation triangle and cube mesh'
  'python-optimesh: for triangular mesh optimization'
  'python-pygmsh: for xy gamut mesh support'
  'python-pyvista: for creation unstructured grid and plotter'
  'python-scipy: for curve fit support'
  'vtk: for create VTK hexahedron support')
source=(https://pypi.org/packages/source/${_base::1}/${_base}/${_base}-${pkgver}.tar.gz)
sha512sums=('f95271b5fa91b28d7346b919a6243f2daefc9a2182f44fe27cc57ca608b2e56b5640f8eee16abb9768df3387ec15552100dca39dc7e83e7064512b0d61c73126')

build() {
  cd "${_base}-${pkgver}"
  python -c "from setuptools import setup; setup();" build
}

# check() {
#   cd "${_base}-${pkgver}"
#   python -c "from setuptools import setup; setup();" install --root="${PWD}/tmp_install" --optimize=1 --skip-build
#   MPLBACKEND=Agg PYTHONPATH="${PWD}/tmp_install$(python -c "import site; print(site.getsitepackages()[0])"):/usr/share/gmsh/api/python:${PYTHONPATH}" python -m pytest --codeblocks
# }

package() {
  cd "${_base}-${pkgver}"
  export PYTHONHASHSEED=0
  PYTHONPYCACHEPREFIX="${PWD}/.cache/cpython/" python -c "from setuptools import setup; setup();" install --prefix=/usr --root="$pkgdir" --optimize=1 --skip-build
  install -Dm 644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
