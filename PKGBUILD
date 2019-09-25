# Maintainer: Andrew Sun <adsun701 at gmail dot com>

_pkgname=lifelines
pkgname=python-lifelines
pkgver=0.22.6
pkgrel=1
pkgdesc="Survival analysis in Python"
url="https://github.com/CamDavidsonPilon/lifelines"
arch=('any')
license=('MIT')
depends=('python-autograd-gamma' 'python-matplotlib' 'python-pandas')
makedepends=('python-setuptools')
options=(!emptydirs)
source=("${_pkgname}-${pkgver}.tar.gz"::"https://github.com/CamDavidsonPilon/lifelines/archive/v${pkgver}.tar.gz")
sha256sums=('ccacd8a316ef8fdcfa7c022d28304d33734b8d24dc709c8c3862b1eca4416aad')

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
