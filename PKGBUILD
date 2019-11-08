# Maintainer: Andrew Sun <adsun701 at gmail dot com>

_pkgname=lifelines
pkgname=python-lifelines
pkgver=0.22.10
pkgrel=1
pkgdesc="Survival analysis in Python"
url="https://github.com/CamDavidsonPilon/lifelines"
arch=('any')
license=('MIT')
depends=('python-autograd-gamma' 'python-matplotlib' 'python-pandas')
makedepends=('python-setuptools')
options=(!emptydirs)
source=("${_pkgname}-${pkgver}.tar.gz"::"https://github.com/CamDavidsonPilon/lifelines/archive/v${pkgver}.tar.gz")
sha256sums=('710c799bca593f9a6667cfc747234e01de7bf6798b41310d41a2550d7a28e5cf')

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py build
} 

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py install --prefix=/usr --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  # Move Files
  mkdir -p ${pkgdir}/usr/share/doc/${pkgname}
  _ver=$(python -c "import platform; print(platform.python_version())")
  mv ${pkgdir}/usr/lib/python${_ver%.*}/site-packages/{LICENSE,README.md,MANIFEST.in} ${pkgdir}/usr/share/doc/${pkgname}
}
