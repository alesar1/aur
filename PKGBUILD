# Maintainer: Dylan Araps <dylan.araps@gmail.com>
pkgname=neofetch
pkgver=1.9
pkgrel=1
pkgdesc="CLI script to show your system's info and display an image using w3m."
arch=('any')
url="https://github.com/dylanaraps/$pkgname"
license=('MIT')
conflicts=(${pkgname}-git)
depends=('bash')
optdepends=(
  'amarok: Current Song'
  'banshee: Current Song'
  'cmus: Current Song'
  'deadbeef: Current Song'
  'feh: Wallpaper Display'
  'gpmdp-remote: Current Song'
  'imagemagick: Image cropping / Thumbnail creation'
  'moc: Current Song'
  'mpc: Current Song'
  'nitrogen: Wallpaper Display'
  'rhythmbox: Current Song'
  'scrot: Take a screenshot'
  'spotify: Current Song'
  'w3m: Display Images'
  'xdotool: See https://github.com/dylanaraps/neofetch/wiki/Images-in-the-terminal'
  'xorg-xdpyinfo: Resolution detection (Single Monitor)'
  'xorg-xprop: Desktop Environment and Window Manager'
  'xorg-xrandr: Resolution detection (Multi Monitor + Refresh rates)'
  'xorg-xwininfo: See https://github.com/dylanaraps/neofetch/wiki/Images-in-the-terminal'
)
source=("https://github.com/dylanaraps/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=('950cd551842d31e118213fdb56fbd632')

package() {
  cd "$srcdir/$pkgname-$pkgver/"
  make DESTDIR="${pkgdir}" install
  install -D -m644 LICENSE.md "$pkgdir/usr/share/licenses/${pkgname}/LICENSE.md"
}
