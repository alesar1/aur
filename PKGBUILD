# Maintainer: Maxim Andersson <thesilentboatman@gmail.com>

pkgname=gnome-shell-extension-dynamic-top-bar
pkgver=3.2.2
pkgrel=1
pkgdesc="Extension that make the top bar transparent when no window is maximized"
arch=('any')
url="https://github.com/AMDG2/GnomeShell_DynamicTopBar"
license=('GPL3')
depends=('gnome-shell')
install=${pkgname}.install
source=("https://github.com/AMDG2/GnomeShell_DynamicTopBar/archive/${pkgver}.tar.gz")
sha256sums=('768bead77b311066c514c1599a3b917650e7f60407fcc2ef1a46049d72138e25')

package() {
  _uuid='dynamicTopBar@gnomeshell.feildel.fr'

  install -d "${pkgdir}/usr/share/gnome-shell/extensions"
  install -d "${pkgdir}/usr/share/glib-2.0/schemas/"

  cd "${srcdir}/GnomeShell_DynamicTopBar-${pkgver}"
  mv "${_uuid}/schemas/org.gnome.shell.extensions.dynamic-top-bar.gschema.xml" \
    "${pkgdir}/usr/share/glib-2.0/schemas/"
  cp -af "${_uuid}" "${pkgdir}/usr/share/gnome-shell/extensions/"

}

# vim:set ts=2 sw=2 et:
