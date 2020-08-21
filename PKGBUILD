# Maintainer: Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=ex-impression-icon-theme-git
pkgver=r8.077dfbf
pkgrel=1
pkgdesc='This icon theme got inspired on Mac OS icons and mimics those for the Linux OS'
arch=('any')
url='https://github.com/balasakthi88/EX-Impression'
license=('GPL3')
provides=("${pkgname%-*}" "${pkgname}")
conflicts=("${pkgname%-*}" "${pkgname}")
options=('!strip')
makedepends=('git')
source=("${pkgname%-git}::git+${url}")
sha256sums=('SKIP')

pkgver() {
  cd "${pkgname%-git}"
  echo "r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

prepare() {
  cd "${pkgname%-git}"
  rm *.md
  rm LICENSE
  rm -rf "theme extras"
  rm -rf .git
}

package() {
  install -dm755 "${pkgdir}/usr/share/icons/"
  cp -drf --no-preserve='ownership' . "${pkgdir}/usr/share/icons/"
}
# vim:set ts=2 sw=2 et: