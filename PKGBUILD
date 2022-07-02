# Maintainer: Gustavo Castro < gustawho [ at ] gmail [ dot ] com >

pkgname=tok-git
pkgver=r299.54f2413
pkgrel=4
pkgdesc="Telegram client built using Kirigami"
arch=(x86_64 i686 arm armv6h armv7h aarch64)
url="https://invent.kde.org/network/tok"
license=('GPL3')
depends=('kirigami2' 'knotifications' 'libtd-git' 'ki18n' 'icu' 'rlottie-git'
         'kconfigwidgets' 'kitemmodels' 'syntax-highlighting' 'kquickchatcomponents-git')
makedepends=('git' 'qt5-tools' 'qt5-svg' 'qbs-git' 'jq' 'extra-cmake-modules')
provides=('tok')
conflicts=('tok')
source=("git+${url}.git")
md5sums=('SKIP')

pkgver() {
  cd "${pkgname%-git}"
  ( set -o pipefail
    git describe --long --tags --first-parent --match 'v[0-9][0-9.][0-9.]*' | \
      sed 's=^v==;s=^\([0-9][0-9.]*\)-\([a-zA-Z]\+\)=\1\2=;s=\([0-9]\+-g\)=r\1=;s=-=.=g'
  )
}

build() {
  cd "${pkgname%-git}"
  qbs build --no-install qbs.installPrefix:/usr
}

package() {
  cd "${pkgname%-git}"
  qbs install --no-build --install-root "${pkgdir}"
}
