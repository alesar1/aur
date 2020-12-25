# Maintainer: Christian Schendel <doppelhelix at gmail dot com>
pkgname=gnome-shell-extension-applications-overview-tooltip-git
pkgver=10.r2.g2e81270
pkgrel=7
pkgdesc="Shows a tooltip over applications icons on applications overview"
arch=(any)
url="https://github.com/RaphaelRochet/applications-overview-tooltip"
install=${pkgname%-git}.install
license=('unknown')
depends=('gnome-shell>=3.38')
makedepends=('git' 'glib2')
conflicts=("${pkgname%-git}")
provides=(${pkgname%-git})
source=("${pkgname%-git}::git+https://github.com/RaphaelRochet/applications-overview-tooltip.git")
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/${pkgname%-git}"
  git describe --long --tags | sed -E 's/^v//;s/([^-]*-g)/r\1/;s/-/./g'
}

package() {
  _uuid="applications-overview-tooltip@RaphaelRochet"
  cd "${srcdir}"
  chmod -R 644 ./*
  install -d "${pkgdir}/usr/share/gnome-shell/extensions/"
  mv ${pkgname%-git} ${_uuid}
  cp -r "${_uuid}" "${pkgdir}/usr/share/gnome-shell/extensions/"
  #rebuild compiled schemas if missing
  if [[ ! -f "${pkgdir}/usr/share/gnome-shell/extensions/${_uuid}/schemas/gschemas.compiled" ]]; then
    glib-compile-schemas ${pkgdir}/usr/share/gnome-shell/extensions/${_uuid}/schemas
  fi
  chmod -R 755 "${pkgdir}/usr/share/gnome-shell/extensions/${_uuid}/"
}
