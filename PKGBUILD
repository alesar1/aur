# Maintainer: Pete Alexandrou <pete@ozmartians.com>
pkgname=vidcutter
pkgver=3.0.0
pkgrel=1
pkgdesc="the simple & fast video cutter & joiner with the help of mpv + FFmpeg"
arch=('any')
license=('GPL3')
url="http://vidcutter.ozmartians.com"
source=(https://github.com/ozmartian/${pkgname}/archive/${pkgver}.tar.gz)
depends=('python-pyqt5' 'mpv' 'ffmpeg' 'mediainfo')
makedepends=('python-setuptools')
install=${pkgname}.install
provides=('vidcutter')
conflicts=('vidcutter-git')
md5sums=('SKIP')

prepare() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    sed -i "s/pypi/arch/" "${pkgname}/__init__.py"
}

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    python3 setup.py build
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    python3 setup.py install --root="${pkgdir}" --optimize=1 --skip-build

    # -- desktop + icon files currently taken care of as setuptools data_files --
    #
    # install -Dm644 "data/desktop/vidcutter.desktop" "${pkgdir}/usr/share/applications/vidcutter.desktop"
    # install -Dm644 "data/icons/vidcutter.png" "${pkgdir}/usr/share/pixmaps/vidcutter.png"
}
