# Contributor: David Runge <dave@sleepmap.de>
# Contributor: Arnaud Taffanel <dev@taffanel.org>
# Contributor: Victor Häggqvist <aur a snilius d com>

pkgname=solaar-git
pkgver=1.0.4.r57.g69f889e
pkgrel=1
pkgdesc="Device manager for Logitech's Unifying receiver peripherals"
url="https://pwr-solaar.github.io/Solaar/"
license=('GPL2')
arch=('any')
provides=("solaar")
conflicts=("solaar")
depends=(
  'gtk3'
  'libnotify'
  'python-dbus'
  'python-gobject'
  'python-pyudev'
  'python-yaml'
  'python-xlib'
  'python-psutil'
)
optdepends=('libappindicator-gtk3: tray icon support')
makedepends=('git')
source=("${pkgname}::git+https://github.com/pwr-Solaar/Solaar.git")
sha512sums=('SKIP')

pkgver() {
  cd "${pkgname}"
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "${pkgname}"
  python setup.py build
}

package() {
  cd "${pkgname}"
  python setup.py install --skip-build \
    --optimize=1 \
    --prefix=/usr \
    --root="${pkgdir}/"
  # udev
  install -vDm 644 rules.d/42-logitech-unify-permissions.rules \
    "${pkgdir}/usr/lib/udev/rules.d/42-logitech-unify-permissions.rules"
  # docs
  install -vDm 644 {ChangeLog,README.md} \
    -t "${pkgdir}/usr/share/doc/${pkgname}/"
}
# vim:set ts=2 sw=2 et:
