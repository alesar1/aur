# Maintainer: Alex S. shantanna_at_hotmail_dot_com>

pkgname=gnome-shell-extension-cpufreq-git
_pkgname=cpufreq
pkgver=v26.0.r6.gf576336
pkgrel=0
pkgdesc="Gnome Shell CPU Frequency Monitor and Governor Manager."
arch=('any')
url="https://github.com/konkor/cpufreq"
license=('GPL3')
depends=('gnome-shell')
makedepends=('git')
source=('git+https://github.com/konkor/cpufreq.git')
sha256sums=('SKIP')

pkgver() {
  cd $_pkgname
  git describe --long --tags | sed -r 's/([^-]*-g)/r\1/;s/-/./g'
}

package() {
  _extid='cpufreq@konkor'
  mkdir -p "${pkgdir}/usr/share/gnome-shell/extensions/"
  cp -af "${_pkgname}" "${pkgdir}/usr/share/gnome-shell/extensions/"
  mv "${pkgdir}/usr/share/gnome-shell/extensions/${_pkgname}" "${pkgdir}/usr/share/gnome-shell/extensions/${_extid}" 
}
