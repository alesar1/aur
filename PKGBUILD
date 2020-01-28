# Maintainer: Christopher Arndt <aur at chrisarndt dot de>
# Contributor: Simon Conseil <contact+aur at saimon dot org>
# Contributor: Jesus Alvarez

_name=radon
pkgname="python-${_name}"
pkgver=4.1.0
pkgrel=1
pkgdesc="A tool that computes various metrics for Python source code"
arch=('any')
url="https://${_name}.readthedocs.org/"
license=('MIT')
depends=('python-flake8-polyfill' 'python-future' 'python-mando' 'python-colorama')
makedepends=('python-sphinx')
source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz")
sha256sums=('56082c52206db45027d4a73612e1b21663c4cc2be3760fee769d966fd7efdd6d')


build() {
  cd "${srcdir}/${_name}-${pkgver}"
  sed -i -e "s/mando[^']*/mando/" -e "s/colorama[^']*/colorama/" setup.py
  python setup.py build
  cd docs
  make html
}

package() {
  cd "${srcdir}/${_name}-${pkgver}"
  python setup.py install --root="$pkgdir" --skip-build --optimize=1

  install -d "${pkgdir}/usr/share/doc/${pkgname}"
  cp -r docs/_build/html/* "${pkgdir}/usr/share/doc/${pkgname}"

  # license
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:
