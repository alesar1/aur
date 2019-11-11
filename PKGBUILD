# Maintainer: Batuhan Baserdem <lastname dot firstname at gmail>

_name=maestral
_srcname="${_name}-dropbox"

pkgname="${_name}-git"
provides=("${_name}")
conflicts=("${_name}")
pkgver=0.4.3.r5.g36bc4ab
pkgrel=1
pkgdesc='A light-weight and open-source Dropbox client.'
arch=('any')
url="https://github.com/SamSchott/${_srcname}"
license=('MIT')
source=("git+${url}")
makedepends=('git' 'python-setuptools' 'gendesk')
depends=(
    'python-blinker'
    'python-click'
    'python-dropbox'
    'python-keyrings-alt'
    'python-u-msgpack'
    'python-watchdog'
    'python-pyro')
    optdepends=('python-pyqt5: GUI support (runtime)')
md5sums=('SKIP')

prepare() {
    gendesk -q -n \
        --pkgname="${_name}" \
        --exec="${_name} gui" \
        --comment="${pkgdesc}" \
        --categories=Network
}

pkgver() {
    cd "${srcdir}/${_srcname}"
    git describe --long --tags | sed 's|\([^-]*-g\)|r\1|;s|-|.|g;s|^v||g'
}

build() {
    cd "${srcdir}/${_srcname}"
    python setup.py build
}

package() {
    cd "${srcdir}/${_srcname}"
    python setup.py install --root="${pkgdir}/" --optimize=1 --skip-build
    install -Dm644 "${srcdir}/${_name}.desktop" -t "${pkgdir}/usr/share/applications"
    install -Dm644 LICENSE.txt "${pkgdir}/usr/share/licenses/${_name}/LICENSE"
    install -Dm644 "${_name}/gui/resources/maestral.png" "${pkgdir}/usr/share/pixmaps/${_name}.png"
}
