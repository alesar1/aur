# Maintainer : Arnaud Dovi <mr.dovi@gmail.com>
# Contributor: Dimitris Kiziridis <ragouel at outlook dot com>
# Contributor: Robosky <fangyuhao0612@gmail.com>

pkgname=mcmojave-circle-icon-theme-git
pkgver=2020.10.11.r13.722bb49a
pkgrel=1
pkgdesc="MacOSX Mojave like circle icon theme for linux desktops"
arch=('any')
makedepends=('git' 'gtk-update-icon-cache')
optdepends=('mojave-gtk-theme-git: Recommended GTK theme')
license=('GPL3')
url="https://github.com/vinceliuice/McMojave-circle"
source=("mcmojave-circle-icon-theme::git+${url}")
sha256sums=('SKIP')
options=('!strip')

pkgver() {
  cd "${pkgname/-git/}" || exit
  printf "%s" "$(git describe --long --tags | sed 's/^v//;s/\([^-]*-\)g/r\1/;s/-/./g')"
}

package() {
  cd "${pkgname/-git/}" || exit
  install -dm755 "${pkgdir}/usr/share/icons"
  ./install.sh  \
    --all \
    --dest "${pkgdir}/usr/share/icons"
}