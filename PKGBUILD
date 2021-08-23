# Maintainer: Mohammadreza Abdollahzadeh <morealaz at gmail dot com>
# Co-Maintainer: AliReza AmirSamimi <alireza.amirsamimi at gmail dot com>

pkgname='persepolis-git'
pkgver=3.2.0.r90.g45b922e
pkgrel=1
pkgdesc="Qt front-end for aria2 download manager (Github version)."
arch=('any')
url="https://persepolisdm.github.io/"
license=('GPL3')
depends=('aria2' 'ffmpeg' 'libnotify' 'libpulse' 'pyside6' 'python-psutil' 'python-requests' 'python-setproctitle' 'qt6-svg' 'sound-theme-freedesktop' 'youtube-dl' )
makedepends=('git' 'python-setuptools')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("${pkgname%-git}::git+https://github.com/persepolisdm/persepolis.git")
sha256sums=('SKIP')

pkgver() {
    cd ${pkgname%-git}
    git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd ${pkgname%-git}
    python setup.py build
}

package() {
    cd ${pkgname%-git}
    python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
# vim:set ts=4 sw=4:
