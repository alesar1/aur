# Maintainer: Harry Jeffery <harry|@|exec64|.|co|.|uk>
# Contributor: Alex Jordan <alexander3223098@gmail.com>
pkgname=zerotier-one
pkgver=1.0.2
pkgrel=1
pkgdesc="Creates virtual Ethernet networks of almost unlimited size."
arch=('i686' 'x86_64')
url="https://www.zerotier.com/index.html"
license=('GPL3')
groups=()
depends=()
depends_x86_64=('gcc-libs-multilib')
depends_i686=('gcc-libs')
makedepends=()
source=("https://github.com/zerotier/ZeroTierOne/archive/$pkgver.tar.gz")
sha1sums=("e6b8ef6a0afa501de9bc76dc40224965867fbc5f")

build() {
  cd "$srcdir/ZeroTierOne-$pkgver"
  make
}

check() {
  cd "$srcdir/ZeroTierOne-$pkgver"
  make selftest
}

package() {
  cd "$srcdir/ZeroTierOne-$pkgver"
  mkdir -p $pkgdir/var/lib/zerotier-one $pkgdir/usr/bin $pkgdir/usr/lib/systemd/system
  install zerotier-one $pkgdir/var/lib/zerotier-one
  install ext/installfiles/linux/systemd/zerotier-one.service $pkgdir/usr/lib/systemd/system
  cd $pkgdir/usr/bin
  ln -s ../../var/lib/zerotier-one/zerotier-one zerotier-cli
  ln -s ../../var/lib/zerotier-one/zerotier-one zerotier-idtool
}
