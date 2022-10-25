# Maintainer: 0b100100 <0b100100 at protonmail dot ch>
# Contributor: Ashley Roll (ash@digitalnemesis.com)
# Contributor: Erez Raviv (erezraviv@gmail.com)

pkgname=chirp-daily
pkgver=20221025
pkgrel=1
pkgdesc="GUI tool for programming ham radios, built from daily build"
arch=('any')
url="https://chirp.danplanet.com"
license=('GPL3')
depends=('python2-lxml' 'python2-pyserial' 'pygtk')
optdepends=('hamradio-menus: XDG menus for ham radio software')
options=(!emptydirs)
conflicts=(chirp)
provides=(chirp)
install=$pkgname.install
source=("https://trac.chirp.danplanet.com/chirp_daily/daily-$pkgver/chirp-daily-$pkgver.tar.gz")
# Checksum: https://trac.chirp.danplanet.com/chirp_daily/daily-$pkgver/SHA1SUM
sha1sums=('0bf22888fca3475b7f15ec7f2744fe5df7eb8e0e')

build() {
  cd "$pkgname-$pkgver"
  python2 setup.py build
}

package() {
  cd "$pkgname-$pkgver"
  python2 setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}

# vim:set ts=2 sw=2 et:
