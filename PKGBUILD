# Maintainer: Pete Alexandrou <pete@ozmartians.com>
pkgname=vidcutter
pkgver=5.0.5
pkgrel=2
pkgdesc='A modern, simple to use, constantly evolving and hella fast MEDIA CUTTER + JOINER w/ frame-accurate SmartCut technology + Qt5, libmpv, FFmpeg and MediaInfo powering the backend.'
arch=('i686' 'x86_64')
license=('GPL3')
url="https://vidcutter.ozmartians.com"
source=(https://github.com/ozmartian/${pkgname}/archive/${pkgver}.tar.gz)
changelog=changelog
depends=('python-pyqt5' 'mpv' 'ffmpeg' 'mediainfo')
makedepends=('python-setuptools')
install=${pkgname}.install
provides=('vidcutter')
conflicts=('vidcutter-git')
sha256sums=('7abba5bcf7c07a5554a47d87e3db168138136f9b2acd8896cbf85e794aac270f')

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    python3 setup.py build
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    python3 setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
