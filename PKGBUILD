# Contributor: Alex Suykov <axs@ukr.net>

pkgname=ttf-code2002
epoch=1
pkgver=0.920
pkgrel=1
pkgdesc="beta test font for Plane Two"
arch=('any')
url="https://www.code2001.com/"
license=('custom')
source=('http://www.code2001.com/CODE2002.ZIP')
md5sums=('48ed770b31da150f09b3fda45729c7c4')
sha256sums=('e6f0bb3f0681642cc18b83599bd345160841ae208db938a771509ad06871c8c2')
sha512sums=('5862e794c8a69db76723f00f70428a78aa0bc2b6e057828f560d2985e5237ac100647d4305b0b248a8907313e7efd1fbe8c43414e19ae0762f62fbf5ef2527e3')

package() {
  install -D -m644 CODE2002.TTF "$pkgdir/usr/share/fonts/TTF/Code2002.ttf"
}
