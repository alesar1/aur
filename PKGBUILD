# Maintainer: Carlos Aznarán <caznaranl@uni.pe>
# Maintainer: graysky <graysky AT archlinux DOT us>
_base=matplotx
pkgname=python-${_base}
pkgdesc="Useful styles and extensions for Matplotlib"
pkgver=0.3.6
pkgrel=1
arch=(any)
url="https://github.com/nschloe/${_base}"
license=(MIT)
depends=(python-matplotlib)
makedepends=(python-build python-flit-core python-install)
checkdepends=(python-pytest-codeblocks python-imageio python-networkx python-pypng python-meshzoo python-scikit-fem)
optdepends=('python-networkx: for creation of graphs'
  'python-pypng: for iterator support')
source=(https://pypi.org/packages/source/${_base::1}/${_base}/${_base}-${pkgver}.tar.gz)
sha512sums=('3ae45f52e448ae7df702b3d1611e72845766a34b7a74578ee0ad6339eedc37f0dd021a2a23ecb17c362aa8c1df187125c9d86281e49974aa9c7be497ff602f52')

build() {
  cd ${_base}-${pkgver}
  export PYTHONHASHSEED=0
  python -m build --wheel --skip-dependency-check --no-isolation
}

check() {
  cd ${_base}-${pkgver}
  python -m venv --system-site-packages test-env
  test-env/bin/python -m install --optimize=1 dist/*.whl
  MPLBACKEND=Agg test-env/bin/python -m pytest --codeblocks -k 'not README'
}

package() {
  cd ${_base}-${pkgver}
  PYTHONPYCACHEPREFIX="${PWD}/.cache/cpython/" python -m install --optimize=1 --destdir="${pkgdir}" dist/*.whl

  # https://github.com/FFY00/python-install/pull/6
  chmod +x ${pkgdir}/usr/bin/*

  # Symlink license file
  local site_packages=$(python -c "import site; print(site.getsitepackages()[0])")
  install -d "${pkgdir}/usr/share/licenses/${pkgname}"
  ln -s "${site_packages}/${_base}-$pkgver.dist-info/LICENSE" \
    "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
