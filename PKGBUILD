# Maintainer: Edward Pacman <edward at edward-p dot xyz>
# Maintainer: lilac <lilac@build.archlinuxcn.org>

pkgname=wps-dark-theme-hook
pkgver=1
pkgrel=1
pkgdesc="Pacman hook that force wps-office using gtk style with Adwaita \
to avoid issues under dark themes"
arch=('any')
url="https://aur.archlinux.org/packages/${pkgname}"
license=('GPL')
depends=('wps-office')
install=wps-dark-theme-hook.install
source=('wps-dark-theme.hook')
sha256sums=('a9f6d1bf014c9080abed88a4d4c6bd02485f98d9fd618badd65ebb19bae67fa8')

package() {
  install -Dm644 "${srcdir}/wps-dark-theme.hook" "${pkgdir}/usr/share/libalpm/hooks/wps-dark-theme.hook"
}
