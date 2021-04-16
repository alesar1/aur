# Maintainer: Benoit Pierre <benoit.pierre@gmail.com>

pkgname=plover-git
pkgdesc="Free and open source real-time stenography engine."
pkgver=4.0.0.dev8+434.g60779ea
pkgrel=1
arch=('any')
license=('GPL2')
depends=(
  'python'
  'python-appdirs'
  'python-dbus'
  'python-pyqt5'
  'python-pyserial'
  'python-setuptools'
  'python-wcwidth'
  'python-xlib'
  'qt5-svg'
)
makedepends=(
  'git'
  'python-babel'
  'python-pytest'
)
provides=('plover')
conflicts=('plover')
url="http://www.openstenoproject.org/plover/"
source=($pkgname::git+https://github.com/openstenoproject/plover.git)
sha1sums=(SKIP)

pkgver() {
  cd "$pkgname"
  python setup.py --quiet patch_version
  python setup.py --version
}

prepare() {
  cd "$pkgname"
  # Use the distributions' main entry point, so plugins are isolated.
  sed -i 's/^\(\s*plover = plover.\)main:main$/\1dist_main:main/' setup.cfg
}

build() {
  cd "$pkgname"
  python setup.py build
}

check() {
  cd "$pkgname"
  python setup.py test
}

package() {
  cd "$pkgname"
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
  install -vDm644 -t "${pkgdir}/usr/share/pixmaps" plover/assets/plover.png
  install -vDm644 -t "${pkgdir}/usr/share/applications" linux/plover.desktop
  chmod og+rX -R "$pkgdir"
}

# vim:set sw=2 sts=2 et:
