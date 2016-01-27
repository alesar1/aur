# Maintainer: Dylan Araps <dyl@tfwno.gf>
pkgname=fetch-git
_pkgname=fetch
pkgver=0.2.1.r88.gea3508f
pkgrel=1
pkgdesc="CLI script to show your system's info and display an image using w3m."
arch=('any')
url="https://github.com/dylanaraps/fetch"
provides=($_pkgname)
conflicts=($_pkgname)
depends=('bash' 'ncurses')
optdepends=(
    'w3m: Display Images'
    'imagemagick: Image cropping / Thumbnail creation'
    'feh: Wallpaper Display or'
    'nitrogen: Wallpaper Display'
    'mpc: Current Song or'
    'cmus: Current Song'
    'xorg-xdpyinfo: Resolution Detection'
    'wmctrl: Accurate window manager detection'
    'scrot: Take a screenshot'
)
makedepends=('git')
source=("$pkgname::git+https://github.com/dylanaraps/fetch.git")
md5sums=('SKIP')

pkgver() {
  cd $pkgname
  git describe --tags --long | sed -r -e 's,^[^0-9]*,,;s,([^-]*-g),r\1,;s,[-_],.,g'
}

package() {
  cd $pkgname
  install -Dm755 "fetch" "$pkgdir/usr/bin/fetch"
}
