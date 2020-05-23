# Maintainer: Syaoran Code <syaorancode@gmail.com>

pkgname=scrcast-git
_dir=scrcast
pkgver=.r3.42ab51c
pkgrel=1
pkgdesc="A simple screencast script using ffmpeg."
arch=('any')
url="https://gitlab.com/justanoobcoder/scrcast.git"
license=('MIT')
depends=(bash ffmpeg xorg-xrandr)
makedepends=(make)
source=("git+$url")
md5sums=('SKIP')

pkgver() {
    cd "${_dir}"
    printf "%s.r%s.%s" "$(awk '/VERSION/ {print $2}' scrcast)" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd "${_dir}"
  make DESTDIR="$pkgdir" install
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
