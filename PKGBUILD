# Maintainer: Carlos Aznarán <caznaranl@uni.pe>
# Maintainer: graysky <graysky AT archlinux DOT us>
_base=matplotx
pkgname=python-${_base}
pkgdesc="Useful styles and extensions for Matplotlib"
pkgver=0.3.2
pkgrel=1
arch=('any')
url="https://github.com/nschloe/${_base}"
license=(MIT)
depends=(python-matplotlib)
makedepends=(python-build python-flit-core python-install)
checkdepends=(python-pytest-codeblocks python-networkx python-imageio python-pypng python-meshzoo python-scikit-fem)
optdepends=('python-networkx: for creation of graphs'
  'python-pypng: for iterator support')
source=(https://pypi.org/packages/source/${_base::1}/${_base}/${_base}-${pkgver}.tar.gz)
sha512sums=('fb34db28157bbd975a46960a76b718a7a4d1ee1df5dbfed653f07a9a483ee77f67dae71f835285438501c7f0a475d48c284ead3e911dc1ef1811acc399c01046')

build() {
  cd "${_base}-${pkgver}"
  export PYTHONHASHSEED=0
  python -m build --wheel --skip-dependency-check --no-isolation
}

check() {
  cd "${_base}-${pkgver}"
  python -m venv --system-site-packages test-env
  test-env/bin/python -m install --optimize=1 dist/*.whl
  MPLBACKEND=Agg test-env/bin/python -m pytest --codeblocks -k 'not README'
}

package() {
  cd "${_base}-${pkgver}"
  PYTHONPYCACHEPREFIX="${PWD}/.cache/cpython/" python -m install --optimize=1 --destdir="${pkgdir}" dist/*.whl

  # https://github.com/FFY00/python-install/pull/6
  chmod +x ${pkgdir}/usr/bin/*

  # Symlink license file
  local site_packages=$(python -c "import site; print(site.getsitepackages()[0])")
  install -d "${pkgdir}/usr/share/licenses/${pkgname}"
  ln -s "${site_packages}/${_base}-$pkgver.dist-info/LICENSE" \
    "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
