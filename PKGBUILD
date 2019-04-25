# Maintainer: Philipp Schaffrath <aur at philipp dot schaffrath dot email>

pkgname=giph-git
pkgver=r44.0a55fca
pkgrel=1
pkgdesc='gif recorder that records the desktop, a window or a selection'
url='https://github.com/phisch/giph'
license=('MIT')
arch=('any')
depends=('bash' 'ffmpeg' 'grep' 'gawk')
optdepends=('slop: for interactive selection'
            'xorg-xwininfo: for window or desktop recording'
            'zenity: for a graphical user interface'
            'gifski: if the gifs should be encoded with gifski instead of ffmpeg')
makedepends=('git')
provides=('giph')
conflicts=('giph')
source=("$pkgname::git://github.com/phisch/giph.git")
sha256sums=('SKIP')

pkgver() {
  cd "$pkgname"
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

package() {
    cd "$pkgname"
    make DESTDIR="${pkgdir}" install
    install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}