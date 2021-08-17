# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=gnome-shell-extension-mullvad-indicator-git
pkgver=3.r3.g046aa90
pkgrel=2
pkgdesc="GNOME extension to track Mullvad connectivity"
arch=('any')
url="https://github.com/Pobega/gnome-shell-extension-mullvad-indicator"
license=('Apache')
depends=('gnome-shell')
makedepends=('git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=('git+https://github.com/Pobega/gnome-shell-extension-mullvad-indicator.git')
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/${pkgname%-git}"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "$srcdir/${pkgname%-git}"
  make genlocale
  make genschema
  make zip
}

package() {
  _uuid='mullvadindicator@pobega.github.com'

  cd "$srcdir/${pkgname%-git}"
  install -d "$pkgdir/usr/share/gnome-shell/extensions/$_uuid"
  bsdtar -xvf $_uuid.zip -C "$pkgdir/usr/share/gnome-shell/extensions/$_uuid"

  install -d "$pkgdir/usr/share/glib-2.0/schemas"
  ln -s "/usr/share/gnome-shell/extensions/$_uuid/schemas/org.gnome.Shell.Extensions.MullvadIndicator.gschema.xml" \
    "$pkgdir/usr/share/glib-2.0/schemas"
}
