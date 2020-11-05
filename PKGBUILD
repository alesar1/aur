# Maintainer: Jiachen Yang <farseerfc@gmail.com>
# Maintainer: Ariel AxionL <axiionl@aosc.io>

pkgname=netease-musicbox
_gitname=musicbox
_pyname=NetEase-MusicBox
pkgver=0.3.0
pkgrel=1
pkgdesc="A sexy command line interface musicbox for NetEase based on Python"
arch=(any)
url="https://github.com/darknessomi/musicbox"
depends=('mpg123' 'python-pycryptodomex' 'python-requests' 'python-future' 
         'python-fuzzywuzzy' 'python-requests-cache' 'python-levenshtein')
makedepends=('python-setuptools' 'python-poetry')
optdepends=('aria2: music caching'
            'libnotify: notifications'
            'qt5-base: lyrics support'
            'python-pyqt5: lyrics support'
            'python-dbus: lyrics support')
provides=('musicbox')
conflicts=('netease-musicbox-git')
license=('MIT')

source=("musicbox-$pkgver.tar.gz::https://github.com/darknessomi/musicbox/archive/${pkgver}.tar.gz"
        "LICENSE::https://raw.githubusercontent.com/darknessomi/musicbox/master/LICENSE"
        "0001-Replace_pyqt4_to_pyqt5_as_depends.patch")

sha256sums=('fc9a6e2947d491b08123ef6b826772c9d6539ce6aaa984e5f737264344edfd42'
            '40aaf7aea7939284b07c487929472fa9cc5a842ff5f0c1e474ac93e6de7aa64e'
            'b7e69d2fe2886ed9e66769e759add027a527089cf2770f8b7377a806e9079a03')

prepare() {
    cd "${srcdir}/musicbox-${pkgver}"
    patch -Np1 -i "${srcdir}/0001-Replace_pyqt4_to_pyqt5_as_depends.patch"
}

build() {
    cd "${srcdir}/musicbox-${pkgver}"
    poetry build -f sdist
    tar xvf "./dist/${_pyname}-${pkgver}.tar.gz"
}

package() {
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

    cd "${srcdir}/musicbox-${pkgver}"/${_pyname}-${pkgver}
    python setup.py install --root="${pkgdir}/" --optimize=1
}
# vim:set ts=4 sw=4 et:
