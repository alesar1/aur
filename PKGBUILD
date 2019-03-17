# Maintainer: Surefire <surefire at cryptomile dot net>
# Contributor: Llewelyn Trahaearn <WoefulDerelict at GMail dot com>
# Contributor: Dave Kleinschmidt <dave.f.kleinschmidt at gmail dot com>
# Contributor: Frikilinux <frikilinux at gmail dot com>

pkgname=gnome-shell-extension-appindicator-git
pkgver=23.1+0+g03ccc3c
pkgrel=1
epoch=1
pkgdesc="Integrates AppIndicators into GNOME Shell"
arch=('any')
url="https://github.com/ubuntu/gnome-shell-extension-appindicator"
conflicts=(${pkgname%-git})
provides=(${pkgname%-git})
license=('GPL')
makedepends=('git')
depends=('gnome-shell>=3.32')
optdepends=(
  'libappindicator-gtk2: support GTK+2 applications'
  'libappindicator-gtk3: support GTK+3 applications'
  'libappindicator-sharp: support .net applications'
)
source=("${pkgname}::git+${url}.git")
sha512sums=('SKIP')

pkgver() {
  cd "${pkgname}"
  git describe --long --tags | sed 's/^v//; s/-/+/g'
}

package() {
  cd "${pkgname}"
  # Locate the extension.
  local _uuid="$(grep -Po '(?<="uuid": ")[^"]*' metadata.json)"
  local _destdir="$pkgdir/usr/share/gnome-shell/extensions/$_uuid"

  # Copy extension files into place.
  install -d "$_destdir"
  cp --parents -t "$_destdir" metadata.json *.js interfaces-xml/*.xml
}
