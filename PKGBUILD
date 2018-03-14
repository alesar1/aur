# Maintainer: Alex S. shantanna_at_hotmail_dot_com>

pkgname=gnome-shell-extension-night-light-slider-git
_pkgname=gnome-shell-night-light-slider-extension
pkgver=v7.0.r0.g0d2036d
pkgrel=0
pkgdesc="Manage GNOME night light temperature intensity from the panel."
arch=('any')
url="https://github.com/TimurKiyivinski/gnome-shell-night-light-slider-extension"
license=('unknow')
depends=('gnome-shell')
makedepends=('git')
source=('git+https://github.com/TimurKiyivinski/gnome-shell-night-light-slider-extension.git')
sha256sums=('SKIP')

pkgver() {
  cd $_pkgname
  git describe --long --tags | sed -r 's/([^-]*-g)/r\1/;s/-/./g'
}

package() {
  _extid='night-light-slider.timur@linux.com'
  cd "${srcdir}/${_pkgname}"
  make schema

  install -d "${pkgdir}/usr/share/gnome-shell/extensions"
  cp -af "${_extid}" "${pkgdir}/usr/share/gnome-shell/extensions/" 
}
