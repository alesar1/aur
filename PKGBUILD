# Maintainer: skrewball <aur at joickle dot com>
# Maintainer: Christian Brassat <christian.brassat at gmail dot com>

pkgname=gnome-shell-extension-arc-menu
_pkgbase=ArcMenu
pkgver=32
pkgrel=1
pkgdesc="Application Menu Extension for GNOME"
arch=('any')
url="https://gitlab.com/arcmenu/ArcMenu"
license=('GPL2')
depends=('dconf' 'gnome-shell' 'gnome-menus')
conflicts=('gnome-shell-extension-arc-menu-git')

source=("${url}/-/archive/v${pkgver}/${_pkgbase}-v${pkgver}.tar.gz")
sha256sums=('d4beb3ee6cf71e338b3c6ff46e4d97e6e7b1ad90398cc27a0690a18d5f86ad59')

build() {
  cd "${_pkgbase}-v${pkgver}"
  make mergepo \
    && make VERSION="${pkgver}" _build
}

package() {
  cd "${_pkgbase}-v${pkgver}/_build"
  local _uuid=$(grep -Po '(?<="uuid": ")[^"]*' metadata.json)
  local _destdir="${pkgdir}/usr/share/gnome-shell/extensions/${_uuid}"

  install -Dm644 -t "${_destdir}" metadata.json *.js *.css
  cp -r --no-preserve=ownership,mode media "${_destdir}"
  cp -r --no-preserve=ownership,mode menulayouts "${_destdir}"
  cp -r --no-preserve=ownership,mode searchProviders "${_destdir}"
  install -Dm644 -t "${pkgdir}/usr/share/glib-2.0/schemas/" schemas/*.xml

  cd locale
  for locale in */
    do
      install -Dm644 -t "${pkgdir}/usr/share/locale/${locale}/LC_MESSAGES" "${locale}/LC_MESSAGES"/*.mo
    done
}
