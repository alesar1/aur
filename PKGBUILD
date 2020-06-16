# Maintainer: Batuhan Baserdem <lastname dot firstname at gmail>
# AUR dependencies;
# maestral          (vcs or release, maintained by coxackie & me)
# python-bugsnag    (vcs, maintained by me)
# python-markdown2
pkgname=maestral-qt
pkgver=1.0.0
pkgrel=2
pkgdesc='A Qt interface for the Maestral daemon'
arch=('any')
url="https://github.com/SamSchott/${pkgname}"
license=('MIT')
source=("${url}/archive/v${pkgver}.tar.gz")
makedepends=('python' 'python-setuptools')
depends=(
    'maestral>=1.1.0'
    'python>=3.6'
    'python-bugsnag>=3.4.0'
    'python-click>=7.1.1'
    'python-markdown2'
    'python-packaging'
    'python-pyqt5>=5.9')
optdepends=('gnome-shell-extension-appindicator: Gnome integration')
md5sums=('cd94c7b0f02d47ba342ecdd529ee7c66')

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    python setup.py build
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    # Run python setup function
    python setup.py install --root="${pkgdir}/" --optimize=1 --skip-build
    # Install the licence
    install -Dm644 "${srcdir}/${pkgname}-${pkgver}/LICENSE.txt" \
        "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
