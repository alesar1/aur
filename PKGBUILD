# Maintainer: Brandon Mittman <brandonmittman at gmail dot com>
# Contributor: Dolores Portalatin <meskarune at gmail dot com>
# Contributor: burntcookie90 <aur at vishnurajeevan dot com>
_gitname=swaylock-fancy
pkgname=swaylock-fancy-git
pkgver=r171.ca25a05
pkgrel=1
pkgdesc="Blurs and pixelates background, adds lock icon and text, for sway."
arch=('i686' 'x86_64')
url="https://github.com/Big-B/swaylock-fancy"
license=('MIT')
depends=('coreutils' 'awk' 'bash' 'util-linux' 'imagemagick' 'swaylock' 'grim')
optdepends=('wmctrl: minimize windows before locking')
makedepends=('git')
provides=('swaylock-fancy')
source=("git+https://github.com/Big-B/$_gitname.git")
md5sums=('SKIP')

pkgver() {
  cd "$_gitname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
    cd "${srcdir}/$_gitname"
    DESTDIR="$pkgdir" make install
}
