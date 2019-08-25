# Maintainer: Helder Bertoldo <helder.bertoldo@gmail.com>
# Contributor: 

_gitname=default-settings
_author=elementary
pkgname=pantheon-default-settings
pkgver=5.1.1
pkgrel=1
pkgdesc="Default settings for Pantheon"
arch=('any')
url="https://github.com/${_author}/${_gitname}"
license=('GPL3')
groups=('pantheon-stable')
depends=('elementary-icon-theme' 'gtk-theme-elementary'
         'elementary-wallpapers' 'ttf-droid' 'ttf-opensans')
provides=('pantheon-default-settings')
conflicts=('pantheon-default-settings')
provides=("${_gitname}")
conflicts=("${_gitname}-git")
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/${pkgver}.tar.gz")
sha1sums=("1f2e3499b1c2d820743714318b1f396876f5b948")

package() {
  cd "${srcdir}/${_gitname}-${pkgver}"

  install -Dm 644 overrides/default-settings.gschema.override "${pkgdir}"/usr/share/glib-2.0/schemas/25_pantheon-default-settings.gschema.override
  install -Dm 644 settings.ini -t "${pkgdir}"/etc/gtk-3.0/
  install -dm 755 "${pkgdir}"/etc/skel/.config
  cp -dr --no-preserve='ownership' plank "${pkgdir}"/etc/skel/.config/
  cp -dr --no-preserve='ownership' profile.d "${pkgdir}"/etc/
}

