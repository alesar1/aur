# Maintainer: Philipp Wolfer <ph.wolfer@gmail.com>
_pkgname=peek
pkgname=peek-git
pkgver=1.0.1.r64.g5065429
pkgrel=1
pkgdesc="Simple animated GIF screen recorder with an easy to use interface (latest development release)"
arch=('i686' 'x86_64')
url="https://github.com/phw/peek"
license=('GPL3')
provides=("${_pkgname}=${pkgver}")
conflicts=("${_pkgname}")
depends=(gtk3 libkeybinder3 ffmpeg imagemagick)
makedepends=(cmake vala gettext txt2man)
optdepends=(
  'gst-plugins-good: WebM output under Gnome Shell'
  'gst-plugins-ugly: MP4 output under Gnome Shell'
)
source=(git+https://github.com/phw/${_pkgname}.git)
sha1sums=('SKIP')

build() {
  cd "${srcdir}/${_pkgname}"
  cmake -DCMAKE_INSTALL_PREFIX=/usr \
    -DBUILD_TESTS=ON \
    -DGSETTINGS_COMPILE=OFF .
  make
}

check() {
  cd "${srcdir}/${_pkgname}"
  make test
}

package() {
  cd "${srcdir}/${_pkgname}"
  make DESTDIR=${pkgdir} install
}

pkgver() {
  cd "${srcdir}/${_pkgname}"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}
